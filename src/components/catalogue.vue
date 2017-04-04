<template lang="html">
	<section id="catalogue" class="catalogue">
		<ul>
			<catalogue-Item
				v-for = "( rollItem , index ) in _.store.rolls" :key = "rollItem.key"
				:id = "rollItem.id"
				:name = "rollItem.name"
				:src = "rollItem.src"
				:alt = "rollItem.alt"
				:description = "rollItem.description"
				:weight = "rollItem.weight"
				:price = "rollItem.price"
				@addToCart = "toCart($event)"
			></catalogue-Item>
		</ul>
	</section>
</template>

<script>

	import catalogueItem from './templates/catalogueItem';
	import Store from './data/data';

	export default {
  		name: "catalogue",
		components: {
			catalogueItem
		},
		data() {
			return {
				_: []
			}
		},
		created() {
			this._ = Store;
		},
		methods: {
			toCart(product) {
				this.$emit( 'addToCart' , product )
			}
		}
	}
</script>

<style lang="scss">
@import '../scss/partials/_layout';
@import '../scss/partials/_mixins';
@import '../scss/partials/_variables';

.catalogue {
	padding-top: 10px;
	margin: auto;
}

.section-title {
	text-align: center;
	width: 100%;
	font-size: 3em;
	line-height: 10rem;
}

</style>
