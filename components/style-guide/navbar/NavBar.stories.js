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
    </div>
`,
})
