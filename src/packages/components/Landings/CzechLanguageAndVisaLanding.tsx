import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import {
  AccordionSection,
  FormSection,
  IntroSectionV2,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionTwoColumnsContainer,
} from "../LandingSections";
import { ImageWithColorizedBorder } from "../LandingSections/ImageWithColorizedBorder";
import { defaultFontFamily, montserratFamily } from "../../constants/themeVars";
import { createTFunc, LangKey, Translations } from "../../config/langs";
import { ReactComponent as ThirdSection1 } from "../Icons/ThirdSection1.svg";
import { ReactComponent as SecondSection1 } from "../Icons/secondSection1.svg";
import { ReactComponent as SecondSection2 } from "../Icons/secondSection2.svg";
import { ReactComponent as SecondSection3 } from "../Icons/secondSection3.svg";
import { SectionList3AnimatedV2 } from "../LandingSections/SectionList3AnimatedV2";
import { BurstPucker } from "../Icons";
import { Service } from "../Icons/Service";
import { SectionImageColumnV2 } from "../LandingSections/components/SectionImageColumnV2";
import { SectionList1 } from "../LandingSections/components/SectionList1";
import { Visa1Underline } from "../LandingSections/images/lines/Visa1Underline";
import { LocationPoint } from "../Icons/LocationPoint";

interface Props {
  lang: LangKey;
  externalLocales?: Translations;
  onClick: VoidFunction;
  onSubmit?: VoidFunction;
  button?: { onClick: VoidFunction; text: string };
}

