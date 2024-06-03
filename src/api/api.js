import cart from '@/api/services/cart.js';
import { apiRoot } from './instances.js';
import product from './services/product.js';

export const api = {
	cart: cart(apiRoot),
	product: product(apiRoot),
};
