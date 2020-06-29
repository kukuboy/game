/**
* @author 水印红枫
* @date 2020/6/29 17:02
* @Description:
*/

<template>
  <div id="login">
    <input v-model="email">
    <input v-model="password">
    <button @click="login"></button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email:'2294211995@qq.com',
      password:'123'
    }
  },
  mounted() {
  },
  methods: {
    rule(){
      if(this.email===''){
        return false
      }else if(this.password===''){
        return false
      }else{
        return true
      }
    },
    login(){
      if(!this.rule()){
        return
      }
      this.$http.login({
        email,
        password
      }).then(res=>{
        if(res.flag===0){
          this.getPower()
        }
      })
    }
  }
}
</script>

<style scoped>
  #login {
  }
</style>
