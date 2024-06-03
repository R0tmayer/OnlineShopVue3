<script setup>
defineProps({
	text: String,
	icon: Function, // если Object то Warnings
	color: {
		type: String,
		default: 'bg-blue-600 text-white hover:bg-blue-700',
	},
});
</script>

<template>
	<button
		:class="['inline-flex justify-center items-center border p-1.5 rounded-lg', color]"
	>
		<component :is="icon" class="h-6 w-6"></component>
		{{ text }}
	</button>
</template>
