<template>
	<div class="flex space-x-7">
		<div class="shrink-0">
			<img
				src="/src/assets/images/gameImages/ManorLords.jpg"
				alt="no image found"
				class="rounded-2xl border border-black border-opacity-25 shadow-md"
			/>
		</div>
		<div class="flex flex-col space-y-6">
			<div class="flex flex-col space-y-2">
				<div class="text-2xl">Manor Lords</div>
				<div class="text-lg w-11/12">
					Ullamco elit qui eiusmod veniamUllamco elit qui eiusmod veniamUllamco elit qui
					eiusmod veniamUllamco elit qui eiusmod veniamUllamco elit qui eiusmod
					veniamUllamco elit qui eiusmod veniam.
				</div>
			</div>
			<div class="inline-flex space-x-5">
				<p class="text-xl p-1">$100</p>
				<BaseButton :icon="ShoppingCartIcon" text="Add to cart"></BaseButton>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';

defineProps({
	id: String,
});

import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

function addToCart(product) {
	cartStore.addToCart(product);
}
</script>
