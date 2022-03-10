<template>
  <!-- <Header /> -->
  <div class="row" style="max-width: 100%">
    <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
      <Sidebar />
    </div>
    <div class="col-xl-10 col-lg-6 col-md-6 col-sm-12">
      <div class="container-fluid">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import "./assets/css/sidebar.css";
import "./assets/css/bootstrap.min.css";
// import Header from "./components/Header";
import Sidebar from "./components/Sidebar.vue";
export default {
  data() {
    return {};
  },
  components: {
    // Header,
    Sidebar,
  },
};
</script>

<style>
* {
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0;
}

h2 {
  padding-bottom: 20px;
}

p {
  text-align: justify;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>