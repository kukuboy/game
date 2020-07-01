// login.Data 参数类型
export interface LoginData {
  componentName: string
}

// VUEX login.State 参数类型
export interface LoginState {
  [x: string]: any;
  data?: any
}
