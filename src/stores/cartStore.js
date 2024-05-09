import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
	state: () => {
		return {
			totalCount: 0,
			items: [],
			// id
			// count
			// product
			// totalPrice
		};
	},
	actions: {
		$reset() {
			this.count = 0;
			this.items = [];
		},
		addToCart(product) {
			const item = this.items.find((item) => item.product.id === product.id);

			if (item) {
				item.count++;
				item.totalPrice = item.count * item.product.price;
			} else {
				const newItem = {
					id: 1,
					count: 1,
					product: product,
					totalPrice: product.price,
				};

				this.items.push(newItem);
				this.totalCount++;
			}
		},
	},
});
