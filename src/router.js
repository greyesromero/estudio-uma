import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		
		{
			path: '/',
			name: 'home',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
		},
		{
			path: '/login',
			name: 'login',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
		},
	
		{
			path: '/dashboard',
			name: 'dashboard',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Dashboard.vue'),
			meta: { 
				requiresAuth: true
			}
		},
		{
			path: '/register',
			name: 'register',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Register.vue'),
			
		},
		{
			path: '/servicios',
			name: 'servicios',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Services.vue')
		},
		{
			path: '/clases-en-vivo',
			name: 'clases-en-vivo',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Clases.vue')
		},
		{
			path: '/especialistas',
			name: 'especialistas',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Especialistas.vue')
		},
		{
			path: '/portafolio',
			name: 'portafolio',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Portafolio.vue')
		},
		{
			path: '/profile',
			name: 'profile',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Profile.vue'),
			meta: { 
				requiresAuth: true
			}
		},
		{
			path: '/detail/:id',
			name: 'detail',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/BlogDetail.vue'),
			props: true,
			
		},
		{
			path: '/payment',
			name: 'payment',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Payment.vue'),
			
		}
	],
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 };
	}
})

export default router
router.beforeEach((to, from, next) => {
if(to.matched.some(record => record.meta.requiresAuth)) {
	if (store.getters.isLoggedIn) {
	next()
	return
	}
	next('/') 
	} else {
		
		next() 
	}
})