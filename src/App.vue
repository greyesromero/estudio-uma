<template>
<v-app :style="{background: $vuetify.theme.themes[theme].background}">
	
	
   
    <Background />
	<v-content class="primary" >
        
		<router-view :key="$route.fullPath"></router-View>
        
	</v-content>
	
</v-app>
</template>

<script>
import AppBar from './components/Navbar'
import Background from './components/Background'

export default {
	name: 'App',
	components: {
		AppBar,
        Background
	},
	data: () => ({
		//
	}),
	computed:{
		theme(){
		return (this.$vuetify.theme.dark) ? 'dark' : 'light'
		}
	},
	created: function () {
		this.$http.interceptors.response.use(undefined, function (err) {
			return new Promise(function (resolve, reject) {
				if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
				 this.$store.dispatch('logout')
				}
				throw err;
			});
		});

 
  },
};
</script>
<style>

 ::-webkit-scrollbar {
        width: 5px;
        height: 3px;
        border-left: 0;
        background: rgba(0, 0, 0, 0.1);
      }
      ::-webkit-scrollbar-track {
        background: none;
      }
      ::-webkit-scrollbar-thumb {
        background: #b09bc7;
        border-radius: 20;
      }

</style>

