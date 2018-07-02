import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login.vue'
import Register from '@/view/Register.vue'
import Home from '@/view/home.vue'
import Detail from '@/view/detail.vue'
import Message from '@/view/message.vue'

import Echarts from '@/components/echarts.vue'
import Table from '@/components/table.vue'
import Upload from '@/components/up_load.vue'
import TabsCard from '@/components/tabs_card.vue'
import Pagination from '@/components/pagination.vue'
import Carousel from '@/components/carousel.vue'
import Form from '@/components/form.vue'
import TreeDetail from '@/components/treedetail.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'login' //重定向到home
    },

    {
       path: '/home',
       name: 'home',
       component: Home,

       children:[
        {
          path:'/',
          name:'home',
          redirect:'echarts'  //默认右侧显示统计图组件
        },{
          path:'/home/echarts',
          name:"echarts",
          component:Echarts
        },{
          path:'/home/table',
          name:"table",
          component:Table
        },{
          path:'/home/carousel',
          name:"carousel",
          component:Carousel
        },{
          path:'/home/up_load',
          name:"up_load",
          component:Upload
        },{
          path:'/home/tabs_card',
          name:"tabs_card",
          component:TabsCard
        },{
          path:'/home/pagination',
          name:"pagination",
          component:Pagination
        },{
          path:'/home/form',
          name:"form",
          component:Form
        },{
          path:'/home/treedetail',
          name:'treedetail',
          component:TreeDetail
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
    
  ]
})
