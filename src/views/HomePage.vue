<script setup lang="ts">
import BaseLayout from "../components/BaseLayout.vue";
import {
	CurrencyDollarIcon,
	ChartBarSquareIcon,
	ArrowPathIcon,
} from "@heroicons/vue/24/solid";

const features = [
	{
		id: 1,
		title: "Create budgets",
		description:
			"Create budgets to organise your spending and follow your progress each pay period.",
		icon: CurrencyDollarIcon,
	},
	{
		id: 2,
		title: "Track your spending",
		description:
			"Track every transaction to see money coming in and going out.",
		icon: ChartBarSquareIcon,
	},
	{
		id: 3,
		title: "Recurring Trnasactions",
		description:
			"Create recurring transactions to spend less time logging repetitive transactions, and more time gaining insights.",
		icon: ArrowPathIcon,
	},
];
</script>

<template>
	<base-layout title="Dollarydoos">
		<template v-slot:content>
			<div class="flex flex-col gap-2">
				<section
					id="hero"
					class="bg-brand-primary overflow-clip px-4 h-[320px] md:h-[450px] pb-4"
				>
					<div>
						<h1 class="text-4xl font-bold">Dollarydoos</h1>
						<h2>Where every dollar does more!</h2>
					</div>
					<img
						src="../assets/hero.png"
						class="w-56 md:w-96 md:rotate-45 ml-28"
						alt="Dollarydoos Logo"
					/>
				</section>
				<section id="features" class="px-4 pb-4">
					<h2 class="text-2xl">Features</h2>
					<div class="flex flex-wrap">
						<div
							v-for="feature in features"
							:key="feature.id"
							class="w-full md:w-1/3 flex flex-col gap-2 items-center text-center pb-12 md:pb-4"
						>
							<h3 class="text-xl font-bold">
								{{ feature.title }}
							</h3>
							<p class="mb-4">
								{{ feature.description }}
							</p>
							<component
								:is="feature.icon"
								class="h-24 text-brand-primary dark:text-brand-secondary grow"
							/>
						</div>
					</div>
				</section>
				<section id="privacy" class="px-4 pb-4">
					<h2 class="text-2xl">Privacy</h2>
					<p>
						Privacy is important to us. So much so that we do not
						hold any user data. You can choose to use your personal
						iCloud storage to sync across devices. Alternatively,
						you can turn this off in your system settings, and store
						it locally on device.
					</p>
				</section>
				<section id="contact" class="px-4">
					<h2 class="text-2xl">Contact</h2>
					<p>
						Questions, suggestions, feedback? Contact us
						<a
							href="mailto:dollarydoos@marguarana.com"
							class="text-blue-600 dark:text-blue-400 visited:text-indigo-600 dark:visited:text-indigo-400 underline"
							>here</a
						>.
					</p>
				</section>
			</div>
		</template>
	</base-layout>
</template>
