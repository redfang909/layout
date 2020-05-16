import { ContentTypes } from "../../store/constant/content-types";
import ColumnLayout from "./ColumnLayout";
import DivisionLayout from "./DivisionLayout";
import ParagraphLayout from "./ParagraphLayout";

export default class Layout {
  constructor(type = ''){
    this.type = type
  }

  setType(type){
    this.type = type
  }

  getType(){
    return this.type  
  }

  evaluateLayoutType(){
    const { COLUMN, DIVISION, PARAGRAPH } = ContentTypes
    let layout;
    switch(this.getType()){
      case COLUMN:
        layout = new ColumnLayout()
        break
      case DIVISION:
        layout = new DivisionLayout()
        break  
      case PARAGRAPH:
        layout = new ParagraphLayout()
        break
    } 

    return layout.getContent()
  }

  renderContent(){    
    return this.evaluateLayoutType()  
  }
}
