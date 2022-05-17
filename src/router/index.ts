
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/src/views/Home.vue'

const routes = [
  { path: '/', name: 'root', component: Home },
  { path: '/home', name: 'home', redirect: { name: 'root' } },
  { path: '/sensors', name: 'sensors', component: () => import('/src/views/Sensors.vue') },
  { path: '/sensors/:id', name: 'sensors.show', component: () => import('/src/views/SensorShow.vue') },
  { path: '/sensors/:id/addEvent', name: 'sensors.addEvent', component: () => import('/src/views/AddEvent.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
