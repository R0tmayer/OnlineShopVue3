import MyButton from './MyButton.vue'; import MyFormInput from './MyFormInput.vue';
<template>
	<BaseEditModal
		@closeEditModal="$emit('closeEditModal')"
		@saveEditModal="$emit('saveEditModal')"
	>
		<p class="text-xl text-center">Edit product</p>
		<div class="flex flex-col space-y-3">
			<MyFormInput labelText="Name" placeholderText="Name"></MyFormInput>
			<MyFormInput labelText="Price" placeholderText="Price"></MyFormInput>
		</div>
	</BaseEditModal>
</template>
