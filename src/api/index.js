// 包含多个接口请求函数的模块,函数返回值：promise对象
import ajax from './ajax'

const BASE_URL = '/api'

// 获取地址信息(根据经纬度串)
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

// 获取msite页面食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')

// 获取msite商铺列表(根据经纬度)
export const reqShops = (latitude, longitude) => ajax(BASE_URL + '/shops', {latitude, longitude})

// 根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})

// 账号密码登录，两个以上参数时最好使用对象
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')

// 获取短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})

// 手机号验证码登录，SMS短信，MMS彩信
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')

// 获取用户信息(根据会话)
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

// 请求登出
export const reqLogout = () => ajax(BASE_URL + '/logout')

// 获取商家信息
export const reqShopInfo = () => ajax('/info')

// 获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')

// 获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
