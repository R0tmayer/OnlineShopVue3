<template>
	<div class="w-full flex items-center justify-between p-4 font-sans text-lg">
		<RouterLink :to="{ name: 'productListPage' }">
			<p>Navbar Brand</p>
		</RouterLink>
		<div class="inline-flex items-center justify-center space-x-10">
			<RouterLink :to="{ name: 'productOverviewPage' }">
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
				<MyButton
					class="h-12 w-12 items-center justify-center"
					:icon="CartIcon"
					:color="buttonColors.white"
				/>
			</RouterLink>
			<RouterLink :to="{ name: 'loginPage' }">
				<MyButton
					class="h-12 w-12 items-center justify-center"
					:icon="UserIcon"
					:color="buttonColors.white"
				/>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentRoute = computed(() => route.name);

import CartIcon from '@/assets/icons/CartIcon.vue';
import UserIcon from '@/assets/icons/UserIcon.vue';

const buttonColors = ref({
	white: 'bg-white text-black hover:bg-black hover:text-white',
});
</script>
