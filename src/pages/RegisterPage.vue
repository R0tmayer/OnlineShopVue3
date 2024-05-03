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
				<MyFormInput labelText="Email" placeholderText="Email"></MyFormInput>
				<MyFormInput labelText="Password" placeholderText="Password"></MyFormInput>
				<MyFormInput
					labelText="Confirm password"
					placeholderText="Confirm password"
				></MyFormInput>
				<div class="flex items-center justify-between"></div>
				<BaseButton text="Register" class="justify-center p-2.5 rounded-xl"></BaseButton>
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
