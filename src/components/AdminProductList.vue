<template>
	<BaseEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	>
		<p class="text-xl text-center">Edit product</p>
		<div class="flex flex-col space-y-3">
			<MyFormInput labelText="Name" placeholderText="Name"></MyFormInput>
			<MyFormInput labelText="Price" placeholderText="Price"></MyFormInput></div
	></BaseEditModal>
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
			<BaseTable
				:items="items"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
				@openDeleteModal="isDeleteModalOpen = true"
			></BaseTable>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import { products } from '@/mocks/products';

const columns = ['name', 'price', ''];
const items = products.map((product) => ({
	name: product.name,
	price: product.price,
}));

const isEditModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
</script>
