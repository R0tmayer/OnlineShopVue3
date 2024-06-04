export default (api) => ({
	getProducts: () => api.get('product/all'),
	getProductById: (productId) => api.get('product/' + productId),
});
