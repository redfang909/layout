<template>
  <drop class="drop division-layout" @drop="handleDrop">
    <html-content v-for="child in data.children" :key="child.id" :data="child" />
  </drop>
</template>

<script>
import { mapMutations } from 'vuex'
import { Fragment } from 'vue-fragment'
import { Drop } from 'vue-drag-drop'
import { dragDropMixin } from '../../mixins/drag-drop-mixin'

export default {
  name: 'DivisionLayout',
  props: {
    data: Object,
  },
  mixins: [dragDropMixin],
  components: {
    Fragment,
    Drop,
  },
}
</script>
