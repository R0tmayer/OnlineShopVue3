<template>
	<div class="border rounded-2xl overflow-hidden flex flex-col h-[416px] shadow-md">
		<RouterLink>
			<img :src="image" alt="no image found" />
		</RouterLink>
		<p class="font-sans p-2 text-md">{{ title }}</p>
		<div class="flex items-center justify-between mt-auto mb-3 mx-3">
			<p>${{ price }}</p>
			<MyButton text="Add to cart" :icon="CartIcon"></MyButton>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
	},
});

import CartIcon from '@/assets/icons/CartIcon.vue';
</script>
