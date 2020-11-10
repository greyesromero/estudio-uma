<template>
<nav fixed>
	<v-app-bar flat fixed style="background:transparent!important;" >
		<!--v-app-bar-nav-icon color="white" @click="drawer = !drawer" v-if="isLoggedIn"></v-app-bar-nav-icon-->
		<v-toolbar-title style="background:transparent!important;" >		
			<img  :src="'../assets/img/umalogo.png'" alt="alt">
		</v-toolbar-title>

      <v-spacer></v-spacer>
	 

		<span></span>
		<span v-if="isLoggedIn" class="text-center d-flex">
			<v-avatar size="30px">
				<img class="profile-picture" v-if="this.getUser.image==null" :src="'../assets/img/sin-imagen.jpg'" alt="alt" lazy-src="../assets/logo.png">
				<img class="profile-picture" v-if="this.getUser.image!=null" :src="this.getUser.image" alt="alt" lazy-src="../assets/logo.png">
			</v-avatar>
			<v-menu offset-y transition="scale-transition">
				<template v-slot:activator="{ on }">
					<v-icon color="white" v-on="on">mdi-chevron-down</v-icon>
				</template>
				<v-list>
					<v-list-item>
						
						<v-list-item-content>
							<v-list-item-title>Hola, {{getUser.first_name}} {{getUser.last_name}} </v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item router to="/payment">
						<v-list-item-icon>
							<v-icon>mdi-credit-card-settings-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-content>Pagos</v-list-item-content>
					</v-list-item>
					<v-list-item router to="/profile">
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-content>Mi Perfil</v-list-item-content>
					</v-list-item>
					<v-list-item @click="logout">
						<v-list-item-icon>
							<v-icon>mdi-exit-to-app</v-icon>
						</v-list-item-icon>
						<v-list-item-content>Cerrar Sesión</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-menu>
			
		</span>
		<!--v-btn color="secondary" dark v-if="!isLoggedIn" outlined  rounded router to="/login" class="">
			Iniciar Sesión
		</v-btn-->
	    <v-dialog v-model="dialog" color="#121821" fullscreen hide-overlay transition="scroll-y-transition" >
          <template v-slot:activator="{ on }">
				<v-btn icon v-on="on">
					<v-icon color="white">mdi-menu</v-icon>
				</v-btn>
        	</template>
			
			<v-card color="primary"  >
				<v-toolbar flat color="primary" style="border-bottom:1px solid #fff!important;">
					<v-toolbar-title style="background:transparent!important;" >		
			<img  :src="'../assets/img/umalogo.png'" alt="alt">
		</v-toolbar-title>
					<v-spacer></v-spacer>
				<v-btn icon right @click.native="dialog = false">
					<v-icon color="white">mdi-close</v-icon>
				</v-btn>
				</v-toolbar>
				<v-list color="primary" class="text-center mt-12">
					<v-list-item-group >
						<v-list-item   v-for="(item, i) in nav" :key="i" router :to="item.url">
							<v-list-item-content>
								<v-list-item-title class="white--text"><h1>{{ item.text }}</h1></v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
          	</v-card>
        </v-dialog>
	</v-app-bar>
	<!--v-navigation-drawer v-model="drawer" app fixed v-if="isLoggedIn">
		<v-list-item router to="/profile">
			<v-list-item-avatar>
				<v-img v-if="this.getUser.image!=null" :src="this.getUser.image"></v-img>
				<v-img v-if="this.getUser.image==null" :src="'../assets/img/sin-imagen.jpg'"></v-img>
			</v-list-item-avatar>

			<v-list-item-content>
				<v-list-item-title  style="cursor:pointer;">{{ this.getUser.first_name }} {{ this.getUser.last_name }}</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
		<v-divider></v-divider>
		<v-list>
            <v-list-item router to="#">
				<v-list-item-icon>
					<v-icon>mdi-home</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item router to="#">
					<v-list-item-icon>
						<v-icon>mdi-account</v-icon>
					</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>Mi Perfil</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item @click="logout">
				<v-list-item-icon>
					<v-icon>mdi-exit-to-app</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>Cerrar Sesión</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
        </v-list>
	</v-navigation-drawer-->
</nav>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		x: 0,
      	y: 0,
		   dialog: false,
      nav: [
        {
          url: '/',
          text: 'Inicio',
          active: true
        },
        {
          url: '/servicios',
          text: 'Servicios',
          active: false
        },
        {
          url: '/portafolio',
          text: 'Portafolio',
          active: false
        },
        {
          url: '#',
          text: 'Contacto',
          active: false
		},
      ]
	
	}),
	computed : {
	
    	isLoggedIn : function(){ 
		return this.$store.getters.isLoggedIn
		},
		getUser : function(){ 
		return this.$store.getters.getUser
		},
		/*getNotificationsByDoctor : function(){ 
		return this.$store.getters.getNotificationsByDoctor(this.getUser.id)
		},*/
	},
	
    methods: {
		logout: function () {
		this.$store.dispatch('logout')
		.then(() => {
			this.$router.push('/login')
		})
		
		},
		profile(){
			this.$router.push('/profile') 

		},
		goTo(url){
			this.$router.push(url) 
		}
		
	},

	
}
</script>
<style>
.small-logo-nav{
	width:80%;
}
.medium-logo-nav{
	width:80%;
}
.small-logo-nav-menu{
	width:45%;
}
.medium-logo-nav-menu{
	width:75%;
}


.border-top{

    border-top: 1px #fff solid!important;
    z-index: 99999999;
}
</style>
