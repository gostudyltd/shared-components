import { alpha, Box, Button, Stack, SxProps, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { accentColorBase } from "./components/utils";
import { SwiperSlide, Swiper } from "swiper/react";
import { AccentColor } from "./components";
import { CdnImage } from "../../types/components";
import { ImageWithColorizedBorder } from "./ImageWithColorizedBorder";
import { montserratFamily } from "../../constants/themeVars";
import { SliderNavigation } from "../SectionSliderNavigation";

const animationSpeed = 0.3; // sec

type BottomSliderButtonProps = {
  accentColor: AccentColor;
  onClick: () => void;
  reverted?: boolean;
  disabled?: boolean;
  sx?: SxProps;
};

const BottomSliderButton: React.FC<BottomSliderButtonProps> = ({
  accentColor,
  onClick,
  disabled,
  reverted,
  sx = {},
}) => {
  return (
    <Button
      disabled={disabled}
      color={accentColor === "warning" ? "warning" : "primary"}
      sx={{
        width: "2rem",
        height: "2rem",
        borderRadius: "100%",
        minWidth: "inherit",
        opacity: disabled ? ".3" : "1",
        transform: reverted ? "rotate(180deg)" : "",
        ...sx,
      }}
      onClick={onClick}
    >
      <ArrowBackIosRoundedIcon
        sx={{ width: "1.5rem", height: "1.5rem", fill: "#FFFFFF" }}
      />
    </Button>
  );
};

type BottomSliderProps = {
  accentColor: AccentColor;
  sliderData: CdnImage[];
  color?: string;
};

export const Slider: React.FC<BottomSliderProps> = ({
  sliderData,
  accentColor,
  color,
}) => {
  const [activeSlideIdx, setActiveSlide] = useState<number>(0);
  const slidesPerView = 3;
  const slidesPerViewMob = 1;
  const [activeSlidePerView, setActiveSlidesPerView] = useState(3);

  const maxSlideIdx = sliderData.length - slidesPerView;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [contentSwiper, setContentSwiper] = useState<Swiper | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrev = () => {
    if (contentSwiper) {
      if (activeSlideIdx % 3 === 0) {
        contentSwiper.slideTo(activeSlideIdx - 3);
        return;
      }
      if ((activeSlideIdx + 1) % 3 === 0) {
        contentSwiper.slideTo(activeSlideIdx - 2);
        return;
      }
      contentSwiper.slideTo(activeSlideIdx - 1);
    }
  };

  useEffect(() => {
    // if (!mounted) return
    const fn = () => {
      if (window.innerWidth >= 1024 && activeSlidePerView !== slidesPerView)
        setActiveSlidesPerView(slidesPerView);
      if (window.innerWidth < 1024 && activeSlidePerView !== slidesPerViewMob)
        setActiveSlidesPerView(slidesPerViewMob);
    };

    window.addEventListener("resize", fn);
    fn();
    return () => {
      window.removeEventListener("resize", fn);
    };
  }, [mounted, contentSwiper, activeSlidePerView]);

  const handleNext = () => {
    if (contentSwiper) {
      if (activeSlideIdx % 3 === 0) {
        contentSwiper.slideTo(activeSlideIdx + 3);
        return;
      }
      if ((activeSlideIdx - 1) % 3 === 0) {
        contentSwiper.slideTo(activeSlideIdx + 2);
        return;
      }
      contentSwiper.slideTo(activeSlideIdx + 1);
    }
  };

  const accent = accentColorBase[accentColor];

  const handleSlideChange = (nextSlide: number) => {
    if (contentSwiper) contentSwiper.slideTo(nextSlide);
  };

  return (
    <>
      <Stack direction={"row"} alignItems={"center"} sx={{ gap: "1.25rem" }}>
        {maxSlideIdx > 0 && activeSlidePerView !== slidesPerViewMob && (
          <BottomSliderButton
            accentColor={accentColor}
            onClick={handlePrev}
            disabled={activeSlideIdx === 0}
          />
        )}
        <Swiper
          onSwiper={setContentSwiper}
          spaceBetween={"20px"}
          speed={animationSpeed * 1000}
          slidesPerView={activeSlidePerView}
          onSlideChange={(swiperInstance) => {
            if (swiperInstance) {
              setActiveSlide(swiperInstance.activeIndex);
              contentSwiper.slideTo(swiperInstance.activeIndex);
            }
          }}
          initialSlide={0}
        >
          {contentSwiper ? (
            <>
              {sliderData.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    component={"div"}
                    role="button"
                    sx={{
                      minHeight: { xs: "unset", sm: "332px" },
                      transition: "all .1s linear",
                      cursor: "pointer",
                      "-webkit-tap-highlight-color": "transparent",
                      // width: contentSwiper ? 'auto' : '33.333%',
                    }}
                  >
                    <ImageWithColorizedBorder
                      image={data}
                      accentColor={accentColor}
                      imageSx={{
                        minHeight: { sm: "300px", objectFit: "cover" },
                      }}
                      sx={{
                        minHeight: { sm: "332px" },
                        // marginBottom: ".75rem",
                        display: { xs: "flex", sm: "flex" },
                        padding: ".75rem",
                        border: color
                          ? `2px solid ${color}`
                          : `2px solid ${alpha(accent.main, 0.3)}`,
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </>
          ) : (
            <Stack
              direction={"row"}
              gap={"20px"}
              width={{ xs: "100%", sm: "calc(100% - 40px)" }}
            >
              {sliderData.slice(0, 3).map((data, idx) => (
                <Box
                  key={idx}
                  display={"flex"}
                  flexDirection={"column"}
                  component={"div"}
                  role="button"
                  sx={{
                    transition: "all .1s linear",
                    cursor: "pointer",
                    "-webkit-tap-highlight-color": "transparent",
                    width: "33.3333%",
                  }}
                >
                  <ImageWithColorizedBorder
                    image={data}
                    accentColor={accentColor}
                    sx={{
                      marginBottom: ".75rem",
                      display: { xs: "none", sm: "flex" },
                      padding: { sm: ".75rem" },
                    }}
                  />
                </Box>
              ))}
            </Stack>
          )}
        </Swiper>
        {maxSlideIdx > 0 && activeSlidePerView !== slidesPerViewMob && (
          <BottomSliderButton
            accentColor={accentColor}
            onClick={handleNext}
            disabled={activeSlideIdx >= maxSlideIdx}
            reverted
          />
        )}
      </Stack>
      <SliderNavigation
        accentColor={accentColor}
        activeSlide={activeSlideIdx}
        slideCount={sliderData.length - activeSlidePerView + 1}
        inActiveColor="#FFF3E0"
        sx={{
          display: { xs: "flex", sm: "none" },
          marginTop: {
            xs: "1.5rem",
            sm: "2.75rem",
            transition: "opacity .2s linear",
            opacity: contentSwiper ? "1" : "0",
          },
        }}
        changeSlide={handleSlideChange}
      />
    </>
  );
};
