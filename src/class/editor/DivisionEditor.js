import Editor from './Editor'
import Category from './Category'

export default class DivisionEditor extends Editor {
      
  getChildren(preview = false){
    const { children } = this.getElement()   
    const level = this.getLevel() + 1
    let element = ''

    children.forEach((el) => {    
      const category = new Category()    
      category.setElement(el)      
      element += category.renderEditorContent(level, preview)
    })

    return element
  }

  generateHtml() {
    const level = this.getLevel()
    let element = ''
    console.log(level);
    
    if(level > 0) {
      element += this.newLine() + this.addSpace(level)
    }
    element += '<div class="col-12 colx">'    
    element += this.getChildren()    
    element += this.newLine() + this.addSpace(level)
    element += '</div>'

    if(level === 0) {
      element += this.newLine()
    }
    
    return element
  }

  previewHtml(){
    let element = ''
    
    element += '<div class="col-12 colx">'    
    element += this.getChildren(true)
    element += '</div>'

    return element
  }
}
