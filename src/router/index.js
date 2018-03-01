import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Products from '@/components/Products'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
