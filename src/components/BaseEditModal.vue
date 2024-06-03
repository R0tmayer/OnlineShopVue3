<template>
	<BaseModal @close="close">
		<div class="flex flex-col space-y-10">
			<div class="text-center text-2xl">Edit {{ context }}</div>
			<slot></slot>
			<div class="inline-flex justify-end space-x-5">
				<BaseButton
					text="Cancel"
					:color="buttonColors.white"
					class="min-w-24"
					@click="close"
				></BaseButton>
				<BaseButton
					text="Save"
					:color="buttonColors.green"
					class="min-w-24"
					@click="save"
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

const emit = defineEmits(['closeEditModal', 'saveItem']);

function save() {
	emit('saveItem'); // ивент просто закрыть модалку при сохранении (но ничего не делать)
}

function close() {
	emit('closeEditModal');
}
</script>
