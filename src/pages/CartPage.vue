<template>
	<p class="text-center text-2xl">Cart Items</p>
	<div class="flex space-x-10">
		<!-- Items -->
		<div class="flex flex-col space-y-5 w-2/3">
			<CartItem></CartItem>
			<CartItem></CartItem>
			<CartItem></CartItem>
			<CartItem></CartItem>
			<CartItem></CartItem>
			<CartItem></CartItem>
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
			<MyButton text="Checkout" class="p-4"></MyButton>
		</div>
	</div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import MyButton from '@/components/MyButton.vue';
</script>
