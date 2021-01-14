<template>
   	<div>
		<Navbar></Navbar>
		<v-content class="mb-10">
			<section>
				<div class="py-6 d-none d-sm-flex"></div>
				<v-container fluid class="text-center px-10 py-10">
					<div class="py-5"></div>
					<span
					style="font-family: 'AloneInSpace', Helvetica, Arial!important;"
					:class="[$vuetify.breakpoint.smAndDown ? 'headline align-self-start' : 'display-1 align-self-start']"
					class="secondary--text font-weight-bold py-5">
						Portafolio
					</span>
					<v-container fluid class="text-center px-10 my-8" :class="{'small-height': $vuetify.breakpoint. smAndDown, 'medium-height': $vuetify.breakpoint. mdAndUp}" style="max-width:1092px;overflow-y: scroll!important;">
						<v-row>
							<v-col cols="12" sm="6" md="4" v-for="n in projects" :key="n" >
							
								<v-card
									flat
									class="mx-auto elevation-0"
									max-width="400"
									color="transparent"
								>
									<v-img
									class="white--text align-end"
									gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
									height="200px"
									:src="'../assets/img/'+n.image+'.png'"
									>
									<v-card-title>{{ n.name }}</v-card-title>
									</v-img>



									<v-card-actions>
										<div class="white--text">
											{{n.category}}
										</div>
										<v-spacer></v-spacer>
										<v-btn icon :href="n.url" target="_blank">
											<v-icon color="accent">mdi-magnify-plus-outline</v-icon>
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-col>
						</v-row>
					</v-container>
				</v-container>
			
			</section>
    	</v-content>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Loader from '../components/Loader.vue'


export default {
	components: {
		Navbar,
		Loader,
        Footer
	
	},
	data: () => ({
		page: 1,
		perPage: 3,
		loading: false,
		icons: [
			'mdi-facebook',
			'mdi-instagram',
		],

	  	projects: [
			{
				id: 1,
				url: 'https://heartoftravel.org/',
				category: 'Diseño web',
				name: 'Heart of Travel',
				image: 'heart_of_travel'
			},
			{
				id: 2,
				url: 'https://elgran.cafe/',
				category: 'Diseño Web, Shopify',
				name: 'El Gran Café',
				image: 'el_gran_cafe'
			},
			{
				id: 3,
				url: 'http://http://www.global-legacy.org/',
				category: 'Diseño Web',
				name: 'Global Legacy Programs',
				image: 'glp'
			},
			{
				id: 4,
				url: 'https://juanpabloromerofuentes.com/',
				category: 'Diseño Web, Blog',
				name: 'El Patojo Mayor',
				image: 'jp'
			},
			{
				id: 5,
				url: 'https://mayasdreamevents.com/',
				category: 'Diseño Web',
				name: 'Mayas Events',
				image: 'events'
			},
			{
				id: 6,
				url: 'https://cmf-web.herokuapp.com/',
				category: 'App Web, Diseño, Vue.js',
				name: 'Choose My Fitness',
				image: 'cmf'
			},
			{
				id: 7,
				url: 'https://tecno.center/',
				category: 'Diseño Web, Woocommerce',
				name: 'Tecno Center',
				image: 'tecno_center'
			},
			{
				id: 8,
				url: 'https://veganadventureholidays.com/',
				category: 'Diseño Web',
				name: 'Vegan Adventure Holidays',
				image: 'vegan'
			},
			{
				id: 8,
				url: 'https://www.teprometoanarquia.com/',
				category: 'Diseño Web, Blog',
				name: 'Te Prometo Anarquía',
				image: 'anarquia'
			},
			
		
		],
	}),
	computed: {
		getUser : function(){ 
			return this.$store.getters.getUser
		},
		visiblePages () {
			return this.videos.slice((this.page - 1)* this.perPage, this.page* this.perPage)
		}
	},
	methods: {
		
	},
	mounted() {
		
	},

}
</script>
<style>
.small-icon{
	width: 50px;
    height: 50px;
}
.medium-icon{
    width: 75px;
    height: 75px;
}

.small-app-img{
	width:250px;
}
.medium-app-img{
	width:300px;
}

.small-height{
	max-height:400px;
}

.medium-height{
	max-height:500px;
}

.no-radius .v-image__image--cover{
	background-size: unset!important;
	-webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    border: none;
	
}

.custom-font{
	font-family: "AloneInSpace", Helvetica, Arial!important;
}
</style>

