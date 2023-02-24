<template>
  <div class="header-container ">
    <div class="header-container-content">
      <nuxt-link to="/" class="grow">
        <div class="header-container-contents-brand">
          <img class="w-16 h-16" src=~/assets/img/logo.jpg alt="">
          <p class="font-bold ml-2">Av. Gülümser Şimşek</p>
        </div>
      </nuxt-link>
      <div class="header-container-content-links">
        <div class="flex lg:hidden w-12 h-12" v-show="!show"  @click="openMenu">
          <HambugerMenu />
        </div>
        <div class="flex items-center lg:hidden  w-12 h-12" v-show="show" @click="closeMenu">
          <Cross />
        </div>
        <div class="header-container-hamburger-menu hidden" :class="{'open': show}">
          <nuxt-link to="/" class="header-container-content-link">Anasayfa</nuxt-link>
          <nuxt-link to="/hakkimizda" class="header-container-content-link">Hakkımızda</nuxt-link>
          <dropdown-menu class="header-container-content-link"/>
          <responsive-dropdown-menu class="header-container-content-link"/>
          <nuxt-link to="/iletisim" class="header-container-content-link">İletişim</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DropdownMenu from "~/components/Header/DropdownMenu.vue";
import HambugerMenu from 'assets/svg/hamburger-menu.svg'
import Cross from 'assets/svg/cross.svg'
import ResponsiveDropdownMenu from "~/components/Header/ResponsiveDropdownMenu.vue";

const show = ref(false)
const route = useRoute()
watch(
    () => route.path,
    async () => {
      show.value = !show.value
      const body = document.querySelector('body')
      body.style.overflow = 'auto'
    }
)

const openMenu = () => {
  show.value = !show.value
  const element = document.querySelector('body')
  if (show.value) {
    element.classList.add('overflow-hidden')
  } else {
    element.classList.remove('overflow-hidden')
  }
  console.log('kimi aradın')
}
const closeMenu = () => {
  show.value = false
  const element = document.querySelector('body')
  element.classList.remove('overflow-hidden')
  console.log('seni aradım')

}

</script>

<style scoped>
.header-container {
  @apply
  flex flex-col
  items-center
  justify-center
  bg-white border border-b-[#cccccc]
}

.header-container-content {
  @apply
  container flex justify-between
  items-center py-2 px-4
  relative lg:static
}

.header-container-contents-brand {
  @apply
  flex items-center
}

.header-container-content-links {
  @apply
  flex items-center
  justify-end
  md:grow border-t-[#cccccc] lg:border-none
}

.header-container-content-link {
  @apply
  p-4 lg:py-0
}

.header-container-hamburger-menu {
  @apply
  hidden lg:flex flex-col lg:flex-row lg:justify-between
  font-semibold lg:flex top-[101%] right-0
  absolute lg:static left-[50%] bg-white lg:bg-none
  z-50 lg:w-auto text-center
}
.close{
  @apply
  hidden
}
.open{
  @apply
  flex
}

@media screen and (max-width: 1024px) {
  .header-container-hamburger-menu {
    height: calc(100vh - 4rem);
    width: 100vw;
    transform: translate(-50%);
  }
}

</style>
