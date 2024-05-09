<template>
	<div class="grid grid-cols-5 gap-5 items-stretch">
		<ProductListItem v-for="product in products" :product="product"></ProductListItem>
	</div>
</template>

<script setup>
import ProductListItem from '@/components/ProductListItem.vue';
import { products } from '@/mocks/products';
</script>
