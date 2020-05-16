import Content from "./Content";
import { ContentTypes } from "../../store/constant/content-types";

export default class DivisionLayout extends Content{
  
   getContent(){
     return { ...this.setContent(), ...{ 
          type: ContentTypes.DIVISION,
          class: '',
          children:[]
        }
     }      
   }
}