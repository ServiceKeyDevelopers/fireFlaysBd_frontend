<script setup>
import { Banner } from "@/components";
import { ref, onMounted } from "vue";

// banner start here 
import {useBanner} from '@/stores'
// banner end  here 

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

// All Variable  Code Is Here.....................................................................................................
const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);

// banner part start
const banner = useBanner();
const banner1 = ref(''); 
const banner2 = ref(''); 
// banner part end


// All Function  Code Is Here.....................................................................................................

// banner part start

const getBanner = async() => {
  banner1.value =  await banner.getData('home-page-b1');
  banner2.value =  await banner.getData('home-page-b2');
}

// banner part end

// slider data fetch 
const slider = useSlider();
const {sliders} = storeToRefs(slider)

onMounted(() => {
    getBanner();
    slider.getData();
})
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
          <template v-if="banner1">
            <Banner :banner="banner1"/>
          </template>
          <template v-if="banner2">
            <Banner :banner="banner2"/>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
