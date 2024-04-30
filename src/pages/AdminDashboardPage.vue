<template>
	<div class="flex space-x-5 justify-start">
		<!-- Sidebar -->
		<AdminSidebar></AdminSidebar>
		<!-- Main content -->
		<RouterView></RouterView>
	</div>
</template>

<script setup>
import AdminSidebar from '@/components/AdminSidebar.vue';
</script>
