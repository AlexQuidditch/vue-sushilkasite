<template lang="html">
	<main id="main" class="main">
		<information></information>
		<section id="rolls" class="rolls">
			<h2 class="section-title">Роллы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( rollItem , index ) in _.store.rolls"
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
		<section id="baked" class="baked">
			<h2 class="section-title">Горячие роллы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( bakedItem , index ) in _.store.baked"
					:id = "bakedItem.id"
					:name = "bakedItem.name"
					:src = "bakedItem.src"
					:alt = "bakedItem.alt"
					:description = "bakedItem.description"
					:weight = "bakedItem.weight"
					:price = "bakedItem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="tempurarolls" class="tempurarolls">
			<h2 class="section-title">Темпура роллы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( tempurarollsItem , index ) in _.store.tempurarolls"
					:id = "tempurarollsItem.id"
					:name = "tempurarollsItem.name"
					:src = "tempurarollsItem.src"
					:alt = "tempurarollsItem.alt"
					:description = "tempurarollsItem.description"
					:weight = "tempurarollsItem.weight"
					:price = "tempurarollsItem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="tempura" class="tempura">
			<h2 class="section-title">Темпура:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( tempuraItem , index ) in _.store.tempura"
					:id = "tempuraItem.id"
					:name = "tempuraItem.name"
					:src = "tempuraItem.src"
					:alt = "tempuraItem.alt"
					:description = "tempuraItem.description"
					:weight = "tempuraItem.weight"
					:price = "tempuraItem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="torts" class="torts">
			<h2 class="section-title">Тортильи:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( tortsItem , index ) in _.store.torts"
					:id = "tortsItem.id"
					:name = "tortsItem.name"
					:src = "tortsItem.src"
					:alt = "tortsItem.alt"
					:description = "tortsItem.description"
					:weight = "tortsItem.weight"
					:price = "tortsItem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="rolls" class="rolls">
			<h2 class="section-title"></h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( rollItem , index ) in _.store.rolls"
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
		<section id="rolls" class="rolls">
			<h2 class="section-title"></h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( rollItem , index ) in _.store.rolls"
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
		<section id="rolls" class="rolls">
			<h2 class="section-title"></h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( rollItem , index ) in _.store.rolls"
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
		<section id="rolls" class="rolls">
			<h2 class="section-title"></h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "( rollItem , index ) in _.store.rolls"
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
	</main>
</template>

<script>
	import Information from './information';
	import catalogueItem from './templates/catalogueItem';
	import Store from './data/data';

	export default {
  		name: "catalogue",
		components: {
			Information,
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
