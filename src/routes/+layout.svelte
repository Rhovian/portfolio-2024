<script>
  import "../app.css";
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <slot />
  </main>
  <Footer />
</div>
