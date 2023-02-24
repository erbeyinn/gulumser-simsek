<template>
  <details class="drop-down-container">
    <summary class="drop-down-container-summary">
      Çalışma Alanlarımız<span class="arrow-down"><ArrowDown/> </span>
    </summary>
    <div class="drop-down-container-links">
      <nuxt-link to="/ceza-hukuku" class="drop-down-container-link">Ceza Hukuku</nuxt-link>
      <nuxt-link to="/aile-hukuku" class="drop-down-container-link">Aile Hukuku</nuxt-link>
      <nuxt-link to="/miras-hukuku" class="drop-down-container-link">Miras Hukuku</nuxt-link>
      <nuxt-link to="/gayrimenkul-hukuku" class="drop-down-container-link">Gayrimenkul Hukuku</nuxt-link>
      <nuxt-link to="/borclar-hukuku" class="drop-down-container-link">Borçlar Hukuku</nuxt-link>
      <nuxt-link to="/tazminat-hukuku" class="drop-down-container-link">Tazminat Hukuku</nuxt-link>
      <nuxt-link to="/ticaret-hukuku" class="drop-down-container-link">Ticaret Hukuku</nuxt-link>
      <nuxt-link to="/is-hukuku" class="drop-down-container-link">İş Hukuku</nuxt-link>
      <nuxt-link to="/icra-iflas-hukuku" class="drop-down-container-link">İcra İflas Hukuku</nuxt-link>
    </div>
  </details>
</template>

<script setup>
import ArrowDown from 'assets/svg/arrow-down.svg'
</script>

<style scoped>
.drop-down-container {
  @apply
  hidden lg:flex lg:px-4 cursor-pointer
}

.drop-down-container-summary{
  @apply
  flex
}
details {
  @apply
  relative
  select-none
}

.drop-down-container-summary::marker {
  @apply hidden
}

.drop-down-container-links {
  @apply
  flex flex-col items-center
  justify-around font-medium
  w-24 h-[300px] mt-6
  z-50 absolute bg-white
  scrollbar rounded-b-lg
}

details > .drop-down-container-summary > .arrow-down {
  @apply
  transition-all
  duration-500
  rotate-0
}

details[open] > .drop-down-container-summary:before {
  content: "";
  @apply
  fixed
  top-0 left-0
  right-0 bottom-0
  transition-all
}

details[open] > .drop-down-container-summary > .arrow-down {
  @apply
  transition-all
  duration-500
  rotate-180
}

details[open] > .drop-down-container-links {
  @apply
  absolute z-50
  w-56 h-72 -left-3
}

.arrow-down {
  @apply
  self-center
  cursor-pointer
  ml-2
}

::-webkit-scrollbar-thumb {
  @apply
  hidden
}
</style>
