import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { loader } from './modules/loader';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const baseURL = 'https://choosemyfitness-api.herokuapp.com/api/';

export default new Vuex.Store({

  	state: {
		showed: false,
		status: '',
		token: '',
		user : {},
		patients: [],
		loading: false
	},
	getters : {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
		showedStatus: state => state.showed,
		getUser: state => {
			return state.user;
		},
	},
	modules: {
		loader
	},
	mutations: {
		change_showed(state, showed) {
			state.showed = showed
		},
		changeLoadingState(state, loading) {
			state.loading = loading
		},
		auth_request(state){
			state.status = 'loading'
		},
		auth_success(state, token, user){
			state.status = 'success'
			state.token = token
			state.user = user
		},
		auth_error(state){
			state.status = 'error'
		},
		logout(state){
			state.status = ''
			state.token = ''
			state.user = ''
		},
		SET_USER: (state, user) => {
			state.user = user;
		},
		UPDATE_USER: (state, user ) => {
			state.user.first_name = user.first_name
			state.user.last_name = user.last_name
			state.user.gender = user.gender
			state.user.birth_date = user.birth_date
			state.user.email = user.email
		
		},
		UPDATE_USER_IMAGE: (state, image) => {
			state.user.image = image
		},
	
	},
	actions: {
		register({commit}, user){
			return new Promise((resolve, reject) => {
				commit('auth_request')
				axios({url: baseURL + 'users/', 
					data: user,
					method: 'POST' })
				.then(resp => {
					resolve(resp)
				})
				.catch(err => {
					commit('auth_error')
					reject(err)
				})
			})
		},
		login({commit}, credentials){
			return new Promise((resolve, reject) => {
			  commit('auth_request')
			   axios({url: baseURL + 'users/login/', data: credentials, method: 'POST' })
			  .then(response => {
				const token = response.data.jwt
				const user = response.data.user
				localStorage.setItem('token', user.id)
				localStorage.setItem('user', JSON.stringify(user))
				axios.defaults.headers.common['Authorization'] = user.id
				commit('auth_success', token, user)
				commit('SET_USER', user);
				resolve(response)
			  })
			  .catch(err => {
				commit('auth_error')
				localStorage.removeItem('token')
				reject(err)
			  })
			})
		},
		token({commit}, email){
			return new Promise((resolve, reject) => {
				commit('auth_request')
				axios({url: baseURL + 'users/token/', data: email, method: 'POST' })
				.then(response => {
					resolve(response)
				})
				.catch(err => {
					commit('auth_error')
					localStorage.removeItem('token')
					reject(err)
				})
			})
		},
	
		logout({commit}){
			return new Promise((resolve) => {
				commit('logout')
				localStorage.removeItem('token')
				localStorage.removeItem('user')
				delete axios.defaults.headers.common['Authorization']
				resolve()
			})
		},
		getProfile({commit}, id){
			return new Promise((resolve, reject) => {
				commit('changeLoadingState', true)
				axios({url: baseURL + 'users/'+ id +'/', method: 'GET' })
				.then(response => {
					localStorage.setItem('user', JSON.stringify(response.data))
					commit('SET_USER', response.data);
					resolve(response)
					commit('changeLoadingState', false)
				})
				.catch(err => {
					commit('changeLoadingState', false)
					reject(err)
				})
			})
		},
		updateProfile({commit}, userData){
			return new Promise((resolve, reject) => {
				commit('changeLoadingState', true)
					axios.patch(baseURL + 'users/' + userData.id + '/', userData)
				.then(response => {
					commit('changeLoadingState', false)
					commit('UPDATE_USER', response.data);
					localStorage.setItem('user', JSON.stringify(response.data))
					resolve(response)
				})
				.catch(err => {
					commit('changeLoadingState', false)
					reject(err)
				})
			})
		},
		updateShowed({commit}, state){
			commit('change_showed', state)
		},
	},
	plugins: [new VuexPersistence().plugin]
})