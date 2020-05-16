import Content from "./Content";
import { ContentTypes } from "../../store/constant/content-types";
import DivisionLayout from "./DivisionLayout";

export default class ColumnLayout extends Content{
   
   getChildren(){
     const division = new DivisionLayout()
     return [
       division.getContent()
     ]
   }

   getContent(){
     return { ...this.setContent(), ...{ 
          type: ContentTypes.COLUMN,
          columns: 1,
          children: this.getChildren(),
        }
     }      
   }
}