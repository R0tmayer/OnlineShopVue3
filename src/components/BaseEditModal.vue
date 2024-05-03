import BaseButton from './BaseButton.vue'; import MyFormInput from './MyFormInput.vue';
<template>
	<BaseModal @close="close">
		<div class="flex flex-col space-y-10">
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
import { buttonColors } from '@/ButtonColors';

const emit = defineEmits(['closeEditModal, saveEditModal']);

function save() {
	emit('saveEditModal');
}

function close() {
	emit('closeEditModal');
}
</script>
