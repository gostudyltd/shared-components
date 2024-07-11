import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import {
  FormSection,
  IntroSectionV2,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionTextCardList,
  SectionTitle,
  SectionTwoColumnsContainer,
} from "../LandingSections";
import { ImageWithColorizedBorder } from "../LandingSections/ImageWithColorizedBorder";
import { defaultFontFamily, montserratFamily } from "../../constants/themeVars";
import { createTFunc, LangKey, Translations } from "../../config/langs";
// import background from "../Icons/svgBg.svg";
import { SectionList1 } from "../LandingSections/components/SectionList1";
import { getPicture } from "../../helpers/CloudinaryImage";
import { FlagGB } from "../Icons/FlagGB";
import { Slider } from "../LandingSections/Slider";
import { FolderIcon } from "../Icons/FolderIcon";

interface Props {
  lang: LangKey;
  externalLocales?: Translations;
  onClick: VoidFunction;
  onSubmit?: VoidFunction;
  button?: { onClick: VoidFunction; text: string };
  withoutHubspot: boolean;
}

export const UniversityProgramLanding: React.FC<Props> = ({
  lang = "ru",
  externalLocales,
  onClick,
  onSubmit,
  withoutHubspot,
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

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 1024 && isMobile !== false) setIsMobile(false);
      if (window.innerWidth < 1024 && isMobile !== true) setIsMobile(true);
    };

    window.addEventListener("resize", fn);
    fn();
    return () => {
      window.removeEventListener("resize", fn);
    };
  }, [mounted]);

  return (
    <>
      <IntroSectionV2
        accentColor="warning"
        firstColumnSx={{
          minWidth: { sm: "500px !important" },
        }}
        leftSectionContainerSx={{
          py: { xs: "48px", sm: "120px" },
        }}
        titleSx={{ lineHeight: { xs: "36.96px", sm: "47.52px" } }}
        renderTitle={(color) => (
          <Box
            component={"span"}
            sx={{
              fontSize: { xs: "28px", sm: "36px" },
              lineHeight: { xs: "36.96px", sm: "47.52px" },
            }}
          >
            <Box component={"span"} sx={{ color }}>
              {t("UniversityProgramLanding.IntroSection.Title.Part1")}
            </Box>{" "}
            {t("UniversityProgramLanding.IntroSection.Title.Part2")}
            {}
          </Box>
        )}
        description={t("UniversityProgramLanding.IntroSection.Description")}
        button={{
          text: t("UniversityProgramLanding.IntroSection.Button"),
          onClick: scrollToForm,
          sx: { bgcolor: "warning" },
        }}
        image={{
          src: `${cdnUrl}/UniversityProgramLanding/FirstSection.png`,
          width: null,
          height: null,
          sx: { maxHeight: "526px", objectFit: "contain" },
        }}
        mobileImage={{
          src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide1_mobile_v2.png`,
          width: null,
          height: null,
          sx: { objectFit: "contain" },
        }}
      />

      <SectionContainerWrapperColorized accentColor="warning">
        <SectionTwoColumnsContainer
          sectionContainerSx={{ gap: { xs: "32px", sm: "60px" } }}
          firstColumnSx={{ maxWidth: "380px", order: { xs: "1", sm: "0" } }}
          secondColumnSx={{ order: { xs: "0", sm: "1" } }}
          firstColumn={getPicture(
            `${cdnUrl}/UniversityProgramLanding/SecondSection.png`,
            760,
            440,
            { maxWidth: "380px" },
            { width: "100%", objectFit: "cover" }
          )}
          secondColumn={
            <SectionTitle
              accentColor="warning"
              renderTitle={(color) => (
                <>
                  {t("UniversityProgramLanding.FirstSection.Title.Part1")}
                  {" "}
                  <Box component={"span"} sx={{ color }}>
                    {t("UniversityProgramLanding.FirstSection.Title.Part2")}
                  </Box>
                </>
              )}
              description={t(
                "UniversityProgramLanding.FirstSection.Description"
              )}
            />
          }
        />
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized
        accentColor="error"
        overlayVariant="icons"
        sx={{
          // backgroundImage: `url(${background})`,
          backgroundColor: "#424242",
        }}
      >
        <SectionContainer
          sx={{ display: "flex", flexDirection: "column", gap: 0 }}
          sectionTitle={{
            wrapperSx: { paddingBottom: { xs: "16px", sm: "24px" } },
            renderTitle: () => (
              <Box component={"span"} color={"#FFFFFF"}>
                {t("UniversityProgramLanding.SecondSection.Title.Part1")}{" "}
                <Box component={"span"} color={"#FFA726"}>
                  {t("UniversityProgramLanding.SecondSection.Title.Part2")}
                </Box>
              </Box>
            ),
          }}
        >
          <Box
            sx={{
              marginBottom: { xs: "36px", sm: "36px" },
            }}
          >
            <Typography
              component={"span"}
              sx={{
                fontFamily: defaultFontFamily,
                fontWeight: 500,
                lineHeight: "28.8px",
                fontSize: "20px",
                color: "#EEEEEE",
              }}
            >
              {t("UniversityProgramLanding.SecondSection.Description.Part1")}{" "}
              <Box
                component={"span"}
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "27.36px",
                }}
              >
                {t("UniversityProgramLanding.SecondSection.Description.Part2")}
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              marginBottom: { xs: "32px", sm: "60px" },
            }}
          >
            <Typography
              component={"span"}
              sx={{
                fontFamily: defaultFontFamily,
                fontWeight: 500,
                lineHeight: "28.8px",
                fontSize: "20px",
                color: "#EEEEEE",
              }}
            >
              {t("UniversityProgramLanding.SecondSection.Description.Part3")}{" "}
              <Box
                component={"span"}
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "27.36px",
                }}
              >
                {t("UniversityProgramLanding.SecondSection.Description.Part4")}
              </Box>
            </Typography>
          </Box>
          <ImageWithColorizedBorder
            image={{
              src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionStatic.png`,
              width: 2240,
              height: 816,
            }}
            accentColor="warning"
            sx={{
              display: { xs: "none", sm: "block" },
              "& img": {
                objectFit: "cover",
                minHeight: { sm: "408px" },
              },
              marginBottom: { xs: "24px", sm: "20px" },
              border: "2px solid #616161",
            }}
          />

          <Slider
            accentColor="warning"
            color="#616161"
            sliderData={
              isMobile
                ? [
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionStatic_mobile1.png`,
                      width: 630,
                      height: 380,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide2_mobile1.png`,
                      width: 630,
                      height: 380,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide3_mobile1.png`,
                      width: 630,
                      height: 380,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide4_mobile1.png`,
                      width: 630,
                      height: 380,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide5_mobile1.png`,
                      width: 630,
                      height: 380,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide6_mobile1.png`,
                      width: 630,
                      height: 380,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide7_mobile1.png`,
                      width: 630,
                      height: 380,
                    },
                  ]
                : [
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide1.png.png`,
                      width: 600,
                      height: 600,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide2.png`,
                      width: 600,
                      height: 600,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide3.png`,
                      width: 600,
                      height: 600,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide4.png`,
                      width: 600,
                      height: 600,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide5.png`,
                      width: 600,
                      height: 600,
                    },
                    {
                      src: `${cdnUrl}/UniversityProgramLanding/ThirdSectionSlide6.png`,
                      width: 600,
                      height: 600,
                    },
                  ]
            }
          />

          <Button
            color={"warning"}
            variant="contained"
            size="large"
            sx={{
              marginTop: "40px",
              fontSize: { sm: "18px" },
              lineHeight: { sm: "28px" },
              padding: { sm: "13px 32px" },
              alignSelf: "center",
            }}
            onClick={() => {
              if (window) {
                window.open(
                  "https://www.gostudy.eu/en/university/pan-european-university",
                  "_blank"
                );
              }
            }}
          >
            {t("UniversityProgramLanding.SecondSection.Button")}
          </Button>
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized accentColor="warning">
        <SectionContainer
          sectionTitle={{
            accentColor: "warning",
            centered: true,
            sx: { maxWidth: "700px", mx: "auto" },
            renderTitle: (color) => (
              <Box component={"span"} sx={{ maxWidth: "700px" }}>
                {t("UniversityProgramLanding.ThirdSection.Title.Part1")}{" "}
                <Box component={"span"} sx={{ color }}>
                  {t("UniversityProgramLanding.ThirdSection.Title.Part2")}
                </Box>{" "}
                {t("UniversityProgramLanding.ThirdSection.Title.Part3")}
              </Box>
            ),
          }}
        >
          <SectionTextCardList
            accentColor="warning"
            cardVariant="v4"
            gridItemProps={{ xs: 12, sm: 4 }}
            data={[
              {
                title: t("UniversityProgramLanding.ThirdSection.Card1.Title"),
                text: t("UniversityProgramLanding.ThirdSection.Card1.Text"),
                iconName: "likeFilledTwoTone",
                sx: {
                  background: "#ffffff",
                  border: "2px solid rgba(255, 204, 128, 1) !important",
                },
              },
              {
                title: t("UniversityProgramLanding.ThirdSection.Card2.Title"),
                text: t("UniversityProgramLanding.ThirdSection.Card2.Text"),
                iconName: "form",
                sx: {
                  background: "#ffffff",
                },
              },
              {
                title: t("UniversityProgramLanding.ThirdSection.Card3.Title"),
                text: t("UniversityProgramLanding.ThirdSection.Card3.Text"),
                iconName: "donateMoney",
                sx: {
                  background: "#ffffff",
                },
              },
            ]}
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <SectionContainer
        sectionTitle={{
          centered: true,
          accentColor: "warning",
          renderTitle: (color) => (
            <>
              {t("UniversityProgramLanding.SubjectSection.Title.Part1")}{" "}
              <Box component={"span"} sx={{ color }}>
                {t("UniversityProgramLanding.SubjectSection.Title.Part2")}
              </Box>
            </>
          ),
        }}
      >
        <Grid container width={"100%"} spacing={{ xs: "32px", sm: "40px" }}>
          {[
            {
              img: `${cdnUrl}/UniversityProgramLanding/FifthSection1.png`,
              title: t("UniversityProgramLanding.SubjectSection.Option1.Title"),
              description: t(
                "UniversityProgramLanding.SubjectSection.Option1.Description"
              ),
            },
            {
              img: `${cdnUrl}/UniversityProgramLanding/FifthSection2.png`,
              title: t("UniversityProgramLanding.SubjectSection.Option2.Title"),
              description: t(
                "UniversityProgramLanding.SubjectSection.Option2.Description"
              ),
            },
            {
              img: `${cdnUrl}/UniversityProgramLanding/FifthSection3.png`,
              title: t("UniversityProgramLanding.SubjectSection.Option3.Title"),
              description: t(
                "UniversityProgramLanding.SubjectSection.Option3.Description"
              ),
            },
          ].map((item) => (
            <Grid item sm={4} xs={12}>
              <Stack sx={{ height: { sm: "100%" } }}>
                {getPicture(
                  item.img,
                  760,
                  440,
                  {
                    // maxHeight: "200px",
                    // maxWidth: "380px",
                    marginBottom: { xs: "16px", sm: "24px" },
                    alignSelf: "center",
                    borderRadius: "12px",
                  },
                  {
                    // maxHeight: "200px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }
                )}
                <Box
                  component={"span"}
                  sx={{
                    fontFamily: montserratFamily,
                    fontSize: "18px",
                    lineHeight: "25.56px",
                    fontWeight: "600",
                    marginBottom: { xs: "12px" },
                  }}
                >
                  {item.title}
                </Box>
                <Box
                  component={"span"}
                  sx={{
                    fontFamily: defaultFontFamily,
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: "400",
                    color: "text.secondary",
                    marginBottom: { xs: "24px" },
                  }}
                >
                  {item.description}
                </Box>
                <Button
                  color={"warning"}
                  variant="outlined"
                  size="large"
                  onClick={scrollToForm}
                  sx={{
                    marginTop: "auto",
                    fontSize: { sm: "18px" },
                    lineHeight: { sm: "28px" },
                    padding: { sm: "13px 32px" },
                  }}
                >
                  {t("UniversityProgramLanding.SubjectSection.Button")}
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      <SectionContainerWrapperColorized accentColor="warning">
        <SectionTwoColumnsContainer
          sectionContainerSx={{ gap: { xs: "32px", sm: "60px" } }}
          secondColumnSx={{ maxWidth: { xs: "100%", sm: "290px" } }}
          firstColumn={
            <SectionTitle
              accentColor="warning"
              title={t("UniversityProgramLanding.FourthSection.Title")}
              description={t(
                "UniversityProgramLanding.FourthSection.Description"
              )}
            />
          }
          secondColumn={
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                padding: { xs: "20px 24px", sm: "24px" },
                background: "#ffffff",
                fontFamily: montserratFamily,
                fontSize: { xs: "20px", sm: "28px" },
                lineHeight: { xs: "28.8px", sm: "36.96px" },
                fontWeight: "600",
                borderRadius: { xs: "16px", sm: "20px" },
              }}
            >
              <FlagGB
                sx={{
                  width: { xs: "44.8px", sm: "75.6px" },
                  height: { xs: "32px", sm: "54px" },
                }}
              />
              {t("UniversityProgramLanding.FourthSection.Card")}
            </Stack>
          }
        />
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized
        accentColor="warning"
        sx={{ background: "transparent" }}
        overlayVariant="v14"
        overlaySx={{ "& path": { fill: { sm: "rgba(237, 108, 2, 1)" } } }}
      >
        <SectionTwoColumnsContainer
          firstColumn={
            <ImageWithColorizedBorder
              imageSx={{ display: "flex" }}
              image={{
                src: `${cdnUrl}/UniversityProgramLanding/SeventhSection.png`,
              }}
              accentColor="warning"
              sx={{
                "& img": {
                  minHeight: { xs: "192px", sm: "unset" },
                  objectFit: "cover",
                },
                display: { xs: "none", sm: "flex" },
              }}
            />
          }
          secondColumn={
            <>
              <SectionTitle
                accentColor="warning"
                wrapperSx={{ marginBottom: { xs: "32px", sm: "40px" } }}
                renderTitle={(color) => (
                  <Box component={"span"}>
                    {t("UniversityProgramLanding.FifthSection.Title.Part1")}{" "}
                    <Box component={"span"} sx={{ color }}>
                      {t("UniversityProgramLanding.FifthSection.Title.Part2")}
                    </Box>
                  </Box>
                )}
              />
              <ImageWithColorizedBorder
                imageSx={{ display: "flex" }}
                image={{
                  src: `${cdnUrl}/UniversityProgramLanding/SeventhSection.png`,
                }}
                accentColor="warning"
                sx={{
                  "& img": {
                    minHeight: { xs: "192px", sm: "unset" },
                    objectFit: "cover",
                  },
                  display: { xs: "flex", sm: "none" },
                  marginBottom: "24px",
                }}
              />
              <SectionList1
                accentColor="warning"
                list={[
                  {
                    text: "",
                    iconName: "incomplete",
                    containerSx: { display: "none" },
                  },
                  {
                    text: t("UniversityProgramLanding.FifthSection.Option1"),
                    iconName: "incomplete",
                    containerSx: {
                      bgcolor: "#FFF3E0",
                      border: "2px solid #FFF3E0",
                      borderWidth: { xs: "1px", sm: "2px" },
                    },
                  },
                  {
                    text: t("UniversityProgramLanding.FifthSection.Option1"),
                    iconName: "service",
                    containerSx: {
                      border: "2px solid #FFCC80",
                      borderWidth: { xs: "1px", sm: "2px" },
                    },
                  },
                ]}
              />
              <Button
                variant="contained"
                size="large"
                color="warning"
                onClick={scrollToForm}
                sx={{
                  marginTop: { xs: "32px", sm: "40px" },
                  fontSize: { sm: "18px" },
                  lineHeight: { sm: "28px" },
                  padding: { sm: "14px 32px" },
                  maxWidth: { sm: "223px" },
                }}
              >
                {t("UniversityProgramLanding.FifthSection.Button")}
              </Button>
            </>
          }
        />
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized accentColor="warning">
        <SectionContainer
          sectionTitle={{
            accentColor: "warning",
            centered: true,
            sx: { maxWidth: "700px", mx: "auto" },
            renderTitle: (color) => (
              <Box component={"span"} sx={{ maxWidth: "700px" }}>
                {t("UniversityProgramLanding.SeventhSection.Title.Part1")}{" "}
                <Box component={"span"} sx={{ color }}>
                  {t("UniversityProgramLanding.SeventhSection.Title.Part2")}
                </Box>
              </Box>
            ),
          }}
        >
          <SectionTextCardList
            accentColor="warning"
            cardVariant="v4"
            gridItemProps={{ xs: 12, sm: 4 }}
            data={[
              {
                title: t("UniversityProgramLanding.SeventhSection.Card1.Title"),
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#ED6C02",
                    }}
                  >
                    1
                  </Box>
                ),
                iconName: "step1",
                sx: { background: "#ffffff" },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
              {
                title: t("UniversityProgramLanding.SeventhSection.Card2.Title"),
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#ED6C02",
                    }}
                  >
                    2
                  </Box>
                ),
                iconName: "step2",
                sx: { background: "#ffffff" },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
              {
                title: t("UniversityProgramLanding.SeventhSection.Card3.Title"),
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#ED6C02",
                    }}
                  >
                    3
                  </Box>
                ),
                iconName: "step3",
                sx: { background: "#ffffff" },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
              {
                title: t("UniversityProgramLanding.SeventhSection.Card4.Title"),
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#ED6C02",
                    }}
                  >
                    4
                  </Box>
                ),
                iconName: "step4",
                sx: { background: "#ffffff" },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
              {
                title: t("UniversityProgramLanding.SeventhSection.Card5.Title"),
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#ED6C02",
                    }}
                  >
                    5
                  </Box>
                ),
                iconName: "step5",
                sx: { background: "#ffffff" },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
              {
                title: t("UniversityProgramLanding.SeventhSection.Card6.Title"),
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#ED6C02",
                    }}
                  >
                    6
                  </Box>
                ),
                iconName: "step6",
                sx: { background: "#ffffff" },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
              {
                title: t("UniversityProgramLanding.SeventhSection.Card7.Title"),
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#ED6C02",
                    }}
                  >
                    7
                  </Box>
                ),
                iconName: "step7",
                sx: { background: "#ffffff" },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
              {
                title: t("UniversityProgramLanding.SeventhSection.Card8.Title"),
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#ED6C02",
                    }}
                  >
                    8
                  </Box>
                ),
                iconName: "step7",
                sx: { background: "#ffffff" },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
              {
                title: t("UniversityProgramLanding.SeventhSection.Card9.Title"),
                isHighlighted: true,
                renderIcon: () => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px",
                      border: "2px solid #ED6C02",
                      borderWidth: { xs: "1px", sm: "2px" },
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      borderRadius: "12px",
                      marginBottom: { xs: 0, sm: "20px" },
                      marginRight: { xs: "16px", sm: 0 },

                      fontFamily: montserratFamily,
                      fontSize: { xs: "20px", sm: "34px" },
                      color: "#FFFFFF",
                      background: "#ED6C02",
                    }}
                  >
                    9
                  </Box>
                ),
                iconName: "step7",
                sx: {
                  background: "#ffffff",
                },
                stackSx: { flexDirection: { xs: "row", sm: "column" } },
              },
            ]}
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <FormSection
        withoutHubspot={withoutHubspot}
        nodeRef={formRef}
        accentColor="warning"
        renderTitle={(color) => (
          <>
            {t("CzechLanguageAndVisaLanding.EigthSection.Title.Part1")}
            {" "}
            <Box sx={{ color }} component={"span"}>
              {t("CzechLanguageAndVisaLanding.EigthSection.Title.Part2")}
            </Box>
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
          formId: "07156274-1ef1-4de2-9a3d-bd03f131a09e",
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
                        textAlign: { xs: "start", sm: "center" },
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
                        textAlign: { xs: "start", sm: "center" },
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
                        textAlign: { xs: "start", sm: "center" },
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
                        textAlign: { xs: "start", sm: "center" },
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

      <SectionContainerWrapperColorized
        accentColor="warning"
        sx={{ backgroundColor: "#FFFFFF" }}
        overlayVariant="v13"
      >
        <SectionContainer
          sectionTitle={{
            accentColor: "warning",
            renderTitle: (color) => (
              <>
                {t("OfficesLanding.NinthSection.Title.Part1")}{" "}
                <Box component={"span"} sx={{ color }}>
                  {t("OfficesLanding.NinthSection.Title.Part2")}
                </Box>
              </>
            ),
          }}
        >
          <ImageWithColorizedBorder
            image={{
              src: `${cdnUrl}/UniversityProgramLanding/TenthSection.png`,
              width: 2240,
              height: 816,
            }}
            mobileImage={{
              src: `${cdnUrl}/UniversityProgramLanding/TenthSection__mobile.png`,
              width: 638,
              height: 384,
            }}
            accentColor="warning"
            sx={{
              "& img": {
                objectFit: "cover",
                minHeight: { sm: "408px" },
              },
              marginBottom: { xs: "24px", sm: "20px" },
            }}
          />
          <Grid container width={"100%"} spacing={{ xs: "16px", sm: "26px" }}>
            {[
              {
                title: t("OfficesLanding.NinthSection.Card1.Title"),
                description: t("OfficesLanding.NinthSection.Card1.Description"),
              },
              {
                title: t("OfficesLanding.NinthSection.Card2.Title"),
                description: t("OfficesLanding.NinthSection.Card2.Description"),
              },
              {
                title: t("OfficesLanding.NinthSection.Card3.Title"),
                description: t("OfficesLanding.NinthSection.Card3.Description"),
              },
            ].map((item, idx) => (
              <Grid item sm={4} xs={12}>
                <Stack
                  gap={"12px"}
                  sx={{
                    padding: "20px",
                    borderRadius: "20px",
                    border: "2px solid #FFCC80",
                    borderColor: idx ? "#FFCC80" : "#FFF3E0",
                    backgroundColor: idx ? "#FFFFFF" : "#FFF3E0",
                    height: { sm: "100%" },
                  }}
                >
                  <Typography
                    component={"span"}
                    variant="h5"
                    sx={{ fontSize: "18px", lineHeight: "25.56px" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    component={"span"}
                    variant="body1"
                    color={"text.secondary"}
                  >
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized accentColor="warning">
        <SectionTwoColumnsContainer
          sectionContainerSx={{ gap: { xs: "32px", sm: "60px" } }}
          firstColumnSx={{ maxWidth: "240px", order: { xs: "1", sm: "0" } }}
          secondColumnSx={{ order: { xs: "0", sm: "1" } }}
          firstColumn={<FolderIcon sx={{ width: "240px", height: "253px" }} />}
          secondColumn={
            <SectionTitle
              accentColor="warning"
              renderTitle={(color) => (
                <>
                  <Box component={"span"} sx={{ color }}>
                    {t("UniversityProgramLanding.TenthSection.Title.Part1")}
                  </Box>{" "}
                  {t("UniversityProgramLanding.TenthSection.Title.Part2")}
                </>
              )}
              description={t(
                "UniversityProgramLanding.TenthSection.Description"
              )}
            />
          }
        />
      </SectionContainerWrapperColorized>
    </>
  );
};
