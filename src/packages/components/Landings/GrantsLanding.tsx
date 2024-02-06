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

interface Props {
  lang: "ru" | "uk" | "en" | "vi";
  btnAction?: VoidFunction;
  onSubmit?: VoidFunction;
}

export const GrantsLanding: React.FC<Props> = ({
  lang = "ru",
  btnAction,
  onSubmit,
}) => {
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
                  Your{" "}
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    <FirstDecoration
                      sx={{
                        position: "absolute",
                        right: { xs: "-32px", sm: "-34px" },
                        top: { xs: "-13px", sm: "-9px" },
                      }}
                    />
                    successful
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
                  future in&nbsp;Europe!
                </>,
                <>
                  Tương lai{" "}
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    thành{" "}
                    <Box component={"span"} sx={{ position: "relative" }}>
                      <FirstDecoration
                        sx={{
                          position: "absolute",
                          right: { xs: "-64px", sm: "-34px" },
                          top: { xs: "-24px", sm: "-2px" },
                          width: "100%",
                        }}
                      />
                      công
                    </Box>
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-9px",
                        width: lang === "uk" || lang === "ru" ? "90%" : "100%",
                      }}
                    />
                  </Box>{" "}
                  của bạn tại Châu Âu
                </>,
                <>
                  Твоё{" "}
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
                    успешное
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
                  будущее в&nbsp;Европе!
                </>,
                <>
                  Твоє{" "}
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
                    успішне
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
                  майбутнє в&nbsp;Європі!
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
                fontSize: { xs: "14px", sm: "16px" },
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
                      Enroll in&nbsp;the GoStudy Academy{" "}
                      <strong>for free!</strong>
                    </span>,
                    <span>
                      Đăng ký Học viện GoStudy <strong>miễn phí</strong>
                    </span>,
                    <span>
                      Поступи в&nbsp;Академию GoStudy{" "}
                      <strong>бесплатно!</strong>
                    </span>,
                    <span>
                      Вступи до&nbsp;Академії GoStudy{" "}
                      <strong>безкоштовно!</strong>
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
                  {getTranslatedText(
                    <>
                      Discover everything about education and life
                      in&nbsp;Europe
                    </>,
                    <>Khám phá mọi điều về giáo dục và cuộc sống tại Châu Âu</>,
                    <>
                      Узнай всё об&nbsp;образовании и&nbsp;жизни в&nbsp;Европе
                    </>,
                    <>Дізнайся все про освіту та&nbsp;життя в&nbsp;Європі</>
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
                  {getTranslatedText(
                    <>
                      Get the chance to&nbsp;win a&nbsp;scholarship for studying
                      in&nbsp;Europe, up&nbsp;to&nbsp;&euro;5700
                    </>,
                    <>
                      Có cơ hội nhận học bổng để học tập tại Châu Âu,{" "}
                      <Box
                        component={"br"}
                        display={{ xs: "none", sm: "block" }}
                      />
                      lên đến €5700
                    </>,
                    <>
                      Получи возможность выиграть грант на&nbsp;обучение
                      до&nbsp;5700&nbsp;&euro;
                    </>,
                    <>
                      Отримай можливість виграти грант на&nbsp;навчання
                      у&nbsp;Європі до&nbsp;5700&nbsp;&euro;
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          }
          info={[
            {
              text: getTranslatedText(
                "GoStudy Academy",
                "Học viện GoStudy ",
                "Академия GoStudy",
                "Академія GoStudy"
              ) as string,
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
                  {getTranslatedText(
                    "Academy Prize Fund",
                    "Quỹ giải thưởng học viện",
                    "Призовой фонд Академии",
                    "Призовий фонд Академії"
                  )}
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
            text: getTranslatedText(
              "Get into the Academy",
              "Gia nhập Học viện",
              "Поступить в Академию",
              "Вступити до Академії"
            ) as string,
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
                title: getTranslatedText(
                  "Free",
                  "Miễn phí",
                  "Бесплатно",
                  "Безкоштовно"
                ) as string,
                text: getTranslatedText(
                  <>
                    Becoming a&nbsp;student of&nbsp;the Academy
                    is&nbsp;absolutely free, all you need
                    is&nbsp;to&nbsp;register.
                  </>,
                  <>
                    Việc trở thành sinh viên của Học viện là hoàn toàn miễn phí,
                    bạn chỉ cần đăng ký.
                  </>,
                  <>
                    Стать студентом Академии можно совершенно бесплатно, нужна
                    только регистрация
                  </>,
                  <>
                    Стати студентом Академії можна абсолютно безкоштовно,
                    потрібна лише реєстрація
                  </>
                ) as string,
              },
              {
                title: getTranslatedText(
                  "When?",
                  "Khi nào?",
                  "Когда",
                  "Коли"
                ) as string,
                text: getTranslatedText(
                  <>
                    You can become a&nbsp;student of&nbsp;the Academy
                    at&nbsp;any time, right after registration.
                  </>,
                  <>
                    Bạn có thể trở thành sinh viên của Học viện bất kỳ lúc nào,
                    ngay sau khi đăng ký.
                  </>,
                  <>
                    Стать студентом Академии можно в&nbsp;любое время
                    и&nbsp;сразу после регистрации
                  </>,
                  <>
                    Стати студентом Академії можна у&nbsp;будь-який час
                    і&nbsp;одразу після реєстрації
                  </>
                ) as string,
              },
              {
                title: getTranslatedText(
                  "Format",
                  "Định dạng",
                  "Формат",
                  "Формат"
                ) as string,
                text: getTranslatedText(
                  <>
                    You will receive assignments and materials from the Academy
                    in&nbsp;the Telegram chatbot.
                  </>,
                  <>
                    Bạn sẽ nhận bài tập và tài liệu từ Học viện thông qua
                    chatbot trên Telegram.
                  </>,
                  <>
                    Получать задания и&nbsp;материалы Академии ты&nbsp;будешь
                    в&nbsp;чат-боте в&nbsp;Telegram
                  </>,
                  <>
                    Отримувати завдання та&nbsp;матеріали Академії ти&nbsp;будеш
                    у&nbsp;чат-боті в&nbsp;Telegram
                  </>
                ) as string,
              },
              {
                title: getTranslatedText(
                  "Certificate",
                  "Chứng chỉ",
                  "Сертификат",
                  "Сертифікат"
                ) as string,
                text: getTranslatedText(
                  <>
                    A&nbsp;certificate will be&nbsp;issued to&nbsp;all GoStudy
                    Academy students upon completion of&nbsp;the course.
                  </>,
                  "Một chứng chỉ sẽ được cấp cho tất cả sinh viên Học viện GoStudy sau khi hoàn thành khóa học.",
                  <>
                    Будет выдан всем студентам Академии GoStudy
                    о&nbsp;прохождении курса
                  </>,
                  <>
                    Буде виданий усім студентам Академії GoStudy
                    про&nbsp;проходження курсу
                  </>
                ) as string,
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
                {getTranslatedText(
                  "What is",
                  "Học viện",
                  "Что такое",
                  "Що таке"
                )}
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
              {getTranslatedText(
                "GoStudy Academy?",
                "GoStudy là gì?",
                "Академия GoStudy?",
                "академія GoStudy?"
              )}
            </Typography>
          ),
          description: getTranslatedText(
            <>
              This is&nbsp;a&nbsp;free theory and practice course for your
              successful future in&nbsp;Europe.
            </>,
            <>
              Đây là khóa học lý thuyết và thực hành miễn phí cho tương lai
              thành công của bạn ở Châu Âu.
            </>,
            <>
              Это бесплатный курс теории и&nbsp;практики для&nbsp;твоего
              успешного будущего в&nbsp;Европе.
            </>,
            <>
              Це&nbsp;безкоштовний курс теорії та&nbsp;практики для&nbsp;твого
              успішного майбутнього в&nbsp;Європі.
            </>
          ) as string,
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
                lineHeight={{ xs: "19.2px", sm: "21.6px" }}
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

                {getTranslatedText(
                  "Your choice is our priority",
                  <>
                    Sự lựa chọn của bạn là
                    ưu&nbsp;tiên&nbsp;của&nbsp;chúng&nbsp;tôi
                  </>,
                  "Твой выбор — наш приоритет ",
                  "Твій вибір — наш пріоритет"
                )}
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
              {getTranslatedText(
                <>
                  At&nbsp;the Academy you will be&nbsp;able to&nbsp;decide
                  on&nbsp;a&nbsp;country for higher education, choose
                  universities and destinations to&nbsp;apply to&nbsp;and build
                  a&nbsp;track to&nbsp;prepare for admission and start learning
                  the language.
                </>,
                "Tại Học viện, bạn sẽ có thể quyết định quốc gia cho giáo dục đại học, chọn trường đại học và điểm đến để đăng ký và xây dựng đường",
                <>
                  В&nbsp;Академии ты&nbsp;сможешь определиться со&nbsp;страной
                  для получения высшего образования, выбрать университеты
                  и&nbsp;направления для подачи документов, построить трек
                  подготовки к&nbsp;поступлению
                </>,
                <>
                  В&nbsp;Академії ти&nbsp;можеш визначитися із&nbsp;країною для
                  здобуття вищої освіти, вибрати університети та&nbsp;напрямки
                  для подання документів, побудувати трек підготовки
                  до&nbsp;вступу і&nbsp;почати
                </>
              )}
              <Box
                component={"br"}
                sx={{ display: { xs: "none", sm: "block" } }}
              />{" "}
              {getTranslatedText(
                <></>,
                " đi để  chuẩn bị nhập học và bắt đầu học",
                <> и&nbsp;начать учить язык.</>,
                <> вивчати мову.</>
              )}
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
                " ngôn ngữ.",
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
                bottom: "-4px",
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
                bottom: "-4px",
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
                  lineHeight={{ xs: "19.2px", sm: "21.6px" }}
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

                  {getTranslatedText(
                    "In demand",
                    "Nhu cầu",
                    "Востребованно",
                    "Має попит"
                  )}
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
                {getTranslatedText(
                  <>
                    In-demand education, a&nbsp;career in&nbsp;international
                    companies, clear prospects and a&nbsp;decent standard
                    of&nbsp;living&nbsp;&mdash; this is&nbsp;what a&nbsp;quality
                    European education provides.
                  </>,
                  "Nền giáo dục theo yêu cầu, sự nghiệp trong các công ty quốc tế, triển vọng rõ ràng và mức sống tử tế - đây là những gì nền giáo dục chất lượng của Châu Âu mang lại.",
                  <>
                    Востребованное образование, карьера в&nbsp;международных
                    компаниях, ясные перспективы и&nbsp;достойный уровень
                    жизни&nbsp;&mdash; вот что дает качественное европейское
                    образование.
                  </>,
                  <>
                    Освіта, яка має попит, кар&rsquo;єра в&nbsp;міжнародних
                    компаніях, ясні перспективи і&nbsp;гідний рівень
                    життя&nbsp;&mdash; ось що&nbsp;дає якісна європейська
                    освіта.
                  </>
                )}
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
                  lineHeight={{ xs: "19.2px", sm: "21.6px" }}
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

                  {getTranslatedText(
                    "It's free",
                    "Nó miễn phí",
                    "Бесплатно",
                    "Безкоштовно"
                  )}
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
                {getTranslatedText(
                  <>
                    One Academy instead of&nbsp;a&nbsp;thousand paid counselling
                    sessions for your future. Free!
                  </>,
                  "Một Học viện thay vì hàng nghìn buổi tư vấn trả phí cho tương lai của bạn. Miễn phí!",
                  <>
                    Одна Академия вместо тысячи платных консультаций для твоего
                    будущего. Бесплатно!
                  </>,
                  <>
                    Одна Академія замість тисячі платних консультацій для твого
                    майбутнього. Безкоштовно!
                  </>
                )}
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
                    Who exactly{" "}
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
                      needs
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
                    the Academy
                  </>,
                  <>
                    Chính xác ai{" "}
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
                      cần
                      <FirstUnderline
                        sx={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
                        }}
                      />
                    </Box>{" "}
                    Học viện này
                  </>,
                  <>
                    Кому точно{" "}
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
                      нужна
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
                    Академия
                  </>,
                  <>
                    Кому точно{" "}
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
                      потрібна
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
                    Академія
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
                title: getTranslatedText(
                  "Schoolchildren",
                  "Học sinh",
                  "Школьникам",
                  "Школярам"
                ) as string,
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
                    {
                      getTranslatedText(
                        <>
                          For middle and high school students considering
                          studying abroad.
                        </>,
                        <>
                          D&agrave;nh cho học sinh trung học v&agrave;&nbsp;phổ
                          th&ocirc;ng c&oacute;&nbsp;&yacute;&nbsp;định học tập
                          ở nước ngo&agrave;i.
                        </>,
                        <>
                          Для ребят средней и&nbsp;старшей школы,
                          кто&nbsp;рассматривает вариант учебы за&nbsp;границей
                        </>,
                        <>
                          Для учнів середньої та&nbsp;старшої школи, хто
                          розглядає варіант навчання за&nbsp;кордоном
                        </>
                      ) as string
                    }
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
                title: getTranslatedText(
                  "Students",
                  "Sinh viên",
                  "Студентам",
                  "Студентам"
                ) as string,
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
                    {
                      getTranslatedText(
                        <>
                          For bachelor&rsquo;s degree graduates planning
                          to&nbsp;continue their education and enroll
                          in&nbsp;a&nbsp;master&rsquo;s program.
                        </>,
                        <>
                          D&agrave;nh cho những người tốt nghiệp cấp bằng cử
                          nh&acirc;n c&oacute;&nbsp;kế hoạch tiếp tục học tập
                          v&agrave;&nbsp;nhập học v&agrave;o chương tr&igrave;nh
                          thạc sĩ.
                        </>,
                        <>
                          Выпускникам бакалавриата, кто&nbsp;собирается
                          продолжить обучение и&nbsp;поступить
                          в&nbsp;магистратуру
                        </>,
                        <>
                          Випускникам бакалаврату, хто збирається продовжити
                          навчання та&nbsp;вступити до&nbsp;магістратури
                        </>
                      ) as string
                    }
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
                title: getTranslatedText(
                  <>Young professionals</>,
                  <>Người chuyên nghiệp trẻ</>,
                  <>Молодым специалистам</>,
                  <>Молодим фахівцям</>
                ),
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
                    {
                      getTranslatedText(
                        <>
                          For those planning to&nbsp;build a&nbsp;successful
                          career not only in&nbsp;Europe but also worldwide.
                        </>,
                        <>
                          D&agrave;nh cho những người c&oacute;&nbsp;kế hoạch
                          x&acirc;y dựng sự nghiệp th&agrave;nh c&ocirc;ng
                          kh&ocirc;ng chỉ tại Ch&acirc;u
                          &Acirc;u&nbsp;m&agrave;&nbsp;c&ograve;n tr&ecirc;n
                          to&agrave;n thế giới.
                        </>,
                        <>
                          Для тех, кто планирует построить успешную карьеру
                          не&nbsp;только в&nbsp;Европе,
                          но&nbsp;и&nbsp;в&nbsp;мире
                        </>,
                        <>
                          Для тих, хто планує побудувати успішну кар&rsquo;єру
                          не&nbsp;лише у&nbsp;Європі, а&nbsp;й&nbsp;у&nbsp;світі
                        </>
                      ) as string
                    }{" "}
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
          btnText: getTranslatedText(
            "Get into the Academy",
            "Gia nhập Học viện",
            "Поступить в Академию",
            "Вступити до Академії"
          ) as string,
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
                  The Academy{" "}
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
                    program
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
                  Chương trình của{" "}
                  {/* <Box
                    component={"br"}
                    sx={{ display: { xs: "block", sm: "none" } }}
                  /> */}
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(41, 98, 255, 1)", position: "relative" }}
                  >
                    Học&nbsp;
                    <Box component={"span"} sx={{ position: "relative" }}>
                      viện
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
                  Программа{" "}
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
                    Академии
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
                  Програма{" "}
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
                    Академії
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
          description: getTranslatedText(
            "3 months of classes, lectures, informative videos, and a Grant Competition among students.",
            "3 tháng học, bài giảng, video thông tin, và Cuộc thi Học bổng giữa sinh viên.",
            "3 месяца занятий, лекций, полезных видео и Конкурс Грантов среди студентов",
            "3 місяці занять, лекцій, корисних відео та Конкурс Грантів серед студентів"
          ) as string,
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
                {" "}
                {
                  getTranslatedText(
                    "Introduction",
                    "Giới thiệu",
                    "Знакомство",
                    "Знайомство"
                  ) as string
                }
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {
                  getTranslatedText(
                    <>
                      Introductory lectures and materials from the Academy,
                      information about classes, schedule, bonuses, gifts, and
                      the Grant Competition.
                    </>,
                    "Bài giảng và tài liệu giới thiệu từ Học viện, thông tin về các lớp học, lịch trình, phần thưởng, quà tặng, và Cuộc thi Học bổng.",
                    <>
                      Вводные лекции и&nbsp;материалы Академии, информация
                      про&nbsp;занятия, расписание, бонусы, подарки
                      и&nbsp;Конкурс Грантов.
                    </>,
                    <>
                      Вступні лекції та&nbsp;матеріали Академії, інформація про
                      заняття, розклад, бонуси, подарунки та&nbsp;Конкурс
                      Грантів.
                    </>
                  ) as string
                }
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
                {" "}
                {
                  getTranslatedText(
                    "Accessible Education in Europe",
                    "Giáo dục tiếp cận được tại Châu Âu",
                    "Доступное образование в Европе",
                    "Доступна освіта в Європі"
                  ) as string
                }
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {getTranslatedText(
                  <>
                    - Discover how education in&nbsp;Europe can be&nbsp;free.
                    <br />- Obtain information about countries, universities,
                    majors, and admission conditions for tuition-free education
                    in&nbsp;Europe. <br />- Familiarize yourself with real
                    success stories from&nbsp;individuals, GoStudy graduates who
                    have already walked this&nbsp;path and achieved success!
                  </>,
                  <>
                    - Khám phá cách giáo dục tại Châu Âu có thể miễn phí.
                    <br />
                    - Thu thập thông tin về các quốc gia, trường đại học, ngành
                    học và điều kiện nhập học để học tập miễn phí tại Châu Âu.
                    <br />- Hiểu rõ với những câu chuyện thành công thực tế từ
                    những người đã điều này, những cựu sinh viên của GoStudy đã
                    bước trên con đường này và đạt được thành công!
                  </>,
                  <>
                    - Узнай, как образование в&nbsp;Европе может быть
                    бесплатным. <br />- Получи информацию про страны,
                    университеты, направления, условия поступления
                    на&nbsp;бюджет в&nbsp;Европе. <br />- Познакомься
                    с&nbsp;реальными историями успеха ребят, выпускников
                    GoStudy, с&nbsp;теми, кто уже прошел этот путь
                    и&nbsp;добился успеха!
                  </>,
                  <>
                    - Дізнайся, як&nbsp;освіта в&nbsp;Європі може бути
                    безкоштовною.
                    <br />
                    - Отримай інформацію про країни, університети, напрями,
                    умови вступу на&nbsp;бюджет у&nbsp;Європі.
                    <br />- Познайомся з&nbsp;реальними історіями успіху хлопців
                    та&nbsp;дівчат, випускників GoStudy, з&nbsp;тими, хто вже
                    пройшов цей шлях і&nbsp;досяг успіху!
                  </>
                )}
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
                {
                  getTranslatedText(
                    "Education in Austria",
                    "Giáo dục tại Áo",
                    "Образование в Австрии",
                    "Освіта в Австрії"
                  ) as string
                }
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {getTranslatedText(
                  <>
                    - Discover a&nbsp;promising country for higher education.
                    <br />
                    - Learn how to&nbsp;master the language
                    in&nbsp;3&nbsp;months, get&nbsp;admitted
                    on&nbsp;a&nbsp;budget, and explore the brightest career
                    prospects.
                    <br />
                    - Receive colorful guides, compilations, guides, and more.
                    <br />- Join free German lessons with a&nbsp;native speaker!
                  </>,
                  <>
                    - Khám phá một quốc gia hứa hẹn cho giáo dục cao học. <br />
                    - Tìm hiểu cách làm chủ ngôn ngữ trong vòng 3 tháng, đỗ vào
                    ngân sách, và khám phá những triển vọng sự nghiệp sáng sủa
                    nhất.
                    <br />
                    - Nhận các hướng dẫn, tuyển tập, hướng dẫn màu sắc, và nhiều
                    hơn nữa.
                    <br />- Tham gia các buổi học tiếng Đức miễn phí với một
                    người bản xứ!
                  </>,
                  <>
                    - Открой для себя перспективную страну для получения высшего
                    образования. <br />
                    - Узнай как выучить язык за&nbsp;3&nbsp;месяца,
                    по&nbsp;ступить на&nbsp;бюджети открыть для себя самые яркие
                    карьерные перспективы. <br />
                    - Получи красочные гайды, подборки, путеводители
                    и&nbsp;мн.др.
                    <br />- Присоединяйся к&nbsp;бесплатным урокам немецкого
                    с&nbsp;преподавателем-носителем!
                  </>,
                  <>
                    - Відкрий для себе перспективну країну для здобуття вищої
                    освіти.
                    <br />
                    - Дізнайся як&nbsp;вивчити мову за&nbsp;3&nbsp;місяці,
                    вступити на&nbsp;бюджет і&nbsp;відкрити для себе
                    найяскравіші кар&rsquo;єрні перспективи.
                    <br />
                    - Отримай барвисті гайди, добірки, путівники та&nbsp;ін.
                    <br />- Приєднуйся до&nbsp;безкоштовних уроків німецької
                    з&nbsp;викладачем-носієм!
                  </>
                )}
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
                {" "}
                {
                  getTranslatedText(
                    "Education in the Czech Republic",
                    "Giáo dục tại Cộng hòa Séc",
                    "Образование в Чехии",
                    "Освіта у Чехії"
                  ) as string
                }
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {getTranslatedText(
                  <>
                    - Learn how to&nbsp;prepare and master the language
                    to&nbsp;guarantee admission in&nbsp;the Czech Republic,
                    where education for foreign students in&nbsp;Czech
                    is&nbsp;completely free!
                    <br />
                    - Receive helpful materials and guides.
                    <br />- Join free Czech language lessons with a&nbsp;native
                    speaker!
                  </>,
                  <>
                    - Học cách chuẩn bị và làm chủ ngôn ngữ để đảm bảo nhập học
                    tại Cộng hòa Séc, nơi giáo dục cho sinh viên nước ngoài bằng
                    tiếng Séc là hoàn toàn miễn phí!
                    <br />
                    - Nhận các tài liệu và hướng dẫn hữu ích.
                    <br />- Tham gia các buổi học tiếng Séc miễn phí với một
                    người bản xứ!
                  </>,
                  <>
                    - Узнай, как подготовиться и&nbsp;выучить язык, чтобы
                    гарантировано поступить в&nbsp;Чехии, где образование
                    для&nbsp;иностранных студентов на&nbsp;чешском языке
                    полностью бесплатное!
                    <br />
                    - Получи полезные материалы и&nbsp;гайды.
                    <br />- Присоединяйся к&nbsp;бесплатным урокам чешского
                    языка с&nbsp;преподавателем-носителем!
                  </>,
                  <>
                    - Дізнайся, як&nbsp;підготуватися та&nbsp;вивчити мову, щоб
                    гарантовано вступити до&nbsp;Чехії, де&nbsp;освіта
                    для&nbsp;іноземних студентів чеською мовою повністю
                    безкоштовна!
                    <br />
                    - Отримай корисні матеріали та&nbsp;гайди.
                    <br />- Приєднуйся до&nbsp;безкоштовних уроків чеської мови
                    з&nbsp;викладачем-носієм!
                  </>
                )}
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
                {" "}
                {
                  getTranslatedText(
                    "Education in Slovakia",
                    "Giáo dục tại Slovakia",
                    "Образование в Словакии",
                    "Освіта у Словаччині"
                  ) as string
                }
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {getTranslatedText(
                  <>
                    - Discover how to&nbsp;obtain a&nbsp;student residence
                    permit and&nbsp;settle in&nbsp;the country with the most
                    comfortable cost of&nbsp;living in&nbsp;Europe. <br />
                    - Ensure that applying, studying, and living
                    in&nbsp;Slovakia is&nbsp;easy!
                    <br />- Obtain unique information about Slovak universities
                    and&nbsp;majors.
                  </>,
                  <>
                    - Khám phá cách làm thế nào để có được giấy phép cư trú sinh
                    viên và định cư trong quốc gia có chi phí sinh sống thoải
                    mái nhất ở Châu Âu. <br />
                    - Đảm bảo rằng việc nộp đơn, học tập và sống ở Slovakia là
                    dễ dàng!
                    <br />- Nhận thông tin độc đáo về các trường đại học và
                    ngành học tại Slovakia.
                  </>,
                  <>
                    - Узнай, как получить студенческий ВНЖ и&nbsp;обосноваться
                    в&nbsp;стране с&nbsp;самой комфортной стоимостью жизни
                    в&nbsp;Европе. <br />
                    - Убедись, что поступить, учиться и&nbsp;жить
                    в&nbsp;Словакии легко!
                    <br />- Получи уникальную информацию по&nbsp;словацким вузам
                    и&nbsp;направлениям.
                  </>,
                  <>
                    - Дізнайся, як&nbsp;отримати студентську ППП
                    та&nbsp;влаштуватися в&nbsp;країні з&nbsp;найкомфортнішою
                    вартістю життя в&nbsp;Європі.
                    <br />- Переконайся, що&nbsp;вступити, вчитися та&nbsp;жити
                    у&nbsp;Словаччині легко!
                    <br />- Отримай унікальну інформацію щодо словацьких вишів
                    та&nbsp;напрямків.
                  </>
                )}
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
                {" "}
                {
                  getTranslatedText(
                    "Career and Perspectives",
                    "Sự nghiệp và Triển vọng",
                    "Карьера и перспективы",
                    "Кар'єра та перспективи"
                  ) as string
                }
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {getTranslatedText(
                  <>
                    - Build a&nbsp;step-by-step educational and career strategy
                    with&nbsp;GoStudy experts.
                    <br />
                    - Choose a&nbsp;path to&nbsp;achieve your goal&nbsp;&mdash;
                    a&nbsp;successful future in&nbsp;Europe!
                    <br />- Learn about studying and working in&nbsp;Europe from
                    firsthand experiences. Gain access to&nbsp;the stories
                    of&nbsp;graduates from&nbsp;European universities.
                  </>,
                  <>
                    - Xây dựng chiến lược giáo dục và sự nghiệp từng bước với
                    các chuyên gia của GoStudy.
                    <br />
                    - Chọn một con đường để đạt được mục tiêu của bạn — một
                    tương lai thành công tại Châu Âu!
                    <br />- Tìm hiểu về việc học tập và làm việc tại Châu Âu
                    thông qua những trải nghiệm trực tiếp. Tiếp cận các câu
                    chuyện của cựu sinh viên từ các trường đại học Châu Âu.
                  </>,
                  <>
                    - Построй пошаговую образовательную и&nbsp;карьерную
                    стратегию вместе с&nbsp;экспертами GoStudy.
                    <br />
                    - Выбери направление для достижения поставленной
                    цели&nbsp;&mdash; успешное будущее в&nbsp;Европе!
                    <br />- Узнай об&nbsp;учёбе и&nbsp;работе в&nbsp;Европе
                    из&nbsp;первых уст. Получи доступ к&nbsp;историям
                    выпускников европейских вузов.
                  </>,
                  <>
                    - Побудуй покрокову освітню та&nbsp;кар&rsquo;єрну стратегію
                    разом з&nbsp;експертами GoStudy.
                    <br />
                    - Вибери напрямок для досягнення поставленої
                    мети&nbsp;&mdash; успішне майбутнє в&nbsp;Європі!
                    <br />- Дізнайся про навчання та&nbsp;роботу в&nbsp;Європі
                    з&nbsp;перших вуст. Отримай доступ до&nbsp;історій
                    випускників європейських вишів.
                  </>
                )}
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
                {
                  getTranslatedText(
                    "Grant Competition 🏆",
                    "Cuộc thi Học bổng 🏆",
                    "Конкурс Грантов 🏆",
                    "Конкурс Грантів 🏆"
                  ) as string
                }
              </Box>
            ),
            description: (
              <Box
                lineHeight={"20.8px"}
                letterSpacing={"-0.5px"}
                fontFamily={montserratFamily}
              >
                {getTranslatedText(
                  <>
                    Every participant in&nbsp;the Academy will have the chance
                    to&nbsp;win up&nbsp;to&nbsp;5700 euros for preparation for
                    admission in&nbsp;their chosen country. Study in&nbsp;Europe
                    for FREE!
                  </>,
                  "Mọi người tham gia Học viện đều có cơ hội nhận đến 5700 euro để chuẩn bị cho việc nhập học ở quốc gia mà họ đã chọn. Học tập tại Châu Âu MIỄN PHÍ! ",
                  <>
                    Каждый участник Академии получит шанс выиграть до&nbsp;5700
                    евро на&nbsp;подготовку к&nbsp;поступлению в&nbsp;выбранной
                    стране. Учись в&nbsp;Европе БЕСПЛАТНО!
                  </>,
                  <>
                    Кожен учасник Академії отримає шанс виграти до&nbsp;5700
                    євро на&nbsp;підготовку до&nbsp;вступу до&nbsp;обраної
                    країни. Навчайся у&nbsp;Європі БЕЗКОШТОВНО!
                  </>
                )}
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
              {getTranslatedText(
                <>
                  <span style={{ color: "rgba(255, 255, 0, 1)" }}>
                    Regular grant giveaways
                  </span>{" "}
                  among Academy students
                </>,
                <>
                  <span style={{ color: "rgba(255, 255, 0, 1)" }}>
                    Phát quà định kỳ
                  </span>{" "}
                  giữa sinh viên Học viện
                </>,
                <>
                  <span style={{ color: "rgba(255, 255, 0, 1)" }}>
                    Регулярные розыгрыши
                  </span>{" "}
                  грантов среди студентов Академии
                </>,
                <>
                  <span style={{ color: "rgba(255, 255, 0, 1)" }}>
                    Регулярні розіграші
                  </span>{" "}
                  грантів серед студентів Академії
                </>
              )}
            </Typography>
            <Stack gap={{ xs: "12px", sm: "16px" }}>
              {[
                {
                  title: getTranslatedText(
                    <>
                      The GoStudy Grant is&nbsp;your chance to&nbsp;fulfill
                      the&nbsp;dream of&nbsp;studying and living abroad!
                    </>,
                    <>
                      Học bổng GoStudy là cơ hội của bạn để thực hiện ước mơ học
                      tập và sống ở nước ngoài!
                    </>,
                    <>
                      Грант GoStudy&nbsp;&mdash; это ваша возможность исполнить
                      мечту учиться и&nbsp;жить за&nbsp;границей!
                    </>,
                    <>
                      Грант GoStudy&nbsp;&mdash; це&nbsp;ваша можливість
                      здійснити мрію вчитися і&nbsp;жити за&nbsp;кордоном!
                    </>
                  ),
                },
                {
                  title: getTranslatedText(
                    <>
                      Every Academy participant has a&nbsp;unique opportunity
                      to&nbsp;receive a&nbsp;grant ranging from&nbsp;&euro;1400
                      to&nbsp;&euro;5725!
                    </>,
                    <>
                      Mỗi người tham gia Học viện đều c&oacute;&nbsp;cơ hội đặc
                      biệt nhận được học bổng từ 1400 đến 5725&nbsp;euro!
                    </>,
                    <>
                      Каждый участник Академии&nbsp;&mdash; обладатель
                      уникальной возможности получить грант на&nbsp;сумму
                      от&nbsp;1400&euro; до&nbsp;5725&euro;!
                    </>,
                    <>
                      Кожен учасник Академії&nbsp;&mdash; володар унікальної
                      можливості отримати грант на&nbsp;суму від 1400&euro;
                      до&nbsp;5725&euro;!
                    </>
                  ),
                },
                {
                  title: getTranslatedText(
                    <>
                      The grant provides the opportunity to&nbsp;study
                      and&nbsp;prepare for&nbsp;admission
                      to&nbsp;a&nbsp;European university absolutely free
                      of&nbsp;charge.
                    </>,
                    <>
                      Học bổng cung cấp cơ hội học tập v&agrave;&nbsp;chuẩn bị
                      cho việc nhập học v&agrave;o một trường đại học Ch&acirc;u
                      &Acirc;u&nbsp;m&agrave;&nbsp;ho&agrave;n to&agrave;n miễn
                      ph&iacute;.
                    </>,
                    <>
                      Грант дает возможность учиться и&nbsp;готовиться
                      к&nbsp;поступлению в&nbsp;европейский вуз абсолютно
                      бесплатно.
                    </>,
                    <>
                      Грант дає можливість вчитися і&nbsp;готуватися
                      до&nbsp;вступу до&nbsp;європейського вишу абсолютно
                      безкоштовно.
                    </>
                  ),
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
            description: getTranslatedText(
              <>Winners of&nbsp;previous Grant Competitions by&nbsp;GoStudy.</>,
              <>
                Những người chiến thắng của Cuộc thi Học bổng trước đ&acirc;y
                do&nbsp;GoStudy tổ chức.
              </>,
              <>Победители предыдущих Конкурсов Грантов от&nbsp;GoStudy</>,
              <>Переможці попередніх Конкурсів Грантів від GoStudy</>
            ) as string,
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
                    They have already fulfilled{" "}
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
                      their dream
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
                    Họ đã thành công trong việc thực hiện ước{" "}
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
                      mơ của mình
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
                    Они уже исполнили{" "}
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
                      свою мечту
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
                    Вони вже здійснили{" "}
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
                      свою мрію
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
                name: getTranslatedText(
                  "Alexandra Z.",
                  "Alexandra Z.",
                  "Александра З.",
                  "Олександра З."
                ),
                social: "788sashaz",
                href: "https://instagram.com/788sashaz?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_1.png",
              },
              {
                name: getTranslatedText(
                  "Alexei B.",
                  "Alexei B.",
                  "Алексей Б.",
                  "Олексій Б."
                ),
                href: "https://www.instagram.com/p/CzawxJSL3i6/?igshid=NzBmMjdhZWRiYQ==",
                social: "bezglasnyyalexey",
                img: "seventhSection_2.png",
              },
              {
                name: getTranslatedText(
                  "Darina Z.",
                  "Darina Z.",
                  "Дарина З.",
                  "Дарина З."
                ),
                social: "daryna.zuieva",
                socialName: "facebook",
                href: "https://www.facebook.com/daryna.zuieva",
                img: "seventhSection_3.png",
              },
              {
                name: getTranslatedText(
                  "Karina L.",
                  "Karina L.",
                  "Карина Л.",
                  "Каріна Л."
                ),
                social: "karin.litvinova",
                href: "https://instagram.com/karin.litvinova?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_4.png",
              },
              {
                name: getTranslatedText(
                  "Andrey K.",
                  "Andrey K.",
                  "Андрей К.",
                  "Андрій К."
                ),
                social: "ai_kovalov",
                href: "https://instagram.com/ai_kovalov?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_5.png",
              },
              {
                name: getTranslatedText(
                  "Manzura M.",
                  "Manzura M.",
                  "Манзура М.",
                  "Манзура М."
                ),
                social: "manzuritta",
                img: "seventhSection_6.png",
              },
              {
                name: getTranslatedText(
                  "Denis P.",
                  "Denis P.",
                  "Денис П.",
                  "Денис П."
                ),
                social: "denyspimenov",
                href: "https://instagram.com/denyspimenov?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_7.png",
              },
              {
                name: getTranslatedText(
                  "Alina L.",
                  "Alina L.",
                  "Алина Л.",
                  "Аліна Л."
                ),
                social: "wlitvinova",
                href: "https://instagram.com/wlitvinova?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_8.png",
              },
              {
                name: getTranslatedText(
                  "Maria B.",
                  "Maria B.",
                  "Мария Б.",
                  "Марія Б."
                ),
                social: "mary_boichenk",
                href: "https://instagram.com/mary_boichenko?igshid=MzMyNGUyNmU2YQ==",
                img: "seventhSection_9.png",
              },
              {
                name: getTranslatedText(
                  "Vasyl M.",
                  "Vasyl M.",
                  "Василь М.",
                  "Василь М."
                ),
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
            {getTranslatedText(
              <>
                Take a{" "}
                <span style={{ color: "rgba(213, 0, 0, 1)" }}>
                  step towards
                </span>{" "}
                your dream&nbsp;&mdash; living and studying in&nbsp;Europe.
              </>,
              <>
                Tiến một{" "}
                <span style={{ color: "rgba(213, 0, 0, 1)" }}>
                  bước đến giấc
                </span>{" "}
                mơ của bạn&nbsp;&mdash; sống v&agrave;&nbsp;học tập tại
                Ch&acirc;u&nbsp;&Acirc;u.
              </>,
              <>
                Сделай{" "}
                <span style={{ color: "rgba(213, 0, 0, 1)" }}>
                  один шаг навстречу
                </span>{" "}
                мечте&nbsp;&mdash; жить и&nbsp;учиться в&nbsp;Европе
              </>,
              <>
                Зроби{" "}
                <span style={{ color: "rgba(213, 0, 0, 1)" }}>
                  один крок назустріч
                </span>{" "}
                мрії&nbsp;&mdash; жити та&nbsp;навчатися в&nbsp;Європі
              </>
            )}
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
            {
              getTranslatedText(
                "Fill out the form and become a student of the GoStudy Academy.",
                "Điền vào biểu mẫu và trở thành sinh viên của Học viện GoStudy.",
                "Заполни форму и стань студентом Академии GoStudy",
                "Заповни форму та стань студентом Академії GoStudy"
              ) as string
            }
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
                        fontSize: { xs: "12px", sm: "14" },
                        textAlign: "center",
                      }}
                    >
                      нажимая на&nbsp;кнопку, вы&nbsp;принимаете условия
                      политики и&nbsp;пользовательского соглашения
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      Форма успешно отправлена!
                      <br />
                      Спасибо!
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
                        fontSize: { xs: "12px", sm: "14" },
                        textAlign: "center",
                      }}
                    >
                      Натискаючи кнопку, ви&nbsp;приймаєте умови політики
                      та&nbsp;угоди користувача
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      Форму успішно відправлено!
                      <br />
                      Дякую!
                    </>
                  ),
                },
              }
            : lang === "vi"
            ? {
                language: "vi",
                content: {
                  acceptTerms: (
                    <Box
                      sx={{
                        fontFamily: montserratFamily,
                        lineHeight: { xs: "14.4px", sm: "20.02px" },
                        letterSpacing: { xs: "-0.5px", sm: "-0.5px" },
                        fontSize: { xs: "12px", sm: "14" },
                        textAlign: "center",
                      }}
                    >
                      Bằng c&aacute;ch nhấn n&uacute;t, bạn chấp nhận
                      ch&iacute;nh s&aacute;ch của t&acirc;m tr&iacute;
                      v&agrave;&nbsp;l&agrave;m h&agrave;i l&ograve;ng
                      kristuvach
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      Biểu mẫu đã được gửi thành công!
                      <br />
                      Kinh quá!
                    </>
                  ),
                },
              }
            : {
                language: "en",
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
                      By&nbsp;clicking the button, you accept the terms
                      of&nbsp;the policy and user agreement
                    </Box>
                  ),
                  formSubmitted: (
                    <>
                      The form has been successfully submitted!
                      <br />
                      Thanks!
                    </>
                  ),
                },
              }
        }
      />

      <AccordionsSectionV2
        title="FAQ"
        renderTitle={() => (
          <Typography
            lineHeight={{ xs: "32px", sm: "42px" }}
            letterSpacing={{ xs: "-1px", sm: "-2px" }}
            fontSize={{ xs: "32px", sm: "42px" }}
            fontFamily={montserratFamily}
            fontWeight={700}
          >
            <Box component={"span"} sx={{ position: "relative" }}>
              FAQ
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
        description={
          getTranslatedText(
            <>
              We&nbsp;answer frequently asked questions about our academy, the
              admission and training process.
            </>,
            <>
              Ch&uacute;ng t&ocirc;i trả lời c&aacute;c c&acirc;u hỏi thường gặp
              về học viện, qu&aacute; tr&igrave;nh tuyển sinh
              v&agrave;&nbsp;đ&agrave;o tạo.
            </>,
            <>
              Мы&nbsp;отвечаем на&nbsp;часто задаваемые вопросы о&nbsp;нашей
              академии, процессе поступления и&nbsp;обучения в&nbsp;ней.
            </>,
            <>
              Ми&nbsp;відповідаємо на&nbsp;питання, які часто ставляться про
              нашу академію, процес вступу та&nbsp;навчання в&nbsp;ній.
            </>
          ) as string
        }
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
                {
                  getTranslatedText(
                    <>How do I apply?</>,
                    <>L&agrave;m thế n&agrave;o để đăng&nbsp;k&yacute;?</>,
                    <>Как подать заявку?</>,
                    <>Як&nbsp;подати заявку?</>
                  ) as string
                }
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {
                  getTranslatedText(
                    <>
                      Submit the application through the form above and
                      instantly gain access to&nbsp;the Academy bot.
                    </>,
                    <>
                      Đệ tr&igrave;nh đơn đăng k&yacute;&nbsp;qua biểu mẫu ở
                      tr&ecirc;n v&agrave;&nbsp;ngay lập tức
                      c&oacute;&nbsp;quyền truy cập v&agrave;o bot của Học viện.
                    </>,
                    <>
                      Отправь заявку через форму выше и&nbsp;сразу получи доступ
                      в&nbsp;бот Академии.
                    </>,
                    <>
                      Надішли заявку через форму вище і&nbsp;відразу отримай
                      доступ до&nbsp;боту Академії.
                    </>
                  ) as string
                }
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {
                  getTranslatedText(
                    <>
                      Is&nbsp;there no&nbsp;charge to&nbsp;participate
                      in&nbsp;the Academy?
                    </>,
                    <>
                      Kh&ocirc;ng c&oacute;&nbsp;ph&iacute; tham gia Học viện?
                    </>,
                    <>Участие в&nbsp;Академии бесплатное?</>,
                    <>Участь в&nbsp;Академії безкоштовна?</>
                  ) as string
                }
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {
                  getTranslatedText(
                    <>
                      Yes, the Academy is&nbsp;completely free and you only need
                      to&nbsp;register to&nbsp;attend. We&nbsp;look forward
                      to&nbsp;seeing everyone!
                    </>,
                    <>
                      V&acirc;ng, Học viện l&agrave;&nbsp;ho&agrave;n
                      to&agrave;n miễn ph&iacute; v&agrave;&nbsp;bạn chỉ cần
                      đăng k&yacute;&nbsp;để tham gia. Ch&uacute;ng t&ocirc;i
                      mong đợi được gặp mọi người!
                    </>,
                    <>
                      Да, Академия полностью бесплатная и&nbsp;для участия
                      в&nbsp;ней нужно всего лишь регистрация. Ждем всех!
                    </>,
                    <>
                      Так, Академія повністю безкоштовна і&nbsp;для участі
                      в&nbsp;ній потрібна лише реєстрація. Чекаємо на&nbsp;всіх!
                    </>
                  ) as string
                }
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {
                  getTranslatedText(
                    <>When and how are assignments made?</>,
                    <>
                      B&agrave;i tập được l&agrave;m khi n&agrave;o
                      v&agrave;&nbsp;như thế n&agrave;o?
                    </>,
                    <>Когда и&nbsp;как выполняются задания?</>,
                    <>Коли та&nbsp;як&nbsp;виконуються завдання?</>
                  ) as string
                }
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {
                  getTranslatedText(
                    <>
                      You can complete assignments at&nbsp;your own pace and
                      schedule. We&nbsp;have no&nbsp;strict deadlines
                      or&nbsp;requirements.
                    </>,
                    <>
                      Bạn c&oacute;&nbsp;thể ho&agrave;n th&agrave;nh b&agrave;i
                      tập theo tốc độ v&agrave;&nbsp;lịch tr&igrave;nh của bạn.
                      Ch&uacute;ng t&ocirc;i kh&ocirc;ng c&oacute;&nbsp;thời hạn
                      cứng nhắc hoặc y&ecirc;u cầu nghi&ecirc;m ngặt.
                    </>,
                    <>
                      Задания ты&nbsp;можешь выполнять в&nbsp;удобном для тебя
                      темпе и&nbsp;расписании. У&nbsp;нас нет строгих дедлайнов
                      и&nbsp;требований.
                    </>,
                    <>
                      Завдання ти&nbsp;можеш виконувати в&nbsp;зручному для тебе
                      темпі а&nbsp;розкладі. У&nbsp;нас немає суворих дедлайнів
                      та&nbsp;вимог.
                    </>
                  ) as string
                }
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {
                  getTranslatedText(
                    <>What are the conditions for completing the training?</>,
                    <>
                      Điều kiện để ho&agrave;n th&agrave;nh kh&oacute;a
                      đ&agrave;o tạo l&agrave;&nbsp;g&igrave;?
                    </>,
                    <>Какие условия прохождения обучения?</>,
                    <>Які умови проходження навчання?</>
                  ) as string
                }
              </Box>
            ),
            renderText: () => (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {getTranslatedText(
                  <>
                    The conditions are simple: you need to&nbsp;register
                    as&nbsp;a&nbsp;student of&nbsp;the Academy, receive study
                    materials and assignments, participate in&nbsp;webinars
                    as&nbsp;an&nbsp;audience, and keep track of&nbsp;the results
                    of&nbsp;the Grant Competition draw (who knows, you might
                    be&nbsp;the winner).
                    <br />
                    <br />
                    Completing assignments or&nbsp;participating
                    in&nbsp;webinars is&nbsp;not mandatory!
                  </>,
                  <>
                    C&aacute;c điều kiện rất đơn giản: bạn cần đăng
                    k&yacute;&nbsp;l&agrave;m sinh vi&ecirc;n của Học viện, nhận
                    t&agrave;i liệu học v&agrave;&nbsp;b&agrave;i tập, tham gia
                    c&aacute;c buổi hội thảo trực tuyến như l&agrave;&nbsp;một
                    người xem, v&agrave;&nbsp;theo d&otilde;i kết quả r&uacute;t
                    thăm Cuộc thi Học bổng (ai&nbsp;biết được, bạn
                    c&oacute;&nbsp;thể l&agrave;&nbsp;người chiến thắng).
                    <br />
                    <br />
                    Việc ho&agrave;n th&agrave;nh b&agrave;i tập hoặc tham gia
                    v&agrave;o c&aacute;c buổi hội thảo trực tuyến kh&ocirc;ng
                    bắt buộc!
                  </>,
                  <>
                    Условия простые: нужно зарегистрироваться как студент
                    Академии, получать учебный материал и&nbsp;задания,
                    принимать участия в&nbsp;вебинарах как зритель, следить
                    за&nbsp;результатами розыгрыша Конкурса Грантов (вдруг,
                    победителем окажишься именно&nbsp;ты).
                    <br />
                    <br />
                    Выполнение заданий или участие на&nbsp;вебинарах
                    не&nbsp;является обязательным!
                  </>,
                  <>
                    Умови прості: потрібно зареєструватися як&nbsp;студент
                    Академії, отримувати навчальний матеріал та&nbsp;завдання,
                    брати участь у&nbsp;вебінарах як&nbsp;глядач, стежити
                    за&nbsp;результатами розіграшу Конкурсу Грантів (раптом,
                    переможцем опинишся саме&nbsp;ти).
                    <br />
                    <br />
                    Виконання завдань чи&nbsp;участь на&nbsp;вебінарах
                    не&nbsp;є&nbsp;обов&rsquo;язковим!
                  </>
                )}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {
                  getTranslatedText(
                    <>
                      When will the classes at&nbsp;the Academy begin, and how
                      long will they last?
                    </>,
                    <>
                      Lớp học tại Học viện sẽ bắt đầu khi n&agrave;o
                      v&agrave;&nbsp;k&eacute;o d&agrave;i bao l&acirc;u?
                    </>,
                    <>
                      Когда начнутся занятия в&nbsp;Академии и&nbsp;как долго
                      они продлятся?
                    </>,
                    <>
                      Коли розпочнуться заняття в&nbsp;Академії
                      і&nbsp;як&nbsp;довго вони триватимуть?
                    </>
                  ) as string
                }
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {
                  getTranslatedText(
                    <>
                      You will gain access to the Academy materials immediately
                      after registration. Don't worry, it won't be boring – the
                      GoStudy team has carefully designed the Academy curriculum
                      to make it easy and interesting for all participants.
                    </>,
                    <>
                      Bạn sẽ c&oacute;&nbsp;quyền truy cập v&agrave;o t&agrave;i
                      liệu của Học viện ngay sau khi đăng&nbsp;k&yacute;. Đừng
                      lo&nbsp;lắng, n&oacute;&nbsp;sẽ kh&ocirc;ng nh&agrave;m
                      ch&aacute;n&nbsp;&mdash; đội ngũ GoStudy
                      đ&atilde;&nbsp;thiết kế chương tr&igrave;nh học của Học
                      viện một c&aacute;ch cẩn thận để l&agrave;m cho
                      n&oacute;&nbsp;dễ d&agrave;ng v&agrave;&nbsp;th&uacute; vị
                      cho tất cả c&aacute;c người tham gia.
                    </>,
                    <>
                      Доступ к материалам Академии ты получишь сразу после
                      регистрации. Не переживай, скучно не будет, команда
                      GoStudy специально составила учебную программу Академии
                      так, чтобы всем участникам было легко и интересно.
                    </>,
                    <>
                      Доступ до&nbsp;матеріалів Академії ти&nbsp;отримаєш одразу
                      після реєстрації. Не&nbsp;хвилюйся, нудно не&nbsp;буде,
                      команда GoStudy спеціально склала навчальну програму
                      Академії так, щоб усім учасникам було легко
                      та&nbsp;цікаво.
                    </>
                  ) as string
                }
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
                {
                  getTranslatedText(
                    <>
                      What will&nbsp;I get as&nbsp;a&nbsp;result of&nbsp;the
                      training?
                    </>,
                    <>
                      Bạn sẽ nhận được g&igrave;&nbsp;sau khi ho&agrave;n
                      th&agrave;nh kh&oacute;a đ&agrave;o tạo?
                    </>,
                    <>Что я&nbsp;получу по&nbsp;итогам обучения?</>,
                    <>Що&nbsp;я&nbsp;отримаю за&nbsp;підсумками навчання?</>
                  ) as string
                }
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {
                  getTranslatedText(
                    <>
                      Every student will receive a&nbsp;certificate
                      of&nbsp;completion from GoStudy Academy, along with
                      special bonuses for our educational programs.
                    </>,
                    <>
                      Mỗi sinh vi&ecirc;n sẽ nhận được chứng chỉ ho&agrave;n
                      th&agrave;nh từ Học viện GoStudy, c&ugrave;ng với
                      c&aacute;c phần thưởng đặc biệt cho c&aacute;c chương
                      tr&igrave;nh gi&aacute;o dục của ch&uacute;ng t&ocirc;i.
                    </>,
                    <>
                      Каждый студент получит сертификат о&nbsp;прохождении
                      Академии GoStudy, а&nbsp;также специальные бонусы
                      на&nbsp;наши учебные программы.
                    </>,
                    <>
                      Кожен студент отримає сертифікат про проходження Академії
                      GoStudy, а&nbsp;також спеціальні бонуси на&nbsp;наші
                      навчальні програми.
                    </>
                  ) as string
                }
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {
                  getTranslatedText(
                    <>
                      What is&nbsp;a&nbsp;grant and what does it&nbsp;provide?
                    </>,
                    <>
                      Học bổng
                      l&agrave;&nbsp;g&igrave;&nbsp;v&agrave;&nbsp;n&oacute;&nbsp;cung
                      cấp những g&igrave;?
                    </>,
                    <>Что такое грант и&nbsp;что он&nbsp;дает?</>,
                    <>Що&nbsp;таке грант та&nbsp;що&nbsp;він дає?</>
                  ) as string
                }
              </Box>
            ),
            renderText: () => (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {getTranslatedText(
                  <>
                    The GoStudy grant is&nbsp;a&nbsp;certificate ranging from
                    &euro;1400 to&nbsp;&euro;5725, which the winner can use
                    to&nbsp;fully or&nbsp;partially cover the preparation
                    program for universities in&nbsp;Austria, the Czech
                    Republic, or&nbsp;Slovakia offered by&nbsp;GoStudy. This
                    grant allows the recipient to&nbsp;enroll
                    in&nbsp;a&nbsp;budgetary education program in&nbsp;Europe.
                    <br />
                    <br />
                    It&rsquo;s important to&nbsp;note that the GoStudy grant
                    cannot be&nbsp;redeemed for cash or&nbsp;received
                    as&nbsp;a&nbsp;monetary equivalent.
                  </>,
                  <>
                    Học bổng GoStudy l&agrave;&nbsp;một chứng chỉ
                    c&oacute;&nbsp;gi&aacute; từ 1400 đến 5725&nbsp;euro,
                    m&agrave;&nbsp;người chiến thắng c&oacute;&nbsp;thể sử dụng
                    để thanh to&aacute;n đầy đủ hoặc một phần chương
                    tr&igrave;nh chuẩn bị cho c&aacute;c trường đại học tại
                    &Aacute;o, Cộng h&ograve;a S&eacute;c hoặc Slovakia
                    do&nbsp;GoStudy cung cấp. Học bổng n&agrave;y cho
                    ph&eacute;p người nhận đăng k&yacute;&nbsp;v&agrave;o một
                    chương tr&igrave;nh gi&aacute;o dục
                    c&oacute;&nbsp;ng&acirc;n s&aacute;ch tại
                    Ch&acirc;u&nbsp;&Acirc;u.
                    <br />
                    <br />
                    Quan trọng lưu &yacute;&nbsp;rằng Học bổng GoStudy
                    kh&ocirc;ng thể đổi th&agrave;nh tiền mặt hoặc nhận được
                    dưới dạng tương đương tiền mặt.
                  </>,
                  <>
                    Грант GoStudy&nbsp;&mdash; это сертификат на&nbsp;сумму
                    выигрыша от&nbsp;1400&euro; до 5725&euro;, которым
                    победитель сможет &laquo;оплатить&raquo; полностью или
                    частично программу подготовки в&nbsp;вузы Австрии, Чехии или
                    Словакии от&nbsp;GoStudy и&nbsp;поступить в&nbsp;Европе
                    на&nbsp;бюджетную форму обучения!
                    <br />
                    <br />
                    Грант GoStudy нельзя обналичить или получить в&nbsp;денежном
                    эквиваленте.
                  </>,
                  <>
                    Грант GoStudy&nbsp;&mdash; це&nbsp;сертифікат на&nbsp;суму
                    виграшу від 1400&euro; до&nbsp;5725&euro;, яким переможець
                    зможе &laquo;сплатити&raquo; повністю або частково програму
                    підготовки до&nbsp;вишів Австрії, Чехії чи&nbsp;Словаччини
                    від GoStudy та&nbsp;вступити до&nbsp;Європи на&nbsp;бюджетну
                    форму навчання!
                    <br />
                    <br />
                    Грант GoStudy не&nbsp;можна перевести в&nbsp;готівку або
                    отримати в&nbsp;грошовому еквіваленті.
                  </>
                )}
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {
                  getTranslatedText(
                    <>Can I&nbsp;be expelled?</>,
                    <>
                      Liệu t&ocirc;i c&oacute;&nbsp;thể bị đuổi học kh&ocirc;ng?
                    </>,
                    <>Могут&nbsp;ли меня отчислить?</>,
                    <>Чи&nbsp;можуть мене відрахувати?</>
                  ) as string
                }
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {
                  getTranslatedText(
                    <>
                      No, we&nbsp;do&nbsp;not have a&nbsp;system
                      of&nbsp;punishment or&nbsp;expulsion from the Academy.
                      If&nbsp;for some reason you don&rsquo;t want
                      to&nbsp;participate in&nbsp;the Academy anymore, you can
                      simply unsubscribe from the bot.
                    </>,
                    <>
                      Kh&ocirc;ng, ch&uacute;ng t&ocirc;i kh&ocirc;ng
                      c&oacute;&nbsp;hệ thống trừng phạt hoặc đuổi học khỏi Học
                      viện. Nếu v&igrave;&nbsp;l&yacute;&nbsp;do&nbsp;n&agrave;o
                      đ&oacute;&nbsp;bạn kh&ocirc;ng muốn tham gia Học viện nữa,
                      bạn c&oacute;&nbsp;thể dễ d&agrave;ng hủy đăng
                      k&yacute;&nbsp;từ bot.
                    </>,
                    <>
                      Нет, у&nbsp;нас нет системы наказания или отчисления
                      из&nbsp;Академии. Если по&nbsp;какой-то причине тебе
                      не&nbsp;захочется больше участвовать в&nbsp;Академии,
                      ты&nbsp;сможешь просто отписаться от&nbsp;бота.
                    </>,
                    <>
                      Ні, ми&nbsp;не&nbsp;маємо системи покарання
                      чи&nbsp;відрахування з&nbsp;Академії. Якщо з&nbsp;якоїсь
                      причини тобі більше не&nbsp;захочеться брати участь
                      в&nbsp;Академії, ти&nbsp;зможеш просто відписатися від
                      бота.
                    </>
                  ) as string
                }
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {
                  getTranslatedText(
                    <>
                      When will the results of&nbsp;the Grants Competition
                      be&nbsp;available?
                    </>,
                    <>
                      Kết quả của Cuộc thi Học bổng sẽ được c&ocirc;ng bố khi
                      n&agrave;o?
                    </>,
                    <>Когда будут результаты Конкурса Грантов?</>,
                    <>Коли будуть результати конкурсу грантів?</>
                  ) as string
                }
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {
                  getTranslatedText(
                    <>
                      The Grant Drawing among participants will take place every
                      2&nbsp;months, and the results will be&nbsp;announced
                      on&nbsp;the day of&nbsp;the drawing.
                    </>,
                    <>
                      Việc R&uacute;t thăm Học bổng giữa c&aacute;c người tham
                      gia sẽ diễn ra&nbsp;mỗi 2&nbsp;th&aacute;ng,
                      v&agrave;&nbsp;kết quả sẽ được c&ocirc;ng bố v&agrave;o
                      ng&agrave;y diễn ra&nbsp;r&uacute;t thăm.
                    </>,
                    <>
                      Розыгрыш Грантов среди участников будут проходить каждые
                      2&nbsp;месяца, результаты будут объявлены в&nbsp;день
                      розыгрыша.
                    </>,
                    <>
                      Розіграш грантів серед учасників відбуватимуться кожні
                      2&nbsp;місяці, результати будуть оголошені в&nbsp;день
                      розіграшу.
                    </>
                  ) as string
                }
              </Box>
            ),
          },
          {
            title: (
              <Box
                letterSpacing={{ xs: "-0.5px", sm: "-1px" }}
                lineHeight={{ xs: "20.8px", sm: "24px" }}
              >
                {
                  getTranslatedText(
                    <>
                      What if&nbsp;I decided not to&nbsp;wait for the draw and
                      paid for the programme but ended up&nbsp;winning the
                      Grant?
                    </>,
                    <>
                      Điều g&igrave;&nbsp;sẽ xảy ra&nbsp;nếu t&ocirc;i quyết
                      định kh&ocirc;ng chờ r&uacute;t thăm v&agrave;&nbsp;trả
                      tiền cho chương tr&igrave;nh nhưng cuối c&ugrave;ng lại
                      gi&agrave;nh được Trợ cấp?
                    </>,
                    <>
                      А&nbsp;как быть, если я&nbsp;решил не&nbsp;дожидаться
                      розыгрыша и&nbsp;оплатил программу, но&nbsp;в&nbsp;итоге
                      выиграл Грант?
                    </>,
                    <>
                      А&nbsp;як&nbsp;бути, якщо я&nbsp;вирішив не&nbsp;чекати
                      на&nbsp;розіграш і&nbsp;оплатив програму, але
                      в&nbsp;результаті виграв Грант?
                    </>
                  ) as string
                }
              </Box>
            ),
            text: (
              <Box letterSpacing={"-0.5px"} fontFamily={montserratFamily}>
                {
                  getTranslatedText(
                    <>
                      All Academy participants who registered, paid for the
                      programme and won the Grant will be&nbsp;refunded the
                      amount of&nbsp;the Grant. Such situations happen often,
                      we&nbsp;recommend not to&nbsp;wait for the results
                      of&nbsp;the Grant Competition and to&nbsp;apply for the
                      programme in&nbsp;advance (in&nbsp;order to&nbsp;have time
                      to&nbsp;collect all documents, apply for a&nbsp;visa,
                      etc.).
                    </>,
                    <>
                      Tất cả những người tham gia Học viện
                      đ&atilde;&nbsp;đăng&nbsp;k&yacute;, thanh to&aacute;n cho
                      chương tr&igrave;nh v&agrave;&nbsp;gi&agrave;nh được
                      T&agrave;i trợ sẽ được ho&agrave;n lại số tiền T&agrave;i
                      trợ. Những t&igrave;nh huống như vậy xảy ra&nbsp;thường
                      xuy&ecirc;n, ch&uacute;ng t&ocirc;i khuy&ecirc;n bạn
                      kh&ocirc;ng n&ecirc;n chờ đợi kết quả của Cuộc thi
                      t&agrave;i trợ v&agrave;&nbsp;n&ecirc;n đăng
                      k&yacute;&nbsp;trước v&agrave;o chương tr&igrave;nh (để
                      c&oacute;&nbsp;thời gian thu thập tất cả c&aacute;c
                      t&agrave;i liệu, xin thị thực, v.v.).
                    </>,
                    <>
                      Всем участникам Академии, кто зарегистрировался, оплатил
                      программу и&nbsp;выиграл Грант, мы&nbsp;вернем денежные
                      средства на&nbsp;сумму Гранта. Такие ситуации случаются
                      часто, мы&nbsp;сами рекомендуем не&nbsp;ждать результаты
                      Конкурса Грантов и&nbsp;оформляться на&nbsp;программу
                      заранее (чтобы успеть собрать все документы, податься
                      на&nbsp;визу и&nbsp;тд.).
                    </>,
                    <>
                      Всім учасникам Академії, хто зареєструвався, сплатив
                      програму та&nbsp;виграв Грант, ми&nbsp;повернемо кошти
                      на&nbsp;суму Гранта. Такі ситуації трапляються часто,
                      ми&nbsp;самі рекомендуємо не&nbsp;чекати
                      на&nbsp;результати Конкурсу Грантів і&nbsp;оформлятися
                      на&nbsp;програму заздалегідь (щоб встигнути зібрати всі
                      документи, податись на&nbsp;візу тощо).
                    </>
                  ) as string
                }
              </Box>
            ),
          },
        ]}
      />
    </>
  );
};
