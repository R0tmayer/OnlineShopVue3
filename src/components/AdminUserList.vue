<template>
	<BaseAdminList context="user" :columns="columns" :items="users">
		<template v-slot:editModalContent>
			<p class="text-xl text-center">Edit {{ context }}</p>
			<div class="flex flex-col space-y-3">
				<BaseFormInput
					labelText="First name"
					placeholderText="First name"
				></BaseFormInput>
				<BaseFormInput labelText="Last name" placeholderText="Last name"></BaseFormInput>
				<BaseFormInput labelText="Email" placeholderText="Email"></BaseFormInput>
			</div>
		</template>
		<template v-slot:addModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput
					labelText="First name"
					placeholderText="First name"
				></BaseFormInput>
				<BaseFormInput labelText="Last name" placeholderText="Last name"></BaseFormInput>
				<BaseFormInput labelText="Email" placeholderText="Email"></BaseFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { users } from '@/mocks/users';
const columns = ['firstName', 'lastName', 'email', ''];
</script>
