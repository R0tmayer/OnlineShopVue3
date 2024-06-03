<template>
	<p class="text-center text-2xl mb-3">Cart Items</p>
	<div class="flex space-x-10">
		<!-- Items -->
		<div class="flex flex-col space-y-5 w-2/3">
			<CartItem
				v-for="item in cartStore.items"
				:key="item.id"
				:item="item"
				@incrementCount="incrementItemCount"
				@decrementCount="decrementItemCount"
				@removeItem="removeItem"
			></CartItem>
		</div>
		<!-- Subtotal -->
		<div
			class="flex flex-col w-1/3 border sticky top-10 rounded-3xl border-gray-200 p-10 h-full space-y-5"
		>
			<div class="inline-flex justify-between text-lg">
				<p>Total:</p>
				<p>${{ cartStore.totalCartPrice }}</p>
			</div>
			<hr />
			<RouterLink :to="{ name: 'checkoutPage' }">
				<BaseButton text="Checkout" class="p-4 w-full"></BaseButton>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import { api } from '@/api/api';
import CartItem from '@/components/CartItem.vue';
import { useCartStore } from '@/stores/cartStore';
import { onMounted } from 'vue';

const cartStore = useCartStore();

async function getCart() {
	const response = await api.cart.getCart();
	cartStore.items = response.data.items;
}

onMounted(() => {
	getCart();
});

async function incrementItemCount(itemId) {
	api.cart.increment(itemId);
	cartStore.incrementItem(itemId);
}

async function decrementItemCount(itemId) {
	api.cart.decrement(itemId);
	cartStore.decrementItem(itemId);
}

async function removeItem(itemId) {
	api.cart.removeItem(itemId);
	cartStore.removeItem(itemId);
}
</script>
