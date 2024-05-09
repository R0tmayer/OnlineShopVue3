<template>
	<p class="text-center text-2xl mb-3">Cart Items</p>
	<div class="flex space-x-10">
		<!-- Items -->
		<div class="flex flex-col space-y-5 w-2/3">
			<CartItem v-for="item in cartStore.items" :item="item"></CartItem>
		</div>
		<!-- Subtotal -->
		<div
			class="flex flex-col w-1/3 border sticky top-10 rounded-3xl border-gray-200 p-10 h-full space-y-5"
		>
			<div class="inline-flex justify-between text-lg">
				<p>Total:</p>
				<p>$100</p>
			</div>
			<hr />
			<RouterLink :to="{ name: 'checkoutPage' }">
				<BaseButton text="Checkout" class="p-4 w-full"></BaseButton>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import { useCartStore } from '@/stores/cartStore';
import axios from 'axios';
import { onMounted } from 'vue';

const cartStore = useCartStore();

async function getCart() {
	// const response = await axios.get('http://localhost:5000/cart');
	// cartStore.items = response.data.items;
}

// onMounted(() => {
// 	getCart();
// });
</script>
