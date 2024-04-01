<script setup>
import { ref, onMounted } from "vue";
import { Header, Sidebar, Footer, MobileMenu, StickyNavber, BannerSection, InfoSection, FeatureSection, PopularSection, ProductSection, SpecialOffersSection } from "@/components";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);




const toggleMenu = () => {
  document.body.classList.toggle("sidebar-opened");
};
</script>

<template>
    <slot>
</template>

<style scoped></style>
