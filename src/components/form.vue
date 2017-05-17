<template lang="html">
	<div id="modal" class="modal">

        <div class="modal__header">
            <h4 class="modal__header-title">Оформить заказ:</h4>
            <span class="modal__close">
                <button @click = "$emit('modalClose')"
                	class="modal__close-button"
                	ripple-dark
                	>
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </span>
        </div>

        <div class="modal__body">

            <form class="form" @submit.prevent="sendOrder()">

                <label for="name" class="form__row">
                    <i class="form__icon fa fa-fw fa-user-circle" aria-hidden="true"></i>
                    <input v-model="Form.name"
						:placeholder="nameHold"
						type="text"
						id="name"
						class="form__input"
						pattern="[a-zA-Zа-яА-Я]{4,}"
						required
					/>
                </label>

                <label for="phone" class="form__row">
                    <i class="form__icon fa fa-fw fa-phone" aria-hidden="true"></i>
					<masked-input v-model="Form.phone"
						:placeholder="phoneHold"
						mask="\+\7(911)111-11-11"
						id="phone"
						type="tel"
						class="form__input"
						required
					/>
                </label>

                <label for="address" class="form__row">
                    <i class="form__icon fa fa-fw fa-home" aria-hidden="true"></i>
					<input v-model="Form.address"
						:placeholder="addressHold"
						type="text"
						id="address"
						class="form__input"
						required
					/>
                </label>

                <label for="message" class="form__row">
                    <i class="form__icon fa fa-fw fa-pencil" aria-hidden="true"></i>
                    <textarea v-model="Form.message"
						:placeholder="messageHold"
						id="message"
						class="form__textarea"
						placeholder="Примечания к заказу"
						>
					</textarea>
                </label>

                <div class="checkboxes form__row _column">
					<h5 class="checkboxes__title">У вас есть скидка?</h5>
					<div class="checkboxes__container form__row _checkbox">

						<div class="checkboxes__row">
							<input class="checkboxes__input magic-radio"
								v-model="Form.discount"
								type="radio"
								name="radio"
								id="1"
								value="1"
								checked
							/>
							<label for="1" class="checkboxes__label">Нет</label>
						</div>

						<div class="checkboxes__row">
							<input class="checkboxes__input magic-radio"
								v-model="Form.discount"
								type="radio"
								name="radio"
								id="2"
								value="0.95"
							/>
							<label for="2" class="checkboxes__label">Есть карта скидок</label>
						</div>

						<div class="checkboxes__row">
							<input class="checkboxes__input magic-radio"
								v-model="Form.discount"
								type="radio"
								name="radio"
								id="3"
								value="0.85"
							/>
							<label for="3" class="checkboxes__label">У меня день рождения!</label>
						</div>
					</div>
                </div>

		        <div class="modal__footer">
		            <button	class="modal__send"
						ripple-dark
						><i class="modal__icon fa fa-fw fa-paper-plane" aria-hidden="true"></i>&nbsp;&nbsp;
						Отправить заказ
					</button>
				 </div>

            </form>

        </div>

    </div>
</template>

