<template>
	<div class="flex mt-20">
		<div class="">
			<img src="/src/assets/images/LoginImage.jpg" alt="no image found" class="" />
		</div>
		<div class="border bg-slate-50 rounded-2xl max-w-[500px] w-full shadow-lg h-full">
			<div class="p-10 flex flex-col space-y-3">
				<p class="text-2xl tracking-tight text-gray-900 text-center">
					Sign in to your account
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
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-3 ms-1">
						<input id="remember" type="checkbox" class="cursor-pointer w-4 h-4" />
						<label for="remember" class="cursor-pointer">Remember me</label>
					</div>
					<RouterLink :to="{ name: 'forgotPasswordPage' }">
						<p class="text-blue-600 hover:text-blue-700">Forgot password?</p>
					</RouterLink>
				</div>
				<BaseButton
					text="Sign in"
					class="justify-center p-2.5 rounded-xl"
					@click="auth"
				></BaseButton>
				<div class="inline-flex space-x-2">
					<p>Don't have an account?</p>
					<RouterLink :to="{ name: 'registerPage' }">
						<p class="text-blue-600 hover:text-blue-700">Register new account</p>
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

const auth = () => {
	emailInput.value.validate();
	passwordInput.value.validate();

	if (emailInput.value.isValid && passwordInput.value.isValid) {
		console.log('success auth');
	}
};
</script>
