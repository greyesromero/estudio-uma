<template>
    
	<div>
		<Navbar></Navbar>
		<div id="splash-template" >
            <div id="intro-blocker">
                <div class="preload hidden">
                    <div class="preload-bar" style="width: 0px;"></div>
                </div>
                <div id="intro-skewer" v-if="!getShowed"></div>
                <div id="intro-container">
                    <div id="sprite-intro">
                        <h1 ref="square" class="text-center ml6" style="color:#fff!important;"
                        :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']">
                            <span class="text-wrapper">
                            

                                    
                                    <div>
                                    <span class="letter">U</span>
                                    <span class="letter">M</span>
                                    <span class="letter">A</span>&nbsp;
                                    <span class="letter">S</span>
                                    <span class="letter">t</span>
                                    <span class="letter">u</span>
                                    <span class="letter">d</span>
                                    <span class="letter">i</span>
                                    <span class="letter">o</span>
                                    
                                    </div>

                            </span>
                        </h1>
                    


                    </div>
                </div>
            </div>
        </div>
		<div class="background hide"></div>
		<v-content>
			<section id="principal" class="white--text" >
				<div class="py-12"></div>
				<div class="py-12"></div>
				<v-container class="text-center" max-width="850px">
					<div id="home" class="section full-height over-hide in intro-nav-out">
						<div class="switch-wrap padded-horizontal">
							<h1 class="display-1 my-8">-m "User experience is our first commit"</h1>
							<h2 class="accent--text my-5">Cambia de estrategia pero no de meta, aprovecha al máximo la era digital.</h2>
							<vue-typed-js :loop="true"  :strings="['Front-end', 'Back-end', 'Diseño Web', 'SEO', 'Apps']">
								<h1 class="text-center white--text" style="margin: 0 auto!important;"> <span class="typing"></span></h1>
							</vue-typed-js>
							
						</div>
					</div>
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
import {VueAnime} from 'vue-animejs'
import {VueAnimeGroup} from 'vue-animejs'
import {VueAnimeTimeLine} from 'vue-animejs'
import store from '../store'
export default {
	components: {
		Navbar,
		Loader,
        Footer,
        VueAnime,
    VueAnimeGroup,
    VueAnimeTimeLine
	
	},
	data: () => ({
        loading: false,
        show: false,
        val: null,
		icons: [
        'mdi-facebook',
        'mdi-instagram',
	  ],
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
			name:'calistenia',
			image:'seo'
		},],
	}),
	computed: {
		getUser : function(){ 
			return this.$store.getters.getUser
        },
        getShowed : function(){ 
			return this.$store.getters.showedStatus
		},
	},
	methods: {

	},
	mounted() {
      
        const targets = this.$el;

    this
      .$anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
		
		 setTimeout(function() {
			 	 document.getElementById('intro-blocker').classList.add("intro-outanim");	
				   document.getElementById('home').classList.remove("intro-nav-out");
				}, 1800);
				document.getElementById('home').classList.add("intro-nav-in");
		     
	},


}


</script>
<style>
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 11;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #111111;
}

.hide{
	display:none;
}
.ml6 {
  position: relative;
  font-weight: 900;
  font-size: 3.3em;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  /*overflow: hidden;*/
}

.ml6 .letter {
  display: inline-block;
  line-height: 1em;
}




.spinner-icon {
    display: none!important;
}

#nprogress {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.progress {
    border: 1px solid;
    padding: 1px;
}

.splash {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.splash img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    width: 100px;
}

.card {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    /* Need a specific value to work */
    /*-moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);*/
}

#sprite-intro {
    z-index: 903;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    width: 400px;
    height: 400px;
    color: black;
}

#sprite-intro.sprite-animate {
    opacity: 1;
    -webkit-animation: sprite-intro-large 1.8s steps(54)1;
    -moz-animation: sprite-intro-large 1.8s steps(54)1;
    -ms-animation: sprite-intro-large 1.8s steps(54)1;
    -o-animation: sprite-intro-large 1.8s steps(54)1;
    animation: sprite-intro-large 1.8s steps(54)1;
}

.mybar {
    background: #29d;
    height: 10px;
}

.progress {
    height: 10px;
    /*overflow: hidden;*/
}

