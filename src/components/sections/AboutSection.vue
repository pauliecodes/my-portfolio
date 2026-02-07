<template>
  <section class="py-24 px-4 relative">

    <div class="max-w-4xl mx-auto mb-16 relative">
      <h2 class="font-display font-900 text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight relative z-10 mb-2">
        About
        <span class="text-accent">.</span>
      </h2>
      <svg class="w-24 h-2 text-accent" viewBox="0 0 100 15" preserveAspectRatio="none">
        <path d="M0 5 Q 20 15 40 5 T 80 5 T 120 5" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
      </svg>
    </div>

    <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

      <div class="lg:col-span-7 space-y-6">
        <p class="text-slate-600 dark:text-slate-300 font-sans text-lg leading-relaxed">
          I am a frontend developer and accessibility officer who bridges the gap between
          <span class="font-bold bg-accent/20 px-1 rounded-sm text-slate-700">polished user interfaces</span>
          and <span class="font-bold bg-accent/20 px-1 rounded-sm text-slate-700">powerful developer tooling</span>.
        </p>

        <p class="text-slate-600 dark:text-slate-300 font-sans text-lg leading-relaxed">
          My philosophy is simple:
          <span class="italic text-slate-600 dark:text-slate-200">
            Great software requires effortless usability for the user, and an enjoyable workflow for the developer.
          </span>
        </p>

        <p class="text-slate-600 dark:text-slate-300 font-sans text-lg leading-relaxed">
          I thrive in the deep end of the ecosystem. Whether it's crafting custom
          <code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-accent font-mono text-sm">Vue</code>
          plugins or optimizing build chains, I love building the tools that make shipping features easier.
        </p>

        <p class="text-slate-600 dark:text-slate-300 font-sans text-lg leading-relaxed">
          I am passionate about turning complex ideas into lightweight, highly-usable applications that are resilient, performant, and fundamentally accessible to everyone.
        </p>
      </div>

      <div class="lg:col-span-5 flex flex-col gap-6">

        <div class="group pl-6 border-l-2 border-slate-200 dark:border-slate-800 hover:border-accent transition-colors duration-300">
          <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-accent transition-colors">
            <span>Accessibility Officer</span>
            <span class="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-wider font-bold">Role</span>
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            It’s not just about fixing bugs; it’s about systemic change. I help teams build the internal processes and culture required to uphold accessibility standards from day one, ensuring no user is left behind.
          </p>
        </div>

        <div class="group pl-6 border-l-2 border-slate-200 dark:border-slate-800 hover:border-accent transition-colors duration-300">
          <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-accent transition-colors">
            Tooling & DX
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            I believe in the power of Developer Experience. I enjoy writing custom composables, configuring strict typing, and refining the local dev environment to remove friction and prevent errors before they ship.
          </p>
        </div>

        <div class="group pl-6 border-l-2 border-slate-200 dark:border-slate-800 hover:border-accent transition-colors duration-300">
          <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-accent transition-colors">
            Creative Engineering
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            I bridge the gap between design and code. I implement fluid animations and micro-interactions that bring applications to life, ensuring that visual "wow" moments never come at the cost of performance or accessibility.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>