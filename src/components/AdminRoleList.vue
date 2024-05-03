<template>
	<BaseAdminList context="role" :columns="columns" :items="roles">
		<template v-slot:editModalContent>
			<div class="flex flex-col space-y-3">
				<MyFormInput labelText="Name" placeholderText="Name"></MyFormInput>
			</div>
		</template>
	</BaseAdminList>
</template>

<script setup>
import { roles } from '@/mocks/roles';
const columns = ['name', ''];
</script>
