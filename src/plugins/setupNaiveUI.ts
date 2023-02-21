import type { App } from 'vue'
import {
  create,
  NEl,
  NText,
  NSpace,
  NButton,
  NConfigProvider
} from 'naive-ui'

export default (app: App<Element>): void => {
  const naive = create({
    components: [
      NEl,
      NText,
      NSpace,
      NButton,
      NConfigProvider
    ]
  })
  app.use(naive)
}
