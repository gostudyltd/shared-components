import React, { useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  FormSection,
  Image,
  IntroSectionV2,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionTextCardList,
} from "../LandingSections";
import { montserratFamily } from "../../constants/themeVars";
import { FirstSectionBg } from "../LandingSections/images/lines/FirstSectionBg";
import { FirstDecoration } from "../LandingSections/images/lines/FirstDecoration";
import { FirstUnderline } from "../LandingSections/images/lines/FirstUnderline";
import { BurstPucker } from "../Icons";
import { iconBase } from "../LandingSections/icons";
import { AccordionsSectionV2 } from "../LandingSections/AccordionsSectionV2";
import { InstIcon } from "../LandingSections/images/lines/InstIcon";
import { FacebookIcon } from "../LandingSections/images/lines/FacebookIcon";
import { Star } from "../LandingSections/images/lines/Star";
import { getPicture } from "../../helpers/CloudinaryImage";
import { SeventhSectionBg } from "../LandingSections/images/lines/SeventhSectionBg";
import { SixthSectionDecoration1 } from "../LandingSections/images/lines/SixthSectionDecoration1";
import { SixthSectionDecoration2 } from "../LandingSections/images/lines/SixthSectionDecoration2";
import { AnimatedListSection2 } from "../LandingSections/AnimatedListSection2";
import { FourthSectionBg } from "../LandingSections/images/lines/FourthSectionBg";
import { ThirdSectionCardBg } from "../LandingSections/images/lines/ThirdSectionCardBg";
import { BurstStar } from "../Icons/BurstStar";
import { FreeDesk } from "../LandingSections/images/lines/Free_desk";
import { SeventhSectionMobileBg } from "../LandingSections/images/lines/SeventhSectionMobileBg";
import { FourthSectionMobileBg } from "../LandingSections/images/lines/FourthSectionMobileBg";
import { createTFunc, Translations } from "../../config/langs";

interface Props {
  lang: "ru" | "uk" | "en" | "vi";
  externalLocales?: Translations;
  btnAction?: VoidFunction;
  onSubmit?: VoidFunction;
  button?: { onClick: VoidFunction; text: string };
}

