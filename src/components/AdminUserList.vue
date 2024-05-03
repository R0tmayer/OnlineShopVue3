<template>
	<BaseEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	>
		<p class="text-xl text-center">Edit user</p>
		<div class="flex flex-col space-y-3">
			<MyFormInput labelText="First name" placeholderText="First name"></MyFormInput>
			<MyFormInput labelText="Last name" placeholderText="Last name"></MyFormInput>
			<MyFormInput labelText="Email" placeholderText="Email"></MyFormInput></div
	></BaseEditModal>
	<BaseDeleteConfirmModal
		v-if="isDeleteModalOpen"
		context="user"
		@closeDeleteModal="isDeleteModalOpen = false"
		@deleteItem="isDeleteModalOpen = false"
	></BaseDeleteConfirmModal>
	<div class="rounded-2xl overflow-hidden border">
		<div class="p-5 text-lg">
			<p>All users</p>
		</div>
		<div>
			<BaseTable
				:items="users"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
				@openDeleteModal="isDeleteModalOpen = true"
			></BaseTable>
		</div>
	</div>
</template>

<script setup>
import { users } from '@/mocks/users';

import { ref } from 'vue';

const columns = ['firstName', 'lastName', 'email', ''];

const isEditModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
</script>
