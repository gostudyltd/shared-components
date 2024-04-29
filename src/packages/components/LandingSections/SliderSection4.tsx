import React, { MutableRefObject, useEffect, useMemo, useState } from "react";
import { SectionContainer } from "./components/SectionContainer";
import { AccentColor, SectionTitleProps } from "./components/types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";

import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { SectionTwoColumnsContainer } from "./components/SectionTwoColumnsContainer";
import { accentColorBase } from "./components/utils";
import { montserratFamily } from "../../constants/themeVars";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { CdnImage } from "../../types/components";
import { ImageWithColorizedBorder } from "./ImageWithColorizedBorder";
import { SectionContainerWrapperColorized, SectionTitle } from "./components";
import { SliderSection3 } from "./SliderSection3";

const animationSpeed = 0.3; // sec

type DataItem = {
  image: CdnImage;
};

type ExtendedDataItem = DataItem & { idx: number };

type TabData = {
  tabName: string;
  list: DataItem[];
};

type ExtendedTabData = TabData & { idx: number };

type TabButtonProps = {
  text: string;
  accentColor?: AccentColor;
  onClick: (idx: number) => void;
  isActive?: boolean;
  idx: number;
};

const TabButton: React.FC<TabButtonProps> = ({
  text,
  onClick,
  isActive,
  accentColor,
  idx,
}) => {
  const color = accentColor || "primary";
  const handleClick = () => {
    onClick(idx);
  };

  return (
    <Button
      variant={isActive ? "contained" : "outlined"}
      color={color}
      onClick={handleClick}
      sx={{
        border: isActive ? "1px solid transparent" : undefined,
        boxShadow: "none",
        padding: "0.5rem 1rem",
        borderRadius: "1.25rem",
        "&:hover,&:focus": {
          boxShadow: "none",
        },
        marginRight: "0.625rem",
      }}
    >
      {text}
    </Button>
  );
};

type TabsProps = {
  tabsData: ExtendedTabData[];
  onClick: (idx: number) => void;
  activeId: number;
  accentColor?: AccentColor;
};

const Tabs: React.FC<TabsProps> = ({
  tabsData,
  onClick,
  activeId,
  accentColor = "primary",
}) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        justifyContent: { xs: "flex-start", sm: "center" },
        marginBottom: { xs: "1.5rem", sm: "3.75rem" },
      }}
    >
      {tabsData.map((tab) => (
        <TabButton
          key={tab.tabName}
          text={tab.tabName}
          idx={tab.idx}
          accentColor={accentColor}
          onClick={onClick}
          isActive={tab.idx === activeId}
        />
      ))}
    </Stack>
  );
};

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
        transform: reverted ? "rotate(270deg)" : "rotate(90deg)",
        ...sx,
      }}
      onClick={onClick}
    >
      <ArrowBackIosRoundedIcon sx={{ width: "1.5rem", height: "1.5rem" }} />
    </Button>
  );
};

type SliderSectionContentProps = {
  sliderData: ExtendedDataItem[];
  accentColor: AccentColor;
  isActive?: boolean;
};

type BottomSliderProps = SliderSectionContentProps & {
  onSlideChange: (activeSlideId: number) => void;
  activeMainSlideIdx: number;
};

