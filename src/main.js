import { createApp } from 'vue';

import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import AdminProductList from './components/AdminProductList.vue';
import AdminRoleList from './components/AdminRoleList.vue';
import AdminUserList from './components/AdminUserList.vue';
import MyButton from './components/MyButton.vue';
import MyFormInput from './components/MyFormInput.vue';
import MyTable from './components/MyTable.vue';
import Navbar from './components/Navbar.vue';
import AdminDashboardPage from './pages/AdminDashboardPage.vue';
import CartPage from './pages/CartPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ProductListPage from './pages/ProductListPage.vue';
import ProductOverviewPage from './pages/ProductOverviewPage.vue';

import './tailwindstyles.css';

const routes = [
	// {
	// 	path: '/',
	// 	redirect: { name: 'productListPage' },
	// },
	{
		path: '/products',
		name: 'productListPage',
		component: ProductListPage,
	},
	{
		path: '/',
		name: 'productOverviewPage',
		component: ProductOverviewPage,
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
	{
		path: '/checkout',
		name: 'checkoutPage',
		component: CheckoutPage,
	},
	{
		path: '/admin',
		name: 'adminDashboardPage',
		redirect: { name: 'adminProductListPage' },
		component: AdminDashboardPage,
		children: [
			{
				path: 'products',
				name: 'adminProductListPage',
				component: AdminProductList,
			},
			{
				path: 'users',
				name: 'adminUserListPage',
				component: AdminUserList,
			},
			{
				path: 'roles',
				name: 'adminRoleListPage',
				component: AdminRoleList,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);

app.component('MyButton', MyButton);
app.component('MyFormInput', MyFormInput);
app.component('MyTable', MyTable);
app.component('Navbar', Navbar);

app.use(router).mount('#app');
