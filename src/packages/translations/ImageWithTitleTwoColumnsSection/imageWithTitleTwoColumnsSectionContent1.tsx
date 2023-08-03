import { ImageWithTitleTwoColumnsSectionProps } from '../../components';
import { TranslationType } from '../types';

export const imageWithTitleTwoColumnsSectionContent1: TranslationType<
  Omit<ImageWithTitleTwoColumnsSectionProps, 'image'>
> = {
  ru: {
    sectionTitle: {
      renderTitle: (color) => (
        <>
          Каждый выпускник курсов{' '}
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
          <span style={{ fontWeight: '600' }}>
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
          Кожний випускник курсів{' '}
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
          <span style={{ fontWeight: '600' }}>
            Сертифікат про знання чеської мови стане вашою конкурентною
            перевагою на ринку праці в Чеській Республіці.
          </span>
        </>
      ),
    },
  },
};
