import Editor from './Editor'
import Category from './Category'

export default class ColumnEditor extends Editor {
  
  getChildren(preview = false){
    const level = this.getLevel() + 1
    let element = ''
    this.getElement().children.forEach((el) => {    
      const category = new Category()
      category.setElement(el)      
      element += category.renderEditorContent(level, preview)
    })

    return element
  }

  generateHtml() {
    const level = this.getLevel()
    let element = ''

    if (level > 0) {
      element += this.newLine() + this.addSpace(level)
    }
    element += '<div class="row">'    
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
    
    element += '<div class="row">'    
    element += this.getChildren(true)
    element += '</div>'

    return element
  }
}