<script>

	import MaskedInput from 'vue-masked-input';
	import { token , chat_id } from '../data.js';

	export default {
		name: "form",
		props: [ 'added' ],
		components: { MaskedInput },
      	data() {
			return {
				Form: {
					name: '',
					phone: '',
					address: '',
					message: '',
					discount: '1'
				},
				nameHold: 'Введите имя',
				phoneHold: 'Введите телефон',
				addressHold: 'Адрес или самовывоз',
				messageHold: 'Примечание к заказу',
			}
      	},
		methods: {
			sendOrder() {
				const $data = this;
				let message =
`
Новый заказ на сайте:

Имя: ${ this.Form.name }
Телефон: ${ this.Form.phone }
Адрес: ${ this.Form.address }
Заказ:

${ this.parse(this.added) }

Скидка: ${ this.calcDiscount(this.Form.discount) }%
Всего: ${ this.results() }
`;
				let request = {
					token ,	chat_id,
					text: message
				};
				this.$http.post(`https://api.telegram.org/bot${request.token}/sendMessage?chat_id=${request.chat_id}&text=${request.text}`)
					.then( response => {
						$data.$swal(
							'Ура!',
							'Заказ успешно отправлен.',
							'success'
						);
						$data.Form = {
							name: '',
							phone: '',
							address: '',
							message: '',
							discount: 1
						};
						setTimeout( $data.$emit('clearCart') , 500);
						setTimeout( $data.$emit('modalClose') , 2500);
					})
					.catch( error => {
						console.log(error);
						$data.$swal(
							'Ой!',
							'Что-то пошло не так. Попробуйте ещё раз, или свяжитесь с менеджером',
							'error'
						);
					})
			},
			parse(arr) {
				let processed = [];
				for ( let item of arr ) {
					processed.push(`${item.name}: ${item.price} р. *  ${item.quantity} шт. = ${item.price * item.quantity} р.`);
				};
				let parsed = processed.toString().split( ',' ).join(`\n`);
				return parsed
			},
			calcDiscount(val) {
				return 100 - val * 100
			},
			results() {
				let summs = [];
				let quantities = [];
				for ( let item of this.added ) {
					summs.push(item.quantity * item.price)
					quantities.push(item.quantity)
				};
				summs = summs.reduce((sum, n) => (sum += n), 0);
				quantities = quantities.reduce((sum, n) => (sum += n), 0);
				return `${ quantities } товаров на сумму ${ summs * this.Form.discount } р.`;
			}
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	$modalHeight: 60px;
	$iconSize: 1.25rem;

	.modal {
		z-index: $modal-zindex;
		text-align: center;
		position: fixed 25% auto auto 50%;
		width: $modalHeight * 8;
		background-color: $main-elm;
		transform: translateX(-50%) translateY(-250%);
		transition: 0.6s ease-in-out;
		@include MQ(Pp) {
	        width: 100%;
		}
		@include MQ(Pl) {
	        width: 100%;
		}
		&.is-opened {
			opacity: 1;
			visibility: visible;
			@include MDShadow-3;
			transform: translateX(-50%) translateY(-30%);
		}
		&__header {
			width: 100%;
		}
		&__header-title {
			display: flex;
			flex-flow: column wrap;
			justify-content: center;
			size: inherit $modalHeight;
			@include MQ(Pp) {
	            text-align: left;
	            padding-left: 2vw;
			}
			@include MQ(Pl) {
	            text-align: left;
	            padding-left: 2vw;
			}
		}
		&__body {
			width: 100%;
			background-color: rgba($second-elm, .9);
		}
		&__footer {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			height: $modalHeight;
		}
		&__icon {
			font-size: 2rem;
			color: $second-elm;
		}
		&__send {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-content: center;
			align-items: center;
			size: 100%;
			font-size: 1.2rem;
			color: $grayed $main-elm;
			border: none;
			cursor: pointer;
		}
		&__close {
			position: absolute 0 0 auto auto;
			display: flex;
			flex-flow: column wrap;
			justify-content: center;
			align-content: center;
			size: 20% $modalHeight;
			padding: 0;
			transition: 0.3s ease-in-out;
			&:hover {
				background-color: rgba($second-elm, .1);
			}
		}
		&__close-button {
			size: 100%;
			font-size: 2rem;
			color: $second-elm transparent;
			border: none;
		}
	}

	.form {
		size: 100%;
		&__row {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			padding: 2% 4% 2% 0;
			cursor: pointer;
			&._no-padding {
				@extend .form__row;
				padding: 0;
			}
			&._column {
				flex-flow: column wrap;
				padding: 0 20px;
			}
		}
		&__icon {
			width: 15%;
			font-size: 2rem;
			color: $main-elm;
			text-shadow:
		            0 4px 5px rgba($blacked, 0.14),
		            0 1px 10px rgba($blacked, 0.12),
					0 2px 4px rgba($blacked, 0.3);
		}
		&__input {
			size: 85% 2.5rem;
			padding: 10px;
			border: none;
			@include MDShadow-1;
			&::placeholder {
				text-overflow: ellipsis;
				color: gray;
				text-indent: 0;
				transition: text-indent 0.6s ease-in-out;
			}
			&:focus {
				&::placeholder {
					text-indent: 500px;
					transition: text-indent 0.6s ease-in-out;
				}
			}
		}
		&__textarea {
			size: 85% 2.5rem;
			padding: 10px;
			border: none;
			resize: none;
			transition: 0.3s ease-in-out;
			@include MDShadow-1;
		}
		&__label-container {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			width: 50% 4rem;
		}
		&__text-container {
			display: inline-block;
			padding: 0;
		}
		&__text {
			padding: 0;
			color: $main-elm;
			line-height: 2rem;
		}
	}

	.checkboxes {
		&__title {
			color: $main-elm;
			line-height: 2;
		}
		&__container {
			display: flex;
			padding: 10px 0;
			padding-top: 0;
		}
		&__row {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			size: 47.5% 3rem;
			margin: 5px 0;
			@include MDShadow-1;
			&:last-child {
				width: 97%;
			}
			&:last-child .checkboxes__input + label {
				width: 100%;
			}
		}
		&__input {
			display: none;
			& + label {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				color: $main-elm $second-elm;
				cursor: pointer;
				transition: background-color .2s ease-in-out,
					color .2s ease-in-out
			}
			&:checked + label {
				color: $second-elm $main-elm
			}
		}
		&__label {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			height: 100%;
			&:before , &:after {
				display: none !important;
			}
		}
	}

</style>
