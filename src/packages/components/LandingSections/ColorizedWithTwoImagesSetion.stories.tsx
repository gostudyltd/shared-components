import type { Meta, StoryObj } from '@storybook/react';

import {
  ColorizedWithTwoImagesSection,
  ColorizedWithTwoImagesSectionProps,
} from './ColorizedWithTwoImagesSection';
import { PropsWithContentLanguage } from '../../translations/types';
import {
  colorizedWithTwoImagesSectionContent1,
  getTranslationByLang,
} from '../../translations';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Library/LandingSections/ColorizedWithTwoImagesSection',
  component: ColorizedWithTwoImagesSection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    language: {
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<PropsWithContentLanguage<ColorizedWithTwoImagesSectionProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content1: Story = {
  render: (args) => {
    const translations = getTranslationByLang(
      colorizedWithTwoImagesSectionContent1,
      args.language,
      'ru'
    );
    return <ColorizedWithTwoImagesSection {...translations} {...args} />;
  },
  args: {
    language: 'ru',
    logo: 'https://images.gostudy.cz/static/czech-language-ministry-logo.svg',
    image: 'https://images.gostudy.cz/static/czech-language-flag.svg',
  },
  argTypes: {
    language: {
      defaultValue: 'ru',
      options: Object.keys(colorizedWithTwoImagesSectionContent1),
    },
  },
};
