<template>
  <div class="div-menu">
    <drag class="drag" :transfer-data="settings">
      <span>&lt;column&gt;</span>          
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
  name: 'ColumnTool',
  data: () => {
    return {
      settings: {
        type: ContentTypes.COLUMN
      },
    }
  },
  components: {
    Drag,
  },
}
</script>
