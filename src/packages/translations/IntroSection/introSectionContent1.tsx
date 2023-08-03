import { IntroSectionProps } from '../../components';
import { TranslationType } from '../types';

export const introSectionContent1: TranslationType<
  Omit<IntroSectionProps, 'image' | 'mobileImage'>
> = {
  ru: {
    preTitle: 'ČESKÝ JAZYK PRO CIZINCE',
    renderTitle: (color) => (
      <>
        Учите чешский <span style={{ color }}>бесплатно</span> для комфортной
        жизни в новой стране
      </>
    ),
    description:
      'Программа изучения чешского языка для иностранных граждан от центра GoStudy при поддержке Управления занятости (Úřad práce) в Праге, Брно или онлайн.',
    bottomListData: [
      {
        icon: 'verifiedCheckTwoTone',
        text: 'Для участника курс полностью бесплатный',
      },
      {
        icon: 'shieldTwoTone',
        text: 'Аккредитация Министерством образования Чешской Республики',
      },
      {
        icon: 'diplomaTwoTone',
        text: 'Сертификат по окончании курсов для вашего работодателя',
      },
    ],
  },
  uk: {
    preTitle: 'ČESKÝ JAZYK PRO CIZINCE',
    renderTitle: (color) => (
      <>
        Вивчайте чеську <span style={{ color }}>безкоштовно</span> для
        комфортного життя в новій країні
      </>
    ),
    description:
      'Програма вивчення чеської мови для іноземних громадян від центру GoStudy за підтримки Управління зайнятості  (Úřad práce) в Празі, Брно або онлайн.',
    bottomListData: [
      {
        icon: 'verifiedCheckTwoTone',
        text: 'Для учасника курс повністю безкоштовний',
      },
      {
        icon: 'shieldTwoTone',
        text: 'Акредитація Міністерством освіти Чеської Республіки',
      },
      {
        icon: 'diplomaTwoTone',
        text: 'Сертифікат після закінчення курсів для вашого роботодавця',
      },
    ],
  },
};
