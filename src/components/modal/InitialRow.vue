<template>
  <div class="add-row">
      <button v-on:click="addColumn">
          Add Row
      </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { ContentTypes } from '../../store/constant/content-types'
import Layout from '../../class/layout/Layout'

const { COLUMN, DIVISION } = ContentTypes

export default {
  name: 'InitialRow',  
  methods: {
    ...mapMutations('htmlContents', ['addHtmlContent']),
    addColumn() {
      const layout = new Layout(COLUMN)
      const data = layout.renderContent()
      this.addHtmlContent(data)
    }
  }
}
</script>

<style lang="scss">  
  .add-row {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      z-index: 2;
      background: rgba(255, 255, 255, 0.6);
      text-align: center;
      padding-top: 20%;
  }
</style>
