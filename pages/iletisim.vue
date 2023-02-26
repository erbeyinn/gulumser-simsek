<template>
  <div class="iletisim-container">
    <p class="iletisim-container-title">İletişim</p>
    <div class="iletisim-container-content">
      <div class="iletisim-container-cards">
        <div class="iletisim-container-card">
          <Whattsapp class="icon"/>
          <div class="flex flex-col w-1/2">
            <p class="font-bold">Telefon</p>
            <a href="https://api.whatsapp.com/send?phone=5301011695"
               class="text-sm text-[#048FCC] custom hover-underline-animation">+90 530 101 16 95</a>
          </div>

        </div>
        <div class="iletisim-container-card mt-8 sm:mt-0">
          <Mail class="icon"/>
          <div class="flex flex-col lg:w-1/2">
            <p class="font-bold">E-mail</p>
            <a href="mailto:av.gulumser.simsek@gmail.com"
               class="text-sm text-[#048FCC] text-justify hover-underline-animation">av.gulumser.simsek@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="iletisim-container-cards mt-8">
        <div class="iletisim-container-card">
          <div class="flex justify-center items-center">
            <World class="icon"/>
            <div class="flex flex-col w-8/12 lg:w-1/2 ">
              <p class="font-bold">Adres</p>
              <p class="text-sm text-justify"> Gülpınar Mahallesi, Atatürk Bulvarı, No: 20/ B Kat: 2 (Köyceğiz Noterliği
                karşısı) Köyceğiz/Muğla</p>
            </div>
          </div>

        </div>
        <div class="iletisim-container-card mt-8 sm:mt-0">
            <Phone class="icon"/>
            <div class="flex flex-col w-1/2">
              <p class="font-bold">Arama</p>
              <a href="tel:+905301011695" class="text-sm hover-underline-animation">+90 530 101 16 95</a>
            </div>

        </div>
      </div>
    </div>
    <iframe class="mt-10 w-3/4"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1624153.635094867!2d28.406008488335747!3d37.33836381956295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d37.7763369!2d30.5624468!4m5!1s0x14c07f5375368375%3A0xbd5b0734c900187e!2zYXZ1a2F0IGfDvGzDvG1zZXIgxZ9pbcWfZWs!3m2!1d36.958157799999995!2d28.688679999999998!5e0!3m2!1str!2str!4v1677421841605!5m2!1str!2str"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script setup>
import Whattsapp from '~/assets/svg/whatsapp.svg'
import Mail from '~/assets/svg/mail.svg'
import Phone from '~/assets/svg/phone.svg'
import World from '~/assets/svg/world.svg'
</script>

<style scoped>
.iletisim-container {
  @apply
  flex flex-col items-center
}

.iletisim-container-title {
  @apply
  font-bold text-5xl py-8
}

.iletisim-container-content {
  @apply
  flex flex-col items-center w-full
}

.iletisim-container-cards {
  @apply
  flex flex-col items-center gap-5
  sm:flex-row justify-around  w-full sm:w-3/4
}

.iletisim-container-card {
  @apply
  flex justify-center
  items-center text-justify
  bg-[#fafafa] w-10/12  lg:w-3/4
  sm:w-1/2 h-[150px]
  sm:h-[180px]
}

.icon {
  @apply
  w-10 h-10 mr-4
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
  cursor: pointer;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
