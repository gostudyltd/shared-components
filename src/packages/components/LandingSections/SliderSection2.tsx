import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { MutableRefObject, useEffect, useState } from "react";
import { SectionContainerWrapperColorized } from "./components/SectionContainerWrapperColorized";
import { AccentColor, SectionTitleProps } from "./components/types";
import { SectionTitle } from "./components/SectionTitle";
import { SectionContainer } from "./components/SectionContainer";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "swiper/css";
import "swiper/css/effect-fade";
import { SwiperSlide, Swiper } from "swiper/react";
import { SliderNavigation } from "../SectionSliderNavigation";
import {
  SectionCard3,
  SectionCard3Props,
} from "./components/Cards/SectionCard3";

export type SliderSection2Props = {
  accentColor?: AccentColor;
  sectionTitle: SectionTitleProps;
  data: SectionCard3Props[];
  gradientBg?: boolean;
  withoutSlider?: boolean;
  nodeRef?: MutableRefObject<HTMLDivElement | null>;
};

type SliderButtonsProps = {
  next: {
    onClick: () => void;
    disabled?: boolean;
  };
  prev: {
    onClick: () => void;
    disabled?: boolean;
  };

  accentColor: AccentColor;
};

const SliderButtons: React.FC<SliderButtonsProps> = ({
  next,
  prev,
  accentColor,
}) => {
  return (
    <>
      <Stack
        direction={"row"}
        gap={"1.25rem"}
        sx={{
          display: { xs: "none", sm: "flex" },
          ml: "auto",
          alignSelf: "center",
        }}
      >
        <Button
          disabled={prev.disabled}
          color={accentColor === "warning" ? "warning" : "primary"}
          sx={{
            width: "2rem",
            height: "2rem",
            borderRadius: "100%",
            minWidth: "inherit",
            opacity: prev.disabled ? ".3" : "1",
          }}
          onClick={prev.onClick}
        >
          <ArrowBackIosRoundedIcon sx={{ height: "1.5rem", width: "1.5rem" }} />
        </Button>
        <Button
          disabled={next.disabled}
          color={accentColor === "warning" ? "warning" : "primary"}
          sx={{
            width: "2rem",
            height: "2rem",
            borderRadius: "100%",
            minWidth: "inherit",
            transform: "rotate(180deg)",
            opacity: next.disabled ? ".3" : "1",
          }}
          onClick={next.onClick}
        >
          <ArrowBackIosRoundedIcon sx={{ height: "1.5rem", width: "1.5rem" }} />
        </Button>
      </Stack>
    </>
  );
};

const checkIfMobile = (window: Window): boolean => {
  if (typeof window !== "undefined" && document.body.clientWidth <= 1024)
    return true;

  return false;
};

export const SliderSection2: React.FC<SliderSection2Props> = ({
  accentColor = "primary",
  gradientBg,
  sectionTitle,
  withoutSlider = false,
  data,
  nodeRef,
}) => {
  const slidesPerView = 3;
  const slidesPerViewMob = 1;
  // it changes on mobile devices
  const [activeSlidePerView, setActiveSlidesPerView] = useState(3);

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [contentSwiper, setContentSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handlePrev = () => {
    if (contentSwiper) contentSwiper.slidePrev();
  };

  const handleNext = () => {
    if (contentSwiper) contentSwiper.slideNext();
  };

  const handleSlideChange = (nextSlide: number) => {
    if (contentSwiper) contentSwiper.slideTo(nextSlide);
  };
  return (
    <SectionContainerWrapperColorized
      accentColor={accentColor}
      gradientBg={gradientBg}
      nodeRef={nodeRef}
    >
      <SectionContainer>
        <SectionTitle
          renderButtons={() => {
            return !withoutSlider ? (
              <SliderButtons
                accentColor={accentColor}
                prev={{ onClick: handlePrev, disabled: activeSlide === 0 }}
                next={{
                  onClick: handleNext,
                  disabled:
                    activeSlide + (activeSlidePerView - 1) === data.length - 1,
                }}
              />
            ) : (
              <></>
            );
          }}
          accentColor={accentColor}
          wrapperSx={{ marginBottom: { xs: "2rem", sm: "3.75rem" } }}
          {...sectionTitle}
        />

        <Stack
          direction={contentSwiper ? "row" : "column"}
          // sx={
          //   withoutSlider
          //     ? {
          //         '& .swiper-wrapper': { flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '.5rem', sm: '0' } },
          //         '& .swiper-slide': { height: { xs: 'fit-content', sm: '100%' } },
          //       }
          //     : {}
          // }
        >
          {" "}
          <Swiper
            onSwiper={(swiper) => {
              setActiveSlidesPerView(checkIfMobile(window) ? 1 : 3);
              setContentSwiper(swiper);
            }}
            // allowTouchMove={!withoutSlider}
            spaceBetween={"20px"}
            slidesPerView={activeSlidePerView}
            onSlideChange={(swiperInstance) => {
              if (swiperInstance) {
                setActiveSlide(swiperInstance.activeIndex);
              }
            }}
            initialSlide={0}
          >
            {contentSwiper ? (
              <>
                {data.map((item) => (
                  <SwiperSlide
                    key={item.author}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <SectionCard3
                      key={item.text}
                      accentColor={accentColor}
                      {...item}
                    />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <Stack
                direction={"row"}
                gap={"20px"}
                width={{ xs: "100%", sm: "100%" }}
              >
                {data.slice(0, 3).map((item, idx) => (
                  <SectionCard3
                    key={item.text}
                    accentColor={accentColor}
                    {...item}
                    sx={{
                      display: { sm: "flex", xs: idx > 0 ? "none" : "flex" },
                      width: { sm: "33.333%", xs: "100%" },
                      height: "inherit",
                    }}
                  />
                ))}
              </Stack>
            )}
          </Swiper>
        </Stack>

        <SliderNavigation
          accentColor={accentColor}
          activeSlide={activeSlide}
          slideCount={data.length - activeSlidePerView + 1}
          sx={{
            display: { xs: "flex", sm: withoutSlider ? "none" : "flex" },
            marginTop: {
              xs: "1.5rem",
              sm: "2.75rem",
              transition: "opacity .2s linear",
              opacity: contentSwiper ? "1" : "0",
            },
          }}
          changeSlide={handleSlideChange}
        />
      </SectionContainer>
    </SectionContainerWrapperColorized>
  );
};
