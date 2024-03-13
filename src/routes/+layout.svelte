<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
</script>

<Header />
<main class="flex h-4/5 border-x-2 border-border mx-12 sm:mx-16 lg:mx-24">
	<slot />
</main>
<Footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.black);
		color: theme(colors.white);
		font-family: "Fira Code";
	}
	
	:global(body) {
		height: 100dvh;
	}

</style>
