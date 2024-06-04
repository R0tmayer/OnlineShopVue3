import AdminOrderList from './components/AdminOrderList.vue';
import AdminProductList from './components/AdminProductList.vue';
import AdminRoleList from './components/AdminRoleList.vue';
import AdminUserList from './components/AdminUserList.vue';
import AdminDashboardPage from './pages/AdminDashboardPage.vue';
import CartPage from './pages/CartPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';
import ForgotPasswordPage from './pages/ForgotPasswordPage.vue';
import LoginPage from './pages/LoginPage.vue';
import ProductListPage from './pages/ProductListPage.vue';
import ProductOverviewPage from './pages/ProductOverviewPage.vue';
import RegisterPage from './pages/RegisterPage.vue';

export const routes = [
	{
		path: '/',
		redirect: { name: 'productListPage' },
	},
	{
		path: '/product/all',
		name: 'productListPage',
		component: ProductListPage,
	},
	{
		path: '/product/:productId',
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
