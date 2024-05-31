import { ColorizedWithTwoImagesSectionProps } from "../../components";
import { createTFunc, LangKey, Translations } from "../../config/langs";
import { TranslationType } from "../types";

export const colorizedWithTwoImagesSectionContent1: TranslationType<
  Omit<ColorizedWithTwoImagesSectionProps, "image" | "logo">
> = {
  ru: {
    sectionTitle: {
      title: "Курсы аккредитованы Министерством образования ЧР",
      renderDescription: () => (
        <>
          Аккредитация на основании § 108 закона 435/2004 «О трудоустройстве» и
          положения 176/2009 об аккредитации образовательных программ.
          <br />
          Информация о курсах на сайте Министерства.
        </>
      ),
    },
  },
  uk: {
    sectionTitle: {
      title: "Курси акредитовані Міністерством освіти ЧР",
      renderDescription: () => (
        <>
          Акредитація на підставі § 108 закону 435/2004 «Про працевлаштування»
          та положення 176/2009 про акредитацію освітніх програм.
          <br />
          Інформація про курси на сайті Міністерства.
        </>
      ),
    },
  },
  en: {
    sectionTitle: {
      title:
        "Courses Accredited by the Ministry of Education of the Czech Republic",
      renderDescription: () => (
        <>
          Accreditation based on § 108 of the Law 435/2004 "On Employment" and
          Regulation 176/2009 on the accreditation of educational programs.
          <br />
          Information about the courses on the Ministry's website.
        </>
      ),
    },
  },
  vi: {
    sectionTitle: {
      title: "Các khóa học được Chính phủ Cộng hòa Séc công nhận",
      renderDescription: () => (
        <>
          Chứng nhận dựa trên § 108 của Đạo luật 435/2004 "Về Việc làm" và Nghị
          định 176/2009 về việc công nhận các chương trình đào tạo.
          <br />
          Thông tin về các khóa học có trên trang web của Bộ Giáo dục.
        </>
      ),
    },
  },
};

export const getColorizedWithTwoImagesSectionContent1 = (lang: LangKey, externalConfig?: Translations) => {
  const t = createTFunc(lang, externalConfig)

  return {
    sectionTitle: {
      title: t('CzechLanguageLanding.SecondSection.Title'),
      renderDescription: () => (
        <>
          {t('CzechLanguageLanding.SecondSection.Text.Part1')}
          <br />
          {t('CzechLanguageLanding.SecondSection.Text.Part2')}
        </>
      ),
    },
  }
}
