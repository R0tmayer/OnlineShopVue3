<template>
	<BaseAdminList context="user" :columns="columns" :items="users">
		<template v-slot:editModalContent>
			<p class="text-xl text-center">Edit {{ context }}</p>
			<div class="flex flex-col space-y-3">
				<MyFormInput labelText="First name" placeholderText="First name"></MyFormInput>
				<MyFormInput labelText="Last name" placeholderText="Last name"></MyFormInput>
				<MyFormInput labelText="Email" placeholderText="Email"></MyFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { users } from '@/mocks/users';
const columns = ['firstName', 'lastName', 'email', ''];
</script>
