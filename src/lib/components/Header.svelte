<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X } from 'lucide-svelte';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];
</script>

<header 
    class="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out {isScrolled ? 'glass-header shadow-sm' : 'bg-white/80'}"
>
  <nav class="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
    <div class="text-2xl font-bold tracking-tighter text-slate-800 font-headline">
      XR SUPPLY CHAIN
    </div>
    
    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8 font-headline font-medium tracking-tight ml-auto">
      {#each navLinks as link}
        <a 
          class="transition-colors {link.name === 'Home' ? 'text-slate-900 border-b-2 border-slate-500 pb-1' : 'text-slate-500 hover:text-slate-800'}" 
          href={link.href}
        >
          {link.name}
        </a>
      {/each}
    </div>

    <!-- Mobile Toggle -->
    <div class="md:hidden flex items-center ml-auto">
      <button 
        class="text-slate-800 p-2"
        onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
        aria-label="Toggle Menu"
      >
        {#if isMobileMenuOpen}
          <X size={28} />
        {:else}
          <Menu size={28} />
        {/if}
      </button>
    </div>
  </nav>

  <!-- Mobile Menu Overlay -->
  {#if isMobileMenuOpen}
    <div class="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="text-2xl font-headline font-bold text-slate-800"
          onclick={() => isMobileMenuOpen = false}
        >
          {link.name}
        </a>
      {/each}
      <div class="h-px bg-slate-100 my-2"></div>
      <a 
        href="#contact" 
        class="bg-primary text-on-primary text-center py-4 rounded-xl font-headline font-bold"
        onclick={() => isMobileMenuOpen = false}
      >
        Become a Partner
      </a>
    </div>
  {/if}
</header>
