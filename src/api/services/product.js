export default (api) => ({
	getProducts: () => api.get('product/all'),
});
