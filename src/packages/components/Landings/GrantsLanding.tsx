import React, { useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  FormSection,
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
            height: "100%",
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
                        top: { xs: "unset", sm: "-2px" },
                      }}
                    />
                    successful
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "90%",
                      }}
                    />
                  </Box>
                  <br />
                  future in Europe!
                </>,
                <>
                  Tương lai{" "}
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
                    thành công
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "90%",
                      }}
                    />
                  </Box>
                  <br />
                  của bạn tại Châu Âu.
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
                        right: { xs: "-32px", sm: "-34px" },
                        top: { xs: "unset", sm: "-2px" },
                      }}
                    />
                    успешное
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "90%",
                      }}
                    />
                  </Box>
                  <br />
                  будущее в Европе!
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
                        right: { xs: "-32px", sm: "-34px" },
                        top: { xs: "unset", sm: "-2px" },
                      }}
                    />
                    успішне
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "90%",
                      }}
                    />
                  </Box>
                  <br />
                  майбутнє в Європі!
                </>
              )}
            </Typography>
          )}
          renderDescription={() =>
            [
              getTranslatedText(
                <>
                  Enroll in the GoStudy Academy <strong>for free!</strong>
                </>,
                <>
                  Đăng ký Học viện GoStudy <strong>miễn phí</strong>
                </>,
                <>
                  Поступи в Академию GoStudy <strong>бесплатно!</strong>
                </>,
                <>
                  Вступи до Академії GoStudy <strong>безкоштовно!</strong>
                </>
              ),
              <>
                {getTranslatedText(
                  "Discover everything about education and life in Europe",
                  "Khám phá mọi điều về giáo dục và cuộc sống tại Châu Âu",
                  "Узнай всё об образовании и жизни в Европе",
                  "Дізнайся все про освіту та життя в Європі"
                )}
              </>,
              <>
                {getTranslatedText(
                  "Get the chance to win a scholarship for studying in Europe, up to €5700",
                  "Có cơ hội nhận học bổng để học tập tại Châu Âu, lên đến €5700",
                  "Получи возможность выиграть грант на обучение до 5700 €",
                  "Отримай можливість виграти грант на навчання у Європі до 5700 €"
                )}
              </>,
            ].map((item) => (
              <Box
                sx={{
                  "& svg": {
                    marginRight: "10px",
                  },
                  "& path": {
                    fill: "rgba(41, 98, 255, 1)",
                  },
                }}
              >
                <BurstPucker />
                {item}
              </Box>
            ))
          }
          info={[
            {
              text: getTranslatedText(
                "GoStudy Academy",
                "Học viện GoStudy.",
                "Академия GoStudy",
                "Академія GoStudy"
              ) as string,
              bgColor: "rgba(255, 238, 88, 1)",
              color: "#000000",
            },
          ]}
          image={{
            src: `${cdnUrl}/grantsLanding/firstSection.png`,
            width: 520,
            height: 445,
          }}
          mobileImage={{
            src: `${cdnUrl}/grantsLanding/firstSection_mobile.png`,
            width: 335,
            height: 325,
            sx: { maxHeight: "338px", objectFit: "contain" },
          }}
          button={{
            text: getTranslatedText(
              "Get into the Academy",
              "Gia nhập Học viện.",
              "Поступить в Академию",
              "Вступити до Академії"
            ) as string,
            onClick: () => {
              scrollToForm();
            },
            sx: { background: "#131313", "&:hover": { background: "#131313" } },
          }}
          leftSectionContainerSx={{
            "& > *:first-of-type": {
              maxWidth: { xs: "100%", sm: "100%" },
            },
            py: { xs: "3em", sm: "3.5em" },
            gap: { xs: "2.5em", sm: "0" },
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
                  "Miễn phí.",
                  "Бесплатно",
                  "Безкоштовно"
                ) as string,
                text: getTranslatedText(
                  "Becoming a student of the Academy is absolutely free, all you need is to register.",
                  "Việc trở thành sinh viên của Học viện là hoàn toàn miễn phí, bạn chỉ cần đăng ký.",
                  "Стать студентом Академии можно совершенно бесплатно, нужна только регистрация",
                  "Стати студентом Академії можна абсолютно безкоштовно, потрібна лише реєстрація"
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
                  "You can become a student of the Academy at any time, right after registration.",
                  "Bạn có thể trở thành sinh viên của Học viện bất kỳ lúc nào, ngay sau khi đăng ký.",
                  "Стать студентом Академии можно в любое время и сразу после регистрации",
                  "Стати студентом Академії можна у будь-який час і одразу після реєстрації"
                ) as string,
              },
              {
                title: getTranslatedText(
                  "Format.",
                  "Định dạng.",
                  "Формат",
                  "Формат"
                ) as string,
                text: getTranslatedText(
                  "You will receive assignments and materials from the Academy in the Telegram chatbot.",
                  "Bạn sẽ nhận bài tập và tài liệu từ Học viện thông qua chatbot trên Telegram.",
                  "Получать задания и материалы Академии ты будешь в чат-боте в Telegram",
                  "Отримувати завдання та матеріали Академії ти будеш у чат-боті в Telegram"
                ) as string,
              },
              {
                title: getTranslatedText(
                  "Certificate",
                  "Chứng chỉ.",
                  "Сертификат",
                  "Сертифікат"
                ) as string,
                text: getTranslatedText(
                  "A certificate will be issued to all GoStudy Academy students upon completion of the course.",
                  "Một chứng chỉ sẽ được cấp cho tất cả sinh viên Học viện GoStudy sau khi hoàn thành khóa học.",
                  "Будет выдан всем студентам Академии GoStudy о прохождении курса",
                  "Буде виданий усім студентам Академії GoStudy про проходження курсу"
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
                    fontWeight={600}
                  >
                    {item.title}
                  </Typography>
                </Stack>
                <Typography
                  component={"p"}
                  fontFamily={montserratFamily}
                  fontSize={{ xs: "14px", sm: "16px" }}
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

      {/* //! WHERE ARE THE TRANSLATIONS LEBOWSKI */}
      <SectionContainer
        sectionTitle={{
          renderTitle: () => (
            <Typography
              fontSize={{ xs: "32px", sm: "42px" }}
              fontFamily={montserratFamily}
              fontWeight={600}
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
                Что такое
                <FirstUnderline
                  sx={{
                    position: "absolute",
                    bottom: "-6px",
                    left: "0",
                    width: "100%",
                  }}
                />
              </Box>{" "}
              Академия GoStudy?
            </Typography>
          ),
          description:
            "Это бесплатный курс теории и практики для твоего успешного будущего в Европе",
        }}
      >
        <Stack flexDirection={{ xs: "column", sm: "row" }} gap={"16px"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: { xs: "20px", sm: "22px" },
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
                fontSize={{ xs: "16px", sm: "20px" }}
                fontFamily={montserratFamily}
                fontWeight={500}
                color={"rgba(13, 71, 161, 1)"}
                sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {iconBase["UserHandUpTwoTone"]}
                Твой выбор - наш приоритет
              </Typography>
            </Box>
            <Typography
              component={"p"}
              sx={{
                fontFamily: montserratFamily,
                fontWeight: 500,
                fontSize: { xs: "20px", sm: "24px" },
                lineHeight: { xs: "24px", sm: "28.8px" },
                marginBottom: { xs: "180px" },
                zIndex: "2",
              }}
            >
              В Академии ты сможешь определиться со страной для получения
              высшего образования, выбрать университеты и направления для подачи
              документов,
              <Box
                component={"br"}
                sx={{ display: { xs: "none", sm: "block" } }}
              />{" "}
              построить трек подготовки
              <Box
                component={"br"}
                sx={{ display: { xs: "none", sm: "block" } }}
              />{" "}
              к поступлению и начать{" "}
              <Box
                component={"br"}
                sx={{ display: { xs: "none", sm: "block" } }}
              />
              учить язык.
            </Typography>
            {getPicture(
              `${cdnUrl}/grantsLanding/thirdSection.png`,
              412,
              359,
              {
                position: "absolute",
                bottom: "-4px",
                right: "0",
                display: { xs: "none", sm: "block" },
                zIndex: "2",
              },
              {}
            )}
            {getPicture(
              `${cdnUrl}/grantsLanding/thirdSection.png`,
              412,
              359,
              {
                position: "absolute",
                bottom: "-4px",
                right: "0",
                display: { xs: "block", sm: "none" },
                zIndex: "2",
              },
              { width: "100%", maxWidth: "261px" }
            )}
            <ThirdSectionCardBg
              sx={{
                position: "absolute",
                bottom: "0",
                width: { xs: "82%", sm: "87%" },
                height: { xs: "auto", sm: "41%" },
                right: 0,
                zIndex: 1,
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
                  fontSize={{ xs: "16px", sm: "20px" }}
                  fontFamily={montserratFamily}
                  fontWeight={500}
                  color={"rgba(27, 94, 32, 1)"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "& svg": {
                      width: "15px",
                      height: "15px",
                    },
                  }}
                >
                  {iconBase["FireTwoTone"]}
                  Востребованно
                </Typography>
              </Box>
              <Typography
                component={"p"}
                sx={{
                  fontFamily: montserratFamily,
                  fontWeight: 500,
                  fontSize: { xs: "20px", sm: "24px" },
                  lineHeight: { xs: "24px", sm: "28.8px" },
                }}
              >
                Востребованное образование, карьера в международных компаниях,
                ясные перспективы и достойный уровень жизни — вот что дает
                качественное европейское образование.
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
                  fontSize={{ xs: "16px", sm: "20px" }}
                  fontFamily={montserratFamily}
                  fontWeight={500}
                  color={"rgba(230, 81, 0, 1)"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "& svg": {
                      width: "15px",
                      height: "15px",
                    },
                  }}
                >
                  {iconBase["verifiedCheckTwoTone"]}
                  Бесплатно
                </Typography>
              </Box>
              <Typography
                component={"p"}
                sx={{
                  fontFamily: montserratFamily,
                  fontWeight: 500,
                  fontSize: { xs: "20px", sm: "24px" },
                  lineHeight: { xs: "24px", sm: "28.8px" },
                }}
              >
                В Академии ты сможешь определиться со страной для получения
                высшего образования, выбрать университеты и направления для
                подачи документов, построить трек подготовки к поступлению
                и начать учить язык.
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
            position: "absolute",
            width: "100%",
            height: "unset",
            top: { xs: "34%", sm: "59%" },
            transform: "translateY(-50%)",
          }}
        />
        <FourthSectionBg
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            width: "100%",
            height: "unset",
            top: { xs: "80%", sm: "59%" },
            transform: "translateY(-50%) rotate(173deg)",
          }}
        />
        <SectionContainer
          accentColor="error"
          sectionTitle={{
            renderTitle: () => (
              <Typography
                fontSize={{ xs: "32px", sm: "42px" }}
                fontFamily={montserratFamily}
                fontWeight={600}
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
              top: { xs: "14%", sm: "27%" },
              left: { xs: "84%", sm: "10%" },
              zIndex: "0",
            }}
          />
          <Star
            sx={{
              position: "absolute",
              width: "39px",
              height: "39px",
              left: { xs: "0", sm: "42%" },
              bottom: { xs: "30%", sm: "12%" },
              zIndex: "0",
            }}
          />
          <Star
            sx={{
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
                  "Học sinh.",
                  "Школьникам",
                  "Школярам"
                ) as string,
                renderTitle: (text) => (
                  <Box
                    component={"span"}
                    sx={{ fontSize: { xs: "22px", sm: "24px" } }}
                  >
                    {text}
                  </Box>
                ),
                text: getTranslatedText(
                  "For middle and high school students considering studying abroad.",
                  "Dành cho học sinh trung học và phổ thông có ý định học tập ở nước ngoài.",
                  "Для ребят средней и старшей школы, кто рассматривает вариант учебы за границей",
                  "Для учнів середньої та старшої школи, хто розглядає варіант навчання за кордоном"
                ) as string,
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
                  "Sinh viên.",
                  "Студентам",
                  "Студентам"
                ) as string,
                renderTitle: (text) => (
                  <Box
                    component={"span"}
                    sx={{ fontSize: { xs: "22px", sm: "24px" } }}
                  >
                    {text}
                  </Box>
                ),
                text: getTranslatedText(
                  "For bachelor's degree graduates planning to continue their education and enroll in a master's program.",
                  "Dành cho những người tốt nghiệp cấp bằng cử nhân có kế hoạch tiếp tục học tập và nhập học vào chương trình thạc sĩ.",
                  "Выпускникам бакалавриата, кто собирается продолжить обучение и поступить в магистратуру",
                  "Випускникам бакалаврату, хто збирається продовжити навчання та вступити до магістратури"
                ) as string,
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
                  <>
                    Young <br />
                    professionals
                  </>,
                  <>
                    Người chuyên
                    <br />
                    nghiệp trẻ.
                  </>,
                  <>
                    Молодым <br />
                    специалистам
                  </>,
                  <>
                    Молодим <br />
                    фахівцям
                  </>
                ),
                renderTitle: (text) => (
                  <Box
                    component={"span"}
                    sx={{ fontSize: { xs: "22px", sm: "24px" } }}
                  >
                    {text}
                  </Box>
                ),
                text: getTranslatedText(
                  "For those planning to build a successful career not only in Europe but also worldwide.",
                  "Dành cho những người có kế hoạch xây dựng sự nghiệp thành công không chỉ tại Châu Âu mà còn trên toàn thế giới.",
                  "Для тех, кто планирует построить успешную карьеру не только в Европе, но и в мире",
                  "Для тих, хто планує побудувати успішну кар'єру не лише у Європі, а й у світі"
                ) as string,
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
            "Gia nhập Học viện.",
            "Поступить в Академию",
            "Вступити до Академії"
          ) as string,
        }}
        sectionTitle={{
          renderTitle: () => (
            <Typography
              fontSize={{ xs: "40px", sm: "60px" }}
              fontFamily={montserratFamily}
              fontWeight={600}
              marginBottom={{ xs: "0", sm: "-25px" }}
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
                        bottom: "-6px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </>,
                <>
                  Chương trình của{" "}
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
                    Học viện.
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "100%",
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
                        right: { xs: "-32px", sm: "-34px" },
                        top: { xs: "unset", sm: "-2px" },
                      }}
                    />
                    Академии
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "100%",
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
                        right: { xs: "-32px", sm: "-34px" },
                        top: { xs: "unset", sm: "-2px" },
                      }}
                    />
                    Академії
                    <FirstUnderline
                      sx={{
                        position: "absolute",
                        right: 0,
                        bottom: "-6px",
                        width: "100%",
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
            fontSize: { xs: "20px", sm: "22px" },
            lineHeight: { xs: "26px", sm: "28.6px" },
          },
        }}
        imageSx={{ border: "none", padding: "0" }}
        data={[
          {
            title: getTranslatedText(
              "Introduction",
              "Giới thiệu.",
              "Знакомство",
              "Знайомство"
            ) as string,
            description: getTranslatedText(
              "Introductory lectures and materials from the Academy, information about classes, schedule, bonuses, gifts, and the Grant Competition.",
              "Bài giảng và tài liệu giới thiệu từ Học viện, thông tin về các lớp học, lịch trình, phần thưởng, quà tặng, và Cuộc thi Học bổng.",
              "Вводные лекции и материалы Академии, информация про занятия, расписание, бонусы, подарки и Конкурс Грантов.",
              "Вступні лекції та матеріали Академії, інформація про заняття, розклад, бонуси, подарунки та Конкурс Грантів."
            ) as string,
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_1.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: getTranslatedText(
              "Accessible Education in Europe",
              "Giáo dục tiếp cận được tại Châu Âu.",
              "Доступное образование в Европе",
              "Доступна освіта в Європі"
            ) as string,
            description: getTranslatedText(
              <>
                - Discover how education in Europe can be free.
                <br />- Obtain information about countries, universities,
                majors, and admission conditions for tuition-free education in
                Europe. <br />- Familiarize yourself with real success stories
                from individuals, GoStudy graduates who have already walked this
                path and achieved success!
              </>,
              <>
                - Khám phá cách giáo dục tại Châu Âu có thể miễn phí.
                <br />
                - Thu thập thông tin về các quốc gia, trường đại học, ngành học
                và điều kiện nhập học để học tập miễn phí tại Châu Âu.
                <br />- Hiểu rõ với những câu chuyện thành công thực tế từ những
                người đã điều này, những cựu sinh viên của GoStudy đã bước trên
                con đường này và đạt được thành công!
              </>,
              <>
                - Узнай, как образование в Европе может быть бесплатным. <br />
                - Получи информацию про страны, университеты, направления,
                условия поступления на бюджет в Европе. <br />- Познакомься с
                реальными историями успеха ребят, выпускников GoStudy, с теми,
                кто уже прошел этот путь и добился успеха!
              </>,
              <>
                - Дізнайся, як освіта в Європі може бути безкоштовною.
                <br />
                - Отримай інформацію про країни, університети, напрями, умови
                вступу на бюджет у Європі.
                <br />- Познайомся з реальними історіями успіху хлопців та
                дівчат, випускників GoStudy, з тими, хто вже пройшов цей шлях і
                досяг успіху!
              </>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_2.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: getTranslatedText(
              "Education in Austria",
              "Giáo dục tại Áo.",
              "Образование в Австрии",
              "Освіта в Австрії"
            ) as string,
            description: getTranslatedText(
              <>
                - Discover a promising country for higher education.
                <br />
                - Learn how to master the language in 3 months, get admitted on
                a budget, and explore the brightest career prospects.
                <br />
                - Receive colorful guides, compilations, guides, and more.
                <br />- Join free German lessons with a native speaker!
              </>,
              <>
                - Khám phá một quốc gia hứa hẹn cho giáo dục cao học. <br />
                - Tìm hiểu cách làm chủ ngôn ngữ trong vòng 3 tháng, đỗ vào ngân
                sách, và khám phá những triển vọng sự nghiệp sáng sủa nhất.
                <br />
                - Nhận các hướng dẫn, tuyển tập, hướng dẫn màu sắc, và nhiều hơn
                nữa.
                <br />- Tham gia các buổi học tiếng Đức miễn phí với một người
                bản xứ!
              </>,
              <>
                - Открой для себя перспективную страну для получения высшего
                образования. <br />
                - Узнай как выучить язык за 3 месяца, поступить на бюджет и
                открыть для себя самые яркие карьерные перспективы. <br />
                - Получи красочные гайды, подборки, путеводители и мн.др.
                <br />- Присоединяйся к бесплатным урокам немецкого с
                преподавателем-носителем!
              </>,
              <>
                - Відкрий для себе перспективну країну для здобуття вищої
                освіти.
                <br />
                - Дізнайся як вивчити мову за 3 місяці, вступити на бюджет і
                відкрити для себе найяскравіші кар'єрні перспективи.
                <br />
                - Отримай барвисті гайди, добірки, путівники та ін.
                <br />- Приєднуйся до безкоштовних уроків німецької з
                викладачем-носієм!
              </>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_3.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: getTranslatedText(
              "Education in the Czech Republic",
              "Giáo dục tại Cộng hòa Séc.",
              "Образование в Чехии",
              "Освіта у Чехії"
            ) as string,
            description: getTranslatedText(
              <>
                - Learn how to prepare and master the language to guarantee
                admission in the Czech Republic, where education for foreign
                students in Czech is completely free!
                <br />
                - Receive helpful materials and guides.
                <br />- Join free Czech language lessons with a native speaker!
              </>,
              <>
                - Học cách chuẩn bị và làm chủ ngôn ngữ để đảm bảo nhập học tại
                Cộng hòa Séc, nơi giáo dục cho sinh viên nước ngoài bằng tiếng
                Séc là hoàn toàn miễn phí!
                <br />
                - Nhận các tài liệu và hướng dẫn hữu ích.
                <br />- Tham gia các buổi học tiếng Séc miễn phí với một người
                bản xứ!
              </>,
              <>
                - Узнай, как подготовиться и выучить язык, чтобы гарантировано
                поступить в Чехии, где образование для иностранных студентов на
                чешском языке полностью бесплатное! <br />
                - Получи полезные материалы и гайды.
                <br />- Присоединяйся к бесплатным урокам чешского языка с
                преподавателем-носителем!
              </>,
              <>
                - Дізнайся, як підготуватися та вивчити мову, щоб гарантовано
                вступити до Чехії, де освіта для іноземних студентів чеською
                мовою повністю безкоштовна!
                <br />
                - Отримай корисні матеріали та гайди.
                <br />- Приєднуйся до безкоштовних уроків чеської мови з
                викладачем-носієм!
              </>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_4.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: getTranslatedText(
              "Education in Slovakia",
              "Giáo dục tại Slovakia.",
              "Образование в Словакии",
              "Освіта у Словаччині"
            ) as string,
            description: getTranslatedText(
              <>
                - Discover how to obtain a student residence permit and settle
                in the country with the most comfortable cost of living in
                Europe. <br />
                - Ensure that applying, studying, and living in Slovakia is
                easy!
                <br />- Obtain unique information about Slovak universities and
                majors.
              </>,
              <>
                - Khám phá cách làm thế nào để có được giấy phép cư trú sinh
                viên và định cư trong quốc gia có chi phí sinh sống thoải mái
                nhất ở Châu Âu. <br />
                - Đảm bảo rằng việc nộp đơn, học tập và sống ở Slovakia là dễ
                dàng!
                <br />- Nhận thông tin độc đáo về các trường đại học và ngành
                học tại Slovakia.
              </>,
              <>
                - Узнай, как получить студенческий ВНЖ и обосноваться в стране с
                самой комфортной стоимостью жизни в Европе. <br />
                - Убедись, что поступить, учиться и жить в Словакии легко!
                <br />- Получи уникальную информацию по словацким вузам и
                направлениям.
              </>,
              <>
                - Дізнайся, як отримати студентську ППП та влаштуватися в країні
                з найкомфортнішою вартістю життя в Європі.
                <br />
                - Переконайся, що вступити, вчитися та жити у Словаччині легко!
                <br />- Отримай унікальну інформацію щодо словацьких вишів та
                напрямків.
              </>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_5.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: getTranslatedText(
              "Career and Perspectives",
              "Sự nghiệp và Triển vọng.",
              "Карьера и перспективы",
              "Кар'єра та перспективи"
            ) as string,
            description: getTranslatedText(
              <>
                - Build a step-by-step educational and career strategy with
                GoStudy experts.
                <br />
                - Choose a path to achieve your goal — a successful future in
                Europe!
                <br />- Learn about studying and working in Europe from
                firsthand experiences. Gain access to the stories of graduates
                from European universities.
              </>,
              <>
                - Xây dựng chiến lược giáo dục và sự nghiệp từng bước với các
                chuyên gia của GoStudy.
                <br />
                - Chọn một con đường để đạt được mục tiêu của bạn — một tương
                lai thành công tại Châu Âu!
                <br />- Tìm hiểu về việc học tập và làm việc tại Châu Âu thông
                qua những trải nghiệm trực tiếp. Tiếp cận các câu chuyện của cựu
                sinh viên từ các trường đại học Châu Âu.
              </>,
              <>
                - Построй пошаговую образовательную и карьерную стратегию вместе
                с экспертами GoStudy.
                <br />
                - Выбери направление для достижения поставленной цели — успешное
                будущее в Европе!
                <br />- Узнай об учёбе и работе в Европе из первых уст. Получи
                доступ к историям выпускников европейских вузов.
              </>,
              <>
                - Побудуй покрокову освітню та кар'єрну стратегію разом з
                експертами GoStudy.
                <br />
                - Вибери напрямок для досягнення поставленої мети – успішне
                майбутнє в Європі!
                <br />- Дізнайся про навчання та роботу в Європі з перших вуст.
                Отримай доступ до історій випускників європейських вишів.
              </>
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_6.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: getTranslatedText(
              "Grant Competition 🏆",
              "Cuộc thi Học bổng 🏆",
              "Конкурс Грантов 🏆",
              "Конкурс Грантів 🏆"
            ) as string,
            description: getTranslatedText(
              "Every participant in the Academy will have the chance to win up to 5700 euros for preparation for admission in their chosen country. Study in Europe for FREE!",
              "Mọi người tham gia Học viện đều có cơ hội nhận đến 5700 euro để chuẩn bị cho việc nhập học ở quốc gia mà họ đã chọn. Học tập tại Châu Âu MIỄN PHÍ! ",
              "Каждый участник Академии получит шанс выиграть до 5700 евро на подготовку к поступлению в выбранной стране. Учись в Европе БЕСПЛАТНО!",
              "Кожен учасник Академії отримає шанс виграти до 5700 євро на підготовку до вступу до обраної країни. Навчайся у Європі БЕЗКОШТОВНО!"
            ),
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_7.png`,
              width: 514,
              height: 696,
            },
          },
        ]}
      />

      <SectionContainer>
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
            sx={{ position: "absolute", top: "-12px", right: "-18px" }}
          />
          <SixthSectionDecoration2
            sx={{
              position: "absolute",
              bottom: { xs: "-12px", sm: "15%" },
              left: { xs: "-15px", sm: "-24px" },
            }}
          />
          {getPicture(
            `${cdnUrl}/grantsLanding/sixthSection.png`,
            375,
            474,
            {
              width: { xs: "295px", sm: "100%" },
              mx: { xs: "auto", sm: 0 },
            },
            {
              width: { xs: "295px", sm: "100%" },
              height: { xs: "224px", sm: "unset" },
              objectFit: "cover",
              borderRadius: { xs: "20px", sm: "22px" },
              mx: { xs: "auto", sm: 0 },
            }
          )}
          <Stack gap={"32px"}>
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: montserratFamily,
                fontSize: { xs: "28px", sm: "36px" },
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              {getTranslatedText(
                <>Regular grant giveaways among Academy students 🏆</>,
                <>Phát quà định kỳ giữa sinh viên Học viện 🏆</>,
                <>Регулярные розыгрыши грантов среди студентов Академии 🏆</>,
                <>Регулярні розіграші грантів серед студентів Академії 🏆</>
              )}
            </Typography>
            <Stack gap={{ xs: "12px", sm: "16px" }}>
              {[
                {
                  title: getTranslatedText(
                    "The GoStudy Grant is your chance to fulfill the dream of studying and living abroad!",
                    "Học bổng GoStudy là cơ hội của bạn để thực hiện ước mơ học tập và sống ở nước ngoài!",
                    "Грант GoStudy — это ваша возможность исполнить мечту учиться и жить за границей!",
                    "Грант GoStudy - це ваша можливість здійснити мрію вчитися і жити за кордоном!"
                  ),
                },
                {
                  title: getTranslatedText(
                    "Every Academy participant has a unique opportunity to receive a grant ranging from €1400 to €5725!",
                    "Mỗi người tham gia Học viện đều có cơ hội đặc biệt nhận được học bổng từ 1400 đến 5725 euro!",
                    "Каждый участник Академии — обладатель уникальной возможности получить грант на сумму от 1400€ до 5725€! ",
                    "Кожен учасник Академії — володар унікальної можливості отримати грант на суму від 1400€ до 5725€!"
                  ),
                },
                {
                  title: getTranslatedText(
                    "The grant provides the opportunity to study and prepare for admission to a European university absolutely free of charge.",
                    "Học bổng cung cấp cơ hội học tập và chuẩn bị cho việc nhập học vào một trường đại học Châu Âu mà hoàn toàn miễn phí.",
                    "Грант дает возможность учиться и готовиться к поступлению в европейский вуз абсолютно бесплатно.",
                    "Грант дає можливість вчитися і готуватися до вступу до європейського вишу абсолютно безкоштовно."
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
                      fontSize={"20px"}
                      fontWeight={600}
                      color={"rgba(255, 224, 178, 1)"}
                      width={"100%"}
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
        <SectionContainer
          accentColor="error"
          sectionTitle={{
            descriptionSx: {
              fontSize: { xs: "20px", sm: "22px" },
              lineHeight: { xs: "26px", sm: "28.6px" },
            },
            description: getTranslatedText(
              "Winners of previous Grant Competitions by GoStudy.",
              "Những người chiến thắng của Cuộc thi Học bổng trước đây do GoStudy tổ chức.",
              "Победители предыдущих Конкурсов Грантов от GoStudy",
              "Переможці попередніх Конкурсів Грантів від GoStudy"
            ) as string,
            renderTitle: () => (
              <Typography
                fontSize={{ xs: "32px", sm: "42px" }}
                fontFamily={montserratFamily}
                fontWeight={600}
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
                          bottom: "-6px",
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
                          bottom: "-6px",
                          left: "0",
                          width: "100%",
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
              top: { xs: "14%", sm: "24%" },
              left: { xs: "10%", sm: "3%" },
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
                img: "seventhSection_1.png",
              },
              {
                name: getTranslatedText(
                  "Alexei B.",
                  "Alexei B.",
                  "Алексей Б.",
                  "Олексій Б."
                ),
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
                  164,
                  200,
                  {},
                  {
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
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontFamily: montserratFamily,
                      lineHeight: { xs: "20px", sm: "22.72px" },
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
        renderTitle={() =>
          getTranslatedText(
            <>
              Take a{" "}
              <span style={{ color: "rgba(213, 0, 0, 1)" }}>step towards</span>{" "}
              your dream — living and studying in Europe.
            </>,
            <>
              Tiến một{" "}
              <span style={{ color: "rgba(213, 0, 0, 1)" }}>bước đến giấc</span>{" "}
              mơ của bạn — sống và học tập tại Châu Âu.
            </>,
            <>
              Сделай{" "}
              <span style={{ color: "rgba(213, 0, 0, 1)" }}>
                один шаг навстречу
              </span>{" "}
              мечте — жить и учиться в Европе
            </>,
            <>
              Зроби{" "}
              <span style={{ color: "rgba(213, 0, 0, 1)" }}>
                один крок назустріч
              </span>{" "}
              мрії — жити та навчатися в Європі
            </>
          )
        }
        description={
          getTranslatedText(
            "Fill out the form and become a student of the GoStudy Academy.",
            "Điền vào biểu mẫu và trở thành sinh viên của Học viện GoStudy.",
            "Заполни форму и стань студентом Академии GoStudy",
            "Заповни форму та стань студентом Академії GoStudy"
          ) as string
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
                  acceptTerms:
                    "* Нажимая кнопку, вы принимаете условия политики и пользовательского соглашения",
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
                  acceptTerms:
                    "* Натискаючи кнопку, ви приймаєте умови політики та угоди користувача",
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
                  acceptTerms:
                    "* Bằng cách nhấn nút, bạn chấp nhận chính sách của tâm trí và làm hài lòng kristuvach",
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
                  acceptTerms:
                    "* By clicking the button, you accept the terms of the policy and user agreement",
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
            fontSize={{ xs: "40px", sm: "60px" }}
            fontFamily={montserratFamily}
            fontWeight={600}
          >
            <Box component={"span"} sx={{ position: "relative" }}>
              FAQ
              <FirstUnderline
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: "-6px",
                  width: "100%",
                  "& path": { strokeWidth: "11px" },
                }}
              />
            </Box>
          </Typography>
        )}
        description={
          "Мы отвечаем на часто задаваемые вопросы о нашей академии, процессе поступления и обучения в ней."
        }
        descriptionSx={{
          fontSize: { xs: "20px", sm: "22px" },
          lineHeight: { xs: "26px", sm: "28.6px" },
        }}
        firstColumnData={[
          {
            title: getTranslatedText(
              "How do I apply?",
              "Làm thế nào để đăng ký?",
              "Как подать заявку?",
              "Як подати заявку?"
            ) as string,
            text: getTranslatedText(
              "Submit the application through the form above and instantly gain access to the Academy bot.",
              "Đệ trình đơn đăng ký qua biểu mẫu ở trên và ngay lập tức có quyền truy cập vào bot của Học viện.",
              "Отправь заявку через форму выше и сразу получи доступ в бот Академии.",
              "Надішли заявку через форму вище і відразу отримай доступ до боту Академії."
            ) as string,
          },
          {
            title: getTranslatedText(
              "Is there no charge to participate in the Academy?",
              "Bài tập được làm khi nào và như thế nào?",
              "Участие в Академии бесплатное?",
              "Участь в Академії безкоштовна?"
            ) as string,
            text: getTranslatedText(
              "Yes, the Academy is completely free and you only need to register to attend. We look forward to seeing everyone!",
              "Vâng, Học viện là hoàn toàn miễn phí và bạn chỉ cần đăng ký để tham gia. Chúng tôi mong đợi được gặp mọi người!",
              "Да, Академия полностью бесплатная и для участия в ней нужно всего лишь регистрация. Ждем всех!",
              "Так, Академія повністю безкоштовна і для участі в ній потрібна лише реєстрація. Чекаємо на всіх!"
            ) as string,
          },
          {
            title: getTranslatedText(
              "When and how are assignments made?",
              "Bài tập được làm khi nào và như thế nào?",
              "Когда и как выполняются задания?",
              "Коли та як виконуються завдання?"
            ) as string,
            text: getTranslatedText(
              "You can complete assignments at your own pace and schedule. We have no strict deadlines or requirements.",
              "Bạn có thể hoàn thành bài tập theo tốc độ và lịch trình của bạn. Chúng tôi không có thời hạn cứng nhắc hoặc yêu cầu nghiêm ngặt.",
              "Задания ты можешь выполнять в удобном для тебя темпе и расписании. У нас нет строгих дедлайнов и требований.",
              "Завдання ти можеш виконувати в зручному для тебе темпі та розкладі. У нас немає суворих дедлайнів та вимог."
            ) as string,
          },
          {
            title: getTranslatedText(
              "What are the conditions for completing the training?",
              "Điều kiện để hoàn thành khóa đào tạo là gì?",
              "Какие условия прохождения обучения?",
              "Які умови проходження навчання?"
            ) as string,
            renderText: () =>
              getTranslatedText(
                <>
                  The conditions are simple: you need to register as a student
                  of the Academy, receive study materials and assignments,
                  participate in webinars as an audience, and keep track of the
                  results of the Grant Competition draw (who knows, you might be
                  the winner).
                  <br />
                  <br />
                  Completing assignments or participating in webinars is not
                  mandatory!
                </>,
                <>
                  Các điều kiện rất đơn giản: bạn cần đăng ký làm sinh viên của
                  Học viện, nhận tài liệu học và bài tập, tham gia các buổi hội
                  thảo trực tuyến như là một người xem, và theo dõi kết quả rút
                  thăm Cuộc thi Học bổng (ai biết được, bạn có thể là người
                  chiến thắng).
                  <br />
                  <br />
                  Việc hoàn thành bài tập hoặc tham gia vào các buổi hội thảo
                  trực tuyến không bắt buộc!
                </>,
                <>
                  Условия простые: нужно зарегистрироваться как студент
                  Академии, получать учебный материал и задания, принимать
                  участия в вебинарах как зритель, следить за результатами
                  розыгрыша Конкурса Грантов (вдруг, победителем окажишься
                  именно ты).
                  <br />
                  <br />
                  Выполнение заданий или участие на вебинарах не является
                  обязательным!
                </>,
                <>
                  Умови прості: потрібно зареєструватися як студент Академії,
                  отримувати навчальний матеріал та завдання, брати участь у
                  вебінарах як глядач, стежити за результатами розіграшу
                  Конкурсу Грантів (раптом, переможцем опинишся саме ти).
                  <br />
                  <br />
                  Виконання завдань чи участь на вебінарах не є обов'язковим!
                </>
              ),
          },
          {
            title: getTranslatedText(
              "When will the classes at the Academy begin, and how long will they last?",
              "Lớp học tại Học viện sẽ bắt đầu khi nào và kéo dài bao lâu?",
              "Когда начнутся занятия в Академии и как долго они продлятся?",
              "Коли розпочнуться заняття в Академії і як довго вони триватимуть?"
            ) as string,
            text: getTranslatedText(
              "You will gain access to the Academy materials immediately after registration. Don't worry, it won't be boring – the GoStudy team has carefully designed the Academy curriculum to make it easy and interesting for all participants.",
              "Bạn sẽ có quyền truy cập vào tài liệu của Học viện ngay sau khi đăng ký. Đừng lo lắng, nó sẽ không nhàm chán – đội ngũ GoStudy đã thiết kế chương trình học của Học viện một cách cẩn thận để làm cho nó dễ dàng và thú vị cho tất cả các người tham gia.",
              "Доступ к материалам Академии ты получишь сразу после регистрации.  Не переживай, скучно не будет, команда GoStudy специально составила учебную программу Академии так, чтобы всем участникам было легко и интересно.",
              "Доступ до матеріалів Академії ти отримаєш одразу після реєстрації. Не хвилюйся, нудно не буде, команда GoStudy спеціально склала навчальну програму Академії так, щоб усім учасникам було легко та цікаво."
            ) as string,
          },
        ]}
        secondColumnData={[
          {
            title: getTranslatedText(
              "What will I get as a result of the training?",
              "Bạn sẽ nhận được gì sau khi hoàn thành khóa đào tạo?",
              "Что я получу по итогам обучения?",
              "Що я отримаю за підсумками навчання?"
            ) as string,
            text: getTranslatedText(
              "Every student will receive a certificate of completion from GoStudy Academy, along with special bonuses for our educational programs. ",
              "Mỗi sinh viên sẽ nhận được chứng chỉ hoàn thành từ Học viện GoStudy, cùng với các phần thưởng đặc biệt cho các chương trình giáo dục của chúng tôi.",
              "Каждый студент получит сертификат о прохождении Академии GoStudy, а также специальные бонусы на наши учебные программы.",
              "Кожен студент отримає сертифікат про проходження Академії GoStudy, а також спеціальні бонуси на наші навчальні програми."
            ) as string,
          },
          {
            title: getTranslatedText(
              "What is a grant and what does it provide?",
              "Học bổng là gì và nó cung cấp những gì?",
              "Что такое грант и что он дает?",
              "Що таке грант та що він дає?"
            ) as string,
            renderText: () =>
              getTranslatedText(
                <>
                  The GoStudy grant is a certificate ranging from €1400 to
                  €5725, which the winner can use to fully or partially cover
                  the preparation program for universities in Austria, the Czech
                  Republic, or Slovakia offered by GoStudy. This grant allows
                  the recipient to enroll in a budgetary education program in
                  Europe.
                  <br />
                  <br />
                  It's important to note that the GoStudy grant cannot be
                  redeemed for cash or received as a monetary equivalent.
                </>,
                <>
                  Học bổng GoStudy là một chứng chỉ có giá từ 1400 đến 5725
                  euro, mà người chiến thắng có thể sử dụng để thanh toán đầy đủ
                  hoặc một phần chương trình chuẩn bị cho các trường đại học tại
                  Áo, Cộng hòa Séc hoặc Slovakia do GoStudy cung cấp. Học bổng
                  này cho phép người nhận đăng ký vào một chương trình giáo dục
                  có ngân sách tại Châu Âu.
                  <br />
                  <br />
                  Quan trọng lưu ý rằng Học bổng GoStudy không thể đổi thành
                  tiền mặt hoặc nhận được dưới dạng tương đương tiền mặt.
                </>,
                <>
                  Грант GoStudy — это сертификат на сумму выигрыша от 1400€ до
                  5725€, которым победитель сможет «оплатить» полностью или
                  частично программу подготовки в вузы Австрии, Чехии или
                  Словакии от GoStudy и поступить в Европе на бюджетную форму
                  обучения!
                  <br />
                  <br />
                  Грант GoStudy нельзя обналичить или получить в денежном
                  эквиваленте.
                </>,
                <>
                  Грант GoStudy — це сертифікат на суму виграшу від 1400€ до
                  5725€, яким переможець зможе «сплатити» повністю або частково
                  програму підготовки до вишів Австрії, Чехії чи Словаччини від
                  GoStudy та вступити до Європи на бюджетну форму навчання!
                  <br />
                  <br />
                  Грант GoStudy не можна перевести в готівку або отримати в
                  грошовому еквіваленті.
                </>
              ),
          },
          {
            title: getTranslatedText(
              "Can I be expelled?",
              "Liệu tôi có thể bị đuổi học không?",
              "Могут ли меня отчислить?",
              "Чи можуть мене відрахувати?"
            ) as string,
            text: getTranslatedText(
              "No, we do not have a system of punishment or expulsion from the Academy. If for some reason you don't want to participate in the Academy anymore, you can simply unsubscribe from the bot.",
              "Không, chúng tôi không có hệ thống trừng phạt hoặc đuổi học khỏi Học viện. Nếu vì lý do nào đó bạn không muốn tham gia Học viện nữa, bạn có thể dễ dàng hủy đăng ký từ bot.",
              "Нет, у нас нет системы наказания или отчисления из Академии. Если по какой-то причине тебе не захочется больше участвовать в Академии, ты сможешь просто отписаться от бота.",
              "Ні, ми не маємо системи покарання чи відрахування з Академії. Якщо з якоїсь причини тобі більше не захочеться брати участь в Академії, ти зможеш просто відписатися від бота."
            ) as string,
          },
          {
            title: getTranslatedText(
              "When will the results of the Grants Competition be available?",
              "Kết quả của Cuộc thi Học bổng sẽ được công bố khi nào?",
              "Когда будут результаты Конкурса Грантов?",
              "Коли будуть результати конкурсу грантів?"
            ) as string,
            text: getTranslatedText(
              "The Grant Drawing among participants will take place every 2 months, and the results will be announced on the day of the drawing.",
              "Việc Rút thăm Học bổng giữa các người tham gia sẽ diễn ra mỗi 2 tháng, và kết quả sẽ được công bố vào ngày diễn ra rút thăm.",
              "Розыгрыш Грантов среди участников будут проходить каждые 2 месяца, результаты будут объявлены в день розыгрыша.",
              "Розіграш грантів серед учасників відбуватимуться кожні 2 місяці, результати будуть оголошені в день розіграшу."
            ) as string,
          },
          {
            title: getTranslatedText(
              "What if I decided not to wait for the draw and paid for the programme but ended up winning the Grant?",
              "Điều gì sẽ xảy ra nếu tôi quyết định không chờ rút thăm và trả tiền cho chương trình nhưng cuối cùng lại giành được Trợ cấp?",
              "А как быть, если я решил не дожидаться розыгрыша и оплатил программу, но в итоге выиграл Грант?",
              "А як бути, якщо я вирішив не чекати на розіграш і оплатив програму, але в результаті виграв Грант?"
            ) as string,
            text: getTranslatedText(
              "All Academy participants who registered, paid for the programme and won the Grant will be refunded the amount of the Grant. Such situations happen often, we recommend not to wait for the results of the Grant Competition and to apply for the programme in advance (in order to have time to collect all documents, apply for a visa, etc.).",
              "Tất cả những người tham gia Học viện đã đăng ký, thanh toán cho chương trình và giành được Tài trợ sẽ được hoàn lại số tiền Tài trợ. Những tình huống như vậy xảy ra thường xuyên, chúng tôi khuyên bạn không nên chờ đợi kết quả của Cuộc thi tài trợ và nên đăng ký trước vào chương trình (để có thời gian thu thập tất cả các tài liệu, xin thị thực, v.v.).",
              "Всем участникам Академии, кто зарегистрировался, оплатил программу и выиграл Грант, мы вернем денежные средства на сумму Гранта. Такие ситуации случаются часто, мы сами рекомендуем не ждать результаты Конкурса Грантов и оформляться на программу заранее (чтобы успеть собрать все документы, податься на визу и тд.).",
              "Всім учасникам Академії, хто зареєструвався, сплатив програму та виграв Грант, ми повернемо кошти на суму Гранта. Такі ситуації трапляються часто, ми самі рекомендуємо не чекати на результати Конкурсу Грантів і оформлятися на програму заздалегідь (щоб встигнути зібрати всі документи, податись на візу тощо)."
            ) as string,
          },
        ]}
      />
    </>
  );
};
