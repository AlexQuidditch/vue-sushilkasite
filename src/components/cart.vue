<template lang="html">

	<div id="cart"
		class="cart"
		:class="{ 'is-opened' : CartState.isOpened }">

        <div class="cart__header">
            <h4 class="cart__header-title">Корзина</h4>
            <span class="cart__close">
                <button
					@click = "CartState.isOpened = false"
					class="cart__close-button"
					type="button"
					ripple-dark
                >
                	<i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </span>

        </div>

        <div class="cart__body">

			<div class="cart-columns">
				<span class = "cart-columns__name">Наименование</span>
				<span class = "cart-columns__price">Цена:</span>
				<span class = "cart-columns__quantity">Количество</span>
				<span class = "cart-columns__summ">Сумма:</span>
			</div>

			<ul class = "cart-list">
				<cart-Item v-for = "( cartItem , index ) in added" :key = "cartItem.key"
					:id = "cartItem.id"
					:name = "cartItem.name"
					:price = "cartItem.price"
					:quantity = "cartItem.quantity"
					@remove = "added.splice(index, 1), remove()"
					@incriment = "cartItem.quantity += 1"
					@decriment = "decriment(cartItem)"
					@summUp = "summUp($event)"
					>
				</cart-item>
			</ul>

            <div class="cart__order">
                <button
					@click = "$emit('modalOpen')"
					class="cart__order-button"
					ripple-light
					>
					Оформить заказ
				</button>
            </div>
        </div>

        <div class="cart__footer">

			<transition name = "fade" mode = "out-in" >
				<span v-if = "CartState.isFilled" key = "filled" class="cart__price">{{ quantities }} товаров на сумму {{ animatedSumms }} р.</span>
				<span v-else key = "empty" class="cart__price">Корзина пуста.</span>
			</transition>

			<span class="cart__open">
				<transition name = "fade" mode = "out-in" >
					<button
						v-show = "CartState.isFilled"
						@click = "CartState.isOpened = true"
						:class = "{ 'is-opened' : CartState.isOpened, 'is-filled': !CartState.isFilled }"
						:title = "titles.openTitle"
						class= "cart__open-button"
						type="button"
						name="button"
						>
							<i class="cart__open-icon fa fa-check"
								:class = "{ 'is-opened' : CartState.isOpened }"
								aria-hidden="true"></i>
					</button>
				</transition>
			</span>

            <span class="cart__clear">
				<button
					@click = "clearCart()"
					class="cart__clear-button"
					type="button"
					ripple-dark
					:title = "titles.closeTitle"
					>
						<i class="fa fa-trash-o" aria-hidden="true"></i>
					</button>
            </span>

        </div>

    </div>

<!-- <div>
		<input class="magic-checkbox" type="radio" name="radio" id="22" checked>
		<label for="22">Checked</label>
	</div> -->
</template>

<script>
import TWEEN from 'tween.js';

import cartItem from './templates/cartItem';

export default {
	name: "cart",
	props: [ 'added' ],
	components: {
		cartItem
	},
	data() {
		return {
			summUpper: '',
			quantities: '',
			suumms: '',
			animatedSumms: '',
			CartState: {
				isFilled: false,
				isOpened: false
			},
			titles: {
				openTitle: 'Открыть корзину',
				closeTitle: 'Очистить корзину'
			}
		}
	},
	watch: {
		added() {
			let $data = this;
			if ( $data.added.length == 0 ) {
				$data.CartState.isFilled = false;
				$data.CartState.isOpened = false
			}
		},
		summUpper() {
			let $data = this;
			const summs = [];
			const quantities = [];
			for (let item of $data.added) {
				summs.push(item.quantity * item.price)
				quantities.push(item.quantity)
			};
			$data.suumms = summs.reduce((sum, n) => (sum += n), 0)
			$data.quantities = quantities.reduce((sum, n) => (sum += n), 0)
			if (this.quantities > 0) {
				$data.CartState.isFilled = true
			}
		},
		suumms(newValue, oldValue) {
			let $data = this;
			let animationFrame;

			function animate(time) {
				TWEEN.update(time);
				animationFrame = requestAnimationFrame(animate)
			};
			new TWEEN.Tween({
					tweeningNumber: oldValue
				})
				.easing(TWEEN.Easing.Linear.None)
				.to({
					tweeningNumber: newValue
				}, 500)
				.onUpdate(function() {
					$data.animatedSumms = this.tweeningNumber.toFixed(0)
				})
				.onComplete(function() {
					cancelAnimationFrame(animationFrame)
				})
				.start()
			animationFrame = requestAnimationFrame(animate);
		}
	},
	methods: {
		decriment(item) {
			if (item.quantity > 1) {
				item.quantity -= 1
			};
		},
		summUp(summ) {
			this.summUpper = summ
		},
		clearCart() {
			this.$emit('clearCart')
		},
		remove() {
			let $data = this;
			const summs = [];
			const quantities = [];
			for (let item of $data.added) {
				summs.push(item.quantity * item.price)
				quantities.push(item.quantity)
			};
			$data.suumms = summs.reduce((sum, n) => (sum += n), 0)
			$data.quantities = quantities.reduce((sum, n) => (sum += n), 0)
		}
	}
}

