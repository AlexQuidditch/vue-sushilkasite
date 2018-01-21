<template lang="html">
	<div id="wrapper" class="wrapper">
		<cart :added = "added"
					:operationsCounter = "operationsCounter"
					@changeCounter = "changeCounter()"
					@clearCart = "clearCart()"
					@modalOpen = "modalOpen()">
		</cart>
		<s-menu></s-menu>
		<s-header></s-header>
		<catalogue @addToCart = "pushToCart($event)"></catalogue>
		<s-footer></s-footer>
		<modal :added = "added"
					 :class = "{ 'is-opened' : modalState }"
					 @clearCart = "clearCart()" @modalClose = "modalClose()">
		</modal>
	</div>
</template>

<script>
	import Modal from '@/components/form'
	import Cart from '@/components/cart';
	import Catalogue from '@/components/catalogue';
	import sHeader from '@/components/header';
	import sFooter from '@/components/footer';
	import sMenu from '@/components/menu';

	import ScrollPolyfill from 'smoothscroll-polyfill';

	export default {
		name: 'app',
		components: { Cart , Catalogue , Modal , sHeader , sFooter , sMenu },
		data() {
			return {
				added: [],
				modalState: false,
				operationsCounter: 0
			}
		},
		methods: {
			changeCounter() {
				this.operationsCounter += 1
			},
			pushToCart(product) {
				let found = false;
				const $data = this;
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
					this.changeCounter();
				}
			},
			clearCart() {
				this.added = [];
				this.changeCounter();
			},
			modalOpen() {
				this.modalState = true
			},
			modalClose() {
				this.modalState = false
			}
		},
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
			ScrollPolyfill.polyfill();
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
	body , html {
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

</style>
