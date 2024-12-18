import React, { useRef, useState } from "react";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import {
  Image,
  IntroSectionV2,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionTextCardList,
  SectionTwoColumnsContainer,
} from "../LandingSections";
import { montserratFamily } from "../../constants/themeVars";
import { FirstUnderline } from "../LandingSections/images/lines/FirstUnderline";
import { BurstPucker } from "../Icons";
import { InstIcon } from "../LandingSections/images/lines/InstIcon";
import { FacebookIcon } from "../LandingSections/images/lines/FacebookIcon";
import { Star } from "../LandingSections/images/lines/Star";
import { getPicture } from "../../helpers/CloudinaryImage";
import { SeventhSectionBg } from "../LandingSections/images/lines/SeventhSectionBg";
import { SeventhSectionMobileBg } from "../LandingSections/images/lines/SeventhSectionMobileBg";
import { createTFunc, Translations } from "../../config/langs";
import { NewGrantsBg } from "../LandingSections/images/lines/NewGrantsBg";
import { NewGrantsMobileBg } from "../LandingSections/images/lines/NewGrantsMobileBg copy";
import { NewGrantFirstSectionBg } from "../LandingSections/images/lines/NewGrantFirstSectionBg";

interface Props {
  lang: "ru" | "uk" | "en" | "vi";
  externalLocales?: Translations;
  btnAction?: VoidFunction;
  youtubeLink?: string;
}

