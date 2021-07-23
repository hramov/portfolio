<template>
  <Header />
  <br />
  <main>
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
    Header,
  },
};
</script>

<style>
* {
  font-family: 'Raleway', sans-serif;
}
p {
  text-align: justify;
}

</style>