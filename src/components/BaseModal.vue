<template>
	<div class="fixed inset-0 z-10 bg-black bg-opacity-80" @click.self="close">
		<div class="bg-white max-w-screen-sm mx-auto my-8 rounded-xl">
			<div class="p-2 text-right">
				<BaseModalButtonClose @click="close"></BaseModalButtonClose>
			</div>
			<div class="p-6">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
import BaseModalButtonClose from './BaseModalButtonClose.vue';

const emit = defineEmits(['close']);

function close() {
	emit('close');
}
</script>
