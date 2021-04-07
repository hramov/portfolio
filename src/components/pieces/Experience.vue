<template>
  <div class="container">
    <h2>Опыт работы</h2>
    <div class="row" v-for="work in works" :key="work.id">
      <h4>{{ work.title }}</h4>
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" align="center">
        <div style="opacity: 50%; background-color: black">
          <img v-if="work.id == 1" src="/img/era2.jpg" />
          <img v-else-if="work.id == 2" src="/img/rzd.png" />
        </div>
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
        <p><strong>Должность: </strong>{{ work.rank }}</p>
        <p>
          <strong>Опыт работы, лет: </strong>{{ work.time }}
          <span v-if="work.isNow">(по настоящее время)</span>
        </p>
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
  margin-bottom: 10px;
}
</style>