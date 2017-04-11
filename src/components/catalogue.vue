<template lang="html">
	<main id="main" class="main">
		<information></information>
		<section id="rolls" class="rolls">
			<h2 class="section-title">Роллы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "rollItem in Store.rolls" :key = "rollItem.key"
					:id = "rollItem.id"
					:name = "rollItem.name"
					:picture = "rollItem.picture"
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
					v-for = "bakedItem in Store.baked" :key = "bakedItem.key"
					:id = "bakedItem.id"
					:name = "bakedItem.name"
					:picture = "bakedItem.picture"
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
					v-for = "tempurarollsItem in Store.tempurarolls" :key = "tempurarollsItem.key"
					:id = "tempurarollsItem.id"
					:name = "tempurarollsItem.name"
					:picture = "tempurarollsItem.picture"
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
					v-for = "tempuraItem in Store.tempura" :key = "tempuraItem.key"
					:id = "tempuraItem.id"
					:name = "tempuraItem.name"
					:picture = "tempuraItem.picture"
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
					v-for = "tortsItem in Store.torts" :key = "tortsItem.key"
					:id = "tortsItem.id"
					:name = "tortsItem.name"
					:picture = "tortsItem.picture"
					:alt = "tortsItem.alt"
					:description = "tortsItem.description"
					:weight = "tortsItem.weight"
					:price = "tortsItem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="omlet" class="omlet">
			<h2 class="section-title">Роллы в японском омлете:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "omlettem in Store.omlet" :key = "omlettem.key"
					:id = "omlettem.id"
					:name = "omlettem.name"
					:picture = "omlettem.picture"
					:alt = "omlettem.alt"
					:description = "omlettem.description"
					:weight = "omlettem.weight"
					:price = "omlettem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="sushi" class="sushi">
			<h2 class="section-title">Суши:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "sushitem in Store.sushi" :key = "sushitem.key"
					:id = "sushitem.id"
					:name = "sushitem.name"
					:picture = "sushitem.picture"
					:alt = "sushitem.alt"
					:description = "sushitem.description"
					:weight = "sushitem.weight"
					:price = "sushitem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="salats" class="salats">
			<h2 class="section-title">Салаты:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "salatsItem in Store.salats" :key = "salatsItem.key"
					:id = "salatsItem.id"
					:name = "salatsItem.name"
					:picture = "salatsItem.picture"
					:alt = "salatsItem.alt"
					:description = "salatsItem.description"
					:weight = "salatsItem.weight"
					:price = "salatsItem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="rice" class="rice">
			<h2 class="section-title">Рис и лапша:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "ricetem in Store.rice" :key = "ricetem.key"
					:id = "ricetem.id"
					:name = "ricetem.name"
					:picture = "ricetem.picture"
					:alt = "ricetem.alt"
					:description = "ricetem.description"
					:weight = "ricetem.weight"
					:price = "ricetem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="sets" class="sets">
			<h2 class="section-title">Наборы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "setstem in Store.sets" :key = "setstem.key"
					:id = "setstem.id"
					:name = "setstem.name"
					:picture = "setstem.picture"
					:alt = "setstem.alt"
					:description = "setstem.description"
					:weight = "setstem.weight"
					:price = "setstem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="sauces" class="sauces">
			<h2 class="section-title">Соусы:</h2>
			<ul class="container_flex-row">
				<sauce-Item
					v-for = "saucestem in Store.sauces" :key = "saucestem.key"
					:id = "saucestem.id"
					:name = "saucestem.name"
					:picture = "saucestem.picture"
					:alt = "saucestem.alt"
					:description = "saucestem.description"
					:price = "saucestem.price"
					@addToCart = "toCart($event)"
				></sauce-Item>
			</ul>
		</section>
		<section id="deserts" class="deserts">
			<h2 class="section-title">Дополнительно:</h2>
			<ul class="container_flex-row">
				<catalogue-Item
					v-for = "desertstem in Store.deserts" :key = "desertstem.key"
					:id = "desertstem.id"
					:name = "desertstem.name"
					:picture = "desertstem.picture"
					:alt = "desertstem.alt"
					:description = "desertstem.description"
					:weight = "desertstem.weight"
					:price = "desertstem.price"
					@addToCart = "toCart($event)"
				></catalogue-Item>
			</ul>
		</section>
		<section id="drinks" class="drinks">
			<h2 class="section-title">Напитки:</h2>
			<ul class="container_flex-row">
				<drinks-Item
					v-for = "drinkstem in Store.drinks" :key = "drinkstem.key"
					:id = "drinkstem.id"
					:name = "drinkstem.name"
					:picture = "drinkstem.picture"
					:alt = "drinkstem.alt"
					:description = "drinkstem.description"
					:weight = "drinkstem.weight"
					:price = "drinkstem.price"
					@addToCart = "toCart($event)"
				></drinks-Item>
			</ul>
		</section>
	</main>
</template>

<script>

	import Information from './information';
	import catalogueItem from './templates/catalogueItem';
	import drinksItem from './templates/catalogue-drinks';
	import sauceItem from './templates/catalogue-sauce';

	export default {
  		name: "catalogue",
		components: {
			Information,
			catalogueItem,
			drinksItem,
			sauceItem
		},
		data() {
			return {
				Store: []
			}
		},
		beforeCreate() {
			let $data = this;
			this.$http.get('store.json')
				.then(response => {
					return response.json();
				}, error => {
					$data.$swal(
						'Хм...',
						'Не могу получить каталог. Перезагрузите страницу.',
						'error'
					)
				})
				.then(data => {
					$data.Store = data;
				});
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
	@include MQ(Pp) {
        font-size: 2.5rem;
	}
	@include MQ(Pl) {
        font-size: 2.5rem;
	}
}

</style>
