import React from 'react'
import { AccordionSection, ColorizedWithTwoImagesSection, FormSection, ImageWithTitleTwoColumnsSection, IntroSection, List5Section, List6Section } from '../LandingSections'
import { LangKey } from '../../config/langs';
import { getAccordionSectionContent1, getColorizedWithTwoImagesSectionContent1, getFormSectionContent1, getImageWithTitleTwoColumnsSectionContent1, getIntroSectionContent, getList5SectionContent, getList6SectionContent } from '../../translations';

interface Props {
    lang: LangKey;
    btnAction?: VoidFunction;
  }

export const CzechLanguageLanding: React.FC<Props> = ({lang}) => {
    const imageBaseUrl = "https://images.gostudy.cz/static"

    const list5SectionProps = () => {
        const translations = getList5SectionContent(lang);
        return {
          ...translations,
        };
      };

    const list6SectionProps = () => {
    const translations = getList6SectionContent(lang)
    return translations
  };

    
  return (
    <>
     <>
        <IntroSection
          accentColor='warning'
          image={`${imageBaseUrl}/czech-language-intro3.png`}
          containerSx={{
            py: { xs: '3em', sm: '5rem' },
          }}
          {...getIntroSectionContent(lang)}
        />

        <List5Section
          containerSx={{
            marginTop: { xs: '8.25rem', sm: '3.75rem' },
          }}
          {...list5SectionProps()}
        />

        <ColorizedWithTwoImagesSection
          logo={`${imageBaseUrl}/czech-language-ministry-logo.svg?tx=c_fill,w_575`}
          image={`${imageBaseUrl}/czech-language-flag.svg?tx=c_fill,w_1000`}
          {...getColorizedWithTwoImagesSectionContent1(lang)}
        />

        <List6Section {...list6SectionProps()} />

        <ImageWithTitleTwoColumnsSection
          accentColor='warning'
          image={`${imageBaseUrl}/czech-language-documents2.png`}
          {...getImageWithTitleTwoColumnsSectionContent1(lang)}
        />

        <AccordionSection
          {...getAccordionSectionContent1(lang)}
        />
      </>

       <FormSection
       withoutHubspot
        //  nodeRef={formRef}
         hubspotConfig={{
           portalId: "139617067",
           formId: "d9a6bed0-c54d-4981-a619-11adc2e36fcf",
        //    onSubmit: onSubmit
         }}
         {...getFormSectionContent1(lang)}
       />
    </>
  )
}
