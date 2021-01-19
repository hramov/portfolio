<template>
  <div class="container">
    <h2>Опыт работы</h2>
    <div class="row" v-for="work in works" :key="work.id">
      <h4>{{ work.title }}</h4>
      <div class="col-4">
        <img v-if="work.id == 1" src="/img/era2.jpg" />
        <img v-else-if="work.id == 2" src="/img/rzd.png" />
      </div>
      <div class="col-8">
        <p><strong>Должность: </strong>{{ work.rank }}</p>
        <p><strong>Опыт работы, лет: </strong>{{ work.time }} <span v-if="work.isNow">(по настоящее время)</span></p>
        <p><strong>Обязанности: </strong>{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["works"],
};
</script>

<style scoped>
    img {
        width: 250px;
    }
</style>