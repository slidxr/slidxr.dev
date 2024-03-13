<script lang="ts">
	import Terminal from "./Terminal.svelte";
	import { page } from "$app/stores";
</script>

<div class="h-full w-full flex flex-row">
	<div class="hidden sm:inline flex flex-col w-1/4">
		<div class="h-1/2 border-b-2 border-border">
			<a
				aria-current={$page.url.pathname === "/skills"
					? "page"
					: undefined}
				href="/skills"
				class="red-slash flex justify-center">skills</a
			>
		</div>
		<div class="h-1/2">
			<a href="/" class="red-slash flex justify-center">test</a>
		</div>
	</div>
	<section
		class="m-auto sm:m-0 h-full w-1/2 z-10 flex border-x-2 border-border flex-col py-8 items-center"
		style="position: relative; z-index: 1;"
	>
		<Terminal />
	</section>
	<div class="hidden sm:inline flex flex-col w-1/4">
		<div class="h-1/2 border-b-2 border-border">
			<a href="/" class="red-slash flex justify-center">test</a>
		</div>
		<div class="h-1/2">
			<a href="/" class="red-slash flex justify-center">test</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.red-slash {
		color: lightgray;
	}

	.red-slash::before {
		content: "/";
		color: transparent;
		transition: color 0.4s;
	}

	.red-slash:hover::before,
	.red-slash[aria-current]::before {
		content: "/";
		color: theme(colors.accent);
	}
	.red-slash:hover {
		color: white;
	}
</style>
