<template>
	<div class="rounded-2xl overflow-hidden border">
		<div class="p-5 text-lg">
			<p>All users</p>
		</div>
		<div>
			<MyTable :items="users" :columns="columns"></MyTable>
		</div>
	</div>
</template>

<script setup>
import { users } from '@/mocks/users';
import MyTable from './MyTable.vue';

const columns = ['firstName', 'lastName', 'email', ''];
</script>
