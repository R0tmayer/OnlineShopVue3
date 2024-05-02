<template>
	<AdminOrderEditModal
		v-if="isEditModalOpen"
		@closeEditModal="isEditModalOpen = false"
		@saveEditModal="isEditModalOpen = false"
	></AdminOrderEditModal>
	<div class="rounded-2xl overflowa-hidden border">
		<div class="p-5 text-lg">
			<p>All orders</p>
		</div>
		<div>
			<MyTable
				:items="orders"
				:columns="columns"
				@openEditModal="isEditModalOpen = true"
			></MyTable>
		</div>
	</div>
</template>

<script setup>
import { orders } from '@/mocks/orders';
import { ref } from 'vue';

import AdminOrderEditModal from './AdminOrderEditModal.vue';

const columns = ['id', 'firstName', 'lastName', 'email', 'total'];

const isEditModalOpen = ref(false);
</script>
