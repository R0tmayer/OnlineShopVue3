<template>
	<AdminProductEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	></AdminProductEditModal>
	<BaseDeleteConfirmModal
		v-if="isDeleteModalOpen"
		context="product"
		@closeDeleteModal="isDeleteModalOpen = false"
		@deleteItem="isDeleteModalOpen = false"
	></BaseDeleteConfirmModal>
	<div class="rounded-2xl overflowa-hidden border">
		<div class="p-5 text-lg">
			<p>All products</p>
		</div>
		<div>
			<MyTable
				:items="items"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
				@openDeleteModal="isDeleteModalOpen = true"
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
const isDeleteModalOpen = ref(false);
</script>
