import type { Meta, StoryObj } from '@storybook/react';

import { PropsWithContentLanguage } from '../../translations/types';
import { getTranslationByLang, list6SectionContent1 } from '../../translations';
import { List6Section, List6SectionProps } from './List6Section';
const meta = {
  title: 'Library/LandingSections/List6Section',
  component: List6Section,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<PropsWithContentLanguage<List6SectionProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content1: Story = {
  render: (args) => {
    const translations = getTranslationByLang(
      list6SectionContent1,
      args.language,
      'ru'
    );
    return <List6Section {...translations} {...args} />;
  },
  args: {
    language: 'ru',
  },
  argTypes: {
    language: {
      defaultValue: 'ru',
      options: Object.keys(list6SectionContent1),
    },
  },
};
