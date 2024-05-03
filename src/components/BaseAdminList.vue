<template>
	<BaseAddModal
		v-if="isAddModalOpen"
		:context="context"
		@closeAddModal="isAddModalOpen = false"
		@addItem="isAddModalOpen = false"
	>
		<slot name="addModalContent"></slot>
	</BaseAddModal>

	<BaseEditModal
		v-if="isEditModalOpen"
		:context="context"
		@closeEditModal="isEditModalOpen = false"
		@saveItem="isEditModalOpen = false"
	>
		<slot name="editModalContent"></slot>
	</BaseEditModal>

	<BaseDeleteModal
		v-if="isDeleteModalOpen"
		:context="context"
		@closeDeleteModal="isDeleteModalOpen = false"
		@deleteItem="isDeleteModalOpen = false"
	></BaseDeleteModal>

	<div class="rounded-2xl overflow-hidden border">
		<div class="flex justify-between p-5">
			<p class="text-lg text-center">All {{ context }}s</p>
			<BaseButton text="Add" class="min-w-16" @click="isAddModalOpen = true"></BaseButton>
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
import BaseAddModal from './BaseAddModal.vue';

defineProps({
	context: String,
	columns: Array,
	items: Array,
});

const isEditModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
const isAddModalOpen = ref(false);
</script>
