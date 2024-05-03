import { createApp } from 'vue';

import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import AdminOrderList from './components/AdminOrderList.vue';
import AdminProductList from './components/AdminProductList.vue';
import AdminRoleList from './components/AdminRoleList.vue';
import AdminUserList from './components/AdminUserList.vue';
import BaseAddModal from './components/BaseAddModal.vue';
import BaseAdminList from './components/BaseAdminList.vue';
import BaseButton from './components/BaseButton.vue';
import BaseDeleteModal from './components/BaseDeleteModal.vue';
import BaseEditModal from './components/BaseEditModal.vue';
import BaseModal from './components/BaseModal.vue';
import BaseTable from './components/BaseTable.vue';
import MyFormInput from './components/MyFormInput.vue';
import Navbar from './components/Navbar.vue';
import AdminDashboardPage from './pages/AdminDashboardPage.vue';
import CartPage from './pages/CartPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';
import ForgotPasswordPage from './pages/ForgotPasswordPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ProductListPage from './pages/ProductListPage.vue';
import ProductOverviewPage from './pages/ProductOverviewPage.vue';
import RegisterPage from './pages/RegisterPage.vue';

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
		path: '/register',
		name: 'registerPage',
		component: RegisterPage,
	},
	{
		path: '/forgotPassword',
		name: 'forgotPasswordPage',
		component: ForgotPasswordPage,
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
		redirect: { name: 'adminOrderListPage' },
		component: AdminDashboardPage,
		children: [
			{
				path: 'orders',
				name: 'adminOrderListPage',
				component: AdminOrderList,
			},
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

app.component('BaseButton', BaseButton);
app.component('MyFormInput', MyFormInput);
app.component('BaseTable', BaseTable);
app.component('Navbar', Navbar);
app.component('BaseModal', BaseModal);
app.component('BaseEditModal', BaseEditModal);
app.component('BaseDeleteModal', BaseDeleteModal);
app.component('BaseAdminList', BaseAdminList);

app.use(router).mount('#app');
