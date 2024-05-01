<template>
	<p class="text-center text-2xl mb-3">Cart Items</p>
	<div class="flex space-x-10">
		<!-- Items -->
		<div class="flex flex-col space-y-5 w-2/3">
			<CartItem v-for="product in products" :product="product"></CartItem>
		</div>
		<!-- Subtotal -->
		<div
			class="flex flex-col w-1/3 border sticky top-10 rounded-2xl border-gray-200 p-10 h-full space-y-5"
		>
			<div class="inline-flex justify-between text-lg">
				<p>Total:</p>
				<p>$100</p>
			</div>
			<hr />
			<RouterLink :to="{ name: 'checkoutPage' }">
				<MyButton text="Checkout" class="p-4 w-full"></MyButton>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import MyButton from '@/components/MyButton.vue';

import { products } from '@/mocks/products';
</script>
