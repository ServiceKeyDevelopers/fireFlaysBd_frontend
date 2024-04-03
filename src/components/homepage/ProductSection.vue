<script setup>
import { Banner, ProductCard } from "@/components";
import { ref, onMounted } from "vue";
import { storeToRefs } from 'pinia';
import {useSection} from '@/stores'


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// section start 
const section = useSection();
const {sections} = storeToRefs(section);
// section end

const newSlide = ref([Navigation]);
const modules  = ref([Pagination, Autoplay]);

onMounted(() => {
  section.getData();
})
</script>

<template>
  <div>
    <section class="products-container" v-for="(section, index) in sections" :key="index">
      <div class="heading d-flex align-items-center">
        <h2 class="text-transform-none mb-0">{{ section.title }}</h2>
        <a class="d-block view-all ml-auto" href="demo40-shop.html"
          >View All<i class="fas fa-chevron-right"></i
        ></a>
      </div>

      <swiper
        :slidesPerView="6"
        :sliderPerGroup="6"
        :loop="true"
        :autoplay="{
          delay: 2000,
        }"
        :modules="modules"
        class="mySwiper"
        :breakpoints="{
          [425 - 320]: { slidesPerView: 2, spaceBetweenSlides: 20 },
          768: { slidesPerView: 3, spaceBetweenSlides: 30 },
          1024: { slidesPerView: 4, spaceBetweenSlides: 30 },
          1200: { slidesPerView: 6, spaceBetweenSlides: 30 },
        }"
      >
        <swiper-slide  v-for="(product, index) in section.section_details" :key="index">
          <ProductCard :product="product.products"/>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<style></style>
