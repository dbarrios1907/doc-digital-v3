import { storyPath } from '~/components/style-guide/story.utils'

export default {
  title: storyPath,
  // decorators: [withKnobs, () => ({
  //   template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  // })]
}

export const NavigationBarStory = () => ({
  template: `
    <div>
       <NavBar />
      <nav class="navbar navbar-dark navbar-expand-lg">
        <div class="container"><a class="navbar-brand" href="/"><i class="fa fa-spinner fa-spin page-loading-icon"></i><img src="../../assets/img/gob-header.svg"/></a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDarkExampleCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="navbar-collapse collapse" id="navbarDarkExampleCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><a class="nav-link contingency-behavior-open" href="#">¿Contingency?</a></li>
              <li class="nav-item"><a class="nav-link redirecting-behavior-link" href="https://www.chileatiende.gob.cl/" data-target="#to-chile-atiende" data-timeout="5000">Chile Atiende</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
              <li class="nav-item"><a class="btn btn-block btn-primary" href="#">Iniciar sesión</a></li>
              <li class="nav-behavior"><a class="nav-link text-uppercase text-underline" href="#">en</a></li>
              <li class="nav-separator"></li>
              <li class="nav-behavior"><a class="nav-link" href="#"><i class="cl cl-login"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
  
      <nav class="navbar navbar-dark navbar-expand-lg navbar-lines mt-3">
        <div class="container"><a class="navbar-brand" href="/"><i class="fa fa-spinner fa-spin page-loading-icon"></i><img src="../../assets/img/gob-header.svg"/></a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarLinesDarkExampleCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="navbar-collapse collapse" id="navbarLinesDarkExampleCollapse">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="btn btn-block btn-primary" href="#">link</a></li>
              <li class="nav-item"><a class="btn btn-block btn-primary" href="#">link</a></li>
              <li class="nav-item"><a class="btn btn-block btn-primary" href="#">Iniciar sesión</a></li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
              <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarLinesDarkExampleDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu" aria-labelledby="navbarLinesDarkExampleDropdown"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <form class="simple-search search">
                <input class="form-control" type="text" name="search" placeholder="search" aria-label="search" aria-describedby="searchLineAction"/>
                <div class="search-action">
                  <button class="btn btn-outline-search dom-search-behavior-cancel d-none" type="button"><i class="icon cl cl-close"></i></button>
                  <button class="btn btn-outline-search" id="searchLineAction" type="submit"><i class="icon cl cl-search"></i></button>
                </div>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
`,
})
