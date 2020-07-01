<template>
  <div class="login-wrap">
    <div class="login-frame">
      <h3>欢迎你的登录</h3>
      <van-form @submit="onSubmit">
        <van-field
          v-model="email"
          name="邮箱"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import {Getter, Action} from 'vuex-class';
  import {LoginData, LoginState} from '@/types/components/login.interface';
  // import {  } from "@/components" // 组件
  import {loginIn, getPower} from '@/api';


  @Component({})
  export default class About extends Vue {
    @Action UPDATE_STATE_ASYN: any;
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string;

    // data
    data: LoginData = {
      componentName: 'login'
    };
    email: string = '';
    password: string = '';
    myId: number | undefined;
    mine: LoginState | undefined;

    created() {
      //
    }

    activated() {
      //
    }

    mounted() {
      //
    }

    onSubmit() {
      console.log('你点击了登录');
      loginIn({
        email: this.email,
        password: this.password
      }, 'POST').then((data: { flag: number; data: { id: number; }; }) => {
        if (data.flag === 0) {
          this.myId = data.data.id;
          this.getPower();
        }
      });
    }

    getPower() {
      getPower({
        id: this.myId
      }, 'POST').then((data: { flag: number; data: object | undefined; }) => {
        if (data.flag === 0) {
          this.mine = {login: {mine: data.data}};
          this.$store.dispatch('UPDATE_STATE_ASYN', this.mine);
          this.$router.push({
            name: 'game'
          });
        }
      });
    }

  }
</script>

<style lang="scss">
  @import "@/assets/scss/variables";

  .login-wrap {
    width: 100%;
  }

  .login-frame {
    padding: 1rem
  }
</style>

