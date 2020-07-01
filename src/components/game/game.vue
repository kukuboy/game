<template>
  <div class="game-wrap">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item name="gameHome" :badge=badgeOne>
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="gameSetting" :badge=badgeTwo icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator';
  import {Getter, Action} from 'vuex-class';
  import {GameData, IconData} from '@/types/components/game.interface';
  import {LoginState} from '@/types/components/login.interface';
  // import {  } from "@/components" // 组件

  @Component({})
  export default class About extends Vue {
    // getter
    @Getter mine: LoginState | undefined;
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string;

    // data
    data: GameData = {
      componentName: 'game'
    };
    active: string = 'gameHome';
    badgeOne: string = '';
    badgeTwo: string = '';
    icon: IconData = {
      active: 'https://img.yzcdn.cn/vant/user-active.png',
      inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };

    // 监听数据
    @Watch('active', {
      deep: true,
      immediate: true
    })
    pageChange() {
      this.$router.push({
        name: this.active
      });
    }

    created() {
      //
    }

    activated() {
      //
    }

    mounted() {
      //
      console.log(this.mine);
    }

  }
</script>

<style lang="scss">
  @import "@/assets/scss/variables";

  .game-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
  }
</style>

