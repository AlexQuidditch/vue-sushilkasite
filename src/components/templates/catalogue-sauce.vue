<template lang="html">
	<li class="product" ripple-dark>
		<h6 class="product__name">{{ name }}</h6>
		<img v-lazy="'/static/assets/img' + picture"
         :alt="type + ' ' + name"
				 class="product__image" />
    <span class="product__description">{{ description }}</span>
    <button @click.prevent="toCart" class="product__order">
			<span class="product__order-price"
        	  data-focus="Добавлено!">
				{{ price }} р.
			</span>
    </button>
	</li>
</template>

<script>

	export default {
		name: "catalogue-Item",
		props: [ 'id' , 'name' , 'picture' , 'type' , 'description' , 'price' ],
		methods: {
			toCart(event) {
				const product = {
					id: this.id,
					name: this.name,
					price: this.price
				};
				this.$emit( 'addToCart' , product );
			}
		}
	};

</script>
