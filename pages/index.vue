<template>
  <div class="flex flex-col">
    <img class="w-full object-cover" src="~/assets/img/index-welcome-photo.jpg" alt="">
    <slider-swiper class="mt-10"/>
    <div class="flex flex-col w-full md:w-1/2 px-6 md:px-0 text-justify  mx-auto">
    <p class="mt-8">
      Avukatlık mesleği, insanlık tarihinin en eski ve itibarlı mesleklerinden birisidir. Avukatlar, siz isteseniz de size güncel mevzuata aykırı, illegal bir yönlendirme yapamazlar. Mesleki etikleri bunu gerektirir.
    </p>
    <p class="py-4">
      Hak arama özgürlüğünün teminatı konumunda bulunan avukatlık meslek mensupları, yargının üç önemli sacayağından birinin temsilcileri olarak, vatandaşların adalete olan güveninin korunmasında büyük rol oynamaktadırlar. Yargılama sürecinde hukuki yardıma ihtiyaç duyan vatandaşlar kendilerine vekil tayin ettikleri avukatlar vasıtasıyla problemlerine çözüm ararken hem kendilerini güvende hissetmekte hem de adalet terazisine olan inançlarını korumaktadırlar.
    </p>
    </div>
    <img src="~/assets/img/hakli-olmak.jpg" class="w-full md:w-1/2 mx-auto" alt="image">
    <div class="flex flex-col lg:flex-row w-full md:w-1/2 mx-auto justify-between mt-8">
      <img class="w-full lg:w-[32%]" src="~/assets/img/terazi.jpg" alt="">
      <img class="w-full lg:w-[32%] mt-4 lg:mt-0" src="~/assets/img/el-sikisma.jpg" alt="">
      <img class="w-full lg:w-[32%] mt-4 lg:mt-0" src="~/assets/img/tokmak.jpg" alt="">
    </div>
  </div>
  <div class="flex flex-col w-full md:w-1/2 text-justify px-6 md:px-0  mx-auto">
    <p class="mt-8">
      Web sitemizde bulunan tüm bilgi ve yazılar yalnızca hukuki konularla ilgili bilgilendirme amacı ile oluşturulmuş olup Avukatlık kanununa, Avukatlık mesleğinin gerektirdiği etik kurallara ve Türkiye Barolar Birliği’nin ilgili mevzuatına uygun olarak hazırlanmıştır. Bu sitede yer alan hukuki bilgiler reklam amacı taşımamaktadır.
    </p>
  </div>
</template>

<script setup>

import SliderSwiper from "~/components/SliderSwiper.vue";
</script>

<style scoped>

</style>
