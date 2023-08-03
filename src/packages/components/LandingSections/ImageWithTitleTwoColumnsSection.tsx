import {
  AccentColor,
  SectionContainerWrapperColorized,
  SectionImageColumn,
  SectionTitle,
  SectionTitleProps,
  SectionTwoColumnsContainer,
} from './components';

export type ImageWithTitleTwoColumnsSectionProps = {
  accentColor?: AccentColor;
  image: string;
  sectionTitle: SectionTitleProps;
};

export const ImageWithTitleTwoColumnsSection = ({
  image,
  accentColor = 'primary',
  sectionTitle,
}: ImageWithTitleTwoColumnsSectionProps) => {
  return (
    <SectionContainerWrapperColorized accentColor={accentColor}>
      <SectionTwoColumnsContainer
        firstColumn={<SectionImageColumn image={image} />}
        secondColumn={
          <SectionTitle accentColor={accentColor} {...sectionTitle} />
        }
      />
    </SectionContainerWrapperColorized>
  );
};
