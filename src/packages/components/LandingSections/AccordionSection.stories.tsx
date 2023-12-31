import type { Meta, StoryObj } from '@storybook/react';

import { AccordionSection, AccordionSectionProps } from './AccordionsSection';
import {
  accordionSectionContent1,
  getTranslationByLang,
} from '../../translations';
import { PropsWithContentLanguage } from '../../translations/types';

const meta = {
  title: 'Library/LandingSections/AccordionSection',
  component: AccordionSection,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<PropsWithContentLanguage<AccordionSectionProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content1: Story = {
  render: (args) => {
    const translations = getTranslationByLang(
      accordionSectionContent1,
      args.language,
      'ru'
    );
    return <AccordionSection {...translations} {...args} />;
  },
  args: {
    language: 'ru',
  },
  argTypes: {
    language: {
      defaultValue: 'ru',
      options: Object.keys(accordionSectionContent1),
    },
  },
};
