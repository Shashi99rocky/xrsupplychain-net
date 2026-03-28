<script lang="ts">
  const categories = [
    {
      id: '01',
      title: 'Confectionery',
      description: "Vidal, Hershey's, and the finest Pick n Mix imports from across the globe.",
      image: '/images/cat-confectionery.webp',
      tags: ['Pick n Mix', 'American Candy']
    },
    {
      id: '02',
      title: 'Soft Drinks',
      description: 'Trending imports and exclusive labels that drive retail footfall.',
      image: '/images/cat-soft-drinks.webp',
      tags: ['Imported', 'Trending']
    },
    {
      id: '03',
      title: 'Hotel Chocolate',
      description: 'Authorized wholesale for the iconic Velvetiser systems and pods.',
      image: '/images/cat-hotel-chocolate.webp',
      tags: ['Premium Systems', 'Luxury Brands']
    },
    {
      id: '04',
      title: 'Artisanal Coffee',
      description: 'Single-origin beans and professional brewing equipment for the perfect cup.',
      image: '/images/cat-coffee.webp',
      tags: ['Single Origin', 'Brewing']
    },
    {
      id: '05',
      title: 'Syrups & Sauces',
      description: 'Elevate beverage menus with professional-grade culinary syrups.',
      image: '/images/cat-syrups.webp',
      tags: ['Mixology', 'Gourmet']
    },
    {
      id: '06',
      title: 'Infusion Kits',
      description: 'Innovation in flavor: rapid infusion kits for specialty bars.',
      image: '/images/cat-infusion.webp',
      tags: ['Rapid Infusion', 'New Arrival']
    }
  ];
</script>

<section class="bg-primary text-on-primary py-32 px-8 overflow-hidden" id="products">
  <div class="max-w-screen-2xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div class="max-w-2xl">
        <h2 class="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">CURATED <br/>CATEGORIES</h2>
        <p class="text-primary-container/80 text-lg leading-relaxed font-light">
          Discover a premium selection of high-demand products, sourced globally for the modern retailer and hospitality leader.
        </p>
      </div>
      <div class="hidden md:block">
        <span class="material-symbols-outlined text-8xl text-secondary-fixed/30 select-none">inventory_2</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each categories as category}
        <div class="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer">
          <img 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt={category.title} 
            src={category.image}
            loading="lazy"
            width="600"
            height="500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent p-10 flex flex-col justify-end">
            <div class="flex justify-between items-start mb-6">
              <span class="font-headline text-secondary-fixed font-bold text-xl">{category.id}</span>
              <span class="material-symbols-outlined text-3xl group-hover:rotate-45 transition-transform text-white">arrow_outward</span>
            </div>
            <h3 class="font-headline text-4xl font-bold mb-3 text-white">{category.title}</h3>
            <p class="text-primary-container/90 mb-6 max-w-sm font-medium">{category.description}</p>
            <div class="flex flex-wrap gap-2">
              {#each category.tags as tag}
                <span class="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-white">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
