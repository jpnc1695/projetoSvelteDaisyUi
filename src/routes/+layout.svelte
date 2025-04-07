<script lang="ts">
  import "../app.css";
  import { page } from '$app/state';
  import Footer from "$lib/componentes/Footer.svelte";
  import Header from "$lib/componentes/Header.svelte";

  $: pathname = page.url.pathname;
</script>

<div class="min-h-screen flex flex-col">
  {#if pathname !== "/login"}
    <Header />
  {/if}
  <main class="flex-grow">
    <slot />
  </main>
  {#if pathname !== "/login"}
    <Footer />
  {/if}
</div>
