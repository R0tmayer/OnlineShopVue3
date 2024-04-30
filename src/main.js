import { createApp } from 'vue';

import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import CartPage from './pages/CartPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ProductOverviewPage from './pages/ProductOverviewPage.vue';
import ProductsListPage from './pages/ProductsListPage.vue';

import MyButton from './components/MyButton.vue';
import MyFormInput from './components/MyFormInput.vue';
import Navbar from './components/Navbar.vue';

const routes = [
	{
		path: '/',
		name: 'productOverviewPage',
		component: ProductOverviewPage,
	},
	{
		path: '/products',
		name: 'productsListPage',
		component: ProductsListPage,
	},
	{
		path: '/login',
		name: 'loginPage',
		component: LoginPage,
	},
	{
		path: '/cart',
		name: 'cartPage',
		component: CartPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

import './tailwindstyles.css';

const app = createApp(App);

app.component('MyButton', MyButton);
app.component('MyFormInput', MyFormInput);
app.component('Navbar', Navbar);

app.use(router).mount('#app');
