<script setup>
defineProps({
	text: {
		type: String,
	},
	icon: {
		type: Object,
	},
	color: {
		type: String,
		default: 'bg-blue-600 text-white hover:bg-blue-700',
	},
});
</script>

<template>
	<button :class="['inline-flex justify-center border p-1.5 rounded-lg', color]">
		<component :is="icon"></component>
		{{ text }}
	</button>
</template>
