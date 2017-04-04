<template lang="html">
	<div id="wrapper" class="wrapper">
		<cart :added="added" @clearCart = "clearCart()" ></cart>
		<main id="main" class="main">
			<catalogue @addToCart="pushToCart($event)"></catalogue>
		</main>
		<modal class = "is-opened"></modal>
	</div>
</template>

<script>

import Modal from '@/components/form'
import Cart from '@/components/cart';
import Catalogue from '@/components/catalogue';

export default {
	name: 'app',
	components: {
		Cart,
		Catalogue,
		Modal
	},
	data() {
		return {
			added: []
		}
	},
	methods: {
		pushToCart(product) {
			let found = false;
			let $data = this;
			for (let i in $data.added) {
				if ($data.added[i].id === product.id) {
					let newProduct = $data.added[i];
					newProduct.quantity = newProduct.quantity += 1;
					found = true;
					break;
				}
			};
			if (!found) {
				product.quantity = 1;
				$data.added.push(product);
			}
		},
		clearCart() {
			this.added = []
		}
	},
	mounted() {
		Waves.init();
		Waves.attach('[ripple-dark]', ['waves-dark']);
		Waves.attach('[ripple-light]', ['waves-light']);
	}
}
</script>


<style lang="scss">

@import './scss/partials/_layout';
@import './scss/partials/_mixins';
@import './scss/partials/_variables';

@import "./scss/layout/fonts";
@import "./scss/layout/resets";
@import "./scss/libs/burger";

body, html {
    size: 100%;
}

.main {
    z-index: $content-zindex;
    width: 100%;
    max-width: 1180px;
    margin: 95vh auto 1vh;
    padding: 5vh 0;
    background-color: #efdecd;
}

.container_flex-column {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-self: center;
    width: 90%;
    margin: 0 auto;
}

.container_flex-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    align-self: center;
    width: 90%;
    margin: 0 auto;
}
@include waves-light( $main-elm, $ripple-opacity);
@include waves-dark( $second-elm, $ripple-opacity);
svg:not(:root) {
    overflow: visible;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<style src = "./scss/media/phones-port.scss" lang="scss"></style>
<style src = "./scss/media/phones-land.scss" lang="scss"></style>
<style src = "./scss/media/tablets-port.scss" lang="scss"></style>
<style src = "./scss/media/tablets-land.scss" lang="scss"></style>
