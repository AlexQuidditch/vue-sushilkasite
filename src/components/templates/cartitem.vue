<template lang="html">
	<li class="cart-item">
		<span class = "cart-item__name">{{ name }}</span>
		<span class = "cart-item__price">{{ price }}</span>
		<span class = "cart-item__quantity">
			<button
				@click="$emit('decriment')"
				class = "cart-item__decriment"
				type="button"
				name="button"
				ripple-dark
				>
				<i class="cart-item__icon fa fa-minus" aria-hidden="true"></i>
			</button>
			{{ quantity }}
			<button
				@click="$emit('incriment')"
				class = "cart-item__increment"
				type="button"
				name="button"
				ripple-dark
				>
				<i class="cart-item__icon fa fa-plus" aria-hidden="true"></i>
			</button>
		</span>
		<span class = "cart-item__summ">{{ summ }} </span>
		<button
			@click="$emit('remove')"
			class = "cart-item__remove"
			ripple-dark
			>
			<i class="cart-item__icon fa fa-times" aria-hidden="true"></i>
		</button>
	</li>
</template>

<script>

import TWEEN from 'tween.js';

export default {
	name: "cart-item",
	props: [ 'id' , 'name' , 'price' , 'quantity' ],
	data() {
		return {
			summ: ''
		}
	},
	created() {
		this.quantity = 1;
		this.summ = this.price * this.quantity;
	},
	mounted() {
		Waves.init();
		Waves.attach('[ripple-dark]', ['waves-dark']);
		Waves.attach('[ripple-light]', ['waves-light']);
	},
	watch: {
		quantity() {
			this.summ = this.price * this.quantity;
		},
		summ() {
			this.$emit('summUp', this.summ );
		}
	}
}
</script>

<style lang="scss">
@import '../../scss/partials/_layout';
@import '../../scss/partials/_mixins';
@import '../../scss/partials/_variables';

.cart-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 2rem;
	margin: 10px;
	&__name,
	&__quantity,
	&__price,
	&__summ {
		height: 100%;
		line-height: 2rem;
		padding: 0;
	}
	&__icon {
		font-size: 1.5rem;
		line-height: 2rem;
	}
	&__name {
		width: 40%;
	}
	&__price {
		width: 15%;
	}
	&__quantity {
		display: flex;
		justify-content: space-between;
		width: 25%
	}
	&__summ {
		width: 15%;
	}
	&__increment,
	&__decriment,
	&__remove {
		height: 100%;
		color: $second-elm transparent;
		border: none;
		cursor: pointer;
	}
}

</style>
