<template>
	<div class="flex flex-col border rounded-md p-5 text-lg space-y-5 h-full">
		<RouterLink :to="{ name: 'adminProductListPage' }" class="inline-flex space-x-2">
			<CartIcon></CartIcon>
			<div>Products</div>
		</RouterLink>
		<RouterLink :to="{ name: 'adminUserListPage' }" class="inline-flex space-x-2">
			<UserIcon></UserIcon>
			<div>Users</div>
		</RouterLink>
		<RouterLink :to="{ name: 'adminRoleListPage' }" class="inline-flex space-x-2">
			<TrashIcon></TrashIcon>
			<div>Roles</div>
		</RouterLink>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
