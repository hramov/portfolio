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
  margin: 0;
  padding: 0;
}

h2 {
  padding-bottom: 20px;
}

p {
  text-align: justify;
}

</style>