<template>
  <Header />
  <br />
  <main class="container">
    <router-view />
  </main>
</template>

<script>
import Header from "./components/Header";

export default {
  data() {
    return {};
  },
  components: {
    Header
  },
};
</script>

<style>
  p {
    text-align: justify;
  }
</style>