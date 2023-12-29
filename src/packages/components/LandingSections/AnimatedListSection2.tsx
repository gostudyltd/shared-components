import React, { useEffect, useMemo, useRef, useState } from "react";
import { SectionTwoColumnsContainer } from "./components/SectionTwoColumnsContainer";
import { AccentColor, SectionTitleProps } from "./components/types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SxProps, alpha, keyframes } from "@mui/material/styles";
import { SectionContainer } from "./components/SectionContainer";
import { accentColorBase } from "./components/utils";
import { montserratFamily } from "../../constants/themeVars";
import { iconBase } from "./icons";
import { CdnImage } from "../../types/components";
import { ImageWithColorizedBorder } from "./ImageWithColorizedBorder";
import { Button } from "@mui/material";

const animationSpeed = 10; // sec
const animationDelay = 2; //sec

type DataItem = {
  title: string;
  description: string;
  image: CdnImage;
};

type ExtendedDataItem = DataItem & { idx: number };

export type AnimatedListSection2Props = {
  accentColor?: AccentColor;
  sectionTitle: SectionTitleProps;
  data: DataItem[];
  imageSx?: SxProps;
  btnAction?: VoidFunction;
};

const maxWidthKeyframe = keyframes`
  from {
    max-width: 0px;
  }
  to {
    max-width: 100%;
  }
`;

type AccordionItemProps = {
  data: ExtendedDataItem;
  isActive: boolean;
  accentColor?: AccentColor;
  onClick: (idx: number) => void;
  onAnimationEnd: () => void;
  isAnimationPaused?: boolean;
  imageSx?: SxProps;
};
// to prevent side-effects on page load
const defaultMaxHeight = 10000;

