import type { Meta, StoryObj } from '@storybook/react';

import { FaqExample, FaqExampleProps } from './FaqExample';
const meta = {
  title: 'Playground/Accordions/FAQ',
  component: FaqExample,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<FaqExampleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Faq: Story = {
  name: 'We answer frequently asked questions about our agency and the process of applying to universities abroad.',
  args: {
    lang: 'en',
    accentColor: 'primary',
  },
};
