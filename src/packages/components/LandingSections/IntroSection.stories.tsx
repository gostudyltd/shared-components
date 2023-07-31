import type { Meta, StoryObj } from '@storybook/react';

import { IntroSection, IntroSectionProps } from './IntroSection';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Library/LandingSections/IntroSection',
  component: IntroSection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    accentColor: {
      defaultValue: 'primary',
      description: 'Accent color (default "primary")',
    },
  },
} satisfies Meta<IntroSectionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const LearnCzech: Story = {
  name: 'Учите чешский бесплатно',
  render: (args) => {
    return (
      <div style={{ paddingBottom: 100 }}>
        <IntroSection {...args} />
      </div>
    );
  },

  parameters: {
    jsx: {
      functionValue: () => `(color) => (
        <>
          Учите чешский <span style={{ color }}>бесплатно</span> для комфортной
          жизни в новой стране
        </>
      )`,
    },
  },
  args: {
    accentColor: 'warning',
    image: 'https://placehold.co/556x526',
    preTitle: 'ČESKÝ JAZYK PRO CIZINCE',
    renderTitle: (color) => (
      <>
        Учите чешский <span style={{ color }}>бесплатно</span> для комфортной
        жизни в новой стране
      </>
    ),
    description:
      'Программа изучения чешского языка для иностранных граждан от центра GoStudy при поддержке Управления занятости (Úřad práce) в Праге, Брно или онлайн.',
    bottomListData: [
      {
        icon: 'verifiedCheckTwoTone',
        text: 'Для участника курс полностью бесплатный',
      },
      {
        icon: 'shieldTwoTone',
        text: 'Аккредитация Министерством образования Чешской Республики',
      },
      {
        icon: 'diplomaTwoTone',
        text: 'Сертификат по окончании курсов для вашего работодателя',
      },
    ],
  },
};

export const HigherEducationInTheCzech: Story = {
  name: 'Higher education in the Czech',
  args: {
    accentColor: 'primary',
    image: 'https://placehold.co/556x526',
    renderTitle: (color) => (
      <>
        World-class <span style={{ color }}>higher education</span> in the Czech
        Republic for free
      </>
    ),
    description:
      "Discover the Czech Republic, one of Europe's most developed countries offering free higher education to international students.",
    button: {
      text: 'Learn more',
      onClick: () => {
        console.log('clicked');
      },
    },
  },
};
