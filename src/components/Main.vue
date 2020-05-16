<template>
  <div id="main-wrapper" class="clearfix">
    <div id="layout-grid">
      <div class="container-fluid">
        <div class="row header">
          <div class="col-12">
            <div class="top-block">
              <router-link class="code-btn" to="/preview">Preview</router-link>
              <button class="code-btn" @click="onCodeView">&lt;CODE&gt;</button>
            </div>
          </div>
        </div>
        <div id="main">
          <div class="row">
            <div class="col-12">
              
              <div id="block-content">            
                <div class="container-fluid">
                  <!-- -->
                  <!-- <division-layout v-for="content in getHtmlContents" :key="content.id" :data="content" />       -->
                  <drop class="drop division-layout" @drop="handleParentDrop">
                    <html-content v-for="content in getHtmlContents" :key="content.id" :data="content" />
                  </drop> 
                  <!-- <initial-row v-if="getHtmlContents.length == 0" />  -->
                </div>                
              </div>          
            </div>
          </div>
        </div>        
      </div>   
    </div>  
    <nav-tools/>
    <code-editor :show="isView" @onCloseEditor="onClose" />    
  </div>  
</template>

<script>
import { mapGetters } from 'vuex'
import { Drop, Drag } from 'vue-drag-drop'
import { ContentTypes } from '../store/constant/content-types'
import { dragDropMixin } from '../mixins/drag-drop-mixin'
import InitialRow from './modal/InitialRow.vue'
import NavTools from './NavTools.vue'
import ColumnLayout from './layout/ColumnLayout.vue'
import CodeEditor  from './CodeEditor.vue'
import DivisionLayout from './layout/DivisionLayout.vue'

const { COLUMN } = ContentTypes

export default {
  name: 'Main',  
  components: {
    Drop,
    Drag,
    InitialRow,
    NavTools,
    ColumnLayout,
    CodeEditor,
    DivisionLayout,
  },
   data: function() {
    return {
      isView: false
    }
  },
  mixins: [dragDropMixin],
  computed: {
   ...mapGetters('htmlContents', ['getHtmlContents'])
  },
  methods:{
    onCodeView(){
      this.isView = true
    },
    onClose(value){   
      this.isView = false
    }
  },
  created: function(){
    const el = document.body;
    el.classList.remove('preview');
  }
}
</script>
