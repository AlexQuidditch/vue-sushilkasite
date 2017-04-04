<template lang="html">
	<footer id="footer" class="footer">

		<div class="container_flex-row">

			<div class="social">
				<span class="social__text">{{ social.name }}</span>
				<ul class="social__list">
					<li v-for="contentItem in social.content" class="social__item">
						<a
							:href="contentItem.link"
							class="social__link"
							ripple-light
							>
							<i :class=" 'fa fa-' + contentItem.icon "
								aria-hidden="true"
								>
							</i>
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
						<li v-for="contentItem in official.content" class="requisites__item">{{ contentItem }}</li>
					</ul>
				</div>

				<div class="requisites__column">
					<span class="requisites__name">{{ address.name }}</span>
					<ul class="requisites__list">
						<li v-for="contentItem in address.content" class="requisites__item">{{ contentItem }}</li>
					</ul>
				</div>

				<div class="requisites__column">
					<span class="requisites__name">{{ phones.name }}</span>
					<ul class="requisites__list">
						<li v-for="contentItem in phones.content" class="requisites__item">{{ contentItem }}</li>
					</ul>
				</div>

				<div class="requisites__column">
					<span class="requisites__name">{{ mail.name }}</span>
					<ul class="requisites__list">
						<li v-for="contentItem in mail.content" class="requisites__item">
							<a
								class="requisites__mail"
								:href=" 'mailto:' + contentItem.text"
								:title="contentItem.title"
								>{{ contentItem.text }}</a>
						</li>
					</ul>
				</div>

			</div>

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
							link: '//суши-ачинск.рф'
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
		background-color: #efdecd;
		@include MDShadow-1;
	}

	.footer .container_flex-row {
		padding: 30px;
		background-color: $main-elm;
		@include MDShadow-1;
	}

	.social {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1 1 49%;
		&__text {
			display: inline-block;
			vertical-align: middle;
		}
		&__list {
			display: inline-block;
			width: 50%;
			text-align: center;
			vertical-align: middle;
		}
		&__item {
			display: inline-block;
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
		}
	}

	.feedback {
		flex: 1 1 49%;
		text-align: center;
		padding: 10px;
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
		}
		&__name {
			font-size: 1.2rem;
			line-height: 1.5em;
		}
	}
</style>
