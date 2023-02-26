<template>
  <swiper
      class="mySwiper swiper-h"
      :spaceBetween="50"
      :pagination="{
      clickable: true,
    }"
      :loop="true"
      :modules="modules"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"

  >
    <swiper-slide>
      <div>
        <img class=" object-cover" src="~/assets/img/yazi1.jpeg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class=" object-cover" src="~/assets/img/yazi2.jpeg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class=" object-cover" src="~/assets/img/yazi3.jpeg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div>
        <img class=" object-cover" src="~/assets/img/yazi4.jpeg" alt="">
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { ref } from 'vue';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = ref([Autoplay, Pagination, Navigation])
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 50%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 780px) {
  .swiper {
    width: 100%;
    height: 100%;
  }
}

</style>
