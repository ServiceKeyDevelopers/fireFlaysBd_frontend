<script setup>
import { ref, onMounted } from "vue";
import {Header, Sidebar, Footer, MobileMenu, StickyNavber, Modal, BannerSection, InfoSection, FeatureSection, PopularSection, ProductSection, SpecialOffersSection, } from "@/components";

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
    <div class="main-content">

      <BannerSection />

      <!-- banner end -->

      <InfoSection />

      <!-- Info Box End -->

      <FeatureSection />

      <!-- Featured Items End -->

      <PopularSection />

      <!-- Popular Departments section -->

      <ProductSection />

      <!-- Milk & Cheese -->

      <SpecialOffersSection />

      <!-- Special Offers End -->

      <Footer />
      <!-- End .footer -->
      
    </div>
  </div>
</template>

<style>

</style>
