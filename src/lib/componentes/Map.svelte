<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import type { Map } from "maplibre-gl";
  import maplibregl from "maplibre-gl";

  let mapContainer!: HTMLDivElement; // Definite assignment assertion
  let map: Map;

  onMount(async () => {
    if (!browser) return;

    const maplibregl = await import("maplibre-gl");
    await import("maplibre-gl/dist/maplibre-gl.css");

    map = new maplibregl.Map({
      container: mapContainer,
      style: "https://demotiles.maplibre.org/style.json",
      center: [-74.5, 40],
      zoom: 5,
    });

    // ... restante do código
  });

  onDestroy(() => {
    map?.remove();
  });
</script>

<div class="map-wrapper">
  <div class="map-container" bind:this={mapContainer} />
</div>

<style>
  .map-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }

  .map-container {
    width: 80%; /* Largura reduzida para 80% do container pai */
    height: 400px; /* Altura reduzida */
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
    max-width: 800px; /* Largura máxima */
  }
</style>
