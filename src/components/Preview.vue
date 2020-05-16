<template>
  <div class="preview-html" v-html="generateHtml"></div>
</template>

<script>
import { mapGetters } from 'vuex'
import CodeEditor from '../class/editor/CodeEditor'

export default {
  name: 'Preview',
  data: function(){
    return {
      preview: ''
    }
  },
  computed: {
    ...mapGetters('htmlContents', ['getHtmlContents']),
    generateHtml(){
      let print = ''
      const editor = new CodeEditor()
      editor.setElements(this.getHtmlContents)
      return editor.previewHtmlContents();
    },
    viewCode(){
      return this.show ? 'show' : '';
    }
  },
  created: function(){
    const el = document.body;
    el.classList.add('preview');

  }
}
</script>
