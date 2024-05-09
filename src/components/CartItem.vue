<template>
	<div class="flex justify-between shadow-md border border-slate-200 rounded-3xl p-5">
		<div class="flex space-x-5">
			<div class="overflow-hidden rounded-2xl max-w-[150px]">
				<img :src="item.product.image" alt="no image found" />
			</div>
			<p class="text-xl">{{ item.product.name }}</p>
		</div>
		<div class="flex flex-col items-center space-y-3">
			<div class="inline-flex items-center space-x-3">
				<BaseButton :icon="MinusIcon" :color="buttonColors.white"></BaseButton>
				<p>{{ item.count }}</p>
				<BaseButton :icon="PlusIcon" :color="buttonColors.white"></BaseButton>
			</div>
			<p>${{ item.totalPrice }}</p>
			<BaseButton text="Delete" :icon="TrashIcon" :color="buttonColors.red" />
		</div>
	</div>
</template>

<script setup>
defineProps({
	item: Object,
});

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/vue/24/outline';
import BaseButton from './BaseButton.vue';

import { buttonColors } from '@/ButtonColors';
</script>
