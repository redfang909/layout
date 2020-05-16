import { mapMutations } from 'vuex'
import { ContentTypes } from '../store/constant/content-types'
import Layout from '../class/layout/Layout'

const { COLUMN, PARAGRAPH, SPAN, DIVISION } = ContentTypes

export const dragDropMixin = {
  methods: {
    ...mapMutations('htmlContents', [
      'addChildrenContent',
      'addHtmlContent'
    ]),
    handleDrop(data, event) {
      const { type } = data
      const layout = new Layout(type)
      const content = layout.renderContent()
      this.addChildrenContent({ data: this.data, content })
      event.stopPropagation()
    },    
    handleParentDrop(data, event) {
      const { type } = data
      const layout = new Layout(type)
      const content = layout.renderContent()
      this.addHtmlContent(content)
      event.stopPropagation()
    },    
  }
}