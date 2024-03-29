import React from "react";
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
  IntroSectionV2,
  RoundedColorizedSectionV2,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionTextCardList,
  SectionTwoColumnsContainer,
} from "../LandingSections";
import { montserratFamily } from "../../constants/themeVars";
import { getSrc, getSrcSet } from "../../helpers/residence";

interface Props {
  lang: "ru" | "uk";
  cdnUrl: string;
  btnAction: VoidFunction;
}

export const DeutshLanding: React.FC<Props> = ({
  lang = "ru",
  cdnUrl,
  btnAction,
}) => {
  return (
    <>
      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{ background: "rgba(255, 247, 226, 1)" }}
      >
        <IntroSectionV2
          containerSx={{ py: { xs: "3em", sm: "3.5em" } }}
          renderTitle={() =>
            lang === "ru" ? (
              <>
                <span style={{ color: "rgba(227, 136, 0, 1)" }}>
                  Онлайн-уроки{" "}
                </span>
                немецкого языка
              </>
            ) : (
              <>
                <span style={{ color: "rgba(227, 136, 0, 1)" }}>
                  Онлайн-уроки{" "}
                </span>
                німецької мови
              </>
            )
          }
          renderDescription={() =>
            lang === "ru" ? (
              <>
                Начните учить язык с преподавателем-носителем бесплатно,
                эффективно и без скучных заданий, <br /> от которых тянет спать.
              </>
            ) : (
              <>
                Почніть вивчати мову з викладачем-носієм безкоштовно та без
                нудних завдань, від яких тягне спати.
              </>
            )
          }
          // description={
          //   lang === "ru"
          //     ? "Начните учить язык с преподавателем-носителем бесплатно, эффективно и без скучных заданий, от которых тянет спать."
          //     : "Почніть вивчати мову з викладачем-носієм безкоштовно та без нудних завдань, від яких тягне спати."
          // }
          info={[
            {
              text: lang === "ru" ? "Бесплатно" : "Безкоштовно",
              bgColor: "rgba(221, 159, 1, 1)",
            },
            {
              text: lang === "ru" ? "Каждую неделю" : "Щотижня",
              bgColor: "rgba(221, 159, 1, 1)",
            },
          ]}
          image={{
            src: `${cdnUrl}/deutschLanguage/firstSection.png`,
            width: 514,
            height: 569,
          }}
          mobileImage={{
            src: `${cdnUrl}/deutschLanguage/firstSection_mobile.png`,
            width: 288,
            height: 338,
            sx: { maxHeight: "338px", objectFit: "contain" },
          }}
          button={{
            text: lang === "ru" ? "Зарегистрироваться" : "Зареєструватися",
            onClick: () => {
              btnAction();
            },
            sx: { background: "#131313", "&:hover": { background: "#131313" } },
          }}
        />
      </SectionContainerWrapperColorized>

      {/* <SectionContainerWrapperColorized accentColor='primary'> */}
      <SectionContainer
        sectionTitle={{
          sx: { fontSize: { xs: "1.25rem", sm: "2.25rem" } },
          descriptionSx: { fontSize: { xs: "0.875rem", sm: "1.25rem" } },
          title:
            lang === "ru"
              ? "Учите язык эффективно и с интересом!"
              : "Вивчайте мову ефективно та з інтересом!",
          description:
            lang === "ru"
              ? "На уроках немецкого от GoStudy вы:"
              : "На уроках німецької мови від GoStudy ви:",
          centered: true,
        }}
      >
        <SectionTextCardList
          cardVariant="v7"
          gridItemProps={{
            sx: { "& > div": { backgroundColor: "rgba(248, 248, 248, 1)" } },
          }}
          data={[
            {
              iconName: "notebookBookmarkTwoTone",
              title:
                lang === "ru"
                  ? "Освоите языковую базу: произношение, правила, аудирование и мн. др."
                  : "Освоїте мовну базу: вимова, правила, аудіювання та багато іншого",
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "userSpeakTwoTone",
              title:
                lang === "ru"
                  ? "Начнете понимать немецкую речь на слух"
                  : "Почнете розуміти німецьку мову на слух",
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "documentAddTwoTone",
              title:
                lang === "ru"
                  ? "Построите свои первые предложения на немецком"
                  : "Побудуєте свої перші речення німецькою",
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "layersMinimalisticTwoTone",
              title:
                lang === "ru"
                  ? "Убедитесь в том, что немецкий может быть простым и логичным"
                  : "Переконаєтеся, що німецька може бути простою та логічною",
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "userHeartTwoTone",
              title:
                lang === "ru"
                  ? "Познакомитесь с замечательными преподавателями центра GoStudy"
                  : "Познайометеся із чудовими викладачами центру GoStudy",
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "hashtagChatTwoTone",
              title:
                lang === "ru"
                  ? "Оцените комфорт и эффективность онлайн-обучения"
                  : "Оціните комфорт та ефективність онлайн-навчання",
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "usersGroupTwoRoundedTwoTone",
              title:
                lang === "ru"
                  ? "Проведете время не скучно, с пользой и найдете новых друзей в учебной группе!"
                  : "Проведете час не нудно, з користю та знайдете нових друзів у навчальній групі!",
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "handStarsTwoTone",
              title:
                lang === "ru"
                  ? "Убедитесь, что онлайн-обучение в GoStudy действительно результативно"
                  : "Переконаєтеся, що онлайн-навчання в GoStudy дійсно результативне",
              iconColor: "rgba(221, 159, 1, 1)",
              sx: {
                border: "1.6px solid rgba(221, 159, 1, 1)",
                "& span": { border: "1.6px solid rgba(221, 159, 1, 1)" },
              },
            },
          ]}
        />
      </SectionContainer>

      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{ background: "rgba(255, 247, 226, 1)" }}
      >
        <SectionContainer
          sectionTitle={{
            sx: { fontSize: { xs: "1.25rem", sm: "2.25rem" } },
            centered: true,
            title:
              lang === "ru"
                ? "С вами будут профессионалы своего дела"
                : "З вами будуть професіонали своєї справи",
          }}
        >
          <SectionTwoColumnsContainer
            disableContainerPaddings={true}
            firstColumn={
              <Stack
                sx={{
                  borderRadius: { xs: "12px", sm: "24px" },
                  padding: { xs: "12px", sm: "24px" },
                  gap: { xs: "4px", sm: "12px" },
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Box
                  component="img"
                  src={getSrc(
                    `${cdnUrl}/deutschLanguage/thirdSection1.png`,
                    462,
                    300
                  )}
                  srcSet={getSrcSet(
                    `${cdnUrl}/deutschLanguage/thirdSection1.png`,
                    462,
                    300
                  )}
                  sx={{
                    minHeight: { xs: "160px" },
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: { xs: "10px", sm: "22px" },
                    marginBottom: ".75rem",
                  }}
                />
                <Typography
                  fontFamily={montserratFamily}
                  fontSize={{ xs: "16px", sm: "24px" }}
                  fontWeight={600}
                  lineHeight={{ xs: "19.25px", sm: "29.26px" }}
                >
                  Petra Ustohalová
                </Typography>
                <Typography
                  fontFamily={montserratFamily}
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={500}
                  lineHeight={{ xs: "14.63px", sm: "19.5px" }}
                  color={"rgba(134, 134, 134, 1)"}
                  minHeight={{ xs: "unset", sm: "97px" }}
                >
                  {lang === "ru" ? (
                    <>
                      Преподаватель немецкого языка в GoStudy,
                      филолог-германист, училась в Потсдамском университете,
                      опыт работы с иностранными студентами – более 10 лет.
                      Всегда улыбчивая и креативная. Главный педагог «Бесплатных
                      уроков немецкого» от GoStudy.{" "}
                    </>
                  ) : (
                    <>
                      Викладач німецької мови в GoStudy, філолог-германіст,
                      навчалася у Потсдамському університеті, досвід роботи з
                      іноземними студентами – понад 10 років. Завжди усміхнена
                      та креативна. Головний педагог «Безкоштовних німецьких
                      уроків» від GoStudy.
                    </>
                  )}
                </Typography>
              </Stack>
            }
            secondColumn={
              <Stack
                sx={{
                  borderRadius: { xs: "12px", sm: "24px" },
                  padding: { xs: "12px", sm: "24px" },
                  gap: { xs: "4px", sm: "12px" },
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Box
                  component="img"
                  src={getSrc(
                    `${cdnUrl}/deutschLanguage/thirdSection3.png`,
                    462,
                    300
                  )}
                  srcSet={getSrcSet(
                    `${cdnUrl}/deutschLanguage/thirdSection3.png`,
                    462,
                    300
                  )}
                  sx={{
                    minHeight: { xs: "160px" },
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: { xs: "10px", sm: "22px" },
                    marginBottom: ".75rem",
                  }}
                />
                <Typography
                  fontFamily={montserratFamily}
                  fontSize={{ xs: "16px", sm: "24px" }}
                  fontWeight={600}
                  lineHeight={{ xs: "19.25px", sm: "29.26px" }}
                >
                  Markus Stoess
                </Typography>
                <Typography
                  fontFamily={montserratFamily}
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={500}
                  lineHeight={{ xs: "14.63px", sm: "19.5px" }}
                  color={"rgba(134, 134, 134, 1)"}
                  // minHeight={{ xs: "unset", sm: "132px" }}
                >
                  {lang === "ru" ? (
                    <>
                      Учитель-носитель немецкого языка. Окончил престижные
                      университеты в Карлсруэ (Германия) и Нанси (Франция).
                      Более 9 лет преподает немецкий язык иностранным студентам.
                      Педагог «Бесплатных уроков немецкого» от GoStudy.
                    </>
                  ) : (
                    <>
                      Учитель-носій німецької мови. Закінчив престижні
                      університети в Карлсруе (Німеччина) і Нансі (Франція).
                      Понад 9 років викладає німецьку мову іноземним студентам.
                      Педагог «Безкоштовних уроків німецької» від GoStudy.
                    </>
                  )}
                </Typography>
              </Stack>
            }
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <RoundedColorizedSectionV2
        leftContentSx={{ width: { xs: "unset", sm: "55%" } }}
        rightContentSx={{ flex: { xs: "1 1 0", sm: "initial" } }}
        accentColor="warning"
        sx={{ background: "rgba(248, 248, 248, 1)" }}
        sectionTitle={{
          sx: { fontSize: { xs: "1.25rem", sm: "1.75rem" } },
          title: lang === "ru" ? "Регистрация" : "Реєстрація",
          descriptionSx: { fontSize: { xs: ".75rem", sm: "1.125rem" } },
          textContainerSx: { width: { xs: "100%", sm: "70%" } },
          renderDescription: () =>
            lang === "ru" ? (
              <>
                Уроки бесплатные, но нужна регистрация. Нажмите на кнопку,
                заполните короткую форму и выберите удобный для вас мессенджер.
                Умный бот пришлет доступ к уроку и напомнит о начале
                за 15 минут, чтобы вы точно ничего не пропустили
              </>
            ) : (
              <>
                Уроки безкоштовні, але потрібна реєстрація.Натисніть кнопку,
                заповніть коротку форму і виберіть зручний для вас месенджер.
                Розумний бот надішле доступ до уроку і нагадає про початок
                за 15 хвилин. Щоб ви точно нічого не пропустили
              </>
            ),
          // description:
          //   lang === "ru"
          //     ? "Уроки бесплатные, но нужна регистрация. Нажмите на кнопку, заполните короткую форму и выберите удобный для вас мессенджер. Умный бот пришлет доступ к уроку и напомнит о начале за 15 минут, чтобы вы точно ничего не пропустили"
          //     : "Уроки безкоштовні, але потрібна реєстрація.Натисніть кнопку, заповніть коротку форму і виберіть зручний для вас месенджер. Розумний бот надішле доступ до уроку і нагадає про початок за 15 хвилин. Щоб ви точно нічого не пропустили",
          wrapperSx: { marginBottom: { xs: "0", sm: "40px" } },
        }}
        image={{
          src: `${cdnUrl}/deutschLanguage/fourthSection_${lang}.png`,
          width: 388,
          height: 429,
        }}
        mobileImage={{
          src: `${cdnUrl}/deutschLanguage/fourthSection_${lang}_mobile.png`,
          width: 226,
          height: 275,
        }}
        imageSx={{
          minHeight: "275px",
          objectFit: "cover",
          marginX: "auto",
          position: { sm: "absolute" },
          height: { sm: "429px" },
        }}
        button={{
          sx: {
            background: "rgba(221, 159, 1, 1)",
            "&:hover": { background: "rgba(221, 159, 1, 1)" },
            minWidth: { xs: "100%", sm: "10rem" },
            fontSize: { xs: ".75rem", sm: "1.125rem" },
          },
          buttonContainerSx: { marginTop: "0" },
          text: lang === "ru" ? "Регистрация" : "Зареєструватися",
          onClick: () => {
            btnAction();
          },
        }}
      />
    </>
  );
};