export const CzechLanguageAndVisaLanding: React.FC<Props> = ({
  lang = "ru",
  externalLocales,
  onClick,
  onSubmit,
}) => {
  const cdnUrl = "https://images.gostudy.cz/static";

  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    if (onClick) {
      onClick();
    }
    formRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const t = createTFunc(lang === "vi" ? "en" : lang, externalLocales);

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

  const secondSectionData = [
    {
      title: t("CzechLanguageAndVisaLanding.SecondSection.Cards.2.Title"),
      price: t("CzechLanguageAndVisaLanding.SecondSection.Cards.2.Price"),
      location: t("CzechLanguageAndVisaLanding.SecondSection.Cards.2.Location"),
    },
    {
      title: t("CzechLanguageAndVisaLanding.SecondSection.Cards.3.Title"),
      price: t("CzechLanguageAndVisaLanding.SecondSection.Cards.3.Price"),
      location: t("CzechLanguageAndVisaLanding.SecondSection.Cards.3.Location"),
    },
    {
      title: t("CzechLanguageAndVisaLanding.SecondSection.Cards.4.Title"),
      price: t("CzechLanguageAndVisaLanding.SecondSection.Cards.4.Price"),
      location: t("CzechLanguageAndVisaLanding.SecondSection.Cards.4.Location"),
    },
  ];

  const renderCard = (
    title: string,
    price: string,
    location: string,
    onClick: VoidFunction
  ) => (
    <Stack
      sx={{
        gap: { xs: "24px", sm: "20px" },
        marginTop: { xs: "0px", sm: "42px" },
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        component={"span"}
        sx={{
          color: "rgba(11, 78, 131, 1)",
          fontSize: { xs: "20px", sm: "27px" },
          lineHeight: { xs: "28.8px", sm: "36.96px" },
          fontWeight: "600",
          fontFamily: montserratFamily,
        }}
      >
        {title}
      </Box>
      <Stack gap={{ xs: "4px", sm: "8px" }}>
        <Box
          component={"span"}
          sx={{
            color: "#000000",
            fontSize: { xs: "16px", sm: "20px" },
            lineHeight: { xs: "22.88px", sm: "28.8px" },
            fontWeight: "600",
            fontFamily: montserratFamily,
          }}
        >
          {price}
        </Box>
        <Box
          component={"span"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "text.secondary",
            fontSize: { xs: "16px", sm: "18px" },
            lineHeight: { xs: "22.88px", sm: "25.56px" },
            fontWeight: "600",
          }}
        >
          <LocationPoint
            sx={{
              width: { xs: "18px", sm: "24px" },
              height: { xs: "18px", sm: "24px" },
            }}
          />
          {location}
        </Box>
      </Stack>
      <Button
        size="large"
        variant="outlined"
        onClick={onClick}
        sx={{
          fontsize: "18px",
          fontWeight: 600,
          marginTop: { sm: "20px" },
          padding: { xs: "7px 22px", sm: "13px 32px" },
          fontSize: { xs: "16px", sm: "18px" },
          lineHeight: { xs: "26px", sm: "28px" },
        }}
      >
        {t("CzechLanguageAndVisaLanding.SecondSection.Button")}
      </Button>
    </Stack>
  );

  const spanRef1 = useRef();
  const spanRef2 = useRef();
  const spanRef3 = useRef();
  const spanRef4 = useRef();

  const [showIntroSectionUnderline, setShowIntroSectionUnderline] =
    useState(true);
  const [showFirstSectionUnderline, setShowFirstSectionUnderline] =
    useState(true);
  const [showSecondSectionUnderline, setShowSecondSectionUnderline] =
    useState(true);
  const [showThirdSectionUnderline, setShowThirdSectionUnderline] =
    useState(true);

  useEffect(() => {
    if (!window) return;
    if (spanRef1.current) {
      const spanElement = spanRef1.current as HTMLSpanElement;
      const spanHeight = spanElement.getBoundingClientRect().height;
      const lineHeight = parseFloat(
        window.getComputedStyle(spanElement).lineHeight
      );

      if (spanHeight > lineHeight) {
        setShowIntroSectionUnderline(false);
      } else {
        setShowIntroSectionUnderline(true);
      }
    }

    if (spanRef2.current) {
      const spanElement = spanRef2.current as HTMLSpanElement;
      const spanHeight = spanElement.getBoundingClientRect().height;
      const lineHeight = parseFloat(
        window.getComputedStyle(spanElement).lineHeight
      );

      if (spanHeight > lineHeight) {
        setShowFirstSectionUnderline(false);
      } else {
        setShowFirstSectionUnderline(true);
      }
    }

    if (spanRef3.current) {
      const spanElement = spanRef3.current as HTMLSpanElement;
      const spanHeight = spanElement.getBoundingClientRect().height;
      const lineHeight = parseFloat(
        window.getComputedStyle(spanElement).lineHeight
      );

      if (spanHeight > lineHeight) {
        setShowSecondSectionUnderline(false);
      } else {
        setShowSecondSectionUnderline(true);
      }
    }

    if (spanRef4.current) {
      const spanElement = spanRef4.current as HTMLSpanElement;
      const spanHeight = spanElement.getBoundingClientRect().height;
      const lineHeight = parseFloat(
        window.getComputedStyle(spanElement).lineHeight
      );

      if (spanHeight > lineHeight) {
        setShowThirdSectionUnderline(false);
      } else {
        setShowThirdSectionUnderline(true);
      }
    }
  }, []);

  return (
    <>
      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{
          background: "#E1F5FE",
          position: "relative",
          overflow: "visible",
          paddingBottom: { xs: "198px", sm: "144px" },
        }}
      >
        <IntroSectionV2
          firstColumnSx={{
            minWidth: { sm: "500px !important" },
          }}
          leftSectionContainerSx={{
            paddingBottom: "0px !important",
            paddingTop: { sm: "80px !important" },
          }}
          containerSx={{
            paddingTop: { xs: "3em", sm: "3.5em" },
          }}
          renderTitle={() => (
            <Box component={"span"}>
              {t("CzechLanguageAndVisaLanding.IntroSection.Title.Part1")}{" "}
              <Box
                ref={spanRef1}
                component={"span"}
                sx={{
                  color: "#2962FF",
                  position: "relative",
                }}
              >
                {t("CzechLanguageAndVisaLanding.IntroSection.Title.Part2")}
                <Visa1Underline
                  sx={{
                    display: showIntroSectionUnderline ? "block" : "none",
                    sm: "none",
                    position: "absolute",
                    right: 0,
                    bottom: "-8px",
                    width: "100%",
                    "& path": {
                      strokeWidth:
                        lang === "vi" || lang === "en" ? "6px" : "6px",
                    },
                  }}
                />
              </Box>
              {lang === "ru" ? (
                <>
                  <Box
                    component={"span"}
                    sx={{ display: { xs: "none", sm: "inline" } }}
                  >
                    {" "}
                  </Box>
                  <Box
                    component={"span"}
                    sx={{ display: { xs: "inline", sm: "none" } }}
                  >
                    {" "}
                  </Box>
                </>
              ) : (
                " "
              )}
              {t("CzechLanguageAndVisaLanding.IntroSection.Title.Part3")}
            </Box>
          )}
          description={t(
            "CzechLanguageAndVisaLanding.IntroSection.Description"
          )}
          image={{
            src: `${cdnUrl}/CzechLanguageAndVisaLanding/${getTranslatedText(
              "into_en",
              "into_en",
              "into_ru",
              "into_uk"
            )}.png`,
            width: null,
            height: null,
            sx: { maxHeight: "526px", objectFit: "contain" },
          }}
          mobileImage={{
            src: `${cdnUrl}/CzechLanguageAndVisaLanding/${getTranslatedText(
              "intro_en",
              "intro_en",
              "into_ru",
              "into_uk"
            )}_mobile.png`,
            width: null,
            height: null,
            sx: { maxHeight: "306px", objectFit: "contain" },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "-332px", sm: "-202px" },
            width: "100%",
            px: { xs: "16px", sm: "24px" },
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "20px", sm: "32px" },
              padding: { xs: "16px", sm: "28px" },
              borderRadius: "20px",
              backgroundColor: "#ffffff",
              maxWidth: { sm: "1152px" },
              width: "100%",
              mx: "auto",
            }}
          >
            {[
              {
                icon: <SecondSection1 />,
                text: t(
                  "CzechLanguageAndVisaLanding.IntroSection.Chip.Options.1"
                ),
              },
              {
                icon: <SecondSection2 />,
                text: t(
                  "CzechLanguageAndVisaLanding.IntroSection.Chip.Options.2"
                ),
              },
              {
                icon: <SecondSection3 />,
                text: t(
                  "CzechLanguageAndVisaLanding.IntroSection.Chip.Options.3"
                ),
              },
            ].map((item, idx) => (
              <>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: { xs: "16px", sm: "20px" },
                    alignItems: "center",
                    maxWidth: { sm: "322px" },
                  }}
                >
                  <Box
                    component={"span"}
                    sx={{
                      flexShrink: "9",
                      "& > svg": {
                        height: { xs: "64px", sm: "64px" },
                        width: { xs: "64px", sm: "64px" },
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: montserratFamily,
                      fontSize: "16px",
                      lineHeight: "22.88px",
                      fontWeight: "600",
                    }}
                  >
                    {item.text}
                  </Box>
                </Stack>
                {idx !== 2 && (
                  <Box
                    sx={{
                      minHeight: "100%",
                      width: "1px",
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    }}
                  />
                )}
              </>
            ))}
          </Stack>
        </Box>
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized
        accentColor="warning"
        sx={{ paddingTop: { xs: "198px", sm: "164px" } }}
        overlayVariant="v10.5"
        overlayColor="rgba(237, 108, 2, 0.3)"
      >
        <SectionTwoColumnsContainer
          sectionContainerSx={{ paddingTop: "0px !important" }}
          firstColumn={
            <SectionImageColumnV2
              accentColor="warning"
              withBorder
              image={{
                src: `${cdnUrl}/CzechLanguageAndVisaLanding/first_en.png`,
                width: 514,
                height: 408,
              }}
              imageSx={{ "& img": { minHeight: "192px", objectFit: "cover" } }}
              sectionTitle={{
                title: (
                  <>
                    {t("CzechLanguageAndVisaLanding.FirstSection.Title.Part1")}{" "}
                    <Box
                      component={"span"}
                      ref={spanRef2}
                      sx={{ color: "#FB8C00", position: "relative" }}
                    >
                      {t(
                        "CzechLanguageAndVisaLanding.FirstSection.Title.Part2"
                      )}
                      <Visa1Underline
                        sx={{
                          display: showFirstSectionUnderline ? "block" : "none",
                          position: "absolute",
                          right: 0,
                          bottom: "-8px",
                          width: "100%",
                          "& path": {
                            strokeWidth:
                              lang === "vi" || lang === "en" ? "6px" : "10px",
                            stroke: "rgba(251, 140, 0, 1)",
                          },
                        }}
                      />
                    </Box>{" "}
                    {getTranslatedText(
                      "",
                      "",
                      t("CzechLanguageAndVisaLanding.FirstSection.Title.Part3"),
                      t("CzechLanguageAndVisaLanding.FirstSection.Title.Part3")
                    )}
                  </>
                ),
              }}
            />
          }
          secondColumn={
            <SectionList1
              accentColor="warning"
              list={[
                {
                  iconName: "donateMoney",
                  text: (
                    <Box
                      component={"span"}
                      sx={{
                        color: "#ffffff",
                        fontWeight: "400",
                        fontFamily: defaultFontFamily,
                      }}
                    >
                      <Box
                        component={"span"}
                        sx={{ fontWeight: "600", fontFamily: montserratFamily }}
                      >
                        {t(
                          "CzechLanguageAndVisaLanding.FirstSection.Point1.Part1"
                        )}
                      </Box>{" "}
                      {t(
                        "CzechLanguageAndVisaLanding.FirstSection.Point1.Part2"
                      )}
                    </Box>
                  ),
                },
                {
                  iconName: "form",
                  text: (
                    <Box
                      component={"span"}
                      sx={{ fontWeight: "400", fontFamily: defaultFontFamily }}
                    >
                      <Box
                        component={"span"}
                        sx={{ fontWeight: "600", fontFamily: montserratFamily }}
                      >
                        {t(
                          "CzechLanguageAndVisaLanding.FirstSection.Point2.Part1"
                        )}
                      </Box>{" "}
                      {t(
                        "CzechLanguageAndVisaLanding.FirstSection.Point2.Part2"
                      )}
                    </Box>
                  ),
                },
                {
                  iconName: "incomplete",
                  text: (
                    <Box component={"span"} sx={{ fontWeight: "600" }}>
                      {t(
                        "CzechLanguageAndVisaLanding.FirstSection.Point3.Part1"
                      )}
                    </Box>
                  ),
                },
                {
                  iconName: "clipboard",
                  text: (
                    <Box
                      component={"span"}
                      sx={{ fontWeight: "400", fontFamily: defaultFontFamily }}
                    >
                      <Box
                        component={"span"}
                        sx={{ fontWeight: "600", fontFamily: montserratFamily }}
                      >
                        {t(
                          "CzechLanguageAndVisaLanding.FirstSection.Point4.Part1"
                        )}
                      </Box>{" "}
                      {t(
                        "CzechLanguageAndVisaLanding.FirstSection.Point4.Part2"
                      )}
                    </Box>
                  ),
                },
                {
                  iconName: "like",
                  text: (
                    <Box
                      component={"span"}
                      sx={{ fontWeight: "400", fontFamily: defaultFontFamily }}
                    >
                      <Box
                        component={"span"}
                        sx={{ fontWeight: "600", fontFamily: montserratFamily }}
                      >
                        {t(
                          "CzechLanguageAndVisaLanding.FirstSection.Point5.Part1"
                        )}
                      </Box>{" "}
                      {t(
                        "CzechLanguageAndVisaLanding.FirstSection.Point5.Part2"
                      )}
                    </Box>
                  ),
                },
              ]}
            />
          }
        />
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized accentColor="primary">
        <SectionContainer
          sectionTitle={{
            renderTitle: () => (
              <Box component={"span"}>
                {t("CzechLanguageAndVisaLanding.SecondSection.Title.Part1")}{" "}
                <Box
                  ref={spanRef3}
                  component={"span"}
                  sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                >
                  {t("CzechLanguageAndVisaLanding.SecondSection.Title.Part2")}
                  <Visa1Underline
                    sx={{
                      display: showSecondSectionUnderline ? "block" : "none",
                      position: "absolute",
                      right: 0,
                      bottom: "-8px",
                      width: "100%",
                      "& path": {
                        strokeWidth:
                          lang === "vi" || lang === "en" ? "6px" : "6px",
                      },
                    }}
                  />
                </Box>
              </Box>
            ),
            accentColor: "primary",
            centered: true,
          }}
        >
          <Grid container width={"100%"} spacing={{ xs: "20px", sm: "20px" }}>
            <Grid item sm={3} xs={12}>
              <Box sx={{ position: "relative", marginTop: "42px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "#E53935",
                    position: "absolute",
                    top: "-42px",
                    width: "100%",
                    height: "100px",
                    borderRadius: "20px",
                    color: "#FFFFFF",
                    padding: "8px 24px 8px 24px",
                    zIndex: "1",
                    fontSize: { xs: "16px", sm: "18px" },
                    lineHeight: { xs: "22.88px", sm: "25.56px" },
                    fontWeight: "600",
                    fontFamily: defaultFontFamily,
                  }}
                >
                  <BurstPucker
                    sx={{
                      "& path": { fill: "#FFFFFF" },
                      width: { xs: "20px", sm: "24px" },
                      height: { xs: "20px", sm: "24px" },
                    }}
                  />
                  {t("CzechLanguageAndVisaLanding.SecondSection.Cards.1.Chip")}
                </Box>
                <Stack
                  sx={{
                    position: "relative",
                    zIndex: "2",
                    gap: { xs: "24px", sm: "20px" },
                    padding: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#448AFF",
                  }}
                >
                  <Box
                    component={"span"}
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "20px", sm: "27px" },
                      lineHeight: { xs: "28.8px", sm: "36.96px" },
                      fontWeight: "600",
                      fontFamily: montserratFamily,
                    }}
                  >
                    {t(
                      "CzechLanguageAndVisaLanding.SecondSection.Cards.1.Title"
                    )}
                  </Box>
                  <Stack gap={{ xs: "4px", sm: "8px" }}>
                    <Box
                      component={"span"}
                      sx={{
                        color: "#FFFFFF",
                        fontSize: { xs: "16px", sm: "20px" },
                        lineHeight: { xs: "22.88px", sm: "28.8px" },
                        fontWeight: "600",
                        fontFamily: montserratFamily,
                      }}
                    >
                      {t(
                        "CzechLanguageAndVisaLanding.SecondSection.Cards.1.Price"
                      )}
                    </Box>
                    <Box
                      component={"span"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#E1F3FF",
                        "& > svg > path": { fill: "#E1F3FF", fillOpacity: "1" },
                        fontSize: { xs: "16px", sm: "18px" },
                        lineHeight: { xs: "22.88px", sm: "25.56px" },
                        fontWeight: "600",
                      }}
                    >
                      <LocationPoint
                        sx={{
                          width: { xs: "18px", sm: "24px" },
                          height: { xs: "18px", sm: "24px" },
                        }}
                      />
                      {t(
                        "CzechLanguageAndVisaLanding.SecondSection.Cards.1.Location"
                      )}
                    </Box>
                  </Stack>
                  <Button
                    size="large"
                    variant="outlined"
                    onClick={scrollToForm}
                    sx={{
                      fontsize: "18px",
                      fontWeight: 600,
                      padding: { xs: "7px 22px", sm: "13px 32px" },
                      fontSize: { xs: "16px", sm: "18px" },
                      lineHeight: { xs: "26px", sm: "28px" },
                      marginTop: { sm: "20px" },
                      backgroundColor: "#FFFFFF",
                      "&:hover": { backgroundColor: "#FFFFFF" },
                    }}
                  >
                    {t("CzechLanguageAndVisaLanding.SecondSection.Button")}
                  </Button>
                </Stack>
              </Box>
            </Grid>
            {secondSectionData.map((item) => (
              <Grid key={item.title + item.price} item sm={3} xs={12}>
                {renderCard(
                  item.title,
                  item.price,
                  item.location,
                  scrollToForm
                )}
              </Grid>
            ))}
          </Grid>
          <Stack
            sx={{
              marginTop: { xs: "32px", sm: "40px" },
              flexDirection: "row",
              gap: {
                xs: "12px",
                sm: "16px",
              },
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              fontFamily: montserratFamily,
              fontWeight: { xs: "600", sm: "500" },
              lineHeight: { xs: "24px", sm: "28.4px" },
              fontSize: { xs: "14px", sm: "20px" },
              color: "text.secondary",
            }}
          >
            <Service
              sx={{
                width: { xs: "20px", sm: "32px" },
                height: { xs: "20px", sm: "32px" },
                flexShrink: 0,
              }}
            />
            {t("CzechLanguageAndVisaLanding.SecondSection.Description")}
          </Stack>
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized
        accentColor="warning"
        sx={{
          backgroundColor: "#ffffff",
        }}
        overlayVariant="v12"
        overlayColor="rgba(237, 108, 2, 0.3)"
      >
        <SectionContainer
          sectionTitle={{
            renderTitle: () => (
              <Box component={"span"}>
                <Box
                  ref={spanRef4}
                  component={"span"}
                  sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                >
                  {t("CzechLanguageAndVisaLanding.ThirdSection.Title.Part1")}
                  <Visa1Underline
                    sx={{
                      display: showThirdSectionUnderline ? "block" : "none",
                      position: "absolute",
                      right: 0,
                      bottom: "-8px",
                      width: "100%",
                      "& path": {
                        strokeWidth:
                          lang === "vi" || lang === "en" ? "6px" : "6px",
                      },
                    }}
                  />
                </Box>{" "}
                {t("CzechLanguageAndVisaLanding.ThirdSection.Title.Part2")}
              </Box>
            ),
            accentColor: "primary",
            centered: true,
          }}
        >
          <SectionTwoColumnsContainer
            disableContainerPaddings
            secondColumnSx={{
              order: { xs: "1", sm: "2" },
              marginBottom: { xs: "33px", sm: "0" },
            }}
            firstColumnSx={{ order: { xs: "2", sm: "2" } }}
            secondColumn={
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    border: "1px solid rgba(41, 98, 255, 1)",
                    borderRadius: "12px",
                    padding: {
                      xs: "8px 12px 8px 12px",
                      sm: "12px 16px 12px 16px",
                    },
                    height: { xs: "39px", sm: "50px" },
                    top: { xs: undefined, sm: "-25px" },
                    bottom: { xs: "-19px", sm: undefined },
                    backgroundColor: "#ffffff",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    fontFamily: defaultFontFamily,
                  }}
                >
                  <BurstPucker
                    sx={{
                      width: { xs: "20px", sm: "24px" },
                      height: { xs: "20px", sm: "24px" },
                      flexShrink: "0",
                    }}
                  />
                  {t("CzechLanguageAndVisaLanding.ThirdSection.Chip")}
                </Box>
                <ImageWithColorizedBorder
                  imageSx={{ display: "flex" }}
                  image={{
                    src: `${cdnUrl}/CzechLanguageAndVisaLanding/third_en.png`,
                  }}
                  accentColor="primary"
                  sx={{
                    "& img": {
                      minHeight: { xs: "240px", sm: "unset" },
                      objectFit: "cover",
                    },
                  }}
                />
              </Box>
            }
            firstColumn={
              <SectionList3AnimatedV2
                button={{
                  label: t("CzechLanguageAndVisaLanding.ThirdSection.Button"),
                  onClick: () => {
                    scrollToForm();
                  },
                }}
                accentColor="primary"
                data={[
                  {
                    iconName: "target",

                    title: t(
                      "CzechLanguageAndVisaLanding.ThirdSection.Option1.Title"
                    ),
                    text: t(
                      "CzechLanguageAndVisaLanding.ThirdSection.Option1.Text"
                    ),
                  },
                  {
                    iconName: "WriteNotes",
                    title: t(
                      "CzechLanguageAndVisaLanding.ThirdSection.Option2.Title"
                    ),
                    text: t(
                      "CzechLanguageAndVisaLanding.ThirdSection.Option2.Text"
                    ),
                  },
                  {
                    iconName: "incomplete",
                    title: t(
                      "CzechLanguageAndVisaLanding.ThirdSection.Option3.Title"
                    ),
                    text: "",
                  },
                ]}
              />
            }
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <AccordionSection
        accentColor="warning"
        overlaySx={{
          display: "none",
        }}
        title={
          <Box component="span">
            {t("CzechLanguageAndVisaLanding.FourthSection.Title.Part1")}{" "}
            <Box
              component="span"
              sx={{ color: "rgba(251, 140, 0, 1)", position: "relative" }}
            >
              {t("CzechLanguageAndVisaLanding.FourthSection.Title.Part2")}
              <Visa1Underline
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: "-8px",
                  width: "100%",
                  "& path": {
                    strokeWidth:
                      lang === "vi" || lang === "en" ? "13px" : "13px",
                    stroke: "rgba(251, 140, 0, 1)",
                  },
                }}
              />
            </Box>
          </Box>
        }
        description={t("CzechLanguageAndVisaLanding.FourthSection.Description")}
        data={[
          {
            title: t(
              "CzechLanguageAndVisaLanding.FourthSection.Question1.Title"
            ),
            text: t("CzechLanguageAndVisaLanding.FourthSection.Question1.Text"),
          },
          {
            title: t(
              "CzechLanguageAndVisaLanding.FourthSection.Question2.Title"
            ),
            text: t("CzechLanguageAndVisaLanding.FourthSection.Question2.Text"),
          },
          {
            title: t(
              "CzechLanguageAndVisaLanding.FourthSection.Question3.Title"
            ),
            text: t("CzechLanguageAndVisaLanding.FourthSection.Question3.Text"),
          },
        ]}
      />

      <FormSection
        withoutHubspot
        nodeRef={formRef}
        accentColor="primary"
        buttonColor="rgba(41, 98, 255, 1)"
        renderTitle={() => (
          <>
            <Box sx={{ color: "rgba(41, 98, 255, 1)" }} component={"span"}>
              {t("CzechLanguageAndVisaLanding.FifthSection.Title.Part1")}
            </Box>{" "}
            {t("CzechLanguageAndVisaLanding.FifthSection.Title.Part2")}
          </>
        )}
        description={
          <Box
            component={"span"}
            sx={{
              textAlign: { xs: "center", sm: "start" },
              lineHeight: { xs: "27.36px", sm: "27.36px" },
              fontSize: { xs: "18px", sm: "18px" },
              fontWeight: "400",
              color: "text.secondary",
            }}
          >
            {t("CzechLanguageAndVisaLanding.FifthSection.Description")}
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
                button: "Отправить",
                content: {
                  acceptTerms: (
                    <Box
                      component={"span"}
                      sx={{
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        display: "block",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      {t("OfficesLanding.FifthSection.Terms")}
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      {t("OfficesLanding.FifthSection.Submited.Part1")}
                      <br />
                      {t("OfficesLanding.FifthSection.Submited.Part2")}
                    </>
                  ),
                },
              }
            : lang === "uk"
            ? {
                language: "uk",
                button: "Відправити",
                content: {
                  acceptTerms: (
                    <Box
                      component={"span"}
                      sx={{
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        display: "block",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      {t("OfficesLanding.FifthSection.Terms")}
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      {t("OfficesLanding.FifthSection.Submited.Part1")}
                      <br />
                      {t("OfficesLanding.FifthSection.Submited.Part2")}
                    </>
                  ),
                },
              }
            : lang === "vi"
            ? {
                language: "vi",
                button: "Gửi",
                content: {
                  acceptTerms: (
                    <Box
                      component={"span"}
                      sx={{
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        display: "block",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      {t("OfficesLanding.FifthSection.Terms")}
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      {t("OfficesLanding.FifthSection.Submited.Part1")}
                      <br />
                      {t("OfficesLanding.FifthSection.Submited.Part2")}
                    </>
                  ),
                },
              }
            : {
                language: "en",
                button: "Send",
                content: {
                  acceptTerms: (
                    <Box
                      component={"span"}
                      sx={{
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14px" },
                        display: "block",
                        textAlign: { xs: "center", sm: "start" },
                      }}
                    >
                      {t("OfficesLanding.FifthSection.Terms")}
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      {t("OfficesLanding.FifthSection.Submited.Part1")}
                      <br />
                      {t("OfficesLanding.FifthSection.Submited.Part2")}
                    </>
                  ),
                },
              }
        }
      />
    </>
  );
};
