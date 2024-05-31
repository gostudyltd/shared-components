import { List5SectionProps } from "../../components";
import { createTFunc, LangKey, Translations } from "../../config/langs";
import { TranslationType } from "../types";

export const list5SectionContent1: TranslationType<List5SectionProps> = {
  ru: {
    sectionTitle: {
      preTitle: "Курсы",
      title: "Для любого уровня языковой подготовки",
    },
    data: [
      {
        badge: "с 0 до А1",
        title: "Базовый курс",
        description: "Základní kurz",
        list: [
          "60 часов изучения языка",
          "c 0 до A1",
          "в Праге, Брно и онлайн",
          "100% компенсация стоимости курса",
          "Сертификат по окончании",
          "Комфортное расписание занятий",
        ],
        button: {
          text: "Записаться на курс",
        },
      },
      {
        badge: "c A1 до A2",
        title: "Продолжающий курс с А1 до А2",
        description: "Navazující kurz",
        list: [
          "120 часов изучения языка",
          "c A1 до A2",
          "в Праге, Брно и онлайн",
          "100% компенсация стоимости курса",
          "Сертификат по окончании",
          "Комфортное расписание занятий",
        ],
        button: {
          text: "Записаться на курс",
        },
      },
      {
        badge: "c A2 до B1",
        title: "Углубленный курс с А2 до B1",
        description: "Pro pokročilé",
        list: [
          "150 часов изучения языка",
          "c A2 до B1",
          "в Праге, Брно и онлайн",
          "100% компенсация стоимости курса",
          "Сертификат по окончании",
          "Комфортное расписание занятий",
        ],
        button: {
          text: "Записаться на курс",
        },
      },
    ],
  },
  uk: {
    sectionTitle: {
      preTitle: "Курси",
      title: "Для будь-якого рівня мовної підготовки",
    },
    data: [
      {
        badge: "З 0 до А1",
        title: "Базовий курс",
        description: "Základní kurz",
        list: [
          "60 годин вивчення мови",
          "з 0 до A1",
          "в Празі, Брно та онлайн",
          "100% компенсація вартості курсу",
          "Сертифікат після закінчення",
          "Комфортний розклад занять",
        ],
        button: {
          text: "Записатися на курс",
        },
      },
      {
        badge: "З А1 до А2",
        title: "Тривалий курс від А1 до А2",
        description: "Navazující kurz",
        list: [
          "120 годин вивчення мови",
          "з A1 до A2",
          "в Празі, Брно та онлайн",
          "100% компенсація вартості курсу",
          "Сертифікат після закінчення",
          "Комфортний розклад занять",
        ],
        button: {
          text: "Записатися на курс",
        },
      },
      {
        badge: "З А2 до B1",
        title: "Поглиблений курс від А2 до B1",
        description: "Pro pokročilé",
        list: [
          "150 годин вивчення мови",
          "з A2 до B1",
          "в Празі, Брно та онлайн",
          "100% компенсація вартості курсу",
          "Сертифікат після закінчення",
          "Комфортний розклад занять",
        ],
        button: {
          text: "Записатися на курс",
        },
      },
    ],
  },
  en: {
    sectionTitle: {
      preTitle: "Courses",
      title: "For Any Language Proficiency Level",
    },
    data: [
      {
        badge: "from 0 to A1",
        title: "Basic Course",
        description: "Základní kurz",
        list: [
          "60 hours of language learning",
          "from 0 to A1",
          "in Prague, Brno, and online",
          "100% course cost reimbursement",
          "Certificate upon completion",
          "Convenient class schedule",
        ],
        button: {
          text: "Enroll in the course",
        },
      },
      {
        badge: "from A1 to A2",
        title: "Intermediate Course from A1 to A2",
        description: "Navazující kurz",
        list: [
          "120 hours of language learning",
          "from A1 to A2",
          "in Prague, Brno, and online",
          "100% course cost reimbursement",
          "Certificate upon completion",
          "Convenient class schedule",
        ],
        button: {
          text: "Enroll in the course",
        },
      },
      {
        badge: "from A2 to B1",
        title: "Advanced Course from A2 to B1",
        description: "Pro pokročilé",
        list: [
          "150 hours of language learning",
          "from A2 to B1",
          "in Prague, Brno, and online",
          "100% course cost reimbursement",
          "Certificate upon completion",
          "Convenient class schedule",
        ],
        button: {
          text: "Enroll in the course",
        },
      },
    ],
  },
  vi: {
    sectionTitle: {
      preTitle: "Khóa học",
      title: "Dành cho mọi trình độ tiếng",
    },
    data: [
      {
        badge: "từ 0 đến A1",
        title: "Khóa học cơ bản",
        description: "Základní kurz",
        list: [
          "60 giờ học tiếng",
          "từ 0 đến A1",
          "tại Praha, Brno và trực tuyến",
          "Bồi thường 100% chi phí khóa học",
          "Chứng chỉ sau khi hoàn thành",
          "Thời gian học linh hoạt",
        ],
        button: {
          text: "Đăng ký khóa học",
        },
      },
      {
        badge: "từ A1 đến A2",
        title: "Khóa học tiếp theo từ A1 đến A2",
        description: "Navazující kurz",
        list: [
          "120 giờ học tiếng",
          "từ A1 đến A2",
          "tại Praha, Brno và trực tuyến",
          "Bồi thường 100% chi phí khóa học",
          "Chứng chỉ sau khi hoàn thành",
          "Thời gian học linh hoạt",
        ],
        button: {
          text: "Đăng ký khóa học",
        },
      },
      {
        badge: "từ A2 đến B1",
        title: "Khóa học sâu rộng từ A2 đến B1",
        description: "Pro pokročilé",
        list: [
          "150 giờ học tiếng",
          "từ A2 đến B1",
          "tại Praha, Brno và trực tuyến",
          "Bồi thường 100% chi phí khóa học",
          "Chứng chỉ sau khi hoàn thành",
          "Thời gian học linh hoạt",
        ],
        button: {
          text: "Đăng ký khóa học",
        },
      },
    ],
  },
};

