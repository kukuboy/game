<template>
  <div class="music-wrap">
    {{data.componentName}}
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { MusicData } from '@/types/components/music.interface'
  // import {  } from "@/components" // 组件

  @Component({})
  export default class About extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: MusicData = {
      componentName: 'music'
    }

    created() {
      //
    }
    
    activated() {
      //
    }

    mounted() {
      //
    }

  }
</script>

<style lang="scss">
  @import "@/assets/scss/variables";

  .music-wrap {
    width: 100%;
  }
</style>

