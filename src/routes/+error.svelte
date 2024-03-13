<script lang="ts">
  import { page } from '$app/stores';

  let errorMessage = $page.error?.message ?? "Unknown error";
</script>

<h1>{$page.status} {errorMessage}</h1>
<span></span>

