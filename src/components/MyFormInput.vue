<template>
	<div class="flex flex-col">
		<label class="p-1" for="inputId">{{ labelText }}</label>
		<input
			type="text"
			id="inputId"
			class="border rounded-lg p-2"
			:placeholder="placeholderText"
		/>
	</div>
</template>

<script setup>
defineProps({
	labelText: String,
	placeholderText: String,
});
</script>
