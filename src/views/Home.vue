<template>
  <div style="margin-bottom: 50px; margin-top: 70px">
    <section>
      <Bio class="piece" />
    </section>
    <section>
      <Skills class="piece" :skills="skills" />
    </section>
    <section>
      <Experience class="piece" :works="works" />
    </section>
    <section>
      <Projects class="piece" :projects="projects" />
    </section>
  </div>
</template>

<script>
// import HomeHeader from "./../components/pieces/HomeHeader";
import Bio from "./../components/pieces/Bio";
import Skills from "./../components/pieces/Skills";
import Experience from "./../components/pieces/Experience";
import Projects from "./../components/pieces/Projects";

export default {
  components: {
    // HomeHeader,
    Bio,
    Skills,
    Experience,
    Projects,
  },

  data() {
    return {
      skills: [
        {
          id: 1,
          title: "JavaScript / NodeJS",
          yoe: 1.5,
          prCount: 5,
          confidence: 8,
        },
        {
          id: 2,
          title: "VueJS",
          yoe: 1.5,
          prCount: 4,
          confidence: 8,
        },
        {
          id: 3,
          title: "Express",
          yoe: 1.5,
          prCount: 2,
          confidence: 7,
        },
        {
          id: 4,
          title: "TypeScript / NestJS",
          yoe: 0.5,
          prCount: 1,
          confidence: 6,
        },
        {
          id: 4,
          title: "Golang",
          yoe: 0.5,
          prCount: 1,
          confidence: 5,
        },
      ],
      works: [
        {
          id: 1,
          title: 'Военный инновационный технополис "ЭРА"',
          rank: "Старший группы разработки",
          time: 1,
          description:
            "Разработка элементов системы с использованием Docker-контейнеров, интеграция их с другими элементами и сервисами, руководство членами группы, выполнение требований заказчиков проекта, расчет трудозатрат.",
          isNow: false,
        },
        {
          id: 2,
          title: 'ОАО "РЖД"',
          rank: "Электромеханик связи",
          time: 1,
          description:
            "Обслуживание и эксплуатация устройств связи, устранение неисправностей, ремонт и модернизация существующей аппаратуры. Внедрение рационализаторских предложений и инновационных практик.",
          isNow: false,
        },
        {
          id: 3,
          title: 'ГВЦ ОАО "РЖД"',
          rank: "Ведущий технолог отдела разработки и сопровождения систем сервис-менеджмента",
          time: 0.1,
          description:
            "Разработка, тестирование, внедрение и сопровождение систем сервис-менеджмента",
          isNow: true,
        },
      ],
      projects: [
        {
          id: 1,
          title:
            "Автономная система поиска и анализа новостных материалов в средствах массовой информации",
          description:
            "Система представляет собой интернет-краулер, который в режиме реального времени собирает, анализирует и представляет в удобном виде информацию по интересующему запросу и ее стилистичекую окраску.",
          role: "Full stack developer",
          tech: [
            "JS",
            "NodeJS",
            "VueJS",
            "Docker",
            "Postgres",
            "RabbitMQ",
            "Socket.io",
          ],
          misc: "В интересах ГВЦ ВС РФ",
          github: "Private",
        },
        {
          id: 2,
          title: 'Система поддержки мероприятий ВИТ "ЭРА"',
          description:
            "Автоматизированная система, позволяющая добавлять мероприятия до тройной степени вложенности из файла Excel специального формата, гостей мероприятия с привязкой к определенным мероприятиям, генерировать уникальные QR-коды для проверки валидности гостя с отметкой о том, что он вошел на территорию.",
          role: "Full stack developer",
          tech: ["JS", "NodeJS", "VueJS", "Postgres"],
          misc: 'В интересах ВИТ "ЭРА"',
          github: "Private",
        },
        {
          id: 3,
          title: "Wishlist Telegram Bot",
          description:
            "Привет! Это бот, который помогает в выборе подарков. Можно добавить сколько угодно пользователей Telegram, чтобы видеть их виш-листы",
          role: "Full stack developer",
          tech: ["Typescript", "NodeJS", "Telegram", "Postgres", "Docker"],
          misc: "@hramovdevbot",
          github: "https://github.com/hramov/wishlist",
        },
        {
          id: 4,
          title: "Jobhelper Telegram Bot",
          description:
            "Система отслеживания статуса оборудования для элетромеханика, обслуживающего станцию",
          role: "Full stack developer",
          tech: ["Typescript", "NodeJS", "Telegram", "Postgres", "Docker"],
          misc: "",
          github: "https://github.com/hramov/jobhelper",
        },
        {
          id: 5,
          title: "Ай Алтай",
          description:
            "Проект для хакатона Цифровой прорыв, кейс Республики Алтай для вовлечения жителей в жизнь региона.",
          role: "Full stack developer",
          tech: ["JS", "NodeJS", "VueJS", "PHP", "Laravel"],
          misc: 'ТОП-23 всероссийского хакатона "Цифровой прорыв"',
          github: "https://github.com/hramov/lod_rassvetr",
        },
        {
          id: 6,
          title: 'Корпоративный портал ПАО "Газпромбанк"',
          description:
            "Проект для хакатона Цифровой прорыв. Кейс Газпромбанка для становления и развития корпоративной культуры с элементами геймификации",
          role: "Full stack developer",
          tech: ["JS", "NodeJS", "VueJS", "PHP", "Laravel"],
          misc: 'ТОП-9 всероссийского хакатона "Цифровой прорыв"',
          github: "https://github.com/hramov/gaz",
        },
        {
          id: 7,
          title:
            "Система анализа словарного запаса рэп-исполнителей на основе данных с сайта genius.com",
          description:
            "Интернет-парсер текстов исполнителей с извлечением уникальных слов и их подсчетом.",
          role: "NodeJS developer",
          tech: ["JS", "NodeJS"],
          misc: "Личный проект",
          github: "https://github.com/hramov/gean",
        },
      ],
    };
  },
};
</script>

<style scoped>
.piece {
  margin-bottom: 50px;
  /* border-radius: 10px; */
}
</style>