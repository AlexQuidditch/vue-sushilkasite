<template lang="html">
	<aside id="sidebar" class="sidebar">

		<nav role="navigation">
			<a @click.prevent = "menuClick()"
				:class = " { 'is-active' : isActive } "
				href="#"
				class="menu-button"
				>Меню</a>

			<ul :class = " { 'is-opened' : isActive } "
				id="sidebar__list"
				class="sidebar__list"
				style="border-radius: 100%"
				>
				<li class="sidebar__item _clear"></li>
				<li v-for = "menuItem in Menu" :key = "menuItem.key"
					@click = "scrollTo(menuItem.anchor)"
					class="sidebar__item"
					ripple-dark
					>{{ menuItem.name }}</li>
			</ul>

		</nav>

	</aside>
</template>

<script>

	import Velocity from 'velocity-animate';

	export default {
		name: "menu",
		data() {
			return {
				isActive: false,
				Menu: [
					{
						anchor: 'rolls',
						name: 'Роллы'
					},
					{
						anchor: 'baked',
						name: 'Запечённые роллы'
					},
					{
						anchor: 'tempurarolls',
						name: 'Темпура роллы'
					},
					{
						anchor: 'torts',
						name: 'Тортильи'
					},
					{
						anchor: 'tempura',
						name: 'Темпура'
					},
					{
						anchor: 'omlet',
						name: 'Японский омлет'
					},
					{
						anchor: 'sushi',
						name: 'Суши'
					},
					{
						anchor: 'salats',
						name: 'Салаты'
					},
					{
						anchor: 'rice',
						name: 'Лапша и рис'
					},
					{
						anchor: 'sets',
						name: 'Наборы'
					},
					{
						anchor: 'sauces',
						name: 'Соусы'
					},
					{
						anchor: 'drinks',
						name: 'Напитки'
					}
				]
			}
		},
		methods: {
			menuClick() {
				let $data = this;
				const sidebar = document.getElementById('sidebar__list');
				const items = document.querySelectorAll('.sidebar__item');
				Velocity(items, {
					'color': '#fff'
				}, {
					duration: 50
				});
				if ( $data.isActive == true ) {
					Velocity(sidebar, {
						width: '50px',
						'border-radius': '100%'
					}, {
						delay: 200,
						duration: 300,
						easing: 'ease-in-out',
						queue: false
					});
					Velocity(sidebar, {
						height: '35px',
					}, {
						delay: 100,
						duration: 400,
						easing: 'ease-in-out',
						queue: false
					});
					$data.isActive = !$data.isActive;
				} else {
					Velocity(sidebar, {
						width: '200px'
					}, {
						duration: 300,
						easing: 'ease-in-out',
						queue: false
					});
					Velocity(sidebar, {
						height: '496px',
						'border-radius': '0%'
					}, {
						duration: 400,
						easing: 'ease-in-out',
						queue: false
					});
					Velocity(items, {
						'color': '#8d3a3a'
					}, {
						duration: 300
					});
					$data.isActive = !$data.isActive;
				}
			},
			scrollTo(el) {
				document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
				this.menuClick();
			}
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';
	@import "../scss/libs/burger";

	.menu-button {
		z-index: 100;
		position: fixed -15px auto auto 50%;
		display: inline-block;
		size: 70px;
		padding: 0;
		color: $main-elm!important;
		line-height: 70px;
		background-color: $second-elm;
		border-radius: 50%;
		@include MDShadow-3;
		transform: translateX(-50%);
		transition: box-shadow 0.5s ease;
		&.is-active {
			@include MDShadow-5
		}
	}

	.sidebar {
		z-index: $header-zindex;
		position: fixed;
		@include center($xy: y);
		text-align: center;
		width: 200px;
		left: 1vw;
		@include MQ(Pp) {
	        z-index: 100;
	        top: auto;
	        bottom: 5vh;
	        left: 50%;
	        transform: translateX(-50%);
		}
		&__list {
			display: inline-block;
			overflow: hidden;
			size: 60px 35px;
			background-color: $main-elm;
			border-radius: 100%;
			@include MDShadow-5
		}
		&__item {
			display: block;
			padding: 10px 0 10px 15px;
			text-align: left;
			font: 400 1.1rem/1.3rem $second-font;
			text-decoration: none;
			white-space: nowrap;
			color: $main-elm;
			box-shadow: none;
			transition: box-shadow 0.2s ease-in-out;
			&:hover {
				@include MDShadow-2;
			}
			&._clear {
				text-align: left;
				display: block;
				height: 48px;
				font: 400 18px/28px $second-font;
				text-decoration: none;
				white-space: nowrap;
				color: $second-elm;
				box-shadow: none;
				cursor: auto;
			}
		}
	}
</style>
