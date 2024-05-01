<template>
	<div class="flex space-x-5 justify-start">
		<!-- Sidebar -->
		<AdminSidebar></AdminSidebar>
		<!-- Children router content -->
		<div class="flex-grow min-h-[600px]">
			<RouterView></RouterView>
		</div>
	</div>
</template>

<script setup>
import AdminSidebar from '@/components/AdminSidebar.vue';
</script>
