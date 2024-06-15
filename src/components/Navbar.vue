<template>
	<div class="flex items-center">
		<div
			class="btn bg-transparent border-none shadow-none hover:bg-transparent flex basis-left items-center justify-center"
		>
			<FontAwesomeIcon
				:icon="faGamepad"
				size="2xl"
				color="mediumblue"
				class="mr-1"
			></FontAwesomeIcon>
			<div class="text-3xl mr-4">GamePlaza</div>
		</div>
		<label
			class="input input-bordered flex basis-center items-center gap-2 focus-within:outline-none"
		>
			<input type="text" class="grow" placeholder="Search" />
			<button>
				<FontAwesomeIcon :icon="faMagnifyingGlass"></FontAwesomeIcon>
			</button>
		</label>
		<div class="flex basis-right items-center justify-end gap-6">
			<div class="indicator">
				<span class="indicator-item badge badge-ghost">30</span>
				<div class="btn btn-neutral">
					<FontAwesomeIcon :icon="faCartShopping" size="lg"></FontAwesomeIcon>
				</div>
			</div>

			<div class="btn btn-primary border-none text-white text-md">Log in</div>
		</div>
	</div>
</template>

<script setup>
import {
	faCartShopping,
	faGamepad,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
