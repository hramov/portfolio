<template>
  <div class="container" style="margin-top: 50px">
    <div class="row">
      <div class="article" v-for="(article, id) in articlesGetter" :key="id">
        <h3 class="text-center">
          {{ article.Title }}
        </h3>
        <img :src="article.Img" style="width: 100%" align="center" />
        <div style="margin-top: 10px; margin-bottom: 10px">
          {{ article.Date }}
        </div>
        <div class="content"><span v-html="article.Content"></span></div>
        <hr />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      art: [],
      articles: [
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "05.04.2021",
          img:
            "https://www.it-courses.by/wp-content/uploads/2018/06/20-Most-Common-Work-from-Home-Job-Titles.jpg",
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum!</p>",
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "05.04.2021",
          img:
            "https://www.it-courses.by/wp-content/uploads/2018/06/20-Most-Common-Work-from-Home-Job-Titles.jpg",
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum!</p>",
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "05.04.2021",
          img:
            "https://www.it-courses.by/wp-content/uploads/2018/06/20-Most-Common-Work-from-Home-Job-Titles.jpg",
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ratione perferendis debitis tempora voluptates repellendus ab laudantium fuga vitae, voluptatibus dolores sunt porro minima libero quisquam quis animi earum!</p>",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["getArticles"]),
  },
  async mounted() {
    await this.getArticles();
  },
  computed: {
    ...mapGetters(["articlesGetter"]),
  },
};
</script>