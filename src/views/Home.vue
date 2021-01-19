<template>
  <div class="container">
    <Bio class="piece" />
    <Skills class="piece" :skills="skills" />
    <Experience class="piece" :works="works" />
    <Projects class="piece" :projects="projects" />
  </div>
</template>

<script>
import Bio from "./../components/pieces/Bio";
import Skills from "./../components/pieces/Skills";
import Experience from "./../components/pieces/Experience";
import Projects from "./../components/pieces/Projects";

export default {
  components: {
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
          prCount: 5,
          confidence: 7,
        },
        {
          id: 3,
          title: "Express",
          yoe: 1,
          prCount: 5,
          confidence: 7,
        },
        {
          id: 2,
          title: "TypeScript / NestJS",
          yoe: 1,
          prCount: 5,
          confidence: 7,
        },
      ],
      works: [
        {
          id: 1,
          title: 'Военный инновационный технополис "ЭРА"',
          rank: "Руководитель группы разработки",
          time: 1,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis ea saepe totam quisquam voluptates corporis assumenda vitae nesciunt. Ex doloribus, nesciunt reprehenderit perspiciatis nam temporibus sequi assumenda atque. Temporibus?",
          isNow: false,
        },
        {
          id: 2,
          title: 'ОАО "РЖД"',
          rank: "Электромеханик связи",
          time: 1,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis ea saepe totam quisquam voluptates corporis assumenda vitae nesciunt. Ex doloribus, nesciunt reprehenderit perspiciatis nam temporibus sequi assumenda atque. Temporibus?",
          isNow: true,
        },
      ],
      projects: [
        {
          id: 1,
          title: 'Автономная система поиска и анализа новостных материалов в средствах массовой информации',
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
          role: "Full stack developer",
          tech: ['JS', 'NodeJS', 'VueJS', 'Docker', 'Postgres', 'RabbitMQ', 'Socket.io'],
          misc: 'В интересах ГВЦ ВС РФ',
          github: 'Приватный репозиторий'
        },
        {
          id: 2,
          title: 'Система поддержки мероприятий ВИТ "ЭРА"',
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
          role: "Full stack developer",
          tech: ['JS', 'NodeJS', 'VueJS', 'Postgres'],
          misc: 'В интересах ВИТ "ЭРА"',
          github: 'https://github.com/hramov/ais'
        },
        {
          id: 3,
          title: "Ай Алтай",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
          role: "Full stack developer",
          tech: ['JS', 'NodeJS', 'VueJS', 'PHP', 'Laravel' ],
          misc: 'ТОП-23 всероссийского хакатона "Цифровой прорыв"',
          github: 'https://github.com/hramov/lod_rassvetr'
        },
        {
          id: 4,
          title: 'Корпоративный портал ПАО "Газпромбанк"',
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
          role: "Full stack developer",
          tech: ['JS', 'NodeJS', 'VueJS', 'PHP', 'Laravel' ],
          misc: 'ТОП-9 всероссийского хакатона "Цифровой прорыв"',
          github: 'https://github.com/hramov/gaz'
        },
        {
          id: 5,
          title: 'Система анализа словарного запаса рэп-исполнителей на основе данных с сайта genius.com',
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores eius quaerat, natus quasi sint, animi error cupiditate rerum porro recusandae voluptate! Recusandae quae voluptate tempore. Ducimus nesciunt voluptates animi?",
          role: "NodeJS developer",
          tech: ['JS', 'NodeJS'],
          misc: 'Личный проект',
          github: 'https://github.com/hramov/gean'
        }
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