export const getList5SectionContent = (lang: LangKey, externalConfig?: Translations) => {
  const t = createTFunc(lang, externalConfig)

  return {
    sectionTitle: {
      preTitle: t('CzechLanguageLanding.FirstSection.PreTitle'),
      title: t('CzechLanguageLanding.FirstSection.Title'),
    },
    data: [
      {
        badge: t('CzechLanguageLanding.FirstSection.Card1.Badge'),
        title: t('CzechLanguageLanding.FirstSection.Card1.Title'),
        description: t('CzechLanguageLanding.FirstSection.Card1.Description'),
        list: [
          t('CzechLanguageLanding.FirstSection.Card1.Points.1'),
          t('CzechLanguageLanding.FirstSection.Card1.Points.2'),
          t('CzechLanguageLanding.FirstSection.Card1.Points.3'),
          t('CzechLanguageLanding.FirstSection.Card1.Points.4'),
          t('CzechLanguageLanding.FirstSection.Card1.Points.5'),
          t('CzechLanguageLanding.FirstSection.Card1.Points.6'),
        ],
        button: {
          text: t('CzechLanguageLanding.FirstSection.Card1.Button'),
        },
      },
      {
        badge: t('CzechLanguageLanding.FirstSection.Card2.Badge'),
        title: t('CzechLanguageLanding.FirstSection.Card2.Title'),
        description: t('CzechLanguageLanding.FirstSection.Card2.Description'),
        list: [
          t('CzechLanguageLanding.FirstSection.Card2.Points.1'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.2'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.3'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.4'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.5'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.6'),
        ],
        button: {
          text: t('CzechLanguageLanding.FirstSection.Card2.Button'),
        },
      },
      {
        badge: t('CzechLanguageLanding.FirstSection.Card2.Badge'),
        title: t('CzechLanguageLanding.FirstSection.Card2.Title'),
        description: t('CzechLanguageLanding.FirstSection.Card2.Description'),
        list: [
          t('CzechLanguageLanding.FirstSection.Card2.Points.1'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.2'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.3'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.4'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.5'),
          t('CzechLanguageLanding.FirstSection.Card2.Points.6'),
        ],
        button: {
          text: t('CzechLanguageLanding.FirstSection.Card2.Button'),
        },
      },
    ],
  }
}
