<template>
	<div class="flex flex-col border rounded-2xl p-5 text-lg space-y-5 h-full">
		<RouterLink :to="{ name: 'adminOrderListPage' }" class="inline-flex space-x-2">
			<ReceiptPercentIcon class="w-6 h-6"></ReceiptPercentIcon>
			<div>Orders</div>
		</RouterLink>
		<RouterLink :to="{ name: 'adminProductListPage' }" class="inline-flex space-x-2">
			<ShoppingCartIcon class="w-6 h-6"></ShoppingCartIcon>
			<div>Products</div>
		</RouterLink>
		<RouterLink :to="{ name: 'adminUserListPage' }" class="inline-flex space-x-2">
			<UserIcon class="w-6 h-6"></UserIcon>
			<div>Users</div>
		</RouterLink>
		<RouterLink :to="{ name: 'adminRoleListPage' }" class="inline-flex space-x-2">
			<TrashIcon class="w-6 h-6"></TrashIcon>
			<div>Roles</div>
		</RouterLink>
	</div>
</template>

<script setup></script>
