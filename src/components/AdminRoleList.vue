<template>
	<div class="rounded-2xl overflow-hidden border">
		<div class="p-5 text-lg">
			<p>All roles</p>
		</div>
		<div>
			<MyTable :items="roles" :columns="columns"></MyTable>
		</div>
	</div>
</template>

<script setup>
import { roles } from '@/mocks/roles';
import MyTable from './MyTable.vue';

const columns = ['name', ''];
</script>
