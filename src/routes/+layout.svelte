<script>
  import '$lib/styles/global.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ContactModal from '$lib/components/ContactModal.svelte';
  import ApplyModal from '$lib/components/ApplyModal.svelte';
  
  let { children } = $props();
</script>

<Header />

<main>
  {@render children()}
</main>

<Footer />

<ContactModal />
<ApplyModal />

<style>
  main {
    min-height: calc(100vh - 200px);
  }
</style>
