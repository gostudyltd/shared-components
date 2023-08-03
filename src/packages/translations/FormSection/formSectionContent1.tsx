import { FormSectionProps } from '../../components';
import { TranslationType } from '../types';

export const formSectionContent1: TranslationType<FormSectionProps> = {
  en: {
    renderTitle: (color) => {
      return (
        <>
          Sign up for a <span style={{ color }}>free consultation</span>
        </>
      );
    },
    description:
      'Fill out the contact form - we will contact you within an hour and answer any questions',
    formTranslations: {
      language: 'ru',
      content: {
        acceptTerms:
          '* by clicking the button, you accept the terms of the policy and the user agreement',
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
      language: 'ru',
      content: {
        acceptTerms:
          '* Натискаючи кнопку, ви приймаєте умови політики та угоди користувача',
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
  ru: {
    renderTitle: (color) => {
      return (
        <>
          Запишитесь на <span style={{ color }}>бесплатную консультацию</span>
        </>
      );
    },
    description:
      'Заполните контактную форму - мы свяжемся с вами в течение часа и ответим на все ваши вопросы',
    formTranslations: {
      language: 'ru',
      content: {
        acceptTerms:
          '* Нажимая кнопку, вы принимаете условия политики и пользовательского соглашения',
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
};
