<template>
   <div class="flex flex-col min-h-screen">
      <Header />
     <div class="grow mb-8">
      <slot/>
     </div>
      <Footer />
   </div>
</template>

<script setup>
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>

</style>
