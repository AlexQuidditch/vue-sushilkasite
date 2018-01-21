<template lang="html">

	<section id="information" class="information">

		<div class="container_flex-row">

			<h2 class="information-title">Наши постоянные акции:<br>
				<span class="information-title__sub">Обязательно ознакомьтесь!</span>
			</h2>

			<ul class="information-list">
				<li v-for="informationItem in informationList" class="information-list__card">
					<h6 class="information-list__title">{{ informationItem.title }}</h6>
					<component :is="informationItem.icon" class="information-list__icon"></component>
					<span class="information-list__text">{{ informationItem.text }}</span>
				</li>
			</ul>

			<span class="information__additional"></span>

		</div>
	</section>

</template>

<script>

	import Birthday from './icons/birthday';
	import Gift from './icons/gift';
	import Rushhour from './icons/rushhour';
	import Delivery from './icons/delivery';

	export default {
		name: "information",
		components: { Birthday , Gift , Rushhour , Delivery },
		data() {
			return {
				informationList: [{
					title: 'Скидка имениннику!',
					icon: 'Birthday',
					text: 'В день рождения дарим скидку 15%! Скидка действует в течение 5 дней: за день до, в день рождения и три дня после него.'
				}, {
					title: 'Горячий час!',
					icon: 'Rushhour',
					text: 'С понедельника по пятницу с 12:00 до 14:00 сделай заказ и получи скидку 10%*'
				}, {
					title: 'Подарок!',
					icon: 'Gift',
					text: 'При заказе от 1500 руб. в подарок игристый напиток!'
				}, {
					title: 'Бесплатная доставка!',
					icon: 'Delivery',
					text: 'При \n заказе от 500 рублей доставка по городу бесплатно!'
				}, ],
				additional: '* Акция не действует в выходные и праздничные дни.'
			}
		}
	};

</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	$icon-size: 180px;

	@include MQ(Pp) {
		.information__additional {
			text-align: center;
		}
	}

	.information-title {
		text-align: center;
		width: 100%;
		font-size: 3em;
		@include MQ(Pp) {
			font-size: 1.5rem;
			&__sub {
				display: none;
			}
		}
		@include MQ(Pl) {
			font-size: 2rem;
			margin-bottom: 1rem;
			&__sub {
				display: none;
			}
		}
	}

	.information-list {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-content: center;
		align-self: center;
		margin: 5% auto 1%;
		&__card {
			display: flex;
			flex: 1 1 auto;
			flex-flow: column wrap;
			justify-content: center;
			align-items: center;
			text-align: center;
			width: 31%;
			padding: 20px;
			margin: 10px;
			background-color: $main-elm;
			cursor: default;
			transition: box-shadow 0.3s ease-in-out;
			@include MDShadow-1;
			&:hover {
				@include MDShadow-2
			}
			@include MQ(Pp) {
				width: 90%;
			}
			@include MQ(Pl) {
				flex-basis: 45%;
			}
		}
		&__title {
			font-size: 1.5rem;
			color: $second-elm;
		}
		&__icon {
			width: $icon-size;
			height: $icon-size;
			margin: 10px;
			@include MQ(Pp) {
				$icon-size: 125px;
				size: $icon-size;
				margin: 10px;
			}
			path {
				size: 100%;
				fill: rgba($second-elm, .9);
				.information-list__card:hover & {
					animation: 1.2s ease-in-out 0s normal none infinite running trambling-animation;
					@include MQ(Pp) {
						animation: none
					}
				}
				.information-list__card:last-child:hover & {
					animation: none;
				}
			}
		}
		&__text {
			text-align: center;
		}
	}

	@keyframes trambling-animation {
		0%,
		100%,
		50% {
			transform: translateX(0);
		}
		10%,
		30% {
			transform: translateX(-2.5%);
		}
		20%,
		40% {
			transform: translateX(2.5%);
		}
	}

</style>
