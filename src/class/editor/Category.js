import { ContentTypes } from '../../store/constant/content-types'
import DivisionEditor from './DivisionEditor'
import ParagraphEditor from './ParagraphEditor'
import ColumnEditor from './ColumnEditor'

export default class Category {
  constructor(){
    this.element = {}
  }

  getElement(){
    return this.element
  }

  setElement(element){
    this.element = element
  }

  renderEditorContent(level, preview = false){
    const { COLUMN, DIVISION, PARAGRAPH } = ContentTypes
    const { type } = this.getElement()
    let editor = null

    switch(type){
      case DIVISION:
        editor = new DivisionEditor()        
        break
      case PARAGRAPH:
        editor = new ParagraphEditor()
        break
      case COLUMN:
        editor = new ColumnEditor()
        break
    }

    editor.setElement(this.getElement())
    editor.setLevel(level)

    return preview ? editor.previewHtml() : editor.generateHtml()
  }
}
