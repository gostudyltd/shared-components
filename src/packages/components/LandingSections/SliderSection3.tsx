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
import { Box, SxProps } from "@mui/material";
import { SectionTwoColumnsContainer } from "./components";

export type SliderSection3Props = {
  accentColor?: AccentColor;
  sectionTitle: SectionTitleProps;
  data: React.ReactNode[];
  mobileData?: React.ReactNode[];
  gradientBg?: boolean;
  withoutSlider?: boolean;
  nodeRef?: MutableRefObject<HTMLDivElement | null>;
  info: React.ReactNode;
  dataPerSlide?: number;
  wrapperSx?: SxProps;
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
          alignSelf: "flex-end",
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

export const SliderSection3: React.FC<SliderSection3Props> = ({
  accentColor = "primary",
  gradientBg,
  sectionTitle,
  withoutSlider = false,
  data,
  nodeRef,
  info,
  dataPerSlide,
  wrapperSx,
}) => {
  const slidesPerView = dataPerSlide ?? 1;
  const slidesPerViewMob = 1;
  // it changes on mobile devices
  const [activeSlidePerView, setActiveSlidesPerView] = useState(1);

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
      sx={wrapperSx}
    >
      <SectionContainer>
        <SectionTwoColumnsContainer
          sectionContainerSx={{
            alignItems: "flex-start",
            justifyContent: { xs: "flex-start", sm: "space-between" },
            marginBottom: {
              xs: "2rem",
              sm: "3.75rem",
            },
            padding: "0px !important",
          }}
          firstColumnSx={{ maxWidth: { sm: "674px" }, width: "100%" }}
          firstColumn={
            <SectionTitle
              accentColor={accentColor}
              textContainerSx={{
                alignItems: "flex-start",
                flexDirection: { xs: "column", sm: "row" },
                rowGap: "20px",
              }}
              {...sectionTitle}
            />
          }
          secondColumnSx={{ maxWidth: "378px" }}
          secondColumn={info}
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
                {data.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {item}
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <Stack
                direction={"row"}
                gap={"20px"}
                width={{ xs: "100%", sm: "100%" }}
              >
                {data[0]}
              </Stack>
            )}
          </Swiper>
        </Stack>

        {/* <SliderButtons
                accentColor={accentColor}
                prev={{ onClick: handlePrev, disabled: activeSlide === 0 }}
                next={{
                  onClick: handleNext,
                  disabled:
                    activeSlide + (activeSlidePerView - 1) === data.length - 1,
                }}
              /> */}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            marginTop: { xs: "24px", sm: "38px" },
          }}
        >
          <Button
            disabled={activeSlide === 0}
            color={accentColor === "warning" ? "warning" : "primary"}
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "2rem",
              height: "2rem",
              borderRadius: "100%",
              minWidth: "inherit",
              opacity: activeSlide === 0 ? ".3" : "1",
            }}
            onClick={handlePrev}
          >
            <ArrowBackIosRoundedIcon
              sx={{ height: "1.5rem", width: "1.5rem" }}
            />
          </Button>
          <SliderNavigation
            accentColor={accentColor}
            activeSlide={activeSlide}
            slideCount={data.length - activeSlidePerView + 1}
            sx={{
              display: { xs: "flex", sm: withoutSlider ? "none" : "flex" },
              // marginTop: {
              // xs: "24px",
              // sm: "2.75rem",
              width: "100%",
              transition: "opacity .2s linear",
              opacity: contentSwiper ? "1" : "0",
              // },
            }}
            changeSlide={handleSlideChange}
          />
          <Button
            disabled={
              activeSlide + (activeSlidePerView - 1) === data.length - 1
            }
            color={accentColor === "warning" ? "warning" : "primary"}
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "2rem",
              height: "2rem",
              borderRadius: "100%",
              minWidth: "inherit",
              transform: "rotate(180deg)",
              opacity:
                activeSlide + (activeSlidePerView - 1) === data.length - 1
                  ? ".3"
                  : "1",
            }}
            onClick={handleNext}
          >
            <ArrowBackIosRoundedIcon
              sx={{ height: "1.5rem", width: "1.5rem" }}
            />
          </Button>
        </Box>
      </SectionContainer>
    </SectionContainerWrapperColorized>
  );
};
