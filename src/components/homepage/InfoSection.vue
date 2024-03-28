<script setup>
import { ref, onMounted } from "vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);
</script>

<template>
  <div>
    <swiper
      :slidesPerView="3"
      :sliderPerGroup="3"
      :loop="true"
      :autoplay="{
        delay: 2000,
      }"
      :modules="modules"
      class="mySwiper"
      :breakpoints="{
        [425 - 320]: { slidesPerView: 1, spaceBetweenSlides: 20 },
        768: { slidesPerView: 2, spaceBetweenSlides: 30 },
        800: { slidesPerView: 3, spaceBetweenSlides: 30 },
      }"
    >
      <swiper-slide>
        <div class="info-boxes-slider">
          <div class="info-box info-box-icon-left">
            <i class="icon-shipping mr-3 pr-2"></i>

            <div class="info-box-content">
              <h4 class="pt-1">Free Shipping and Returns</h4>
            </div>
            <!-- End .info-box-content -->
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="info-boxes-slider">
          <div class="info-box info-box-icon-left">
            <i class="icon-shipping mr-3 pr-2"></i>

            <div class="info-box-content">
              <h4 class="pt-1">Free Shipping and Returns</h4>
            </div>
            <!-- End .info-box-content -->
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="info-boxes-slider">
          <div class="info-box info-box-icon-left">
            <i class="icon-shipping mr-3 pr-2"></i>

            <div class="info-box-content">
              <h4 class="pt-1">Free Shipping and Returns</h4>
            </div>
            <!-- End .info-box-content -->
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style></style>
