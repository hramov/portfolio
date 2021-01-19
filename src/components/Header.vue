<template>
  <header>
    <!-- <p class="h5 my-0 me-md-auto fw-normal">
      <router-link class="p-2 text-dark" style="text-decoration: none" to="/"
        >Личная веб-страница любителя JavaScript</router-link
      >
    </p>
    <nav class="my-2 my-md-0 me-md-3"> -->
    <!-- <router-link class="p-2 text-dark" to="/portfolio">Портфолио</router-link> -->
    <!-- <a
        class="link-secondary"
        target="_blank"
        href="https://barnaul.hh.ru/resume/3bb845edff085c77380039ed1f503377556645"
        >Резюме</a
      >
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </nav> -->
    <Navbar />
  </header>
</template>

<script>
import Navbar from "./pieces/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>