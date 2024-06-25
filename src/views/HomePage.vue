<script setup lang="ts">
import BaseLayout from "../components/BaseLayout.vue";
</script>

<template>
	<base-layout title="Dollarydoos">
		<template v-slot:content>
			<section class="px-2 flex flex-col gap-2">
				<div id="hero">Hero</div>
				<div id="features">Features</div>
				<div id="privacy">Privacy</div>
				<div id="contact">Contact</div>
			</section>
		</template>
	</base-layout>
</template>
