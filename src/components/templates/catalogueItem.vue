<template lang="html">
	<li class="product waves-effect waves-dark">
		<h6 class="product__name">{{ catalogueItem.name }}</h6>
        <img v-lazy = " '/static/assets/img' + catalogueItem.picture "
            :alt = " catalogueItem.type + ' ' + catalogueItem.name "
			class="product__image" />
        <span class="product__description">{{ catalogueItem.description }}</span>
		<span v-if="catalogueItem.type === 'напитки' " class="product__weight">{{ catalogueItem.weight }} л.</span>
        <span v-else-if="catalogueItem.weight" class="product__weight">{{ catalogueItem.weight }} г.</span>
        <button @click=" toCart() " class="product__order">
			<span class="product__order-price"
        	    data-focus="Добавлено!"
				>{{ catalogueItem.price }} р.
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
				this.$emit( 'addToCart' , product );
			}
		}
	};
</script>
