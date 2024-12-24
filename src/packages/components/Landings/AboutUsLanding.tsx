import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  AccordionSection,
  IntroSectionV2,
  RoundedColorizedSectionV2,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionTextCardList,
  SectionTitle,
  SectionTwoColumnsContainer,
} from "../LandingSections";
import { CheckRounded } from "@mui/icons-material";
import { ImageWithColorizedBorder } from "../LandingSections/ImageWithColorizedBorder";
import { SliderSection2 } from "../LandingSections/SliderSection2";
import { montserratFamily } from "../../constants/themeVars";
import { getPicture } from "../../helpers/CloudinaryImage";
import { createTFunc, Translations } from "../../config/langs";

interface Props {
  lang: "ru" | "uk" | "en" | "vi";
  externalLocales?: Translations;
  btnAction?: VoidFunction;
  onSubmit?: VoidFunction;
  button?: { onClick: VoidFunction; text: string };
}

export const AboutUsLanding: React.FC<Props> = ({
  lang = "ru",
  externalLocales,
}) => {
  const cdnUrl = "https://images.gostudy.cz/static";
  const t = createTFunc(lang, externalLocales);

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
      <IntroSectionV2
        leftSectionContainerSx={{
          "& > *:first-of-type": {
            maxWidth: { xs: "100%", sm: "526px" },
          },
        }}
        containerSx={{
          py: { xs: "3em", sm: "3.5em" },
        }}
        button={
          lang === "en" && (window as any)?.HubSpotConversations?.widget?.open
            ? {
                text: t("AboutUsLanding.IntroSection.Button"),
                onClick: () => {
                  (window as any)?.HubSpotConversations?.widget?.open();
                },
                sx: { bgcolor: "primary" },
              }
            : undefined
        }
        renderTitle={(color) => (
          <Box>
            {getTranslatedText(
              <>
                <Box sx={{ color: color, display: "inline" }}>
                  {t("AboutUsLanding.IntroSection.Title.Part1")}
                </Box>{" "}
                {t("AboutUsLanding.IntroSection.Title.Part2")}
              </>,
              <>
                {t("AboutUsLanding.IntroSection.Title.Part1")}{" "}
                <Box sx={{ color: color, display: "inline" }}>
                  {t("AboutUsLanding.IntroSection.Title.Part2")}
                </Box>{" "}
                {t("AboutUsLanding.IntroSection.Title.Part3")}
              </>,
              <>
                {t("AboutUsLanding.IntroSection.Title.Part1")}{" "}
                <Box sx={{ color: color, display: "inline" }}>
                  {t("AboutUsLanding.IntroSection.Title.Part2")}
                </Box>{" "}
                {t("AboutUsLanding.IntroSection.Title.Part3")}
              </>,
              <>
                {t("AboutUsLanding.IntroSection.Title.Part1")}{" "}
                <Box sx={{ color: color, display: "inline" }}>
                  {t("AboutUsLanding.IntroSection.Title.Part2")}
                </Box>{" "}
                {t("AboutUsLanding.IntroSection.Title.Part3")}
              </>
            )}
          </Box>
        )}
        renderDescription={() => (
          <Stack sx={{ gap: { xs: "4px", sm: "8px" } }}>
            {[
              t("AboutUsLanding.IntroSection.Point1"),
              t("AboutUsLanding.IntroSection.Point2"),
              t("AboutUsLanding.IntroSection.Point3"),
            ].map((item) => (
              <Stack sx={{ gap: { xs: "4px", sm: "8px" } }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <CheckRounded
                    sx={{
                      width: "24px",
                      height: "24px",
                      flexShrink: "0",
                      color: "primary.main",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", sm: "18px" },
                      fontWeight: { xs: "400", sm: "400" },
                      lineHeight: { xs: "27.36px", sm: "27.36px" },
                      color: "text.secondary",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        )}
        image={{
          src: `${cdnUrl}/AboutsUsNew/FirstSection_${lang}.png`,
          width: 576,
          height: 516,
        }}
        mobileImage={{
          src: `${cdnUrl}/AboutsUsNew/FirstSection_${lang}_mobile_big.png`,
          width: 686,
          height: 612,
          sx: { width: "100%", maxWidth: "343px", objectFit: "cover" },
        }}
      />

      <SectionTwoColumnsContainer
        sectionContainerSx={{
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
        firstColumn={
          <ImageWithColorizedBorder
            image={{
              src: `${cdnUrl}/AboutsUsNew/SecondSection.png`,
              width: 494,
              height: 392,
            }}
            mobileImage={{
              src: `${cdnUrl}/AboutsUsNew/SecondSection_mobile_big.png`,
              width: 638,
              height: 480,
            }}
            imageSx={{
              verticalAlign: "top",
              width: { xs: "100%", sm: "unset", objectFit: "cover" },
              // maxWidth: { xs: "240px", sm: "unset" },
            }}
          />
        }
        secondColumn={
          <SectionTitle
            preTitle={t("AboutUsLanding.FirstSection.PreTitle")}
            title={t("AboutUsLanding.FirstSection.Title")}
            description={
              <>
                {t("AboutUsLanding.FirstSection.Text.Part1")}
                <br />
                <br />
                {t("AboutUsLanding.FirstSection.Text.Part2")}
                <br />
                <br />
                {t("AboutUsLanding.FirstSection.Text.Part3")}
              </>
            }
          />
        }
      />

      <SectionContainerWrapperColorized accentColor="primary">
        <SectionContainer
          sectionTitle={{
            title: t("AboutUsLanding.SecondSection.Title"),
            description: t("AboutUsLanding.SecondSection.Description"),
          }}
        >
          <SectionTextCardList
            gridItemProps={{ xs: 12, sm: 4 }}
            cardVariant="v4"
            data={[
              {
                iconName: "Internet",
                title: t("AboutUsLanding.SecondSection.Card1.Title"),
                text: t("AboutUsLanding.SecondSection.Card1.Text"),
              },
              {
                iconName: "HelpTogether",
                title: t("AboutUsLanding.SecondSection.Card2.Title"),
                text: t("AboutUsLanding.SecondSection.Card2.Text"),
              },
              {
                iconName: "Smiley",
                title: t("AboutUsLanding.SecondSection.Card3.Title"),
                text: t("AboutUsLanding.SecondSection.Card3.Text"),
              },
            ]}
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <RoundedColorizedSectionV2
        accentColor="warning"
        gap={{ xs: "2rem", sm: "28px" }}
        sectionTitle={{
          renderTitle: (color) =>
            getTranslatedText(
              <>
                «{t("AboutUsLanding.ThirdSection.Title.Part1")}
                {" "}
                <span style={{ color }}>
                  {t("AboutUsLanding.ThirdSection.Title.Part2")}
                </span>{" "}
                {t("AboutUsLanding.ThirdSection.Title.Part3")}»
              </>,
              <>
                «{t("AboutUsLanding.ThirdSection.Title.Part1")}
                {" "}
                <span style={{ color }}>
                  {t("AboutUsLanding.ThirdSection.Title.Part2")}
                </span>{" "}
                {t("AboutUsLanding.ThirdSection.Title.Part3")}»
              </>,
              <>
                «{t("AboutUsLanding.ThirdSection.Title.Part1")}
                {" "}
                <span style={{ color }}>
                  {t("AboutUsLanding.ThirdSection.Title.Part2")}
                </span>
                »
              </>,
              <>
                «{t("AboutUsLanding.ThirdSection.Title.Part1")}
                {" "}
                <span style={{ color }}>
                  {t("AboutUsLanding.ThirdSection.Title.Part2")}
                </span>
                »
              </>
            ),
          description: t("AboutUsLanding.ThirdSection.Description"),
        }}
        image={{
          src: `${cdnUrl}/AboutsUsNew/FourthSection.png`,
          width: 440,
          height: 410,
        }}
        mobileImage={{
          src: `${cdnUrl}/AboutsUsNew/FourthSection_mobile_big.png`,
          width: 606,
          height: 608,
        }}
        imageSx={{ width: { xs: "303px", sm: "unset" } }}
      />

      <SliderSection2
        gradientBg
        sectionTitle={{
          title: t("AboutUsLanding.FourthSection.Title"),
          description: t("AboutUsLanding.FourthSection.Card1.Description"),
        }}
        accentColor="warning"
        data={[
          {
            authorSx: {
              fontWeight: 600,
              fontFamily: montserratFamily,
              fontSize: { xs: "16px", sm: "20px" },
              lineHeight: { xs: "22.88px", sm: "28.8px" },
            },
            descriptionSx: {
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "16px" },
              lineHeight: { xs: "20.02px", sm: "24px" },
            },
            avatar: `${cdnUrl}/AboutsUsNew/FifthSection_1_${
              lang === "vi" ? "en" : lang
            }.png?tx=c_fill,q_100`,
            author: t("AboutUsLanding.FourthSection.Card1.Title"),
            description: t("AboutUsLanding.FourthSection.Card1.Description"),
            text: t("AboutUsLanding.FourthSection.Card1.Text"),
          },
          {
            avatar: `${cdnUrl}/AboutsUsNew/FifthSection_2_${
              lang === "vi" ? "en" : lang
            }.png?tx=c_fill,q_100`,
            author: t("AboutUsLanding.FourthSection.Card2.Title"),
            description: t("AboutUsLanding.FourthSection.Card2.Description"),
            text: t("AboutUsLanding.FourthSection.Card2.Text"),
          },
          {
            avatar: `${cdnUrl}/AboutsUsNew/FifthSection_3_${
              lang === "vi" ? "en" : lang
            }.png?tx=c_fill,q_100`,
            author: t("AboutUsLanding.FourthSection.Card3.Title"),
            description: t("AboutUsLanding.FourthSection.Card3.Description"),
            text: t("AboutUsLanding.FourthSection.Card3.Text"),
          },
          {
            avatar: `${cdnUrl}/AboutsUsNew/FifthSection_4_${
              lang === "vi" ? "en" : lang
            }.png?tx=c_fill,q_100`,
            author: t("AboutUsLanding.FourthSection.Card4.Title"),
            description: t("AboutUsLanding.FourthSection.Card4.Description"),
            text: t("AboutUsLanding.FourthSection.Card4.Text"),
          },
        ]}
      />

      <SectionContainer>
        <SectionTwoColumnsContainer
          disableContainerPaddings
          sectionContainerSx={{
            alignItems: "center",
            marginBottom: { xs: "2rem", sm: "3.75rem" },
          }}
          firstColumn={
            <SectionTitle
              preTitle={
                getTranslatedText(
                  "Breaking down barriers",
                  "Phá vỡ các rào cản",
                  "Разрушаем барьеры",
                  "Руйнуємо бар'єри"
                ) as string
              }
              title={getTranslatedText(
                "GoStudy — the path to education around the world",
                "GoStudy — các con đường để giáo dục trên khắp thế giới",
                "GoStudy — путь к образованию по всему миру",
                "GoStudy — шлях до освіти по всьому світу"
              )}
            />
          }
          secondColumn={
            <Typography sx={{ fontSize: "1.125rem", color: "rgba(0,0,0,.54)" }}>
              {getTranslatedText(
                "GoStudy opens the way to quality education for students from all corners of the world. Thanks to us, the world is graduating new talents who play a significant role in scientific and economic progress.",
                "GoStudy mở đường cho chất giáo dục cho sinh viên từ khắp nơi trên thế giới. Nhờ chúng tôi, thế là tốt nghiệp tài năng mới, những người chơi một vai trò quan trọng trong khoa học kinh tế và tiến bộ.",
                "GoStudy открывает студентам со всех уголков света путь к качественному образованию. Благодаря нам в мир выходят дипломированные специалисты, новые таланты, которые играют заметную роль в научном и экономическом прогрессе.",
                "GoStudy відкриває студентам з усіх куточків світу шлях до якісної освіти. Завдяки нам у світ виходять дипломовані фахівці, нові таланти, які відіграють помітну роль у науковому та економічному прогресі."
              )}
            </Typography>
          }
        />

        <ImageWithColorizedBorder
          imageSx={{
            minHeight: "12rem",
            objectFit: "cover",
          }}
          image={{
            src: `${cdnUrl}/AboutUsLanding/sixthSection.png`,
            width: 1120,
            height: 408,
          }}
        />
      </SectionContainer>

      <SectionContainerWrapperColorized
        accentColor="primary"
        overlayVariant="v10"
      >
        <SectionTwoColumnsContainer
          firstColumn={
            <>
              <SectionTitle
                accentColor="primary"
                wrapperSx={{
                  mb: { xs: "2rem", sm: "2.5rem" },
                }}
                renderTitle={(color) => (
                  <>
                    {t("AboutUsLanding.SixthSection.Title.Part1")}{" "}
                    <span style={{ color }}>
                      {t("AboutUsLanding.SixthSection.Title.Part2")}
                    </span>{" "}
                    {t("AboutUsLanding.SixthSection.Title.Part3")}
                  </>
                )}
                description={t("AboutUsLanding.SixthSection.Description")}
              />
              <ImageWithColorizedBorder
                accentColor="primary"
                image={{
                  src: `${cdnUrl}/CzechHigherEducation/fourthSection.png`,
                  width: 514,
                  height: 304,
                }}
                mobileImage={{
                  src: `${cdnUrl}/AboutsUsNew/SeventhSection_mobile_big.png`,
                  width: 638,
                  height: 284,
                }}
                imageSx={{
                  width: {
                    xs: "100%",
                    sm: "unset",
                  },
                  minHeight: { xs: "192px", sm: "unset" },
                }}
              />
            </>
          }
          secondColumn={
            <Stack sx={{ gap: { xs: "32px", sm: "40px" } }}>
              <Typography
                sx={{
                  fontFamily: montserratFamily,
                  fontWeight: 600,
                  fontSize: { xs: "20px", sm: "28px" },
                  lineHeight: { xs: "28.8px", sm: "36.96px" },
                }}
              >
                {t("AboutUsLanding.SixthSection.Points.Title")}
              </Typography>
              <Stack sx={{ gap: "20px" }}>
                {[
                  t("AboutUsLanding.SixthSection.Points.1"),
                  t("AboutUsLanding.SixthSection.Points.2"),
                  t("AboutUsLanding.SixthSection.Points.3"),
                  t("AboutUsLanding.SixthSection.Points.4"),
                ].map((item) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: "16px", sm: "16px" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: "0",
                        borderRadius: "40px",
                        backgroundColor: "#ffffff",
                        width: { xs: "40px", sm: "52px" },
                        height: { xs: "40px", sm: "52px" },
                      }}
                    >
                      <CheckRounded
                        sx={{
                          width: { xs: "24px", sm: "32px" },
                          height: { xs: "24px", sm: "32px" },
                          color: "primary.main",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: montserratFamily,
                        fontWeight: 600,
                        fontSize: { xs: "16px", sm: "18px" },
                        lineHeight: { xs: "22.88px", sm: "25.56px" },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "18px", sm: "18px" },
                  lineHeight: { xs: "27.36px", sm: "27.36px" },
                  color: "text.secondary",
                }}
              >
                {t("AboutUsLanding.SixthSection.Points.Text")}
              </Typography>
            </Stack>
          }
        />
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized
        accentColor="primary"
        overlayVariant="v11"
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <SectionContainer
          sectionTitle={{
            renderTitle: (color) =>
              getTranslatedText(
                <>
                  {t("AboutUsLanding.SeventhSection.Title.Part1")}{" "}
                  <span style={{ color }}>
                    {t("AboutUsLanding.SeventhSection.Title.Part2")}
                  </span>
                </>,
                <>
                  <span style={{ color }}>
                    {t("AboutUsLanding.SeventhSection.Title.Part1")}{" "}
                  </span>{" "}
                  {t("AboutUsLanding.SeventhSection.Title.Part2")}
                </>,
                <>
                  {t("AboutUsLanding.SeventhSection.Title.Part1")}{" "}
                  <span style={{ color }}>
                    {t("AboutUsLanding.SeventhSection.Title.Part2")}
                  </span>
                </>,
                <>
                  {t("AboutUsLanding.SeventhSection.Title.Part1")}{" "}
                  <span style={{ color }}>
                    {t("AboutUsLanding.SeventhSection.Title.Part2")}
                  </span>
                </>
              ),
            description: t("AboutUsLanding.SeventhSection.Description"),
          }}
        >
          <Stack
            sx={{
              gap: { xs: "16px", sm: "20px" },
            }}
          >
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "16px", sm: "20px" },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  boxShadow: "0px 2px 28px 0px rgba(11, 78, 131, 0.15)",
                  borderRadius: "20px",
                  padding: { xs: "16px", sm: "24px" },
                  backgroundColor: "#ffffff",
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "382px" },
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserratFamily,
                    fontSize: { xs: "20px", sm: "20px" },
                    fontWeight: "600",
                    lineHeight: { xs: "28.8px", sm: "28.8px" },
                    marginBottom: { xs: "12px", sm: "12px" },
                  }}
                >
                  {t("AboutUsLanding.SeventhSection.Card1.Title")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "16px" },
                    fontWeight: "400",
                    lineHeight: { xs: "24px", sm: "28.8px" },
                    marginBottom: { xs: "24px", sm: "32px" },
                    color: "text.secondary",
                  }}
                >
                  {t("AboutUsLanding.SeventhSection.Card1.Text")}
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    height: { xs: "240px", sm: "100%" },
                    flexGrow: "1",
                    borderRadius: "20px",
                    background: `url(${cdnUrl}/AboutsUsNew/EigthSection_1.png)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                {getPicture(
                  `${cdnUrl}/AboutsUsNew/EigthSection_1_mobile_big.png`,
                  622,
                  480,
                  { display: { xs: "block", sm: "none" } },
                  { width: "100%" }
                )}
                {/* {getPicture(
                `${cdnUrl}/AboutsUsNew/EigthSection_1.png`,
                334,
                351,
                {
                  borderRadius: "20px",
                  width: "100%",
                  maxWidth: "334px",
                  maxHeight: { xs: "240px", sm: "unset" },
                },
                {
                  borderRadius: "20px",
                  width: "100%",
                  maxWidth: "334px",
                  maxHeight: { xs: "240px", sm: "unset" },
                  objectFit: "cover",
                }
              )} */}
              </Box>
              <Stack
                sx={{
                  boxShadow: "0px 2px 28px 0px rgba(11, 78, 131, 0.15)",
                  borderRadius: "20px",
                  padding: { xs: "16px", sm: "24px" },
                  backgroundColor: "#ffffff",
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "750px" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserratFamily,
                    fontSize: { xs: "20px", sm: "20px" },
                    fontWeight: "600",
                    lineHeight: { xs: "28.8px", sm: "28.8px" },
                    marginBottom: { xs: "12px", sm: "12px" },
                  }}
                >
                  {t("AboutUsLanding.SeventhSection.Card2.Title")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "16px" },
                    fontWeight: "400",
                    lineHeight: { xs: "24px", sm: "28.8px" },
                    marginBottom: { xs: "24px", sm: "32px" },
                    color: "text.secondary",
                  }}
                >
                  {t("AboutUsLanding.SeventhSection.Card2.Text")}
                </Typography>
                {getPicture(
                  `${cdnUrl}/AboutsUsNew/EigthSection_2.png`,
                  702,
                  216,
                  {
                    display: { xs: "none", sm: "block" },
                    borderRadius: "20px",
                    marginBottom: { xs: "12px", sm: "20px" },
                    width: "100%",
                    maxWidth: "702px",
                    minHeight: { xs: "192px", sm: "216px" },
                  },
                  {
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "702px",
                    minHeight: { xs: "192px", sm: "216px" },
                    objectFit: "cover",
                  }
                )}
                {getPicture(
                  `${cdnUrl}/AboutsUsNew/EigthSection_2_mobile_big.png`,
                  622,
                  480,
                  {
                    display: { xs: "block", sm: "none" },
                    borderRadius: "20px",
                    marginBottom: { xs: "12px", sm: "20px" },
                    width: "100%",
                    maxWidth: "341",
                    height: { xs: "192px", sm: "216px" },
                  },
                  {
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "702px",
                    height: { xs: "192px", sm: "216px" },
                    objectFit: "cover",
                  }
                )}
                <Stack
                  sx={{
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: "12px", sm: "19px" },
                  }}
                >
                  {getPicture(
                    `${cdnUrl}/AboutsUsNew/EigthSection_3.png`,
                    341,
                    216,
                    {
                      display: { xs: "none", sm: "block" },
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "341px",
                      minHeight: { xs: "192px", sm: "216px" },
                      height: { xs: "192px", sm: "216px" },
                    },
                    {
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "341px",
                      minHeight: { xs: "192px", sm: "216px" },
                      height: { xs: "192px", sm: "216px" },
                      objectFit: "cover",
                    }
                  )}
                  {getPicture(
                    `${cdnUrl}/AboutsUsNew/EigthSection_3_mobile_big.png`,
                    622,
                    480,
                    {
                      display: { xs: "block", sm: "none" },
                      borderRadius: "20px",
                      marginBottom: { xs: "12px", sm: "20px" },
                      width: "100%",
                      maxWidth: "341",
                      height: { xs: "192px", sm: "216px" },
                    },
                    {
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "702px",
                      height: { xs: "192px", sm: "216px" },
                      objectFit: "cover",
                    }
                  )}
                  {getPicture(
                    `${cdnUrl}/AboutsUsNew/EigthSection_4.png`,
                    341,
                    216,
                    {
                      display: { xs: "none", sm: "block" },
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "341px",
                      minHeight: { xs: "192px", sm: "216px" },
                      height: { xs: "192px", sm: "216px" },
                    },
                    {
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "341px",
                      minHeight: { xs: "192px", sm: "216px" },
                      height: { xs: "192px", sm: "216px" },
                      objectFit: "cover",
                    }
                  )}
                  {getPicture(
                    `${cdnUrl}/AboutsUsNew/EigthSection_4_mobile_big.png`,
                    622,
                    480,
                    {
                      display: { xs: "block", sm: "none" },
                      borderRadius: "20px",
                      marginBottom: { xs: "12px", sm: "20px" },
                      width: "100%",
                      maxWidth: "341",
                      height: { xs: "192px", sm: "216px" },
                    },
                    {
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "702px",
                      height: { xs: "192px", sm: "216px" },
                      objectFit: "cover",
                      objectPosition: "top",
                    }
                  )}
                </Stack>
              </Stack>
            </Stack>
            <Box
              sx={{
                boxShadow: "0px 2px 28px 0px rgba(11, 78, 131, 0.15)",
                borderRadius: "20px",
                padding: { xs: "16px", sm: "24px" },
                backgroundColor: "#ffffff",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: montserratFamily,
                  fontSize: { xs: "20px", sm: "20px" },
                  fontWeight: "600",
                  lineHeight: { xs: "28.8px", sm: "28.8px" },
                  marginBottom: { xs: "12px", sm: "12px" },
                }}
              >
                {t("AboutUsLanding.SeventhSection.Card3.Title")}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px" },
                  fontWeight: "400",
                  lineHeight: { xs: "24px", sm: "28.8px" },
                  // marginBottom: { xs: "24px", sm: "32px" },
                  color: "text.secondary",
                }}
              >
                {t("AboutUsLanding.SeventhSection.Card3.Text")}
              </Typography>
            </Box>
          </Stack>
        </SectionContainer>
      </SectionContainerWrapperColorized>

      {(lang === "ru" || lang === "uk") && (
        <SectionContainer
          sectionTitle={{
            renderTitle: (color) => (
              <>
                <span style={{ color }}>
                  {t("AboutUsLanding.EigthSection.Title.Part1")}
                </span>{" "}
                {t("AboutUsLanding.EigthSection.Title.Part2")}
              </>
            ),
            description: t("AboutUsLanding.EigthSection.Description"),
          }}
        >
          <SectionTextCardList
            accentColor="primary"
            gridItemProps={{ xs: 12, sm: 4 }}
            cardVariant="v4"
            data={[
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "10px", sm: "12px" },
                      borderRadius: "12px",
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      backgroundColor: "#FFFFFF",
                      "& svg": {
                        width: {
                          xs: "20px",
                          sm: "24px",
                        },
                        height: {
                          xs: "20px",
                          sm: "24px",
                        },
                      },
                      "& svg path": { fill: "rgba(11, 78, 131, 1)" },
                      marginBottom: { xs: "16px", sm: "20px" },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                sx: {
                  backgroundColor: "secondary.main",
                  minHeight: {
                    xs: "unset",
                    sm:
                      lang === "uk"
                        ? "276px"
                        : lang === "ru"
                        ? "288px"
                        : "302px",
                  },
                  height: "unset",
                },
                iconName: "step1",
                title: t("AboutUsLanding.EigthSection.Card1.Text"),
                link: {
                  title: t("AboutUsLanding.EigthSection.Card1.Link.Title"),
                  text: t("AboutUsLanding.EigthSection.Card1.Link.Text"),
                  to: getTranslatedText(
                    "",
                    "",
                    "https://www.gostudy.cz/besplatnye-uroki",
                    "https://www.gostudy.cz/uk/besplatnye-uroki"
                  ) as string,
                },
              },
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "10px", sm: "12px" },
                      borderRadius: "12px",
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      backgroundColor: "#FFFFFF",
                      "& svg": {
                        width: {
                          xs: "20px",
                          sm: "24px",
                        },
                        height: {
                          xs: "20px",
                          sm: "24px",
                        },
                      },
                      "& svg path": { fill: "rgba(11, 78, 131, 1)" },
                      marginBottom: { xs: "16px", sm: "20px" },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                sx: {
                  backgroundColor: "secondary.main",
                  minHeight: {
                    xs: "unset",
                    sm:
                      lang === "uk"
                        ? "276px"
                        : lang === "ru"
                        ? "288px"
                        : "302px",
                  },
                  height: "unset",
                },
                iconName: "step2",
                title: t("AboutUsLanding.EigthSection.Card2.Text"),
                link: {
                  title: t("AboutUsLanding.EigthSection.Card2.Link.Title"),
                  text: t("AboutUsLanding.EigthSection.Card2.Link.Text"),
                  to: getTranslatedText(
                    "",
                    "",
                    "https://www.gostudy.cz/besplatnye-uroki-nemeckogo",
                    "https://www.gostudy.cz/uk/besplatnye-uroki-nemeckogo"
                  ) as string,
                },
              },
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "10px", sm: "12px" },
                      borderRadius: "12px",
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      backgroundColor: "#FFFFFF",
                      "& svg": {
                        width: {
                          xs: "20px",
                          sm: "24px",
                        },
                        height: {
                          xs: "20px",
                          sm: "24px",
                        },
                      },
                      "& svg path": { fill: "rgba(11, 78, 131, 1)" },
                      marginBottom: { xs: "16px", sm: "20px" },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                sx: {
                  backgroundColor: "secondary.main",
                  minHeight: {
                    xs: "unset",
                    sm:
                      lang === "uk"
                        ? "276px"
                        : lang === "ru"
                        ? "288px"
                        : "302px",
                  },
                  height: "unset",
                },
                iconName: "step3",
                title: t("AboutUsLanding.EigthSection.Card3.Text"),
                link: {
                  title: t("AboutUsLanding.EigthSection.Card3.Link.Title"),
                  text: t("AboutUsLanding.EigthSection.Card3.Link.Text"),
                  to: getTranslatedText(
                    "",
                    "",
                    "https://www.gostudy.cz/vebinary-s-ekspertami",
                    "https://www.gostudy.cz/uk/vebinary-s-ekspertami"
                  ) as string,
                },
              },
            ]}
          />
        </SectionContainer>
      )}

      <AccordionSection
        overlaySx={{
          "& svg": {
            display: { xs: "none", sm: "block" },
            "& path": { stroke: "rgba(11, 78, 131, 0.3)" },
          },
        }}
        title={t("AboutUsLanding.NinthSection.Title")}
        description={t("AboutUsLanding.NinthSection.Description")}
        data={[
          {
            title: t("AboutUsLanding.NinthSection.Question1.Title"),
            text: t("AboutUsLanding.NinthSection.Question1.Text"),
          },
          {
            title: t("AboutUsLanding.NinthSection.Question2.Title"),
            text: t("AboutUsLanding.NinthSection.Question2.Text"),
            link:
              lang === "ru"
                ? {
                    text: t("AboutUsLanding.NinthSection.Question2.Button"),
                    to: "https://www.gostudy.cz/vse-programmyi",
                  }
                : lang === "uk"
                ? {
                    text: t("AboutUsLanding.NinthSection.Question2.Button"),
                    to: "https://www.gostudy.cz/uk/vse-programmyi",
                  }
                : undefined,
          },
          {
            title: t("AboutUsLanding.NinthSection.Question3.Title"),
            text: t("AboutUsLanding.NinthSection.Question3.Text"),
            link:
              lang === "ru"
                ? {
                    text: t("AboutUsLanding.NinthSection.Question3.Button"),
                    to: "https://www.gostudy.cz/vse-programmyi-avstrii",
                  }
                : lang === "uk"
                ? {
                    text: t("AboutUsLanding.NinthSection.Question3.Button"),
                    to: "https://www.gostudy.cz/uk/vse-programmyi-slovakia",
                  }
                : undefined,
          },
          {
            title: t("AboutUsLanding.NinthSection.Question4.Title"),
            text: t("AboutUsLanding.NinthSection.Question4.Text"),
          },
          {
            title: t("AboutUsLanding.NinthSection.Question5.Title"),
            text: t("AboutUsLanding.NinthSection.Question5.Text"),
          },
          {
            title: t("AboutUsLanding.NinthSection.Question6.Title"),
            text: t("AboutUsLanding.NinthSection.Question6.Text"),
          },
        ]}
      />
    </>
  );
};
