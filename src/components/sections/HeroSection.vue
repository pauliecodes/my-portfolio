<script setup lang="ts">
</script>

<template>
  <section class="hero w-full relative overflow-hidden min-h-45vh flex items-center bg-slate-50 dark:bg-slate-950">

    <div class="container-wrapper relative z-10">
      <div class="max-w-2xl">
        <h1 class="font-display text-4xl sm:text-7xl md:text-8xl font-900 mb-8 tracking-tight text-primary relative">
          Hi, I'm
          <span class="relative inline-block text-accent">
            Paula.
            <svg class="absolute -bottom-2 left-0 w-full h-3 text-accent opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none" />
            </svg>
          </span>
        </h1>

        <div class="text-lg md:text-xl space-y-6 text-slate-700 dark:text-slate-300 max-w-lg">
          <p class="font-sans text-18px leading-relaxed">
            A frontend developer focused on UI development, system design, and
            <span class="font-bold bg-accent/20 px-1 rounded-sm">modern frontend technologies</span>.
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.font-display {
  font-variation-settings: "SOFT" 0, "WONK" 0;
  transition: font-variation-settings 0.5s ease;
}

.font-display:hover {
  font-variation-settings: "SOFT" 100, "WONK" 1;
}
</style>