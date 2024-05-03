<template>
	<BaseAdminList context="role" :columns="columns" :items="roles">
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput labelText="Name" placeholderText="Name"></BaseFormInput>
			</div>
		</template>
		<template v-slot:addModalContent>
			<div class="flex flex-col space-y-3">
				<BaseFormInput labelText="Name" placeholderText="Name"></BaseFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { roles } from '@/mocks/roles';
const columns = ['name', ''];
</script>
