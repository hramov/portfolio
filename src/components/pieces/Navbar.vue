<template>
  <nav
    class="navbar navbar-dark navbar-expand-lg fixed-top"
    style="background-color: white"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="color: black; font-size: 1.2rem"
        ><strong>HramovDEV</strong></a
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
        <i class="fa fa-hamburger" style="color: black"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                href="https://t.me/hramovfs"
                class="nav-link"
                tabindex="-1"
                target="_blank"
                style="color: black"
                >Блог</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://barnaul.hh.ru/resume/3bb845edff085c77380039ed1f503377556645"
                tabindex="-1"
                target="_blank"
                style="color: black"
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
                style="color: black"
              >
                @therealhramov
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
.dropdown-menu {
  border: none;
}
a {
  color: black;
}
li img {
  width: 30px;
  padding: 5px;
}

.dropdown-item:hover {
  text-align: center;
}

.menu-landing {
  display: flex;
  flex-wrap: space-around;
  margin: 0 auto;
}

.menu-landing div:hover {
  border: 1px solid black;
  border-radius: 50%;
}

.nav-item a:hover {
  text-decoration-line: underline;
}
</style>