export default (api) => ({
	getCart: () => api.get('cart'),

	addItem: (productId) => api.post('cart/additem/' + productId),
	removeItem: (itemId) => api.post('cart/removeitem/' + itemId),

	increment: (itemId) => api.post('cart/increment/' + itemId),
	decrement: (itemId) => api.post('cart/decrement/' + itemId),
});
