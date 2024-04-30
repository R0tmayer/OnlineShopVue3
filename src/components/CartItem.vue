import MyButton from './MyButton.vue';
<template>
	<div class="flex justify-between shadow-md border border-slate-200 rounded-2xl p-5">
		<div class="flex space-x-5">
			<div class="overflow-hidden rounded-2xl max-w-[150px]">
				<img src="/src/assets/images/ManorLords.jpg" alt="no image found" />
			</div>
			<p class="text-xl">Manor Lords</p>
		</div>
		<div class="flex flex-col items-center space-y-3">
			<div class="inline-flex items-center space-x-2">
				<MyButton :icon="MinusIcon" :color="buttonColors.white"></MyButton>
				<p>2</p>
				<MyButton :icon="PlusIcon" :color="buttonColors.white"></MyButton>
			</div>
			<p>$100</p>
			<MyButton text="Delete" :icon="TrashIcon" :color="buttonColors.red"></MyButton>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import MinusIcon from '@/assets/icons/MinusIcon.vue';
import PlusIcon from '@/assets/icons/PlusIcon.vue';
import TrashIcon from '@/assets/icons/TrashIcon.vue';

const buttonColors = ref({
	white: 'bg-white text-black hover:bg-black hover:text-white',
	red: 'bg-white text-red-500 border-red-500 hover:bg-red-500 hover:text-white',
});
</script>
