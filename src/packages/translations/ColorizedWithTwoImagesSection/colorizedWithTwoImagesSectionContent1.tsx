import { ColorizedWithTwoImagesSectionProps } from '../../components';
import { TranslationType } from '../types';

export const colorizedWithTwoImagesSectionContent1: TranslationType<
  Omit<ColorizedWithTwoImagesSectionProps, 'image' | 'logo'>
> = {
  ru: {
    sectionTitle: {
      title: 'Курсы аккредитованы Министерством образования ЧР',
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
      title: 'Курси акредитовані Міністерством освіти ЧР',
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
};
