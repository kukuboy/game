<template>
  <div class="music-wrap">
    {{data.componentName}}
    <van-cell-group>
      <van-field v-model="value" label="输入" placeholder="点击唤起键盘"/>
    </van-cell-group>
    <p>{{keyArray}}</p>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import {Getter, Action} from 'vuex-class';
  import {MusicData} from '@/types/components/music.interface';
  // import {  } from "@/components" // 组件

  @Component({})
  export default class About extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string;

    // data
    data: MusicData = {
      componentName: 'music'
    };
    keyArray: any = [];

    created() {
      //
    }

    activated() {
      //
    }

    $destroy(): void {
      document.removeEventListener('keydown', this.keydown, false);
    }

    mounted() {
      //
      this.init();
    }

    init() {
      document.addEventListener('keydown', this.keydown, false);
    }

    keydown(event: any) {
      this.keyArray.push(event.key);
      if (this.keyArray.length > 20) {
        this.keyArray = this.keyArray.splice(1);
        try {
          let music = new Audio();
          music.src = '@/assets/music/1.wav';
        } catch (e) {
          console.log(e, '播放出错');
        }
      }
    }

  }
</script>

<style lang="scss">
  @import "@/assets/scss/variables";

  .music-wrap {
    width: 100%;
  }
</style>

