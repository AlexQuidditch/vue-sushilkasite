<template lang="html">
	<header id="header" class="header">
		<div class="header__overlay">
			<div class="header__title-container">
				<h1 class="header__title">{{ Titles.main }}</h1>
				<h2 class="header__subtitle">{{ Titles.sub }}</h2>
				<h6 class="header__sub-text">{{ Titles.little }}</h6>
			</div>
			<div class="header__column">
				<ul class="header__list">
					<li v-for="contentItem in phones.content"
							class="header__item">
							{{ contentItem }}
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>

	export default {
		name: "header",
		data() {
			return {
				Titles: {
					main: "Вкуснейшие роллы и суши\nс доставкой на дом!",
					sub: "Закажите через сайт - мы приготовим и доставим за 60 минут!",
					little: "В праздники можем немного припоздниться :)"
				},
				phones: {
					content: ["+7 (953) 849-39-30", "+7 (962) 071-52-22", "93-93-0"]
				}
			}
		}
	};

</script>

<style lang="scss">
	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.header {
		position: fixed 0 auto auto 0;
		display: flex;
		flex-direction: column;
		z-index: -1;
		size: 100% 100vh;
		background-image: url("../../static/assets/img/slider/slide1.jpg");
		background-position: center;
		background-size: cover;
		&__title-container {
			display: flex;
			flex-flow: column wrap;
			justify-content: center;
			align-self: center;
			size: 90% 100%;
			max-width: 980px;
			margin: 0 auto;
		}
		&__overlay {
			z-index: 2;
			display: flex;
			align-items: center;
			size: 100%;
			background-color: rgba(black, 0.5);
		}
		&__title {
			margin-bottom: 1rem;
			text-align: center;
			color: $main-elm;
			white-space: pre;
			@include MQ(Pp) {
				font-size: 1.5rem;
			}
			@include MQ(Pl) {
				font-size: 1.5rem;
			}
		}
		&__subtitle {
			text-align: center;
			color: $main-elm;
			@include MQ(Pp) {
				font-size: 1.5rem;
			}
			@include MQ(Pl) {
				font-size: 1.5rem;
			}
		}
		&__sub-text {
			margin-top: 2rem;
			text-align: center;
			color: $main-elm;
		}

		&__column {
			position: absolute;
			top: 40px;
			right: 80px;
			flex: 1 1 25%;
			text-align: right;
			font-size: 1.2rem;
			color: white;
			@include MQ(Pp) {
				top: 15vh;
				left: 0; right: 0;
				flex: 1 1 100%;
				margin-bottom: 1rem;
				text-align: center;
			}
			@include MQ(Pl) {
				flex: 1 1 100%;
				margin-bottom: 1rem;
			}
		}
		&__name {
			font-size: 1.2rem;
			line-height: 1.5em;
		}
	}
</style>
