<template>
	<div class="rounded-2xl overflowa-hidden border">
		<div class="p-5 text-lg">
			<p>All products</p>
		</div>
		<div>
			<MyTable :items="items" :columns="columns"></MyTable>
		</div>
	</div>
</template>

<script setup>
import { products } from '@/mocks/products';
import MyTable from './MyTable.vue';

const columns = ['name', 'price', ''];
const items = products.map((product) => ({
	name: product.name,
	price: product.price,
}));
</script>
