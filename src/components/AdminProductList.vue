<template>
	<BaseAdminList context="product" :columns="columns" :items="items">
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<MyFormInput labelText="Name" placeholderText="Name"></MyFormInput>
				<MyFormInput labelText="Price" placeholderText="Price"></MyFormInput>
			</div>
		</template>
		<template v-slot:addModalContent>
			<div class="flex flex-col space-y-3">
				<MyFormInput labelText="Name" placeholderText="Name"></MyFormInput>
				<MyFormInput labelText="Price" placeholderText="Price"></MyFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { products } from '@/mocks/products';

const columns = ['name', 'price', ''];
const items = products.map((product) => ({
	name: product.name,
	price: product.price,
}));
</script>
