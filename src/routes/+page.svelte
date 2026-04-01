<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Xr Supply Chain Inc | Curated Logistics & Distribution</title>
  <meta name="description" content="Premier Wholesale Partner. Redefining curated logistics with an editorial approach to supply chain excellence." />
</svelte:head>

<main>
  <Header />
  <Hero />
  <Services />
  <About />
  <Contact />
  <Footer />
</main>
