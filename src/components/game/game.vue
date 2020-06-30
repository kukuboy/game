<template>
  <div class="game-wrap">
    {{data.componentName+JSON.stringify((mine))}}
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { GameData } from '@/types/components/game.interface'
  // import {  } from "@/components" // 组件

  @Component({})
  export default class About extends Vue {
    // getter
    @Getter mine: any
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: GameData = {
      componentName: 'game'
    }

    created() {
      //
    }

    activated() {
      //
    }

    mounted() {
      //
      console.log(this.mine)
    }

  }
</script>

<style lang="scss">
  @import "@/assets/scss/variables";

  .game-wrap {
    width: 100%;
  }
</style>

