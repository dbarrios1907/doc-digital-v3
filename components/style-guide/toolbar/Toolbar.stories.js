import Vue from 'vue'
import Toolbar from './Toolbar'
import { storyPath } from '~/components/style-guide/story.utils'

Vue.use(Toolbar)

export default {
  title: storyPath,
  // decorators: [withKnobs, () => ({
  //   template: '<div class="p-3 overflow-auto w-100"><story /></div>',
  // })]
}

export const ToolbarStory = () => ({
  template: `<Toolbar />`,
})
