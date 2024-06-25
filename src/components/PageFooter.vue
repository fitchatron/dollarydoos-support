<script setup lang="ts">
const YEAR = new Date().getFullYear();
</script>

<template>
	<div
		class="bg-brand-primary text-white flex place-content-center items-center h-20"
	>
		<small>Dollarydoos &copy; {{ YEAR }}</small>
	</div>
</template>
