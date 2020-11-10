import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdi',
	},
	theme: {
		themes: {
			light: {
			primary: '#121821',
			secondary: '#b09bc7',
			accent: '#ffe4f2',
			background: '#121821'
			},
			dark: {
			primary: '#ef6a49',
			secondary: '#1f2029',
			accent: '#e6e7e8',
			background: '#0e1219'
			},
		},
	},
});