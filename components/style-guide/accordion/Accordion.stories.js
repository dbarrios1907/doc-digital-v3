import { storyPath } from '~/components/style-guide/story.utils'

export default {
  title: storyPath,
  // decorators: [withKnobs, () => ({
  //   template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  // })]
}

export const AccordionStory = () => ({
  template: `
     <ol class="list-unstyled" id="collapsibleFlushAccordion">
      <li class="border-bottom border-accent">
        <button class="btn text-left w-100 d-flex align-items-start justify-content-between py-4 px-3" id="collapsibleFlushHeading1" type="button" data-toggle="collapse" data-target="#collapsibleFlushCollapse1" aria-controls="collapsibleFlushCollapse1" aria-expanded="true"><span class="h3 mb-0">¿Qué es Datos.gob.cl?</span><span class="toggler-icon cl cl-m-arrow-down cl-2x" aria-hidden="true"></span></button>
        <div class="collapse show" id="collapsibleFlushCollapse1" aria-labelledby="collapsibleFlushHeading1" data-parent="#collapsibleFlushAccordion">
          <div class="pr-5 pb-3 pl-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </li>
      <li class="border-bottom border-accent">
        <button class="btn text-left w-100 d-flex align-items-start justify-content-between py-4 px-3" id="collapsibleFlushHeading2" type="button" data-toggle="collapse" data-target="#collapsibleFlushCollapse2" aria-controls="collapsibleFlushCollapse2" aria-expanded="false"><span class="h3 mb-0">¿Para qué sirve datos.gob.cl?</span><span class="toggler-icon cl cl-m-arrow-down cl-2x" aria-hidden="true"></span></button>
        <div class="collapse" id="collapsibleFlushCollapse2" aria-labelledby="collapsibleFlushHeading2" data-parent="#collapsibleFlushAccordion">
          <div class="pr-5 pb-3 pl-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </li>
      <li class="border-bottom border-accent">
        <button class="btn text-left w-100 d-flex align-items-start justify-content-between py-4 px-3" id="collapsibleFlushHeading3" type="button" data-toggle="collapse" data-target="#collapsibleFlushCollapse3" aria-controls="collapsibleFlushCollapse3" aria-expanded="false"><span class="h3 mb-0">¿Cómo puede participar mi institución?</span><span class="toggler-icon cl cl-m-arrow-down cl-2x" aria-hidden="true"></span></button>
        <div class="collapse" id="collapsibleFlushCollapse3" aria-labelledby="collapsibleFlushHeading3" data-parent="#collapsibleFlushAccordion">
          <div class="pr-5 pb-3 pl-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </li>
    </ol>
`,
})

