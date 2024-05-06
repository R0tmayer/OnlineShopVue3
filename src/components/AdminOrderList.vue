<template>
	<BaseAdminList
		context="order"
		:columns="columns"
		:items="orders"
		@addItem="addItem"
		@saveItem="saveItem"
		@deleteItem="deleteItem"
		ref="adminList"
	>
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput
					ref="editFirstNameInput"
					labelText="First name"
					placeholderText="First name"
					name="firstName"
				></BaseFormInput>
				<BaseFormInput
					ref="editLastNameInput"
					labelText="Last name"
					placeholderText="Last name"
					name="lastName"
				></BaseFormInput>
				<BaseFormInput
					ref="editEmailInput"
					labelText="Email"
					placeholderText="Email"
					name="email"
					inputType="email"
				></BaseFormInput>
				<BaseFormInput
					ref="editTotalInput"
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

const editFirstNameInput = ref(null);
const editLastNameInput = ref(null);
const editEmailInput = ref(null);
const editTotalInput = ref(null);

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
	editFirstNameInput.value.validate();
	editLastNameInput.value.validate();
	editEmailInput.value.validate();
	editTotalInput.value.validate();

	if (
		editFirstNameInput.value.isValid &&
		editLastNameInput.value.isValid &&
		editEmailInput.value.isValid &&
		editTotalInput.value.isValid
	) {
		adminList.value.closeAllModal();
		console.log('axios add item');
	}
}

function deleteItem() {
	adminList.value.closeAllModal();
	console.log('axios delete item');
}
</script>
