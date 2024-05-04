<template>
	<div class="flex mt-20">
		<div class="">
			<img src="/src/assets/images/LoginImage.jpg" alt="no image found" class="" />
		</div>
		<div class="border bg-slate-50 rounded-2xl max-w-[500px] w-full shadow-lg h-full">
			<div class="p-10 flex flex-col space-y-3">
				<p class="text-2xl tracking-tight text-gray-900 text-center">
					Register new account
				</p>
				<BaseFormInput
					ref="emailInput"
					labelText="Email"
					placeholderText="Enter your email"
					inputType="email"
					name="email"
				/>
				<BaseFormInput
					ref="passwordInput"
					labelText="Password"
					placeholderText="Enter your password"
					inputType="password"
					name="password"
				/>
				<BaseFormInput
					ref="confirmPasswordInput"
					labelText="Confirm password"
					placeholderText="Confirm password"
					inputType="password"
					name="confirmPassword"
				/>
				<p v-if="doShowMatchPasswordWarning" class="text-red-500">
					Passwords must be the same
				</p>
				<div class="flex items-center justify-between"></div>
				<BaseButton
					text="Register"
					class="justify-center p-2.5 rounded-xl"
					@click="register"
				></BaseButton>
				<div class="inline-flex space-x-2">
					<p>Already have an account?</p>
					<RouterLink :to="{ name: 'loginPage' }">
						<p class="text-blue-600 hover:text-blue-700">Login</p>
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const emailInput = ref(null);
const passwordInput = ref(null);
const confirmPasswordInput = ref(null);
let doShowMatchPasswordWarning = ref(false);

const register = () => {
	doShowMatchPasswordWarning.value = false;

	emailInput.value.validate();
	passwordInput.value.validate();

	if (passwordInput != null && confirmPasswordInput != null) {
		if (passwordInput.value.inputValue !== confirmPasswordInput.value.inputValue) {
			doShowMatchPasswordWarning.value = true;
			return;
		}
	}

	if (emailInput.value.isValid && passwordInput.value.isValid) {
		console.log('success auth');
	}
};
</script>
