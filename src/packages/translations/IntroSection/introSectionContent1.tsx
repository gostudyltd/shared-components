import { IntroSectionProps } from "../../components";
import { createTFunc, LangKey, Translations } from "../../config/langs";
import { TranslationType } from "../types";

export const introSectionContent1: TranslationType<
  Omit<IntroSectionProps, "image" | "mobileImage">
> = {
  ru: {
    preTitle: "ČESKÝ JAZYK PRO CIZINCE",
    renderTitle: (color) => (
      <>
        Учите чешский <span style={{ color }}>бесплатно</span> для комфортной
        жизни в новой стране
      </>
    ),
    imageOverlayText:
      "Курс рекомендован гражданам Украины, планирующим жить и работать в Чехии",
    description:
      "Программа изучения чешского языка для иностранных граждан от центра GoStudy при поддержке Управления занятости (Úřad práce) в Праге, Брно или онлайн.",
    bottomListData: [
      {
        icon: "verifiedCheckTwoTone",
        text: "Для участника курс полностью бесплатный",
      },
      {
        icon: "shieldTwoTone",
        text: "Аккредитация Министерства образования Чешской Республики",
      },
      {
        icon: "diplomaTwoTone",
        text: "Сертификат по окончании курсов для вашего работодателя",
      },
    ],
  },
  uk: {
    preTitle: "ČESKÝ JAZYK PRO CIZINCE",
    renderTitle: (color) => (
      <>
        Вивчайте чеську <span style={{ color }}>безкоштовно</span> для
        комфортного життя в новій країні
      </>
    ),
    description:
      "Програма вивчення чеської мови для іноземних громадян від центру GoStudy за підтримки Управління зайнятості  (Úřad práce) в Празі, Брно або онлайн.",
    imageOverlayText:
      "Курс рекомендований громадянам України, які планують жити та працювати в Чехії.",
    bottomListData: [
      {
        icon: "verifiedCheckTwoTone",
        text: "Для учасника курс повністю безкоштовний",
      },
      {
        icon: "shieldTwoTone",
        text: "Акредитація Міністерства освіти Чеської Республіки",
      },
      {
        icon: "diplomaTwoTone",
        text: "Сертифікат після закінчення курсів для вашого роботодавця",
      },
    ],
  },
  vi: {
    preTitle: "ČESKÝ JAZYK PRO CIZINCE",
    renderTitle: (color) => (
      <>
        Học tiếng Séc <span style={{ color }}>miễn phí</span> để có cuộc sống
        thoải mái ở đất nước mới
      </>
    ),
    imageOverlayText:
      "Khóa học được đề xuất cho công dân Ukraine định cư và làm việc tại Cộng hòa Séc",
    description:
      "Chương trình học tiếng Séc cho người nước ngoài do Trung tâm GoStudy tổ chức với sự hỗ trợ của Cục Lao động (Úřad práce) tại Praha, Brno hoặc trực tuyến.",
    bottomListData: [
      {
        icon: "verifiedCheckTwoTone",
        text: "Khóa học hoàn toàn miễn phí cho người tham gia",
      },
      {
        icon: "shieldTwoTone",
        text: "Được công nhận bởi Bộ Giáo dục Cộng hòa Séc",
      },
      {
        icon: "diplomaTwoTone",
        text: "Chứng chỉ sau khi hoàn thành khóa học cho nhà tuyển dụng của bạn",
      },
    ],
  },
  en: {
    preTitle: "ČESKÝ JAZYK PRO CIZINCE",
    renderTitle: (color) => (
      <>
        Learn Czech <span style={{ color }}>for free</span> for a comfortable
        life in a new country
      </>
    ),
    imageOverlayText:
      "The course is recommended for citizens of Ukraine planning to live and work in the Czech Republic",
    description:
      "Czech language learning program for foreign citizens by the GoStudy center with the support of the Employment Office (Úřad práce) in Prague, Brno, or online.",
    bottomListData: [
      {
        icon: "verifiedCheckTwoTone",
        text: "The course is completely free for participants",
      },
      {
        icon: "shieldTwoTone",
        text: "Accredited by the Ministry of Education of the Czech Republic",
      },
      {
        icon: "diplomaTwoTone",
        text: "Certificate upon completion of the course for your employer",
      },
    ],
  },
};

export const getIntroSectionContent = (lang: LangKey, externalConfig?: Translations) => {
  const t = createTFunc(lang, externalConfig)

  return {
    preTitle: t('CzechLanguageLanding.IntroSection.PreTitle'),
    renderTitle: (color: string) => (
      <>
        {t('CzechLanguageLanding.IntroSection.Title.Part1')} <span style={{ color }}>{t('CzechLanguageLanding.IntroSection.Title.Part2')}</span> {t('CzechLanguageLanding.IntroSection.Title.Part3')}
      </>
    ),
    imageOverlayText:
      t('CzechLanguageLanding.IntroSection.Image'),
    description:
    t('CzechLanguageLanding.IntroSection.Description'),
    bottomListData: [
      {
        icon: "verifiedCheckTwoTone",
        text: t('CzechLanguageLanding.IntroSection.Point1'),
      },
      {
        icon: "shieldTwoTone",
        text: t('CzechLanguageLanding.IntroSection.Point2'),
      },
      {
        icon: 'diplomaTwoTone',
        text: t('CzechLanguageLanding.IntroSection.Point3'),
      },
    ],
  }
}
