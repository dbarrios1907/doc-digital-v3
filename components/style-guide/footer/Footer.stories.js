import { storyPath } from '~/components/style-guide/story.utils'

export default {
  title: storyPath,
  // decorators: [withKnobs, () => ({
  //   template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  // })]
}

export const FooterStory = () => ({
  template: `
  <footer class="content-always-on-display">
    <div class="container">
      <div class="line"></div>
      <div class="row">
        <div class="col-md-3 a11y-fonts-col-12"><img class="mw-100 mb-3" src="https://via.placeholder.com/170x80"/>
          <p>La alternativa para digitalizar los trámites de la ciudadanía.</p>
          <p>Esta plataforma es administrada:</p><img class="mw-100 mb-3" src="https://via.placeholder.com/140x50"/><a class="py-0" href="www.digital.gob.cl">www.digital.gob.cl</a>
        </div>
        <div class="col-md-3 a11y-fonts-col-12">
          <div class="text-uppercase mb-3">Secciones</div><a href="#">Conjuntos de Datos</a><a href="#">Organizaciones</a><a href="#">Categorías</a><a href="#">Documentos</a><a href="#">Ayuda</a><a href="#">Iniciativas Destacadas</a>
        </div>
        <div class="col-md-3 a11y-fonts-col-12">
          <div class="text-uppercase mb-3">Enlaces internos</div><a href="#">Políticas de Privacidad</a><a href="#">Normativas</a><a href="#">Términos y Condiciones</a><a href="#">Sitios relacinados</a><a href="#">Licenciamiento</a><a href="#">Notificar error</a>
        </div>
        <div class="col-md-3 a11y-fonts-col-12">
          <div class="text-uppercase mb-3">Ayuda institucional</div><a href="#">Ingreso de solicitud de ayuda</a><b class="d-block mt-3">Mesa de Ayuda</b>
          <p class="mb-0">
            Horario Lu - Vi / 9:00hrs -
            18:00hrs
          </p><a class="py-0" href="tel:6003970000">600 397 0000</a>
        </div>
      </div>
    </div>
  </footer>
  `,
})

