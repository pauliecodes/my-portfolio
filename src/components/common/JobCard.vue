<template>
  <article
      class="
      group relative
      p-6 sm:p-8
      bg-white dark:bg-slate-900
      border-2 border-slate-900/10 dark:border-white/10
      rounded-2xl
      transition-all duration-300 ease-out
      hover:border-accent hover:-translate-y-1
      hover:shadow-[8px_8px_0px_0px_#dd1188]
      focus-within:border-accent focus-within:-translate-y-1
      focus-within:shadow-[8px_8px_0px_0px_#dd1188]
    "
  >
    <header class="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
      <div>
        <h3 class="text-22px font-display font-800 tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-accent">
          {{ title }}
        </h3>

        <div class="text-lg font-medium text-slate-600 dark:text-slate-400 mt-1">
          <span class="text-accent font-display italic">@</span> {{ company }}
        </div>
      </div>

      <span class="
        inline-flex items-center
        px-3 py-1
        rounded-full
        border border-slate-200 dark:border-slate-700
        bg-slate-50 dark:bg-slate-800
        text-xs font-mono font-bold uppercase tracking-wider
        text-slate-500 dark:text-slate-400
      ">
        {{ date }}
      </span>
    </header>

    <div class="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-sans">

      <ul v-if="Array.isArray(description)" class="list-disc pl-5 space-y-2 marker:text-accent">
        <li v-for="(item, index) in description" :key="index">
          {{ item }}
        </li>
      </ul>

      <p v-else-if="description">
        {{ description }}
      </p>

      <slot v-else />

    </div>
  </article>
</template>

<script setup lang="ts">
interface ExperienceProps {
  title: string
  company: string
  date?: string
  description?: string | string[]
}

withDefaults(defineProps<ExperienceProps>(), {
  date: 'Present'
})
</script>

<style scoped>
.title-morph {
  font-variation-settings: "SOFT" 0, "WONK" 0;
  transition: font-variation-settings 0.3s ease;
}

.group:hover .title-morph {
  font-variation-settings: "SOFT" 50, "WONK" 1;
}

@media (prefers-reduced-motion: reduce) {
  article {
    transform: none !important;
    box-shadow: none !important;
    transition: none !important;
  }

  .title-morph {
    font-variation-settings: "SOFT" 0, "WONK" 0 !important;
  }
}
</style>