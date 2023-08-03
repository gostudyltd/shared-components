import type { Meta, StoryObj } from '@storybook/react';

import {
  ColorizedWithTwoImagesSection,
  ColorizedWithTwoImagesSectionProps,
} from './ColorizedWithTwoImagesSection';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Library/LandingSections/ColorizedWithTwoImagesSection',
  component: ColorizedWithTwoImagesSection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<ColorizedWithTwoImagesSectionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoName: Story = {
  name: 'Курсы аккредитованы Министерством образования ЧР',
  parameters: {
    jsx: {
      functionValue: () => `() => (
        <>
          Аккредитация на основании § 108 закона 435/2004 «О трудоустройстве» и
          положения 176/2009 об аккредитации образовательных программ.
          <br />
          Информация о курсах на сайте Министерства.
        </>
      )`,
    },
  },
  args: {
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
    logo: 'https://images.gostudy.cz/static/czech-language-ministry-logo.svg',
    image: 'https://images.gostudy.cz/static/czech-language-flag.svg',
  },
};
