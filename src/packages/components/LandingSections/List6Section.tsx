import {
  AccentColor,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionList6,
  SectionList6Props,
  SectionTitleProps,
} from './components';

export type List6SectionProps = {
  accentColor?: AccentColor;
  sectionTitle: SectionTitleProps;
  data: SectionList6Props;
};

export const List6Section = ({
  sectionTitle,
  accentColor = 'primary',
  data,
}: List6SectionProps) => {
  return (
    <SectionContainerWrapperColorized
      accentColor={accentColor}
      overlayVariant='v1'
    >
      <SectionContainer sectionTitle={sectionTitle}>
        <SectionList6 {...data} />
      </SectionContainer>
    </SectionContainerWrapperColorized>
  );
};
