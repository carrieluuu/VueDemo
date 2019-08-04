import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserDatabase from '@/components/UserDatabase'
import ProductList from '@/components/ProductList'
import Articles from '@/components/Articles'
import ProductDetail from '@/components/ProductDetail'
import ProductFullDetail from '@/components/ProductFullDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/UserDatabase',
      name: 'UserDatabase',
      component: UserDatabase
    },
    {
      path: '/ProductList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/ProductFullDetail',
      name: 'ProductFullDetail',
      component: ProductFullDetail
    }
  ]
})
