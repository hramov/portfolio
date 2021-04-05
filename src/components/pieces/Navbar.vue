<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="color: black"
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                @therealhramov
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <div class="row">
                    <div class="col-2">
                      <img src="/img/icons/telegram.png" />
                    </div>
                    <div class="col-10">
                      <a
                        class="dropdown-item"
                        target="_blank"
                        href="https://t.me/therealhramov"
                        >Telegram</a
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-2">
                      <img src="/img/icons/instagram.png" />
                    </div>
                    <div class="col-10">
                      <a
                        class="dropdown-item"
                        target="_blank"
                        href="https://instagram.com/therealhramov"
                        >Instagram</a
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-2">
                      <img src="/img/icons/twitter.png" />
                    </div>
                    <div class="col-10">
                      <a
                        class="dropdown-item"
                        target="_blank"
                        href="https://twitter.com/therealhramov"
                        >Twitter</a
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-2">
                      <img src="/img/icons/linkedin.png" />
                    </div>
                    <div class="col-10">
                      <a
                        class="dropdown-item"
                        target="_blank"
                        href="https://linkedin.com/therealhramov"
                        >LinkedIn</a
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://barnaul.hh.ru/resume/3bb845edff085c77380039ed1f503377556645"
                tabindex="-1"
                style="color: green"
                target="_blank"
                >Резюме</a
              >
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
</style>