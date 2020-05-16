<template>
  <div class="code-editor" v-bind:class="viewCode">
    <div class="copy-block">
      <button type="button"
      v-clipboard:copy="generateHtml"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">
        <span>C</span>
        <span>O</span>
        <span>P</span>
        <span>Y</span>
      </button>
    </div>     
    <prism-editor :code="generateHtml" language="html" :readonly="true" :line-numbers="lineNumbers" class="my-editor" />
    <a href="#" class="close-btn" @click="onCloseEditor">X</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ContentTypes } from '../store/constant/content-types'
import CodeEditor from '../class/editor/CodeEditor'

const { COLUMN, PARAGRAPH, DIVISION } = ContentTypes

export default {
  name: "CodeEditor",
  props: {
    show: Boolean
  },
  data() {
    return {
      code: null,
      lineNumbers: true
    };
  },
  computed: {
    ...mapGetters('htmlContents', ['getHtmlContents']),
    generateHtml(){
      let print = ''
      const editor = new CodeEditor()
      editor.setElements(this.getHtmlContents)
      return editor.generateHtmlContents();
    },
    viewCode(){
      return this.show ? 'show' : '';
    }
  },
  methods: {
    onCopy(e) {
      if(e) {
        alert('You just copied html')
      }
    },
    onError(e) {
      alert('Failed to copy html')
    },
    onCloseEditor() {
      this.$emit('onCloseEditor', false) 
    }
  }
}
</script>
