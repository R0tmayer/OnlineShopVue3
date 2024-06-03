<template>
	<div class="flex justify-between shadow-md border border-slate-200 rounded-3xl p-5">
		<div class="flex space-x-5">
			<div class="overflow-hidden rounded-2xl max-w-[150px]">
				<img :src="imageUrl" alt="no image found" />
			</div>
			<p class="text-xl">{{ item.product.name }}</p>
		</div>
		<div class="flex flex-col items-center space-y-3">
			<div class="inline-flex items-center space-x-3">
				<BaseButton
					:icon="MinusIcon"
					:color="buttonColors.white"
					@click="decrementCount"
				></BaseButton>
				<p>{{ item.count }}</p>
				<BaseButton
					:icon="PlusIcon"
					:color="buttonColors.white"
					@click="incrementCount"
				></BaseButton>
			</div>
			<p>${{ totalPrice }}</p>
			<BaseButton
				text="Delete"
				:icon="TrashIcon"
				:color="buttonColors.red"
				@click="removeItem"
			/>
		</div>
	</div>
</template>

<script setup>
import { buttonColors } from '@/ButtonColors';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
	item: Object,
});

const emit = defineEmits(['incrementCount', 'decrementCount', 'removeItem']);

function incrementCount() {
	emit('incrementCount', props.item.id);
}

function decrementCount() {
	emit('decrementCount', props.item.id);
}

function removeItem() {
	emit('removeItem', props.item.id);
}

const imageUrl = computed(() => props.item.product.imagePath);
const totalPrice = computed(() =>
	(props.item.count * props.item.product.price).toFixed(2)
);
</script>
