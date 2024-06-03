import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
	state: () => {
		return {
			products: [],
			// id
			// name
			// description
			// genre
			// category
			// price
			// imagePath
		};
	},
	actions: {
		$reset() {
			this.products = [];
		},
	},
	persist: true,
});
