import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import React, { useEffect, useRef, useState } from "react";
import { Box, Stack } from "@mui/system";
import { AccentColor } from "./LandingSections";
import { accentColorBase } from "./LandingSections/components/utils";

type SliderNavigationProps = {
  activeSlide: number;
  changeSlide: (slide: number) => void;
  sx?: SxProps;
  accentColor?: AccentColor;
  slideCount: number;
};

export const SliderNavigation: React.FC<SliderNavigationProps> = ({
  activeSlide,
  changeSlide,
  sx,
  accentColor = "primary",
  slideCount,
}) => {
  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const [activeOverlayWidth, setActiveOverlayWidth] = useState<number>(0);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    const fn = () => {
      if (nodeRef.current) {
        setActiveOverlayWidth(nodeRef.current.clientWidth);
      }
    };

    fn();
    window.addEventListener("resize", fn);
    return () => {
      window.removeEventListener("resize", fn);
    };
  }, [nodeRef.current, mounted, slideCount]);

  return (
    <Stack
      direction={"row"}
      gap={{ xs: ".5rem", sm: "1.125rem" }}
      position={"relative"}
      sx={sx}
    >
      {Array.from(Array(slideCount).keys()).map((idx) => {
        return (
          <Box
            key={idx}
            ref={idx === 0 ? nodeRef : undefined}
            component={"span"}
            display={"block"}
            onClick={() => changeSlide(idx)}
            sx={{
              flex: "1 1 0",
              cursor: "pointer",
              py: "0.5625rem",
              WebkitTapHighlightColor: "transparent",
              "&:hover > span": {
                backgroundColor: "rgba(0,0,0,.3)",
              },
            }}
          >
            <Box
              component={"span"}
              display={"block"}
              sx={{
                width: "100%",
                height: "0.125rem",
                transition: "background .3s linear",
                borderRadius: ".1875rem",
                backgroundColor: "rgba(0,0,0,.12)",
              }}
            />
          </Box>
        );
      })}
      <Box
        component={"span"}
        display={"block"}
        style={{
          transition: "all .2s linear",
        }}
        sx={{
          py: "0.5rem",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
          width: "100%",
          maxWidth: activeOverlayWidth,
          opacity: activeOverlayWidth ? "1" : "0",
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
          transform: {
            xs: `translateX(calc(${activeSlide * activeOverlayWidth}px   + ${
              0.5 * activeSlide
            }rem))`,
            sm: `translateX(calc(${activeSlide * activeOverlayWidth}px   + ${
              1.125 * activeSlide
            }rem))`,
          },
        }}
      >
        <Box
          component={"span"}
          display={"block"}
          sx={{
            backgroundColor: accentColorBase[accentColor].main,
            width: "100%",
            height: "0.25rem",
            transition: "background .2s linear",
            borderRadius: ".1875rem",
          }}
        />
      </Box>
    </Stack>
  );
};
