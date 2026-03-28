<script lang="ts">
    import { Quote } from 'lucide-svelte';
</script>

<section id="testimonials" class="py-spacing-24 bg-primary text-white overflow-hidden relative">
    <!-- Subtle Pattern Overlap -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
            <div>
                <span class="text-secondary font-bold uppercase tracking-widest text-xs mb-6 inline-block">Client Success</span>
                <h2 class="text-display-lg mb-8 leading-tight">
                    Trusted by <br />
                    <span class="text-primary-container italic">Global Leaders.</span>
                </h2>
                <p class="text-primary-container/60 text-lg leading-relaxed max-w-md font-body">
                    We've redefined supply chain excellence for brands that demand nothing less than perfection.
                </p>
            </div>

            <div class="relative">
                <!-- Immersive Testimonial Card -->
                <div class="bg-white/5 backdrop-blur-xl p-12 rounded-[40px] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
                    <Quote class="text-secondary absolute -top-4 -left-4 opacity-20" size={160} />
                    
                    <div class="relative z-10">
                        <p class="text-2xl md:text-3xl font-display font-medium leading-relaxed italic mb-10">
                            "XR Supply Chain didn't just optimize our routes; they transformed our entire distribution philosophy. Their editorial approach to data is revolutionary."
                        </p>
                        
                        <div class="flex items-center gap-6">
                            <div class="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center text-secondary font-bold text-xl">
                                AB
                            </div>
                            <div>
                                <p class="text-xl font-bold font-display">Alexander Bennett</p>
                                <p class="text-sm uppercase tracking-widest text-primary-container/50 font-bold">Director of Global Logistics, Epicure Group</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Floating Accent Tonal Layer -->
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            </div>
        </div>
    </div>
</section>