const AccordionItem: React.FC<AccordionItemProps> = ({
  data,
  isActive,
  accentColor = "primary",
  onClick,
  onAnimationEnd,
  isAnimationPaused,
  imageSx,
}) => {
  const accent = accentColorBase[accentColor];
  const descriptionRef = useRef<null | HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  /* FIXME: Update the value on resize! */

  useEffect(() => {
    const fn = () => {
      const mh = isActive
        ? (descriptionRef.current?.firstChild as HTMLSpanElement)
            ?.scrollHeight || defaultMaxHeight
        : 0;
      if (maxHeight !== mh) {
        setMaxHeight(mh);
      }
    };
    fn();
    window.addEventListener("scroll", fn);
    window.addEventListener("orientationchange", fn);

    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("orientationchange", fn);
    };
  }, [descriptionRef.current, isActive]);

  return (
    <Box
      component={"div"}
      display={"flex"}
      flexDirection={"column"}
      key={data.title}
      position={"relative"}
      onClick={() => onClick(data.idx)}
      sx={{
        py: { xs: ".75rem", sm: "1rem" },
        overflow: "hidden",
        cursor: isActive ? "default" : "pointer",

        "&:hover > *:last-of-type": {
          animationPlayState: "paused",
        },
      }}
    >
      <Stack direction={"row"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"0.5rem"}
          flexShrink={"0"}
          sx={{
            marginRight: { xs: ".75rem", sm: "1rem" },
            width: { xs: "2.25rem", sm: "2.5rem" },
            height: { xs: "2.25rem", sm: "2.5rem" },
            // backgroundColor: isActive ? accent.secondary : "inherit",
            backgroundColor: isActive ? "rgba(41, 98, 255, 1)" : "inherit",
            transition: "background-color .2s linear",

            "& > svg > path": {
              // fill: accent.main,
              fill: isActive ? "white" : "rgba(41, 98, 255, 1)",
            },
          }}
        >
          {iconBase[`step${data.idx + 1}` as keyof typeof iconBase]}
        </Stack>
        <Typography
          display={"flex"}
          alignItems={"center"}
          sx={{
            minHeight: { xs: "2.25rem", sm: "2.5rem" },
            fontFamily: montserratFamily,
            fontSize: { xs: "1rem", sm: "1.125rem" },
            lineHeight: "1.42",
            fontWeight: "600",
          }}
        >
          {data.title}
        </Typography>
      </Stack>
      <Stack ref={descriptionRef}>
        <Stack sx={{ maxHeight, transition: "max-height .3s linear" }}>
          <Stack
            sx={{
              paddingTop: "1rem",
              paddingBottom: { xs: ".5rem", sm: "20px" },
            }}
          >
            <Stack sx={{ maxWidth: 400, width: "100%", mx: "auto" }}>
              {/* <Box></Box> */}
              {/* <Box component={'img'} src={data.image} /> */}
              <ImageWithColorizedBorder
                image={data.image}
                accentColor={accentColor}
                sx={{
                  display: { xs: "flex", sm: "none" },
                  marginBottom: ".75rem",
                  height: "20rem",
                  width: "100%",
                  maxWidth: { xs: "375px", sm: "20rem" },
                  "& img": { objectFit: "cover" },
                  mx: "auto",
                  ...imageSx,
                }}
                renderImage={(src) => (
                  <Stack
                    sx={{
                      background: `url(${src})`,
                      transition: "background .2s linear",
                      height: "100%",
                      width: "100%",
                      borderRadius: "1rem",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                )}
              />
            </Stack>

            <Typography
              sx={{
                ml: { xs: "0", sm: "3.5rem" },
                color: "rgba(0,0,0,0.54)",
              }}
            >
              {data.description}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box
        position={"absolute"}
        sx={{
          left: 0,
          right: 0,
          bottom: 1,
          borderRadius: "4px",
          backgroundColor: "rgba(0,0,0,0.12)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "1px",
            width: "100%",
          }}
        >
          {isActive && (
            <Box
              component={"span"}
              onAnimationEnd={onAnimationEnd}
              sx={{
                position: "absolute",
                bottom: "-1px",
                left: 0,
                height: "3px",
                width: "100%",
                // backgroundColor: accent.main,
                backgroundColor: "rgba(41, 98, 255, 1)",
                borderRadius: "4px",
                maxWidth: "0",
                animation: `${maxWidthKeyframe} ${animationSpeed}s linear`,
                animationDelay: `${animationDelay}s`,
                animationPlayState: isAnimationPaused ? "paused" : undefined,
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export const AnimatedListSection2: React.FC<AnimatedListSection2Props> = ({
  sectionTitle,
  accentColor,
  data,
  imageSx,
  btnAction,
}) => {
  const [activeItemIdx, setActiveItemIdx] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  // Disable auto switching slides & animation if the section offside the window view
  const [isAnimationPaused, setIsAnimationPaused] = useState<boolean>(true);
  const [isAnimationManuallyPaused, setIsAnimationManuallyPaused] =
    useState<boolean>(false);

  const extendedData = useMemo(
    () => data.map((i, idx) => ({ ...i, idx })),
    [data]
  );
  const activeItem = useMemo(
    () => extendedData[activeItemIdx],
    [activeItemIdx, extendedData]
  );

  useEffect(() => {
    if (!contentRef.current) return;
    const fn = () => {
      if (!contentRef.current) return null;
      const { y, height } = contentRef.current.getBoundingClientRect();
      const startPosition = window.scrollY + y - window.innerHeight / 2;
      const endPosition = startPosition + height + window.innerHeight / 4;
      const mustBeEnabled =
        window.scrollY > startPosition && window.scrollY < endPosition;
      if (isAnimationPaused && mustBeEnabled) {
        if (isAnimationManuallyPaused) {
          setIsAnimationManuallyPaused(false);
        }
        setIsAnimationPaused(false);
      }
      if (!isAnimationPaused && !mustBeEnabled) {
        setIsAnimationPaused(true);
      }
    };
    fn();
    window.addEventListener("scroll", fn);

    return () => {
      window.removeEventListener("scroll", fn);
    };
  }, [isAnimationPaused, contentRef.current]);

  const handleNext = () => {
    setActiveItemIdx((st) => {
      const nextIdx = st + 1;
      if (!extendedData[nextIdx]) return 0;
      return nextIdx;
    });
  };

  const handleItemClick = (idx: number) => {
    if (!isAnimationManuallyPaused) setIsAnimationManuallyPaused(true);
    if (idx !== activeItemIdx) setActiveItemIdx(idx);
  };

  return (
    <SectionContainer
      sectionTitle={{
        accentColor,
        sx: {
          marginBottom: { xs: "1rem", sm: "2.5rem" },
          width: "100%",
          maxWidth: "34.25rem",
        },
        ...sectionTitle,
      }}
    >
      <SectionTwoColumnsContainer
        disableContainerPaddings
        sectionContainerSx={{
          alignItems: "flex-start",
        }}
        firstColumn={
          <Box
            ref={contentRef}
            component={"span"}
            display={"flex"}
            flexDirection={"column"}
            sx={{
              minHeight: {
                xs: "900px",
                sm: "768px",
              },
            }}
          >
            {extendedData.map((item) => (
              <AccordionItem
                key={item.title}
                data={item}
                isActive={activeItemIdx === item.idx}
                accentColor={accentColor}
                onClick={handleItemClick}
                onAnimationEnd={handleNext}
                isAnimationPaused={
                  isAnimationPaused || isAnimationManuallyPaused
                }
                imageSx={imageSx}
              />
            ))}
            <Button
              variant="contained"
              size="large"
              onClick={btnAction}
              sx={{
                minWidth: { xs: "100%", sm: "10rem" },
                px: { xs: "0", sm: "2rem" },
                fontSize: {
                  xs: "1rem",
                  sm: "1.125rem",
                },
                height: { xs: "2.625rem", sm: "3.5rem" },
                background: "rgba(41, 98, 255, 1)",
                color: "white",
                marginTop: "40px",
                "&:hover": {
                  background: "rgba(41, 98, 255, 1)",
                },
              }}
            >
              Поступить в Академию
            </Button>
          </Box>
        }
        secondColumn={
          <>
            {extendedData.map((item, index) => (
              <ImageWithColorizedBorder
                key={item.idx}
                sx={{
                  transition: "opacity .3s linear",
                  display: { xs: "none", sm: "flex" },
                  visibility:
                    activeItem.idx === item.idx ? "visible" : "hidden",
                  maxHeight: activeItem.idx === item.idx ? "unset" : "0px",
                  // padding: activeItem.idx === item.idx ? undefined : '0px',
                  padding:
                    activeItem.idx === item.idx
                      ? { xs: ".75rem", sm: "1rem" }
                      : "0px",
                  border:
                    activeItem.idx === item.idx
                      ? `2px solid rgba(41, 98, 255, 1)`
                      : "none",
                  "& > div": {
                    transition: "opacity .3s linear",
                    opacity: activeItem.idx === item.idx ? 1 : 0,
                  },
                  ...imageSx,
                }}
                accentColor={accentColor}
                image={item.image}
                renderImage={(src) => (
                  <Stack
                    sx={{
                      background: `url(${src})`,
                      transition: "background .2s linear",
                      borderRadius: "1rem",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={src}
                      sx={{ opacity: 0 }}
                      visibility={"hidden"}
                    />
                  </Stack>
                )}
              />
            ))}
          </>
          // <ImageWithColorizedBorder
          //   sx={{ display: { xs: 'none', sm: 'flex' } }}
          //   accentColor={accentColor}
          //   src={activeItem.image.src}
          //   srcSet={activeItem.image.srcSet}
          //   renderImage={(src) => (
          //     <Stack
          //       sx={{
          //         background: `url(${src})`,
          //         transition: 'background .2s linear',
          //         borderRadius: '1rem',
          //         backgroundSize: 'cover',
          //         backgroundRepeat: 'no-repeat',
          //         backgroundPosition: 'center',
          //       }}
          //     >
          //       <Box
          //         component={'img'}
          //         src={src}
          //         sx={{ opacity: 0 }}
          //         // visibility={'hidden'}
          //       />
          //     </Stack>
          //   )}
          // />
        }
      />
    </SectionContainer>
  );
};
