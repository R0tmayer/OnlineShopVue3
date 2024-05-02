import MyButton from './MyButton.vue'; import MyFormInput from './MyFormInput.vue';
<template>
	<BaseModal @close="close">
		<div class="flex flex-col space-y-10">
			<slot></slot>
			<div class="inline-flex justify-end space-x-5">
				<MyButton text="Cancel" :color="buttonColors.white" @click="close"></MyButton>
				<MyButton text="Save" :color="buttonColors.green" @click="save"></MyButton>
			</div>
		</div>
	</BaseModal>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['closeEditModal, saveEditModal']);

function save() {
	emit('saveEditModal');
}

function close() {
	emit('closeEditModal');
}

const buttonColors = ref({
	white: 'bg-white text-black hover:bg-black hover:text-white border-black min-w-24',
	green: 'bg-green-600 text-white hover:bg-green-700 min-w-24',
});
</script>