</script>

<style lang="scss">

@import '../scss/partials/_layout';
@import '../scss/partials/_mixins';
@import '../scss/partials/_variables';

$cartHeight: 60px;
$iconSize: 1.25rem;

.cart {
    z-index: $cart-zindex;
    text-align: center;
    position: fixed 0 auto auto 50%;
    width: $cartHeight * 8;
    background-color: $main-elm;
	transform: translate(-50%, calc(-100% + 60px));
	@include MDShadow-3;
	will-change: top, transform;
    transition:
		top 0.6s ease-in-out,
		transform 0.6s ease-in-out;
	@include MQ(Pp) {
		width: 100%;
    }
	@include MQ(Pl) {
		width: 100%;
	}
    &.is-opened {
    	top: 30%;
        transform: translate( -50% , -30% );
		@include MQ(Pp) {
			top: 50%;
            transform: translate( -50% , -50% )
    	}
		@include MQ(Pl) {
			top: 50%;
            transform: translate( -50% , -50% )
		}
    }
    &__header {
        width: 100%;
    }
    &__header-title {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        size: inherit $cartHeight;
    }
    &__body {
        display: flex;
        flex-flow: column wrap;
        width: 100%;
    }
    &__footer {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
    }
    &__price {
        overflow: hidden;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        size: 60% $cartHeight;
        padding: 0 35px;
		@include MQ(Pp) {
			padding: 0 15px;
		}
    }
    &__order {
        height: $cartHeight;
        padding: 0;
    }
    &__order-button {
        size: 100%;
        font-size: 1.2rem;
        color: $main-elm;
        background-color: $second-elm;
        border: none;
        transition: box-shadow 0.3s ease-in-out;
        &:hover {
            @include MDShadow-1;
        }
        &:active {
            @include MDShadow-2;
        }
    }
    &__clear,
    &__close,
    &__open {
        display: flex;
        justify-content: center;
        flex-flow: column wrap;
        size: 20% $cartHeight;
        padding: 0;
    }
    &__close {
        position: absolute;
        top: 0;
        right: 0;
    }
    &__clear-button,
    &__close-button,
    &__open-button {
		height: 100%;
		color: $second-elm transparent;
		text-align: center;
        font-size: 2rem;
		border: none;
		cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        &:hover {
            background-color: rgba($second-elm, .1);
        }
    }
    &__open-button.is-opened {
        background-color: $main-elm;
        cursor: auto;
		outline: none;
        &:hover {
            background-color: $main-elm;
        }
    }
    &__open-icon {
        transition: 0.3s ease-in-out;
        &.is-opened {
            color: $main-elm;
        }
    }
}

.cart-columns {
	padding: 0 10px;
	text-align: left;
	font-size: 0;
	@include MQ(Pp) {
		display: none;
	}
	&__name,
	&__quantity,
	&__price,
	&__summ {
		display: inline-block;
		text-align: center;
		font-size: 1rem;
		line-height: 2rem;
		padding: 0;
	}
	&__name {
		width: 39%;
	}
	&__price {
		width: 15%;
	}
	&__quantity {
		width: 24%;
	}
	&__summ {
		width: 15%;
	}
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s
}
.fade-enter,
.fade-leave-to {
    opacity: 0
}

</style>
