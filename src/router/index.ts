import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Library from '../views/Library.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/explore',
			component: Explore
		},
    {
			path: '/library',
			component: Library
		},
	],
})

export default router