<template>
	<div class="flex flex-col">
		<label class="p-1" :for="inputId">{{ labelText }}</label>
		<input
			:type="inputType"
			:id="name"
			class="border rounded-lg p-2"
			:placeholder="placeholderText"
			v-model="inputValue"
			:name="name"
		/>
		<p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
	labelText: String,
	placeholderText: String,
	inputType: String,
	name: String,
});

const inputValue = ref('');
const errorMessage = ref('');

const validateEmail = (value) => {
	const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	return regex.test(value);
};

const validatePassword = (value) => {
	const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	return regex.test(value);
};

const validate = () => {
	if (props.inputType === 'email') {
		errorMessage.value = validateEmail(inputValue.value) ? '' : 'Invalid email';
	} else if (props.inputType === 'password') {
		errorMessage.value = validatePassword(inputValue.value)
			? ''
			: 'Password must contain at least 8 characters, including one letter and one number';
	}
};
const isValid = computed(() => !errorMessage.value);

defineExpose({
	validate,
	isValid,
	inputValue,
});
</script>
