<template>
	<div class="text-3xl text-center mb-3">Checkout</div>
	<div class="flex space-x-5">
		<div class="flex flex-col w-1/2 space-y-1 border p-10 rounded-2xl bg-slate-50">
			<MyFormInput labelText="First name" placeholderText="First name"></MyFormInput>
			<MyFormInput labelText="Last name" placeholderText="Last name"></MyFormInput>
			<MyFormInput labelText="Email" placeholderText="Email"></MyFormInput>
			<MyFormInput labelText="Country" placeholderText="Country"></MyFormInput>
			<MyFormInput labelText="City" placeholderText="City"></MyFormInput>
			<MyFormInput labelText="Street" placeholderText="Street"></MyFormInput>
			<MyFormInput labelText="Postcode" placeholderText="Postcode"></MyFormInput>
		</div>
		<!-- Subtotal -->
		<div
			class="flex flex-col w-1/2 border rounded-2xl border-gray-200 p-10 h-full space-y-5"
		>
			<div class="inline-flex justify-between text-lg">
				<p>Total:</p>
				<p>$100</p>
			</div>
			<hr />
			<RouterLink :to="{ name: 'checkoutPage' }">
				<BaseButton
					text="PAY"
					:icon="CreditCardIcon"
					class="p-4 w-full bg-gray-800 hover:bg-gray-900"
				></BaseButton>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import { CreditCardIcon } from '@heroicons/vue/24/outline';
</script>
