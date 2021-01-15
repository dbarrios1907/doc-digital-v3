import { storyPath } from '~/components/style-guide/story.utils'

export default {
  title: storyPath,
  // decorators: [withKnobs, () => ({
  //   template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  // })]
}

export const TypographyStory = () => ({
  template: `
  <section class="doc-section" id="typography">
                <header class="doc-section-header">
                  <h2>Tipografía <a href="#typography">#</a></h2>
                </header>
                <div class="doc-section-body">
                  <p>
                    La tipografía elegida para ser utilizada en este kit es Roboto, en sus familias Roboto
                    y Roboto Slab. Esta tipografía fue seleccionada por ser una familia diseñada para facilitar la lectura,
                    sobre todo en móviles, ya que es la tipografía por defecto en dispositivos
                    con sistema operativo Android.
                  </p>
                  <div class="doc-subsection-border" id="roboto">
                    <div class="doc-subsection-header">
                      <h3>Roboto <a href="#roboto">#</a></h3>
                    </div>
                    <div class="doc-subsection-body">
                      <div class="row">
                        <div class="col-12 col-md-7 col-lg-8">
                          <p>
                            Es la tipografía base del kit. Debe ser utilizada por defecto
                            en todos los textos del sitio que no sean títulos. Los tamaños
                            y jerarquías están indicados más abajo.
                          </p>
                        </div>
                        <div class="col-12 col-md-5 col-lg-4">
                          <div class="h2 pb-2" style="font-size: 130px; line-height: 100px; font-family: Roboto, sans-serif;">Aa</div>
                          <p style="font-size: 12px; font-family: Roboto, sans-serif;">
                            abcdefghijklmnñopqrstuvwxyz.
                            1234567890 -=[];',./!@#$%^&amp;*()_+.
                          </p>
                          <p style="font-size: 12px; font-family: Roboto, sans-serif;">
                            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ.
                            1234567890 -=[];',./!@#$%^&amp;*()_+.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="doc-subsection-border" id="robotoSlab">
                    <div class="doc-subsection-header">
                      <h3>Roboto Slab <a href="#robotoSlab">#</a></h3>
                    </div>
                    <div class="doc-subsection-body">
                      <div class="row">
                        <div class="col-12 col-md-7 col-lg-8">
                          <p>
                            Es la tipografía para destacar los títulos de las secciones
                            del sitio. Sólo debe ser ocupada en títulos, ya que es una
                            tipografía con un peso visual importante en comparación a
                            Roboto regular.
                          </p>
                        </div>
                        <div class="col-12 col-md-5 col-lg-4">
                          <div class="h2" style="font-size: 130px; line-height: 100px;">Aa</div>
                          <p style="font-size: 12px; ">
                            abcdefghijklmnñopqrstuvwxyz. 1234567890
                            -=[];',./!@#$%^&amp;*()_+.
                          </p>
                          <p style="font-size: 12px; ">
                            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ. 1234567890
                            -=[];',./!@#$%^&amp;*()_+.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="doc-subsection" id="typographyStyle">
                    <div class="doc-subsection-header">
                      <h3>Estilos tipográficos <a href="#typographyStyle">#</a></h3>
                    </div>
                    <div class="doc-subsection-body">
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">
                              <div class="h1">H1</div>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto Slab;
font-size: 2.4rem;
font-weight: 400;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">
                              <div class="h2">H2</div>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto Slab;
font-size: 1.6875rem;
font-weight: 400;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">
                              <div class="h3">H3</div>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto Slab;
font-size: 1.4375rem;
font-weight: 400;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">
                              <div class="h4">H4</div>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto;
font-size: 1.25rem;
font-weight: 400;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">
                              <div class="h5">H5</div>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto Slab;
font-size: 1.25rem;
font-weight: 400;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">
                              <div class="h6">H6</div>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto Slab;
font-size: 1.125rem;
font-weight: 400;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">Body Default
                              <p>Texto por defecto a usar.</p>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto;
font-size: 1rem;
font-weight: 400;
color: #212529;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">
                              <p>Párrafos</p>
                              <p>Texto para párrafos.</p>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto;
font-size: 1rem;
font-weight: 400;
color: #4a4a4a;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8"><a href="#">Links</a>
                              <p>Texto utilizado en descripciones que funcionen como enlaces.</p>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto;
font-size: 1rem;
font-weight: 400;
color: #111;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8"><small>Small</small>
                              <p>Texto utilizado para detalles complementarios</p>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto;
font-size: .6875rem;
font-weight: 400;
color: #212529;</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-subsection-border">
                        <div class="doc-subsection-body">
                          <div class="row">
                            <div class="col-12 col-md-7 col-lg-8">
                              <q>Citas</q>
                              <p>Texto utilizado para crear citas.</p>
                            </div>
                            <div class="col-12 col-md-5 col-lg-4">
                              <pre>font-family: Roboto;
font-size: 1rem;
font-style: italic;
font-weight: 400;
color: #4a4a4a;
</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="doc-subsection" id="config">
                    <div class="doc-subsection-header">
                      <h3>Configuración <a href="#config">#</a></h3>
                    </div>
                    <div class="doc-subsection-body">
                      <p>
                        Bootstrap pone a disposición una serie de variables globales y clases
                        para el manejo de la tipografía. En la
                        <a href="https://getbootstrap.com/docs/4.5/content/typography/">documentación oficial</a>
                        podrá revisar las principales herramientas disponibles. A continuación
                        mencionaremos algunas de ellas y comentaremos las utilidades extra que
                        añade este kit.   
                      </p>
                    </div>
                  </div>
                  <div class="doc-subsection" id="typographyClases">
                    <div class="doc-subsection-header">
                      <h3>Clases tipográficas <a href="#typographyClases">#</a></h3>
                    </div>
                    <div class="doc-subsection-body">
                      <p>
                        Bootstrap ofrece un 
                        <a href="https://getbootstrap.com/docs/4.5/content/typography/#headings">set de clases</a>
                        para los estilos tipográficos de los títulos, del <code>h1</code> al
                        <code>h6</code>, necesarios para cuando se requiera que visualmente un 
                        texto se vea como uno de los títulos pero que no se pueda utilizar 
                        el tag correspondiente. Por ejemplo, el correcto uso de la semántica
                        en una página web ayuda a mantener un sitio accesible por otros
                        sistemas y con buen posicionamiento en buscadores (SEO), por lo
                        tanto, el uso de los tags de títulos debiese estar restringido sólo
                        al texto que tenga esa función en la jerarquía correspondiente.<br>
                      </p>
                      <p>A continuación, una lista de ejemplo:</p>
                      <div class="blockquote">
                        <p class="h1">h1. Framework kit de gobierno</p>
                        <p class="h2">h2. Framework kit de gobierno</p>
                        <p class="h3">h3. Framework kit de gobierno</p>
                        <p class="h4">h4. Framework kit de gobierno</p>
                        <p class="h5">h5. Framework kit de gobierno</p>
                        <p class="h6">h6. Framework kit de gobierno</p>
                      </div>
                      <p>
                        Otro set de clases disponibles, añadidas en este kit,
                        corresponden a los font-level, <code>.font-level-1</code> a
                        <code>.font-level-8</code>, las cuales implementan
                        sólo el tamaño de la fuente y el alto de la línea de los estilos
                        tipográficos de títulos, más el <code>body default</code> y <code>párrafos</code>. 
                        Además está la clase <code>.font-base</code>, que implementa
                        el estilo de la tipografía por defecto <code>Body Default</code>.
                      </p>
                      <p>A continuación, una lista de ejemplo:</p>
                      <div class="blockquote">
                        <p class="font-level-1">font-level-1. Framework kit de gobierno</p>
                        <p class="font-level-2">font-level-2. Framework kit de gobierno</p>
                        <p class="font-level-3">font-level-3. Framework kit de gobierno</p>
                        <p class="font-level-4">font-level-4. Framework kit de gobierno</p>
                        <p class="font-level-5">font-level-5. Framework kit de gobierno</p>
                        <p class="font-level-6">font-level-6. Framework kit de gobierno</p>
                        <p class="font-level-7">font-level-7. Framework kit de gobierno</p>
                        <p class="font-level-8">font-level-8. Framework kit de gobierno</p>
                        <p class="font-base">font-base. Framework kit de gobierno</p>
                      </div>
                      <p>
                        El framework kit de gobierno personaliza estos estilos en el archivo
                        <code>_typography.scss</code> con los valores disponibles en las variables
                        globales en <code>_variables.scss</code>. Debe recordar siempre definir los
                        tamaños en <code>rem</code>.
                      </p>
                    </div>
                  </div>
                  <div class="doc-subsection" id="utilitiesClasses">
                    <div class="doc-subsection-header">
                      <h3>Clases de utilidad <a href="#utilitiesClasses">#</a></h3>
                    </div>
                    <div class="doc-subsection-body">
                      <p>
                        Bootstrap ofrece una serie de 
                        <a href="https://getbootstrap.com/docs/4.5/utilities/text/">clases de utilidad</a>
                        para personalizar
                        propiedades del texto específicas tales como la alineación, ajuste
                        (wrap), mayúsculas, minúsculas, estilo en negrita, decoraciones,
                        entre otros.
                      </p>
                      <p>
                        Este kit agrega clases para aquellas ocasiones en las
                        que se necesita fijar el alto<code>height</code> de un elemento que
                        contiene texto. Para ello se utiliza como referencia
                        el alto de línea<code>line-height</code> de la tipografía a 
                        utilizar. Estas clases tienen la forma<code>.text-lines-X-Y</code>, donde
                        X corresponde a un número del 1 al 8 que representa la tipografía
                        , e Y corresponde a un número del 0 al 20 e indica la cantidad de
                        líneas a fijar. Si el elemento que utiliza esta clase utiliza
                        menos líneas, quedará espacio en blanco. Si se pasa, no
                        aparecerán las líneas extras.
                      </p>
                      <p>
                        A modo de ejemplo, para cada nivel de texto, se fija el alto en
                        3 líneas <code>.text-lines-X-3</code> y se escriben solamente 2:
                      </p>
                      <div class="blockquote">
                        <div class="text-lines-1-3 border ml-2 mb-2"><span class="font-level-1">h1. Línea 1</span><br><span class="font-level-1">h1. Línea 2</span></div>
                        <div class="text-lines-2-3 border ml-2 mb-2"><span class="font-level-2">h2. Línea 1</span><br><span class="font-level-2">h2. Línea 2</span></div>
                        <div class="text-lines-3-3 border ml-2 mb-2"><span class="font-level-3">h3. Línea 1</span><br><span class="font-level-3">h3. Línea 2</span></div>
                        <div class="text-lines-4-3 border ml-2 mb-2"><span class="font-level-4">h4. Línea 1</span><br><span class="font-level-4">h4. Línea 2</span></div>
                        <div class="text-lines-5-3 border ml-2 mb-2"><span class="font-level-5">h5. Línea 1</span><br><span class="font-level-5">h5. Línea 2</span></div>
                        <div class="text-lines-6-3 border ml-2 mb-2"><span class="font-level-6">h6. Línea 1</span><br><span class="font-level-6">h6. Línea 2</span></div>
                        <div class="text-lines-7-3 border ml-2 mb-2"><span class="font-level-7">span. Línea 1</span><br><span class="font-level-7">span. Línea 2</span></div>
                        <div class="text-lines-8-3 border ml-2 mb-2"><span class="font-level-8">p. Línea 1</span><br><span class="font-level-8">p. Línea 2</span></div>
                      </div>
                      </div>
                  </div>
                </div>
              </section>
  `,
})
