<template>
	<div class="flex space-x-7" v-if="product">
		<div class="shrink-0">
			<img
				:src="product.imagePath"
				alt="no image found"
				class="rounded-2xl border border-black border-opacity-25 shadow-md"
			/>
		</div>
		<div class="flex flex-col space-y-6">
			<div class="flex flex-col space-y-2">
				<div class="text-2xl">{{ product.name }}</div>
				<div class="text-lg w-11/12">
					{{ product.description }}
				</div>
			</div>
			<div class="inline-flex space-x-5">
				<p class="text-xl p-1">${{ product.price }}</p>
				<BaseButton
					:icon="ShoppingCartIcon"
					text="Add to cart"
					@click="addToCart"
				></BaseButton>
			</div>
		</div>
	</div>
</template>

<script setup>
import { api } from '@/api/api';
import { useCartStore } from '@/stores/cartStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const cartStore = useCartStore();
const product = ref();

const route = useRoute();

onMounted(() => {
	initProduct();
});

async function initProduct() {
	const response = await api.product.getProductById(route.params.productId);
	product.value = response.data;
}

async function addToCart() {
	const response = await api.cart.addItem(route.params.productId);
	const itemId = response.data;

	cartStore.addToCart(product.value, itemId);
}
</script>
