<template>
  <fragment>
    <column-layout  v-if="data.type == ContentTypes.COLUMN" :data="data" />
    <paragraph-layout v-if="data.type == ContentTypes.PARAGRAPH" :data="data" />
    <division-layout v-if="data.type == ContentTypes.DIVISION" :data="data" /> 
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { ContentTypes } from '../store/constant/content-types'
import ParagraphLayout from '../components/layout/ParagraphLayout.vue'
import DivisionLayout from '../components/layout/DivisionLayout.vue'
import ColumnLayout from '../components/layout/ColumnLayout.vue'

export default {
  props: {
    data: Object,
  },
  data: function() {
    return {
      ContentTypes,
    }
  },
  components: {
    Fragment,
    ParagraphLayout,
    DivisionLayout,
    ColumnLayout,
  }
}
</script>
