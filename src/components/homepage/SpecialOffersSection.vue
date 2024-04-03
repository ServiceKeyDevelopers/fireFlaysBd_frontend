<script setup>
import {  ProductCard } from "@/components";
import { ref, onMounted } from "vue";
import {useProduct} from '@/stores'
import { storeToRefs } from 'pinia';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const product = useProduct();
const {products} = storeToRefs(product)
const newSlide = ref([Navigation]);
const modules  = ref([Pagination, Autoplay]);

onMounted(() => {
    product.getData();
})
</script>

<template>
  <div>
    <section class="products-container products-section-with-border">
      <div class="heading d-flex align-items-center">
        <h2 class="d-flex align-items-center text-transform-none mb-0">
          <i></i>Special Offers
        </h2>
        <a class="d-block view-all ml-auto mt-0" href="demo40-shop.html"
          >View All<i class="fas fa-chevron-right"></i
        ></a>
      </div>

      <swiper
        :slidesPerView="6"
        :sliderPerGroup="6"
        :space-between="30"
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
        <swiper-slide v-for="(products, index) in products.data" :key="index">
          <ProductCard :product="products"/>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<style></style>
