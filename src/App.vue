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
  <div>
    <div class="page-wrapper">
      <Header />

      <main class="main home">
        <div class="container-fluid p-0">
          <div class="row m-0">
            <div class="sidebar-overlay" @click="toggleMenu()"></div>
            <div class="sidebar-toggle custom-sidebar-toggle" @click="toggleMenu()">
              <i class="fas fa-sliders-h"></i>
            </div>

            <Sidebar />
            <!-- End .col-lg-3 -->

            <div class="col-lg-9">
              <router-view />
            </div>
          </div>
        </div>
      </main>
      <!-- End .main -->
    </div>
    <!-- End .page-wrapper -->



    <MobileMenu />
    <!-- End .mobile-menu-container -->

   <StickyNavber />

  </div>
</template>

<style scoped></style>
