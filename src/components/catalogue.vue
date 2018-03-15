<template lang="html">
	<main id="main" class="main">
		<s-information></s-information>
		<section id="pizza" class="pizza">
			<h2 class="section-title">Пицца:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for="pizzaItem in Store.pizza" :key="pizzaItem.id"
												:catalogueItem="pizzaItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="big" class="big">
			<h2 class="section-title">БИГ РОЛЛЫ XXL:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for="bigItem in Store.big" :key="bigItem.id"
												:catalogueItem="bigItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="rolls" class="rolls">
			<h2 class="section-title">Роллы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for="rollsItem in Store.rolls" :key="rollsItem.id"
												:catalogueItem="rollsItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="sushi" class="sushi">
			<h2 class="section-title">Суши:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for="sushiItem in Store.sushi" :key="sushiItem.id"
												:catalogueItem="sushiItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="baked" class="baked">
			<h2 class="section-title">Горячие роллы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for="bakedItem in Store.baked" :key="bakedItem.id"
												:catalogueItem="bakedItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="tempurarolls" class="tempurarolls">
			<h2 class="section-title">Темпура роллы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for="tempurarollsItem in Store.tempurarolls" :key="tempurarollsItem.id"
												:catalogueItem="tempurarollsItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="tempura" class="tempura">
			<h2 class="section-title">Темпура:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for="tempuraItem in Store.tempura" :key="tempuraItem.id"
												:catalogueItem="tempuraItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="torts" class="torts">
			<h2 class="section-title">Тортильи:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for="tortsItem in Store.torts" :key="tortsItem.id"
												:catalogueItem="tortsItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="omlet" class="omlet">
			<h2 class="section-title">Роллы в японском омлете:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "omletItem in Store.omlet" :key = "omletItem.id"
												:catalogueItem="omletItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="salats" class="salats">
			<h2 class="section-title">Салаты:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "salatsItem in Store.salats" :key = "salatsItem.id"
												:catalogueItem="salatsItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="soups" class="soups">
			<h2 class="section-title">Супы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "soupsItem in Store.soups" :key = "soupsItem.id"
												:catalogueItem="soupsItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="rice" class="rice">
			<h2 class="section-title">Рис и лапша, крылья:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "riceItem in Store.rice" :key = "riceItem.id"
												:catalogueItem="riceItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="wok" class="wok">
			<h2 class="section-title">Лапша WOK:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "wokItem in Store.wok" :key = "wokItem.id"
												:catalogueItem="wokItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="sets" class="sets">
			<h2 class="section-title">Наборы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "setsItem in Store.sets" :key = "setsItem.id"
												:catalogueItem="setsItem"	@addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="sauces" class="sauces">
			<h2 class="section-title">Соусы:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "saucesItem in Store.sauces" :key = "saucesItem.id"
												:catalogueItem="saucesItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="deserts" class="deserts">
			<h2 class="section-title">Дополнительно:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "desertsItem in Store.deserts" :key = "desertsItem.id"
												:catalogueItem="desertsItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
		<section id="drinks" class="drinks">
			<h2 class="section-title">Напитки:</h2>
			<ul class="container_flex-row">
				<catalogue-Item v-for = "drinksItem in Store.drinks" :key = "drinksItem.id"
												:catalogueItem="drinksItem" @addToCart="toCart($event)">
				</catalogue-Item>
			</ul>
		</section>
	</main>
</template>

<script>

	import sInformation from "./information";
	import catalogueItem from "./templates/catalogueItem";
	import drinksItem from "./templates/catalogue-drinks";
	import sauceItem from "./templates/catalogue-sauce";

	export default {
		name: "catalogue",
		components: { sInformation, catalogueItem, drinksItem, sauceItem },
		data() {
			return {
				Store: []
			};
		},
		beforeCreate() {
			this.$http.get("store.json")
				.then(response => response.json())
				.then( data => (this.Store = data) )
				.catch( error =>
					this.$swal(
						"Хм...",
						"Не могу получить каталог. Перезагрузите страницу.",
						"error"
					)
				);
		},
		methods: {
			toCart(product) {
				this.$emit("addToCart", product);
			}
		}
	};

</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

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
