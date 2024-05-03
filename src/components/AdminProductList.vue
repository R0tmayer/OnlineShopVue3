<template>
	<BaseAdminList context="product" :columns="columns" :items="items">
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput labelText="Name" placeholderText="Name"></BaseFormInput>
				<BaseFormInput labelText="Price" placeholderText="Price"></BaseFormInput>
			</div>
		</template>
		<template v-slot:addModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput labelText="Name" placeholderText="Name"></BaseFormInput>
				<BaseFormInput labelText="Price" placeholderText="Price"></BaseFormInput>
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
