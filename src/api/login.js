import fetch from '../utils/fetch'

//登录
export function LoginByPhone(data) {
  return fetch({
    url: '/login/LoginByPhone',
    method: 'post',
    data
  })
}

//注册
export function regWithPhone(data) {
  return fetch({
    url: '/login/regWithPhone',
    method: 'post',
    data
  })
}


//倒计时功能
export function sendCode(data) {
  return fetch({
    url: '/login/sendCode',
    method: 'post',
    data
  })
}

//登录里的忘记密码手机
export function findPasswordByPhone(data) {
  return fetch({
    url: '/login/findPasswordByPhone',
    method: 'post',
    data:data
  })
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  })
}

