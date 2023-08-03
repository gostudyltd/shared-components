import {
  AccentColor,
  AccordionSection,
  AccordionSectionProps,
} from '../packages';

type Language = 'en' | 'ru' | 'uk';

export type FaqExampleProps = {
  lang: Language;
  accentColor?: AccentColor;
};

export const FaqExample = ({ lang, accentColor }: FaqExampleProps) => {
  return <AccordionSection {...data[lang]} accentColor={accentColor} />;
};

const data: { [lang in Language]: AccordionSectionProps } = {
  en: {
    title: 'FAQ',
    description:
      'We answer frequently asked questions about our agency and the process of applying to universities abroad.',
    data: [
      {
        title: 'What language is the learning in?',
        text: 'It depends on the country where the applicant plans to enroll. At universities in the Czech Republic or Slovakia, for example, education is conducted in Czech or Slovak. If we consider, for example, Austria, then you can study in German or English',
      },
      {
        title:
          'Are there age restrictions when applying for a free form of study at universities?',
        text: 'All applicants enter and study on equal terms, regardless of age and citizenship.',
      },
      {
        title: 'Is studying in some European countries really free?',
        text: "Higher education in the Czech Republic and Slovakia in the local language at all three levels – bachelor's, master's and doctoral studies - is free for both Czech and Slovak citizens and foreigners. You pay only for the first year of language learning and preparation for admission, and then you receive higher education at the University of the Czech Republic and Slovakia for free.",
      },
      {
        title: 'How do I start applying for an annual pre-admission program?',
        text: 'Fill out the form in the student profile on oue website.',
      },
    ],
  },
  ru: {
    title: 'Часто задаваемые вопросы',
    description:
      'Мы отвечаем на часто задаваемые вопросы о нашем агентстве и процессе поступления в университеты за рубежом.',
    data: [
      {
        title: 'На каком языке проходит обучение?',
        text: 'Это зависит от страны, в которой планирует поступать абитуриент. В университетах Чехии или Словакии, например, образование ведется на чешском или словацком языке. Если рассматривать, например, Австрию, то можно учиться на немецком или английском языке.',
      },
      {
        title:
          'Есть ли возрастные ограничения при поступлении на бесплатную форму обучения в университетах?',
        text: 'Все абитуриенты поступают и учатся на равных условиях, независимо от возраста и гражданства.',
      },
      {
        title:
          'Действительно ли обучение в некоторых европейских странах бесплатно?',
        text: 'Высшее образование в Чехии и Словакии на местном языке на всех трех уровнях - бакалавриате, магистратуре и аспирантуре - бесплатно как для граждан Чехии и Словакии, так и для иностранных граждан. Вы платите только за первый год изучения языка и подготовки к поступлению, а затем получаете высшее образование в университете Чехии и Словакии бесплатно.',
      },
      {
        title:
          'Как начать подачу заявки на годовую программу предварительной подготовки?',
        text: 'Заполните форму в профиле студента на нашем сайте.',
      },
    ],
  },
  uk: {
    title: 'Часті запитання',
    description:
      'Ми відповідаємо на часті запитання про наше агентство та процес вступу до університетів за кордоном.',
    data: [
      {
        title: 'На якій мові відбувається навчання?',
        text: 'Це залежить від країни, в якій планує вступати абітурієнт. У університетах Чехії або Словаччини, наприклад, освіта проводиться на чеській або словацькій мові. Якщо розглядати, наприклад, Австрію, то можна навчатися на німецькій або англійській мові.',
      },
      {
        title:
          'Чи є вікові обмеження при вступі на безкоштовну форму навчання в університетах?',
        text: 'Всі абітурієнти вступають і навчаються на рівних умовах, незалежно від віку та громадянства.',
      },
      {
        title:
          'Чи є дійсно навчання в деяких європейських країнах безкоштовним?',
        text: 'Вища освіта у Чехії та Словаччині доступна на безкоштовній або низькій платі. У Австрії також існують можливості отримати дешеву або безкоштовну освіту для студентів з усього світу.',
      },
      {
        title: 'Як можна отримати грант на навчання за кордоном?',
        text: 'GoStudy регулярно проводить конкурси грантів для абітурієнтів, які дозволяють отримати фінансову підтримку на навчання в університетах Європи. Ви можете брати участь у таких конкурсах та мати можливість безкоштовно навчатися за кордоном.',
      },
    ],
  },
};
