<template>
  <div>
    <div id="particles-js"></div>
        <!-- Home Page Stars Animation  -->
      	<svg class="hide" id="main">
			<symbol viewbox="0 0 100 100" id="star-1">
				<path d="M54.3,2L65.7,36.2a1.4,1.4,0,0,0,1.3.9h36.8a1.4,1.4,0,0,1,.8,2.5L74.8,61.9a1.4,1.4,0,0,0-.5,1.5L85.6,98.4a1.4,1.4,0,0,1-2.1,1.5L53.8,78.3a1.4,1.4,0,0,0-1.6,0L22.5,99.9a1.4,1.4,0,0,1-2.1-1.5L31.8,63.5a1.4,1.4,0,0,0-.5-1.5L1.6,40.6a1.4,1.4,0,0,1,.8-2.5H39.1a1.4,1.4,0,0,0,1.3-.9L51.8,2A1.4,1.4,0,0,1,54.3,2Z" fill="white" stroke="#000" stroke-miterlimit="10" stroke-width="4"/>
			</symbol>
			<symbol viewbox="0 0 110 110" id="star-2">
				<path d="M65.6,75.7l17.3,6.8a0.6,0.6,0,0,0,.8-0.8L76.5,64.8a0.6,0.6,0,0,1,.4-0.8l33.8-7.8a0.6,0.6,0,0,0,0-1.2L76.8,48.3a0.6,0.6,0,0,1-.4-0.8l6.5-16.7a0.6,0.6,0,0,0-.8-0.8L65,37.4a0.6,0.6,0,0,1-.8-0.4l-8-34.6a0.6,0.6,0,0,0-1.2,0L48.2,36.8a0.6,0.6,0,0,1-.8.4L31.3,31a0.6,0.6,0,0,0-.8.8l7,16.2a0.6,0.6,0,0,1-.4.8L2.4,56.8a0.6,0.6,0,0,0,0,1.2l35.1,6.9a0.6,0.6,0,0,1,.4.8L31.4,82.5a0.6,0.6,0,0,0,.8.8l16-6.9a0.6,0.6,0,0,1,.8.4l7.9,33.8a0.6,0.6,0,0,0,1.2,0l6.8-34.5A0.6,0.6,0,0,1,65.6,75.7Z" fill="white" stroke="#000" stroke-miterlimit="10" stroke-width="4"/>
			</symbol>
			<symbol viewbox="0 0 50 50" id="star-3">
				<path d="M25.3,2.2l3.9,15a1.6,1.6,0,0,0,1.1,1.1l15,3.9a1.6,1.6,0,0,1,0,3l-15,3.9a1.6,1.6,0,0,0-1.1,1.1l-3.9,15a1.6,1.6,0,0,1-3,0l-3.9-15a1.6,1.6,0,0,0-1.1-1.1l-15-3.9a1.6,1.6,0,0,1,0-3l15-3.9a1.6,1.6,0,0,0,1.1-1.1l3.9-15A1.6,1.6,0,0,1,25.3,2.2Z" fill="white" stroke="#fff" stroke-miterlimit="10" stroke-width="4"/>
			</symbol>
		</svg>
		<div id="stars-container" class="stars-wrapper super-index">
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
		</div>
  </div>
</template>
<script>
export default {
	name: 'App',
	components: {
	},
	data: () => ({
		//
	}),
	computed:{
		theme(){
		return (this.$vuetify.theme.dark) ? 'dark' : 'light'
		}
    },
    mounted() {
         document.getElementById('stars-container').classList.remove("super-index");

    },
	created: function () {

        // disable scrolling
        document.querySelector('html').style.overflow = 'hidden'
        // create script elem
        const elem = document.createElement('script')
        elem.src = this.$options.particleConfig.cdnUrl
        elem.async = true
        
        // lock it down!
        elem.integrity = this.$options.particleConfig.sriHash
        elem.crossOrigin = 'anonymous'
    
        document.head.appendChild(elem)
    
        // timeout after half a second if the script's slow to load or we're offline
        elem.onload = () =>
        Promise.race([
            window.particlesJS('particles-js', this.$options.particleConfig),
            new Promise(resolve => setTimeout(resolve, 500)),
        ])
        .catch(console.error.bind(console))
        .finally(() => (window.renderComplete = true)) // for Rendertron pre-rendering
    },
    beforeDestroy() {
        // reset Rendertron indicator... useful for testing
        window.renderComplete = false        
    },
    particleConfig: {
    
        cdnUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js',
        
        sriHash: 'sha256-+u54FaX9J+k40eAcg5K2YzICSQjrEYBI9gju5nE3HfY=', // via bash: `cat <Path-To-Some-Script> | openssl dgst -sha256 -binary | openssl enc -base64 -A`
        
        // See docs for config here at https://github.com/VincentGarreau/particles.js/
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 700
                }
            },


            "color": {
                "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
            },

            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },

                "polygon": {
                    "nb_sides": 5
                }
            },


            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },


            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },


            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },

            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },



        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },

                "onclick": {
                    "enable": true,
                    "mode": "push"
                },

                "resize": true
            },

            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },


                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },

                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },

                "push": {
                    "particles_nb": 4
                },

                "remove": {
                    "particles_nb": 2
                }
            }
        },

    retina_detect: true,
    },
};
</script>
<style>
#particles-js{
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	 background-position: 50% 50;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    height: 100VH !important;
    left: 0;
    position: absolute;
    top: 0;
    width: 100VW !important;
}

.hide{
	display:none!important;
}

/*****************************************************************
	~ Inicio - Animacion Estrellas 
******************************************************************/
 
svg {
    opacity: 1;
}

svg.hide {
    display: none;
}

svg * {
    stroke: inherit;
    -webkit-transform: inherit;
    transform: inherit;
    -webkit-transform-origin: inherit;
    transform-origin: inherit;
    -webkit-animation-delay: inherit;
    animation-delay: inherit;
    stroke: #ffffff;
}

svg {
    width: 80px;
    height: 60px;
    margin: 10px;
    opacity: 0.9;
    position: absolute;
}

svg.star {
    width: 12px;
    height: 12px;
    opacity: 0.4;
}

.super-index {
    z-index: 999;
}

.stars-wrapper {
    opacity: 0.6;
    width: 100%;
    height: 100%;
    position: absolute;
    /*z-index: 99;*/
    /*Eliminar z-index si solo se desea en la pantalla inicio*/
}

#main-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}

#stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 311px 52px #FFF, 1276px 1569px #FFF, 1264px 1307px #FFF, 317px 931px #FFF, 1369px 1318px #FFF, 1759px 1319px #FFF, 794px 1180px #FFF, 11px 149px #FFF, 1449px 54px #FFF, 53px 911px #FFF, 708px 929px #FFF, 990px 330px #FFF, 110px 1816px #FFF, 671px 642px #FFF, 1347px 1272px #FFF, 1955px 564px #FFF, 1292px 1791px #FFF, 688px 642px #FFF, 1260px 216px #FFF, 606px 972px #FFF, 1951px 1897px #FFF, 1622px 854px #FFF, 915px 405px #FFF, 773px 1974px #FFF, 899px 301px #FFF, 52px 795px #FFF, 1781px 1860px #FFF, 1792px 218px #FFF, 885px 107px #FFF, 575px 1642px #FFF, 938px 951px #FFF, 1299px 1061px #FFF, 1379px 1274px #FFF, 431px 820px #FFF, 1345px 1731px #FFF, 851px 427px #FFF, 440px 1418px #FFF, 882px 1336px #FFF, 517px 1239px #FFF, 1989px 1198px #FFF, 1122px 710px #FFF, 1127px 1728px #FFF, 1674px 1505px #FFF, 1535px 1126px #FFF, 26px 627px #FFF, 1629px 1745px #FFF, 679px 1315px #FFF, 1906px 188px #FFF, 1935px 1752px #FFF, 1137px 1417px #FFF, 1933px 873px #FFF, 1623px 1436px #FFF, 316px 1358px #FFF, 419px 1833px #FFF, 721px 1788px #FFF, 97px 1848px #FFF, 970px 123px #FFF, 143px 177px #FFF, 1108px 1908px #FFF, 858px 263px #FFF, 1065px 1173px #FFF, 124px 663px #FFF, 699px 1726px #FFF, 1702px 401px #FFF, 1088px 1921px #FFF, 1541px 324px #FFF, 789px 451px #FFF, 445px 1565px #FFF, 724px 1699px #FFF, 88px 669px #FFF, 1472px 1917px #FFF, 1538px 1840px #FFF, 775px 1483px #FFF, 233px 1269px #FFF, 604px 217px #FFF, 1749px 22px #FFF, 1635px 265px #FFF, 903px 394px #FFF, 1875px 143px #FFF, 456px 67px #FFF, 1030px 1865px #FFF, 601px 1439px #FFF, 1295px 1439px #FFF, 244px 1969px #FFF, 1499px 98px #FFF, 1609px 772px #FFF, 1755px 1621px #FFF, 462px 1717px #FFF, 1190px 1013px #FFF, 1107px 608px #FFF, 1438px 1485px #FFF, 1546px 130px #FFF, 1187px 90px #FFF, 1182px 689px #FFF, 93px 536px #FFF, 700px 889px #FFF, 165px 220px #FFF, 1318px 1881px #FFF, 115px 1664px #FFF, 64px 529px #FFF, 826px 1836px #FFF, 1045px 1308px #FFF, 78px 1132px #FFF, 1819px 1216px #FFF, 847px 1611px #FFF, 1917px 1196px #FFF, 734px 634px #FFF, 1950px 1047px #FFF, 266px 1820px #FFF, 1549px 1887px #FFF, 1125px 864px #FFF, 330px 1124px #FFF, 1220px 888px #FFF, 921px 1610px #FFF, 1648px 1023px #FFF, 1998px 451px #FFF, 1472px 378px #FFF, 1884px 113px #FFF, 855px 976px #FFF, 1888px 424px #FFF, 1890px 7px #FFF, 19px 1044px #FFF, 1343px 1526px #FFF, 416px 72px #FFF, 1965px 573px #FFF, 688px 523px #FFF, 805px 1480px #FFF, 761px 1186px #FFF, 1632px 691px #FFF, 847px 1346px #FFF, 967px 788px #FFF, 1606px 1247px #FFF, 250px 524px #FFF, 986px 324px #FFF, 1627px 202px #FFF, 986px 20px #FFF, 445px 1128px #FFF, 826px 1635px #FFF, 113px 849px #FFF, 216px 1088px #FFF, 1286px 557px #FFF, 96px 1505px #FFF, 1642px 1982px #FFF, 750px 1286px #FFF, 967px 1789px #FFF, 5px 1481px #FFF, 280px 1548px #FFF, 420px 550px #FFF, 1559px 289px #FFF, 1632px 1072px #FFF, 45px 804px #FFF, 1025px 157px #FFF, 790px 1343px #FFF, 461px 1404px #FFF, 590px 485px #FFF, 1865px 1860px #FFF, 620px 304px #FFF, 1374px 737px #FFF, 1864px 1795px #FFF, 1139px 183px #FFF, 1848px 1273px #FFF, 30px 1278px #FFF, 1718px 1299px #FFF, 266px 1611px #FFF, 78px 1397px #FFF, 613px 1494px #FFF, 498px 922px #FFF, 1289px 1168px #FFF, 845px 1094px #FFF, 931px 433px #FFF, 1742px 1506px #FFF, 1332px 728px #FFF, 406px 1827px #FFF, 1655px 604px #FFF, 249px 877px #FFF, 803px 753px #FFF, 1037px 804px #FFF, 720px 992px #FFF, 1401px 912px #FFF, 626px 160px #FFF, 1941px 1058px #FFF, 309px 1623px #FFF, 1526px 1829px #FFF, 1819px 978px #FFF, 477px 176px #FFF, 1807px 493px #FFF, 1063px 775px #FFF, 1260px 1851px #FFF, 1657px 13px #FFF, 180px 130px #FFF, 794px 1020px #FFF, 1327px 1206px #FFF, 1709px 1351px #FFF, 413px 168px #FFF, 1674px 188px #FFF, 1432px 366px #FFF, 1336px 1732px #FFF, 1717px 1686px #FFF, 24px 1870px #FFF, 849px 1244px #FFF, 494px 174px #FFF, 1041px 795px #FFF, 709px 1258px #FFF, 927px 1362px #FFF, 187px 1408px #FFF, 79px 1239px #FFF, 329px 1167px #FFF, 499px 301px #FFF, 1300px 379px #FFF, 457px 1008px #FFF, 1301px 1186px #FFF, 772px 300px #FFF, 1216px 134px #FFF, 612px 149px #FFF, 1405px 925px #FFF, 1531px 1932px #FFF, 227px 328px #FFF, 340px 312px #FFF, 599px 1016px #FFF, 958px 1509px #FFF, 949px 345px #FFF, 1922px 1781px #FFF, 957px 825px #FFF, 186px 1173px #FFF, 1695px 1162px #FFF, 156px 214px #FFF, 548px 1985px #FFF, 911px 1896px #FFF, 374px 1895px #FFF, 618px 973px #FFF, 271px 337px #FFF, 1616px 1217px #FFF, 555px 874px #FFF, 1693px 1550px #FFF, 25px 1163px #FFF, 277px 638px #FFF, 195px 1620px #FFF, 1172px 1322px #FFF, 317px 1324px #FFF, 188px 1302px #FFF, 130px 855px #FFF, 571px 1550px #FFF, 412px 1007px #FFF, 1338px 1085px #FFF, 927px 1382px #FFF, 1470px 407px #FFF, 1988px 815px #FFF, 1564px 491px #FFF, 521px 733px #FFF, 749px 500px #FFF, 1412px 1323px #FFF, 665px 1629px #FFF, 599px 202px #FFF, 1491px 1901px #FFF, 1743px 972px #FFF, 448px 155px #FFF, 80px 507px #FFF, 1222px 1869px #FFF, 648px 735px #FFF, 908px 1138px #FFF, 1002px 420px #FFF, 1089px 137px #FFF, 925px 117px #FFF, 1864px 337px #FFF, 1945px 1774px #FFF, 1341px 1403px #FFF, 603px 316px #FFF, 374px 1116px #FFF, 809px 1285px #FFF, 1739px 132px #FFF, 103px 1429px #FFF, 887px 1221px #FFF, 1439px 969px #FFF, 284px 151px #FFF, 295px 1215px #FFF, 900px 381px #FFF, 1415px 1023px #FFF, 1429px 1686px #FFF, 1250px 1133px #FFF, 950px 1528px #FFF, 1469px 787px #FFF, 1022px 1918px #FFF, 318px 836px #FFF, 211px 1039px #FFF, 1747px 1755px #FFF, 1949px 898px #FFF, 1895px 1712px #FFF, 585px 1012px #FFF, 817px 1100px #FFF, 56px 867px #FFF, 6px 826px #FFF, 1254px 101px #FFF, 413px 1130px #FFF, 670px 573px #FFF, 1399px 1279px #FFF, 1685px 1693px #FFF, 280px 211px #FFF, 1590px 1186px #FFF, 648px 70px #FFF, 734px 689px #FFF, 70px 705px #FFF, 798px 1758px #FFF, 1223px 1211px #FFF, 543px 457px #FFF, 205px 32px #FFF, 1049px 1416px #FFF, 5px 1864px #FFF, 978px 1416px #FFF, 1058px 1759px #FFF, 539px 526px #FFF, 1905px 415px #FFF, 1091px 812px #FFF, 566px 896px #FFF, 417px 1705px #FFF, 1889px 1709px #FFF, 649px 935px #FFF, 1298px 1554px #FFF, 1594px 1639px #FFF, 1689px 1839px #FFF, 1959px 656px #FFF, 1048px 239px #FFF, 1901px 1076px #FFF, 1516px 875px #FFF, 362px 342px #FFF, 959px 964px #FFF, 979px 265px #FFF, 130px 244px #FFF, 382px 663px #FFF, 1752px 386px #FFF, 316px 491px #FFF, 401px 653px #FFF, 1976px 577px #FFF, 1408px 1461px #FFF, 1148px 317px #FFF, 1561px 524px #FFF, 1px 1992px #FFF, 725px 1749px #FFF, 162px 649px #FFF, 1161px 1494px #FFF, 707px 1746px #FFF, 711px 213px #FFF, 1222px 660px #FFF, 1478px 165px #FFF, 1824px 138px #FFF, 1226px 76px #FFF, 1020px 1077px #FFF, 1269px 1956px #FFF, 1276px 686px #FFF, 852px 1811px #FFF, 334px 690px #FFF, 1306px 1592px #FFF, 1725px 270px #FFF, 138px 1614px #FFF, 81px 1101px #FFF, 1641px 1743px #FFF, 327px 1311px #FFF, 1230px 1340px #FFF, 1782px 808px #FFF, 1816px 1461px #FFF, 59px 1785px #FFF, 1680px 1411px #FFF, 507px 533px #FFF, 1302px 527px #FFF, 961px 981px #FFF, 652px 338px #FFF, 1448px 1109px #FFF, 1329px 764px #FFF, 72px 614px #FFF, 338px 502px #FFF, 635px 742px #FFF, 319px 1418px #FFF, 1411px 1707px #FFF, 1041px 434px #FFF, 511px 1020px #FFF, 1746px 1042px #FFF, 1585px 801px #FFF, 571px 443px #FFF, 413px 1613px #FFF, 282px 942px #FFF, 702px 1952px #FFF, 599px 1741px #FFF, 1655px 1110px #FFF, 1811px 1342px #FFF, 163px 89px #FFF, 1387px 786px #FFF, 1440px 525px #FFF, 1338px 613px #FFF, 1209px 1376px #FFF, 1116px 973px #FFF, 207px 1391px #FFF, 1204px 1476px #FFF, 1668px 874px #FFF, 1364px 15px #FFF, 1278px 1732px #FFF, 64px 721px #FFF, 607px 805px #FFF, 845px 322px #FFF, 192px 80px #FFF, 13px 713px #FFF, 1313px 232px #FFF, 1066px 1451px #FFF, 1224px 714px #FFF, 758px 1122px #FFF, 676px 458px #FFF, 1989px 75px #FFF, 1513px 1416px #FFF, 1663px 662px #FFF, 220px 737px #FFF, 622px 874px #FFF, 1751px 1029px #FFF, 1230px 1336px #FFF, 1204px 649px #FFF, 1090px 791px #FFF, 299px 1137px #FFF, 1009px 328px #FFF, 1452px 1710px #FFF, 387px 806px #FFF, 940px 1591px #FFF, 1001px 626px #FFF, 1034px 1845px #FFF, 1482px 1709px #FFF, 1110px 1995px #FFF, 1023px 274px #FFF, 1097px 1936px #FFF, 1454px 1745px #FFF, 1608px 1698px #FFF, 598px 1978px #FFF, 304px 1408px #FFF, 1193px 534px #FFF, 468px 1374px #FFF, 1641px 1698px #FFF, 1569px 1236px #FFF, 146px 1169px #FFF, 242px 425px #FFF, 920px 1225px #FFF, 622px 1085px #FFF, 830px 187px #FFF, 1373px 395px #FFF, 736px 785px #FFF, 601px 123px #FFF, 831px 1163px #FFF, 559px 1599px #FFF, 1073px 1784px #FFF, 1801px 1147px #FFF, 610px 245px #FFF, 1699px 259px #FFF, 1041px 733px #FFF, 584px 1226px #FFF, 1549px 1910px #FFF, 82px 69px #FFF, 270px 1711px #FFF, 1728px 94px #FFF, 1680px 1850px #FFF, 956px 467px #FFF, 212px 962px #FFF, 1157px 1293px #FFF, 449px 20px #FFF, 83px 413px #FFF, 1035px 61px #FFF, 1220px 1508px #FFF, 541px 704px #FFF, 55px 1665px #FFF, 456px 1899px #FFF, 1287px 1966px #FFF, 114px 965px #FFF, 1528px 465px #FFF, 1292px 896px #FFF, 1003px 1641px #FFF, 1154px 1408px #FFF, 908px 1603px #FFF, 1296px 812px #FFF, 816px 492px #FFF, 158px 383px #FFF, 1143px 219px #FFF, 1340px 764px #FFF, 157px 1496px #FFF, 1929px 913px #FFF, 1922px 1576px #FFF, 613px 526px #FFF, 1964px 1463px #FFF, 933px 1006px #FFF, 366px 1497px #FFF, 1392px 426px #FFF, 1264px 1937px #FFF, 1703px 1248px #FFF, 490px 51px #FFF, 28px 7px #FFF, 1639px 1979px #FFF, 1392px 1377px #FFF, 164px 1302px #FFF, 97px 459px #FFF, 1338px 1661px #FFF, 225px 426px #FFF, 155px 728px #FFF, 1844px 1816px #FFF, 6px 1197px #FFF, 677px 1453px #FFF, 1294px 1207px #FFF, 449px 887px #FFF, 1285px 424px #FFF, 1934px 1937px #FFF, 414px 1118px #FFF, 726px 1072px #FFF, 882px 703px #FFF, 1946px 773px #FFF, 743px 420px #FFF, 743px 1417px #FFF, 1393px 476px #FFF, 339px 1237px #FFF, 1767px 1900px #FFF, 854px 118px #FFF, 1034px 1534px #FFF, 527px 1208px #FFF, 1198px 1398px #FFF, 1003px 875px #FFF, 610px 1187px #FFF, 1017px 486px #FFF, 688px 1320px #FFF, 1759px 689px #FFF, 1789px 1577px #FFF, 1231px 1277px #FFF, 936px 984px #FFF, 478px 741px #FFF, 1033px 1728px #FFF, 1654px 1280px #FFF, 1369px 2px #FFF, 1695px 877px #FFF, 717px 1033px #FFF, 1px 1531px #FFF, 885px 1376px #FFF, 1679px 374px #FFF, 1395px 741px #FFF, 1146px 1892px #FFF, 605px 604px #FFF, 1597px 596px #FFF, 524px 1457px #FFF, 1686px 1728px #FFF, 215px 1300px #FFF, 1642px 221px #FFF, 1412px 1146px #FFF, 684px 429px #FFF, 1944px 1998px #FFF, 256px 1290px #FFF, 968px 147px #FFF, 403px 1218px #FFF, 1382px 1639px #FFF, 488px 1338px #FFF, 1013px 1144px #FFF, 544px 210px #FFF, 1014px 324px #FFF, 239px 1921px #FFF, 974px 134px #FFF, 963px 658px #FFF, 1020px 1735px #FFF, 462px 1379px #FFF, 1877px 217px #FFF, 1193px 1150px #FFF, 1595px 920px #FFF, 986px 1921px #FFF, 1500px 1059px #FFF, 713px 394px #FFF, 1946px 715px #FFF, 1025px 799px #FFF, 5px 1120px #FFF, 674px 1786px #FFF, 490px 1803px #FFF, 359px 525px #FFF, 913px 1099px #FFF, 1164px 1446px #FFF, 793px 742px #FFF, 266px 1800px #FFF, 616px 1821px #FFF, 1939px 1968px #FFF, 321px 1427px #FFF, 1320px 1185px #FFF, 873px 1380px #FFF, 434px 208px #FFF, 883px 1540px #FFF, 1390px 686px #FFF, 1304px 1590px #FFF, 574px 420px #FFF, 260px 1111px #FFF, 1689px 446px #FFF, 1530px 1569px #FFF, 1625px 1114px #FFF, 1780px 1719px #FFF, 916px 966px #FFF, 289px 830px #FFF, 427px 896px #FFF, 1851px 635px #FFF, 1921px 1410px #FFF, 1022px 793px #FFF, 183px 338px #FFF, 230px 1372px #FFF, 706px 1753px #FFF, 1448px 537px #FFF, 968px 1993px #FFF, 173px 575px #FFF, 600px 1064px #FFF, 394px 1003px #FFF, 1143px 1761px #FFF, 62px 515px #FFF, 1630px 1557px #FFF, 973px 91px #FFF, 1646px 583px #FFF, 1016px 1613px #FFF, 778px 838px #FFF, 499px 1873px #FFF, 572px 475px #FFF, 1528px 1265px #FFF, 751px 1333px #FFF, 1753px 141px #FFF, 1358px 993px #FFF, 1718px 597px #FFF, 806px 1936px #FFF, 1670px 883px #FFF, 472px 1115px #FFF, 1178px 31px #FFF, 1054px 296px #FFF, 597px 1300px #FFF, 1207px 1054px #FFF, 1604px 1250px #FFF, 949px 1918px #FFF, 1024px 1737px #FFF, 124px 1489px #FFF, 908px 1521px #FFF, 1333px 1330px #FFF, 533px 368px #FFF, 456px 674px #FFF, 495px 735px #FFF, 1999px 242px #FFF, 1960px 404px #FFF, 1452px 1293px #FFF, 1513px 338px #FFF, 842px 402px #FFF, 1157px 881px #FFF, 1788px 987px #FFF, 1888px 1116px #FFF, 252px 269px #FFF, 555px 581px #FFF, 388px 814px #FFF, 690px 1428px #FFF, 388px 791px #FFF, 75px 1553px #FFF, 903px 1134px #FFF, 1135px 240px #FFF, 22px 1032px #FFF, 1661px 1136px #FFF, 379px 1305px #FFF, 1555px 1763px #FFF, 765px 1061px #FFF, 878px 997px #FFF, 1245px 477px #FFF, 1368px 717px #FFF, 1138px 1863px #FFF, 1617px 589px #FFF, 956px 680px #FFF, 1421px 1759px #FFF, 156px 1735px #FFF, 639px 1481px #FFF, 258px 459px #FFF, 195px 867px #FFF, 1118px 1889px #FFF, 175px 1743px #FFF, 119px 1194px #FFF, 212px 1233px #FFF, 1146px 1239px #FFF, 1329px 1811px #FFF, 839px 631px #FFF, 209px 974px #FFF, 1943px 338px #FFF, 839px 1287px #FFF, 1344px 475px #FFF, 1756px 1955px #FFF, 667px 457px #FFF, 719px 1370px #FFF, 696px 567px #FFF, 335px 1921px #FFF, 1454px 1768px #FFF, 1245px 1595px #FFF, 1061px 303px #FFF, 1341px 198px #FFF, 1439px 806px #FFF, 1905px 136px #FFF, 916px 1070px #FFF, 1440px 1510px #FFF, 1241px 1317px #FFF, 985px 571px #FFF, 1609px 1265px #FFF, 1812px 435px #FFF, 523px 1032px #FFF, 1985px 1437px #FFF, 369px 809px #FFF, 368px 1547px #FFF, 1230px 1934px #FFF, 1691px 452px #FFF, 1399px 219px #FFF, 445px 407px #FFF, 988px 1944px #FFF, 1018px 1266px #FFF;
    -webkit-animation: animStar 50s linear infinite;
    animation: animStar 50s linear infinite;
}

