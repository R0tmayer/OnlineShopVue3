<template>
	<div class="flex mt-20">
		<div class="">
			<img src="/src/assets/images/LoginImage.jpg" alt="no image found" class="" />
		</div>
		<div class="border bg-slate-50 rounded-2xl max-w-[500px] w-full shadow-lg h-full">
			<div class="p-10 flex flex-col space-y-3">
				<p class="text-2xl tracking-tight text-gray-900 text-center">Restore password</p>
				<BaseFormInput
					ref="emailInput"
					labelText="Email"
					placeholderText="Enter your email"
					inputType="email"
					name="email"
				/>
				<div class="flex items-center justify-between"></div>
				<BaseButton
					text="Restore"
					class="justify-center p-2.5 rounded-xl"
					@click="sendResetMail"
				></BaseButton>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const emailInput = ref(null);

const sendResetMail = () => {
	emailInput.value.validate();

	if (emailInput.value.isValid) {
		console.log('success auth');
	}
};
</script>
