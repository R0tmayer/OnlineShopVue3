<template>
	<div class="border rounded-2xl overflow-hidden flex flex-col h-[416px] shadow-md">
		<RouterLink
			:to="{
				name: 'productOverviewPage',
				// , params: { id: product.id }
			}"
		>
			<img :src="product.imagePath" alt="no image found" />
		</RouterLink>
		<p class="font-sans p-2 text-md">{{ product.name }}</p>
		<div class="flex items-center justify-between mt-auto mb-3 mx-3">
			<p>${{ product.price }}</p>
			<BaseButton
				text="Add to cart"
				:icon="ShoppingCartIcon"
				@click="addToCart"
			></BaseButton>
		</div>
	</div>
</template>

<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
	product: Object,
});

const emit = defineEmits(['addToCart']);

function addToCart() {
	emit('addToCart', props.product);
}
</script>
