<template>
  	<div>
		<Navbar></Navbar>
		<v-content class="mb-10">
			<section>
				<div class="py-6 d-none d-sm-flex"></div>
				<v-container fluid class="text-center" :class="[$vuetify.breakpoint.smAndDown ? ' px-2 py-2' : ' px-10 py-10']">
					<div class="py-5"></div>
					<span
					style="font-family: 'AloneInSpace', Helvetica, Arial!important;"
					:class="[$vuetify.breakpoint.smAndDown ? 'headline align-self-start' : 'display-1 align-self-start']"
					class="secondary--text font-weight-bold py-5">
						Servicios
					</span>
					
					<v-container fluid class="text-center px-10 my-8" style="max-width:1092px;max-height:500px;overflow-y: auto!important;">
						<v-layout row wrap :class="[$vuetify.breakpoint.smAndDown ? 'px-5' : '']">
							<!-- LEFT SIDE -->
							<v-flex xs12 md5>
								<p py-5 class="white--text">Somos un estudio de diseño web comprometido con crear contenido de calidad para mejorar la experiencia del usuario final</p>
								
								<v-row class="mx-auto mt-5">
									<v-col
										v-for="(item, i) in stats" :key="i"
										cols="12"
										sm="6"
										md="6">
										<div class="text-center">
											<div>
												<img :class="{'small-icon': $vuetify.breakpoint. smAndDown, 'medium-icon': $vuetify.breakpoint. mdAndUp}" :src="'../assets/img/'+item.image+'.png'" alt="alt">
											</div>
											<div
												class="accent--text font-weight-regular text-uppercase"
												:class="{'subtitle-2': $vuetify.breakpoint. smAndDown, 'subtitle-1': $vuetify.breakpoint. mdAndUp}"
												v-text="item.name"
											></div>
										</div>
									</v-col>
								</v-row>
							</v-flex>
							<!-- RIGHT SIDE -->
							<v-flex xs12 md7>
								<v-layout :class="[$vuetify.breakpoint.smAndDown ? 'px-2' : 'px-12']">
								 <v-expansion-panels flat class="elevation-0" style="background-color:transparent!important;color:#fff!important;">
									<v-expansion-panel
									v-for="(item,i) in panels"
									:key="i"
									 flat class="elevation-0"
									style="background-color:transparent!important;"
									>
									<v-expansion-panel-header class="white--text body-1">
										{{item.name}}
									</v-expansion-panel-header>
									<v-expansion-panel-content class="white--text">
										{{item.description}}
									</v-expansion-panel-content>
									</v-expansion-panel>
								</v-expansion-panels>
								</v-layout>
							</v-flex>
						</v-layout>
					</v-container>
				</v-container>
			
			</section>
    	</v-content>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'

export default {
	components:{
		Navbar
	},
	data: () => ({
        loading: false,
	  	stats: [{
			name:'Desarrollo Web',
			image:'computer'
		},
		{
			name:'Marketing Digital',
			image:'bullhorn'
		},
		{
			name:'SEO',
			image:'seo'
		},
		{
			name:'Seguridad',
			image:'ssl'
		},],
		panels: [{
			name:'Modo de trabajo',
			description:'Solicitamos tus requerimientos, te enviamos ejemplos e ideas hasta concretar una versión inicial. Luego se realiza la maquetación, incluyendo los diseños con los cambios necesarios hasta lograr tu aprobación o si tienes tu propio diseño/mockup nos acoplamos al mismo. Finalmente lo programamos, y lo verás en la web. Se realizan entregas semanales para revisiones y cambios.'
		},
		{
			name:'Precio',
			description:'Nuestros servicios son a partir de Q 2000.00, luego de eso depende de la cantidad de información, funcionalidad y diseño que necesites.'
		},
		{
			name:'Tiempo de entrega',
			description:'Va a depender del tipo de servicio que necesites (Página web, app web, etc), normalmente es un mínimo de 2-4 semanas.'
		},
		{
			name:'Garantía',
			description:'Si tu producto final presenta desperfectos o errores luego de la entrega final, puedes solicitar sin costo la revisión de tu página. Te brindaremos asistencia con lo que respecta a su web. Este servicio es durante y despues de haber culminado el proyecto. Esta garantia que brindamos es por 6 meses contando desde la culminación del proyecto.'
		},],
	}),

}
	
</script>
<style>
.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
    color: #ffffff!important;
}

.v-expansion-panel::before{
	box-shadow: none!important;
}
</style>