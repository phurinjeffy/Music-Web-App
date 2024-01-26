import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
// import FullLayout from '../layouts/FullLayout.vue'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Library from '../views/Library.vue'
// import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
			{
        path: 'explore',
        component: Explore,
      },
			{
        path: 'library',
        component: Library,
      },
    ],
    props: (route: any) => ({ code: route.query.code || null }),
  },
  // {
  //   path: '/',
  //   component: FullLayout,
  //   children: [
  //     {
  //       path: 'login',
  //       component: Login,
  //     },
  //   ],
  // },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router