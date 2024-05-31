import { AccordionSectionProps } from "../../components";
import { createTFunc, LangKey, Translations } from "../../config/langs";
import { TranslationType } from "../types";

export const accordionSectionContent1: TranslationType<AccordionSectionProps> =
  {
    ru: {
      title: "FAQ",
      description: "Отвечаем на часто задаваемые вопросы",
      data: [
        {
          title:
            "Кто может подать заявку на компенсацию стоимости языковых курсов?",
          text: "Попросить о финансировании курса могут иностранные граждане как безработные, так и работающие (но желающие работу сменить). Они должны зарегистрироваться в Управлении занятости или как соискатель (uchazeč o zaměstnání), или как заинтересованный (zájemce).",
        },
        {
          title: "А если у меня еще нет визы и я нахожусь не в Чехии?",
          text: "На бесплатной консультации мы рассмотрим вашу ситуацию и предложим несколько вариантов решения для получения подходящего типа визы.",
        },
        {
          title: "В каком формате будет проходить курс?",
          text: "Курсы будут доступны в очном (непосредственно в учебных классах GoStudy в Праге или Брно, по вашему выбору) или онлайн формате. Обучение идет на протяжении 4 недель (базовый курс). Занятия проходят ежедневно с понедельника по пятницу по 3 урока в день (15 академических часов в неделю)",
        },
        {
          title: "Как получить сертификат и что он дает?",
          renderText: () => (
            <>
              Чтобы получить сертификат о знании чешского языка, участники
              должны посетить минимум 80 % занятий. По окончании курса сдается
              экзамен. Для успешной сдачи экзамена необходимо набрать как
              минимум 60 % баллов с письменной и устной части.
              <br />
              <br />
              Наличие сертификата о знании чешского языка поможет с
              трудоустройством и улучшением рабочих условий (специалисты со
              знанием государственного языка выше ценятся на рынке труда, больше
              востребованы у работодателей, а значит могут претендовать на более
              высокую заработную плату).
            </>
          ),
        },
        {
          title: "Кто будет вести курсы?",
          renderText: () => (
            <>
              На курсах преподают квалифицированные педагоги-филологи, носители
              языка с большим опытом преподавания чешского языка как
              иностранного. За подбор учителей и методику курсов отвечают
              высококвалифицированные преподаватели чешского языка со стажем
              более 10 лет.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>
                Mgr. Jana Hudečková
              </span>{" "}
              (отделение в Праге, онлайн)
              <br />
              Образование: педагогический факультет Карлова университета.
              Преподает чешский язык в GoStudy, ведет марафоны чешского языка,
              проводит мастер-классы по онлайн-обучению, автор подкаста Učíme se
              česky, методист онлайн-программ GoStudy, заведующая отделением
              чешского языка GoStudy в Праге
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>Mgr. Hana Ciosová</span>{" "}
              (отделение в Брно)
              <br />
              Образование: педагогический факультет университета Палацкого.
              Сотрудник Центра оценки результатов образования Министерства
              образования Чехии, преподает чешский язык в GoStudy, заведующая
              отделением чешского языка GoStudy в Брно
            </>
          ),
        },
        {
          title: "Можно ли принять участие в курсах на платной основе?",
          text: "Да, если вы не хотите регистрироваться в Центре занятости или не подходите под получение визы требуемого типа, вы можете принять участие в данных курсах на платной основе. Оценить ваш уровень языка и узнать стоимость вы можете на консультации с экспертом GoStudy.",
        },
        {
          title:
            "Могу ли я принять участие во всех трех курсах, если хочу выучить язык с 0 до B1, и при этом претендовать на компенсацию стоимости от Центра занятости?",
          renderText: () => (
            <>
              Да, вы имеете право на прохождение всех 3х курсов, но для
              оформления на следующий вам потребуется еще раз заполнить
              заявление для Центра занятости, дождаться рассмотрения и только
              после этого продолжить обучение.
              <br />
              <br />
              По факту после каждого курса у вас будут каникулы длиной в 30
              дней. Это время вы сможете использовать с пользой,
              попрактиковаться в чешском и потренировать полученные навыки.
            </>
          ),
        },
      ],
    },
    uk: {
      title: "FAQ",
      description: "Відповідаємо на питання, що часто ставляться",
      data: [
        {
          title: "Хто може подати заяву на компенсацію вартості мовних курсів?",
          text: "Попросити про фінансування курсу можуть іноземні громадяни як безробітні, так і ті, що працюють (але бажають змінити роботу). Їм потрібно зареєструватися в Управлінні зайнятості або як претендент (uchazeč o zaměstnání), або як зацікавлений (zájemce).",
        },
        {
          title: "А якщо я ще не маю візи і я перебуваю не в Чехії?",
          text: "На безкоштовній консультації ми розглянемо вашу ситуацію та запропонуємо кілька варіантів рішення для отримання відповідного типу візи.",
        },
        {
          title: "У якому форматі проходитиме курс?",
          text: "Курси будуть доступні в очному (безпосередньо у навчальних класах GoStudy у Празі або Брно, на ваш вибір) або онлайн форматі. Навчання триває протягом 4 тижнів (базовий курс). Заняття проходять щодня з понеділка до п'ятниці по 3 уроки на день (15 академічних годин на тиждень)",
        },
        {
          title: "Як отримати сертифікат та що він дає?",
          renderText: () => (
            <>
              Щоб отримати сертифікат про знання чеської мови, учасники повинні
              відвідати щонайменше 80% занять. Після закінчення курсу
              складається іспит. Для успішного складання іспиту необхідно
              набрати як мінімум 60% балів з письмової та усної частини.
              <br />
              <br />
              Наявність сертифіката про знання чеської мови допоможе з
              працевлаштуванням та покращенням робочих умов (фахівці зі знанням
              державної мови вище цінуються на ринку праці, більше затребувані у
              роботодавців, а отже, можуть претендувати на більш високу
              заробітну плату).
            </>
          ),
        },
        {
          title: "Хто вестиме курси?",
          renderText: () => (
            <>
              На курсах викладають кваліфіковані педагоги-філологи, носії мови з
              великим досвідом викладання чеської як іноземної. За підбір
              вчителів та методику курсів відповідають висококваліфіковані
              викладачі чеської мови зі стажем понад 10 років.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>
                Mgr. Jana Hudečková
              </span>{" "}
              (відділення у Празі, онлайн)
              <br />
              Освіта: педагогічний факультет Карлового університету. Викладає
              чеську мову в GoStudy, проводить марафони чеської мови, проводить
              майстер-класи з онлайн-навчання, автор подкасту Učíme se česky,
              методист онлайн-програм GoStudy, завідувачка відділення чеської
              мови GoStudy у Празі
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>Mgr. Hana Ciosová</span>{" "}
              (відділення у Брно)
              <br />
              Освіта: педагогічний факультет університету Палацького.
              Співробітник Центру оцінки результатів освіти Міністерства освіти
              Чехії, викладає чеську мову в GoStudy, завідувачка відділення
              чеської мови GoStudy в Брно.
            </>
          ),
        },
        {
          title: "Чи можна взяти участь у курсах на платній основі?",
          text: "Так, якщо ви не бажаєте реєструватися в Центрі зайнятості або не підходите під отримання візи необхідного типу, ви можете взяти участь у цих курсах на платній основі. Оцінити ваш рівень мови та дізнатися вартість ви можете на консультації з експертом GoStudy.",
        },
        {
          title:
            "Чи можу я взяти участь у всіх трьох курсах, якщо я хочу вивчити мову з 0 до B1, і при цьому претендувати на компенсацію вартості від Центру зайнятості?",
          renderText: () => (
            <>
              Так, ви маєте право на проходження всіх 3-х курсів, але для
              оформлення на наступний вам потрібно ще раз заповнити заяву для
              Центру зайнятості, дочекатися розгляду і тільки після цього
              продовжити навчання.
              <br />
              <br />
              За фактом після кожного курсу у вас будуть канікули довжиною 30
              днів. Цей час ви зможете використати з користю, попрактикуватися у
              чеській та потренувати отримані навички.
            </>
          ),
        },
      ],
    },
    en: {
      title: "FAQ",
      description: "Answers to Frequently Asked Questions",
      data: [
        {
          title: "Who can apply for reimbursement of language course costs?",
          text: "Foreign citizens, both unemployed and employed (but wishing to change jobs), can request funding for the course. They must register with the Employment Office either as a job seeker (uchazeč o zaměstnání) or as an interested party (zájemce).",
        },
        {
          title:
            "What if I don't have a visa and I am not in the Czech Republic?",
          text: "During the free consultation, we will assess your situation and offer several solutions to obtain the appropriate type of visa.",
        },
        {
          title: "In what format will the course be conducted?",
          text: "Courses will be available in in-person (directly at GoStudy classrooms in Prague or Brno, according to your choice) or online format. The training lasts for 4 weeks (basic course). Classes are held daily from Monday to Friday with 3 lessons per day (15 academic hours per week).",
        },
        {
          title: "How to obtain a certificate and what does it provide?",
          renderText: () => (
            <>
              To obtain a certificate of proficiency in the Czech language,
              participants must attend a minimum of 80% of classes. An exam is
              taken at the end of the course. To pass the exam successfully, a
              minimum of 60% is required in both the written and oral parts.
              <br />
              <br />
              Having a certificate of proficiency in the Czech language will
              assist with employment and improving work conditions
              (professionals with knowledge of the state language are more
              valued in the job market, in higher demand by employers, and can
              therefore expect a higher salary).
            </>
          ),
        },
        {
          title: "Who will be conducting the courses?",
          renderText: () => (
            <>
              Qualified philology teachers and native speakers with extensive
              experience in teaching Czech as a foreign language will teach the
              courses. Highly qualified Czech language teachers with over 10
              years of experience are responsible for selecting teachers and
              course methodology.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>
                Mgr. Jana Hudečková
              </span>{" "}
              (Prague branch, online)
              <br />
              Education: Faculty of Education, Charles University. Teaches Czech
              at GoStudy, leads Czech language marathons, conducts online
              teaching masterclasses, author of the Učíme se česky podcast,
              GoStudy online program methodologist, head of the GoStudy Prague
              Czech language department.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>Mgr. Hana Ciosová</span> (Brno
              branch)
              <br />
              Education: Faculty of Education, Palacký University. Employee of
              the Czech Ministry of Education's Education Results Assessment
              Center, teaches Czech at GoStudy, head of the GoStudy Brno Czech
              language department.
            </>
          ),
        },
        {
          title: "Can I participate in the courses on a paid basis?",
          text: "Yes, if you do not want to register with the Employment Office or do not qualify for the required type of visa, you can participate in these courses on a paid basis. You can assess your language level and learn about the cost during a consultation with a GoStudy expert.",
        },
        {
          title:
            "Can I participate in all three courses if I want to learn the language from 0 to B1 and still qualify for reimbursement from the Employment Office?",
          renderText: () => (
            <>
              Yes, you have the right to take all 3 courses, but to enroll in
              the next one, you will need to fill out the application for the
              Employment Office again, wait for the review, and only then
              continue your education.
              <br />
              <br />
              In fact, after each course, you will have a 30-day break. During
              this time, you can use your time effectively, practice Czech, and
              hone the skills you have acquired.
            </>
          ),
        },
      ],
    },
    vi: {
      title: "Câu hỏi thường gặp",
      description: "Câu trả lời cho Câu hỏi thường gặp",
      data: [
        {
          title: "Ai có thể nộp đơn xin hoàn trả chi phí khóa học tiếng?",
          text: "Các công dân nước ngoài, cả người thất nghiệp và người đang làm việc (nhưng muốn đổi việc làm) có thể yêu cầu tài trợ cho khóa học. Họ phải đăng ký với Văn phòng Lao động ent (uchazeč o zaměstnání) hoặc là người có quan tâm (zájemce).",
        },
        {
          title: "Nhưng nếu tôi chưa có visa và tôi không ở Cộng hòa Séc?",
          text: "Trong cuộc tư vấn miễn phí, chúng tôi sẽ đánh giá tình huống của bạn và đề xuất một số giải pháp để có được loại visa phù hợp.",
        },
        {
          title: "Khóa học sẽ được tổ chức ở định dạng nào?",
          text: "Khóa học sẽ có sẵn trong hình thức học trực tiếp (trực tiếp tại các lớp học của GoStudy tại Prague hoặc Brno, theo lựa chọn của bạn) hoặc hình thức trực tuyến. Đào tạo kéo dài trong vòng 4 tuần (khóa học cơ bản). Buổi học được tổ chức hàng ngày từ thứ Hai đến thứ Sáu với 3 buổi học mỗi ngày (15 giờ học mỗi tuần).",
        },
        {
          title: "Làm thế nào để có được chứng chỉ và nó mang lại điều gì?",
          renderText: () => (
            <>
              Để có được chứng chỉ về việc sử dụng tiếng Séc, người tham gia
              phải tham dự ít nhất 80% buổi học. Một kỳ thi được tiến hành vào
              cuối khóa học. Để đạt kỳ thi thành công, cần phải đạt ít nhất 60%
              cả trong phần viết và phần nói.
              <br />
              <br />
              Việc có một chứng chỉ về việc sử dụng tiếng Séc sẽ hỗ trợ trong
              việc tìm việc làm và cải thiện điều kiện làm việc (những người có
              kiến thức về tiếng quốc gia được đánh giá cao hơn trên thị trường
              lao động, đang được ưa chuộng bởi các nhà tuyển dụng và có thể kỳ
              vọng mức lương cao hơn).
            </>
          ),
        },
        {
          title: "Ai sẽ dạy khóa học?",
          renderText: () => (
            <>
              Giáo viên đủ điều kiện và người nói tiếng Séc làm việc với nhiều
              kinh nghiệm trong việc dạy tiếng Séc cho người nước ngoài sẽ dạy
              khóa học. Giáo viên tiếng Séc có kinh nghiệm hơn 10 năm chịu trách
              nhiệm về việc lựa chọn giáo viên và phương pháp khóa học.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>
                Mgr. Jana Hudečková
              </span>{" "}
              (phân nhánh Prague, trực tuyến)
              <br />
              Học vấn: Khoa giáo dục, Đại học Charles. Dạy tiếng Séc tại
              GoStudy, đứng đầu các cuộc thi tiếng Séc, thực hiện các khóa học
              trực tuyến, tác giả của podcast Učíme se česky, nhà phê bình của
              chương trình trực tuyến GoStudy, trưởng phòng tiếng Séc tại Prague
              GoStudy.
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>Mgr. Hana Ciosová</span> (phân
              nhánh Brno)
              <br />
              Học vấn: Khoa giáo dục, Đại học Palacký. Nhân viên của Trung tâm
              Đánh giá Kết quả Giáo dục của Bộ Giáo dục Cộng hòa Séc, dạy tiếng
              Séc tại GoStudy, trưởng phòng tiếng Séc tại GoStudy Brno.
            </>
          ),
        },
        {
          title: "Có thể tham gia vào các khóa học trả phí không?",
          text: "Có, nếu bạn không muốn đăng ký với Văn phòng Lao động hoặc không đủ điều kiện để có loại visa cần thiết, bạn có thể tham gia các khóa học này với cách tính phí. Bạn có thể đánh giá trình độ tiếng của mình và tìm hiểu về chi phí trong cuộc tư vấn với một chuyên gia của GoStudy.",
        },
        {
          title:
            "Tôi có thể tham gia vào tất cả ba khóa học nếu tôi muốn học tiếng từ 0 đến B1 và vẫn được hoàn trả từ Văn phòng Lao động?",
          renderText: () => (
            <>
              Có, bạn có quyền tham gia cả 3 khóa học, nhưng để đăng ký vào khóa
              học tiếp theo, bạn sẽ cần phải điền đơn đăng ký cho Văn phòng Lao
              động một lần nữa, đợi xem xét và chỉ sau đó tiếp tục giáo dục.
              <br />
              <br />
              Trên thực tế, sau mỗi khóa học, bạn sẽ có một kỳ nghỉ kéo dài 30
              ngày. Trong thời gian này, bạn có thể sử dụng thời gian của mình
              một cách hiệu quả, luyện tập tiếng Séc và nâng cao các kỹ năng bạn
              đã học được.
            </>
          ),
        },
      ],
    },
  };

  export const getAccordionSectionContent1 = (lang: LangKey, externalConfig?: Translations) => {
    const t = createTFunc(lang, externalConfig)
  
    return {
      title: t('CzechLanguageLanding.FifthSection.Title'),
      description: t('CzechLanguageLanding.FifthSection.Description'),
      data: [
        {
          title: t('CzechLanguageLanding.FifthSection.Questions.1.Title'),
          text: t('CzechLanguageLanding.FifthSection.Questions.1.Text'),
        },
        {
          title: t('CzechLanguageLanding.FifthSection.Questions.2.Title'),
          text: t('CzechLanguageLanding.FifthSection.Questions.2.Text'),
        },
        {
          title: t('CzechLanguageLanding.FifthSection.Questions.3.Title'),
          text: t('CzechLanguageLanding.FifthSection.Questions.3.Text'),
        },
        {
          title: t('CzechLanguageLanding.FifthSection.Questions.4.Title'),
          renderText: () => (
            <>
              {t('CzechLanguageLanding.FifthSection.Questions.4.Text.Part1')}
              <br />
              <br />
              {t('CzechLanguageLanding.FifthSection.Questions.4.Text.Part2')}
            </>
          ),
        },
        {
          title: t('CzechLanguageLanding.FifthSection.Questions.5.Title'),
          renderText: () => (
            <>
              {t('CzechLanguageLanding.FifthSection.Questions.5.Text.Part1')}
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>
              {t('CzechLanguageLanding.FifthSection.Questions.5.Text.Part2')}
              </span>{" "}
              {t('CzechLanguageLanding.FifthSection.Questions.5.Text.Part3')}
              <br />
              {t('CzechLanguageLanding.FifthSection.Questions.5.Text.Part4')}
              <br />
              <br />
              <span style={{ fontWeight: "600" }}>{t('CzechLanguageLanding.FifthSection.Questions.5.Text.Part5')}</span>{" "}
              {t('CzechLanguageLanding.FifthSection.Questions.5.Text.Part6')}
              <br />
              {t('CzechLanguageLanding.FifthSection.Questions.5.Text.Part7')}
            </>
          ),
        },
        {
          title: t('CzechLanguageLanding.FifthSection.Questions.6.Title'),
          text: t('CzechLanguageLanding.FifthSection.Questions.6.Text'),
        },
        {
          title: t('CzechLanguageLanding.FifthSection.Questions.7.Title'),
          renderText: () => (
            <>
              {t('CzechLanguageLanding.FifthSection.Questions.7.Text.Part1')}
              <br />
              <br />
              {t('CzechLanguageLanding.FifthSection.Questions.7.Text.Part2')}
            </>
          ),
        },
      ],
    }
  }
