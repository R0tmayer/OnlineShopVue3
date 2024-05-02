<template>
	<MyButton :icon="XMarkIcon" :color="buttonColors.white"></MyButton>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const buttonColors = ref({
	white: 'bg-gray-800 text-white hover:bg-gray-900',
});
</script>
