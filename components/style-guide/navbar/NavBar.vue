<template>
  <nav class="navbar navbar-light navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/"
        ><i class="fa fa-spinner fa-spin page-loading-icon"></i
        ><img src="~assets/img/gob-header.svg"
      /></a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarLightExampleCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarLightExampleCollapse" class="navbar-collapse collapse">
        <ul class="navbar-nav ml-auto">
          <form class="simple-search search">
            <input
              class="form-control"
              type="text"
              name="search"
              placeholder="search"
              aria-label="search"
              aria-describedby="searchLineAction"
            />
            <div class="search-action">
              <button
                class="btn btn-outline-search dom-search-behavior-cancel d-none"
                type="button"
              >
                <i class="icon cl cl-close"></i>
              </button>
              <button
                id="searchLineAction"
                class="btn btn-outline-search"
                type="submit"
              >
                <i class="icon cl cl-search"></i>
              </button>
            </div>
          </form>
          <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
          <li class="nav-item">
            <a class="btn btn-block btn-primary" href="#">Iniciar sesión</a>
          </li>
          <li class="nav-behavior">
            <a class="nav-link text-uppercase text-underline" href="#">en</a>
          </li>
          <li class="nav-separator"></li>
          <li class="nav-behavior">
            <a class="nav-link" href="#"><i class="cl cl-login"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
