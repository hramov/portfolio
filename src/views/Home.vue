<template>
  <div class="container">
    <HomeHeader class="piece" />
    <Bio class="piece" />
    <Skills class="piece" :skills="skills" />
    <Experience class="piece" :works="works" />
    <Projects class="piece" :projects="projects" />
  </div>
</template>

<script>
import HomeHeader from "./../components/pieces/HomeHeader";
import Bio from "./../components/pieces/Bio";
import Skills from "./../components/pieces/Skills";
import Experience from "./../components/pieces/Experience";
import Projects from "./../components/pieces/Projects";

export default {
  components: {
    HomeHeader,
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
          yoe: 1,
          prCount: 5,
          confidence: 8,
        },
        {
          id: 2,
          title: "VueJS",
          yoe: 1,
          prCount: 4,
          confidence: 8,
        },
        {
          id: 3,
          title: "Express",
          yoe: 1,
          prCount: 2,
          confidence: 7,
        },
        // {
        //   id: 4,
        //   title: "TypeScript / NestJS",
        //   yoe: 0.5,
        //   prCount: 1,
        //   confidence: 2,
        // },
        {
          id: 4,
          title: "Golang",
          yoe: 0.5,
          prCount: 1,
          confidence: 3,
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
          github: "https://github.com/hramov/newser",
        },
        {
          id: 2,
          title: 'Система поддержки мероприятий ВИТ "ЭРА"',
          description:
            "Автоматизированная система, позволяющая добавлять мероприятия до тройной степени вложенности из файла Excel специального формата, гостей мероприятия с привязкой к определенным мероприятиям, генерировать уникальные QR-коды для проверки валидности гостя с отметкой о том, что он вошел на территорию.",
          role: "Full stack developer",
          tech: ["JS", "NodeJS", "VueJS", "Postgres"],
          misc: 'В интересах ВИТ "ЭРА"',
          github: "https://github.com/hramov/ais",
        },
        {
          id: 3,
          title: "Ай Алтай",
          description:
            "Проект для хакатона Цифровой прорыв, кейс Республики Алтай для вовлечения жителей в жизнь региона.",
          role: "Full stack developer",
          tech: ["JS", "NodeJS", "VueJS", "PHP", "Laravel"],
          misc: 'ТОП-23 всероссийского хакатона "Цифровой прорыв"',
          github: "https://github.com/hramov/lod_rassvetr",
        },
        {
          id: 4,
          title: 'Корпоративный портал ПАО "Газпромбанк"',
          description:
            "Проект для хакатона Цифровой прорыв. Кейс Газпромбанка для становления и развития корпоративной культуры с элементами геймификации",
          role: "Full stack developer",
          tech: ["JS", "NodeJS", "VueJS", "PHP", "Laravel"],
          misc: 'ТОП-9 всероссийского хакатона "Цифровой прорыв"',
          github: "https://github.com/hramov/gaz",
        },
        {
          id: 5,
          title:
            "Система анализа словарного запаса рэп-исполнителей на основе данных с сайта genius.com",
          description:
            "Интернет-парсер текстов исполнителей с извлечением уникальных слов и их подсчетом.",
          role: "NodeJS developer",
          tech: ["JS", "NodeJS"],
          misc: "Личный проект",
          github: "https://github.com/hramov/gean",
        },
        {
          id: 6,
          title: "Морской бой (клиент-серверное приложение)",
          description:
            "Классическая игра с возможностью организации многопользовательского режима игры.",
          role: "Golang developer",
          tech: ["Golang", "Websockets"],
          misc: "Личный проект",
          github: "https://github.com/hramov/battleship",
        },
      ],
    };
  },
};
</script>

<style scoped>
.piece {
  margin-bottom: 3rem;
}
</style>