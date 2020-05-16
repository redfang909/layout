<template>
  <div class="text-setting">
    <button v-if="!edit" @click="onEdit">Edit</button>    
    <div v-if="edit">
      <textarea v-model="text" v-on:blur="onBlur" placeholder="add multiple lines"></textarea>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    isEdit: Boolean, 
    data: Object,
  },
  data: function() {
    return {
      edit: this.isEdit,
      text: ''
    }
  },
  methods: {
    ...mapMutations('htmlContents', [
      'updateHtmlContent',
    ]),  
    onEdit() {
      this.edit = true
      this.$emit('onEventClick', { edit: true })
    },
    onBlur() {
      this.edit = false
      this.data.content = this.text
      this.$emit('onEventClick', { edit: false })
      this.updateHtmlContent(this.data)
    }
  }
}
</script>

<style>

</style>