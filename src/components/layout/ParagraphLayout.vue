<template>
  <div class="paragraph-layout">    
    <p v-if="!edit" v-html="data.content"></p>
    <text-setting :isEdit="edit" :data="data" @onEventClick="updateData" />
  </div>    
</template>

<script>
export default {
  name: 'ParagraphLayout',
  props: {
    data: Object
  },
  data: function() {
    return {
      edit: false
    }
  },
  methods: {
    updateData({ edit }){
      this.edit = edit    
    }
  }
}
</script>
