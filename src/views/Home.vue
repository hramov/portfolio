<template>
  <div class="container">
    <HomeHeader class="piece"/>
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
          prCount: 3,
          confidence: 8,
        },
        {
          id: 3,
          title: "Express",
          yoe: 1,
          prCount: 3,
          confidence: 7,
        },
        {
          id: 2,
          title: "TypeScript / NestJS",
          yoe: 0.5,
          prCount: 1,
          confidence: 2,
        },
      ],
      works: [
        {
          id: 1,
          title: 'Военный инновационный технополис "ЭРА"',
          rank: "Старший группы разработки",
          time: 1,
          description:
            "Разработка элементов системы с использованием Docker-контейнеров, интеграция их с другими элементами и сервисами, руководство членами группы, выполнение треований заказчиков проекта, расчет трудозатрат.",
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
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
          github: "Приватный репозиторий",
        },
        {
          id: 2,
          title: 'Система поддержки мероприятий ВИТ "ЭРА"',
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
          role: "Full stack developer",
          tech: ["JS", "NodeJS", "VueJS", "Postgres"],
          misc: 'В интересах ВИТ "ЭРА"',
          github: "https://github.com/hramov/ais",
        },
        {
          id: 3,
          title: "Ай Алтай",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
          role: "Full stack developer",
          tech: ["JS", "NodeJS", "VueJS", "PHP", "Laravel"],
          misc: 'ТОП-23 всероссийского хакатона "Цифровой прорыв"',
          github: "https://github.com/hramov/lod_rassvetr",
        },
        {
          id: 4,
          title: 'Корпоративный портал ПАО "Газпромбанк"',
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
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
  margin-bottom: 3rem;
}
</style>