export const GrantsLanding: React.FC<Props> = ({
  lang = "ru",
  externalLocales,
  btnAction,
  onSubmit,
  button,
}) => {
  const t = createTFunc(lang, externalLocales)
  const cdnUrl = "https://images.gostudy.cz/static";
  const formRef = useRef<HTMLDivElement | null>(null);
  const scrollToForm = () => {
    if (btnAction) {
      btnAction();
    }
    formRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

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

  return (
    <>
      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{ background: "rgba(225, 245, 254, 1)" }}
      >
        <FirstSectionBg
          sx={{
            position: "absolute",
            width: { xs: "176%", sm: "100%" },
            height: { xs: "100%", sm: "unset" },
            top: { xs: "-215px", sm: "unset" },
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
              {getTranslatedText(
                <>
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    {/* <FirstDecoration
                      sx={{
                        position: "absolute",
                        right: { xs: "-32px", sm: "-34px" },
                        top: { xs: "-13px", sm: "-9px" },
                      }}
                    /> */}
                    {t('GrantsLanding.IntroSection.Title.Part1')}
                    {/* <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: lang === "uk" || lang === "ru" ? "90%" : "100%",
                        "& path": { strokeWidth: "7px" },
                      }}
                    /> */}
                  </Box>{" "}
                  {t('GrantsLanding.IntroSection.Title.Part2')}
                  <br />
                  {t('GrantsLanding.IntroSection.Title.Part3')}
                </>,
                <>
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    <Box component={"span"} sx={{ position: "relative" }}>
                      {/* <FirstDecoration
                        sx={{
                          position: "absolute",
                          right: { xs: "-64px", sm: "-34px" },
                          top: { xs: "-24px", sm: "-2px" },
                          width: "100%",
                        }}
                      /> */}
                      {t('GrantsLanding.IntroSection.Title.Part1')}
                    </Box>
                    {/* <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-9px",
                        width: lang === "uk" || lang === "ru" ? "90%" : "100%",
                      }}
                    /> */}
                  </Box>{" "}
                  {t('GrantsLanding.IntroSection.Title.Part2')}
                </>,
                <>
                  {t('GrantsLanding.IntroSection.Title.Part1')}{" "}
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    <FirstDecoration
                      sx={{
                        position: "absolute",
                        right: { xs: "-31px", sm: "-33px" },
                        top: { xs: "-3px", sm: "8px" },
                      }}
                    />
                    {t('GrantsLanding.IntroSection.Title.Part2')}
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: lang === "uk" || lang === "ru" ? "90%" : "100%",
                        "& path": { strokeWidth: "7px" },
                      }}
                    />
                  </Box>
                  <br />
                  {t('GrantsLanding.IntroSection.Title.Part3')}
                </>,
                <>
                  {t('GrantsLanding.IntroSection.Title.Part1')}{" "}
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    <FirstDecoration
                      sx={{
                        position: "absolute",
                        right: { xs: "-31px", sm: "-33px" },
                        top: { xs: "-3px", sm: "8px" },
                      }}
                    />
                    {t('GrantsLanding.IntroSection.Title.Part2')}
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: lang === "uk" || lang === "ru" ? "90%" : "100%",
                        "& path": { strokeWidth: "8px" },
                      }}
                    />
                  </Box>
                  <br />
                  {t('GrantsLanding.IntroSection.Title.Part3')}
                </>
              )}
            </Typography>
          )}
          description={
            <Box
              sx={{
                color: "text.secondary",
                letterSpacing: "-0.5px",
                fontFamily: montserratFamily,
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "18px" },
                lineHeight: { xs: "20.02px", sm: "22.88px" },
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <Box
                sx={{
                  "& path": {
                    fill: "rgba(41, 98, 255, 1)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <BurstPucker
                    sx={{
                      width: { xs: "15px", sm: "20px" },
                      height: { xs: "15px", sm: "20px" },
                      flexShrink: "0",
                    }}
                  />
                  {getTranslatedText(
                    <span>
                      <strong>{t('GrantsLanding.IntroSection.Points.1.Part1')}</strong> {t('GrantsLanding.IntroSection.Points.1.Part2')}
                    </span>,
                    <span>
                      <strong>{t('GrantsLanding.IntroSection.Points.1.Part1')}</strong> {t('GrantsLanding.IntroSection.Points.1.Part2')}
                    </span>,
                    <span>
                      {t('GrantsLanding.IntroSection.Points.1.Part1')}{" "}
                      <strong>{t('GrantsLanding.IntroSection.Points.1.Part2')}</strong>
                    </span>,
                    <span>
                      {t('GrantsLanding.IntroSection.Points.1.Part1')}{" "}
                      <strong>{t('GrantsLanding.IntroSection.Points.1.Part2')}</strong>
                    </span>
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  "& path": {
                    fill: "rgba(41, 98, 255, 1)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <BurstPucker
                    sx={{
                      width: { xs: "15px", sm: "20px" },
                      height: { xs: "15px", sm: "20px" },
                      flexShrink: "0",
                    }}
                  />
                  {t('GrantsLanding.IntroSection.Points.2')}
                </Box>
              </Box>

              <Box
                sx={{
                  "& path": {
                    fill: "rgba(41, 98, 255, 1)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <BurstPucker
                    sx={{
                      width: { xs: "15px", sm: "20px" },
                      height: { xs: "15px", sm: "20px" },
                      flexShrink: "0",
                    }}
                  />
                  {t('GrantsLanding.IntroSection.Points.3')}
                </Box>
              </Box>
            </Box>
          }
          info={[
            {
              text: t('GrantsLanding.IntroSection.Chip'),
              bgColor: "rgba(255, 238, 88, 1)",
              color: "#000000",
              sx: { borderRadius: { xs: "8px", sm: "8px" }, px: "16px" },
              textSx: {
                fontSize: { xs: "16px", sm: "16px" },
                lineHeight: { xs: "19.2px", sm: "19.2px" },
                letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                fontFamily: montserratFamily,
                fontWeight: "600",
              },
            },
          ]}
          image={{
            src: `${cdnUrl}/grantsLanding/firstSection.png`,
            width: null,
            height: null,
          }}
          mobileImage={{
            src: `${cdnUrl}/grantsLanding/firstSection_mobile.png`,
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
              <FreeDesk
                lang={lang}
                sx={{
                  position: "absolute",
                  top: { xs: "2%", sm: "unset" },
                  left: { xs: "-2%", sm: "-8%" },
                  width: { xs: "95px", sm: "123px" },
                  height: { xs: "95px", sm: "123px" },
                }}
              />
              <Image
                imageSrc={{
                  src: `${cdnUrl}/grantsLanding/firstSection_withoutText_desk.png`,
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
              <Box
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
                  {t('GrantsLanding.IntroSection.Prize')}
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
              </Box>
            </Box>
          }
          button={{
            text: t('GrantsLanding.IntroSection.Button'),
            onClick: () => {
              scrollToForm();
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
        sx={{ background: "rgba(19, 19, 19, 1)" }}
      >
        <SectionContainer sx={{ py: { xs: "48px", sm: "60px" } }}>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "30px", sm: "32px" },
            }}
          >
            {[
              {
                title: t('GrantsLanding.FirstSection.Option1.Title'),
                text: t('GrantsLanding.FirstSection.Option1.Text'),
              },
              {
                title: t('GrantsLanding.FirstSection.Option2.Title'),
                text: t('GrantsLanding.FirstSection.Option2.Text'),
              },
              {
                title: t('GrantsLanding.FirstSection.Option3.Title'),
                text: t('GrantsLanding.FirstSection.Option3.Text'),
              },
              {
                title: t('GrantsLanding.FirstSection.Option4.Title'),
                text: t('GrantsLanding.FirstSection.Option4.Text'),
              },
            ].map((item) => (
              <Stack
                sx={{
                  color: "white",
                  width: "100%",
                  gap: { xs: "16px", sm: "20px" },
                }}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    "& svg": {
                      marginRight: "8px",
                    },
                    "& path": {
                      fill: "rgba(41, 98, 255, 1)",
                    },
                  }}
                >
                  <BurstStar />
                  <Typography
                    component={"p"}
                    fontFamily={montserratFamily}
                    fontSize={{ xs: "26px", sm: "30px" }}
                    lineHeight={{ xs: "26px", sm: "30px" }}
                    fontWeight={600}
                    letterSpacing={"-2px"}
                  >
                    {item.title}
                  </Typography>
                </Stack>
                <Typography
                  component={"p"}
                  fontFamily={montserratFamily}
                  fontSize={{ xs: "14px", sm: "16px" }}
                  lineHeight={{ xs: "16.8px", sm: "19.2px" }}
                  letterSpacing={"-0.5px"}
                  fontWeight={500}
                  color={"rgba(189, 189, 189, 1)"}
                >
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <SectionContainer
        sectionTitle={{
          renderTitle: () => (
            <Typography
              fontSize={{ xs: "32px", sm: "42px" }}
              lineHeight={{ xs: "38.4px", sm: "42px" }}
              fontFamily={montserratFamily}
              fontWeight={700}
              letterSpacing={{ xs: "-1px", sm: "-2px" }}
            >
              <Box
                component={"span"}
                sx={{
                  position: "relative",
                  color: "rgba(0, 200, 83, 1)",
                  "& path": {
                    stroke: "rgba(0, 200, 83, 1)",
                  },
                }}
              >
                {t('GrantsLanding.SecondSection.Title.Part1')}
                <FirstUnderline
                  sx={{
                    position: "absolute",
                    bottom: lang === "vi" ? "-12px" : "-6px",
                    left: "0",
                    width: "100%",
                    "& path": {
                      strokeWidth:
                        lang === "uk"
                          ? "9px"
                          : lang === "vi"
                          ? "8px"
                          : lang === "en"
                          ? "9px"
                          : "7px",
                    },
                  }}
                />
              </Box>{" "}
              {t('GrantsLanding.SecondSection.Title.Part2')}
            </Typography>
          ),
          description: t('GrantsLanding.SecondSection.Description'),
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: { xs: "20px", sm: "22px" },
              minWidth: { xs: "auto", sm: "555px" },
              gap: "16px",
              backgroundColor: "rgba(225, 245, 254, 1)",
              borderRadius: "30px",
              width: "100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                borderRadius: "100px",
                padding: "12px 24px",
                gap: "8px",
                backgroundColor: "rgba(179, 229, 252, 1)",
              }}
            >
              <Typography
                fontSize={{ xs: "16px", sm: "18px" }}
                lineHeight={{ xs: "19.2px", sm: "20.6px" }}
                fontFamily={montserratFamily}
                fontWeight={500}
                color={"rgba(13, 71, 161, 1)"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  zIndex: "2",
                  "& svg": {
                    width: { xs: "20px", sm: "18px" },
                    height: { xs: "20px", sm: "18px" },
                  },
                  letterSpacing: "-1px",
                }}
              >
                {iconBase["UserHandUpTwoTone"]}

                {t('GrantsLanding.SecondSection.Card1.Chip')}
              </Typography>
            </Box>
            <Typography
              component={"p"}
              sx={{
                fontSize: { xs: "20px", sm: "24px" },
                lineHeight: { xs: "24px", sm: "28.8px" },
                fontFamily: montserratFamily,
                fontWeight: 500,
                marginBottom: { xs: "180px" },
                zIndex: "2",
                letterSpacing: { xs: "-1px", sm: "-1.3px" },
              }}
            >
              {t('GrantsLanding.SecondSection.Card1.Text.1')}
              <Box
                component={"br"}
                sx={{ display: { xs: "none", sm: "block" } }}
              />{" "}
              {t('GrantsLanding.SecondSection.Card1.Text.2')}
              <Box
                component={"br"}
                sx={{ display: { xs: "none", sm: "block" } }}
              />
              {getTranslatedText(
                <>
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </>,
                t('GrantsLanding.SecondSection.Card1.Text.3'),
                <></>,
                <></>
              )}
              {/* <Box
                component={"br"}
                sx={{
                  display: {
                    xs: lang === "en" ? "block" : "none",
                    sm: "block",
                  },
                }}
              /> */}
              {getTranslatedText(
                <>
                  {/* <Box
                    component={"br"}
                    sx={{ display: { xs: "block", sm: "block" } }}
                  /> */}
                </>,
                <>
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "block", sm: "block" } }}
                  />
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </>,
                <>
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "block", sm: "block" } }}
                  />
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                </>,
                <Box
                  component={"br"}
                  sx={{ display: { xs: "block", sm: "block" } }}
                />
              )}
              <Box
                component={"br"}
                sx={{
                  display: {
                    xs: lang === "en" ? "block" : "block",
                    sm: "none",
                  },
                }}
              />
            </Typography>
            {getPicture(
              `${cdnUrl}/grantsLanding/thirdSection.png`,
              null,
              null,
              {
                position: "absolute",
                bottom: lang === "ru" || lang === "uk" ? "0px" : "-6px",
                right: "0",
                display: { xs: "none", sm: "block" },
                zIndex: "2",
              },
              {
                maxHeight: { sm: "300px" },
              }
            )}
            {getPicture(
              `${cdnUrl}/grantsLanding/thirdSection.png`,
              null,
              null,
              {
                position: "absolute",
                bottom: lang === "ru" || lang === "uk" ? "0px" : "-6px",
                right: "0",
                display: { xs: "block", sm: "none" },
                zIndex: "2",
              },
              {
                width: "100%",
                maxWidth: "261px",
              }
            )}
            <ThirdSectionCardBg
              sx={{
                position: "absolute",
                bottom: "0",
                width: { xs: "82%", sm: "87%" },
                height: { xs: "auto", sm: "41%" },
                right: 0,
                zIndex: 1,
                maxHeight: "100%",
              }}
            />
          </Box>
          <Stack gap={"16px"} width={"100%"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: { xs: "20px", sm: "22px" },
                gap: "16px",
                backgroundColor: "rgba(232, 245, 233, 1)",
                height: "100%",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100px",
                  padding: "12px 24px",
                  gap: "8px",
                  backgroundColor: "rgba(200, 230, 201, 1)",
                }}
              >
                <Typography
                  fontSize={{ xs: "16px", sm: "18px" }}
                  lineHeight={{ xs: "19.2px", sm: "20.6px" }}
                  fontFamily={montserratFamily}
                  fontWeight={500}
                  color={"rgba(27, 94, 32, 1)"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "& svg": {
                      width: { xs: "20px", sm: "18px" },
                      height: { xs: "20px", sm: "18px" },
                    },
                    letterSpacing: "-1px",
                  }}
                >
                  {iconBase["FireTwoTone"]}

                  {t('GrantsLanding.SecondSection.Card2.Chip')}
                </Typography>
              </Box>
              <Typography
                component={"p"}
                sx={{
                  minHeight: { xs: "2.25rem", sm: "2.5rem" },
                  fontFamily: montserratFamily,
                  fontSize: { xs: "20px", sm: "24px" },
                  lineHeight: { xs: "24px", sm: "28.8px" },
                  fontWeight: 500,
                  letterSpacing: { xs: "-1px", sm: "-1.3px" },
                }}
              >
                {t('GrantsLanding.SecondSection.Card2.Text')}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: { xs: "20px", sm: "22px" },
                gap: "16px",
                backgroundColor: "rgba(255, 243, 224, 1)",
                height: "100%",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100px",
                  padding: "12px 24px",
                  gap: "8px",
                  backgroundColor: "rgba(255, 224, 178, 1)",
                }}
              >
                <Typography
                  fontSize={{ xs: "16px", sm: "18px" }}
                  lineHeight={{ xs: "19.2px", sm: "20.6px" }}
                  fontFamily={montserratFamily}
                  fontWeight={500}
                  color={"rgba(230, 81, 0, 1)"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "& svg": {
                      width: { xs: "20px", sm: "18px" },
                      height: { xs: "20px", sm: "18px" },
                    },
                    letterSpacing: "-1px",
                  }}
                >
                  {iconBase["verifiedCheckTwoTone"]}

                  {t('GrantsLanding.SecondSection.Card3.Chip')}
                </Typography>
              </Box>
              <Typography
                component={"p"}
                sx={{
                  minHeight: { xs: "2.25rem", sm: "2.5rem" },
                  fontFamily: montserratFamily,
                  fontSize: { xs: "20px", sm: "24px" },
                  lineHeight: { xs: "24px", sm: "28.8px" },
                  fontWeight: "500",
                  letterSpacing: { xs: "-1px", sm: "-1.3px" },
                }}
              >
                {t('GrantsLanding.SecondSection.Card3.Text')}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </SectionContainer>

      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{ background: "transparent", position: "relative" }}
      >
        <FourthSectionBg
          sx={{
            display: { xs: "none", sm: "block" },
            position: "absolute",
            width: "100%",
            height: "unset",
            top: { xs: "34%", sm: "59%" },
            transform: "translateY(-50%)",
          }}
        />
        <FourthSectionMobileBg
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
            renderTitle: () => (
              <Typography
                fontSize={{ xs: "32px", sm: "42px" }}
                lineHeight={{ xs: "38.4px", sm: "42px" }}
                fontFamily={montserratFamily}
                fontWeight={700}
                letterSpacing={{ xs: "-1px", sm: "-2px" }}
                textAlign={"center"}
              >
                {getTranslatedText(
                  <>
                    {t('GrantsLanding.ThirdSection.Title.Part1')}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        position: "relative",
                        color: "rgba(255, 109, 0, 1)",
                        "& path": {
                          stroke: "rgba(255, 109, 0, 1)",
                        },
                      }}
                    >
                      {t('GrantsLanding.ThirdSection.Title.Part2')}
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                          "& path": {
                            strokeWidth:
                              lang === "uk"
                                ? "7px"
                                : lang === "vi"
                                ? "17px"
                                : "10px",
                          },
                        }}
                      />
                    </Box>{" "}
                    {t('GrantsLanding.ThirdSection.Title.Part3')}
                  </>,
                  <>
                    {t('GrantsLanding.ThirdSection.Title.Part1')}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        position: "relative",
                        color: "rgba(255, 109, 0, 1)",
                        "& path": {
                          stroke: "rgba(255, 109, 0, 1)",
                          strokeWidth:
                            lang === "uk"
                              ? "7px"
                              : lang === "vi"
                              ? "17px"
                              : "10px",
                        },
                      }}
                    >
                      {t('GrantsLanding.ThirdSection.Title.Part2')}
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                        }}
                      />
                    </Box>{" "}
                    {t('GrantsLanding.ThirdSection.Title.Part3')}
                  </>,
                  <>
                    {t('GrantsLanding.ThirdSection.Title.Part1')}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        position: "relative",
                        color: "rgba(255, 109, 0, 1)",
                        "& path": {
                          stroke: "rgba(255, 109, 0, 1)",
                        },
                      }}
                    >
                      {t('GrantsLanding.ThirdSection.Title.Part2')}
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                          "& path": {
                            strokeWidth:
                              lang === "uk"
                                ? "7px"
                                : lang === "vi"
                                ? "17px"
                                : "10px",
                          },
                        }}
                      />
                    </Box>{" "}
                    {t('GrantsLanding.ThirdSection.Title.Part3')}
                  </>,
                  <>
                    {t('GrantsLanding.ThirdSection.Title.Part1')}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        position: "relative",
                        color: "rgba(255, 109, 0, 1)",
                        "& path": {
                          stroke: "rgba(255, 109, 0, 1)",
                        },
                      }}
                    >
                      {t('GrantsLanding.ThirdSection.Title.Part2')}
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                          "& path": {
                            strokeWidth:
                              lang === "uk"
                                ? "7px"
                                : lang === "vi"
                                ? "17px"
                                : "10px",
                          },
                        }}
                      />
                    </Box>{" "}
                    {t('GrantsLanding.ThirdSection.Title.Part3')}
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
              width: "22px",
              height: "22px",
              top: { xs: "13%", sm: "27%" },
              left: { xs: "84%", sm: "10%" },
              zIndex: "0",
            }}
          />
          <Star
            sx={{
              position: "absolute",
              width: { xs: "20.2px", sm: "39px" },
              height: { xs: "20.2px", sm: "39px" },
              left: { xs: "8%", sm: "42%" },
              bottom: { xs: "29.8%", sm: "12%" },
              zIndex: "0",
            }}
          />
          <Star
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              width: "24px",
              height: "24px",
              bottom: "32%",
              right: "0",
              zIndex: "0",
            }}
          />
          <SectionTextCardList
            gridContainerProps={{ sx: { zIndex: 1, position: "relative" } }}
            accentColor="error"
            gridItemProps={{ xs: 12, sm: 4 }}
            cardVariant="v4"
            data={[
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      "& svg": {
                        width: { xs: "78px", sm: "94px" },
                        height: { xs: "78px", sm: "94px" },
                        marginBottom: { xs: "20px", sm: "24px" },
                      },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                iconName: "backpackTwoTone",
                title: t('GrantsLanding.ThirdSection.Card1.Title'),
                renderTitle: (text) => (
                  <Box
                    component={"span"}
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "22px", sm: "24px" },
                      lineHeight: { xs: "22px", sm: "24px" },
                      letterSpacing: "-1px",
                      fontWeight: "600",
                    }}
                  >
                    {text}
                  </Box>
                ),
                text: (
                  <Box
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "14px", sm: "16px" },
                      lineHeight: { xs: "16.8px", sm: "20.8px" },
                      letterSpacing: "-0.5px",
                      fontWeight: "500",
                    }}
                  >
                    {t('GrantsLanding.ThirdSection.Card1.Text')}
                  </Box>
                ),
                sx: {
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0px 0px 40px 0px rgba(186, 186, 186, 0.20)",
                  padding: "24px",
                },
              },
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      "& svg": {
                        width: { xs: "78px", sm: "94px" },
                        height: { xs: "78px", sm: "94px" },
                        marginBottom: { xs: "20px", sm: "24px" },
                      },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                iconName: "academicCapTwoTone",
                title: t('GrantsLanding.ThirdSection.Card2.Title'),
                renderTitle: (text) => (
                  <Box
                    component={"span"}
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "22px", sm: "24px" },
                      lineHeight: { xs: "22px", sm: "24px" },
                      letterSpacing: "-1px",
                      fontWeight: "600",
                    }}
                  >
                    {text}
                  </Box>
                ),
                text: (
                  <Box
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "14px", sm: "16px" },
                      lineHeight: { xs: "16.8px", sm: "20.8px" },
                      letterSpacing: "-0.5px",
                      fontWeight: "500",
                    }}
                  >
                    {t('GrantsLanding.ThirdSection.Card2.Text')}
                  </Box>
                ),
                sx: {
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0px 0px 40px 0px rgba(186, 186, 186, 0.20)",
                  padding: "24px",
                },
              },
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      "& svg": {
                        width: { xs: "78px", sm: "94px" },
                        height: { xs: "78px", sm: "94px" },
                        marginBottom: { xs: "20px", sm: "24px" },
                      },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                iconName: "caseTwoTone",
                iconColor: "rgba(255, 109, 0, 1)",
                title: t('GrantsLanding.ThirdSection.Card3.Title'),
                renderTitle: (text) => (
                  <Box
                    component={"span"}
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "22px", sm: "24px" },
                      lineHeight: { xs: "22px", sm: "24px" },
                      letterSpacing: "-1px",
                      fontWeight: "600",
                    }}
                  >
                    {text}
                  </Box>
                ),
                text: (
                  <Box
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: { xs: "14px", sm: "16px" },
                      lineHeight: { xs: "16.8px", sm: "20.8px" },
                      letterSpacing: "-0.5px",
                      fontWeight: "500",
                    }}
                  >
                    {t('GrantsLanding.ThirdSection.Card3.Text')}
                  </Box>
                ),
                sx: {
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0px 0px 40px 0px rgba(186, 186, 186, 0.20)",
                  padding: "24px",
                },
              },
            ]}
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <AnimatedListSection2
        accentColor="error"
        button={{
          btnAction: scrollToForm,
          btnText: t('GrantsLanding.FourthSection.Button'),
        }}
        sectionTitle={{
          sx: { maxWidth: "unset" },
          renderTitle: () => (
            <Typography
              fontSize={{ xs: "32px", sm: "42px" }}
              lineHeight={{ xs: "38.4px", sm: "42px" }}
              fontFamily={montserratFamily}
              fontWeight={700}
              letterSpacing={{ xs: "-1px", sm: "-2px" }}
              // marginBottom={{ xs: "0", sm: "-25px" }}
            >
              {getTranslatedText(
                <>
                  {t('GrantsLanding.FourthSection.Title.Part1')}{" "}
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "block", sm: "none" } }}
                  />
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    <FirstDecoration
                      sx={{
                        position: "absolute",
                        right: { xs: "-32px", sm: "-34px" },
                        top: { xs: "unset", sm: "-2px" },
                      }}
                    />
                    {t('GrantsLanding.FourthSection.Title.Part2')}
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-11px",
                        width: "100%",
                        "& path": { strokeWidth: "8px" },
                      }}
                    />
                  </Box>
                </>,
                <>
                  {t('GrantsLanding.FourthSection.Title.Part1')}{" "}
                  {/* <Box
                    component={"br"}
                    sx={{ display: { xs: "block", sm: "none" } }}
                  /> */}
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    {t('GrantsLanding.FourthSection.Title.Part2')}
                    <Box component={"span"} sx={{ position: "relative" }}>
                      {t('GrantsLanding.FourthSection.Title.Part3')}
                      <FirstDecoration
                        sx={{
                          position: "absolute",
                          right: { xs: "-32px", sm: "-34px" },
                          top: { xs: "unset", sm: "-2px" },
                        }}
                      />
                    </Box>
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-11px",
                        width: "100%",
                        "& path": { strokeWidth: "8px" },
                      }}
                    />
                  </Box>
                </>,
                <>
                  {t('GrantsLanding.FourthSection.Title.Part1')}{" "}
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "block", sm: "none" } }}
                  />
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    <FirstDecoration
                      sx={{
                        position: "absolute",
                        right: { xs: "-33px", sm: "-36px" },
                        top: { xs: "-12px", sm: "-12px" },
                      }}
                    />
                    {t('GrantsLanding.FourthSection.Title.Part2')}
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "100%",
                        "& path": { strokeWidth: "7px" },
                      }}
                    />
                  </Box>
                </>,
                <>
                  {t('GrantsLanding.FourthSection.Title.Part1')}{" "}
                  <Box
                    component={"br"}
                    sx={{ display: { xs: "block", sm: "none" } }}
                  />
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    <FirstDecoration
                      sx={{
                        position: "absolute",
                        right: { xs: "-33px", sm: "-36px" },
                        top: { xs: "-12px", sm: "-12px" },
                      }}
                    />
                      {t('GrantsLanding.FourthSection.Title.Part2')}
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "100%",
                        "& path": { strokeWidth: "8px" },
                      }}
                    />
                  </Box>
                </>
              )}
            </Typography>
          ),
          description: t('GrantsLanding.FourthSection.Description'),
          descriptionSx: {
            fontFamily: montserratFamily,
            letterSpacing: { xs: "-1px", sm: "-1px" },
            fontSize: { xs: "20px", sm: "22px" },
            lineHeight: { xs: "26px", sm: "28.6px" },
            fontWeight: "500",
          },
        }}
        imageSx={{ border: "none", padding: "0" }}
        data={[
          {
            title: (
              <Box
                letterSpacing={"-1px"}
                lineHeight={{ xs: "24px", sm: "24.2px" }}
              >
                {t('GrantsLanding.FourthSection.Options.1.Title')}
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {t('GrantsLanding.FourthSection.Options.1.Text')}
              </Box>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_1.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: (
              <Box
                letterSpacing={"-1px"}
                lineHeight={{ xs: "24px", sm: "24.2px" }}
              >
                {t('GrantsLanding.FourthSection.Options.2.Title')}
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                <>
                  {t('GrantsLanding.FourthSection.Options.2.Text.Part1')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.2.Text.Part2')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.2.Text.Part3')}
                </>
              </Box>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_2.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: (
              <Box
                letterSpacing={"-1px"}
                lineHeight={{ xs: "24px", sm: "24.2px" }}
              >
                {t('GrantsLanding.FourthSection.Options.3.Title')}
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                <>
                  {t('GrantsLanding.FourthSection.Options.3.Text.Part1')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.3.Text.Part2')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.3.Text.Part3')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.3.Text.Part3')}
                </>
              </Box>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_3.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: (
              <Box
                letterSpacing={"-1px"}
                lineHeight={{ xs: "24px", sm: "24.2px" }}
              >
                {t('GrantsLanding.FourthSection.Options.4.Title')}
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                <>
                  {t('GrantsLanding.FourthSection.Options.4.Text.Part1')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.4.Text.Part2')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.4.Text.Part3')}
                </>
              </Box>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_4.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: (
              <Box
                letterSpacing={"-1px"}
                lineHeight={{ xs: "24px", sm: "24.2px" }}
              >
                {t('GrantsLanding.FourthSection.Options.5.Title')}
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                <>
                  {t('GrantsLanding.FourthSection.Options.5.Text.Part1')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.5.Text.Part2')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.5.Text.Part3')}
                </>
              </Box>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_5.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: (
              <Box
                letterSpacing={"-1px"}
                lineHeight={{ xs: "24px", sm: "24.2px" }}
              >
                {t('GrantsLanding.FourthSection.Options.6.Title')}
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                <>
                  {t('GrantsLanding.FourthSection.Options.6.Text.Part1')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.6.Text.Part2')}
                  <br />
                  {t('GrantsLanding.FourthSection.Options.6.Text.Part3')}
                </>
              </Box>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_6.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: (
              <Box
                letterSpacing={"-1px"}
                lineHeight={{ xs: "24px", sm: "24.2px" }}
              >
                {t('GrantsLanding.FourthSection.Options.7.Title')}
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {t('GrantsLanding.FourthSection.Options.7.Text')}
              </Box>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_7.png`,
              width: 514,
              height: 696,
            },
          },
        ]}
      />

      <SectionContainer sx={{ overflowX: "hidden" }}>
        <Stack
          sx={{
            flexDirection: { xs: "column-reverse", sm: "row" },
            backgroundColor: "rgba(19, 19, 19, 1)",
            borderRadius: { xs: "24px", sm: "32px" },
            padding: { xs: "24px", sm: "40px 32px" },
            gap: { xs: "32px", sm: "50px" },
            position: "relative",
          }}
        >
          <SixthSectionDecoration1
            sx={{
              position: "absolute",
              top: { xs: "-18px", sm: "-33px" },
              right: { xs: "-25px", sm: "-38px" },
              width: { xs: "74px", sm: "114px" },
              height: { xs: "67px", sm: "103px" },
            }}
          />
          <SixthSectionDecoration2
            sx={{
              position: "absolute",
              bottom: { xs: "-8px", sm: "12%" },
              left: { xs: "-20px", sm: "-31px" },
              width: { xs: "57.81px", sm: "83px" },
              height: { xs: "32.37px", sm: "53px" },
            }}
          />
          {getPicture(
            `${cdnUrl}/grantsLanding/sixthSection.png`,
            752,
            948,
            {
              maxWidth: { xs: "295px", sm: "100%" },
              width: "100%",
              mx: { xs: "auto", sm: 0 },
              position: "relative",
              borderRadius: { xs: "20px", sm: "21.37px" },
              overflow: "hidden",
            },
            {
              maxWidth: { xs: "295px", sm: "100%" },
              width: "100%",
              height: { xs: "224px", sm: "unset" },
              objectFit: "cover",
              borderRadius: { xs: "20px", sm: "22px" },
              mx: { xs: "auto", sm: 0 },
              position: { xs: "static", sm: "absolute" },
              top:
                lang === "en" || lang === "vi"
                  ? "-76px"
                  : // : lang === "uk"
                    "-45px",
              // ? "-45px"
              // : "0",
            }
          )}
          <Stack gap={"32px"}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: montserratFamily,
                fontSize: { xs: "28px", sm: "36px" },
                letterSpacing: { xs: "-1px", sm: "-2px" },
                lineHeight: { xs: "30.8px", sm: "36px" },
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              <>
                <span style={{ color: "rgba(255, 255, 0, 1)" }}>
                  {t('GrantsLanding.FifthSection.Title.Part1')}
                </span>{" "}
                {t('GrantsLanding.FifthSection.Title.Part2')}
              </>
            </Typography>
            <Stack gap={{ xs: "12px", sm: "16px" }}>
              {[
                {
                  title: t('GrantsLanding.FifthSection.Option1'),
                },
                {
                  title: t('GrantsLanding.FifthSection.Option2'),
                },
                {
                  title: t('GrantsLanding.FifthSection.Option3'),
                },
              ].map((item) => (
                <Stack
                  sx={{
                    color: "white",
                    width: "100%",
                    gap: { xs: "16px", sm: "20px" },
                  }}
                >
                  <Stack
                    sx={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      gap: { xs: "10px", sm: "12px" },

                      "& svg": {
                        width: "24px",
                        height: "24px",
                      },
                      "& path": {
                        fill: "rgba(255, 109, 0, 1)",
                      },
                    }}
                  >
                    <BurstPucker />
                    <Typography
                      component={"p"}
                      fontFamily={montserratFamily}
                      // fontSize={{ xs: "1rem", sm: "20px" }}
                      fontSize={{ xs: "20px", sm: "24px" }}
                      fontWeight={500}
                      color={"rgba(255, 224, 178, 1)"}
                      width={"100%"}
                      letterSpacing={{ xs: "-1px", sm: "-1.5px" }}
                      lineHeight={{ xs: "24px", sm: "28.8px" }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
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
            description: t('GrantsLanding.SixthSection.Description'),
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
                fontSize={{ xs: "32px", sm: "42px" }}
                fontFamily={montserratFamily}
                fontWeight={700}
                letterSpacing={{ xs: "-1px", sm: "-2px" }}
                lineHeight={{ xs: "38.4px", sm: "42px" }}
                textAlign={"center"}
              >
                {getTranslatedText(
                  <>
                    {t('GrantsLanding.SixthSection.Title.Part1')}{" "}
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
                      {t('GrantsLanding.SixthSection.Title.Part2')}
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                          "& path": { strokeWidth: "6px" },
                        }}
                      />
                    </Box>
                  </>,
                  <>
                    {t('GrantsLanding.SixthSection.Title.Part1')}{" "}
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
                      {t('GrantsLanding.SixthSection.Title.Part2')}
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                        }}
                      />
                    </Box>
                  </>,
                  <>
                    {t('GrantsLanding.SixthSection.Title.Part1')}{" "}
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
                      {t('GrantsLanding.SixthSection.Title.Part2')}
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-14px",
                          left: "0",
                          width: "100%",
                        }}
                      />
                    </Box>
                  </>,
                  <>
                    {t('GrantsLanding.SixthSection.Title.Part1')}{" "}
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
                      {t('GrantsLanding.SixthSection.Title.Part2')}
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-11px",
                          left: "0",
                          width: "100%",
                          "& path": { strokeWidth: "7px" },
                        }}
                      />
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
              width: "32px",
              height: "32px",
              bottom: "39px",
              right: "0",
              zIndex: "0",
              "& path": { fill: "rgba(0, 200, 83, 1)" },
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
                name: t('GrantsLanding.SixthSection.Card1.Text'),
                social: "788sashaz",
                href: "https://instagram.com/788sashaz?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_1.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card2.Text'),
                href: "https://www.instagram.com/p/CzawxJSL3i6/?igshid=NzBmMjdhZWRiYQ==",
                social: "bezglasnyyalexey",
                img: "seventhSection_2.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card3.Text'),
                social: "daryna.zuieva",
                socialName: "facebook",
                href: "https://www.facebook.com/daryna.zuieva",
                img: "seventhSection_3.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card4.Text'),
                social: "karin.litvinova",
                href: "https://instagram.com/karin.litvinova?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_4.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card5.Text'),
                social: "ai_kovalov",
                href: "https://instagram.com/ai_kovalov?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_5.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card6.Text'),
                social: "manzuritta",
                img: "seventhSection_6.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card7.Text'),
                social: "denyspimenov",
                href: "https://instagram.com/denyspimenov?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_7.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card8.Text'),
                social: "wlitvinova",
                href: "https://instagram.com/wlitvinova?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_8.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card9.Text'),
                social: "mary_boichenk",
                href: "https://instagram.com/mary_boichenko?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_9.png",
              },
              {
                name: t('GrantsLanding.SixthSection.Card10.Text'),
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

      <FormSection
        button={button}
        nodeRef={formRef}
        bgColor="rgba(255, 238, 88, 1)"
        buttonColor="#000000"
        renderTitle={() => (
          <Box
            sx={{
              lineHeight: { xs: "26.4px", sm: "35.2px" },
              letterSpacing: { xs: "-1px", sm: "-2px" },
              fontSize: { xs: "24px", sm: "35px" },
              fontWeight: "600",
            }}
          >
            <>
                {t('GrantsLanding.SeventhSection.Title.Part1')}{" "}
                <span style={{ color: "rgba(213, 0, 0, 1)" }}>
                  {t('GrantsLanding.SeventhSection.Title.Part2')}
                </span>{" "}
                {t('GrantsLanding.SeventhSection.Title.Part3')}
            </>
          </Box>
        )}
        description={
          <Box
            sx={{
              lineHeight: { xs: "16.8px", sm: "26.4px" },
              letterSpacing: { xs: "-0.5px", sm: "-1px" },
              fontSize: { xs: "14px", sm: "22px" },
              fontWeight: "600",
              fontFamily: montserratFamily,
              color: "rgba(97, 97, 97, 1)",
            }}
          >
            {t('GrantsLanding.SeventhSection.Description')}
          </Box>
        }
        hubspotConfig={{
          portalId: "139617067",
          formId: "d9a6bed0-c54d-4981-a619-11adc2e36fcf",
          onSubmit: onSubmit,
        }}
        formTranslations={
          lang === "ru"
            ? {
                language: "ru",
                content: {
                  acceptTerms: (
                    <Box
                      sx={{
                        fontFamily: montserratFamily,
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        textAlign: "center",
                      }}
                    >
                      {t('GrantsLanding.SeventhSection.Terms')}
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      {t('GrantsLanding.SeventhSection.Submited.Part1')}
                      <br />
                      {t('GrantsLanding.SeventhSection.Submited.Part2')}
                    </>
                  ),
                },
              }
            : lang === "uk"
            ? {
                language: "uk",
                content: {
                  acceptTerms: (
                    <Box
                      sx={{
                        fontFamily: montserratFamily,
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        textAlign: "center",
                      }}
                    >
                      {t('GrantsLanding.SeventhSection.Terms')}
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      {t('GrantsLanding.SeventhSection.Submited.Part1')}
                      <br />
                      {t('GrantsLanding.SeventhSection.Submited.Part2')}
                    </>
                  ),
                },
              }
            : lang === "vi"
            ? {
                language: "vi",
                button: "Đăng ký",
                content: {
                  acceptTerms: (
                    <Box
                      sx={{
                        fontFamily: montserratFamily,
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        textAlign: "center",
                      }}
                    >
                      {t('GrantsLanding.SeventhSection.Terms')}
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      {t('GrantsLanding.SeventhSection.Submited.Part1')}
                      <br />
                      {t('GrantsLanding.SeventhSection.Submited.Part2')}
                    </>
                  ),
                },
              }
            : {
                language: "en",
                button: "Subscribe",
                content: {
                  acceptTerms: (
                    <Box
                      sx={{
                        fontFamily: montserratFamily,
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        textAlign: "center",
                      }}
                    >
                      {t('GrantsLanding.SeventhSection.Terms')}
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      {t('GrantsLanding.SeventhSection.Submited.Part1')}
                      <br />
                      {t('GrantsLanding.SeventhSection.Submited.Part2')}
                    </>
                  ),
                },
              }
        }
      />

      <AccordionsSectionV2
        title={t('GrantsLanding.EigthSection.Title')}
        renderTitle={() => (
          <Typography
            lineHeight={{ xs: "32px", sm: "42px" }}
            letterSpacing={{ xs: "-1px", sm: "-2px" }}
            fontSize={{ xs: "32px", sm: "42px" }}
            fontFamily={montserratFamily}
            fontWeight={700}
          >
            <Box component={"span"} sx={{ position: "relative" }}>
              {t('GrantsLanding.EigthSection.Title')}
              <FirstUnderline
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: "-8px",
                  width: "100%",
                  "& path": { strokeWidth: "16px" },
                }}
              />
            </Box>
          </Typography>
        )}
        description={t('GrantsLanding.EigthSection.Description')}
        descriptionSx={{
          letterSpacing: { xs: "-1px", sm: "-1px" },
          fontFamily: montserratFamily,
          fontSize: { xs: "20px", sm: "22px" },
          lineHeight: { xs: "26px", sm: "28.6px" },
          fontWeight: "500",
        }}
        firstColumnData={[
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.1.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.1.Text')}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.2.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.2.Text')}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.3.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.3.Text')}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.4.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.4.Text.Part1')}
                <br/>
                <br/>
                {t('GrantsLanding.EigthSection.Questions.4.Text.Part2')}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.5.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.5.Text')}
              </Box>
            ),
          },
        ]}
        secondColumnData={[
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.6.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.6.Text')}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.7.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.7.Text.Part1')}
                <br/>
                <br/>
                {t('GrantsLanding.EigthSection.Questions.7.Text.Part2')}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.8.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.8.Text')}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.9.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.9.Text')}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {t('GrantsLanding.EigthSection.Questions.10.Title')}
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {t('GrantsLanding.EigthSection.Questions.10.Text')}
              </Box>
            ),
          },
        ]}
      />
    </>
  );
};
