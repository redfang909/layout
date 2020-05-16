import Editor from './Editor'

export default class ParagraphEditor extends Editor {

  getContent(){
    const { content } = this.getElement()
    let numLimitWords = 20
    const wordList = content.split(' ')
    const numberOfText = wordList.length / numLimitWords
    const reminder = numberOfText % 1    
    const line = reminder != 0 ? 1 : 0
    const numberOfContents = ~~numberOfText + line;
    let element = ''    
    let sliceNum = 0
    
    for(let x = 1; x <= numberOfContents; x++){
      element += this.addSpace(2) + wordList.slice(sliceNum, numLimitWords).join(' ')
      element += this.newLine()
      sliceNum = numLimitWords
      numLimitWords += 20
    }
   
    return element
  }

  generateHtml() {
    const level = this.getLevel()
    let element = ''    
    
    if(level !== 0) {
      element += this.newLine() + this.addSpace(level)
    }
    element += '<p>'    
    element += this.newLine() + this.addSpace(level) 
    element += this.getContent()
    element += this.addSpace(level)
    element += '</p>'

    if(level === 0) {
      element += this.newLine()
    }

    return element
  }

  previewHtml(){
    const { content } = this.getElement()
    let element = ''
    
    element += '<p>'
    element += content
    element += '</p>'

    return element
  }
}
