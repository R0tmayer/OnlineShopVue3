<template>
	<BaseAdminList context="order" :columns="columns" :items="orders">
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<MyFormInput labelText="First name" placeholderText="First name"></MyFormInput>
				<MyFormInput labelText="Last name" placeholderText="Last name"></MyFormInput>
				<MyFormInput labelText="Email" placeholderText="Email"></MyFormInput>
				<MyFormInput labelText="Total" placeholderText="Total"></MyFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { orders } from '@/mocks/orders';

const columns = ['id', 'firstName', 'lastName', 'email', 'total'];
</script>
