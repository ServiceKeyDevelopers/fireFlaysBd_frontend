<script setup>
import { Banner } from "@/components";
import { ref, onMounted } from "vue";

// slider get data 
import { storeToRefs } from 'pinia';
// slider data fetch 
import {useSlider} from '@/stores'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);

// All Variable  Code Is Here.....................................................................................................


// slider data fetch 
const slider = useSlider();
const {sliders} = storeToRefs(slider)

onMounted(() => {
    slider.getData();
})

// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
  <div>
    <section class="home-section mb-2">
      <div class="row">
        <div class="col-md-12 col-xl-8 col-lg-12 mb-xl-0 mb-2">
          <swiper
            :slidesPerView="1"
            :sliderPerGroup="1"
            :loop="true"
            :pagination="{
              clickable: true,
            }"
            :autoplay="{
              delay: 2000,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(slider, index) in sliders.result" :key="index">
              <div class="home-slide home-slide1 banner">
                <img
                  class="slide-bg"
                  :src="slider.image"
                  alt="slider image"
                  style="background-color: #c0e1f2"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-md-12 col-xl-4 col-lg-12 d-sm-flex d-xl-block">
          <Banner />
          <!-- End .home-slide -->

          <Banner />
          <!-- End .home-slide -->
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
