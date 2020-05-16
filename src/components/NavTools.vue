<template>
  <div id="html-tools">
    <ul>
      <li>
        <column-tool />
      </li>
      <li>
        <paragraph-tool />
      </li>
      <li>
        <division-tool />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Drag } from 'vue-drag-drop'
import { ContentTypes } from '../store/constant/content-types'
import DivisionTool from './tools/DivisionTool.vue'
import ColumnTool from './tools/ColumnTool.vue'
import ParagraphTool from './tools/ParagraphTool.vue'

export default {
  name: 'HtmlTools',
  components: {
    Drag,
    DivisionTool,
    ColumnTool,
    ParagraphTool
  },
  data: () => {
    return {
      isRender: false,
      ContentTypes
    }
  },
  methods: {
    ...mapMutations(['addHtmlContent']),
    addColumn() {
      const data = {
        id: this.$uuid.v1(),
        type: ContentTypes.COLUMN,
        columns: 2,
        style: []
      }
      this.addHtmlContent(data)
    },
    handleDrop(data, event) {
      
      alert(`You dropped with data: ${JSON.stringify(data)}`);
    },
     handleDrop2(data, event) {
       console.log(event);
       
      console.log(event.target.value)
      event.stopPropagation();
      alert(`You dropped with data:xxxxx ${JSON.stringify(data)}`);
    },
     handleDrop3(data, event) {
      alert(`redfang90 ${JSON.stringify(data)}`);
      const data2 = {
        id: 2,
        type: 3,
        columns: 2,
        style: []
      }
      this.addHtmlContent(data2)
      event.stopPropagation();
      
    },
  }
}
</script>
