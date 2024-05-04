<template>
	<BaseAdminList
		context="order"
		:columns="columns"
		:items="orders"
		@addItem="addItem"
		@saveItem=""
		@deleteItem=""
		ref="adminList"
	>
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput
					ref="firstNameInput"
					labelText="First name"
					placeholderText="First name"
					name="firstName"
				></BaseFormInput>
				<BaseFormInput
					ref="lastNameInput"
					labelText="Last name"
					placeholderText="Last name"
					name="lastName"
				></BaseFormInput>
				<BaseFormInput
					ref="emailInput"
					labelText="Email"
					placeholderText="Email"
					name="email"
				></BaseFormInput>
				<BaseFormInput
					ref="totalInput"
					labelText="Total"
					placeholderText="Total"
					name="total"
					inputType="money"
				></BaseFormInput>
			</div>
		</template>
		<template v-slot:addModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput
					ref="addFirstNameInput"
					labelText="First name"
					placeholderText="First name"
					name="firstName"
				></BaseFormInput>
				<BaseFormInput
					ref="addLastNameInput"
					labelText="Last name"
					placeholderText="Last name"
					name="lastName"
				></BaseFormInput>
				<BaseFormInput
					ref="addEmailInput"
					labelText="Email"
					placeholderText="Email"
					name="email"
					inputType="email"
				></BaseFormInput>
				<BaseFormInput
					ref="addTotalInput"
					labelText="Total"
					placeholderText="Total"
					name="total"
					inputType="money"
				></BaseFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { orders } from '@/mocks/orders';
import { ref } from 'vue';

const columns = ['id', 'firstName', 'lastName', 'email', 'total'];

const addFirstNameInput = ref(null);
const addLastNameInput = ref(null);
const addEmailInput = ref(null);
const addTotalInput = ref(null);

const firstNameInput = ref(null);
const lastNameInput = ref(null);
const emailInput = ref(null);
const totalInput = ref(null);

const adminList = ref(null);

function addItem() {
	addFirstNameInput.value.validate();
	addLastNameInput.value.validate();
	addEmailInput.value.validate();
	addTotalInput.value.validate();

	if (
		addFirstNameInput.value.isValid &&
		addLastNameInput.value.isValid &&
		addEmailInput.value.isValid &&
		addTotalInput.value.isValid
	) {
		adminList.value.closeAllModal();
		console.log('axios add item');
	}
}

function saveItem() {
	console.log('axios save item');
}

function deleteItem() {
	console.log('axios delete item');
}
</script>