const BottomSlider: React.FC<BottomSliderProps> = ({
  sliderData,
  accentColor,
  onSlideChange,
  activeMainSlideIdx,
}) => {
  const [activeSlideIdx, setActiveSlide] = useState<number>(0);
  const slidesPerView = 2;
  const maxSlideIdx = sliderData.length - slidesPerView;

  const handleSlideChange = (nextSlide: number) => {
    if (contentSwiper) contentSwiper.slideTo(nextSlide);
  };
  useEffect(() => {
    if (activeMainSlideIdx < activeSlideIdx) {
      handleSlideChange(activeMainSlideIdx);
    }
    if (activeMainSlideIdx >= activeSlideIdx + 3) {
      handleSlideChange(activeMainSlideIdx - 2);
    }
  }, [activeMainSlideIdx]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [contentSwiper, setContentSwiper] = useState<Swiper | null>(null);

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
  return (
    <Stack
      alignItems={"center"}
      sx={{
        gap: "1.25rem",
        "& .swiper": { height: "456px", width: "auto" },
        flexShrink: "0",
      }}
    >
      {maxSlideIdx > 0 && (
        <BottomSliderButton
          accentColor={accentColor}
          onClick={handlePrev}
          disabled={activeSlideIdx === 0}
        />
      )}
      <Swiper
        direction="vertical"
        onSwiper={setContentSwiper}
        spaceBetween={"16px"}
        speed={animationSpeed * 1000}
        slidesPerView={slidesPerView}
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
            {sliderData.map((data) => (
              <SwiperSlide key={data.idx}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  component={"div"}
                  role="button"
                  onClick={() => onSlideChange(data.idx)}
                  sx={{
                    // minHeight: { xs: "unset", sm: "295px" },
                    opacity: activeMainSlideIdx === data.idx ? ".6" : "1",
                    transition: "all .1s linear",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: activeMainSlideIdx === data.idx ? ".6" : ".9",
                    },
                    "-webkit-tap-highlight-color": "transparent",
                    // width: contentSwiper ? 'auto' : '33.333%',
                  }}
                >
                  <ImageWithColorizedBorder
                    image={{ ...data.image, width: 304, height: 192 }}
                    accentColor={accentColor}
                    sx={{
                      width: "fit-content",
                      height: "fit-content",
                      marginBottom: ".75rem",
                      display: { xs: "none", sm: "flex" },
                      padding: { sm: ".75rem" },
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
            {sliderData.slice(0, 3).map((data) => (
              <Box
                key={data.idx}
                display={"flex"}
                flexDirection={"column"}
                component={"div"}
                role="button"
                onClick={() => onSlideChange(data.idx)}
                sx={{
                  opacity: activeMainSlideIdx === data.idx ? ".6" : "1",
                  transition: "all .1s linear",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: activeMainSlideIdx === data.idx ? ".6" : ".9",
                  },
                  "-webkit-tap-highlight-color": "transparent",
                  width: "33.3333%",
                }}
              >
                <ImageWithColorizedBorder
                  image={data.image}
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
      {maxSlideIdx > 0 && (
        <BottomSliderButton
          accentColor={accentColor}
          onClick={handleNext}
          disabled={activeSlideIdx >= maxSlideIdx}
          reverted
        />
      )}
    </Stack>
  );
};

const SliderSection4Content: React.FC<SliderSectionContentProps> = ({
  sliderData,
  accentColor,
  isActive,
}) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const accent = accentColorBase[accentColor];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [contentSwiper, setContentSwiper] = useState<Swiper | null>(null);

  const handleSlideChange = (nextSlide: number) => {
    if (contentSwiper) contentSwiper.slideTo(nextSlide);
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        position: isActive ? "static" : "absolute",
        gap: "40px",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: isActive ? 2 : 1,
        // display: isActive ? 'flex' : 'none',
        opacity: isActive ? 1 : 0,
        //  position: isActive ? 'static' : 'absolute', transition: 0
        transition: "all .1s linear",
      }}
    >
      <Stack
        sx={{
          // marginBottom: {
          //   xs: "1.5rem",
          //   sm: "3.75rem",
          // },
          height: "100%",
          maxHeight: "560px",
          "& swiper": {
            height: "100%",
            maxHeight: "560px",
          },
        }}
        flexShrink={1}
      >
        <Swiper
          direction="vertical"
          onSwiper={setContentSwiper}
          spaceBetween={"0px"}
          speed={animationSpeed * 1000}
          onSlideChange={(swiperInstance) => {
            if (swiperInstance) {
              setActiveSlideIdx(swiperInstance.activeIndex);
            }
          }}
          initialSlide={0}
        >
          {sliderData.map((data) => (
            <SwiperSlide key={data.idx}>
              <SectionContainer
                disableContainerPaddings
                sx={{ height: "100%" }}
              >
                <ImageWithColorizedBorder
                  image={data.image}
                  imageSx={{ height: "100%", objectFit: "cover" }}
                  accentColor={accentColor}
                  sx={{ wdith: "100%", height: "100%" }}
                />
              </SectionContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <BottomSlider
        sliderData={sliderData}
        accentColor={accentColor}
        onSlideChange={handleSlideChange}
        activeMainSlideIdx={activeSlideIdx}
      />
    </Stack>
  );
};

export type SliderSection4Props = {
  sectionTitle: SectionTitleProps;
  accentColor?: AccentColor;
  data: TabData[];
  gradientBg?: boolean;
  nodeRef?: MutableRefObject<HTMLDivElement | null>;
  info: React.ReactNode;
  wrapperSx?: SxProps;
};
export const SliderSection4: React.FC<SliderSection4Props> = ({
  accentColor = "primary",
  data,
  sectionTitle,
  gradientBg,
  nodeRef,
  info,
  wrapperSx,
}) => {
  const extendedTabData = useMemo<ExtendedTabData[]>(
    () => data.map((st, idx) => ({ ...st, idx })),
    [data]
  );

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const handleTabChange = (tabIdx: number) => {
    setActiveTabIdx(tabIdx);
  };

  const sliderData = useMemo<ExtendedDataItem[]>(
    () => extendedTabData[activeTabIdx].list.map((i, idx) => ({ ...i, idx })),
    [activeTabIdx, extendedTabData]
  );

  const checkIfMobile = (window: Window): boolean => {
    if (typeof window !== "undefined" && document.body.clientWidth <= 1024)
      return true;

    return false;
  };

  return (
    <>
      <SliderSection3
        wrapperSx={{ ...wrapperSx, display: { xs: "block", sm: "none" } }}
        sectionTitle={sectionTitle}
        info={info}
        data={data[0].list.map((item) => {
          return (
            <ImageWithColorizedBorder
              imageSx={{
                minHeight: "12rem",
                objectFit: "cover",
              }}
              image={{
                src: item.image.src.replace(".png", "_mobile.png"),
                width: 640,
                height: 480,
              }}
            />
          );
        })}
      />
      <SectionContainerWrapperColorized
        accentColor={accentColor}
        gradientBg={gradientBg}
        nodeRef={nodeRef}
        sx={{ ...wrapperSx, display: { xs: "none", sm: "block" } }}
      >
        <SectionContainer sx={{ "& .swiper": { width: "100%" } }}>
          <SectionTwoColumnsContainer
            disableContainerPaddings
            sectionContainerSx={{
              alignItems: "flex-start",
              justifyContent: { xs: "flex-start", sm: "space-between" },
              marginBottom: {
                xs: "2rem",
                sm: "3.75rem",
              },
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
          <Stack position={"relative"}>
            <SliderSection4Content
              key={0}
              isActive={true}
              accentColor={accentColor}
              sliderData={extendedTabData[0].list.map((i, idx) => ({
                ...i,
                idx,
              }))}
            />
          </Stack>
        </SectionContainer>
      </SectionContainerWrapperColorized>
    </>
  );
};
