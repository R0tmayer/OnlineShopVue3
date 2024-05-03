<template>
	<BaseAdminList context="order" :columns="columns" :items="orders">
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput
					labelText="First name"
					placeholderText="First name"
				></BaseFormInput>
				<BaseFormInput labelText="Last name" placeholderText="Last name"></BaseFormInput>
				<BaseFormInput labelText="Email" placeholderText="Email"></BaseFormInput>
				<BaseFormInput labelText="Total" placeholderText="Total"></BaseFormInput>
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
				<BaseFormInput labelText="Total" placeholderText="Total"></BaseFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { orders } from '@/mocks/orders';

const columns = ['id', 'firstName', 'lastName', 'email', 'total'];
</script>
