import BaseButton from './BaseButton.vue'; import MyFormInput from './MyFormInput.vue';
<template>
	<BaseModal @close="closeDeleteModal">
		<div class="flex flex-col space-y-10">
			<div class="text-center text-2xl">Delete {{ context }}</div>
			<div>You're going to delete {{ context }}. Are you sure?</div>
			<div class="inline-flex justify-end space-x-5">
				<BaseButton
					text="No, Keep it"
					:color="buttonColors.white"
					@click="closeDeleteModal"
				></BaseButton>
				<BaseButton
					text="Yes, Delete!"
					:color="buttonColors.red"
					@click="deleteItem"
				></BaseButton>
			</div>
		</div>
	</BaseModal>
</template>

<script setup>
defineProps({
	context: String,
});
const emit = defineEmits(['closeDeleteModal, deleteItem']);

function deleteItem() {
	emit('deleteItem');
}

function closeDeleteModal() {
	emit('closeDeleteModal');
}

import { buttonColors } from '@/ButtonColors';
</script>
