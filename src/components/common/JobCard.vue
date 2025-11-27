<template>
  <article class="p-6 border border-gray-200 rounded-lg bg-white">
    <header class="mb-4">
      <div class="flex justify-between items-baseline">
        <h3 class="text-xl font-bold text-base">{{ title }}</h3>
        <span class="text-sm text-gray-500 font-mono">{{ date }}</span>
      </div>
      <div class="font-medium text-accent">{{ company }}</div>
    </header>

    <div class="text-gray-600 text-base leading-relaxed">
      <slot/>
    </div>
  </article>
</template>
<script setup lang="ts">
interface ExperienceProps {
  title: string
  company: string
  date?: string
}

withDefaults(defineProps<ExperienceProps>(), {
  date: 'Present'
})
</script>