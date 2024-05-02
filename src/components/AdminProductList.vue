<template>
	<AdminProductEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	></AdminProductEditModal>
	<div class="rounded-2xl overflowa-hidden border">
		<div class="p-5 text-lg">
			<p>All products</p>
		</div>
		<div>
			<MyTable
				:items="items"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
			></MyTable>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import { products } from '@/mocks/products';

import AdminProductEditModal from './AdminProductEditModal.vue';

const columns = ['name', 'price', ''];
const items = products.map((product) => ({
	name: product.name,
	price: product.price,
}));

const isEditModalOpen = ref(false);
</script>
