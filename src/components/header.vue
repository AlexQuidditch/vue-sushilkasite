<template lang="html">
	<header id="header" class="header">
		<div class="header__overlay">
            <div class="header__title-container">
                <h1 class="header__title">{{ Titles.main }}</h1>
                <h2 class="header__subtitle">{{ Titles.sub }}</h2>
				<h6 class="header__sub-text">{{ Titles.little }}</h6>
            </div>
        </div>
		<flickity ref="flickity" :options="flickityOptions" class="slider">
		    <div v-for="sllideItem in Slides" :key="sllideItem.key" class="carousel-cell">
		    	<img :src="sllideItem.img" class="slider__slide" alt=""/>
		    </div>
		</flickity>
	</header>
</template>

<script>
	import Flickity from 'vue-flickity';

	export default {
  		name: "header",
		components: {
			Flickity
		},
      	data() {
			return {
				Titles: {
					main: 'Вкуснейшие роллы и суши\nс доставкой на дом!',
					sub: 'Закажите через сайт - мы приготовим и доставим за 60 минут!',
					little: 'В праздники можем немного припоздниться :)'
				},
				Slides: [
					{ img: '../../static/assets/img/slider/slide1.jpg' },
					{ img: '../../static/assets/img/slider/slide2.jpg' },
					{ img: '../../static/assets/img/slider/slide3.jpg' },
					{ img: '../../static/assets/img/slider/slide4.jpg' }
				],
				flickityOptions: {
	                prevNextButtons: false,
    	            pageDots: false,
        	        wrapAround: true
				}
			}
      	}
	}
</script>

<style lang="scss">

@import '../scss/partials/_layout';
@import '../scss/partials/_mixins';
@import '../scss/partials/_variables';

.header {
	position: fixed 0 auto auto 0;
	display: flex;
	flex-direction: column;
	z-index: -1;
	size: 100% 100vh;
    &__title-container {
	    display: flex;
	    flex-flow: column wrap;
	    justify-content: center;
	    align-self: center;
	    size: 90% 100%;
		max-width: 980px;
	    margin: 0 auto;
    }
    &__overlay {
        z-index: 2;
		display: flex;
		align-items: center;
        size: 100%;
        background-color: rgba(black, .5)
    }
    &__title {
        margin-bottom: 1rem;
        text-align: center;
        color: $main-elm;
		white-space: pre;
		@include MQ(Pp) {
            font-size: 1.5rem
		}
		@include MQ(Pl) {
            font-size: 1.5rem
		}
    }
    &__subtitle {
        text-align: center;
        color: $main-elm;
		@include MQ(Pp) {
            font-size: 1.5rem
		}
		@include MQ(Pl) {
            font-size: 1.5rem
		}
    }
    &__sub-text {
		margin-top: 2rem;
        text-align: center;
        color: $main-elm
    }
}

.slider {
    position: absolute;
    top: 0;
    left: 0;
	size: 100%;
	.flickity-slider {
		size: 100%;
	}
	&__slide {
		size: 100%;
        object-fit: cover;
        object-position: center;
	}
}

.carousel-cell {
	position: absolute;
	width: 100%;
	height: 100%;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	&::before {
		display: block;
		text-align: center;
		line-height: 500px;
		font-size: 80px;
		color: $slider-elms;
	}
}

.carousel-cell-image {
	opacity: 0;
	display: block;
	max-height: 100%;
	max-width: 100%;
	margin: 0 auto;
	background-size: cover;
	transition: opacity .2s ease-in-out;
}

</style>
