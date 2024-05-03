<template>
	<BaseEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	>
		<p class="text-xl text-center">Edit product</p>
		<div class="flex flex-col space-y-3">
			<MyFormInput labelText="Name" placeholderText="Name"></MyFormInput></div
	></BaseEditModal>
	<BaseDeleteConfirmModal
		v-if="isDeleteModalOpen"
		context="role"
		@closeDeleteModal="isDeleteModalOpen = false"
		@deleteItem="isDeleteModalOpen = false"
	></BaseDeleteConfirmModal>
	<div class="rounded-2xl overflow-hidden border">
		<div class="p-5 text-lg">
			<p>All roles</p>
		</div>
		<div>
			<BaseTable
				:items="roles"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
				@openDeleteModal="isDeleteModalOpen = true"
			></BaseTable>
		</div>
	</div>
</template>

<script setup>
import { roles } from '@/mocks/roles';
import { ref } from 'vue';

const columns = ['name', ''];

const isEditModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
</script>
