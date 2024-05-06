<template>
	<table class="w-full text-left">
		<thead class="bg-gray-100 text-sm uppercase text-gray-700">
			<tr>
				<th v-for="col in columns" :key="index" class="px-6 py-3">
					{{ col }}
				</th class="px-6 py-3">
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, index) in items" :key="index" class="bg-white border-b last:border-b-0 hover:bg-gray-50">
				<td class=" px-6 py-4" v-for="(column, indexColumn) in columns" :key="indexColumn">
					<div v-if="column === 'price' || column === 'total'">$ {{ item[column].toFixed(2) }}</div>
					<div v-else>{{ item[column] }}</div>
				</td>
				<td>
					<div class="inline-flex float-end px-6 space-x-3">
						<BaseButton text="Edit" :icon="PencilSquareIcon" class="min-w-24" @click="openEditModal"></BaseButton>
						<BaseButton text="Delete" :icon="TrashIcon" class="min-w-24" :color="buttonColors.red" @click="openDeleteModal"></BaseButton>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
import { buttonColors } from '@/ButtonColors';
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

</script>
