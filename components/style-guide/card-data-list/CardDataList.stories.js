import { storyPath } from '~/components/style-guide/story.utils'

export default {
  title: storyPath,
  // decorators: [withKnobs, () => ({
  //   template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  // })]
}

export const CardDataListStory = () => ({
  template: `
    <div class="card-data-list">
      <div class="card-data text-normal">
        <div class="card-data-title">
          <div class="card-data-quantity"></div>
          <h5>Presidencia de la República</h5>
        </div>
        <p>Conoce la biografía y contacta al Presidente.</p>
      </div>
      <div class="card-data text-normal">
        <div class="card-data-title">
          <div class="card-data-quantity"></div>
          <h5>Ministro</h5>
        </div>
        <p>Infórmate sobre las funciones y ponte en contacto con el Ministro</p>
      </div>
      <div class="card-data text-normal">
        <div class="card-data-title">
          <div class="card-data-quantity">23</div>
          <h5>Ministerios</h5>
        </div>
        <p>Encuentra información y contacta a los Ministerios y Ministros de Estado.</p>
      </div>
      <div class="card-data text-normal">
        <div class="card-data-title">
          <div class="card-data-quantity">100K</div>
          <h5>Servicios Públicos</h5>
        </div>
        <p>Accede a todas las reparticiones del Poder Ejecutivo.</p>
      </div>
    </div>
  `,
})

export const CardDataListStretchStory = () => ({
  template: `
    <div class="card-data-list card-data-list-flush">
  <div class="card-data text-normal">
    <div class="card-data-title">
      <div class="card-data-quantity"></div>
      <h5>Presidencia de la República</h5>
    </div>
    <p>Conoce la biografía y contacta al Presidente.</p>
  </div>
  <div class="card-data text-normal">
    <div class="card-data-title">
      <div class="card-data-quantity"></div>
      <h5>Ministro</h5>
    </div>
    <p>Infórmate sobre las funciones y ponte en contacto con el Ministro</p>
  </div>
  <div class="card-data text-normal">
    <div class="card-data-title">
      <div class="card-data-quantity">23</div>
      <h5>Ministerios</h5>
    </div>
    <p>Encuentra información y contacta a los Ministerios y Ministros de Estado.</p>
  </div>
  <div class="card-data text-normal">
    <div class="card-data-title">
      <div class="card-data-quantity">156</div>
      <h5>Servicios Públicos</h5>
    </div>
    <p>Accede a todas las reparticiones del Poder Ejecutivo.</p>
  </div>
  <div class="card-data text-normal">
    <div class="card-data-title">
      <div class="card-data-quantity">16</div>
      <h5>Regiones y sus Municipios</h5>
    </div>
    <p>Encuentra información sobre los Gobiernos Regionales, locales y sus autoridades.</p>
  </div>
</div>  
`,
})
