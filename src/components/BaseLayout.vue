<script setup lang="ts">
import { toRefs } from "vue";
import { useTitle } from "@vueuse/core";
import NavBar from "./NavBar.vue";
import PageFooter from "./PageFooter.vue";

const props = defineProps({
	title: {
		type: String,
		required: false,
		default: "Page",
	},
});

const { title } = toRefs(props);
useTitle(title);
</script>

<template>
	<div
		class="flex h-screen flex-col bg-white dark:bg-slate-900 text-black dark:text-slate-100 overflow-auto"
	>
		<nav-bar />
		<main class="grow">
			<slot name="content">
				<div>Placeholder</div>
			</slot>
		</main>
		<page-footer />
	</div>
</template>
