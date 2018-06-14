import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageEditYoutubeId from '@/components/PageEditYoutubeId'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editYoutube',
      name: 'PageEditYoutubeId',
      component: PageEditYoutubeId
    }
  ]
})
