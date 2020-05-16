import { uuid } from 'vue-uuid';

// Abstract class
export default class Content {

  setContent(){
    return {
      id: uuid.v1(),
      style: [],
    }
  }
}