export const NewGrantsLanding: React.FC<Props> = ({
  lang = "ru",
  externalLocales,
  btnAction,
  youtubeLink,
}) => {
  const t = createTFunc(lang, externalLocales);
  const cdnUrl = "https://images.gostudy.cz/static";

  const getTranslatedText = (
    enVariant: string | React.ReactNode,
    viVariant: string | React.ReactNode,
    ruVariant: string | React.ReactNode,
    ukVariant: string | React.ReactNode
  ) => {
    if (lang === "vi") return viVariant;
    if (lang === "ru") return ruVariant;
    if (lang === "uk") return ukVariant;
    return enVariant;
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{ background: "rgba(225, 245, 254, 1)" }}
      >
        <NewGrantFirstSectionBg
          sx={{
            position: "absolute",
            width: { xs: "100%", sm: "100%" },
            height: { xs: "auto", sm: "unset" },
            // top: { xs: "-215px", sm: "unset" },
          }}
        />
        <IntroSectionV2
          containerSx={{
            py: { xs: "3em", sm: "3.5em" },
          }}
          renderTitle={() => (
            <Typography
              fontSize={{ xs: "40px", sm: "60px" }}
              // lineHeight={{
              //   xs: lang === "en" ? "47px" : "40px",
              //   sm: lang === "en" ? "72px" : "60px",
              // }}
              lineHeight={{
                xs: lang === "vi" ? "58px" : "47px",
                sm: "72px",
              }}
              letterSpacing={{ xs: "-2px", sm: "-3px" }}
              fontFamily={montserratFamily}
              fontWeight={600}
            >
              <>
                <Box
                  component={"span"}
                  sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                >
                  {t("NewGrantsLanding.FirstSection.Title.Part1")}
                  <Box
                    component={"svg"}
                    width="329"
                    height="12"
                    viewBox="0 0 329 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: "absolute",
                      bottom: "-6px",
                      left: "0",
                      width: "100%",
                      // "& path": {
                      //   strokeWidth:
                      //     lang === "uk"
                      //       ? "7px"
                      //       : lang === "vi"
                      //       ? "17px"
                      //       : "7px",
                      // },
                    }}
                  >
                    <path
                      d="M1 3C137.614 10.4385 210.525 11.5425 328 3"
                      stroke="#2962FF"
                      stroke-width="6"
                    />
                  </Box>
                </Box>
                <br />
                {t("NewGrantsLanding.FirstSection.Title.Part2")}
              </>
            </Typography>
          )}
          description={t("NewGrantsLanding.FirstSection.Description")}
          image={{
            src: `${cdnUrl}/newGrantsLanding/first_${lang}.png`,
            width: null,
            height: null,
          }}
          mobileImage={{
            src: `${cdnUrl}/newGrantsLanding/first_${lang}_mobile.png`,
            width: null,
            height: null,
            sx: { maxHeight: "338px", objectFit: "contain" },
          }}
          secondColumn={
            <Box
              sx={{
                position: "relative",
                width: "fit-content",
                mx: { xs: "auto", sm: "0" },
              }}
            >
              {/* <FreeDesk
                lang={lang}
                sx={{
                  position: "absolute",
                  top: { xs: "2%", sm: "unset" },
                  left: { xs: "-2%", sm: "-8%" },
                  width: { xs: "95px", sm: "123px" },
                  height: { xs: "95px", sm: "123px" },
                }}
              /> */}
              <Image
                imageSrc={{
                  src: `${cdnUrl}/newGrantsLanding/first.png`,
                  width: null,
                  height: null,
                  sx: {
                    objectFit: "contain",
                    maxWidth: "460px",
                    width: { xs: "90%", sm: "100%" },
                  },
                  pictureSx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              />
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                  padding: { xs: "10px", sm: "16px" },
                  borderRadius: { xs: "14px", sm: "24px" },
                  backgroundColor: "#FFEE58",
                  position: "absolute",
                  bottom: { xs: "-10px" },
                  right: { xs: "-1px", sm: "-23px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "11px", sm: "16px" },
                    fontWeight: "600",
                    lineHeight: { xs: "15.73px", sm: "22.88px" },
                    letterSpacing: "-0.5px",
                    color: "#000000DE",
                    fontFamily: montserratFamily,
                    textAlign: "center",
                  }}
                >
                  {t("GrantsLanding.IntroSection.Prize")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "26px" },
                    fontWeight: "700",
                    lineHeight: { xs: "25.2px", sm: "36.4px" },
                    letterSpacing: "-1px",
                    color: "#2962FF",
                    fontFamily: montserratFamily,
                    textAlign: "center",
                  }}
                >
                  200 000 €
                </Typography>
              </Box> */}
            </Box>
          }
          button={{
            text: t("NewGrantsLanding.FirstSection.Button"),
            onClick: () => {
              if (btnAction) {
                btnAction();
              }
            },
            sx: {
              background: "#131313",
              "&:hover": { background: "#131313" },
              fontFamily: montserratFamily,
              letterSpacing: "-0.5px",
              lineHeight: "28px",
            },
          }}
          leftSectionContainerSx={{
            "& > *:first-of-type": {
              maxWidth: { xs: "100%", sm: "100%" },
            },
            py: { xs: "3em", sm: "3.5em" },
            gap: { xs: "2.5em", sm: "28px" },
          }}
        />
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{
          background: "rgba(41, 98, 255, 1)",
          position: "rgba(41, 98, 255, 1)",
        }}
      >
        <SectionContainer
          accentColor="error"
          sectionTitle={{
            wrapperSx: {
              paddingBottom: { xs: "2rem", sm: "3.75rem" },
            },
            description: t("NewGrantsLanding.SecondSection.Description"),

            renderTitle: () => (
              <Typography
                fontSize={{ xs: "30px", sm: "46px" }}
                lineHeight={{ xs: "37.2px", sm: "46px" }}
                fontFamily={montserratFamily}
                fontWeight={700}
                letterSpacing={{ xs: "-1px", sm: "-2px" }}
                color={"rgba(255, 255, 255, 1)"}
                // textAlign={"center"}
              >
                <>
                  <Box
                    component={"span"}
                    sx={{
                      position: "relative",
                      color: "rgba(255, 214, 0, 1)",
                      "& path": {
                        stroke: "rgba(255, 214, 0, 1)",
                      },
                    }}
                  >
                    {t("NewGrantsLanding.SecondSection.Title.Part1")}
                    <Box
                      component={"svg"}
                      width="490"
                      height="11"
                      viewBox="0 0 490 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      sx={{
                        position: "absolute",
                        bottom: "-6px",
                        left: "0",
                        width: "100%",
                        // "& path": {
                        //   strokeWidth:
                        //     lang === "uk"
                        //       ? "7px"
                        //       : lang === "vi"
                        //       ? "17px"
                        //       : "7px",
                        // },
                      }}
                    >
                      <path
                        d="M1 3C204.876 9.19873 313.686 10.1188 489 3"
                        stroke="#FFD600"
                        stroke-width="6"
                      />
                    </Box>
                  </Box>{" "}
                  {t("NewGrantsLanding.SecondSection.Title.Part2")}
                </>
              </Typography>
            ),
            sx: {
              textAlign: { xs: "left" },
              position: "relative",
            },
            descriptionSx: {
              color: "rgba(224, 224, 224, 1)",
              fontSize: { xs: "20px", sm: "22px" },
              lineHeight: { xs: "26px", sm: "28.6px" },
            },
            // centered: true,
          }}
        >
          <Stack
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "flex-start", sm: "space-between" }}
            gap={{ xs: "24px", sm: "32px" }}
          >
            <Stack flexDirection={"row"} gap={"12px"} width={"100%"}>
              <Box
                component={"span"}
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: { xs: "24px", sm: "32px" },
                  lineHeight: { xs: "24px", sm: "32px" },
                }}
              >
                1.
              </Box>
              <Stack sx={{ gap: { xs: "16px", sm: "20px" } }}>
                <Box
                  component={"span"}
                  sx={{
                    fontSize: { xs: "20px", sm: "24px" },
                    lineHeight: { xs: "23.2px", sm: "27.84px" },
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: montserratFamily,
                    fontWeight: 600,
                  }}
                >
                  {t("NewGrantsLanding.SecondSection.Step1.Text")}
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "rgba(255, 214, 0, 1)",
                    "&:hover": { bgcolor: "rgba(255, 214, 0, 1)" },
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: { xs: "16px", sm: "16px" },
                    lineHeight: { xs: "26px", sm: "26px" },
                    fontFamily: montserratFamily,
                    width: "fit-content",
                  }}
                  onClick={() => {
                    if (btnAction) {
                      btnAction();
                    }
                  }}
                >
                  {t("NewGrantsLanding.SecondSection.Step1.Button")}
                </Button>
              </Stack>
            </Stack>
            <Stack flexDirection={"row"} gap={"12px"} width={"100%"}>
              <Box
                component={"span"}
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: { xs: "24px", sm: "32px" },
                  lineHeight: { xs: "24px", sm: "32px" },
                }}
              >
                2.
              </Box>
              <Stack>
                <Box
                  component={"span"}
                  sx={{
                    fontSize: { xs: "20px", sm: "24px" },
                    lineHeight: { xs: "23.2px", sm: "27.84px" },
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: montserratFamily,
                    fontWeight: 600,
                  }}
                >
                  <Box component={"span"}>
                    {t("NewGrantsLanding.SecondSection.Step2.Text.Part1")}
                  </Box>{" "}
                  <Box
                    component={"a"}
                    href="https://www.instagram.com/gostudy_eu/"
                    target="_blank"
                    color={"rgba(255, 214, 0, 1)"}
                  >
                    {t("NewGrantsLanding.SecondSection.Step2.Text.Part2")}
                  </Box>{" "}
                  <Box component={"span"}>
                    {t("NewGrantsLanding.SecondSection.Step2.Text.Part3")}
                  </Box>
                </Box>
              </Stack>
            </Stack>
            <Stack flexDirection={"row"} gap={"12px"} width={"100%"}>
              <Box
                component={"span"}
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: { xs: "24px", sm: "32px" },
                  lineHeight: { xs: "24px", sm: "32px" },
                }}
              >
                3.
              </Box>
              <Stack>
                <Box
                  component={"span"}
                  sx={{
                    fontSize: { xs: "20px", sm: "24px" },
                    lineHeight: { xs: "23.2px", sm: "27.84px" },
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: montserratFamily,
                    fontWeight: 600,
                  }}
                >
                  <Box component={"span"}>
                    {t("NewGrantsLanding.SecondSection.Step3.Text.Part1")}
                  </Box>{" "}
                  <Box component={"span"} color={"rgba(255, 214, 0, 1)"}>
                    {t("NewGrantsLanding.SecondSection.Step3.Text.Part2")}
                  </Box>{" "}
                  <Box component={"span"}>
                    {t("NewGrantsLanding.SecondSection.Step3.Text.Part3")}
                  </Box>{" "}
                  <Box
                    component={"a"}
                    href="https://www.instagram.com/gostudy_eu/"
                    target="_blank"
                    color={"rgba(255, 214, 0, 1)"}
                  >
                    {t("NewGrantsLanding.SecondSection.Step3.Text.Part4")}
                  </Box>{" "}
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <SectionContainer
        sectionTitle={{
          renderTitle: () => (
            <Typography
              fontSize={{ xs: "30px", sm: "46px" }}
              lineHeight={{ xs: "37.2px", sm: "46px" }}
              fontFamily={montserratFamily}
              fontWeight={700}
              letterSpacing={{ xs: "-1px", sm: "-2px" }}
            >
              <Box
                component={"span"}
                sx={{
                  position: "relative",
                  color: "rgba(41, 98, 255, 1)",
                  "& path": {
                    stroke: "rgba(41, 98, 255, 1)",
                  },
                }}
              >
                {t("NewGrantsLanding.ThirdSection.Title.Part1")}
                <FirstUnderline
                  sx={{
                    position: "absolute",
                    bottom: lang === "vi" ? "-12px" : "-6px",
                    left: "0",
                    width: "100%",
                    "& path": {
                      // strokeWidth:
                      //   lang === "uk"
                      //     ? "5px"
                      //     : lang === "vi"
                      //     ? "8px"
                      //     : lang === "en"
                      //     ? "9px"
                      //     : "5px",
                    },
                  }}
                />
              </Box>{" "}
              {t("NewGrantsLanding.ThirdSection.Title.Part2")}
            </Typography>
          ),
          description: t("NewGrantsLanding.ThirdSection.Description"),
          descriptionSx: {
            fontFamily: montserratFamily,
            letterSpacing: { xs: "-1px", sm: "-1px" },
            fontSize: { xs: "20px", sm: "22px" },
            lineHeight: { xs: "26px", sm: "28.6px" },
            fontWeight: "500",
          },
        }}
      >
        <Stack flexDirection={{ xs: "column", sm: "row" }} gap={"16px"}>
          <Stack gap={{ xs: "16px", sm: "32px" }} width={"100%"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "16px", sm: "32px" },
                padding: { xs: "16px", sm: "20px" },
                // minWidth: { xs: "auto", sm: "555px" },
                backgroundColor: "rgba(227, 242, 253, 1)",
                borderRadius: "32px",
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <Stack
                sx={{
                  width: { xs: "100%", sm: "68%" },
                  gap: { xs: "16px", sm: "32px" },
                }}
              >
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: { xs: "20px", sm: "24px" },
                    lineHeight: { xs: "24px", sm: "29.76px" },
                    fontFamily: montserratFamily,
                    fontWeight: 500,
                    zIndex: "2",
                  }}
                >
                  {t("NewGrantsLanding.ThirdSection.Card.Title")}
                </Typography>
                <Typography
                  component={"p"}
                  sx={{
                    fontSize: { xs: "24px", sm: "24px" },
                    lineHeight: { xs: "24px", sm: "29.76px" },
                    fontFamily: montserratFamily,
                    fontWeight: 600,
                    zIndex: "2",
                    letterSpacing: { xs: "-0.5px" },
                    mb: { xs: "240px", sm: "0px" },
                  }}
                >
                  {t("NewGrantsLanding.ThirdSection.Card.Description")}
                </Typography>
              </Stack>

              {getPicture(
                `${cdnUrl}/newGrantsLanding/third.png`,
                568,
                287,
                {
                  display: { xs: "none", sm: "block" },
                  position: "absolute",
                  right: "0",
                  bottom: "-3px",
                },
                { width: "100%" }
              )}
              {getPicture(
                `${cdnUrl}/newGrantsLanding/third_mobile.png`,
                // 426,
                // 215,
                null,
                null,
                {
                  display: { xs: "block", sm: "none" },
                  position: "absolute",
                  right: "0",
                  bottom: "-3px",
                  height: "215px",
                },
                { width: "100%", height: "215px" }
              )}
            </Box>
          </Stack>
        </Stack>
      </SectionContainer>

      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{ background: "transparent", position: "relative" }}
      >
        <NewGrantsBg
          sx={{
            display: { xs: "none", sm: "block" },
            position: "absolute",
            width: "100%",
            height: "unset",
            top: { xs: "34%", sm: "59%" },
            transform: "translateY(-50%)",
          }}
        />
        <NewGrantsMobileBg
          sx={{
            position: "absolute",
            width: "100%",
            height: "unset",
            display: { xs: "block", sm: "none" },
          }}
        />
        <SectionContainer
          accentColor="error"
          sectionTitle={{
            button: {
              variant: "contained",
              text: t("NewGrantsLanding.FourthSection.Button"),
              sx: {
                display: { xs: "flex" },
                width: { xs: "100%", sm: "auto" },
                bgcolor: "rgba(41, 98, 255, 1)",
                "&:hover": {
                  bgcolor: "rgba(41, 98, 255, 1)",
                },
              },
              onClick: () => {
                if (btnAction) {
                  btnAction();
                }
              },
            },
            wrapperSx: {
              paddingBottom: { xs: "2rem", sm: "3.75rem" },
              "&>div": {
                flexDirection: "column",
                alignItems: "flex-start",
                gap: { xs: "26px", sm: "48px" },
              },
            },
            renderTitle: () => (
              <Typography
                fontSize={{ xs: "30px", sm: "46px" }}
                lineHeight={{ xs: "37.2px", sm: "46px" }}
                fontFamily={montserratFamily}
                fontWeight={700}
                letterSpacing={{ xs: "-1px", sm: "-2px" }}
                // textAlign={"center"}
              >
                <>
                  <Box
                    component={"span"}
                    sx={{
                      position: "relative",
                      color: "rgba(41, 98, 255, 1)",
                      "& path": {
                        stroke: "rgba(41, 98, 255, 1)",
                      },
                    }}
                  >
                    {t("NewGrantsLanding.FourthSection.Title.Part1")}
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        bottom: "-6px",
                        left: "0",
                        width: "100%",
                        "& path": {
                          // strokeWidth:
                          //   lang === "uk"
                          //     ? "7px"
                          //     : lang === "vi"
                          //     ? "17px"
                          //     : "7px",
                        },
                      }}
                    />
                  </Box>{" "}
                  {t("NewGrantsLanding.FourthSection.Title.Part2")}
                </>
              </Typography>
            ),
            sx: {
              textAlign: { xs: "left", sm: "center" },
              position: "relative",
            },
            // centered: true,
          }}
        >
          <Star
            sx={{
              position: "absolute",
              width: "22px",
              height: "22px",
              top: { xs: "13%", sm: "60%" },
              left: { xs: "84%", sm: "0%" },
              zIndex: "0",
              display: { xs: "none", sm: "block" },
              "&>path": { fill: "rgba(187, 222, 251, 1)" },
            }}
          />
          <Star
            sx={{
              position: "absolute",
              width: { xs: "20.2px", sm: "39px" },
              height: { xs: "20.2px", sm: "39px" },
              left: { xs: "8%", sm: "40%" },
              // bottom: { xs: "29.8%", sm: "12%" },
              top: "43%",
              zIndex: "0",
              display: { xs: "none", sm: "block" },
              "&>path": { fill: "rgba(41, 98, 255, 1)" },
            }}
          />
          <Star
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              width: "27px",
              height: "27px",
              bottom: "32%",
              right: "0",
              zIndex: "0",
              "&>path": { fill: "rgba(187, 222, 251, 1)" },
            }}
          />
          <SectionTextCardList
            gridContainerProps={{ sx: { zIndex: 1, position: "relative" } }}
            accentColor="error"
            gridItemProps={{ xs: 12, sm: 4 }}
            cardVariant="v8"
            data={[
              {
                iconName: "Routing",
                // iconColor: "rgba(0, 0, 0, 0.87)",
                text: (
                  <Box
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "18px", sm: "20px" },
                      lineHeight: { xs: "21.6px", sm: "24.8px" },
                      letterSpacing: "-0.5px",
                      fontWeight: "500",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    {t("NewGrantsLanding.FourthSection.Card1.Text")}
                  </Box>
                ),
                sx: {
                  alignItems: "center",
                  boxShadow: "0px 0px 40px 0px rgba(186, 186, 186, 0.20)",
                  padding: "24px",
                },
              },
              {
                iconName: "PointOnMap",
                // iconColor: "rgba(0, 0, 0, 0.87)",
                text: (
                  <Box
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "18px", sm: "20px" },
                      lineHeight: { xs: "21.6px", sm: "24.8px" },
                      letterSpacing: "-0.5px",
                      fontWeight: "500",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    {t("NewGrantsLanding.FourthSection.Card2.Text")}
                  </Box>
                ),
                sx: {
                  alignItems: "center",
                  boxShadow: "0px 0px 40px 0px rgba(186, 186, 186, 0.20)",
                  padding: "24px",
                },
              },
              {
                iconName: "Diploma",
                // iconColor: "rgba(0, 0, 0, 0.87)",
                text: (
                  <Box
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "18px", sm: "20px" },
                      lineHeight: { xs: "21.6px", sm: "24.8px" },
                      letterSpacing: "-0.5px",
                      fontWeight: "500",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    {t("NewGrantsLanding.FourthSection.Card3.Text")}
                  </Box>
                ),
                sx: {
                  alignItems: "center",
                  boxShadow: "0px 0px 40px 0px rgba(186, 186, 186, 0.20)",
                  padding: "24px",
                },
              },
            ]}
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <SectionContainer
        sectionTitle={{
          renderTitle: () => (
            <Typography
              fontSize={{ xs: "30px", sm: "46px" }}
              lineHeight={{ xs: "37.2px", sm: "46px" }}
              fontFamily={montserratFamily}
              fontWeight={700}
              letterSpacing={{ xs: "-1px", sm: "-2px" }}
            >
              <Box
                component={"span"}
                sx={{
                  position: "relative",
                  color: "rgba(41, 98, 255, 1)",
                  "& path": {
                    stroke: "rgba(41, 98, 255, 1)",
                  },
                }}
              >
                {t("NewGrantsLanding.FifthSection.Title.Part1")}
                {/* <FirstUnderline
                  sx={{
                    position: "absolute",
                    bottom: lang === "vi" ? "-12px" : "-6px",
                    left: "0",
                    width: "100%",
                    "& path": {
                      strokeWidth:
                        lang === "uk"
                          ? "5px"
                          : lang === "vi"
                          ? "8px"
                          : lang === "en"
                          ? "9px"
                          : "5px",
                    },
                  }}
                /> */}
                <Box
                  component={"svg"}
                  width="447"
                  height="13"
                  viewBox="0 0 447 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    position: "absolute",
                    bottom: "-6px",
                    left: "0",
                    width: "100%",
                  }}
                >
                  <path
                    d="M1 3C186.912 11.6782 286.134 12.9663 446 3"
                    stroke="#2962FF"
                    stroke-width="6"
                  />
                </Box>
              </Box>{" "}
              {t("NewGrantsLanding.FifthSection.Title.Part2")}
            </Typography>
          ),
        }}
      >
        <SectionTwoColumnsContainer
          disableContainerPaddings
          firstColumn={
            <Box>
              <Box onClick={handleOpen}>
                {getPicture(
                  `${cdnUrl}/newGrantsLanding/fifth_${lang}.png`,
                  null,
                  null,
                  {
                    width: "100%",
                  },
                  {
                    borderRadius: { xs: "24px", sm: "32px" },
                    objectFit: "cover",
                    width: "100%",
                    // width: { xs: "142px", sm: "164px" },
                    // height: { xs: "160px", sm: "200px" },
                  }
                )}
              </Box>
              <Modal open={isOpen} onClose={handleClose}>
                <Box
                  onClick={handleClose} // Close video when clicking on the background
                  sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    bgcolor: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1300,
                    px: "16px",
                  }}
                >
                  <Box
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "952px",
                      aspectRatio: "16 / 9",
                      bgcolor: "transparent",
                    }}
                  >
                    {/* YouTube iFrame */}
                    <iframe
                      src={youtubeLink}
                      // "https://www.youtube.com/embed/tan7kF_L0yY?si=-QaSHoAv7LzGcFXf&autoplay=1"
                      title="YouTube Video"
                      allow="autoplay"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "32px",
                      }}
                    ></iframe>
                  </Box>
                </Box>
              </Modal>
            </Box>
          }
          secondColumn={
            <Stack gap={{ xs: "20px", sm: "28px" }}>
              <Stack gap={{ xs: "12px", sm: "16px" }}>
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: { xs: "20px", sm: "24px" },
                    fontWeight: "600",
                    lineHeight: { xs: "24px", sm: "29.76px" },
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  <BurstPucker
                    sx={{
                      width: { xs: "24px", sm: "30px" },
                      height: { xs: "24px", sm: "30px" },
                      color: "rgba(41, 98, 255, 1)",
                      flexShrink: 0,
                    }}
                  />
                  <Box component={"span"}>
                    {t("NewGrantsLanding.FifthSection.Item1.Text.Part1")}{" "}
                    <Box component={"span"} color={"rgba(41, 98, 255, 1)"}>
                      {t("NewGrantsLanding.FifthSection.Item1.Text.Part2")}
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: { xs: "20px", sm: "24px" },
                    fontWeight: "600",
                    lineHeight: { xs: "24px", sm: "29.76px" },
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  <BurstPucker
                    sx={{
                      width: { xs: "24px", sm: "30px" },
                      height: { xs: "24px", sm: "30px" },
                      color: "rgba(41, 98, 255, 1)",
                      flexShrink: 0,
                    }}
                  />
                  <Box component={"span"}>
                    {t("NewGrantsLanding.FifthSection.Item2.Text.Part1")}{" "}
                    <Box component={"span"} color={"rgba(41, 98, 255, 1)"}>
                      {t("NewGrantsLanding.FifthSection.Item2.Text.Part2")}
                    </Box>{" "}
                    <Box component={"span"}>
                      {t("NewGrantsLanding.FifthSection.Item2.Text.Part3")}
                    </Box>{" "}
                    <Box
                      component={"a"}
                      href="https://www.instagram.com/gostudy_eu/"
                      target="_blank"
                      color={"rgba(41, 98, 255, 1)"}
                    >
                      {t("NewGrantsLanding.FifthSection.Item2.Text.Part4")}
                    </Box>
                  </Box>
                </Box>
              </Stack>
              <Typography
                component={"span"}
                sx={{
                  fontSize: { xs: "18px", sm: "22px" },
                  fontWeight: "400",
                  lineHeight: { xs: "21.6px", sm: "27.28px" },
                }}
              >
                {t("NewGrantsLanding.FifthSection.Description")}
              </Typography>
            </Stack>
          }
        />
      </SectionContainer>

      <SectionContainer
        sectionTitle={{
          renderTitle: () => (
            <Typography
              fontSize={{ xs: "30px", sm: "46px" }}
              lineHeight={{ xs: "37.2px", sm: "46px" }}
              fontFamily={montserratFamily}
              fontWeight={700}
              letterSpacing={{ xs: "-1px", sm: "-2px" }}
            >
              <Box
                component={"span"}
                sx={{
                  position: "relative",
                  color: "rgba(41, 98, 255, 1)",
                  "& path": {
                    stroke: "rgba(41, 98, 255, 1)",
                  },
                }}
              >
                {t("NewGrantsLanding.SixthSection.Title.Part1")}
                <Box
                  component={"svg"}
                  width="322"
                  height="11"
                  viewBox="0 0 322 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    position: "absolute",
                    bottom: "-6px",
                    left: "0",
                    width: "100%",
                  }}
                >
                  <path
                    d="M1 3C134.689 9.19873 206.04 10.1188 321 3"
                    stroke="#2962FF"
                    strokeWidth="6"
                  />
                </Box>
              </Box>{" "}
              {t("NewGrantsLanding.SixthSection.Title.Part2")}
            </Typography>
          ),
          description: t("NewGrantsLanding.SixthSection.Description"),
          descriptionSx: {
            fontFamily: montserratFamily,
            letterSpacing: { xs: "-1px", sm: "-1px" },
            fontSize: { xs: "20px", sm: "22px" },
            lineHeight: { xs: "26px", sm: "28.6px" },
            fontWeight: "500",
          },
        }}
      >
        <Stack flexDirection={{ xs: "column", sm: "row" }} gap={"16px"}>
          <Stack gap={{ xs: "16px", sm: "32px" }} width={"100%"}>
            <Box
              sx={{
                display: "flex",
                // flexDirection: "column",
                padding: { xs: "20px", sm: "24px" },
                // minWidth: { xs: "auto", sm: "555px" },
                gap: { xs: "16px", sm: "32px" },
                backgroundColor: "rgba(227, 242, 253, 1)",
                borderRadius: "32px",
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <Typography
                component={"p"}
                sx={{
                  fontSize: { xs: "20px", sm: "24px" },
                  lineHeight: { xs: "24px", sm: "29.76px" },
                  fontFamily: montserratFamily,
                  fontWeight: 500,
                  zIndex: "2",
                  letterSpacing: { xs: "-0.5px" },
                }}
              >
                {t("NewGrantsLanding.SixthSection.Card1.Text")}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                // flexDirection: "column",
                padding: { xs: "20px", sm: "24px" },
                // minWidth: { xs: "auto", sm: "555px" },
                gap: { xs: "16px", sm: "32px" },
                backgroundColor: "rgba(227, 242, 253, 1)",
                borderRadius: "32px",
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <Typography
                component={"p"}
                sx={{
                  fontSize: { xs: "20px", sm: "24px" },
                  lineHeight: { xs: "24px", sm: "29.76px" },
                  fontFamily: montserratFamily,
                  fontWeight: 500,
                  zIndex: "2",
                  letterSpacing: { xs: "-0.5px" },
                }}
              >
                {t("NewGrantsLanding.SixthSection.Card2.Text")}
              </Typography>
            </Box>
          </Stack>
          <Stack gap={{ xs: "16px", sm: "32px" }} width={"100%"}>
            <Box
              sx={{
                display: "flex",
                // flexDirection: "column",
                padding: { xs: "20px", sm: "24px" },
                // minWidth: { xs: "auto", sm: "555px" },
                gap: { xs: "16px", sm: "32px" },
                backgroundColor: "rgba(227, 242, 253, 1)",
                borderRadius: "32px",
                width: "100%",
                position: "relative",
                height: "100%",
              }}
            >
              <Typography
                component={"p"}
                sx={{
                  fontSize: { xs: "20px", sm: "24px" },
                  lineHeight: { xs: "24px", sm: "29.76px" },
                  fontFamily: montserratFamily,
                  fontWeight: 500,
                  zIndex: "2",
                  letterSpacing: { xs: "-0.5px" },
                }}
              >
                {t("NewGrantsLanding.SixthSection.Card3.Text")}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </SectionContainer>

      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{ position: "relative" }}
      >
        <SeventhSectionBg
          sx={{
            display: { xs: "none", sm: "block" },
            position: "absolute",
            width: "100%",
            height: "unset",
            top: { xs: "34%", sm: "59%" },
            transform: {
              xs: "translateY(-50%) rotate(90deg)",
              sm: "translateY(-50%)",
            },
          }}
        />
        <SeventhSectionMobileBg
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            width: "100%",
            height: "unset",
            top: 0,
          }}
        />
        <SectionContainer
          accentColor="error"
          sectionTitle={{
            // descriptionSx: {
            //   fontSize: { xs: "20px", sm: "22px" },
            //   lineHeight: { xs: "26px", sm: "28.6px" },
            // },
            description: t("GrantsLanding.SixthSection.Description"),
            descriptionSx: {
              textAlign: { xs: "center", sm: "center" },
              fontSize: { xs: "20px", sm: "22px" },
              lineHeight: { xs: "26px", sm: "28.6px" },
              fontFamily: montserratFamily,
              letterSpacing: { xs: "-1px", sm: "-1px" },
              fontWeight: "500",
            },
            renderTitle: () => (
              <Typography
                fontSize={{ xs: "30px", sm: "46px" }}
                lineHeight={{ xs: "37.2px", sm: "46px" }}
                fontFamily={montserratFamily}
                fontWeight={700}
                letterSpacing={{ xs: "-1px", sm: "-2px" }}
                textAlign={"center"}
              >
                {getTranslatedText(
                  <>
                    {t("GrantsLanding.SixthSection.Title.Part1")}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        position: "relative",
                        color: "rgba(41, 98, 255, 1)",
                        "& path": {
                          stroke: "rgba(41, 98, 255, 1)",
                        },
                      }}
                    >
                      {t("GrantsLanding.SixthSection.Title.Part2")}
                      <Box
                        component={"svg"}
                        width="322"
                        height="11"
                        viewBox="0 0 322 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                        }}
                      >
                        <path
                          d="M1 3C134.689 9.19873 206.04 10.1188 321 3"
                          stroke="#2962FF"
                          strokeWidth="6"
                        />
                      </Box>
                    </Box>
                  </>,
                  <>
                    {t("GrantsLanding.SixthSection.Title.Part1")}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        position: "relative",
                        color: "rgba(41, 98, 255, 1)",
                        "& path": {
                          stroke: "rgba(41, 98, 255, 1)",
                        },
                      }}
                    >
                      {t("GrantsLanding.SixthSection.Title.Part2")}
                      <Box
                        component={"svg"}
                        width="322"
                        height="11"
                        viewBox="0 0 322 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                        }}
                      >
                        <path
                          d="M1 3C134.689 9.19873 206.04 10.1188 321 3"
                          stroke="#2962FF"
                          strokeWidth="6"
                        />
                      </Box>
                    </Box>
                  </>,
                  <>
                    {t("GrantsLanding.SixthSection.Title.Part1")}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        position: "relative",
                        color: "rgba(41, 98, 255, 1)",
                        "& path": {
                          stroke: "rgba(41, 98, 255, 1)",
                        },
                      }}
                    >
                      {t("GrantsLanding.SixthSection.Title.Part2")}
                      <Box
                        component={"svg"}
                        width="322"
                        height="11"
                        viewBox="0 0 322 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                        }}
                      >
                        <path
                          d="M1 3C134.689 9.19873 206.04 10.1188 321 3"
                          stroke="#2962FF"
                          strokeWidth="6"
                        />
                      </Box>
                    </Box>
                  </>,
                  <>
                    {t("GrantsLanding.SixthSection.Title.Part1")}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        position: "relative",
                        color: "rgba(41, 98, 255, 1)",
                        "& path": {
                          stroke: "rgba(41, 98, 255, 1)",
                        },
                      }}
                    >
                      {t("GrantsLanding.SixthSection.Title.Part2")}
                      <Box
                        component={"svg"}
                        width="322"
                        height="11"
                        viewBox="0 0 322 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                        }}
                      >
                        <path
                          d="M1 3C134.689 9.19873 206.04 10.1188 321 3"
                          stroke="#2962FF"
                          strokeWidth="6"
                        />
                      </Box>
                    </Box>
                  </>
                )}
              </Typography>
            ),
            sx: {
              textAlign: { xs: "left", sm: "center" },
              position: "relative",
            },
            centered: true,
          }}
        >
          <Star
            sx={{
              position: "absolute",
              width: { xs: "37px", sm: "51px" },
              height: { xs: "37px", sm: "51px" },
              top: { xs: lang === "vi" ? " 16%" : "14%", sm: "24%" },
              left: { xs: "3%", sm: "3%" },
              zIndex: "0",
              "& path": { fill: "rgba(41, 98, 255, 1)" },
            }}
          />
          <BurstPucker
            sx={{
              position: "absolute",
              width: { xs: "32px", sm: "41px" },
              height: { xs: "32px", sm: "41px" },
              bottom: { xs: "36px", sm: "96px" },
              right: { xs: "6px", sm: "35px" },
              zIndex: "0",
              "& path": {
                fill: {
                  xs: "rgba(187, 222, 251, 1)",
                  sm: "rgba(41, 98, 255, 1)",
                },
              },
            }}
          />
          <Stack
            sx={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: "11px", sm: "16px" },
            }}
          >
            {[
              {
                name: t("GrantsLanding.SixthSection.Card1.Text"),
                social: "788sashaz",
                href: "https://instagram.com/788sashaz?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_1.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card2.Text"),
                href: "https://www.instagram.com/p/CzawxJSL3i6/?igshid=NzBmMjdhZWRiYQ==",
                social: "bezglasnyyalexey",
                img: "seventhSection_2.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card3.Text"),
                social: "daryna.zuieva",
                socialName: "facebook",
                href: "https://www.facebook.com/daryna.zuieva",
                img: "seventhSection_3.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card4.Text"),
                social: "karin.litvinova",
                href: "https://instagram.com/karin.litvinova?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_4.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card5.Text"),
                social: "ai_kovalov",
                href: "https://instagram.com/ai_kovalov?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_5.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card6.Text"),
                social: "manzuritta",
                img: "seventhSection_6.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card7.Text"),
                social: "denyspimenov",
                href: "https://instagram.com/denyspimenov?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_7.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card8.Text"),
                social: "wlitvinova",
                href: "https://instagram.com/wlitvinova?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_8.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card9.Text"),
                social: "mary_boichenk",
                href: "https://instagram.com/mary_boichenko?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_9.png",
              },
              {
                name: t("GrantsLanding.SixthSection.Card10.Text"),
                social: "vasyl.malyshka",
                href: "https://instagram.com/vasyl.malyshka?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_10.png",
              },
            ].map((item) => (
              <Stack
                sx={{
                  padding: { xs: "12px 12px 16px", sm: "16px 16px 24px" },
                  gap: { xs: "12px", sm: "16px" },
                  background: "#ffffff",
                  borderRadius: { xs: "20px", sm: "24px" },
                  height: { xs: "250px", sm: "312px" },
                  "&:nth-child(3)": { marginTop: { xs: "0", sm: "24px" } },
                  "&:nth-child(8)": { marginTop: { xs: "0", sm: "24px" } },
                  "&:nth-child(1)": { marginTop: { xs: "0", sm: "12px" } },
                  "&:nth-child(6)": { marginTop: { xs: "0", sm: "12px" } },
                  "&:nth-child(5)": { marginTop: { xs: "0", sm: "12px" } },
                  "&:nth-child(10)": { marginTop: { xs: "0", sm: "12px" } },
                  zIndex: "1",
                }}
              >
                {getPicture(
                  `${cdnUrl}/grantsLanding/${item.img}`,
                  null,
                  null,
                  {},
                  {
                    borderRadius: { xs: "16px", sm: "20px" },
                    objectFit: "cover",
                    width: { xs: "142px", sm: "164px" },
                    height: { xs: "160px", sm: "200px" },
                  }
                )}
                <Stack textAlign={"center"}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: montserratFamily,
                      lineHeight: { xs: "25.56px", sm: "28.4px" },
                      fontSize: { xs: "18px", sm: "20px" },
                      letterSpacing: { xs: "-1px", sm: "-1px" },
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    component={"a"}
                    href={item.href}
                    target={"_blank"}
                    sx={{
                      textDecoration: "none",
                      fontWeight: 500,
                      fontFamily: montserratFamily,
                      lineHeight: { xs: "20px", sm: "22.72px" },
                      letterSpacing: "-0.5px",
                      fontSize: { xs: "14px", sm: "16px" },
                      color: "rgba(66, 66, 66, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    {item.socialName ? <FacebookIcon /> : <InstIcon />}
                    {item.social}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </SectionContainer>
      </SectionContainerWrapperColorized>
    </>
  );
};
