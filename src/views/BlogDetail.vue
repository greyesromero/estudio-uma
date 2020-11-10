<template>
  <div>
	  <Loader :visible="loading" />
    <Navbar></Navbar>
        <section>
          <v-img v-if="image"
            :src="image"
            gradient="rgba(0,0,0,0.1), rgba(0,0,0,0.3)"
            height="400px"
            width="100%">
			
            <v-container fill-height class="white--text">
              <v-row
				align="center"
				class="white--text mx-auto align-content-end align-end align-self-end"
				justify="center"
				>
					<v-col
						class="white--text text-center "
						cols="12"
						tag="h1">
						
						<v-btn icon color="white" class="mx-3" >
							<v-icon>mdi-clock</v-icon> &nbsp;Lectura de {{duration}} min
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
          </v-img>
        </section>
       <section class="" style="background:white!important;">
          <v-layout class="container pt-5 grid-list-lg">
			<v-row>
				<v-col cols="12" md="8" >
					<section  style="background:white!important;">
						<v-list>
							<v-list-item class="px-0" style="padding-left: 16px!important;">
								<v-list-item-avatar tile v-if="type!=null">
									<v-img
										:src="'../assets/SVG/'+options[type-1].icon+'.svg'" class="no-radius"  
									></v-img>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title class="subtitle-1" v-text="`Por: `+publisher"></v-list-item-title>
									<v-list-item-subtitle> {{created}}</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-list>
						<v-card-text>
							<p
							:class="[$vuetify.breakpoint.smAndDown ? 'display-1 mt-0' : 'display-2 mt-2']"
							class="font-weight-bold secondary--text"
							>
							{{title}}
							</p>
							<p class="body-1 letter-spacing-0" v-html="body" align="justify">
								{{body}}
							</p>
						</v-card-text>
				
					</section>
				</v-col>
				<v-col cols="12" md="4" class="overflow-y-auto">
					<section>
						<youtube :video-id="video" player-width="100%" player-height="250"></youtube>
					</section>
				</v-col>
			</v-row>
          </v-layout>
        </section>
        <Footer></Footer>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Loader from '../components/Loader.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
import moment from 'moment'


export default {
  name: 'detail-page',
  components: {
    Navbar,
    Loader,
    Footer
    },
    data:() => ({

    image: null,
    body: null,
    created: null,
    video: null,
    title: null,
    publish_after: null,
    publisher: null,
    read_time: null,
	duration: null,
	loading: false,
	type: null,
	options: [
			{
				id: 1,
				icon: 'yoga',
				name: 'Yoga'
			},
			{
				id: 2,
				icon: 'crossfit',
				name: 'Crossfit'
			},
			{
				id: 3,
				icon: 'baile',
				name: 'Baile'
			},
			{
				id: 4,
				icon: 'calistenia',
				name: 'Calistenia'
			},
			{
				id: 5,
				icon: 'funtional',
				name: 'Funtional'
			},
			{
				id: 6,
				icon: 'box',
				name: 'Box'
			},
			{
				id: 7,
				icon: 'nutricion',
				name: 'Nutrición'
			},
			{
				id: 8,
				icon: 'meditacion',
				name: 'Meditación'
			},
			{
				id: 9,
				icon: 'Mindfulness',
				name: 'Mindfulness'
			},
			{
				id: 10,
				icon: 'fisioterapeuta',
				name: 'Fisioterapeuta'
			},
			{
				id: 11,
				icon: 'salud',
				name: 'Salud'
			},
			{
				id: 12,
				icon: 'personal trainer',
				name: 'Personal Trainer'
			}
		],
    }),
     computed: {  
  
		getUser : function(){ 
			return this.$store.getters.getUser
    },
   
	}, 
  created() {
    	this.loading = true
    	let params = this.$route.params ? Object.assign({}, this.$route.params): {};
		axios.get('https://choosemyfitness-api.herokuapp.com/api/blog/posts/'+params.id+'/')
		.then(response => {
			this.title = response.data.title
			this.body = response.data.body
			this.image = response.data.image
			this.video = response.data.video
			this.publish_after = response.data.publish_after
			this.publisher = response.data.publisher
			this.type = response.data.type
			this.created = this.moment(response.data.created).locale('es').format("dddd D, [de] MMMM hh:mm a")
      		this.duration = this.moment(response.data.read_time,'hh:mm:ss').format('mm')
			this.loading = false
		})
		.catch(error => {
			this.loading = false
			console.log(error);
		})

	

	}  
  
}
</script>
<style>
  .v-chip {
    margin: 5px;
  }

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


.no-radius .v-image__image--cover{
	background-size: unset!important;
	-webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    border: none;
	
}
</style>
