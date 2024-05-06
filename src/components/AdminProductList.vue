<template>
	<BaseAdminList
		context="product"
		:columns="columns"
		:items="items"
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
				<BaseFormInput
					ref="editPriceInput"
					labelText="Price"
					placeholderText="Enter price"
					name="price"
					inputType="money"
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
				<BaseFormInput
					ref="addPriceInput"
					labelText="Price"
					placeholderText="Enter price"
					name="price"
					inputType="money"
				></BaseFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { products } from '@/mocks/products';
import { ref } from 'vue';

const addNameInput = ref(null);
const addPriceInput = ref(null);

const editNameInput = ref(null);
const editPriceInput = ref(null);

const adminList = ref(null);

const columns = ['name', 'price', ''];
const items = products.map((product) => ({
	name: product.name,
	price: product.price,
}));

function addItem() {
	addNameInput.value.validate();
	addPriceInput.value.validate();

	if (addNameInput.value.isValid && addPriceInput.value.isValid) {
		adminList.value.closeAllModal();
		console.log('axios add item');
	}
}

function saveItem() {
	editNameInput.value.validate();
	editPriceInput.value.validate();

	if (editNameInput.value.isValid && editPriceInput.value.isValid) {
		adminList.value.closeAllModal();
		console.log('axios add item');
	}
}

function deleteItem() {
	adminList.value.closeAllModal();
	console.log('axios delete item');
}
</script>
