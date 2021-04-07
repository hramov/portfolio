<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="color: #e4fcce"
        >FULL-STACK DEVELOPER PAGE</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/blog" tabindex="-1"
                >Блог</router-link
              >
            </li> -->
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://barnaul.hh.ru/resume/3bb845edff085c77380039ed1f503377556645"
                tabindex="-1"
                target="_blank"
                style="color: #e4fcce"
                >Резюме</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style="color: #e4fcce"
              >
                @therealhramov
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style="background-color: #000011; border: 1px solid white"
              >
                <li>
                  <div class="row">
                    <div class="col-3">
                      <img src="/img/icons/telegram.png" />
                    </div>
                    <div class="col-9">
                      <a
                        class="dropdown-item"
                        target="_blank"
                        href="https://t.me/therealhramov"
                        style="color: #e4fcce"
                        >Telegram</a
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-3">
                      <img src="/img/icons/instagram.png" />
                    </div>
                    <div class="col-9">
                      <a
                        class="dropdown-item"
                        target="_blank"
                        href="https://instagram.com/therealhramov"
                        style="color: #e4fcce"
                        >Instagram</a
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-3" align="center">
                      <img src="/img/icons/twitter.png" />
                    </div>
                    <div class="col-9">
                      <a
                        class="dropdown-item"
                        target="_blank"
                        href="https://twitter.com/therealhramov"
                        style="color: #e4fcce"
                        >Twitter</a
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-3">
                      <img src="/img/icons/linkedin.png" />
                    </div>
                    <div class="col-9">
                      <a
                        class="dropdown-item"
                        target="_blank"
                        href="https://linkedin.com/therealhramov"
                        style="color: #e4fcce"
                        >LinkedIn</a
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
li img {
  width: 30px;
  padding: 5px;
}

.dropdown-item:hover {
  background-color: #e4fcce !important;
  color: #000011 !important;
  text-align: center;
}
</style>