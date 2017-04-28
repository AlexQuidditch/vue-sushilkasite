<template lang="html">
	<div id="modal" class="modal">

        <div class="modal__header">
            <h4 class="modal__header-title">Оформить заказ:</h4>
            <span class="modal__close">
                <button
					@click = "$emit('modalClose')"
                	class="modal__close-button"
                	ripple-dark
                	>
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </span>
        </div>

        <div class="modal__body">

            <form class="form" @submit.prevent="sendOrder()">

                <div class="form__row">
                    <i class="form__icon fa fa-fw fa-user-circle" aria-hidden="true"></i>
                    <input
						v-model="Form.name"
						:placeholder="nameHold"
						type="text"
						class="form__input"
						pattern="[a-zA-Zа-яА-Я]{4,}"
						required
					/>
                </div>

                <div class="form__row">
                    <i class="form__icon fa fa-fw fa-phone" aria-hidden="true"></i>
					<masked-input
						v-model="Form.phone"
						:placeholder="phoneHold"
						class="form__input"
						mask="\+\7 (111) 111-11-11"
						required
					/>
                </div>

                <div class="form__row">
                    <i class="form__icon fa fa-fw fa-home" aria-hidden="true"></i>
					<input
						v-model="Form.address"
						:placeholder="addressHold"
						type="text"
						class="form__input"
						required
					/>
                </div>

                <div class="form__row">
                    <i class="form__icon fa fa-fw fa-pencil" aria-hidden="true"></i>
                    <textarea
						v-model="Form.message"
						:placeholder="messageHold"
						class="form__textarea"
						placeholder="Примечания к заказу"
						>
					</textarea>
                </div>

                <div class="form__row_no-padding">

                </div>

		        <div class="modal__footer">
		            <button
						class="modal__send"
						ripple-dark
						>
							<i class="modal__icon fa fa-fw fa-paper-plane" aria-hidden="true"></i>
						&nbsp;&nbsp;Отправить заказ
					</button>
		        </div>

            </form>

        </div>

    </div>
</template>

<script>

	import MaskedInput from 'vue-masked-input';
	import telegram from '../data.js';

	export default {
		props: [ 'added' ],
  		name: "form",
      	data() {
			return {
				Form: {
					name: '',
					phone: '',
					address: '',
					message: ''
				},
				nameHold: 'Введите имя',
				phoneHold: 'Введите телефон',
				addressHold: 'Адрес или самовывоз',
				messageHold: 'Примечание к заказу'
			}
      	},
		components: {
			MaskedInput
		},
		methods: {
			sendOrder() {
				let $data = this;
				let message = `Новый заказ на сайте:\n\nИмя: ${this.Form.name}\nТелефон: ${this.Form.phone}\nАдрес: ${this.Form.address}\n\nЗаказ:\n${this.added}`;
				let request = {
					token: telegram.token,
					chat_id: '173161597',
					text: message
				};
				this.$http.post(`https://api.telegram.org/bot${request.token}/sendMessage?chat_id=${request.chat_id}&text=${request.text}`)
					.then(response => {
						console.log(response);
						$data.$swal(
							'Ура!',
							'Заказ успешно отправлен.',
							'success'
						);
						$data.Form.name = ''
						$data.Form.phone = ''
						$data.Form.address = ''
						$data.Form.message = ''
						setTimeout( $data.$emit('clearCart') , 500);
						setTimeout( $data.$emit('modalClose') , 1500);
					}, error => {
						console.log(error);
						$data.$swal(
							'Ой!',
							'Что-то пошло не так. Попробуйте ещё раз, или свяжитесь с менеджером',
							'error'
						);
					});
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
		transform: translateX(-50%) translateY(-50%);
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
		&_no-padding {
			@extend .form__row;
			padding: 0;
		}
	}
	&__icon {
		width: 15%;
		font-size: 2rem;
		color: $main-elm;
	}
	&__input {
		size: 85% 2.5rem;
		padding: 10px;
		border: none;
		transition: 0.3s ease-in-out;
		::placeholder {
			text-overflow: ellipsis;
			color: gray;
			text-indent: 0;
			transition: text-indent 0.3s ease-in-out;
		}
		&:focus {
			::placeholder {
				text-indent: 500px;
				transition: text-indent 0.3s ease-in-out;
			}
		}
	}
	&__textarea {
		size: 85% 5rem;
		padding: 10px;
		border: none;
		resize: none;
		transition: 0.3s ease-in-out;
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

</style>
