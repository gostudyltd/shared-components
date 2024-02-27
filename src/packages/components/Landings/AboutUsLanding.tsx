import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  AccordionSection,
  IntroSectionV2,
  RoundedColorizedSectionV2,
  SectionContainer,
  SectionContainerWrapperColorized,
  SectionTextCardList,
  SectionTitle,
  SectionTwoColumnsContainer,
} from "../LandingSections";
import { CheckRounded } from "@mui/icons-material";
import { ImageWithColorizedBorder } from "../LandingSections/ImageWithColorizedBorder";
import { SliderSection2 } from "../LandingSections/SliderSection2";
import { montserratFamily } from "../../constants/themeVars";
import { getPicture } from "../../helpers/CloudinaryImage";

interface Props {
  lang: "ru" | "uk" | "en" | "vi";
  btnAction?: VoidFunction;
  onSubmit?: VoidFunction;
  button?: { onClick: VoidFunction; text: string };
}

export const AboutUsLanding: React.FC<Props> = ({ lang = "ru" }) => {
  const cdnUrl = "https://images.gostudy.cz/static";

  const getTranslatedText = (
    enVariant: string | React.ReactNode,
    viVariant: string | React.ReactNode,
    ruVariant: string | React.ReactNode,
    ukVariant: string | React.ReactNode
  ) => {
    if (lang === "vi") return viVariant;
    if (lang === "ru") return ruVariant;
    if (lang === "uk") return ukVariant;
    return enVariant;
  };

  return (
    <>
      <IntroSectionV2
        leftSectionContainerSx={{
          "& > *:first-of-type": {
            maxWidth: { xs: "100%", sm: "526px" },
          },
        }}
        containerSx={{
          py: { xs: "3em", sm: "3.5em" },
        }}
        renderTitle={(color) => (
          <Box>
            {getTranslatedText(
              <>
                <Box sx={{ color: color, display: "inline" }}>
                  European education
                </Box>{" "}
                accessible to everyone
              </>,
              <>
                GoStudy của nhiệm vụ này là để làm cho
                <Box sx={{ color: color, display: "inline" }}>
                  giáo dục châu Âu
                </Box>{" "}
                có thể truy cập để tất cả mọi người
              </>,
              <>
                Делаем{" "}
                <Box sx={{ color: color, display: "inline" }}>
                  образование в Европе
                </Box>{" "}
                доступным
              </>,
              <>
                Робимо{" "}
                <Box sx={{ color: color, display: "inline" }}>
                  європейську освіту
                </Box>{" "}
                доступною всім
              </>
            )}
          </Box>
        )}
        description={
          <Stack sx={{ gap: { xs: "4px", sm: "8px" } }}>
            {[
              getTranslatedText(
                "Since 1998 we have helped thousands of people to enter European universities.",
                "Từ năm 1998 chúng ta đã giúp hàng ngàn người nhập châu u trường đại học.",
                "С 1998 года мы помогли тысячам людей поступить в европейские вузы.",
                "З 1998 року ми допомогли тисячам людей вступити до європейських вишів."
              ),
              getTranslatedText(
                "Full support of the student during the move and enrolment in university.",
                "Hỗ trợ đầy đủ của những sinh viên trong di chuyển và tuyển sinh vào trường đại học.",
                "Полное сопровождение студента в ходе переезда и поступления в университет.",
                "Повний супровід студента під час переїзду та вступу до університету."
              ),
              getTranslatedText(
                "Effective language teaching using unique modern methods.",
                "Hiệu quả giảng dạy ngôn ngữ duy nhất bằng cách sử dụng phương pháp hiện đại",
                "Эффективное обучение языку по уникальным современным методикам.",
                "Ефективне вивчення мови за унікальними сучасними методиками."
              ),
            ].map((item) => (
              <Stack sx={{ gap: { xs: "4px", sm: "8px" } }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <CheckRounded
                    sx={{
                      width: "24px",
                      height: "24px",
                      flexShrink: "0",
                      color: "primary.main",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", sm: "18px" },
                      fontWeight: { xs: "400", sm: "400" },
                      lineHeight: { xs: "27.36px", sm: "27.36px" },
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        }
        image={{
          src: `${cdnUrl}/AboutsUsNew/FirstSection_${lang}.png`,
          width: 576,
          height: 516,
        }}
        mobileImage={{
          src: `${cdnUrl}/AboutsUsNew/FirstSection_${lang}_mobile.png`,
          width: 343,
          height: 306,
        }}
      />

      <SectionTwoColumnsContainer
        sectionContainerSx={{
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
        firstColumn={
          <ImageWithColorizedBorder
            image={{
              src: `${cdnUrl}/AboutsUsNew/SecondSection.png`,
              width: 494,
              height: 392,
            }}
            imageSx={{ verticalAlign: "top" }}
          />
        }
        secondColumn={
          <SectionTitle
            preTitle={
              getTranslatedText(
                "Our goal",
                "Mục tiêu của chúng tôi",
                "Наша цель",
                "Наша мета"
              ) as string
            }
            title={getTranslatedText(
              "Is your successful future in Europe",
              "Tương lai thành công của bạn ở Châu Âu",
              "Ваше успешное будущее в Европе",
              "Ваше успішне майбутнє в Європі"
            )}
            description={
              <Typography>
                {getTranslatedText(
                  <>
                    We will prepare you to enter and study at European
                    universities in the Czech Republic, Austria and Slovakia
                    qualitatively and in a short period of time. All you need
                    to do is to study diligently and fulfil your teacher’s
                    tasks.
                    <br />
                    <br />
                    No language barriers: in just one year you will be able
                    to study at university without any problems, communicate
                    easily with your classmates and teachers and feel at home.
                    <br />
                    <br />
                    We will quickly adapt you to the language environment,
                    familiarise you with the new culture and give you all the
                    perspectives for your studies and career. With us you will
                    learn the language, visit different European countries and
                    make many new friends!
                  </>,
                  <>
                    Chúng tôi sẽ chuẩn bị để nhập học tại trường đại học châu
                    u trong cộng Hòa séc, Áo và một số chất lượng và trong một
                    khoảng thời gian ngắn. Tất cả bạn cần làm là để nghiên cứu
                    siêng năng và thực hiện của bạn của giáo viên, nhiệm vụ.
                    <br />
                    <br />
                    Không có ngôn ngữ: chỉ trong một năm em sẽ đến học tại
                    trường đại học không có bất kỳ vấn đề giao tiếp dễ dàng với
                    các bạn cùng lớp và giáo viên và cảm thấy như ở nhà.
                    <br />
                    <br />
                    Chúng ta sẽ nhanh chóng thích nghi với bạn để các môi trường
                    ngôn ngữ, làm quen với bạn mới văn hóa và cung cấp cho bạn
                    tất cả các quan điểm cho nghiên cứu của bạn và sự nghiệp.
                    Với chúng tôi, bạn sẽ được học các ngôn ngữ truy cập khác
                    nhau các nước châu u và làm nhiều bạn bè mới!
                  </>,
                  <>
                    Качественно и за короткий срок мы подготовим вас
                    к поступлению и обучению в европейских университетах Чехии,
                    Австрии и Словакии. Все, что потребуется от вас —
                    добросовестно учиться и выполнять задания педагога.
                    <br />
                    <br />
                    Никаких языковых барьеров: уже через год вы сможете без
                    проблем учиться в вузе, легко общаться с однокурсниками
                    и педагогами и будете чувствовать себя, как дома.
                    <br />
                    <br />
                    Мы быстро адаптируем вас к языковой среде, познакомим
                    с новой культурой и опишем все перспективы для учебы
                    и построения карьеры. С нами вы выучите язык, побываете
                    в разных странах Европы и обретете много новых друзей!
                  </>,
                  <>
                    Якісно та за короткий термін ми підготуємо вас до вступу
                    та навчання в європейських університетах Чехії, Австрії
                    та Словаччини. Все, що буде потрібно від вас — сумлінно
                    вчитися і виконувати завдання педагога.
                    <br />
                    <br />
                    Жодних мовних бар’єрів: вже через рік ви зможете без проблем
                    навчатися у виші, легко спілкуватися з однокурсниками
                    та педагогами та почуватиметеся, як удома.
                    <br />
                    <br />
                    Ми швидко адаптуємо вас до мовного середовища, познайомимо
                    з новою культурою та опишемо всі перспективи для навчання
                    та побудови кар’єри. З нами ви вивчите мову, побуваєте
                    в різних країнах Європи та знайдете багато нових друзів!
                  </>
                )}
              </Typography>
            }
          />
        }
      />

      <SectionContainerWrapperColorized accentColor="primary">
        <SectionContainer
          sectionTitle={{
            title: getTranslatedText(
              "GoStudy principles",
              "Nguyên tắc của chúng tôi",
              "Принципы GoStudy",
              "Принципи GoStudy"
            ),
            description: getTranslatedText(
              "We provide a high quality education and maximise the entry rate of applicants through our teaching principles.",
              "Chúng tôi cung cấp một chất giáo dục và tối đa mức giá nhập của ứng viên thông qua của chúng tôi, dạy nguyên tắc:",
              "Мы обеспечиваем высокое качество образования и максимальный процент поступления абитуриентов благодаря нашим принципам обучения.",
              "Ми забезпечуємо високу якість освіти та максимальний відсоток вступу абітурієнтів завдяки нашим принципам навчання."
            ),
          }}
        >
          <SectionTextCardList
            gridItemProps={{ xs: 12, sm: 4 }}
            cardVariant="v4"
            data={[
              {
                iconName: "Internet",
                title: getTranslatedText(
                  "Language immersion",
                  "Ngôn ngữ ngâm",
                  "Погружение в языковую среду",
                  "Занурення у мовне середовище"
                ),
                text: getTranslatedText(
                  "From the first days of lessons you hear correct Czech, Slovak, German speech — this allows you to quickly get rid of the accent. Interaction and immersion — a special methodology that implies deep immersion in the language environment and the fact that the learning process will be based on the interaction between he teacher and the student.",
                  "Từ những ngày đầu của bài học bạn nghe chính xác tiếng séc đức nói điều này cho phép anh để nhanh chóng thoát khỏi những giọng. Tương tác và ngâm — một phương pháp điều đó có nghĩa sâu ngâm trong môi trường ngôn ngữ và thực tế là quá trình học tập sẽ dựa trên những sự tương tác giữa các giáo viên và học sinh.",
                  "С первых дней занятий вы слышите правильную чешскую, словацкую, немецкую речь — это позволяет быстро избавиться от акцента. Interaction and immersion — специальная методика, которая подразумевает глубокое погружение в языковую среду и то, что учебный процесс будет строиться на взаимодействии преподавателя и студента.",
                  "З перших днів занять ви чуєте правильну чеську, словацьку, німецьку мову — це дозволяє швидко позбутися акценту. Interaction and immersion — спеціальна методика, яка передбачає глибоке занурення у мовне середовище та те, що навчальний процес будуватиметься на взаємодії викладача та студента."
                ),
              },
              {
                iconName: "HelpTogether",
                title: getTranslatedText(
                  "Openness and support",
                  "Cởi mở và hỗ trợ",
                  "Открытость и поддержка",
                  "Відкритість та підтримка"
                ),
                text: getTranslatedText(
                  "Moving away from home and living in a new country is always stressful. School supervisors are constantly in touch with students and are ready to answer any question, even if it is not directly related to the educational process. For example: how to apply for a travel pass, a bank card or how to make an appointment with a doctor?",
                  "di Chuyển đi từ nhà và sống trong một đất nước mới là luôn luôn căng thẳng. Trường học giám sát viên đang liên tục liên lạc với học sinh và đã sẵn sàng để trả lời các câu hỏi, ngay cả khi nó không trực tiếp liên quan đến quá trình giáo dục. Ví dụ: làm thế nào để áp dụng cho một vé du lịch, một thẻ ngân hàng hay làm thế nào để làm cho một cuộc hẹn với bác sĩ không?",
                  "Переезд из дома и жизнь в новой стране — всегда стресс. Кураторы школы постоянно находятся на связи со студентами и готовы ответить на любой вопрос, даже если он не касается напрямую учебного процесса. Например: как оформить проездной, банковскую карту или как записаться к врачу?",
                  "Переїзд із дому та життя в новій країні — завжди стрес. Куратори школи постійно перебувають на зв’язку зі студентами та готові відповісти на будь-яке запитання, навіть якщо воно не стосується безпосередньо навчального процесу. Наприклад: як оформити проїзний, банківську картку чи як записатися до лікаря?"
                ),
              },
              {
                iconName: "Smiley",
                title: getTranslatedText(
                  "More than just studying",
                  "Nhiều hơn là chỉ học",
                  "Больше, чем просто учеба",
                  "Більше, ніж просто навчання"
                ),
                text: getTranslatedText(
                  "Studying at GoStudy is not only a quality education, but also a real family. Don’t worry about not having time for fun because of your studies! With GoStudy you will have a lot of interesting things to do: sports competitions and trips, excursions, picnics, parties and quests.",
                  "Nghiên cứu tại GoStudy là không chỉ có một chất giáo dục, nhưng cũng có một gia đình thực sự. Đừng lo lắng về việc không có thời gian cho niềm vui vì nghiên cứu của bạn! Với GoStudy bạn sẽ có rất nhiều điều thú vị để làm: thi đấu thể thao và chuyến du ngoạn, những buổi dã ngoại, tiệc tùng và nhiệm vụ.",
                  "Обучение в GoStudy — это не только качественное образование, но и настоящая семья. Не переживайте, что из-за учебы не останется времени на развлечения! С GoStudy вас ждет много интересного: спортивные соревнования и поездки, экскурсии, пикники, вечеринки и квесты.",
                  "Навчання в GoStudy — це не лише якісна освіта, а й справжня родина. Не хвилюйтесь, що через навчання не залишиться часу на розваги! З GoStudy на вас чекає багато цікавого: спортивні змагання та поїздки, екскурсії, пікніки, вечірки та квести."
                ),
              },
            ]}
          />
        </SectionContainer>
      </SectionContainerWrapperColorized>

      <RoundedColorizedSectionV2
        accentColor="warning"
        gap={{ xs: "2rem", sm: "28px" }}
        sectionTitle={{
          renderTitle: (color) =>
            getTranslatedText(
              <>
                «For thousands of international students, it was{" "}
                <span style={{ color }}>GoStudy’s educational programmes</span>{" "}
                that started their studies in Europe»
              </>,
              <>
                «Đối với hàng nghìn sinh viên quốc tế, chính{" "}
                <span style={{ color }}>
                  các chương trình giáo dục của GoStudy
                </span>{" "}
                đã bắt đầu quá trình học tập của họ ở Châu Âu»
              </>,
              <>
                «Для тысяч иностранных студентов учеба в Европе началась именно
                с{" "}
                <span style={{ color }}>образовательных программ GoStudy</span>»
              </>,
              <>
                «Для тисяч іноземних студентів навчання в Європі розпочалося
                саме з 
                <span style={{ color }}>освітніх програм GoStudy</span>»
              </>
            ),
          description: getTranslatedText(
            "Mgr. Anna Čurdová, director of the GoStudy language centre in Prague, teacher, politician, honorary member of the Parliamentary Assembly of the Council of Europe and the Committee for European Integration.",
            "Đức ông Anna Čurdová, giám đốc trung tâm ngôn ngữ GoStudy ở Prague, giáo viên, chính trị gia, thành viên danh dự của Hội đồng Nghị viện của Hội đồng Châu Âu và Ủy ban Hội nhập Châu Âu.",
            "Анна Чурдова, директор зыкового центра GoStudy в Праге, педагог, политик, почетный член Парламентской ассамблеи Совета Европы и комитета по Европейской интеграции.",
            "Mgr. Anna Čurdová, директор мовного центру GoStudy у Празі, педагог, політик, почесний член Парламентської асамблеї Ради Європи та Комітету з Європейської інтеграції."
          ),
        }}
        image={{
          src: `${cdnUrl}/AboutsUsNew/FourthSection.png`,
          width: 440,
          height: 410,
        }}
        mobileImage={{
          src: `${cdnUrl}/AboutsUsNew/FourthSection_mobile.png`,
          width: 303,
          height: 304,
        }}
      />

      <SliderSection2
        gradientBg
        sectionTitle={{
          title: getTranslatedText(
            "GoStudy Reviews",
            "GoStudy Đánh Giá",
            "Отзывы о GoStudy",
            "Відгуки про GoStudy"
          ) as string,
          description: getTranslatedText(
            "What students and alumni say about the school.",
            "Những gì cựu sinh viên nói về trường",
            "Что говорят о школе студенты и выпускники.",
            "Що говорять про школу студенти та випускники."
          ),
        }}
        accentColor="warning"
        data={[
          {
            authorSx: {
              fontWeight: 600,
              fontFamily: montserratFamily,
              fontSize: { xs: "16px", sm: "20px" },
              lineHeight: { xs: "22.88px", sm: "28.8px" },
            },
            descriptionSx: {
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "16px" },
              lineHeight: { xs: "20.02px", sm: "24px" },
            },
            avatar: `${cdnUrl}/AboutsUsNew/FifthSection_1_${
              lang === "vi" ? "en" : lang
            }.png?tx=c_fill,q_100`,
            author: getTranslatedText(
              "Adriano",
              "Adriano",
              "Валерия Гращенко",
              "Валерія Гращенко"
            ) as string,
            description: getTranslatedText(
              "21, GoStudy student from Italy",
              "21, Sinh viên GoStudy đến từ Ý",
              "Выпускница GoStudy, студентка факультета архитектуры ЧВУТ",
              "Випускниця GoStudy, студентка факультету архітектури ЧВУТ"
            ) as string,
            text: getTranslatedText(
              "The foreign language was easy for me in general, but it was difficult to master specialised terminology in Slovak. And of course, I fought with the accent! Thank you very much to the teachers for their patience — I knew my questions would always be answered, even if I thought they were silly.",
              "Ngoại ngữ nói chung đối với tôi thì dễ, nhưng lại rất khó để nắm vững các thuật ngữ chuyên ngành bằng tiếng Slovak. Và tất nhiên, tôi đã đấu tranh với giọng nói! Cảm ơn các giáo viên rất nhiều vì sự kiên nhẫn của họ - tôi biết câu hỏi của tôi sẽ luôn được giải đáp, ngay cả khi Tôi nghĩ họ thật ngớ ngẩn.",
              "Очень сильно на протяжении всей подготовки к поступлению помогали преподаватели и моя группа. Между нами сложились дружеские отношения и было не так сложно, как представлялось, привыкнуть к жизни вдали от дома. Рада, что выбрала именно GoStudy для подготовки и учусь сейчас там, где мечтала.",
              "Дуже сильно протягом усієї підготовки до вступу допомагали викладачі та моя група. Між нами склалися дружні стосунки і було не так складно, як здавалося, звикнути до життя далеко від дому. Я швидко адаптувалася і зосередилася на навчанні, що чудово — в ЧВУТ вступити дуже непросто. Рада, що обрала саме GoStudy для підготовки і навчаюсь зараз там, де мріяла."
            ) as string,
          },
          {
            avatar: `${cdnUrl}/AboutsUsNew/FifthSection_2_${
              lang === "vi" ? "en" : lang
            }.png?tx=c_fill,q_100`,
            author: getTranslatedText(
              "Diego",
              "Diego",
              "Владислава Прилутская",
              "Марина Островська"
            ) as string,
            description: getTranslatedText(
              "20, GoStudy student from Spain",
              "20, Sinh viên GoStudy đến từ Tây Ban Nha",
              "Студентка годовых курсов GoStudy в Праге",
              "Випускниця річних курсів GoStudy у Празі"
            ) as string,
            text: getTranslatedText(
              "Thanks to GoStudy, I learnt German and was able to go to Austria to study, where I graduated from university and now work as a doctor. At home, I could never have dreamed of such prospects as I have now. Thanks to the GoStudy teachers for helping me learn the language so quickly and so well!",
              "Nhờ GoStudy, tôi đã học được tiếng Đức và được sang Áo học tập, nơi tôi đã tốt nghiệp đại học và hiện đang làm bác sĩ. Ở quê nhà, tôi chưa bao giờ có thể mơ tới những viễn cảnh như bây giờ. Cảm ơn các thầy cô GoStudy đã giúp em học ngôn ngữ rất nhanh và tốt!",
              "Мне нравится методика, по которой мы изучаем язык. Занятия в школе довольно интенсивны, но сложные грамматические упражнения чередуются с более простыми лексическими заданиями... Я не сомневаюсь, что к моменту сдачи экзаменов я достигну как минимум уровня В2.",
              "Навчалася у мовній школі у 2015 році, дуже задоволена якістю та методами навчання. У мене були прекрасні вчителі, які пояснювали все дуже доступно та завжди допомагали дійсно зрозуміти ту чи іншу тему. За рік вивчила чеську мову до рівня B2 та вступила до бажаного університету. Протягом усього року нас підтримували та допомагали куратори з розв’язанням різних питань та проблем. Все завжди було під контролем, всі документи: для нострифікації, для візи, для вступу до університету завжди перевірялися спеціалістами."
            ) as string,
          },
          {
            avatar: `${cdnUrl}/AboutsUsNew/FifthSection_3_${
              lang === "vi" ? "en" : lang
            }.png?tx=c_fill,q_100`,
            author: getTranslatedText(
              "Jaya",
              "Jaya",
              "Алишер Сарсынбаев",
              "Олександр Огієнко"
            ) as string,
            description: getTranslatedText(
              "19, GoStudy student from India",
              "19, sinh viên GoStudy đến từ Ấn Độ",
              "Выпускник годовых курсов GoStudy в Праге",
              "Випускник річних курсів GoStudy у Празі, студент ВШЕ"
            ) as string,
            text: getTranslatedText(
              "Leaving home was very difficult, I was worried about how I would feel in a new place. Thank you very much for the support of the GoStudy mentors! They helped me to adapt quickly, to understand what and how, and not to waste time on unnecessary worries, but to learn.",
              "Việc rời nhà rất khó khăn, tôi lo lắng không biết mình sẽ cảm thấy thế nào ở một nơi ở mới. Cảm ơn bạn rất nhiều vì sự hỗ trợ của các cố vấn của GoStudy! Họ đã giúp tôi thích nghi nhanh chóng, hiểu được điều gì và như thế nào, đồng thời không lãng phí thời gian vào những lo lắng không cần thiết mà còn để học hỏi.",
              "GoStudy обеспечивает такие условия обучения, которые другие языковые школы не могут предоставить. Я более, чем доволен своим выбором. Кураторы школы помогают во всех вопросах, настолько, насколько тебе это нужно.",
              "Курси GoStudy пропонують дуже хорошу базу для побутового спілкування. Мені мови погано даються, тому ще до приїзду до Чехії пішов на курси чеської вдома. Однак на практиці виявилося, що за тиждень у GoStudy ми пройшли більше, ніж за три місяці у Києві. При цьому курси в Чехії для мене були не стільки про мову, скільки про знайомство та атмосферу. Без курсів було набагато складніше освоїтися в університеті. Звичайно, там є студенти, які говорять твоєю мовою, та їх дуже мало."
            ) as string,
          },
          {
            avatar: `${cdnUrl}/AboutsUsNew/FifthSection_4_${
              lang === "vi" ? "en" : lang
            }.png?tx=c_fill,q_100`,
            author: getTranslatedText(
              "Ngoc Anh",
              "Ngoc Anh",
              "Алена Дроздова",
              "Єлизавета Долбунова"
            ) as string,
            description: getTranslatedText(
              "25, GoStudy student from Vietnam",
              "25, Sinh viên GoStudy đến từ Việt Nam",
              "Выпускница годовых курсов GoStudy, окончила ВШЭ в Праге",
              "Випускниця річних курсів GoStudy"
            ) as string,
            text: getTranslatedText(
              "I learnt Czech first online and then came to Prague for a course. My goal was to enter the Higher School of Economics. I succeeded, now I am already in a Master’s programme and I have travelled several times to other countries as an exchange student. I am very glad that I decided to trust GoStudy in my time.",
              "Đầu tiên tôi học tiếng Séc trực tuyến và sau đó đến Praha để tham gia một khóa học. Mục tiêu của tôi là vào được Trường Kinh tế Cao cấp. Tôi đã thành công, hiện tôi đã tham gia chương trình Thạc sĩ và tôi đã đi du lịch nhiều lần đến các quốc gia khác với tư cách là một sinh viên trao đổi. Tôi rất vui vì đã quyết định tin tưởng GoStudy trong thời gian của mình.",
              "Когда я принимала решение об учебе в Чехии, это был своего рода «кот в мешке» — в Европе я никогда не бывала. Но ведь нужно рисковать и познавать новое — пока мы молоды и перед нами открыты все пути! Я успешно окончила факультет финансов и статистики в ВШЭ и это только начало моего пути. Спасибо, что помогли осуществить мечту.",
              "У Празі я вже 2 з половиною роки і поїхати саме до цієї школи було найкращою моєю ідеєю. Рішення було дуже різке і необдумане, але як же все склалося. Додаткові заняття з математики, англійської — все це було саме те, що потрібно аби я вступила до універа і я це зробила. І зараз я навчаюсь у ЧЗУ і складаю вже третю мою сесію). Зараз ми і надалі спілкуємося з GoStudy. Навіть після закінчення курсу чеської я писала куратору і він залюбки допоміг. Тож це був найкращий час і найкращі люди поруч."
            ) as string,
          },
        ]}
      />

      <SectionContainer>
        <SectionTwoColumnsContainer
          disableContainerPaddings
          sectionContainerSx={{
            alignItems: "center",
            marginBottom: { xs: "2rem", sm: "3.75rem" },
          }}
          firstColumn={
            <SectionTitle
              preTitle={
                getTranslatedText(
                  "Breaking down barriers",
                  "Phá vỡ các rào cản",
                  "Разрушаем барьеры",
                  "Руйнуємо бар'єри"
                ) as string
              }
              title={getTranslatedText(
                "GoStudy — the path to education around the world",
                "GoStudy — các con đường để giáo dục trên khắp thế giới",
                "GoStudy — путь к образованию по всему миру",
                "GoStudy — шлях до освіти по всьому світу"
              )}
            />
          }
          secondColumn={
            <Typography sx={{ fontSize: "1.125rem", color: "rgba(0,0,0,.54)" }}>
              {getTranslatedText(
                "GoStudy opens the way to quality education for students from all corners of the world. Thanks to us, the world is graduating new talents who play a significant role in scientific and economic progress.",
                "GoStudy mở đường cho chất giáo dục cho sinh viên từ khắp nơi trên thế giới. Nhờ chúng tôi, thế là tốt nghiệp tài năng mới, những người chơi một vai trò quan trọng trong khoa học kinh tế và tiến bộ.",
                "GoStudy открывает студентам со всех уголков света путь к качественному образованию. Благодаря нам в мир выходят дипломированные специалисты, новые таланты, которые играют заметную роль в научном и экономическом прогрессе.",
                "GoStudy відкриває студентам з усіх куточків світу шлях до якісної освіти. Завдяки нам у світ виходять дипломовані фахівці, нові таланти, які відіграють помітну роль у науковому та економічному прогресі."
              )}
            </Typography>
          }
        />

        <ImageWithColorizedBorder
          imageSx={{
            minHeight: "12rem",
            objectFit: "cover",
          }}
          image={{
            src: `${cdnUrl}/AboutUsLanding/sixthSection.png`,
            width: 1120,
            height: 408,
          }}
        />
      </SectionContainer>

      <SectionContainerWrapperColorized
        accentColor="primary"
        overlayVariant="v10"
      >
        <SectionTwoColumnsContainer
          firstColumn={
            <>
              <SectionTitle
                accentColor="primary"
                wrapperSx={{
                  mb: { xs: "2rem", sm: "2.5rem" },
                }}
                renderTitle={(color) =>
                  getTranslatedText(
                    <>
                      Start <span style={{ color }}>building your career</span>{" "}
                      by studying in Europe
                    </>,
                    <>
                      Bắt đầu{" "}
                      <span style={{ color }}>xây dựng sự nghiệp của bạn</span>{" "}
                      bằng cách học tập tại Châu Âu
                    </>,
                    <>
                      Начни <span style={{ color }}>строить карьеру</span>{" "}
                      с учебы в Европе
                    </>,
                    <>
                      Почни <span style={{ color }}>будувати кар’єру</span>{" "}
                      з навчання у Європі
                    </>
                  )
                }
                description={getTranslatedText(
                  "Demand on the labour market and high professionalism — as a result of studying at GoStudy and a European university.",
                  "Nhu cầu về thị trường lao động và tính chuyên nghiệp cao — là kết quả của việc học tại GoStudy và một đại học Châu Âu.",
                  "Востребованность на рынке труда и высокий профессионализм — как результат обучения в GoStudy и европейском вузе.",
                  "Попит на ринку праці та високий професіоналізм — як результат навчання у GoStudy та європейському виші."
                )}
              />
              <ImageWithColorizedBorder
                accentColor="primary"
                image={{
                  src: `${cdnUrl}/CzechHigherEducation/fourthSection.png`,
                  width: 514,
                  height: 304,
                }}
              />
            </>
          }
          secondColumn={
            <Stack sx={{ gap: { xs: "32px", sm: "40px" } }}>
              <Typography
                sx={{
                  fontFamily: montserratFamily,
                  fontWeight: 600,
                  fontSize: { xs: "20px", sm: "28px" },
                  lineHeight: { xs: "28.8px", sm: "36.96px" },
                }}
              >
                {getTranslatedText(
                  "Our students:",
                  "Sinh viên của chúng tôi:",
                  "Наши студенты: ",
                  "Наші студенти:"
                )}
              </Typography>
              <Stack sx={{ gap: "20px" }}>
                {[
                  getTranslatedText(
                    "Know at least one more language than their European colleagues",
                    "biết thêm ít nhất một ngôn ngữ hơn của phụ Nữ đồng nghiệp",
                    "Знают как минимум на один язык больше, чем коллеги-европейцы",
                    "Знають як мінімум на одну мову більше, ніж колеги-європейці"
                  ),
                  getTranslatedText(
                    "Are hard-working and well-trained",
                    "dễ dàng thích nghi trong một môi trường đa văn hóa",
                    "Трудолюбивы и хорошо обучаемы",
                    "Працьовиті і добре навчаються"
                  ),
                  getTranslatedText(
                    "Adapt easily in a multicultural environment",
                    "đang làm việc chăm chỉ và được đào tạo",
                    "Легко адаптируются в мультикультурной среде",
                    "Легко адаптуються у мультикультурному середовищі"
                  ),
                  getTranslatedText(
                    "Adapt quickly to changes in the workplace",
                    "thích ứng nhanh với những thay đổi trong những nơi làm việc",
                    "Быстро привыкают к переменам в работе",
                    "Швидко звикають до змін у роботі"
                  ),
                ].map((item) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: "16px", sm: "16px" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: "0",
                        borderRadius: "40px",
                        backgroundColor: "#ffffff",
                        width: { xs: "40px", sm: "52px" },
                        height: { xs: "40px", sm: "52px" },
                      }}
                    >
                      <CheckRounded
                        sx={{
                          width: { xs: "24px", sm: "32px" },
                          height: { xs: "24px", sm: "32px" },
                          color: "primary.main",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: montserratFamily,
                        fontWeight: 600,
                        fontSize: { xs: "16px", sm: "18px" },
                        lineHeight: { xs: "22.88px", sm: "25.56px" },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "18px", sm: "18px" },
                  lineHeight: { xs: "27.36px", sm: "27.36px" },
                  color: "text.secondary",
                }}
              >
                {getTranslatedText(
                  "With a degree from a European university and knowledge of a foreign language, you will choose from excellent offers on the labour market and will never be unemployed.",
                  "Với một mức độ từ một phụ nữ châu u, đại học và kiến thức của một ngoại ngữ, bạn sẽ chọn từ tuyệt vời cung cấp trên thị trường lao động, và sẽ không bao giờ bị thất nghiệp.",
                  "Имея диплом европейского вуза и знание иностранного языка, на рынке труда вы будете выбирать из отличных предложений и никогда не останетесь без работы.",
                  "Маючи диплом європейського вишу та знання іноземної мови, на ринку праці ви обиратимете з відмінних пропозицій і ніколи не залишитеся без роботи."
                )}
              </Typography>
            </Stack>
          }
        />
      </SectionContainerWrapperColorized>

      <SectionContainerWrapperColorized
        accentColor="primary"
        overlayVariant="v11"
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <SectionContainer
          sectionTitle={{
            renderTitle: (color) =>
              getTranslatedText(
                <>
                  Our <span style={{ color }}>offices</span>
                </>,
                <>
                  <span style={{ color }}>Văn phòng </span> của chúng tôi
                </>,
                <>
                  Наши <span style={{ color }}>офисы</span>
                </>,
                <>
                  Наші <span style={{ color }}>офіси</span>
                </>
              ),
            description: getTranslatedText(
              "You can study at one of our centres in Europe or choose an online format.",
              "Bạn có thể học tại một trong các trung tâm của chúng tôi ở Châu Âu hoặc chọn hình thức trực tuyến.",
              "Вы можете учиться в одном из наших центров в Европе или выбрать онлайн-формат.",
              "Ви можете навчатися в одному з наших центрів Європи або вибрати онлайн-формат."
            ),
          }}
        >
          <Stack
            sx={{
              gap: { xs: "16px", sm: "20px" },
            }}
          >
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "16px", sm: "20px" },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  boxShadow: "0px 2px 28px 0px rgba(11, 78, 131, 0.15)",
                  borderRadius: "20px",
                  padding: { xs: "16px", sm: "24px" },
                  backgroundColor: "#ffffff",
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "382px" },
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserratFamily,
                    fontSize: { xs: "20px", sm: "20px" },
                    fontWeight: "600",
                    lineHeight: { xs: "28.8px", sm: "28.8px" },
                    marginBottom: { xs: "12px", sm: "12px" },
                  }}
                >
                  {getTranslatedText(
                    "Head office of the language school",
                    "Trụ sở chính của trường ngoại ngữ",
                    "Главный офис языковой школы",
                    "Головний офіс мовної школи"
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "16px" },
                    fontWeight: "400",
                    lineHeight: { xs: "24px", sm: "28.8px" },
                    marginBottom: { xs: "24px", sm: "32px" },
                    color: "text.secondary",
                  }}
                >
                  {getTranslatedText(
                    "The main office of the GoStudy National Examination Language School is located in Prague, where you can apply directly for study programmes.",
                    "Văn phòng chính của Trường Ngôn ngữ Kiểm tra Quốc gia GoStudy đặt tại Praha, nơi bạn có thể đăng ký trực tiếp vào các chương trình học.",
                    "С правом проведения государственного экзамена GoStudy находится в Праге, куда вы можете напрямую обратиться для оформления на учебные программы.",
                    "З правом проведення державного іспиту GoStudy знаходиться у Празі, куди ви можете звернутися безпосередньо для оформлення на навчальні програми."
                  )}
                </Typography>
                <Box
                  sx={{
                    height: { xs: "240px", sm: "100%" },
                    flexGrow: "1",
                    borderRadius: "20px",
                    background: `url(${cdnUrl}/AboutsUsNew/EigthSection_1.png)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                {/* {getPicture(
                `${cdnUrl}/AboutsUsNew/EigthSection_1.png`,
                334,
                351,
                {
                  borderRadius: "20px",
                  width: "100%",
                  maxWidth: "334px",
                  maxHeight: { xs: "240px", sm: "unset" },
                },
                {
                  borderRadius: "20px",
                  width: "100%",
                  maxWidth: "334px",
                  maxHeight: { xs: "240px", sm: "unset" },
                  objectFit: "cover",
                }
              )} */}
              </Box>
              <Stack
                sx={{
                  boxShadow: "0px 2px 28px 0px rgba(11, 78, 131, 0.15)",
                  borderRadius: "20px",
                  padding: { xs: "16px", sm: "24px" },
                  backgroundColor: "#ffffff",
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "750px" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserratFamily,
                    fontSize: { xs: "20px", sm: "20px" },
                    fontWeight: "600",
                    lineHeight: { xs: "28.8px", sm: "28.8px" },
                    marginBottom: { xs: "12px", sm: "12px" },
                  }}
                >
                  {getTranslatedText(
                    "In Brno, Bratislava and Vienna",
                    "Ở Brno, Bratislava và Vienna",
                    "В Брно, Братиславе и Вене",
                    "У Брно, Братиславі та Відні"
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "16px" },
                    fontWeight: "400",
                    lineHeight: { xs: "24px", sm: "28.8px" },
                    marginBottom: { xs: "24px", sm: "32px" },
                    color: "text.secondary",
                  }}
                >
                  {getTranslatedText(
                    "There are branches of the school.",
                    "Có các chi nhánh của trường học.",
                    "Работают филиалы школы.",
                    "Працюють філії школи."
                  )}
                </Typography>
                {getPicture(
                  `${cdnUrl}/AboutsUsNew/EigthSection_2.png`,
                  702,
                  216,
                  {
                    borderRadius: "20px",
                    marginBottom: { xs: "12px", sm: "20px" },
                    width: "100%",
                    maxWidth: "702px",
                    minHeight: { xs: "192px", sm: "216px" },
                  },
                  {
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "702px",
                    minHeight: { xs: "192px", sm: "216px" },
                    objectFit: "cover",
                  }
                )}
                <Stack
                  sx={{
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: "12px", sm: "19px" },
                  }}
                >
                  {getPicture(
                    `${cdnUrl}/AboutsUsNew/EigthSection_3.png`,
                    341,
                    216,
                    {
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "341px",
                      minHeight: { xs: "192px", sm: "216px" },
                      height: { xs: "192px", sm: "216px" },
                    },
                    {
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "341px",
                      minHeight: { xs: "192px", sm: "216px" },
                      height: { xs: "192px", sm: "216px" },
                      objectFit: "cover",
                    }
                  )}
                  {getPicture(
                    `${cdnUrl}/AboutsUsNew/EigthSection_4.png`,
                    341,
                    216,
                    {
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "341px",
                      minHeight: { xs: "192px", sm: "216px" },
                      height: { xs: "192px", sm: "216px" },
                    },
                    {
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "341px",
                      minHeight: { xs: "192px", sm: "216px" },
                      height: { xs: "192px", sm: "216px" },
                      objectFit: "cover",
                    }
                  )}
                </Stack>
              </Stack>
            </Stack>
            <Box
              sx={{
                boxShadow: "0px 2px 28px 0px rgba(11, 78, 131, 0.15)",
                borderRadius: "20px",
                padding: { xs: "16px", sm: "24px" },
                backgroundColor: "#ffffff",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: montserratFamily,
                  fontSize: { xs: "20px", sm: "20px" },
                  fontWeight: "600",
                  lineHeight: { xs: "28.8px", sm: "28.8px" },
                  marginBottom: { xs: "12px", sm: "12px" },
                }}
              >
                {getTranslatedText(
                  "You can also prepare for your studies from home, in parallel with your 11th grade studies",
                  "Bạn cũng có thể chuẩn bị cho việc học ở nhà, song song với việc học lớp 11",
                  "Вы также можете готовиться к поступлению из дома, параллельно с учебой в 11 классе",
                  "Ви також можете готуватися до вступу з дому, паралельно з навчанням в 11 класі"
                )}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px" },
                  fontWeight: "400",
                  lineHeight: { xs: "24px", sm: "28.8px" },
                  // marginBottom: { xs: "24px", sm: "32px" },
                  color: "text.secondary",
                }}
              >
                {getTranslatedText(
                  "For this purpose we have developed an online programme that is just as effective as face-to-face study.",
                  "Vì mục đích này, chúng tôi đã phát triển một chương trình trực tuyến có hiệu quả tương đương với việc học trực tiếp.",
                  "Для этого мы разработали онлайн-программу, которая не уступает по эффективности очному обучению.",
                  "Для цього ми розробили онлайн-програму, яка не поступається ефективністю очному навчанню."
                )}
              </Typography>
            </Box>
          </Stack>
        </SectionContainer>
      </SectionContainerWrapperColorized>

      {(lang === "ru" || lang === "uk") && (
        <SectionContainer
          sectionTitle={{
            renderTitle: (color) =>
              getTranslatedText(
                <>
                  <span style={{ color }}>Познакомьтесь с GoStudy</span>{" "}
                  поближе!
                </>,
                <>
                  <span style={{ color }}>Познакомьтесь с GoStudy</span>{" "}
                  поближе!
                </>,
                <>
                  <span style={{ color }}>Познакомьтесь с GoStudy</span>{" "}
                  поближе!
                </>,
                <>
                  <span style={{ color }}>Ознайомтеся з GoStudy</span> ближче!
                </>
              ),
            description: getTranslatedText(
              "Бесплатные уроки и вебинары от наших экспертов.",
              "Бесплатные уроки и вебинары от наших экспертов.",
              "Бесплатные уроки и вебинары от наших экспертов.",
              "Безкоштовні уроки та вебінари від наших експертів."
            ),
          }}
        >
          <SectionTextCardList
            accentColor="primary"
            gridItemProps={{ xs: 12, sm: 4 }}
            cardVariant="v4"
            data={[
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "10px", sm: "12px" },
                      borderRadius: "12px",
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      backgroundColor: "#FFFFFF",
                      "& svg": {
                        width: {
                          xs: "20px",
                          sm: "24px",
                        },
                        height: {
                          xs: "20px",
                          sm: "24px",
                        },
                      },
                      "& svg path": { fill: "rgba(11, 78, 131, 1)" },
                      marginBottom: { xs: "16px", sm: "20px" },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                sx: {
                  backgroundColor: "secondary.main",
                  minHeight: {
                    xs: "unset",
                    sm:
                      lang === "uk"
                        ? "276px"
                        : lang === "ru"
                        ? "288px"
                        : "302px",
                  },
                  height: "unset",
                },
                iconName: "step1",
                title: getTranslatedText(
                  "Language immersion",
                  "Ngôn ngữ ngâm",
                  "Благодаря высококвалифицированным педагогам, обучение в GoStudy эффективно — и мы рады дать вам возможность бесплатно познакомиться с тем, как это у нас происходит.",
                  "Завдяки висококваліфікованим педагогам, навчання в GoStudy є ефективним — і ми раді дати вам можливість безкоштовно познайомитися з тим, як це у нас відбувається."
                ),
                link: {
                  title: getTranslatedText(
                    "",
                    "",
                    "Уроки чешского",
                    "Уроки чеської"
                  ) as string,
                  text: getTranslatedText(
                    "",
                    "",
                    "Подробнее",
                    "Детальніше"
                  ) as string,
                  to: getTranslatedText(
                    "",
                    "",
                    "https://www.gostudy.cz/besplatnye-uroki",
                    "https://www.gostudy.cz/uk/besplatnye-uroki"
                  ) as string,
                },
              },
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "10px", sm: "12px" },
                      borderRadius: "12px",
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      backgroundColor: "#FFFFFF",
                      "& svg path": { fill: "rgba(11, 78, 131, 1)" },
                      marginBottom: { xs: "16px", sm: "20px" },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                sx: {
                  backgroundColor: "secondary.main",
                  minHeight: {
                    xs: "unset",
                    sm:
                      lang === "uk"
                        ? "276px"
                        : lang === "ru"
                        ? "288px"
                        : "302px",
                  },
                  height: "unset",
                },
                iconName: "step2",
                title: getTranslatedText(
                  "Openness and support",
                  "Cởi mở và hỗ trợ",
                  "Мы проводим очные информационные встречи, вебинары, стримы с педагогами школы и даем уроки чешского и немецкого.",
                  "Ми проводимо очні інформаційні зустрічі, вебінари, стріми з педагогами школи та даємо уроки чеської та німецької."
                ),
                link: {
                  title: getTranslatedText(
                    "",
                    "",
                    "Уроки немецкого",
                    "Уроки німецької"
                  ) as string,
                  text: getTranslatedText(
                    "",
                    "",
                    "Подробнее",
                    "Детальніше"
                  ) as string,
                  to: getTranslatedText(
                    "",
                    "",
                    "https://www.gostudy.cz/besplatnye-uroki-nemeckogo",
                    "https://www.gostudy.cz/uk/besplatnye-uroki-nemeckogo"
                  ) as string,
                },
              },
              {
                renderIcon: (icon) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xs: "10px", sm: "12px" },
                      borderRadius: "12px",
                      width: { xs: "40px", sm: "48px" },
                      height: { xs: "40px", sm: "48px" },
                      backgroundColor: "#FFFFFF",
                      "& svg path": { fill: "rgba(11, 78, 131, 1)" },
                      marginBottom: { xs: "16px", sm: "20px" },
                    }}
                  >
                    {icon}
                  </Box>
                ),
                sx: {
                  backgroundColor: "secondary.main",
                  minHeight: {
                    xs: "unset",
                    sm:
                      lang === "uk"
                        ? "276px"
                        : lang === "ru"
                        ? "288px"
                        : "302px",
                  },
                  height: "unset",
                },
                iconName: "step3",
                title: getTranslatedText(
                  "More than just studying",
                  "Nhiều hơn là chỉ học",
                  "Вы бесплатно освоите языковую базу и узнаете все подробности об обучении в вузах Чехии, Словакии и Австрии.",
                  "Ви безкоштовно освоїте мовну базу та дізнаєтесь усі подробиці про навчання у вишах Чехії, Словаччини та Австрії."
                ),
                link: {
                  title: getTranslatedText(
                    "",
                    "",
                    "Вебинары",
                    "Вебінари"
                  ) as string,
                  text: getTranslatedText(
                    "",
                    "",
                    "Подробнее",
                    "Детальніше"
                  ) as string,
                  to: getTranslatedText(
                    "",
                    "",
                    "https://www.gostudy.cz/vebinary-s-ekspertami",
                    "https://www.gostudy.cz/uk/vebinary-s-ekspertami"
                  ) as string,
                },
              },
            ]}
          />
        </SectionContainer>
      )}

      <AccordionSection
        overlaySx={{
          "& svg": {
            display: { xs: "none", sm: "block" },
            "& path": { stroke: "rgba(11, 78, 131, 0.3)" },
          },
        }}
        title={
          getTranslatedText(
            "FAQ",
            "Những Câu Hỏi Thường",
            "Часто задаваемые вопросы",
            "Запитання, що часто ставляться"
          ) as string
        }
        description={
          getTranslatedText(
            "We answer frequently asked questions about our school and the process.",
            "Chúng tôi trả lời các câu hỏi thường gặp về trường học của chúng tôi và quá trình học tập.",
            "Мы отвечаем на часто задаваемые вопросы о нашей школе и процессе обучения.",
            "Ми відповідаємо на поширені запитання про нашу школу та процес."
          ) as string
        }
        data={[
          {
            title: getTranslatedText(
              "I am moving to 11th grade, can I prepare in parallel with my main studies in an online course to enter a European university?",
              "Tôi đang di chuyển đến lớp 11, tôi có thể chuẩn bị song song với chính của tôi nghiên cứu trong một khóa học trực tuyến để nhập vào một trường đại học châu u?",
              "Я перехожу в 11 класс, могу ли я параллельно с основной учебой готовиться на онлайн курсе к поступлению в европейский вуз?",
              "Я переходжу до 11 класу, чи можу я паралельно з основним навчанням готуватися на онлайн-курсі до вступу до європейського вишу?"
            ) as string,
            text: getTranslatedText(
              "Now it is really possible to prepare for higher education in Europe online. Previously, applicants had to be in the country to take the nostrification and entrance exams, as well as to learn the language. Nowadays, learning a language online is just as good as learning it offline in a classroom. Many universities themselves recognise the certificates of foreign applicants, and it is possible to apply for internal recognition of the certificate remotely. In addition, a number of universities accept entrance exams online or recruit students without exams at all.",
              "Bây giờ nó là thực sự có thể để chuẩn bị cho giáo dục đại học ở châu u trực tuyến. Trước đây, các ứng viên đã có được các quốc gia để lấy chứng nhận vắn và các kỳ thi vào, cũng như phải học các ngôn ngữ. Ngày nay, học một ngôn ngữ trực tuyến chỉ là tốt như học nó ẩn trong một lớp học. Nhiều trường đại học mình nhận ra giấy chứng nhận của các ứng viên nước ngoài, và nó có thể được áp dụng cho công nhận, giấy chứng từ xa. Ngoài ra, một số trường đại học chấp nhận thi tuyển trực tuyến hoặc tuyển sinh viên, các kỳ thi mà không có ở tất cả.",
              "Теперь в вузы Европы действительно можно подготовиться онлайн. Ранее абитуриент обязательно должен был находиться на территории страны, чтобы сдать нострификационные и вступительные экзамены, а также выучить язык. Сейчас изучение языка онлайн ничем не уступает обучению офлайн в классе. Многие университеты сами признают аттестаты иностранных абитуриентов, причем оформить внутреннее признание аттестата можно дистанционно. Кроме того, ряд вузов принимает вступительные экзамены онлайн или вообще набирает студентов без экзаменов.",
              "Тепер до вишів Європи справді можна підготуватися онлайн. Раніше абітурієнт обов’язково мав перебувати на території країни, щоб скласти нострифікаційні та вступні іспити, а також вивчити мову. Зараз вивчення мови онлайн нічим не поступається навчанню офлайн у класі. Багато університетів самі визнають атестати іноземних абітурієнтів, причому оформити внутрішнє визнання атестата можна дистанційно. Крім того, низка вишів приймає вступні іспити онлайн або взагалі набирає студентів без іспитів."
            ) as string,
          },
          {
            title: getTranslatedText(
              "How much does a one-year language course cost?",
              "Bao nhiêu một năm ngôn ngữ nhiên chi phí?",
              "Сколько стоит годовой языковой курс?",
              "Скільки коштує річний курс?"
            ) as string,
            text: getTranslatedText(
              "From 4000 to 10000 euros, depending on the city of study and the number of hours. This price includes comprehensive support: visa support, assistance in the nostrification of the certificate, submission of documents to universities, counselling on admission. You can pay for your studies on a monthly basis.",
              "Từ 4000 đến 10.000 euro, tùy thuộc vào các thành phố của nghiên cứu và số giờ. Này giá bao gồm hỗ trợ toàn diện: hỗ trợ visa, hỗ trợ trong sự chứng nhận vắn của các giấy nộp tài liệu cho trường đại học, tư vấn tuyển sinh. Bạn có thể trả tiền cho nghiên cứu của bạn hàng tháng.",
              "От 4000 до 10000 евро, в зависимости от города обучения и количества часов. В эту стоимость входит комплексное сопровождение: визовая поддержка, помощь в нострификации аттестата, подача документов в вузы, консультации по поступлению. Вы можете оплачивать учебу помесячно.",
              "Від 4000 до 10000 євро, залежно від міста навчання та кількості годин. У цю вартість входить комплексний супровід: візова підтримка, допомога у нострифікації атестата, подання документів до вишів, консультації щодо вступу. Ви можете оплачувати навчання щомісячно."
            ) as string,
            link:
              lang === "ru"
                ? {
                    text: "Подробнее",
                    to: "https://www.gostudy.cz/vse-programmyi",
                  }
                : lang === "uk"
                ? {
                    text: "Детальніше",
                    to: "https://www.gostudy.cz/uk/vse-programmyi",
                  }
                : undefined,
          },
          {
            title: getTranslatedText(
              "I am unable to attend the course yet due to family reasons, can I enrol now?",
              "tôi không thể tham gia các khóa học sơ do để gia đình lý do, tôi có thể đăng ký ở đâu?",
              "Я живу в России и пока не могу приехать в Европу, могу ли я сейчас записаться на обучение?",
              "Я живу в Україні і поки не можу приїхати до Європи за сімейними обставинами, чи зараз я можу записатися на навчання?"
            ) as string,
            text: getTranslatedText(
              "Yes, you can apply to study or start studying online straight away while the visa issue is being sorted out. We have combined programmes in the Czech Republic and Slovakia, where the first semester is online and the second semester is face-to-face in Prague or Bratislava, and a wide range of online courses for entry to universities in Austria.",
              "Có, bạn có thể áp dụng để nghiên cứu hoặc bắt đầu học trực tuyến thẳng đi trong khi các visa vấn đề đang được sắp xếp. Chúng ta đã kết hợp lại chương trình trong nước, nơi người đầu tiên học kỳ đang trực tuyến và học kỳ thứ hai là mặt-đối-mặt ở Praha hoặc Tại, và một loạt các khóa học trực tuyến cho vào trường đại học ở Áo.",
              "Да, вы можете подать заявку на обучение или сразу начать учиться онлайн, пока решается визовый вопрос. У нас есть комбинированные программы в Чехии и Словакии, когда первый семестр — онлайн-обучение, а второй очно в Праге или Братиславе, и широкий выбор онлайн-курсов для поступления в вузы Австрии.",
              "Так, ви можете подати заявку на навчання або відразу почати вчитися онлайн, доки вирішується візове питання. У нас є комбіновані програми в Чехії та Словаччині, коли перший семестр — онлайн-навчання, а другий — очно у Празі чи Братиславі, та широкий вибір онлайн-курсів для вступу до вишів Австрії."
            ) as string,
            link:
              lang === "ru"
                ? {
                    text: "Подробнее",
                    to: "https://www.gostudy.cz/vse-programmyi-avstrii",
                  }
                : lang === "uk"
                ? {
                    text: "Детальніше",
                    to: "https://www.gostudy.cz/uk/vse-programmyi-slovakia",
                  }
                : undefined,
          },
          {
            title: getTranslatedText(
              "What certificate will I receive at the end of the course?",
              "những Gì giấy chứng nhận tôi sẽ nhận được vào cuối nhiên?",
              "Какой сертификат я получу по окончании курса?",
              "Який сертифікат я отримаю після закінчення курсу?"
            ) as string,
            text: getTranslatedText(
              "Graduates of GoStudy courses pass the state foreign language exam, after which they receive an A2 or B2 certificate (depending on the intensity and duration of the course).",
              "Tốt nghiệp của GoStudy khóa học vượt qua các kỳ thi ngoại ngữ, sau đó họ nhận được một A 2 hoặc B2 (tùy thuộc vào mức độ và thời gian của khóa học).",
              "Выпускники курсов GoStudy сдают государственный экзамен по иностранному языку, после чего получают сертификат А2 или В2 (в зависимости от интенсивности и продолжительности обучения).",
              "Випускники курсів GoStudy складають державний іспит з іноземної мови, після чого отримують сертифікат А2 або В2 (залежно від інтенсивності та тривалості навчання)."
            ) as string,
          },
          {
            title: getTranslatedText(
              "Are there age limits for admission to European universities?",
              "Có giới hạn độ tuổi tuyển sinh vào trường đại học châu u?",
              "Существуют ли возрастные ограничения при поступлении в европейские вузы?",
              "Чи існують вікові обмеження при вступі до європейських вишів?"
            ) as string,
            text: getTranslatedText(
              "European universities have no age restrictions. There may be a problem at the Embassy when issuing visas to people over 50 years old, so in these cases you should take the preparation of visa documents more seriously.",
              "Châu âu trường đại học không có giới hạn độ tuổi. Có thể có một vấn đề ở đại Sứ quán khi cấp visa với mọi người hơn 50 tuổi, do đó, trong những trường hợp này, bạn nên hãy chuẩn bị giấy tờ visa nghiêm túc hơn.",
              "Возрастных ограничений европейские университеты не имеют. Может возникнуть проблема в Посольстве при выдаче визы людям старше 50 лет, поэтому в этих случаях следует относиться к вопросам подготовки документов на визу более серьезно.",
              "Вікових обмежень європейські університети не мають. Може виникнути проблема у Посольстві під час видачі візи людям віком від 50 років, тому в цих випадках слід ставитися до питань підготовки документів на візу серйозніше."
            ) as string,
          },
          {
            title: getTranslatedText(
              "What is included in the cost of the training programme other than the foreign language course?",
              "Bao gồm những gì các chi phí của các chương trình đào tạo khác với các khóa học ngoại ngữ?",
              "Что входит в стоимость программы подготовки, кроме курса иностранного языка?",
              "Що входить у вартість програми підготовки, крім курсу іноземної мови?"
            ) as string,
            text: getTranslatedText(
              "We offer 2 types of programmes: shortened programmes for applicants to private universities and annual training programmes for applicants to state universities on a budget (detailed information is described in the section «Programmes» on our website). The cost of the programme includes a foreign language course, services for nostrification of the certificate or diploma, provision of documents for opening a student visa: confirmation from the state university and confirmation from the hostel about reservation of a place; assistance in solving everyday and organisational issues for the whole period of study at our courses, consultations when choosing a speciality and university, assistance in submitting documents to the admission committee of the university of your choice, adaptation programme. The annual programme also includes training courses in the subjects to be taken at the entrance exams (mathematics, physics, biology, foreign language, etc.) or preparation for creative tests.",
              "Chúng tôi cung cấp 2 loại chương trình: ngắn lại chương trình cho nhân viên đến trường đại học tư và hàng năm chương trình đào tạo cho các ứng viên trường đại học bang trên một ngân sách (thông tin chi tiết được miêu tả trong các phần «chương Trình» trên trang web của chúng tôi). Chi phí của chương trình bao gồm một ngoại ngữ nhiên, dịch vụ cho chứng nhận vắn của giấy chứng nhận hoặc bằng cấp, cung cấp tài liệu cho mở một visa sinh viên: xác nhận từ người đại học bang và xác nhận từ ký túc xá về phòng của một nơi trợ giúp trong việc giải quyết hàng và tổ chức vấn đề cho toàn bộ thời gian nghiên cứu của chúng tôi, các khóa học vấn khi chọn một đặc biệt và đại học, hỗ trợ nộp tài liệu để nhập học ủy ban của các trường đại học của sự lựa chọn của bạn, thích nghi chương trình. Chương trình hàng năm cũng bao gồm khóa đào tạo trong các đối tượng để được thực hiện tại cuộc thi tuyển (toán, lý, sinh học ngoại ngữ, etc.) hoặc chuẩn bị cho sáng tạo bài kiểm tra.",
              "Мы предлагаем обучение по программам 2-х видов: сокращенные программы для поступающих в частные вузы и годовые программы подготовки для поступающих в государственные вузы на бюджет (подробная информация описана в разделе «Программы» на нашем сайте) as string. В стоимость программы входит курс иностранного языка, услуги по нострификации аттестата или диплома, предоставление документов для открытия студенческой визы: подтверждение из госвуза и подтверждение из общежития о резервации места; помощь при решении бытовых и организационных вопросов на все время обучения на наших курсах, консультации при выборе специальности и вуза, помощь при подачи документов в приемную комиссию выбранного вами вуза, адаптационная программа. Годовая программа также включает курсы подготовки по предметам, которые абитуриент будет сдавать на вступительных экзаменах (математика, физика, биология, иностранный язык и т.д.) as string или подготовку к творческим испытаниям.",
              "Ми пропонуємо навчання за програмами 2-х видів: скорочені програми для вступників до приватних вишів та річні програми підготовки для вступників до державних вишів на бюджет (докладна інформація описана у розділі «Програми» на нашому сайті) as string. У вартість програми входить курс іноземної мови, послуги з нострифікації атестата або диплома, надання документів для відкриття студентської візи: підтвердження з державного вишу та підтвердження з гуртожитку про резервацію місця; допомога у вирішенні побутових та організаційних питань на весь час навчання на наших курсах, консультації під час вибору спеціальності та вишу, допомога під час подання документів до приймальної комісії обраного вами вишу, адаптаційна програма. Річна програма також включає курси підготовки з предметів, які абітурієнт складатиме на вступних іспитах (математика, фізика, біологія, іноземна мова тощо) as string або підготовку до творчих випробувань."
            ) as string,
          },
        ]}
      />
    </>
  );
};
