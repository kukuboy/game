<template>
  <div class="gameHome-wrap">
    <div class="circle-frame">
      <div class="circle-body">
        <van-circle
          v-model="OwnCurrentRate"
          :rate="OwnCurrentRate"
          :color="gradientColor"
          :text="levelData.bright"
          :speed="OwnSpeed"
          stroke-width="200"
        />
      </div>
      <div class="circle-body" v-if="mine.level>10">
        <van-circle
          v-model="OwnCurrentRate"
          :rate="OwnCurrentRate"
          :color="gradientColor"
          :text="levelData.dark"
          :speed="OwnSpeed"
          stroke-width="200"
        />
      </div>
      <div class="circle-body">
        <van-circle
          :style="style"
          v-model="OwnCurrentRate"
          :rate="OwnCurrentRate"
          :color="gradientColor"
          :text="parseInt(mine.own)+''"
          :speed="OwnSpeed"
          stroke-width="300"
        />
      </div>
      <div class="circle-body">
        <p>p</p>
        <van-stepper @change="mineChange" v-model="mine.p" step="0.1" :decimal-length="1"/>
      </div>
      <div class="circle-body">
        <p>s</p>
        <van-stepper @change="mineChange" v-model="mine.s" step="0.1" :decimal-length="1"/>
      </div>
      <div class="circle-body">
        <p>t</p>
        <van-stepper @change="mineChange" v-model="mine.t" step="0.1" :decimal-length="1"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
  import {Getter, Action} from 'vuex-class';
  import {GameHomeData, LevelData} from '@/types/components/gameHome.interface';
  import {LoginState} from '@/types/components/login.interface';
  import {getLevel} from '@/api';

  @Component({})
  export default class About extends Vue {
    // getter
    @Getter mine: LoginState | any;
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string;

    // data
    data: GameHomeData = {
      componentName: 'gameHome'
    };
    levelData: LevelData = {
      level: 0,
      bright: '',
      dark: ''
    };
    // levelCurrentRate: number = 0;
    // levelRate: number = 1;
    gradientColor: any = {
      '0%': '#3fecff',
      '100%': '#6149f6',
    };
    OwnCurrentRate: number = 0;
    // OwnRate: number = 100;
    OwnSpeed: number = 1;
    style: string = `width:100px;height:100px`;

    @Watch('mine', {
      deep: true,
      immediate: true
    })
    mineChange() {
      let OwnSum: number = 1;
      for (let i = 1; i <= this.mine.level; i++) {
        OwnSum *= 10;
      }
      let wh;
      if (OwnSum > 10) {
        wh = OwnSum > document.documentElement.clientWidth - 100 ? document.documentElement.clientWidth - 100 : OwnSum;
      }
      this.style = 'width:' + wh + 'px;height:' + wh + 'px';
      let end: number = 100 / OwnSum;
      end = end * this.mine.p * this.mine.s * this.mine.t;
      this.OwnSpeed = end;
    }

    created() {
      //
    }

    activated() {
      //
    }

    mounted() {
      //
      this.init();
      this.query();
    }

    // 方法
    init() {
      let OwnSum: number = 1;
      for (let i = 1; i <= this.mine.level; i++) {
        OwnSum *= 10;
      }
      let time = setInterval(() => {
        if (this.mine.own < OwnSum) {
          this.mine.own += this.mine.p * this.mine.s * this.mine.t;
          this.OwnCurrentRate = this.mine.own * this.OwnSpeed;
        } else {
          clearInterval(time);
          this.mine.level++;
          this.mine.own = 0;
          this.OwnCurrentRate = 0;
          this.init();
          this.query();
        }
      }, 1000);
    }

    query() {
      this.getLevel();
    }

    getLevel() {
      if (this.mine === undefined) {
        return;
      }
      getLevel({
        level: this.mine.level
      }, 'POST').then((data: { flag: number; data: LevelData }) => {
        if (data.flag === 0) {
          this.levelData = data.data;
        }
      });
    }

  }
</script>

<style lang="scss">
  @import "@/assets/scss/variables";

  .gameHome-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .circle-frame {
    background-color: #2c3e50;

    .circle-body {
      p {
        margin: 0;
        font-size: .5rem;
      }

      margin: 0 0 .3rem 0;
      background-color: aliceblue;
    }
  }
</style>

