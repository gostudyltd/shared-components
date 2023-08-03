import type { Meta, StoryObj } from '@storybook/react';

import { List5Section, List5SectionProps } from './List5Section';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Library/LandingSections/List5Section',
  component: List5Section,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<List5SectionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoName: Story = {
  name: 'Для любого уровня языковой подготовки',
  args: {
    sectionTitle: {
      preTitle: 'Курсы',
      title: 'Для любого уровня языковой подготовки',
    },
    data: [
      {
        badge: 'с 0 до А1',
        title: 'Уверенный старт',
        description: 'Základní kurz',
        list: [
          '60 часов изучения языка',
          'c 0 до A1',
          'в Праге, Брно и онлайн',
          '100% компенсация стоимости курса',
          'Сертификат по окончании',
          'Комфортное расписание занятий',
        ],
        button: {
          text: 'Записаться на курс',
          onClick: () => {
            console.log('clicked');
          },
        },
      },
      {
        badge: 'c A1 до A2',
        title: 'Свободное общение',
        description: 'Navazující kurz',
        list: [
          '120 часов изучения языка',
          'c A1 до A2',
          'в Праге, Брно и онлайн',
          '100% компенсация стоимости курса',
          'Сертификат по окончании',
          'Комфортное расписание занятий',
        ],
        button: {
          text: 'Записаться на курс',
          onClick: () => {
            console.log('clicked');
          },
        },
      },
      {
        badge: 'c A2 до B1',
        title: 'Деловые коммуникации',
        description: 'Pro pokročilé',
        list: [
          '150 часов изучения языка',
          'c A2 до B1',
          'в Праге, Брно и онлайн',
          '100% компенсация стоимости курса',
          'Сертификат по окончании',
          'Комфортное расписание занятий',
        ],
        button: {
          text: 'Записаться на курс',
          onClick: () => {
            console.log('clicked');
          },
        },
      },
    ],
  },
};
