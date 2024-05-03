<template>
	<BaseModal @close="close">
		<div class="flex flex-col space-y-10">
			<div class="text-center text-2xl">Add new {{ context }}</div>

			<slot></slot>
			<div class="inline-flex justify-end space-x-5">
				<BaseButton
					text="Cancel"
					:color="buttonColors.white"
					class="min-w-24"
					@click="close"
				></BaseButton>
				<BaseButton
					text="Add"
					:color="buttonColors.green"
					class="min-w-24"
					@click="add"
				></BaseButton>
			</div>
		</div>
	</BaseModal>
</template>

<script setup>
defineProps({
	context: String,
});

import { buttonColors } from '@/ButtonColors';

const emit = defineEmits(['closeAddModal, addItem']);

function add() {
	emit('addItem');
}

function close() {
	emit('closeAddModal');
}
</script>
