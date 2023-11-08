import React from "react";
import {
  SectionContainerWrapperColorized,
  SectionTitleV2,
  SectionTwoColumnsContainer,
} from "./components";
import { getPicture } from "../../helpers/CloudinaryImage";
import { withCustomTheme } from "../hoc/withCustomTheme";

export const WebinarLastSection = withCustomTheme(
  ({
    image,
    lang,
    onClick,
  }: {
    image: string;
    lang: "uk" | "ru";
    onClick: VoidFunction;
  }) => {
    return (
      <SectionContainerWrapperColorized
        accentColor="primary"
        overlayVariant="v4.5"
        overlayColor="#FFFFFF"
        sx={{ background: "#2F78FE" }}
      >
        <SectionTwoColumnsContainer
          sectionContainerSx={{
            py: { xs: "3rem", sm: "50px" },
            paddingBottom: { xs: "0", sm: "50px" },
          }}
          firstColumnSx={{
            width: { sm: "40%", xs: "100%" },
            flex: { xs: "1 1 0", sm: "none" },
            order: { xs: "1", sm: "0" },
          }}
          secondColumnSx={{
            width: { sm: "60%", xs: "100%" },
            order: { xs: "0", sm: "1" },
          }}
          secondColumn={
            <SectionTitleV2
              wrapperSx={{
                "& > .MuiStack-root": {
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                "& svg": { display: "none" },
              }}
              sx={{ color: "#FFF", fontSize: { xs: "18px", sm: "24px" } }}
              title={
                lang === "ru"
                  ? "В прямом эфире вы сможете задать ваши вопросы об образовании в Европе и получить экспертную консультацию!"
                  : "У прямому ефірі ви зможете поставити ваші питання про освіту в Європі та отримати експертну консультацію!"
              }
              description={
                lang === "ru"
                  ? "Вебинары бесплатные, но нужна регистрация. Нажмите на кнопку, заполните короткую форму и выберите удобный для вас мессенджер. Умный бот пришлет доступ к вебинару и напомнит о начале за 15 минут, чтобы вы точно ничего не пропустили."
                  : "Вебінари безкоштовні, але потрібна реєстрація. Натисніть кнопку, заповніть коротку форму і виберіть зручний для вас месенджер. Розумний бот надішле доступ до вебінару і нагадає про початок за 15 хвилин, щоб ви точно нічого не пропустили."
              }
              descriptionSx={{
                color: "rgba(255, 255, 255, 0.7)",
                marginTop: { xs: "8px", sm: "12px" },
              }}
              button={{
                sx: {
                  background: "#131313",
                  "&:hover": { background: "#131313" },
                  minWidth: { xs: "100%", sm: "10rem" },
                  fontSize: { xs: ".75rem", sm: "1.125rem" },
                  color: "#FFF",
                  marginTop: { xs: "1rem", sm: "2rem" },
                  display: "flex",
                },

                text: lang === "ru" ? "Зарегистрироваться" : "Зареєструватися",
                onClick: onClick,
              }}
            />
          }
          firstColumn={getPicture(
            image,
            470,
            470,
            {
              display: "flex",
              width: "100%",
              maxWidth: { sm: "350px" },
              position: { xs: "static", sm: "absolute" },
              bottom: 0,
            },
            {
              width: "100%",
              maxWidth: { xs: "350px", sm: "350px" },
              objectFit: { xs: "contain", sm: "cover" },
              height: { xs: "100%", sm: undefined },
              position: "relative",
              bottom: { xs: "-3px", sm: "0" },
              marginX: "auto",
            }
          )}
        />
      </SectionContainerWrapperColorized>
    );
  }
);
