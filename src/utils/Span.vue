<template>
  <fragment>    
    <span v-if="!edit" v-html="data.content"></span>  
    <text-setting :isEdit="edit" :data="data" @onEventClick="updateData" />
  </fragment>    
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  props: {
    data: Object
  },
  data: function() {
    return {
      edit: false
    }
  },
  components: {
    Fragment
  },
  methods: {
    updateData({ edit }){
      this.edit = edit    
    }
  }
}
</script>

<style lang="sass" scoped>
 
</style>
