<template>
	<div class="w-full flex items-center justify-between p-4 font-sans text-lg">
		<RouterLink :to="{ name: 'productListPage' }">
			<p>Navbar Brand</p>
		</RouterLink>
		<div class="inline-flex items-center justify-center space-x-10">
			<RouterLink :to="{ name: 'productListPage' }">
				<p>Home</p>
			</RouterLink>
			<RouterLink :to="{ name: 'productListPage' }">
				<p>Catalog</p>
			</RouterLink>
			<RouterLink :to="{ name: 'adminDashboardPage' }">
				<p>Admin</p>
			</RouterLink>
		</div>
		<div class="inline-flex items-center justify-center space-x-5">
			<RouterLink :to="{ name: 'cartPage' }">
				<BaseButton
					class="h-10 w-10 items-center justify-center"
					:icon="ShoppingCartIcon"
					:color="buttonColors.white"
				/>
			</RouterLink>
			<RouterLink :to="{ name: 'loginPage' }">
				<BaseButton
					class="h-10 w-10 items-center justify-center"
					:icon="UserIcon"
					:color="buttonColors.white"
				/>
			</RouterLink>
			<CartButton></CartButton>
		</div>
	</div>
</template>

<script setup>
import { ShoppingCartIcon, UserIcon } from '@heroicons/vue/24/outline';
import BaseButton from './BaseButton.vue';
import CartButton from './CartButton.vue';

import { buttonColors } from '@/ButtonColors';
</script>
