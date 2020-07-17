// 路由器对象模块
import Vue from 'vue'
import VueRouter from "vue-router"

// 路由组件懒加载，一般应用于模块较多较大的组件，小的可以不用避免浪费请求
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Login = () => import('../pages/Login/Login.vue')
const Shop = () => import('../pages/Shop/Shop.vue')
const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods.vue')
const ShopRatings = () => import('../pages/Shop/ShopRatings/ShopRatings.vue')
const ShopInfo = () => import('../pages/Shop/ShopInfo/ShopInfo.vue')

// 声明使用插件
Vue.use(VueRouter)

// 向外暴露
export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite, // 返回路由组件的函数,只有执行此函数才会加载路由组件,这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    ,
    {
      path: '/login',
      component: Login,
    },
    // 默认显示
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods,
        },
        {
          path: '/shop/ratings',
          component: ShopRatings,
        },
        {
          path: '/shop/info',
          component: ShopInfo,
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
  ]
})
