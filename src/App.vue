<script setup lang="ts">
import Home from "./views/Home.vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <main class="w-full min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white">
    <Header />
    <Home />
    <Footer />
  </main>
</template>

<style>
body {
  background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
  background-size: 24px 24px;
}

@media (prefers-color-scheme: dark) {
  body {
    background-image: radial-gradient(#1e293b 1px, transparent 1px);
  }
}
</style>