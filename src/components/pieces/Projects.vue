<template>
  <section class="container" id="projects">
    <h2>Проекты</h2>

    <div
      class="card mb-3"
      v-for="project in projects"
      :key="project.id"
    >
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6 col-xs-12"
          style="margin-top: 20px"
          align="center"
        >
          <div style="margin-left: 15px; margin-right: 15px;">
            <img v-if="project.id == '1'" src="/img/newser.jpg" alt="..." />
            <img v-if="project.id == '2'" src="/img/ais.png" alt="..." />
            <img v-if="project.id == '3'" src="/img/wishlist.jpeg" alt="..." />
            <img
              v-if="project.id == '4'"
              src="/img/jobhelper.jpeg"
              alt="..."
            />
            <img v-if="project.id == '5'" src="/img/altay.jpg" alt="..." />
            <img v-if="project.id == '6'" src="/img/gazprombank.jpg" alt="..." />
            <img v-if="project.id == '7'" src="/img/genius.jpeg" alt="..." />
          </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-6 col-xs-12">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p>
              <small>Роль: {{ project.role }}</small>
            </p>
            <p>
              <small>Технологии: {{ project.tech.join(", ") }}</small>
            </p>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text">
              <small class="text-muted">{{ project.misc }}</small>
              <br />
              <small
                v-if="project.github.split('')[0] == 'h'"
                class="text-muted"
                ><a :href="project.github" target="_blank"
                  >Github репозиторий</a
                ></small
              >
              <small v-else class="text-muted">{{ project.github }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["projects"],
};
</script>

<style scoped>
img {
  width: 300px;
  padding-bottom:20px;
}
</style>