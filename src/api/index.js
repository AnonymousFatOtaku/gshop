// 包含多个接口请求函数的模块,函数返回值：promise对象
import ajax from './ajax'

const BASE_URL = '/api'

// 获取地址信息(根据经纬度串)
export const reqAddress = (geohash) => ajax('${BASE_URL}/position/${geohash}')

// 获取msite页面食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')

// 获取msite商铺列表(根据经纬度)
export const reqShops = (latitude, longitude) => ajax(BASE_URL + '/shops', {latitude, longitude})

// 账号密码登录

// 获取短信验证码

// 手机号验证码登录

// 获取用户信息(根据会话)

// 请求登出
