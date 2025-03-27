<script>
    import "../app.css";
    import Footer from "$lib/componentes/Footer.svelte";
    import Header from "$lib/componentes/Header.svelte";
  </script>
  
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
 
