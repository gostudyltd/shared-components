import React, { useRef } from "react";
// import { IntroSection } from "../components/LandingSections/IntroSection";
// import { SectionContainer } from "../components/LandingSections/components/SectionContainer";
// import { SectionTextCardList } from "../components/LandingSections/components/SectionTextCardList";
// import { SectionTwoColumnsContainer } from "../components/LandingSections/components/SectionTwoColumnsContainer";
import { Box, Stack, Typography } from "@mui/material";
// import { getSrc, getSrcSet } from "../helpers/residence";
// import { montserratFamily } from "../constants/themeVars";
// import { RoundedColorizedSection } from "../components/LandingSections/RoundedSection";
// import { SectionContainerWrapperColorized } from "../components/LandingSections/components/SectionContainerWrapperColorized";
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
    formRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
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
            </Typography>
          )}
          renderDescription={
            () =>
              [
                <>
                  Поступи в Академию GoStudy <strong>бесплатно!</strong>
                </>,
                <>Узнай всё об образовании и жизни в Европе</>,
                <>Получи возможность выиграть грант на обучение до 5700 €</>,
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
            // lang === "ru" ? (
            //   <>
            //     Начните учить язык с преподавателем-носителем бесплатно,
            //     эффективно и без скучных заданий, <br /> от которых тянет спать.
            //   </>
            // ) : (
            //   <>
            //     Почніть вивчати мову з викладачем-носієм безкоштовно та без
            //     нудних завдань, від яких тягне спати.
            //   </>
            // )
          }
          // description={
          //   lang === "ru"
          //     ? "Начните учить язык с преподавателем-носителем бесплатно, эффективно и без скучных заданий, от которых тянет спать."
          //     : "Почніть вивчати мову з викладачем-носієм безкоштовно та без нудних завдань, від яких тягне спати."
          // }
          info={[
            {
              text: "Академия GoStudy",
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
            text: lang === "ru" ? "Поступить в Академию" : "Зареєструватися",
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
                title: "Бесплатно",
                text: "Начать обучение можно совершенно бесплатно, нужна только регистрация",
              },
              {
                title: "Когда",
                text: "Стать студентом Академии можно в любое время, сразу после регистрации",
              },
              {
                title: "Формат",
                text: "Получать задания и материалы Академии вы будете через чат-бота в Telegram",
              },
              {
                title: "Сертификат",
                text: "Будет выдан всем студентам Академии GoStudy ",
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
                Академия?
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
                        marginBottom: { xs: "20px", sm: "24px" },
                      },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                iconName: "backpackTwoTone",
                title: "Школьникам",
                renderTitle: (text) => (
                  <Box
                    component={"span"}
                    sx={{ fontSize: { xs: "22px", sm: "24px" } }}
                  >
                    {text}
                  </Box>
                ),
                text: "Для ребят средней и старшей школы, кто рассматривает вариант учебы за границей",
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
                        marginBottom: { xs: "20px", sm: "24px" },
                      },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                iconName: "academicCapTwoTone",
                title: "Студентам",
                renderTitle: (text) => (
                  <Box
                    component={"span"}
                    sx={{ fontSize: { xs: "22px", sm: "24px" } }}
                  >
                    {text}
                  </Box>
                ),
                text: "Для ребят средней и старшей школы, кто рассматривает вариант учебы за границей",
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
                        marginBottom: { xs: "20px", sm: "24px" },
                      },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                iconName: "caseTwoTone",
                iconColor: "rgba(255, 109, 0, 1)",
                title: (
                  <>
                    Молодым <br />
                    специалистам
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
                text: "Для ребят средней и старшей школы, кто рассматривает вариант учебы за границей",
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
        btnAction={scrollToForm}
        sectionTitle={{
          renderTitle: () => (
            <Typography
              fontSize={{ xs: "40px", sm: "60px" }}
              fontFamily={montserratFamily}
              fontWeight={600}
              marginBottom={{ xs: "0", sm: "-25px" }}
            >
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
                обучения
                <FirstUnderline
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: "-6px",
                    width: "100%",
                  }}
                />
              </Box>
            </Typography>
          ),
          description:
            "3 месяца занятий, лекций, полезных видео и Конкурс Грантов среди студентов",
          descriptionSx: {
            fontSize: { xs: "20px", sm: "22px" },
            lineHeight: { xs: "26px", sm: "28.6px" },
          },
        }}
        imageSx={{ border: "none", padding: "0" }}
        data={[
          {
            title: "Знакомство",
            description:
              "Вводные лекции и материалы Академии, информация про занятия, расписание, бонусы, подарки и Конкурс Грантов.",
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_1.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: "Доступное образование в Европе",
            description:
              "Узнай, как образование в Европе может быть бесплатным. Получи информацию про страны, университеты, направления, условия поступления на бюджет в Европе. Познакомься с реальными историями успеха ребят, выпускников GoStudy, с теми, кто уже прошел этот путь и добился успеха!",
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_2.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: "Образование в Австрии",
            description:
              "Открой для себя перспективную страну для получения высшего образования. Узнай как выучить язык за 3 месяца, поступить на бюджет и открыть для себя самые яркие карьерные перспективы. Получи красочные гайды, подборки, путеводители и мн. др. Присоединяйся к бесплатным урокам немецкого с преподавателем-носителем!",
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_3.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: "Образование в Чехии",
            description:
              "Узнай, как подготовиться и выучить язык, чтобы гарантировано поступить в Чехию, где образование для иностранных студентов на чешском языке - полностью бесплатное! Получи полезные материалы и гайды, и присоединяйся к бесплатным урокам чешского языка с преподавателем-носителем!",
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_4.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: "Образование в Словакии",
            description:
              "Узнай, как получить студенческий ВНЖ и обосноваться в стране с самой комфортной стоимостью жизни в Европе. Убедись, что поступить, учиться и жить в Словакии легко! Получи уникальную информацию по словацким вузам и направлениям.",
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_5.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: "Карьера и перспективы",
            description:
              "Построй пошаговую образовательную и карьерную стратегию вместе с экспертами GoStudy. Выбери направление для достижения поставленной цели — успешное будущее в Европе! Узнай об учёбе и работе в Европе из первых уст. Получи доступ к историям выпускников европейских вузов.",
            image: {
              src: `${cdnUrl}/grantsLanding/fifthSection_6.png`,
              width: 514,
              height: 696,
            },
          },
          {
            title: "Конкурс Грантов",
            description:
              "Каждый участник Академии получит шанс выиграть до 5700 евро на подготовку к поступлению в выбранной стране. Учись в Европе БЕСПЛАТНО!",
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
              Мы проводим регулярные розыгрыши грантов среди студентов Академии!
            </Typography>
            <Stack gap={{ xs: "12px", sm: "16px" }}>
              {[
                {
                  title:
                    "Грант GoStudy — это ваша возможность исполнить мечту учиться и жить за границей!",
                },
                {
                  title:
                    "Каждый участник Академии — обладатель уникальной возможности получить грант на сумму от 1400€ до 5725€! ",
                },
                {
                  title:
                    "Грант дает возможность учиться и готовиться к поступлению в европейский вуз абсолютно бесплатно.",
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
            description: "Победители предыдущих Конкурсов Грантов от GoStudy",
            renderTitle: () => (
              <Typography
                fontSize={{ xs: "32px", sm: "42px" }}
                fontFamily={montserratFamily}
                fontWeight={600}
              >
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
                  свою мечту!
                  <FirstUnderline
                    sx={{
                      position: "absolute",
                      bottom: "-6px",
                      left: "0",
                      width: "100%",
                    }}
                  />
                </Box>
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
                name: "Александра З.",
                social: "788sashaz",
                img: "seventhSection_1.png",
              },
              {
                name: "Алексей Б.",
                social: "bezglasnyyalexey",
                img: "seventhSection_2.png",
              },
              {
                name: "Александра З.",
                social: "788sashaz",
                img: "seventhSection_3.png",
              },
              {
                name: "Дарина З.",
                social: "daryna.zuieva",
                socialName: "facebook",
                img: "seventhSection_4.png",
              },
              {
                name: "Андрей К.",
                social: "ai_kovalov",
                img: "seventhSection_5.png",
              },
              {
                name: "Манзура М.",
                social: "manzuritta",
                img: "seventhSection_6.png",
              },
              {
                name: "Денис П.",
                social: "denyspimenov",
                img: "seventhSection_7.png",
              },
              {
                name: "Алина Л.",
                social: "wlitvinova",
                img: "seventhSection_8.png",
              },
              {
                name: "Мария Б.",
                social: "mary_boichenk",
                img: "seventhSection_9.png",
              },
              {
                name: "Василь М.",
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
        renderTitle={() => (
          <>
            Сделай{" "}
            <span style={{ color: "rgba(213, 0, 0, 1)" }}>
              один шаг навстречу
            </span>{" "}
            мечте — жить и учиться в Европе
          </>
        )}
        description="Заполни форму и стань студентом Академии GoStudy"
        hubspotConfig={{
          portalId: "139617067",
          formId: "d9a6bed0-c54d-4981-a619-11adc2e36fcf",
        }}
        formTranslations={{
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
        }}
        // formTranslations={{
        //   language: "uk",
        //   content: {
        //     acceptTerms:
        //       "* Натискаючи кнопку, ви приймаєте умови політики та угоди користувача",
        //     formSubmitted: (
        //       <>
        //         Форму успішно відправлено!
        //         <br />
        //         Дякую!
        //       </>
        //     ),
        //   },
        // }}
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
            title: "Как подать заявку?",
            text: "Отправь заявку через форму выше и сразу получи доступ в бот Академии.",
          },
          {
            title: "Участие в Академии бесплатное?",
            text: "Да, Академия полностью бесплатная и для участия в ней нужно всего лишь регистрация. Ждем всех!",
          },
          {
            title: "Когда и как выполняются задания?",
            text: "Задания ты можешь выполнять в удобном для тебя темпе и расписании. У нас нет строгих дедлайнов и требований.",
          },
          {
            title: "Какие условия прохождения обучения?",
            renderText: () => (
              <>
                Условия простые: нужно зарегистрироваться как студент Академии,
                получать учебный материал и задания, принимать участия в
                вебинарах как зритель, следить за результатами розыгрыша
                Конкурса Грантов (вдруг, победителем окажишься именно ты).
                <br />
                <br />
                Выполнение заданий или участие на вебинарах не является
                обязательным!
              </>
            ),
          },
          {
            title:
              "Когда начнутся занятия в Академии и как долго они продлятся?",
            text: "Доступ к материалам Академии ты получишь сразу после регистрации.  Не переживай, скучно не будет, команда GoStudy специально составила учебную программу Академии так, чтобы всем участникам было легко и интересно.",
          },
        ]}
        secondColumnData={[
          {
            title: "Что я получу по итогам обучения?",
            text: "Каждый студент получит сертификат о прохождении Академии GoStudy, а также специальные бонусы на наши учебные программы.",
          },
          {
            title: "Что такое грант и что он дает?",
            renderText: () => (
              <>
                Грант GoStudy — это сертификат на сумму выигрыша от 1400€ до
                5725€, которым победитель сможет «оплатить» полностью или
                частично программу подготовки в вузы Австрии, Чехии или Словакии
                от GoStudy и поступить в Европе на бюджетную форму обучения!{" "}
                <br />
                <br />
                Грант GoStudy нельзя обналичить или получить в денежном
                эквиваленте.
              </>
            ),
          },
          {
            title: "Могут ли меня отчислить?",
            text: "Нет, у нас нет системы наказания или отчисления из Академии. Если по какой-то причине тебе не захочется больше участвовать в Академии, ты сможешь просто отписаться от бота.",
          },
          {
            title: "Когда будут результаты Конкурса Грантов?",
            text: "Розыгрыш Грантов среди участников будут проходить каждые 2 месяца, результаты будут объявлены в день розыгрыша.",
          },
          {
            title:
              "А как быть, если я решил не дожидаться розыгрыша и оплатил программу, но в итоге выиграл Грант?",
            text: "Всем участникам Академии, кто зарегистрировался, оплатил программу и выиграл Грант, мы вернем денежные средства на сумму Гранта. Такие ситуации случаются часто, мы сами рекомендуем не ждать результаты Конкурса Грантов и оформляться на программу заранее (чтобы успеть собрать все документы, податься на визу и тд.).",
          },
        ]}
      />
    </>
  );
};
