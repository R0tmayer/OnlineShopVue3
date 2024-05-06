<template>
	<BaseAdminList
		context="role"
		:columns="columns"
		:items="roles"
		@addItem="addItem"
		@saveItem="saveItem"
		@deleteItem="deleteItem"
		ref="adminList"
	>
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput
					ref="editNameInput"
					labelText="Name"
					placeholderText="Enter name"
					name="Name"
				></BaseFormInput>
			</div>
		</template>
		<template v-slot:addModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput
					ref="addNameInput"
					labelText="Name"
					placeholderText="Enter name"
					name="name"
				></BaseFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { roles } from '@/mocks/roles';
import { ref } from 'vue';

const addNameInput = ref(null);
const editNameInput = ref(null);
const adminList = ref(null);

const columns = ['name', ''];

function addItem() {
	addNameInput.value.validate();

	if (addNameInput.value.isValid) {
		adminList.value.closeAllModal();
	}
}

function saveItem() {
	editNameInput.value.validate();
	editPriceInput.value.validate();

	if (editNameInput.value.isValid) {
		adminList.value.closeAllModal();
		console.log('axios add item');
	}
}

function deleteItem() {
	adminList.value.closeAllModal();
	console.log('axios delete item');
}
</script>
