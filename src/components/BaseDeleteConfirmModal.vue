import MyButton from './MyButton.vue'; import MyFormInput from './MyFormInput.vue';
<template>
	<BaseModal @close="closeDeleteModal">
		<div class="flex flex-col space-y-10">
			<div class="text-center text-2xl">Delete {{ context }}</div>
			<div>You're going to delete {{ context }}. Are you sure?</div>
			<div class="inline-flex justify-end space-x-5">
				<MyButton
					text="No, Keep it"
					:color="buttonColors.white"
					@click="closeDeleteModal"
				></MyButton>
				<MyButton
					text="Yes, Delete!"
					:color="buttonColors.red"
					@click="deleteItem"
				></MyButton>
			</div>
		</div>
	</BaseModal>
</template>

<script setup>
import { ref } from 'vue';

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

const buttonColors = ref({
	white: 'bg-white text-black hover:bg-black hover:text-white border-black min-w-24',
	red: 'bg-red-600 text-white hover:bg-red-700',
});
</script>
