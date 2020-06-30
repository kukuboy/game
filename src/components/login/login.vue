<template>
  <div class="login-wrap">
    <div class="login-frame">
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
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { LoginData } from '@/types/components/login.interface'
  // import {  } from "@/components" // 组件

  @Component({})
  export default class About extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: LoginData = {
      componentName: 'login'
    }
    email: string = ''
    password: string = ''

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
      console.log('你点击了登录')
    }

  }
</script>

<style lang="scss">
  @import "@/assets/scss/variables";

  .login-wrap {
    width: 100%;
  }
  .login-frame{
    padding: 10rem 1rem
  }
</style>

