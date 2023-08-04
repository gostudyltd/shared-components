import type { Meta, StoryObj } from '@storybook/react';

import { List5Section, List5SectionProps } from './List5Section';
import { PropsWithContentLanguage } from '../../translations/types';
import { getTranslationByLang, list5SectionContent1 } from '../../translations';
const meta = {
  title: 'Library/LandingSections/List5Section',
  component: List5Section,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<PropsWithContentLanguage<List5SectionProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content1: Story = {
  render: (args) => {
    const translations = getTranslationByLang(
      list5SectionContent1,
      args.language,
      'ru'
    );
    return <List5Section {...translations} {...args} />;
  },
  args: {
    language: 'ru',
  },
  argTypes: {
    language: {
      defaultValue: 'ru',
      options: Object.keys(list5SectionContent1),
    },
  },
};
