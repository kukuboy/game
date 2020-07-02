<template>
  <div class="gameSetting-wrap">
    {{data.componentName}}
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { GameSettingData } from '@/types/components/gameSetting.interface'
  // import {  } from "@/components" // 组件

  @Component({})
  export default class About extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: GameSettingData = {
      componentName: 'gameSetting'
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

  .gameSetting-wrap {
    width: 100%;
  }
</style>

