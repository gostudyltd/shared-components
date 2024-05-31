import React from "react";
import { Box, Stack, Typography } from "@mui/material";
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
import { createTFunc, Translations } from "../../config/langs";

interface Props {
  lang: "ru" | "uk";
  externalLocales?: Translations;
  cdnUrl: string;
  btnAction: VoidFunction;
}

export const DeutshLanding: React.FC<Props> = ({
  lang = "ru",
  externalLocales,
  cdnUrl,
  btnAction,
}) => {
  const t = createTFunc(lang, externalLocales)
  return (
    <>
      <SectionContainerWrapperColorized
        accentColor="primary"
        sx={{ background: "rgba(255, 247, 226, 1)" }}
      >
        <IntroSectionV2
          containerSx={{ py: { xs: "3em", sm: "3.5em" } }}
          renderTitle={() => 
          <>
            <span style={{ color: "rgba(227, 136, 0, 1)" }}>
              {t('DeutshLanding.IntroSection.Title.Part1')}{" "}
            </span>
            {t('DeutshLanding.IntroSection.Title.Part2')}
          </>
          }
          renderDescription={() => t('DeutshLanding.IntroSection.Description')
          }
          info={[
            {
              text: t('DeutshLanding.IntroSection.Chip1'),
              bgColor: "rgba(221, 159, 1, 1)",
            },
            {
              text: t('DeutshLanding.IntroSection.Chip2'),
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
            text: t('DeutshLanding.IntroSection.Button'),
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
          title: t('DeutshLanding.FirstSection.Title'),
          description: t('DeutshLanding.FirstSection.Description'),
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
              title: t('DeutshLanding.FirstSection.Points.1'),
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "userSpeakTwoTone",
              title: t('DeutshLanding.FirstSection.Points.2'),
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "documentAddTwoTone",
              title: t('DeutshLanding.FirstSection.Points.3'),
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "layersMinimalisticTwoTone",
              title: t('DeutshLanding.FirstSection.Points.4'),
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "userHeartTwoTone",
              title: t('DeutshLanding.FirstSection.Points.5'),
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "hashtagChatTwoTone",
              title: t('DeutshLanding.FirstSection.Points.6'),
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "usersGroupTwoRoundedTwoTone",
              title: t('DeutshLanding.FirstSection.Points.7'),
              iconColor: "rgba(221, 159, 1, 1)",
            },
            {
              iconName: "handStarsTwoTone",
              title: t('DeutshLanding.FirstSection.Points.8'),
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
            title: t('DeutshLanding.SecondSection.Title'),
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
                  {t('DeutshLanding.SecondSection.Card1.Title')}
                </Typography>
                <Typography
                  fontFamily={montserratFamily}
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={500}
                  lineHeight={{ xs: "14.63px", sm: "19.5px" }}
                  color={"rgba(134, 134, 134, 1)"}
                  minHeight={{ xs: "unset", sm: "97px" }}
                >
                  {t('DeutshLanding.SecondSection.Card1.Description')}
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
                  {t('DeutshLanding.SecondSection.Card2.Title')}
                </Typography>
                <Typography
                  fontFamily={montserratFamily}
                  fontSize={{ xs: "12px", sm: "16px" }}
                  fontWeight={500}
                  lineHeight={{ xs: "14.63px", sm: "19.5px" }}
                  color={"rgba(134, 134, 134, 1)"}
                  // minHeight={{ xs: "unset", sm: "132px" }}
                >
                  {t('DeutshLanding.SecondSection.Card2.Description')}
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
          title: t('DeutshLanding.ThirdSection.Title'),
          descriptionSx: { fontSize: { xs: ".75rem", sm: "1.125rem" } },
          textContainerSx: { width: { xs: "100%", sm: "70%" } },
          renderDescription: () => t('DeutshLanding.ThirdSection.Description'),
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
          text: t('DeutshLanding.ThirdSection.Button'),
          onClick: () => {
            btnAction();
          },
        }}
      />
    </>
  );
};
