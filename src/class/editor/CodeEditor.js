import { ContentTypes } from '../../store/constant/content-types'
import ColumnEditor from './ColumnEditor';
import ParagraphEditor from './ParagraphEditor';
import DivisionEditor from './DivisionEditor';

export default class CodeEditor {
  
  constructor() {
    this.elements = [];
  }

  setElements(elements){
    this.elements = elements
  }
  
  generateHtmlContents(){
    const { COLUMN, PARAGRAPH, DIVISION } = ContentTypes
    let codes = ''
    
    this.elements.forEach((el) => {
      const { type } = el
      
      if(type === COLUMN) {
        const editor = new ColumnEditor()
        editor.setElement(el)
        codes += editor.generateHtml()      
      } else if(type === PARAGRAPH) {
        const editor = new ParagraphEditor()
        editor.setElement(el)
        codes += editor.generateHtml()
      } else if(type === DIVISION) {
        const editor = new DivisionEditor()
        editor.setElement(el)
        codes += editor.generateHtml()
      }
    })
    
    return codes
  }

  previewHtmlContents(){
    const { COLUMN, PARAGRAPH, DIVISION } = ContentTypes
    let codes = ''

    this.elements.forEach((el, index) => {
      const { type } = el
      if(type === COLUMN) {
        const editor = new ColumnEditor()
        editor.setElement(el)
        codes += editor.previewHtml()     
      } else if(type === PARAGRAPH) {
        const editor = new ParagraphEditor()
        editor.setElement(el)
        codes += editor.previewHtml()
      } else if(type === DIVISION) {
        const editor = new DivisionEditor()
        editor.setElement(el)
        codes += editor.previewHtml()
      }
    })

    return codes
  }
}
