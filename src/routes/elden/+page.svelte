<script lang="ts">
  import { onMount } from 'svelte';

  let deathStat: number = 0;

  const handleClick = () => {
    deathStat += 1;
    localStorage.setItem('deathStat', deathStat.toString());
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('deathStat');
      deathStat = storedValue ? parseInt(storedValue, 10) : 0;
    }
  });
</script>

<div class="flex flex-col items-center pt-24">
  <h1 class="font-pixel pb-12 text-5xl">DEATH COUNTER: {deathStat}</h1>
  <button class="border-4 p-4 rounded-md" on:click={handleClick}>
    YOU DIED
  </button>
</div>

