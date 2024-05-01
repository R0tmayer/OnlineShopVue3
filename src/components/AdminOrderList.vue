<template>
	<div class="rounded-2xl overflowa-hidden border">
		<div class="p-5 text-lg">
			<p>All orders</p>
		</div>
		<div>
			<MyTable :items="orders" :columns="columns"></MyTable>
		</div>
	</div>
</template>

<script setup>
import { orders } from '@/mocks/orders';
import MyTable from './MyTable.vue';

const columns = ['id', 'firstName', 'lastName', 'email', 'total'];
</script>