export const MultiModeAccordionStory = () => ({
  template: `
    <div class="row">
      <div class="col-md-4 d-none d-lg-block">
        <div class="h-100 border-right border-accent pt-5">
          <ol class="collapsible-links" id="collapsibleLinks2Accordion">
            <li class="collapsible-links-item">
              <button class="collapsible-links-heading" id="collapsibleLinks2Heading1" type="button" data-toggle="collapse" data-target="#collapsibleLinks2Collapse1" aria-controls="collapsibleLinks2Collapse1" aria-expanded="true">1. Preguntas Generales</button>
              <div class="collapse show" id="collapsibleLinks2Collapse1" aria-labelledby="collapsibleLinks2Heading1" data-parent="#collapsibleLinks2Accordion">
                <ol class="collapsible-links-list">
                  <li class="collapsible-links-list-item"><a class="collapsible-links-list-link" href="#collapseA1" data-toggle="collapse" data-target="#collapsibleFlush2Collapse1" aria-controls="collapsibleFlush2Collapse1" aria-expanded="true">¿Qué es Datos.gob.cl?</a></li>
                  <li class="collapsible-links-list-item"><a class="collapsible-links-list-link" href="#collapseA2" data-toggle="collapse" data-target="#collapsibleFlush2Collapse2" aria-controls="collapsibleFlush2Collapse2" aria-expanded="false">¿Qué es Datos.gob.cl?</a></li>
                </ol>
              </div>
            </li>
            <li class="collapsible-links-item">
              <button class="collapsible-links-heading" id="collapsibleLinks2Heading2" type="button" data-toggle="collapse" data-target="#collapsibleLinks2Collapse2" aria-controls="collapsibleLinks2Collapse2" aria-expanded="false">2. Preguntas Institución</button>
              <div class="collapse" id="collapsibleLinks2Collapse2" aria-labelledby="collapsibleLinks2Heading2" data-parent="#collapsibleLinks2Accordion">
                <ol class="collapsible-links-list">
                  <li class="collapsible-links-list-item"><a class="collapsible-links-list-link" href="#collapseB1" data-toggle="collapse" data-target="#collapsibleFlush2Collapse3" aria-controls="collapsibleFlush2Collapse3" aria-expanded="false">¿Qué es Datos.gob.cl?</a></li>
                  <li class="collapsible-links-list-item"><a class="collapsible-links-list-link" href="#collapseB2" data-toggle="collapse" data-target="#collapsibleFlush2Collapse4" aria-controls="collapsibleFlush2Collapse4" aria-expanded="false">¿Quién es el responsable de cargar los datos de mi institución?</a></li>
                </ol>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="col-md-8">
        <div class="pt-5" id="collapsibleFlush2Accordion">
          <section class="mb-5">
            <h2 class="h3 mb-3">1. Preguntas Generales</h2>
            <ol class="list-unstyled">
              <li class="border-bottom border-accent" id="collapseA1">
                <button class="btn text-left w-100 d-flex align-items-start justify-content-between py-4 px-3" id="collapsibleFlush2Heading1" type="button" data-toggle="collapse" data-target="#collapsibleFlush2Collapse1" aria-controls="collapsibleFlush2Collapse1" aria-expanded="false"><span class="h3 mb-0">¿Qué es Datos.gob.cl?</span><span class="toggler-icon cl cl-m-arrow-down cl-2x" aria-hidden="true"></span></button>
                <div class="collapse" id="collapsibleFlush2Collapse1" aria-labelledby="collapsibleFlush2Heading1" data-parent="#collapsibleFlush2Accordion">
                  <div class="pr-5 pb-3 pl-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                </div>
              </li>
              <li class="border-bottom border-accent" id="collapseA2">
                <button class="btn text-left w-100 d-flex align-items-start justify-content-between py-4 px-3" id="collapsibleFlush2Heading2" type="button" data-toggle="collapse" data-target="#collapsibleFlush2Collapse2" aria-controls="collapsibleFlush2Collapse2" aria-expanded="false"><span class="h3 mb-0">¿Para qué sirve datos.gob.cl?</span><span class="toggler-icon cl cl-m-arrow-down cl-2x" aria-hidden="true"></span></button>
                <div class="collapse" id="collapsibleFlush2Collapse2" aria-labelledby="collapsibleFlush2Heading2" data-parent="#collapsibleFlush2Accordion">
                  <div class="pr-5 pb-3 pl-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </section>
          <section class="mb-5">
            <h2 class="h3 mb-3" id="collapseB">2. Preguntas Institución</h2>
            <ol class="list-unstyled">
              <li class="border-bottom border-accent" id="collapseB1">
                <button class="btn text-left w-100 d-flex align-items-start justify-content-between py-4 px-3" id="collapsibleFlush2Heading3" type="button" data-toggle="collapse" data-target="#collapsibleFlush2Collapse3" aria-controls="collapsibleFlush2Collapse3" aria-expanded="false"><span class="h3 mb-0">¿Cómo puede participar mi institución?</span><span class="toggler-icon cl cl-m-arrow-down cl-2x" aria-hidden="true"></span></button>
                <div class="collapse" id="collapsibleFlush2Collapse3" aria-labelledby="collapsibleFlush2Heading3" data-parent="#collapsibleFlush2Accordion">
                  <div class="pr-5 pb-3 pl-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                </div>
              </li>
              <li class="border-bottom border-accent" id="collapseB2">
                <button class="btn text-left w-100 d-flex align-items-start justify-content-between py-4 px-3" id="collapsibleFlush2Heading4" type="button" data-toggle="collapse" data-target="#collapsibleFlush2Collapse4" aria-controls="collapsibleFlush2Collapse4" aria-expanded="false"><span class="h3 mb-0">¿Quién es el responsable de cargar los datos de mi institución?</span><span class="toggler-icon cl cl-m-arrow-down cl-2x" aria-hidden="true"></span></button>
                <div class="collapse" id="collapsibleFlush2Collapse4" aria-labelledby="collapsibleFlush2Heading4" data-parent="#collapsibleFlush2Accordion">
                  <div class="pr-5 pb-3 pl-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>  
`,
})
