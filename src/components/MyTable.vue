<template>
	<table class="w-full text-left">
		<thead class="bg-gray-100 text-sm uppercase text-gray-700 border-y">
			<tr>
				<th v-for="col in columns" :key="index" class="px-6 py-3">
					{{ col }}
				</th class="px-6 py-3">
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, index) in items" :key="index" class="bg-white border-b">
				<td class=" px-6 py-4" v-for="(column, indexColumn) in columns" :key="indexColumn">
					<div v-if="column === 'price' || column === 'total'">$ {{ item[column].toFixed(2) }}</div>
					<div v-else>{{ item[column] }}</div>
				</td>
				<td>
					<div class="inline-flex space-x-3">
						<MyButton text="Edit" :icon="PencilSquareIcon" class="min-w-[60px]" @click="openEditModal"></MyButton>
						<MyButton text="Delete" :icon="TrashIcon" class="min-w-[60px]" :color="buttonColors.red" @click="openDeleteModal"></MyButton>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
import { ref } from 'vue';

import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';

defineProps({
	columns: Array,
	items: Array,
});

const emit = defineEmits(['openEditModal', 'openDeleteModal'])

function openEditModal (){
	emit('openEditModal');
}

function openDeleteModal (){
	emit('openDeleteModal');
}

const buttonColors = ref({
	red: 'bg-red-500 text-white border-red-500 hover:bg-red-600',
});
</script>
