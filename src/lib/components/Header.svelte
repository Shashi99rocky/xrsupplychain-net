<script lang="ts">
  import { onMount } from 'svelte';

  let isScrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header 
    class="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out {isScrolled ? 'glass-header shadow-sm' : 'bg-white/80'}"
>
  <nav class="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
    <div class="text-2xl font-bold tracking-tighter text-slate-800 font-headline">
      XR SUPPLY CHAIN
    </div>
    
    <div class="hidden md:flex items-center gap-8 font-headline font-medium tracking-tight ml-auto">
      <a class="text-slate-900 border-b-2 border-slate-500 pb-1" href="#home">Home</a>
      <a class="text-slate-500 hover:text-slate-800 transition-colors" href="#products">Products</a>
      <a class="text-slate-500 hover:text-slate-800 transition-colors" href="#about">About</a>
      <a class="text-slate-500 hover:text-slate-800 transition-colors" href="#contact">Contact</a>
    </div>

    <div class="flex items-center ml-6">
      <!-- Removed gap-6 since it is empty -->
    </div>
  </nav>
</header>