#stars:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 311px 52px #FFF, 1276px 1569px #FFF, 1264px 1307px #FFF, 317px 931px #FFF, 1369px 1318px #FFF, 1759px 1319px #FFF, 794px 1180px #FFF, 11px 149px #FFF, 1449px 54px #FFF, 53px 911px #FFF, 708px 929px #FFF, 990px 330px #FFF, 110px 1816px #FFF, 671px 642px #FFF, 1347px 1272px #FFF, 1955px 564px #FFF, 1292px 1791px #FFF, 688px 642px #FFF, 1260px 216px #FFF, 606px 972px #FFF, 1951px 1897px #FFF, 1622px 854px #FFF, 915px 405px #FFF, 773px 1974px #FFF, 899px 301px #FFF, 52px 795px #FFF, 1781px 1860px #FFF, 1792px 218px #FFF, 885px 107px #FFF, 575px 1642px #FFF, 938px 951px #FFF, 1299px 1061px #FFF, 1379px 1274px #FFF, 431px 820px #FFF, 1345px 1731px #FFF, 851px 427px #FFF, 440px 1418px #FFF, 882px 1336px #FFF, 517px 1239px #FFF, 1989px 1198px #FFF, 1122px 710px #FFF, 1127px 1728px #FFF, 1674px 1505px #FFF, 1535px 1126px #FFF, 26px 627px #FFF, 1629px 1745px #FFF, 679px 1315px #FFF, 1906px 188px #FFF, 1935px 1752px #FFF, 1137px 1417px #FFF, 1933px 873px #FFF, 1623px 1436px #FFF, 316px 1358px #FFF, 419px 1833px #FFF, 721px 1788px #FFF, 97px 1848px #FFF, 970px 123px #FFF, 143px 177px #FFF, 1108px 1908px #FFF, 858px 263px #FFF, 1065px 1173px #FFF, 124px 663px #FFF, 699px 1726px #FFF, 1702px 401px #FFF, 1088px 1921px #FFF, 1541px 324px #FFF, 789px 451px #FFF, 445px 1565px #FFF, 724px 1699px #FFF, 88px 669px #FFF, 1472px 1917px #FFF, 1538px 1840px #FFF, 775px 1483px #FFF, 233px 1269px #FFF, 604px 217px #FFF, 1749px 22px #FFF, 1635px 265px #FFF, 903px 394px #FFF, 1875px 143px #FFF, 456px 67px #FFF, 1030px 1865px #FFF, 601px 1439px #FFF, 1295px 1439px #FFF, 244px 1969px #FFF, 1499px 98px #FFF, 1609px 772px #FFF, 1755px 1621px #FFF, 462px 1717px #FFF, 1190px 1013px #FFF, 1107px 608px #FFF, 1438px 1485px #FFF, 1546px 130px #FFF, 1187px 90px #FFF, 1182px 689px #FFF, 93px 536px #FFF, 700px 889px #FFF, 165px 220px #FFF, 1318px 1881px #FFF, 115px 1664px #FFF, 64px 529px #FFF, 826px 1836px #FFF, 1045px 1308px #FFF, 78px 1132px #FFF, 1819px 1216px #FFF, 847px 1611px #FFF, 1917px 1196px #FFF, 734px 634px #FFF, 1950px 1047px #FFF, 266px 1820px #FFF, 1549px 1887px #FFF, 1125px 864px #FFF, 330px 1124px #FFF, 1220px 888px #FFF, 921px 1610px #FFF, 1648px 1023px #FFF, 1998px 451px #FFF, 1472px 378px #FFF, 1884px 113px #FFF, 855px 976px #FFF, 1888px 424px #FFF, 1890px 7px #FFF, 19px 1044px #FFF, 1343px 1526px #FFF, 416px 72px #FFF, 1965px 573px #FFF, 688px 523px #FFF, 805px 1480px #FFF, 761px 1186px #FFF, 1632px 691px #FFF, 847px 1346px #FFF, 967px 788px #FFF, 1606px 1247px #FFF, 250px 524px #FFF, 986px 324px #FFF, 1627px 202px #FFF, 986px 20px #FFF, 445px 1128px #FFF, 826px 1635px #FFF, 113px 849px #FFF, 216px 1088px #FFF, 1286px 557px #FFF, 96px 1505px #FFF, 1642px 1982px #FFF, 750px 1286px #FFF, 967px 1789px #FFF, 5px 1481px #FFF, 280px 1548px #FFF, 420px 550px #FFF, 1559px 289px #FFF, 1632px 1072px #FFF, 45px 804px #FFF, 1025px 157px #FFF, 790px 1343px #FFF, 461px 1404px #FFF, 590px 485px #FFF, 1865px 1860px #FFF, 620px 304px #FFF, 1374px 737px #FFF, 1864px 1795px #FFF, 1139px 183px #FFF, 1848px 1273px #FFF, 30px 1278px #FFF, 1718px 1299px #FFF, 266px 1611px #FFF, 78px 1397px #FFF, 613px 1494px #FFF, 498px 922px #FFF, 1289px 1168px #FFF, 845px 1094px #FFF, 931px 433px #FFF, 1742px 1506px #FFF, 1332px 728px #FFF, 406px 1827px #FFF, 1655px 604px #FFF, 249px 877px #FFF, 803px 753px #FFF, 1037px 804px #FFF, 720px 992px #FFF, 1401px 912px #FFF, 626px 160px #FFF, 1941px 1058px #FFF, 309px 1623px #FFF, 1526px 1829px #FFF, 1819px 978px #FFF, 477px 176px #FFF, 1807px 493px #FFF, 1063px 775px #FFF, 1260px 1851px #FFF, 1657px 13px #FFF, 180px 130px #FFF, 794px 1020px #FFF, 1327px 1206px #FFF, 1709px 1351px #FFF, 413px 168px #FFF, 1674px 188px #FFF, 1432px 366px #FFF, 1336px 1732px #FFF, 1717px 1686px #FFF, 24px 1870px #FFF, 849px 1244px #FFF, 494px 174px #FFF, 1041px 795px #FFF, 709px 1258px #FFF, 927px 1362px #FFF, 187px 1408px #FFF, 79px 1239px #FFF, 329px 1167px #FFF, 499px 301px #FFF, 1300px 379px #FFF, 457px 1008px #FFF, 1301px 1186px #FFF, 772px 300px #FFF, 1216px 134px #FFF, 612px 149px #FFF, 1405px 925px #FFF, 1531px 1932px #FFF, 227px 328px #FFF, 340px 312px #FFF, 599px 1016px #FFF, 958px 1509px #FFF, 949px 345px #FFF, 1922px 1781px #FFF, 957px 825px #FFF, 186px 1173px #FFF, 1695px 1162px #FFF, 156px 214px #FFF, 548px 1985px #FFF, 911px 1896px #FFF, 374px 1895px #FFF, 618px 973px #FFF, 271px 337px #FFF, 1616px 1217px #FFF, 555px 874px #FFF, 1693px 1550px #FFF, 25px 1163px #FFF, 277px 638px #FFF, 195px 1620px #FFF, 1172px 1322px #FFF, 317px 1324px #FFF, 188px 1302px #FFF, 130px 855px #FFF, 571px 1550px #FFF, 412px 1007px #FFF, 1338px 1085px #FFF, 927px 1382px #FFF, 1470px 407px #FFF, 1988px 815px #FFF, 1564px 491px #FFF, 521px 733px #FFF, 749px 500px #FFF, 1412px 1323px #FFF, 665px 1629px #FFF, 599px 202px #FFF, 1491px 1901px #FFF, 1743px 972px #FFF, 448px 155px #FFF, 80px 507px #FFF, 1222px 1869px #FFF, 648px 735px #FFF, 908px 1138px #FFF, 1002px 420px #FFF, 1089px 137px #FFF, 925px 117px #FFF, 1864px 337px #FFF, 1945px 1774px #FFF, 1341px 1403px #FFF, 603px 316px #FFF, 374px 1116px #FFF, 809px 1285px #FFF, 1739px 132px #FFF, 103px 1429px #FFF, 887px 1221px #FFF, 1439px 969px #FFF, 284px 151px #FFF, 295px 1215px #FFF, 900px 381px #FFF, 1415px 1023px #FFF, 1429px 1686px #FFF, 1250px 1133px #FFF, 950px 1528px #FFF, 1469px 787px #FFF, 1022px 1918px #FFF, 318px 836px #FFF, 211px 1039px #FFF, 1747px 1755px #FFF, 1949px 898px #FFF, 1895px 1712px #FFF, 585px 1012px #FFF, 817px 1100px #FFF, 56px 867px #FFF, 6px 826px #FFF, 1254px 101px #FFF, 413px 1130px #FFF, 670px 573px #FFF, 1399px 1279px #FFF, 1685px 1693px #FFF, 280px 211px #FFF, 1590px 1186px #FFF, 648px 70px #FFF, 734px 689px #FFF, 70px 705px #FFF, 798px 1758px #FFF, 1223px 1211px #FFF, 543px 457px #FFF, 205px 32px #FFF, 1049px 1416px #FFF, 5px 1864px #FFF, 978px 1416px #FFF, 1058px 1759px #FFF, 539px 526px #FFF, 1905px 415px #FFF, 1091px 812px #FFF, 566px 896px #FFF, 417px 1705px #FFF, 1889px 1709px #FFF, 649px 935px #FFF, 1298px 1554px #FFF, 1594px 1639px #FFF, 1689px 1839px #FFF, 1959px 656px #FFF, 1048px 239px #FFF, 1901px 1076px #FFF, 1516px 875px #FFF, 362px 342px #FFF, 959px 964px #FFF, 979px 265px #FFF, 130px 244px #FFF, 382px 663px #FFF, 1752px 386px #FFF, 316px 491px #FFF, 401px 653px #FFF, 1976px 577px #FFF, 1408px 1461px #FFF, 1148px 317px #FFF, 1561px 524px #FFF, 1px 1992px #FFF, 725px 1749px #FFF, 162px 649px #FFF, 1161px 1494px #FFF, 707px 1746px #FFF, 711px 213px #FFF, 1222px 660px #FFF, 1478px 165px #FFF, 1824px 138px #FFF, 1226px 76px #FFF, 1020px 1077px #FFF, 1269px 1956px #FFF, 1276px 686px #FFF, 852px 1811px #FFF, 334px 690px #FFF, 1306px 1592px #FFF, 1725px 270px #FFF, 138px 1614px #FFF, 81px 1101px #FFF, 1641px 1743px #FFF, 327px 1311px #FFF, 1230px 1340px #FFF, 1782px 808px #FFF, 1816px 1461px #FFF, 59px 1785px #FFF, 1680px 1411px #FFF, 507px 533px #FFF, 1302px 527px #FFF, 961px 981px #FFF, 652px 338px #FFF, 1448px 1109px #FFF, 1329px 764px #FFF, 72px 614px #FFF, 338px 502px #FFF, 635px 742px #FFF, 319px 1418px #FFF, 1411px 1707px #FFF, 1041px 434px #FFF, 511px 1020px #FFF, 1746px 1042px #FFF, 1585px 801px #FFF, 571px 443px #FFF, 413px 1613px #FFF, 282px 942px #FFF, 702px 1952px #FFF, 599px 1741px #FFF, 1655px 1110px #FFF, 1811px 1342px #FFF, 163px 89px #FFF, 1387px 786px #FFF, 1440px 525px #FFF, 1338px 613px #FFF, 1209px 1376px #FFF, 1116px 973px #FFF, 207px 1391px #FFF, 1204px 1476px #FFF, 1668px 874px #FFF, 1364px 15px #FFF, 1278px 1732px #FFF, 64px 721px #FFF, 607px 805px #FFF, 845px 322px #FFF, 192px 80px #FFF, 13px 713px #FFF, 1313px 232px #FFF, 1066px 1451px #FFF, 1224px 714px #FFF, 758px 1122px #FFF, 676px 458px #FFF, 1989px 75px #FFF, 1513px 1416px #FFF, 1663px 662px #FFF, 220px 737px #FFF, 622px 874px #FFF, 1751px 1029px #FFF, 1230px 1336px #FFF, 1204px 649px #FFF, 1090px 791px #FFF, 299px 1137px #FFF, 1009px 328px #FFF, 1452px 1710px #FFF, 387px 806px #FFF, 940px 1591px #FFF, 1001px 626px #FFF, 1034px 1845px #FFF, 1482px 1709px #FFF, 1110px 1995px #FFF, 1023px 274px #FFF, 1097px 1936px #FFF, 1454px 1745px #FFF, 1608px 1698px #FFF, 598px 1978px #FFF, 304px 1408px #FFF, 1193px 534px #FFF, 468px 1374px #FFF, 1641px 1698px #FFF, 1569px 1236px #FFF, 146px 1169px #FFF, 242px 425px #FFF, 920px 1225px #FFF, 622px 1085px #FFF, 830px 187px #FFF, 1373px 395px #FFF, 736px 785px #FFF, 601px 123px #FFF, 831px 1163px #FFF, 559px 1599px #FFF, 1073px 1784px #FFF, 1801px 1147px #FFF, 610px 245px #FFF, 1699px 259px #FFF, 1041px 733px #FFF, 584px 1226px #FFF, 1549px 1910px #FFF, 82px 69px #FFF, 270px 1711px #FFF, 1728px 94px #FFF, 1680px 1850px #FFF, 956px 467px #FFF, 212px 962px #FFF, 1157px 1293px #FFF, 449px 20px #FFF, 83px 413px #FFF, 1035px 61px #FFF, 1220px 1508px #FFF, 541px 704px #FFF, 55px 1665px #FFF, 456px 1899px #FFF, 1287px 1966px #FFF, 114px 965px #FFF, 1528px 465px #FFF, 1292px 896px #FFF, 1003px 1641px #FFF, 1154px 1408px #FFF, 908px 1603px #FFF, 1296px 812px #FFF, 816px 492px #FFF, 158px 383px #FFF, 1143px 219px #FFF, 1340px 764px #FFF, 157px 1496px #FFF, 1929px 913px #FFF, 1922px 1576px #FFF, 613px 526px #FFF, 1964px 1463px #FFF, 933px 1006px #FFF, 366px 1497px #FFF, 1392px 426px #FFF, 1264px 1937px #FFF, 1703px 1248px #FFF, 490px 51px #FFF, 28px 7px #FFF, 1639px 1979px #FFF, 1392px 1377px #FFF, 164px 1302px #FFF, 97px 459px #FFF, 1338px 1661px #FFF, 225px 426px #FFF, 155px 728px #FFF, 1844px 1816px #FFF, 6px 1197px #FFF, 677px 1453px #FFF, 1294px 1207px #FFF, 449px 887px #FFF, 1285px 424px #FFF, 1934px 1937px #FFF, 414px 1118px #FFF, 726px 1072px #FFF, 882px 703px #FFF, 1946px 773px #FFF, 743px 420px #FFF, 743px 1417px #FFF, 1393px 476px #FFF, 339px 1237px #FFF, 1767px 1900px #FFF, 854px 118px #FFF, 1034px 1534px #FFF, 527px 1208px #FFF, 1198px 1398px #FFF, 1003px 875px #FFF, 610px 1187px #FFF, 1017px 486px #FFF, 688px 1320px #FFF, 1759px 689px #FFF, 1789px 1577px #FFF, 1231px 1277px #FFF, 936px 984px #FFF, 478px 741px #FFF, 1033px 1728px #FFF, 1654px 1280px #FFF, 1369px 2px #FFF, 1695px 877px #FFF, 717px 1033px #FFF, 1px 1531px #FFF, 885px 1376px #FFF, 1679px 374px #FFF, 1395px 741px #FFF, 1146px 1892px #FFF, 605px 604px #FFF, 1597px 596px #FFF, 524px 1457px #FFF, 1686px 1728px #FFF, 215px 1300px #FFF, 1642px 221px #FFF, 1412px 1146px #FFF, 684px 429px #FFF, 1944px 1998px #FFF, 256px 1290px #FFF, 968px 147px #FFF, 403px 1218px #FFF, 1382px 1639px #FFF, 488px 1338px #FFF, 1013px 1144px #FFF, 544px 210px #FFF, 1014px 324px #FFF, 239px 1921px #FFF, 974px 134px #FFF, 963px 658px #FFF, 1020px 1735px #FFF, 462px 1379px #FFF, 1877px 217px #FFF, 1193px 1150px #FFF, 1595px 920px #FFF, 986px 1921px #FFF, 1500px 1059px #FFF, 713px 394px #FFF, 1946px 715px #FFF, 1025px 799px #FFF, 5px 1120px #FFF, 674px 1786px #FFF, 490px 1803px #FFF, 359px 525px #FFF, 913px 1099px #FFF, 1164px 1446px #FFF, 793px 742px #FFF, 266px 1800px #FFF, 616px 1821px #FFF, 1939px 1968px #FFF, 321px 1427px #FFF, 1320px 1185px #FFF, 873px 1380px #FFF, 434px 208px #FFF, 883px 1540px #FFF, 1390px 686px #FFF, 1304px 1590px #FFF, 574px 420px #FFF, 260px 1111px #FFF, 1689px 446px #FFF, 1530px 1569px #FFF, 1625px 1114px #FFF, 1780px 1719px #FFF, 916px 966px #FFF, 289px 830px #FFF, 427px 896px #FFF, 1851px 635px #FFF, 1921px 1410px #FFF, 1022px 793px #FFF, 183px 338px #FFF, 230px 1372px #FFF, 706px 1753px #FFF, 1448px 537px #FFF, 968px 1993px #FFF, 173px 575px #FFF, 600px 1064px #FFF, 394px 1003px #FFF, 1143px 1761px #FFF, 62px 515px #FFF, 1630px 1557px #FFF, 973px 91px #FFF, 1646px 583px #FFF, 1016px 1613px #FFF, 778px 838px #FFF, 499px 1873px #FFF, 572px 475px #FFF, 1528px 1265px #FFF, 751px 1333px #FFF, 1753px 141px #FFF, 1358px 993px #FFF, 1718px 597px #FFF, 806px 1936px #FFF, 1670px 883px #FFF, 472px 1115px #FFF, 1178px 31px #FFF, 1054px 296px #FFF, 597px 1300px #FFF, 1207px 1054px #FFF, 1604px 1250px #FFF, 949px 1918px #FFF, 1024px 1737px #FFF, 124px 1489px #FFF, 908px 1521px #FFF, 1333px 1330px #FFF, 533px 368px #FFF, 456px 674px #FFF, 495px 735px #FFF, 1999px 242px #FFF, 1960px 404px #FFF, 1452px 1293px #FFF, 1513px 338px #FFF, 842px 402px #FFF, 1157px 881px #FFF, 1788px 987px #FFF, 1888px 1116px #FFF, 252px 269px #FFF, 555px 581px #FFF, 388px 814px #FFF, 690px 1428px #FFF, 388px 791px #FFF, 75px 1553px #FFF, 903px 1134px #FFF, 1135px 240px #FFF, 22px 1032px #FFF, 1661px 1136px #FFF, 379px 1305px #FFF, 1555px 1763px #FFF, 765px 1061px #FFF, 878px 997px #FFF, 1245px 477px #FFF, 1368px 717px #FFF, 1138px 1863px #FFF, 1617px 589px #FFF, 956px 680px #FFF, 1421px 1759px #FFF, 156px 1735px #FFF, 639px 1481px #FFF, 258px 459px #FFF, 195px 867px #FFF, 1118px 1889px #FFF, 175px 1743px #FFF, 119px 1194px #FFF, 212px 1233px #FFF, 1146px 1239px #FFF, 1329px 1811px #FFF, 839px 631px #FFF, 209px 974px #FFF, 1943px 338px #FFF, 839px 1287px #FFF, 1344px 475px #FFF, 1756px 1955px #FFF, 667px 457px #FFF, 719px 1370px #FFF, 696px 567px #FFF, 335px 1921px #FFF, 1454px 1768px #FFF, 1245px 1595px #FFF, 1061px 303px #FFF, 1341px 198px #FFF, 1439px 806px #FFF, 1905px 136px #FFF, 916px 1070px #FFF, 1440px 1510px #FFF, 1241px 1317px #FFF, 985px 571px #FFF, 1609px 1265px #FFF, 1812px 435px #FFF, 523px 1032px #FFF, 1985px 1437px #FFF, 369px 809px #FFF, 368px 1547px #FFF, 1230px 1934px #FFF, 1691px 452px #FFF, 1399px 219px #FFF, 445px 407px #FFF, 988px 1944px #FFF, 1018px 1266px #FFF;
}

#stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1035px 990px #FFF, 1191px 1971px #FFF, 873px 1557px #FFF, 1183px 842px #FFF, 1943px 563px #FFF, 816px 1344px #FFF, 1707px 954px #FFF, 1487px 1466px #FFF, 277px 1171px #FFF, 937px 1898px #FFF, 224px 1679px #FFF, 762px 898px #FFF, 1975px 1932px #FFF, 1182px 248px #FFF, 1204px 1306px #FFF, 329px 691px #FFF, 994px 405px #FFF, 1846px 1130px #FFF, 1635px 725px #FFF, 1902px 1308px #FFF, 719px 884px #FFF, 572px 960px #FFF, 1014px 963px #FFF, 55px 234px #FFF, 1666px 123px #FFF, 379px 7px #FFF, 797px 590px #FFF, 76px 325px #FFF, 1739px 183px #FFF, 1335px 1505px #FFF, 1489px 373px #FFF, 1259px 1821px #FFF, 999px 618px #FFF, 758px 1217px #FFF, 95px 1695px #FFF, 1021px 1109px #FFF, 979px 259px #FFF, 299px 73px #FFF, 1258px 326px #FFF, 1555px 1025px #FFF, 191px 1912px #FFF, 1678px 732px #FFF, 713px 1583px #FFF, 1571px 1124px #FFF, 1496px 1959px #FFF, 474px 701px #FFF, 1112px 662px #FFF, 1424px 1828px #FFF, 1347px 1607px #FFF, 1169px 221px #FFF, 1679px 552px #FFF, 1502px 816px #FFF, 676px 1907px #FFF, 300px 1666px #FFF, 673px 860px #FFF, 73px 2000px #FFF, 813px 487px #FFF, 1812px 1977px #FFF, 1954px 1997px #FFF, 717px 613px #FFF, 321px 1861px #FFF, 335px 270px #FFF, 448px 454px #FFF, 564px 1235px #FFF, 1629px 749px #FFF, 1117px 23px #FFF, 401px 909px #FFF, 1459px 1007px #FFF, 1174px 1075px #FFF, 1349px 32px #FFF, 1703px 960px #FFF, 1497px 1825px #FFF, 1805px 354px #FFF, 1355px 1303px #FFF, 788px 1410px #FFF, 1442px 628px #FFF, 1845px 1184px #FFF, 1629px 1874px #FFF, 936px 89px #FFF, 738px 136px #FFF, 689px 1758px #FFF, 725px 419px #FFF, 1962px 1177px #FFF, 452px 181px #FFF, 310px 1948px #FFF, 1053px 10px #FFF, 712px 156px #FFF, 1224px 1615px #FFF, 1718px 769px #FFF, 265px 989px #FFF, 1889px 1370px #FFF, 1889px 209px #FFF, 733px 1106px #FFF, 697px 506px #FFF, 1889px 261px #FFF, 539px 737px #FFF, 382px 524px #FFF, 1233px 1928px #FFF, 964px 102px #FFF, 252px 1628px #FFF, 472px 644px #FFF, 361px 287px #FFF, 865px 1459px #FFF, 1667px 1825px #FFF, 96px 756px #FFF, 951px 908px #FFF, 1277px 1933px #FFF, 1326px 624px #FFF, 1541px 1135px #FFF, 289px 1679px #FFF, 1541px 502px #FFF, 777px 1479px #FFF, 176px 955px #FFF, 257px 1501px #FFF, 916px 1577px #FFF, 1411px 613px #FFF, 1175px 1734px #FFF, 1879px 719px #FFF, 295px 1507px #FFF, 740px 1260px #FFF, 1232px 1885px #FFF, 790px 412px #FFF, 185px 742px #FFF, 241px 1789px #FFF, 1533px 1416px #FFF, 1809px 988px #FFF, 468px 173px #FFF, 1604px 1046px #FFF, 1314px 783px #FFF, 1877px 1073px #FFF, 1361px 1215px #FFF, 1913px 1015px #FFF, 1055px 376px #FFF, 1272px 1285px #FFF, 1231px 974px #FFF, 1049px 309px #FFF, 1281px 19px #FFF, 348px 554px #FFF, 1009px 875px #FFF, 1775px 784px #FFF, 204px 126px #FFF, 1290px 1081px #FFF, 512px 538px #FFF, 1096px 1026px #FFF, 626px 1660px #FFF, 790px 1464px #FFF, 686px 140px #FFF, 671px 430px #FFF, 200px 345px #FFF, 503px 836px #FFF, 237px 1548px #FFF, 343px 1408px #FFF, 1886px 1849px #FFF, 1650px 381px #FFF, 1187px 920px #FFF, 13px 729px #FFF, 738px 817px #FFF, 341px 1551px #FFF, 724px 274px #FFF, 628px 834px #FFF, 674px 113px #FFF, 954px 110px #FFF, 1675px 1968px #FFF, 71px 1799px #FFF, 765px 1549px #FFF, 1807px 1862px #FFF, 1166px 1362px #FFF, 218px 1569px #FFF, 466px 693px #FFF, 560px 830px #FFF, 1610px 330px #FFF, 1521px 145px #FFF, 1858px 1290px #FFF, 1918px 149px #FFF, 1427px 878px #FFF, 827px 496px #FFF, 253px 1190px #FFF, 194px 421px #FFF, 1401px 445px #FFF, 310px 427px #FFF, 1129px 1203px #FFF, 1360px 1580px #FFF, 1460px 775px #FFF, 168px 223px #FFF, 817px 1722px #FFF, 748px 1066px #FFF, 1624px 536px #FFF, 1728px 122px #FFF, 1829px 928px #FFF, 1126px 182px #FFF, 1571px 42px #FFF, 289px 278px #FFF, 1277px 856px #FFF, 1065px 1463px #FFF, 366px 845px #FFF, 1878px 698px #FFF, 687px 1014px #FFF, 700px 180px #FFF, 1841px 1274px #FFF, 1375px 633px #FFF;
    -webkit-animation: animStar 100s linear infinite;
    animation: animStar 100s linear infinite;
}

