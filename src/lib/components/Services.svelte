<script lang="ts">
  const categories = [
    {
      id: '01',
      title: 'Confectionery',
      description: "Vidal, Hershey's, and the finest Pick n Mix imports from across the globe.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDshnXenGyloWwRahm2qSrZsCISvULWTKuQ-Hs-0Pa_lj3r0vIf2m0m8aR0v4Upcn9Xs0CnVdnSvlJZUsgqs8hst_vjrb9tayPQ1dUx7_hUtInlqnrWR-Kju4kXzk9j7hnoPa4z054u19psCI2BVsDOe247nK9oiTeC6lXjLJtRtgmoiGoXgER0jHTKtnZmqCyH8n_AQVOjM6Tqiu4T2o3ACzfkDIDf5h1DA2pI5GSlafJcCPsRdR4ASSenJhl4YpnRvpIwISm-iwk',
      tags: ['Pick n Mix', 'American Candy']
    },
    {
      id: '02',
      title: 'Soft Drinks',
      description: 'Trending imports and exclusive labels that drive retail footfall.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwai3BtVZwiuUojQDZFWsd5JvX3CRZ3luEW5PeCqhcBi-VqoegGOBwzzmqfZ9vwVCkIw2KuiNnJEG3h2bwx6qAZsQzFqE7q4vbvAiBTEbDlg3zF67vXeCRAegmYA-gF81vok77wfip2UwYoCE9LMU6LazZemX-2Xy3G2GYpRtWNRVjClooh-pceoZa5new4m5n-I-QvrPKeBZdOAGHvNKL1aIEdEEeoihPlnIvGNSrPuLYqYIJqj93puHzl3dL8F93zc5e07abpNE',
      tags: ['Imported', 'Trending']
    },
    {
      id: '03',
      title: 'Hotel Chocolate',
      description: 'Authorized wholesale for the iconic Velvetiser systems and pods.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNhApoiNEceLsOhiExKjWW7V1R-usYugS3Zz-w_mi59gl2BeaNX1T_O5ITtw1bYlQr98-rsZGuEnXoHxDggqoa-0Z8S96AMih_raosKENSd7ZX1vr570htB6XFLHQS1lNqriCLYnVPekHGYcpWT4cDoDrjrqU5miPLhGvJ4DKFEQUeyOW26c1iwNEwY5VLSOc_mCk-2210Jh-rDCFPYP4_p7epFM5oPNaMhIVyYlFWQlHtgAgBYX-EV60a4ls4AvSUdBe1FKl3iPo',
      tags: ['Premium Systems', 'Luxury Brands']
    },
    {
      id: '04',
      title: 'Artisanal Coffee',
      description: 'Single-origin beans and professional brewing equipment for the perfect cup.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHX1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7fX_X1X_V-7f',
      tags: ['Single Origin', 'Brewing']
    },
    {
      id: '05',
      title: 'Syrups & Sauces',
      description: 'Elevate beverage menus with professional-grade culinary syrups.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADzblzAwNq69QZ8DKjh9m-h5ub_UAc_Rmp8iTA4iEe0VqdcQUB-JuXjtWlJ93hUDSoG0avdT-WVslpBR6omInWd-CwtL71UQQOVla6UXQVTJ0Q4_DMkkqeQI5vi_RmaEOxKvar8JkaZ6jmQocrXo4FVpC0OsBmqGWT3pvc36gkveZgjK1rdMxBGY0Wq6cZpNdpcpI164u9LJHadC_2WiiEw6Wrwkcwxgp3r3KaS8SG6Na6uANaY79MAqJ_spsV5lpM_9NvtPbhzls',
      tags: ['Mixology', 'Gourmet']
    },
    {
      id: '06',
      title: 'Infusion Kits',
      description: 'Innovation in flavor: rapid infusion kits for specialty bars.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsd-k6JsGLuXt_mQk6NBYDp7qgsY2GxhKYY_vKOg7PbCMhezdJ7Gggg6MFeaaAs7h-BXAUydxICpWZ-Cx3pIXCBXe3YeXMw3sTnccqFgklmht8YKZhp4esPiXWFbe3LWYHjfOGZEGD-wnOYQ0ASnNcXh1_bP04imY4-PgVU02ptUY5CUo0hhwV_AVhZ8TQkwYgbrNAjMYaSAo3xBVh0sVToCQO832i0cH3YEoePLTRDu1aoKKaFrMPPqCS61TBuYQLOqEjC5ohYp4',
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
