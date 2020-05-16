<template>
  <div class="div-menu">
    <drag class="drag" :transfer-data="settings">
      <span>&lt;Div&gt;</span>          
    </drag>
    <div class="div-setting set-form">
       <div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Add class name">
          </div>
       </div>
    </div>
  </div>  
</template>

<script>
import { Drag } from 'vue-drag-drop'
import { ContentTypes } from '../../store/constant/content-types'

export default {
  name: 'DivisionTool',
  props: {
    data: Object,
  },
  data: () => {
    return {
      settings: {
        type: ContentTypes.DIVISION
      },
    }
  },
  components: {
    Drag,
  },
}
</script>
