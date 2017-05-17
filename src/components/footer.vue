<template lang="html">
	<footer id="footer" class="footer">

		<div class="container_flex-row">

			<div class="social">
				<span class="social__text">{{ social.name }}</span>
				<ul class="social__list">
					<li v-for="contentItem in social.content" class="social__item">
						<a :href="contentItem.link"
							class="social__link"
							target="_blank"
							ripple-light
							><i :class=" 'fa fa-' + contentItem.icon "aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</div>

			<div class="feedback">
				<a
					:href="feedback.link"
					class="feedback__button"
					ripple-light
					><i class="fa fa-envelope-o" aria-hidden="true"></i> &nbsp;{{ feedback.text }}</a>
			</div>

			<div class="requisites">

				<div class="requisites__column">
					<span class="requisites__name">{{ official.name }}</span>
					<ul class="requisites__list">
						<li v-for="contentItem in official.content"
							class="requisites__item"
							>{{ contentItem }}</li>
					</ul>
				</div>

				<div class="requisites__column">
					<span class="requisites__name">{{ address.name }}</span>
					<ul class="requisites__list">
						<li v-for="contentItem in address.content"
							class="requisites__item"
							>{{ contentItem }}</li>
					</ul>
				</div>

				<div class="requisites__column">
					<span class="requisites__name">{{ phones.name }}</span>
					<ul class="requisites__list">
						<li v-for="contentItem in phones.content"
							class="requisites__item"
							>{{ contentItem }}</li>
					</ul>
				</div>

				<div class="requisites__column">
					<span class="requisites__name">{{ mail.name }}</span>
					<ul class="requisites__list">
						<li v-for="contentItem in mail.content"
							class="requisites__item">
							<a :href=" 'mailto:' + contentItem.text"
								class="requisites__mail"
								:title="contentItem.title"
								>{{ contentItem.text }}</a>
						</li>
					</ul>
				</div>

			</div>

		</div>

		<div class="webeor">
			<a href="//AlexQuidditch.github.io" target="_blank" class="webeor__link">
				<img src="../../static/assets/svg/logo.svg" alt="WebeOR" class="webeor__logo" />
			</a>
		</div>

	</footer>
</template>

<script>
	export default {
		name: "footer",
		data() {
			return {
				social: {
					name: 'Мы в соцсетях:',
					content: [
						{
							icon: 'vk',
							link: '//vk.com/sushiachinsk'
						}
					]
				},
				feedback: {
					link: 'mailto:Vaz211483@mail.ru',
					text: 'Отправить отзыв'
				},
				official: {
					name: 'ООО "Дуэт"',
					content: [
						'ИНН 2443045445',
						'ОГРН 1152443000456'
					]
				},
				address: {
					name: 'Адрес:',
					content: [
						'г. Ачинск, мкр-он 4, д.29, пом.57'
					]
				},
				phones: {
					name: 'Телефоны:',
					content: [
						'+7 (953) 849-39-30',
						'+7 (962) 071-52-22',
						'93-93-0'
					]
				},
				mail: {
					name: 'Почта:',
					content: [
						{
							text: 'Vaz211483@mail.ru',
							title: 'Напишите нам :)'
						}
					]
				}
			}
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	.footer {
		max-width: 1180px;
		margin: auto;
		padding: 5vh 1vh;
		padding-bottom: 0;
		background-color: #efdecd;
		@include MDShadow-1;
		@include MQ(Pp) {
			padding-bottom: 100px;
		}
		.container_flex-row {
			padding: 30px;
			background-color: $main-elm;
			@include MDShadow-1;
		}
	}

	.social {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1 1 49%;
		@include MQ(Pp) {
	        flex: 1 1 100%;
    	    flex-flow: column wrap;
		}
		@include MQ(Pl) {
	        flex: 1 1 100%;
    	    flex-flow: column wrap;
		}
		&__text {
			display: inline-block;
			vertical-align: middle;
			@include MQ(Pp) {
	            display: block;
	            text-align: center;
	            font-size: 1.5rem;
	            line-height: 2;
			}
			@include MQ(Pl) {
	            display: block;
	            text-align: center;
	            font-size: 1.5rem;
	            line-height: 2;
			}
		}
		&__list {
			display: inline-block;
			width: 50%;
			text-align: center;
			vertical-align: middle;
			@include MQ(Pp) {
            	width: 100%;
			}
			@include MQ(Pl) {
            	width: 100%;
			}
		}
		&__item {
			display: inline-block;
			@include MQ(Pp) {
				display: block;
			}
			@include MQ(Pl) {
				display: block;
			}
		}
		&__link {
			padding: 8px 8px 10px;
			font-size: 2rem;
			color: $main-elm #5d80a6;
			transition: box-shadow 0.3s ease-in-out;
			@include MDShadow-1;
			&:hover {
				@include MDShadow-2;
			}
			&:visited {
				color: $main-elm;
			}
			@include MQ(Pp) {
				display: block;
			}
			@include MQ(Pl) {
				display: block;
			}
		}
	}

	.feedback {
		flex: 1 1 49%;
		text-align: center;
		padding: 10px;
		@include MQ(Pp) {
			flex: 1 1 100%;
	        padding: 1.5rem 0;
		}
		@include MQ(Pl) {
			flex: 1 1 100%;
	        padding: 1.5rem 0;
		}
		&__button {
			display: inline-block;
			width: 50%;
			padding: 10px;
			font-size: 1.4rem;
			color: $main-elm $second-elm;
			border: none;
			transition: box-shadow 0.3s ease-in-out;
			@include MDShadow-1;
			&:hover {
				@include MDShadow-2;
			}
			@include MQ(Pp) {
				width: 100%;
	            font-size: 1.3rem;
			}
			@include MQ(Pl) {
				width: 100%;
	            font-size: 1.3rem;
			}
			@include MQ(Tp) {
				width: 100%;
			}
			@include MQ(Tl) {
				width: 100%;
			}
		}
	}

	.requisites {
		display: flex;
		flex: 1 1 100%;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		padding-top: 3vh;
		&__column {
			flex: 1 1 25%;
			text-align: center;
			@include MQ(Pp) {
				flex: 1 1 100%;
	            margin-bottom: 1rem;
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

	.webeor {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		padding: 10px 60px;
		margin: 0 auto;
		@include MQ(Pp) {
			justify-content: center;
			padding-top: 20px;
		}
		&__logo {
			height: 35px;
		}
	}
</style>
