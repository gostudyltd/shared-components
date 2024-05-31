import { FormSectionProps } from "../../components";
import { createTFunc, LangKey, Translations } from "../../config/langs";
import { TranslationType } from "../types";

export const formSectionContent1: TranslationType<
  Omit<FormSectionProps, "hubspotConfig">
> = {
  en: {
    renderTitle: (color) => {
      return (
        <>
          Sign up for a <span style={{ color }}>free consultation</span>
        </>
      );
    },
    description:
      "Fill out the contact form - we will contact you within an hour and answer any questions",
    formTranslations: {
      language: "en",
      content: {
        acceptTerms:
          "* by clicking the button, you accept the terms of the policy and the user agreement",
        formSubmitted: (
          <>
            Form sent successfully!
            <br />
            Thank You!
          </>
        ),
      },
    },
  },
  uk: {
    renderTitle: (color) => {
      return (
        <>
          Запишіться на <span style={{ color }}>безкоштовну консультацію</span>
        </>
      );
    },
    description:
      "Заповніть контактну форму - ми зв'яжемося з вами протягом години і відповімо на всі ваші питання",
    formTranslations: {
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
    },
  },
  ru: {
    renderTitle: (color) => {
      return (
        <>
          Запишитесь на <span style={{ color }}>бесплатную консультацию</span>
        </>
      );
    },
    description:
      "Заполните контактную форму - мы свяжемся с вами в течение часа и ответим на все ваши вопросы",
    formTranslations: {
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
    },
  },
  vi: {
    renderTitle: (color) => {
      return (
        <>
          Đăng ký <span style={{ color }}>cuộc họp tư vấn miễn phí</span>
        </>
      );
    },
    description:
      "Hãy điền vào biểu mẫu liên hệ - chúng tôi sẽ liên hệ với bạn trong vòng một giờ và trả lời tất cả các câu hỏi của bạn",
    formTranslations: {
      language: "vi",
      content: {
        acceptTerms:
          "* Bằng cách nhấn nút, bạn chấp nhận các điều khoản của chính sách và thỏa thuận người dùng",
        formSubmitted: (
          <>
            Biểu mẫu đã được gửi thành công!
            <br />
            Cảm ơn bạn!
          </>
        ),
      },
    },
  },
};

export const getFormSectionContent1 = (lang: LangKey, externalConfig?: Translations) => {
  const t = createTFunc(lang, externalConfig)

  return {
    renderTitle: (color: string) => {
      return (
        <>
          {t('CzechLanguageLanding.SixthSection.Title.Part1')}{" "}<span style={{ color }}>{t('CzechLanguageLanding.SixthSection.Title.Part2')}</span>
        </>
      );
    },
    description: t('CzechLanguageLanding.SixthSection.Description'),
    formTranslations: {
      language: lang,
      content: {
        acceptTerms: t('CzechLanguageLanding.SixthSection.Terms'),
        formSubmitted: (
          <>
            { t('CzechLanguageLanding.SixthSection.Submited.Part1')}
            <br />
            { t('CzechLanguageLanding.SixthSection.Submited.Part2')}
          </>
        ),
      },
    },
  }
}
