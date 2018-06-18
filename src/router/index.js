import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        //untuk check ketika di enter kalo nama nya gak diisi
        if (to.params.name) {
          next()
        } else {
          next({ name: 'Welcome' })
        }
      }
    }
  ]
})
