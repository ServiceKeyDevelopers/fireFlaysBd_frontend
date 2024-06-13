<script setup>
import { ref, onMounted } from "vue";
import {Header, ProductSkeleton, Sidebar, Footer, MobileMenu, StickyNavber, Modal, BannerSection, InfoSection, FeatureSection, PopularSection, ProductSection, SpecialOffersSection, } from "@/components";
import {useSection} from '@/stores'
import { storeToRefs } from 'pinia';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);

// section start 
const section = useSection();
const {sections} = storeToRefs(section);
// section end

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
      
      
      <!-- product  section -->
      
      <ProductSection />

      <!-- Milk & Cheese -->

      <SpecialOffersSection />

      <!-- Special Offers End -->
      
    </div>
  </div>
</template>

<style>

</style>
