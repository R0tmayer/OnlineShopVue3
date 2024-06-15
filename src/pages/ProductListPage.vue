<template>
	<div class="grid grid-cols-5 gap-5 items-stretch">
		<!-- <ProductListItem
			v-for="product in productStore.products"
			:product="product"
			@addToCart="addToCart"
		></ProductListItem> -->
	</div>
</template>

<script setup>
import { api } from '@/api/api';

import ProductListItem from '@/components/ProductListItem.vue';
import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore';
import { onMounted } from 'vue';

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(() => {
	getProducts();
});

async function getProducts() {
	const response = await api.product.getProducts();
	productStore.products = response.data;
}

async function addToCart(product) {
	const response = await api.cart.addItem(product.id);
	const itemId = response.data;
	cartStore.addToCart(product, itemId);
}
</script>
