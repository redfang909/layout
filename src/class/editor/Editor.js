import { ContentTypes } from '../../store/constant/content-types'

export default class Editor {

  constructor() {
    this.element = {}
    this.level = 0
  }

  getLevel(){
    return this.level
  }

  setLevel(level){
    this.level = level
  }

  getElement(){
    return this.element
  }
  
  setElement(element){
    this.element = element
  }

  addSpace(val = 0){
    const num = val * 2
    return Array(num).fill('\xa0').join('')
  }

  newLine(){
    return '\n'
  }
}
