<script setup lang="ts">
</script>
<template>
  <section class="hero flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[50vh] lg:min-h-60vh">
    <div class="max-w-2xl">
      <h1 class="text-2xl sm:text-3xl md:text-32px font-700 mb-4 md:mb-6 tracking-tight">
        Hi, I'm Paula.
      </h1>
      <div class="text-base sm:text-lg md:text-20px space-y-3 md:space-y-4 tracking-normal">
        <p>
          A frontend developer focused on UI development, system design, and modern frontend technologies,
          with a specialization in accessibility.
        </p>
        <p>
          I am passionate about building modern, accessible and scalable user interfaces.
        </p>
        <p class="italic">
          Putting the 'user' back in 'user interface'
        </p>
        <p class="text-sm text-gray-500">
          Because accessibility isn't optional, it's essential
        </p>
      </div>
    </div>
    <div class="flex-1 flex items-center lg:items-start lg:mt-12 justify-center relative min-h-[250px] lg:min-h-0">
      <div class="shape-float-1 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-2 border-black rounded-lg absolute"></div>
      <div class="shape-float-2 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-2 border-gray-400 rounded-lg"></div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float-1 {
  0%, 100% {
    transform: rotate(12deg) translateY(0) translateX(0);
  }
  50% {
    transform: rotate(20deg) translateY(-20px) translateX(15px);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: rotate(-6deg) translateY(0) translateX(0);
  }
  50% {
    transform: rotate(-14deg) translateY(20px) translateX(-15px);
  }
}

.shape-float-1 {
  animation: float-1 4s ease-in-out infinite;
  transform: rotate(12deg);
}

.shape-float-2 {
  animation: float-2 5s ease-in-out infinite;
  transform: rotate(-6deg);
}

@media (prefers-reduced-motion: reduce) {
  .shape-float-1,
  .shape-float-2 {
    animation: none;
  }
}
</style>