<template>
	<div class="container mx-auto">
		<Navbar class="my-4"></Navbar>
		<div class="flex">
			<MainSidebarLeft class="flex-1 basis-left"></MainSidebarLeft>
			<MainSidebarCenter class="flex-1 basis-center"></MainSidebarCenter>
			<MainSidebarRight class="flex-1 basis-right"></MainSidebarRight>
		</div>
	</div>
</template>

<script setup>
import MainSidebarCenter from './components/MainSidebarCenter.vue';
import MainSidebarLeft from './components/MainSidebarLeft.vue';
import MainSidebarRight from './components/MainSidebarRight.vue';
</script>
