<script setup lang="ts">
</script>
<template>
  <header class="w-full relative z-50">

    <div class="container-wrapper pt-8 pb-4 flex items-center justify-between group">

      <div class="flex items-center gap-4 cursor-pointer">
        <div class="relative w-10 h-10 flex-shrink-0" aria-hidden="true">
          <div class="logo-blob outer border-2 border-accent"></div>
          <div class="logo-blob inner bg-accent/20"></div>
        </div>

        <span class="font-700 text-24px tracking-tight transition-colors duration-300 group-hover:text-accent">
          Paula Gotor
        </span>
      </div>

      <nav class="flex items-center gap-6">
        <a href="#about" class="font-700 text-lg md:text-xl tracking-tight transition-colors duration-300 hover:text-accent cursor-pointer">
          about
        </a>

        <a href="#projects" class="font-700 text-lg md:text-xl tracking-tight transition-colors duration-300 hover:text-accent cursor-pointer">
          projects
        </a>
      </nav>

    </div>
  </header>
</template>

<style scoped>
.logo-blob {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  transition: all 0.3s ease-out;
}
.outer {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: spin-slow 12s linear infinite;
}
.inner {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  animation: spin-reverse 8s linear infinite;
}
.group:hover .outer {
  border-radius: 50%;
  transform: scale(1.1);
}
.group:hover .inner {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  transform: rotate(180deg);
}
@keyframes spin-slow {
  0% { transform: rotate(0deg); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  100% { transform: rotate(360deg); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
}
@keyframes spin-reverse {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}
@media (prefers-reduced-motion: reduce) {
  .outer, .inner {
    animation: none;
    transition: none;
    transform: none !important;
    border-radius: 50%;
  }
}
</style>