<template>
	<AdminUserEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	></AdminUserEditModal>
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
			<MyTable
				:items="users"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
				@openDeleteModal="isDeleteModalOpen = true"
			></MyTable>
		</div>
	</div>
</template>

<script setup>
import { users } from '@/mocks/users';

import { ref } from 'vue';
import AdminUserEditModal from './AdminUserEditModal.vue';

const columns = ['firstName', 'lastName', 'email', ''];

const isEditModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
</script>
