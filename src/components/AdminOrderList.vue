<template>
	<BaseEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	>
		<p class="text-xl text-center">Edit order</p>
		<div class="flex flex-col space-y-3">
			<MyFormInput labelText="First name" placeholderText="First name"></MyFormInput>
			<MyFormInput labelText="Last name" placeholderText="Last name"></MyFormInput>
			<MyFormInput labelText="Email" placeholderText="Email"></MyFormInput>
			<MyFormInput labelText="Total" placeholderText="Total"></MyFormInput></div
	></BaseEditModal>
	<BaseDeleteConfirmModal
		v-if="isDeleteModalOpen"
		context="order"
		@closeDeleteModal="isDeleteModalOpen = false"
		@deleteItem="isDeleteModalOpen = false"
	></BaseDeleteConfirmModal>
	<div class="rounded-2xl overflowa-hidden border">
		<div class="p-5 text-lg">
			<p>All orders</p>
		</div>
		<div>
			<BaseTable
				:items="orders"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
				@openDeleteModal="isDeleteModalOpen = true"
			></BaseTable>
		</div>
	</div>
</template>

<script setup>
import { orders } from '@/mocks/orders';
import { ref } from 'vue';

const columns = ['id', 'firstName', 'lastName', 'email', 'total'];

const isEditModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
</script>
