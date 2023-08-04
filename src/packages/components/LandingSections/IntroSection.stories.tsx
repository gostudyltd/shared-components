import type { Meta, StoryObj } from '@storybook/react';

import { IntroSection, IntroSectionProps } from './IntroSection';
import { getTranslationByLang, introSectionContent1 } from '../../translations';
import { PropsWithContentLanguage } from '../../translations/types';

const meta = {
  title: 'Library/LandingSections/IntroSection',
  component: IntroSection,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<PropsWithContentLanguage<IntroSectionProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content1: Story = {
  storyName: 'Content1',
  render: (args) => {
    const translations = getTranslationByLang(
      introSectionContent1,
      args.language,
      'ru'
    );
    return (
      <div style={{ paddingBottom: 100 }}>
        <IntroSection {...translations} {...args} />
      </div>
    );
  },

  args: {
    language: 'ru',
    image: 'https://placehold.co/556x526',
    accentColor: 'warning',
  },
  argTypes: {
    language: {
      defaultValue: 'ru',
      options: Object.keys(introSectionContent1),
    },
  },
};