.subtitle {
    width: 200px;
}

#intro-blocker #intro-container {
    position: absolute;
    z-index: 902;
    top: 40%;
    left: 40%;
    width: 400px;
    height: 400px;
}


/**/

@-webkit-keyframes sprite-intro-large {
    from {
        background-position: 0
    }
    to {
        background-position: -21600px
    }
}

@-moz-keyframes sprite-intro-large {
    from {
        background-position: 0
    }
    to {
        background-position: -21600px
    }
}

@-o-keyframes sprite-intro-large {
    from {
        background-position: 0
    }
    to {
        background-position: -21600px
    }
}

@keyframes sprite-intro-large {
    from {
        background-position: 0
    }
    to {
        background-position: -21600px
    }
}

@-webkit-keyframes sprite-intro-small {
    from {
        background-position: 0
    }
    to {
        background-position: -12852px
    }
}

@-moz-keyframes sprite-intro-small {
    from {
        background-position: 0
    }
    to {
        background-position: -12852px
    }
}

@-o-keyframes sprite-intro-small {
    from {
        background-position: 0
    }
    to {
        background-position: -12852px
    }
}

@keyframes sprite-intro-small {
    from {
        background-position: 0
    }
    to {
        background-position: -12852px
    }
}

#intro-blocker {
    overflow: visible;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 900;
    /*background: transparent;*/
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    opacity: 1;
    -ms-filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
    filter: alpha(Opacity=100);
}

#intro-blocker.hideintro {
    z-index: -999;
    opacity: 0;
    display: none;
}

#intro-blocker.intro-outanim {
    -webkit-animation: introBlockerOutAnim 800ms cubic-bezier(.55, .055, .675, .19)0ms 1 normal both;
    -moz-animation: introBlockerOutAnim 800ms cubic-bezier(.55, .055, .675, .19)0ms 1 normal both;
    -o-animation: introBlockerOutAnim 800ms cubic-bezier(.55, .055, .675, .19)0ms 1 normal both;
    animation: introBlockerOutAnim 800ms cubic-bezier(.55, .055, .675, .19)0ms 1 normal both
}

@-webkit-keyframes introBlockerOutAnim {
    0% {
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    100% {
        -webkit-transform: translate(0, -151%);
        -moz-transform: translate(0, -151%);
        -o-transform: translate(0, -151%);
        -ms-transform: translate(0, -151%);
        transform: translate(0, -151%)
    }
}

@-moz-keyframes introBlockerOutAnim {
    0% {
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    100% {
        -webkit-transform: translate(0, -151%);
        -moz-transform: translate(0, -151%);
        -o-transform: translate(0, -151%);
        -ms-transform: translate(0, -151%);
        transform: translate(0, -151%)
    }
}

@-o-keyframes introBlockerOutAnim {
    0% {
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    100% {
        -webkit-transform: translate(0, -151%);
        -moz-transform: translate(0, -151%);
        -o-transform: translate(0, -151%);
        -ms-transform: translate(0, -151%);
        transform: translate(0, -151%)
    }
}

@keyframes introBlockerOutAnim {
    0% {
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    100% {
        -webkit-transform: translate(0, -151%);
        -moz-transform: translate(0, -151%);
        -o-transform: translate(0, -151%);
        -ms-transform: translate(0, -151%);
        transform: translate(0, -151%)
    }
}

.in.intro-nav-in {
    -ms-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}

.in {
    -webkit-transition: -webkit-transform 1200ms cubic-bezier(.175, .885, .32, 1.275);
    -moz-transition: -moz-transform 1200ms cubic-bezier(.175, .885, .32, 1.275);
    -o-transition: -o-transform 1200ms cubic-bezier(.175, .885, .32, 1.275);
    transition: transform 1200ms cubic-bezier(.175, .885, .32, 1.275)
}

.in.intro-nav-out {
    -o-transform: translate(0, -210%);
    -ms-transform: translate(0, -210%);
    -webkit-transform: translate(0, -210%);
    transform: translate(0, -210%);
    -moz-transform: translate(0, -210%)
}

.moon {
    background: #d8d8d8;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    box-shadow: inset -12px -12px 0 0 #b6b6b6;
    position: relative;
}


</style>
