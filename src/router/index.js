import Vue from 'vue'
import Router from 'vue-router'
import Error from '@/components/404'
import Task from "@/components/Task"
import Reward from "@/components/Reward";
import Mine from "@/components/Mine";
import Add from "@/components/Add";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'error',
      component: Error
    },
    {
      path: '/',
      name: 'Task',
      component: Task
    },
    {
      path: '/reward',
      name: 'Reward',
      component: Reward
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
