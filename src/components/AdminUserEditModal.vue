import MyButton from './MyButton.vue'; import MyFormInput from './MyFormInput.vue';
<template>
	<BaseEditModal
		@closeEditModal="$emit('closeEditModal')"
		@saveEditModal="$emit('saveEditModal')"
	>
		<p class="text-xl text-center">Edit user</p>
		<div class="flex flex-col space-y-3">
			<MyFormInput labelText="First name" placeholderText="First name"></MyFormInput>
			<MyFormInput labelText="Last name" placeholderText="Last name"></MyFormInput>
			<MyFormInput labelText="Email" placeholderText="Email"></MyFormInput>
		</div>
	</BaseEditModal>
</template>
