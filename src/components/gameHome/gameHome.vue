<template>
  <div class="gameHome-wrap">
    <div class="circle-frame">
      <div class="circle-body">
        <p>我的数值</p>
      </div>
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
        <p>我的财富</p>
        <p>{{mine.money}}</p>
      </div>
      <div class="circle-body">
        <p>我的力量</p>
        <p>{{mine.p}}</p>
        <p>价格：{{pMoney}}</p>
        <span @click="click('p')">点击升级力量</span>
      </div>
      <div class="circle-body">
        <p>我的精神</p>
        <p>{{mine.s}}</p>
        <p>价格：{{sMoney}}</p>
        <span @click="click('s')">点击升级精神</span>
      </div>
      <div class="circle-body">
        <p>我的体质</p>
        <p>{{mine.t}}</p>
        <p>价格：{{tMoney}}</p>
        <span @click="click('t')">点击升级体质</span>
      </div>
      <div class="circle-body">
        <span @click="updatePower">点击上传数据</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
  import {Getter, Action} from 'vuex-class';
  import {GameHomeData, LevelData} from '@/types/components/gameHome.interface';
  import {LoginState} from '@/types/components/login.interface';
  import {getLevel, updatePower} from '@/api';

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
      let wh = 100;
      let dwh = document.documentElement.clientWidth - 200;
      if (OwnSum > 10 && dwh > 100) {
        wh = OwnSum > dwh ? dwh : OwnSum;
      }
      this.style = 'width:' + wh + 'px;height:' + wh + 'px';
      let end: number = 100 / OwnSum;
      end = end * this.mine.p * this.mine.s * this.mine.t;
      this.OwnSpeed = end;
    }

    get pMoney() {
      let p: number = this.mine.p;
      let end: number = 1;
      while (p > 1) {
        end *= 2;
        p -= 1;
      }
      return end;
    }

    get sMoney() {
      let s: number = this.mine.s;
      let end: number = 1;
      while (s > 1) {
        end *= 2;
        s -= 1;
      }
      return end;
    }

    get tMoney() {
      let t: number = this.mine.t;
      let end: number = 1;
      while (t > 1) {
        end *= 2;
        t -= 1;
      }
      return end;
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
      this.mine.own = parseInt(this.mine.own, 10);
      this.mine.money = parseInt(this.mine.money, 10);
      for (let i = 1; i <= this.mine.level; i++) {
        OwnSum *= 10;
      }
      let time = setInterval(() => {
        this.mine.money += this.mine.level * (this.mine.level + 1);
        if (this.mine.own < OwnSum) {
          this.mine.own += this.mine.p * this.mine.s * this.mine.t;
          this.OwnCurrentRate = this.mine.own * 100 / OwnSum;
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

    click(str: string) {
      if (str === 'p') {
        if (this.mine.money < this.pMoney) {
          return;
        }
        this.mine.money -= this.pMoney;
        this.mine.p = parseInt(this.mine.p, 10);
        this.mine.p += 1;
      } else if (str === 's') {
        if (this.mine.money < this.sMoney) {
          return;
        }
        this.mine.s = parseInt(this.mine.s, 10);
        this.mine.money -= this.sMoney;
        this.mine.s += 1;
      } else if (str === 't') {
        if (this.mine.money < this.tMoney) {
          return;
        }
        this.mine.t = parseInt(this.mine.t, 10);
        this.mine.money -= this.tMoney;
        this.mine.t += 1;
      }
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

    updatePower() {
      if (this.mine === undefined) {
        return;
      }
      updatePower({
        id: this.mine.id,
        level: this.mine.level,
        own: this.mine.own,
        p: this.mine.p,
        money: this.mine.money,
        s: this.mine.s,
        t: this.mine.t
      }, 'POST').then((data: { flag: number; data: LevelData }) => {
        if (data.flag === 0) {
          console.log('上传成功');
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
      margin: 0 0 .3rem 0;
      background-color: aliceblue;

      p {
        margin: 0;
        font-size: .5rem;
      }

      span {
        font-size: .4rem;
        display: inline-block;
        box-shadow: 3px 3px 3px;
        height: .5rem;
        line-height: .5rem;
        padding: .1rem;
        color: red;
        border-radius: .2rem;
        margin-bottom: .3rem;
      }
    }
  }
</style>

