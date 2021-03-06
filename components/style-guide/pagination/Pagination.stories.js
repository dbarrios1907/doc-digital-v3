import { storyPath } from '~/components/style-guide/story.utils'

export default {
  title: storyPath,
  // decorators: [withKnobs, () => ({
  //   template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  // })]
}

export const PaginationStory = () => ({
  template: `
    <div>
      <nav class="pagination-container flex-column flex-sm-row a11y-fonts-flex-column a11y-fonts-flex-lg-row">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <div class="page-link disabled"><</div>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item d-none d-ss-block a11y-fonts-d-none a11y-fonts-d-sm-block"><a class="page-link" href="#">2</a></li>
          <li class="page-item a11y-fonts-d-none a11y-fonts-d-sm-block"><a class="page-link" href="#">...</a></li>
          <li class="page-item"><a class="page-link" href="#">70</a></li>
          <li class="page-item"><a class="page-link" href="#">></a></li>
        </ul>
      </nav>
      
      <nav class="pagination-container flex-column flex-sm-row a11y-fonts-flex-column a11y-fonts-flex-lg-row mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <div class="page-link disabled"><</div>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item d-none d-ss-block a11y-fonts-d-none a11y-fonts-d-sm-block"><a class="page-link" href="#">2</a></li>
          <li class="page-item a11y-fonts-d-none a11y-fonts-d-sm-block"><a class="page-link" href="#">...</a></li>
          <li class="page-item"><a class="page-link" href="#">70</a></li>
          <li class="page-item"><a class="page-link" href="#">></a></li>
        </ul>
        <div class="pagination-jump">
          <div class="page-text">saltar a la p&aacute;gina:</div>
          <form method="GET">
            <input type="hidden" name="q" value="chile"/>
            <input class="page-input form-control" type="text" name="p" value="1"/>
          </form>
        </div>
      </nav>
    </div>
  `,
})
