<template>
    <div>
        <Loader :visible="loading" />
        <Navbar></Navbar>
		<v-content style="background:#ffffff !important">
			<section style="background:#ffffff !important">
				<div class="py-12"></div>
				<v-container fluid>	
					<v-row justify="center">
						<v-col cols="12" md="4" xs="12">
							<v-card :loading="loading" class="mx-auto" min-width="345" tile flat>
								<v-card-text class="pb-0">
									<h1 class="secondary--text text-center mb-5">Realizar Pago</h1>

									<v-form v-model="valid" :lazy-validation="lazy"  ref="form">
										<v-text-field v-model.lazy="first_name" outlined color="secondary" label="Número de tarjeta (sin espacios ni guiones)"  required></v-text-field>
										<v-text-field v-model.lazy="last_name" outlined color="secondary" label="Nombre"  required></v-text-field>
										<v-text-field v-model.lazy="email" outlined color="secondary" label="CVV"  required></v-text-field>
										<v-select
										:items="month_set"
										label="Mes de Expiración"
										outlined
										></v-select>
										<v-select
										:items="year_set"
										label="Año de Expiración"
										outlined
										></v-select>
									</v-form>
								
									
								</v-card-text>
								<v-card-actions class="align-self-center align-content-center justify-center center align-center">
									
									<v-btn tile color="secondary" class="font-weight-bold text-none pl-5 pr-5" >Realizar Pago</v-btn>
								</v-card-actions>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
				<div class="py-12"></div>
			</section>
    	</v-content>
        <Footer></Footer>
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
		loading: false,
		first_name: null,
		last_name: null,
		email: null,
		valid: true,
		lazy:false,
		month_set: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		year_set: ['2020','2021','2022','2023','2024']
	}),
	computed: {
		getUser : function(){ 
			return this.$store.getters.getUser
		},
	},
	methods: {
		
	},
	mounted() {
		
	},
	created(){
	
	}

}
</script>
