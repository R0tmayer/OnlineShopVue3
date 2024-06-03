import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
	state: () => {
		return {
			items: [],
			// id
			// count
			// product
			// totalPrice
		};
	},
	getters: {
		totalCartPrice(state) {
			var total = state.items.reduce(
				(total, item) => total + parseFloat(item.count * item.product.price),
				0
			);
			return total.toFixed(2);
		},
		totalCartCount(state) {
			return state.items.length;
		},
	},
	actions: {
		addToCart(product, itemId) {
			const existingItem = this.items?.find((item) => item.product.id === product.id);

			if (existingItem === undefined) {
				const newItem = {
					id: itemId,
					count: 1,
					product: product,
				};

				this.items.push(newItem);
				return;
			}

			this.incrementItem(existingItem.id);
		},
		removeItem(itemId) {
			this.items = this.items.filter((item) => item.id !== itemId);
		},
		incrementItem(itemId) {
			this.items = this.items.map((item) => {
				if (item.id === itemId) {
					return {
						...item,
						count: item.count + 1,
					};
				}
				return item;
			});
		},
		decrementItem(itemId) {
			const item = this.items.find((item) => item.id === itemId);
			if (!item) return;
			item.count--;
			if (item.count === 0) {
				this.removeItem(itemId);
			}
		},
	},
	persist: true,
});
