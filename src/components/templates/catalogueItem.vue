<template lang="html">
	<li class="product waves-effect waves-dark">
		<h6 class="product__name">{{ catalogueItem.name }}</h6>
		<img v-lazy=" '/static/assets/img' + catalogueItem.picture"
					:alt="catalogueItem.type + ' ' + catalogueItem.name"
					class="product__image" />
		<span class="product__description">{{ catalogueItem.description }}</span>
		<span v-if="catalogueItem.type === 'напитки' " class="product__weight">{{ catalogueItem.weight }} л.</span>
		<span v-else-if="catalogueItem.weight" class="product__weight">{{ catalogueItem.weight }} г.</span>
		<button @click=" toCart() " class="product__order">
			<span class="product__order-price"
						data-focus="Добавлено!">
				{{ catalogueItem.price }} р.
			</span>
		</button>
	</li>
</template>

<script>

	export default {
		name: "catalogue-Item",
		props: {
			'catalogueItem': {
				type: Object,
				required: true
			}
		},
		methods: {
			toCart() {
				const product = {
					id: this.catalogueItem.id,
					name: this.catalogueItem.name,
					price: this.catalogueItem.price
				};
				this.$emit("addToCart", product);
			}
		}
	};

</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.product {
		display: flex;
		flex: 1 1 auto;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		width: 30%;
		padding: 30px;
		margin: 10px;
		background-color: $main-elm;
		cursor: default;
		transition: 0.3s ease-in;
		@include MDShadow-1;
		@include MQ(Pp) {
			width: 100%;
		}
		@include MQ(Pl) {
			flex-basis: 45%;
		}
		@include MQ(Tp) {
			flex-basis: 45%;
		}
		&__name {
			flex: 1 1 auto;
			margin: 0 auto 1rem auto;
			text-align: center;
		}
		&__image {
			flex: 10 1 auto;
			max-width: 250px;
			min-height: 180px;
			width: 100%;
			margin: auto;
			object-fit: contain;
			object-position: center;
		}
		&__description {
			text-align: center;
		}
		&__order {
			overflow: hidden;
			user-select: none;
			width: 50%;
			padding: 0;
			margin-top: 0.5rem;
			cursor: pointer;
			border: none;
			perspective: 1000px;
			transition: 0.3s ease-in;
			@include MDShadow-1;
			&:hover {
				@include MDShadow-2;
			}
			&:focus .product__order-price {
				transform: rotateX(90deg) translateY(-22px);
			}
			.csstransforms3d &:focus .product__order-price::before {
				background: darken($second-elm, 10%);
			}
			@include MQ(Pp) {
				width: 100%;
			}
			@include MQ(Pl) {
				width: 100%;
			}
		}
		&__order-price {
			display: inline-block;
			size: 100% 103%;
			padding: 10px;
			color: $main-elm $second-elm;
			transform-origin: 50% 0;
			transform-style: preserve-3d;
			transition: transform 0.4s ease;
			.csstransforms3d &::before {
				position: absolute;
				content: attr(data-focus);
				top: 100%;
				left: 0;
				width: 100%;
				height: 103%;
				padding: 10px;
				background: darken($second-elm, 10%);
				transform: rotateX(-90deg);
				transform-origin: 50% 0;
				transition: background 0.3s;
			}
		}
	}

</style>
