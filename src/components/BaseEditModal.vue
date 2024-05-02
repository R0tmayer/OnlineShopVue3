import MyButton from './MyButton.vue'; import MyFormInput from './MyFormInput.vue';
<template>
	<BaseModal @close="close">
		<div class="flex flex-col space-y-10">
			<slot></slot>
			<div class="inline-flex justify-end space-x-5">
				<MyButton
					text="Save"
					class="bg-green-600 hover:bg-green-700 min-w-24"
					@click="save"
				></MyButton>
				<MyButton
					text="Cancel"
					class="bg-red-600 hover:bg-red-700 min-w-24"
					@click="close"
				></MyButton>
			</div>
		</div>
	</BaseModal>
</template>

<script setup>
const emit = defineEmits(['closeEditModal, saveEditModal']);

function save() {
	emit('saveEditModal');
}

function close() {
	emit('closeEditModal');
}
</script>
