<template lang="html">
	<li class="product" ripple-dark>
		<h6 class="product__name">{{ name }}</h6>
        <img v-lazy = " '../../static/assets/img' + picture "
            :alt = " type + ' ' + name "
			class="product__image" >
        <span class="product__description">{{ description }}</span>
        <span class="product__weight">{{ weight }} г.</span>
        <button @click=" toCart() " class="product__order">
			<span
    	        class="product__order-price"
        	    data-focus="Добавлено!">{{ price }} р.</span>
	    </button>
	</li>
</template>

<script>
	export default {
  		name: "catalogue-Item",
		props: [ 'id' , 'name' , 'picture' , 'type' , 'description' , 'weight' , 'price' ],
		methods: {
			toCart() {
				const $data = this;
				let product = {
					id: $data.id,
					name: $data.name,
					price: $data.price
				};
				this.$emit( 'addToCart' , product );
			}
		}
	}
</script>
