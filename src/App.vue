<template>
  <div id="app" class="App">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script lang="ts">
  import { Vue } from 'vue-property-decorator';

  export default class App extends Vue {

    created() {
      //
    }

    activated() {
      //
    }

    mounted() {
      // 加载完成后调用
      this.init();
    }

    init() {
      console.log('欢迎进入该系统');
      document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 7.5 + 'px';
    }

  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 0;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
