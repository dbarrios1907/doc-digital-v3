import { storyPath } from '~/components/style-guide/story.utils'

export default {
  title: storyPath,
  // decorators: [withKnobs, () => ({
  //   template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  // })]
}

export const BannerStory = () => ({
  template: `<Banner />`,
})
