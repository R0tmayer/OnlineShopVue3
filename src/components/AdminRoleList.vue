<template>
	<AdminRoleEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	></AdminRoleEditModal>
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
			<MyTable
				:items="roles"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
				@openDeleteModal="isDeleteModalOpen = true"
			></MyTable>
		</div>
	</div>
</template>

<script setup>
import { roles } from '@/mocks/roles';
import { ref } from 'vue';

import AdminRoleEditModal from './AdminRoleEditModal.vue';

const columns = ['name', ''];

const isEditModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
</script>
