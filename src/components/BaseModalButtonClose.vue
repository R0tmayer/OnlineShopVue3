<template>
	<BaseButton :icon="XMarkIcon" :color="buttonColors.white"></BaseButton>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';

import { buttonColors } from '@/ButtonColors';
</script>
