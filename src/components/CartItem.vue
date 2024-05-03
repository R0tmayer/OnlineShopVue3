<template>
	<div class="flex justify-between shadow-md border border-slate-200 rounded-2xl p-5">
		<div class="flex space-x-5">
			<div class="overflow-hidden rounded-2xl max-w-[150px]">
				<img :src="product.image" alt="no image found" />
			</div>
			<p class="text-xl">{{ product.name }}</p>
		</div>
		<div class="flex flex-col items-center space-y-3">
			<div class="inline-flex items-center space-x-3">
				<BaseButton :icon="MinusIcon" :color="buttonColors.white"></BaseButton>
				<p>2</p>
				<BaseButton :icon="PlusIcon" :color="buttonColors.white"></BaseButton>
			</div>
			<p>${{ product.price }}</p>
			<BaseButton text="Delete" :icon="TrashIcon" :color="buttonColors.red" />
		</div>
	</div>
</template>

<script setup>
defineProps({
	product: Object,
});

import { ref } from 'vue';

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/vue/24/outline';
import BaseButton from './BaseButton.vue';

import { buttonColors } from '@/ButtonColors';
</script>
