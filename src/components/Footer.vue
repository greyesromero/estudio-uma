<template>
    <!--v-footer dark padless bottom fixed>
		<v-card color="secondary" class="flex" flat tile >
			<v-container fluid class="mb-0 pb-0">
				<v-layout >
					<v-flex md2 ></v-flex>
					<v-flex md8  class="white--text pt-0 text-center center">
						<img :class="{'small-logo': $vuetify.breakpoint. smAndDown, 'medium-logo': $vuetify.breakpoint. mdAndUp}" :src="'../assets/SVG/Logotipo.svg'" alt="alt">
					</v-flex>
					<v-flex md2></v-flex>	
						
				</v-layout>
			</v-container>
			<v-card-title class="secondary mt-0 pt-0 text-center center justify-center align-content-center align-self-center">
				<v-btn
				v-for="icon in icons"
				:key="icon"
				class="mx-4"
				dark
				icon
				>
					<v-icon size="24px">{{ icon }}</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text class="mb-3 secondary  white--text text-center">
				<strong>® {{ new Date().getFullYear() }} Choose My Fitness</strong>
			</v-card-text>
		</v-card>
  	</v-footer-->
	   <v-footer
      dark
	 
      padless
	  color="secondary"
	  class="text-center center justify-center align-content-center align-self-center"
	
    >
      <v-card
        flat
        tile
	
        class="secondary white--text text-center"
      >
        
 
		<v-card-text class="pt-0">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="36px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
  
        
  
        <v-card-text class="white--text pt-0">
				<strong>® {{ new Date().getFullYear() }} UMA Studio</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data: () => ({
		icons: [
      
        'mdi-instagram',
      ],
	}),
};
</script>
<style>
.small-logo{
	width:60%;
}
.medium-logo{
	width:60%;
}
</style>