import { ImageWithTitleTwoColumnsSectionProps } from "../../components";
import { createTFunc, LangKey, Translations } from "../../config/langs";
import { TranslationType } from "../types";

export const imageWithTitleTwoColumnsSectionContent1: TranslationType<
  Omit<ImageWithTitleTwoColumnsSectionProps, "image">
> = {
  ru: {
    sectionTitle: {
      renderTitle: (color) => (
        <>
          Каждый выпускник курсов{" "}
          <span style={{ color }}>получит сертификат</span>
        </>
      ),
      renderDescription: () => (
        <>
          По окончании курса участники сдают заключительный экзамен согласно
          положению (dle vyhlášky č. 176/2009 Sb.) и получают сертификат о
          переквалификации «Osvědčení o rekvalifikaci».
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            Сертификат о знании чешского языка станет вашим конкурентным
            преимуществом на рынке труда в Чешской Республике.
          </span>
        </>
      ),
    },
  },
  uk: {
    sectionTitle: {
      renderTitle: (color) => (
        <>
          Кожний випускник курсів{" "}
          <span style={{ color }}>отримає сертифікат</span>
        </>
      ),
      renderDescription: () => (
        <>
          Після закінчення курсу учасники складають заключний іспит згідно з
          положенням (dle vyhlášky č. 176/2009 Sb.) та отримують сертифікат про
          перекваліфікацію «Osvedčení o rekvalifikaci».
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            Сертифікат про знання чеської мови стане вашою конкурентною
            перевагою на ринку праці в Чеській Республіці.
          </span>
        </>
      ),
    },
  },
  en: {
    sectionTitle: {
      renderTitle: (color) => (
        <>
          Every course graduate will{" "}
          <span style={{ color }}>receive a certificate</span>
        </>
      ),
      renderDescription: () => (
        <>
          Upon completion of the course, participants take a final exam in
          accordance with the regulation (dle vyhlášky č. 176/2009 Sb.) and
          receive a retraining certificate "Osvědčení o rekvalifikaci".
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            The certificate of proficiency in the Czech language will become
            your competitive advantage in the labor market in the Czech
            Republic.
          </span>
        </>
      ),
    },
  },
  vi: {
    sectionTitle: {
      renderTitle: (color) => (
        <>
          Mỗi người tốt nghiệp khóa học sẽ{" "}
          <span style={{ color }}>nhận được chứng chỉ</span>
        </>
      ),
      renderDescription: () => (
        <>
          Sau khi hoàn thành khóa học, các người tham gia sẽ thi cuối khóa theo
          quy định (dle vyhlášky č. 176/2009 Sb.) và nhận được chứng chỉ tái đào
          tạo "Osvědčení o rekvalifikaci".
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
            Chứng chỉ về việc thông thạo tiếng Séc sẽ trở thành lợi thế cạnh
            tranh của bạn trên thị trường lao động tại Cộng hòa Séc.
          </span>
        </>
      ),
    },
  },
};

export const getImageWithTitleTwoColumnsSectionContent1 = (lang: LangKey, externalConfig?: Translations) => {
  const t = createTFunc(lang, externalConfig)

  return {
    sectionTitle: {
      renderTitle: (color: string) => (
        <>
          {t('CzechLanguageLanding.FourthSection.Title.Part1')}{" "}
          <span style={{ color }}>{t('CzechLanguageLanding.FourthSection.Title.Part2')}</span>
        </>
      ),
      renderDescription: () => (
        <>
          {t('CzechLanguageLanding.FourthSection.Text.Part1')}
          <br />
          <br />
          <span style={{ fontWeight: "600" }}>
          {t('CzechLanguageLanding.FourthSection.Text.Part2')}
          </span>
        </>
      ),
    },
  }
}
