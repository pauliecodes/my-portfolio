<script setup lang="ts">
import JobCard from "../common/JobCard.vue";

const experiences = [
  {
    title: 'Software Developer & Accessibility Officer',
    company: 'CODIN IT GmbH',
    date: '01.2025 — Present',
    description: [
      'Architected a Vue.js Monorepo using a Micro-frontend strategy to orchestrate multiple apps within a unified platform.',
      `Lead a project's migration strategy from legacy Vue 2 to Vue 3, significantly reducing technical debt.`,
      'Enforcing UI/UX best practices and establishing accessibility (a11y) standards across projects.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Bartels-Langness Handelsgesellschaft mbH & Co. KG',
    date: '09.2024 — 10.2024',
    description: 'Engineered high-performance internal tools using React and Next.js. Implemented complex server-state management using TanStack Query to optimize data fetching and application responsiveness.'
  },
  {
    title: 'Software Developer Apprentice',
    company: 'lambda9 GmbH',
    date: '2021 — 2024',
    description: 'Completed comprehensive training in full-stack software development. Gained hands-on experience in building, testing, and deploying web applications while collaborating with senior developers to deliver client solutions.'
  }
];
</script>

<template>
  <section class="py-4 px-4">

    <div class="max-w-3xl mx-auto mb-16 relative">
      <h2 class="font-display font-900 text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight relative z-10">
        Experience
        <span class="text-accent">.</span>
      </h2>

      <svg class="absolute -bottom-4 left-0 w-32 h-4 text-accent" viewBox="0 0 100 15" preserveAspectRatio="none">
        <path d="M0 5 Q 20 15 40 5 T 80 5 T 120 5" fill="none" stroke="currentColor" stroke-width="3"
              stroke-linecap="round"/>
      </svg>
    </div>

    <div class="relative max-w-3xl mx-auto">

      <div
          class="absolute left-4 sm:left-[-24px] top-4 bottom-0 w-px border-l-2 border-dashed border-slate-200 dark:border-slate-800"
          aria-hidden="true"
      ></div>

      <ol class="space-y-12 relative">
        <li
            v-for="(job, index) in experiences"
            :key="index"
            class="reveal-on-scroll group/timeline-item relative pl-12 sm:pl-8"
        >

          <div
              class="
              absolute left-[11px] sm:left-[-29px] top-8
              w-3 h-3
              bg-white dark:bg-slate-900
              border-2 border-accent
              rounded-full
              z-10
              transition-all duration-300
              group-hover/timeline-item:scale-150
              group-hover/timeline-item:bg-accent
              group-hover/timeline-item:shadow-[0_0_15px_rgba(var(--accent-rgb),0.6)]
            "
              aria-hidden="true"
          ></div>

          <JobCard
              :title="job.title"
              :company="job.company"
              :date="job.date"
              :description="job.description"
          >
          </JobCard>

        </li>
      </ol>

      <div
          class="absolute left-[10px] sm:left-[-30px] bottom-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800"></div>

    </div>
  </section>
</template>

<style scoped>
.reveal-on-scroll {
  animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-timeline: view();
  animation-range: entry 10% cover 20%;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>