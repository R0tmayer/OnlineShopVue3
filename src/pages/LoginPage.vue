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
				<MyFormInput labelText="Email" placeholderText="Email"></MyFormInput>
				<MyFormInput labelText="Password" placeholderText="Password"></MyFormInput>
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-3 ms-1">
						<input id="remember" type="checkbox" class="cursor-pointer w-4 h-4" />
						<label for="remember" class="cursor-pointer">Remember me</label>
					</div>
					<RouterLink :to="{ name: 'forgotPasswordPage' }">
						<p class="text-blue-600 hover:text-blue-700">Forgot password?</p>
					</RouterLink>
				</div>
				<MyButton text="Sign in" class="justify-center p-2.5 rounded-xl"></MyButton>
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
