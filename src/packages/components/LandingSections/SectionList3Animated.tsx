import React, { useEffect, useMemo, useRef, useState } from "react";
import { keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { iconBase } from "./icons";
import { AccentColor } from "./components";
import { accentColorBase } from "./components/utils";

export type SectionList3AnimatedProps = {
  data: {
    iconName: keyof typeof iconBase;
    title: string;
    text: string;
  }[];
  accentColor?: AccentColor;
};

const getKeyframeMaxHeightValuesByStepCount = (stepCount: number) => {
  const stepsByPercentage = 100 / stepCount;
  const offset = stepsByPercentage / 2;
  const resultArray: string[] = [
    `
    0% {
      max-height: 0%;
    }
  `,
  ];
  for (let i = 1; i < stepCount + 1; i++) {
    const percentage = stepsByPercentage * i;
    resultArray.push(`${percentage - offset}%, ${percentage}% {
      max-height: calc(${percentage}% + 2rem);
    }`);
  }
  return resultArray.join("\n");
};
const getKeyframeScaleValues = (stepCount: number, currentIdx: number) => {
  const stepsByPercentage = 100 / stepCount;
  const offset = stepsByPercentage / 2;
  const percentage = stepsByPercentage * currentIdx;

  const keyframeValue = `
    0%, ${percentage - offset - 2}% {
      transform: translateX(-50%) scale(0);
    }
    ${percentage - stepCount}%, 100% {
      transform: translateX(-50%) scale(1);
    }
  `;

  return keyframeValue;
};

type ItemRowProps = {
  data: SectionList3AnimatedProps["data"][number];
  idx: number;
  accentColor: AccentColor;
  stepsCount: number;
  isAnimationPaused: boolean;
  animationTime: number;
};

const ItemRow: React.FC<ItemRowProps> = ({
  data,
  idx,
  accentColor,
  stepsCount,
  isAnimationPaused,
  animationTime,
}) => {
  const accent = accentColorBase[accentColor];
  const overlayKeyframe = useMemo(() => {
    return data && keyframes`${getKeyframeScaleValues(stepsCount, idx)}`;
  }, [data]);
  return (
    <Stack
      direction={"row"}
      sx={{ marginBottom: "1.25rem", position: "relative", zIndex: 2 }}
    >
      <Box
        component={"span"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexShrink={"0"}
        sx={{
          width: "3.5rem",
          height: "3.5rem",
          backgroundColor: idx === 0 ? accent.main : "#fff",
          borderRadius: ".75rem",
          marginRight: "1.25rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component={"span"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          sx={{
            "& > svg": {
              width: "2rem",
              height: "2rem",
              "& > path": {
                fill: idx === 0 ? "#fff" : accent.main,
              },
            },
            zIndex: 2,
          }}
        >
          {iconBase[data.iconName]}
        </Box>

        {idx > 0 && (
          <Box
            component={"span"}
            position={"absolute"}
            top={"0"}
            left={"50%"}
            sx={{
              display: "block",
              transform: "translateX(-50%) scale(0)",
              backgroundColor: accent.secondary,
              borderRadius: "0 0 50% 50%",
              top: "-80px",
              width: "160px",
              height: "160px",
              animation:
                overlayKeyframe &&
                `${overlayKeyframe} ${animationTime}s linear forwards`,
              animationPlayState: isAnimationPaused ? "paused" : undefined,
            }}
          />
        )}
      </Box>
      <Stack>
        <Typography
          variant="h4"
          display={"flex"}
          alignItems={"center"}
          sx={{ minHeight: "3.5rem", mb: { xs: "0.5rem", sm: 0 } }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(0,0,0,.54)",
            fontSize: { xs: ".875rem", sm: "1rem" },
          }}
        >
          {data.text}
        </Typography>
      </Stack>
    </Stack>
  );
};

export const SectionList3Animated: React.FC<SectionList3AnimatedProps> = ({
  accentColor = "primary",
  data,
}) => {
  const [isAnimationPaused, setIsAnimationPaused] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const animationTime = useMemo(() => data.length * 2.5, [data]);

  const accent = accentColorBase[accentColor];

  const maxHeightByStepsKeyframe = useMemo(() => {
    if (!data || !data.length) return null;
    return keyframes`${getKeyframeMaxHeightValuesByStepCount(data.length)}`;
  }, [data]);

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
        setIsAnimationPaused(false);
      }
    };
    fn();
    window.addEventListener("scroll", fn);

    return () => {
      window.removeEventListener("scroll", fn);
    };
  }, [isAnimationPaused, contentRef.current]);

  return (
    <Box
      ref={contentRef}
      component={"div"}
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
    >
      {data.map((item, idx) => (
        <ItemRow
          key={item.title}
          data={item}
          accentColor={accentColor}
          idx={idx}
          stepsCount={data.length}
          isAnimationPaused={isAnimationPaused}
          animationTime={animationTime}
        />
      ))}

      <Box
        component={"span"}
        sx={{
          position: "absolute",
          top: 0,
          left: "1.625rem",
          width: ".25rem",
          maxHeight: 0,
          height: `calc(100% - ${100 / data.length}% + 2rem)`,
          animation:
            maxHeightByStepsKeyframe &&
            `${maxHeightByStepsKeyframe} ${animationTime}s linear forwards`,
          backgroundColor: accent.secondary,
          animationPlayState: isAnimationPaused ? "paused" : undefined,
        }}
      />
    </Box>
  );
};