#stars2:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1035px 990px #FFF, 1191px 1971px #FFF, 873px 1557px #FFF, 1183px 842px #FFF, 1943px 563px #FFF, 816px 1344px #FFF, 1707px 954px #FFF, 1487px 1466px #FFF, 277px 1171px #FFF, 937px 1898px #FFF, 224px 1679px #FFF, 762px 898px #FFF, 1975px 1932px #FFF, 1182px 248px #FFF, 1204px 1306px #FFF, 329px 691px #FFF, 994px 405px #FFF, 1846px 1130px #FFF, 1635px 725px #FFF, 1902px 1308px #FFF, 719px 884px #FFF, 572px 960px #FFF, 1014px 963px #FFF, 55px 234px #FFF, 1666px 123px #FFF, 379px 7px #FFF, 797px 590px #FFF, 76px 325px #FFF, 1739px 183px #FFF, 1335px 1505px #FFF, 1489px 373px #FFF, 1259px 1821px #FFF, 999px 618px #FFF, 758px 1217px #FFF, 95px 1695px #FFF, 1021px 1109px #FFF, 979px 259px #FFF, 299px 73px #FFF, 1258px 326px #FFF, 1555px 1025px #FFF, 191px 1912px #FFF, 1678px 732px #FFF, 713px 1583px #FFF, 1571px 1124px #FFF, 1496px 1959px #FFF, 474px 701px #FFF, 1112px 662px #FFF, 1424px 1828px #FFF, 1347px 1607px #FFF, 1169px 221px #FFF, 1679px 552px #FFF, 1502px 816px #FFF, 676px 1907px #FFF, 300px 1666px #FFF, 673px 860px #FFF, 73px 2000px #FFF, 813px 487px #FFF, 1812px 1977px #FFF, 1954px 1997px #FFF, 717px 613px #FFF, 321px 1861px #FFF, 335px 270px #FFF, 448px 454px #FFF, 564px 1235px #FFF, 1629px 749px #FFF, 1117px 23px #FFF, 401px 909px #FFF, 1459px 1007px #FFF, 1174px 1075px #FFF, 1349px 32px #FFF, 1703px 960px #FFF, 1497px 1825px #FFF, 1805px 354px #FFF, 1355px 1303px #FFF, 788px 1410px #FFF, 1442px 628px #FFF, 1845px 1184px #FFF, 1629px 1874px #FFF, 936px 89px #FFF, 738px 136px #FFF, 689px 1758px #FFF, 725px 419px #FFF, 1962px 1177px #FFF, 452px 181px #FFF, 310px 1948px #FFF, 1053px 10px #FFF, 712px 156px #FFF, 1224px 1615px #FFF, 1718px 769px #FFF, 265px 989px #FFF, 1889px 1370px #FFF, 1889px 209px #FFF, 733px 1106px #FFF, 697px 506px #FFF, 1889px 261px #FFF, 539px 737px #FFF, 382px 524px #FFF, 1233px 1928px #FFF, 964px 102px #FFF, 252px 1628px #FFF, 472px 644px #FFF, 361px 287px #FFF, 865px 1459px #FFF, 1667px 1825px #FFF, 96px 756px #FFF, 951px 908px #FFF, 1277px 1933px #FFF, 1326px 624px #FFF, 1541px 1135px #FFF, 289px 1679px #FFF, 1541px 502px #FFF, 777px 1479px #FFF, 176px 955px #FFF, 257px 1501px #FFF, 916px 1577px #FFF, 1411px 613px #FFF, 1175px 1734px #FFF, 1879px 719px #FFF, 295px 1507px #FFF, 740px 1260px #FFF, 1232px 1885px #FFF, 790px 412px #FFF, 185px 742px #FFF, 241px 1789px #FFF, 1533px 1416px #FFF, 1809px 988px #FFF, 468px 173px #FFF, 1604px 1046px #FFF, 1314px 783px #FFF, 1877px 1073px #FFF, 1361px 1215px #FFF, 1913px 1015px #FFF, 1055px 376px #FFF, 1272px 1285px #FFF, 1231px 974px #FFF, 1049px 309px #FFF, 1281px 19px #FFF, 348px 554px #FFF, 1009px 875px #FFF, 1775px 784px #FFF, 204px 126px #FFF, 1290px 1081px #FFF, 512px 538px #FFF, 1096px 1026px #FFF, 626px 1660px #FFF, 790px 1464px #FFF, 686px 140px #FFF, 671px 430px #FFF, 200px 345px #FFF, 503px 836px #FFF, 237px 1548px #FFF, 343px 1408px #FFF, 1886px 1849px #FFF, 1650px 381px #FFF, 1187px 920px #FFF, 13px 729px #FFF, 738px 817px #FFF, 341px 1551px #FFF, 724px 274px #FFF, 628px 834px #FFF, 674px 113px #FFF, 954px 110px #FFF, 1675px 1968px #FFF, 71px 1799px #FFF, 765px 1549px #FFF, 1807px 1862px #FFF, 1166px 1362px #FFF, 218px 1569px #FFF, 466px 693px #FFF, 560px 830px #FFF, 1610px 330px #FFF, 1521px 145px #FFF, 1858px 1290px #FFF, 1918px 149px #FFF, 1427px 878px #FFF, 827px 496px #FFF, 253px 1190px #FFF, 194px 421px #FFF, 1401px 445px #FFF, 310px 427px #FFF, 1129px 1203px #FFF, 1360px 1580px #FFF, 1460px 775px #FFF, 168px 223px #FFF, 817px 1722px #FFF, 748px 1066px #FFF, 1624px 536px #FFF, 1728px 122px #FFF, 1829px 928px #FFF, 1126px 182px #FFF, 1571px 42px #FFF, 289px 278px #FFF, 1277px 856px #FFF, 1065px 1463px #FFF, 366px 845px #FFF, 1878px 698px #FFF, 687px 1014px #FFF, 700px 180px #FFF, 1841px 1274px #FFF, 1375px 633px #FFF;
}

#stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 1523px 1833px #FFF, 1128px 1696px #FFF, 1121px 239px #FFF, 1237px 324px #FFF, 1028px 1242px #FFF, 1706px 1473px #FFF, 1433px 675px #FFF, 1055px 368px #FFF, 1401px 1794px #FFF, 1837px 199px #FFF, 742px 999px #FFF, 1328px 532px #FFF, 913px 1413px #FFF, 571px 934px #FFF, 1339px 804px #FFF, 324px 1822px #FFF, 1395px 1278px #FFF, 33px 301px #FFF, 108px 718px #FFF, 77px 1976px #FFF, 23px 1644px #FFF, 906px 1765px #FFF, 85px 1889px #FFF, 178px 1279px #FFF, 1776px 132px #FFF, 454px 414px #FFF, 879px 231px #FFF, 1772px 988px #FFF, 1136px 516px #FFF, 733px 1735px #FFF, 1837px 605px #FFF, 66px 415px #FFF, 881px 1257px #FFF, 1211px 766px #FFF, 1747px 1872px #FFF, 839px 295px #FFF, 324px 571px #FFF, 1575px 1329px #FFF, 1871px 716px #FFF, 1266px 1034px #FFF, 1507px 1190px #FFF, 1426px 1313px #FFF, 401px 1361px #FFF, 882px 1111px #FFF, 827px 1508px #FFF, 700px 625px #FFF, 1170px 66px #FFF, 1422px 831px #FFF, 178px 1516px #FFF, 1265px 756px #FFF, 460px 557px #FFF, 368px 30px #FFF, 346px 626px #FFF, 1098px 1614px #FFF, 1576px 432px #FFF, 286px 266px #FFF, 345px 1689px #FFF, 1386px 1077px #FFF, 608px 1758px #FFF, 858px 33px #FFF, 1446px 1943px #FFF, 1308px 1027px #FFF, 567px 540px #FFF, 1660px 78px #FFF, 1725px 97px #FFF, 608px 685px #FFF, 162px 937px #FFF, 367px 1363px #FFF, 1717px 1962px #FFF, 936px 282px #FFF, 352px 412px #FFF, 858px 1304px #FFF, 1597px 796px #FFF, 1136px 667px #FFF, 1352px 561px #FFF, 787px 922px #FFF, 1672px 1002px #FFF, 1468px 1379px #FFF, 1060px 1701px #FFF, 1077px 89px #FFF, 319px 484px #FFF, 1477px 938px #FFF, 387px 156px #FFF, 417px 1676px #FFF, 1416px 1518px #FFF, 745px 1723px #FFF, 140px 810px #FFF, 1258px 433px #FFF, 1805px 1489px #FFF, 693px 180px #FFF, 1772px 947px #FFF, 206px 1803px #FFF, 1212px 241px #FFF, 546px 1702px #FFF, 793px 1007px #FFF, 1838px 1094px #FFF, 899px 417px #FFF, 1561px 1644px #FFF, 429px 1001px #FFF, 1375px 213px #FFF;
    -webkit-animation: animStar 150s linear infinite;
    animation: animStar 150s linear infinite;
}

@-webkit-keyframes animStar {
    from {
        -webkit-transform: translateY(500px);
        transform: translateY(500px);
    }
    to {
        -webkit-transform: translateY(-2000px);
        transform: translateY(-2000px);
    }
}

@keyframes animStar {
    from {
        -webkit-transform: translateY(500px);
        transform: translateY(500px);
    }
    to {
        -webkit-transform: translateY(-2000px);
        transform: translateY(-2000px);
    }
}
iframe {
    margin: 0;
    padding: 0;
}

</style>