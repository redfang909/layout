<template>
  <row>
    <div v-for="child in data.children"
      :key="child.id"
      v-bind:class="setClassColumn"
      class="column-layoutcol-drop"
    >
      <html-content :data="child" />
    </div>    
  </row>
</template>

<script>
import { mapMutations } from 'vuex'
import { Drop } from 'vue-drag-drop'
import { dragDropMixin } from '../../mixins/drag-drop-mixin'

export default {
  name: 'ColumnLayout',
  props: {
    data: Object,
  },
  mixins: [dragDropMixin],
  components: {
    Drop
  },
  computed: {
    setClassColumn() {
      return this.data.col ? 'col-' + this.data.col : 'col-12'
    }
  },  
}
</script>
