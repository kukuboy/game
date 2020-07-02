// login.Data 参数类型
export interface LoginData {
  componentName: string
}

// VUEX login.State 参数类型
export interface LoginState {
  p?: number;
  money?: number;
  own?: number;
  s?: number;
  t?: number;
  level?: number;

  [x: string]: any;

  data?: any;
}
