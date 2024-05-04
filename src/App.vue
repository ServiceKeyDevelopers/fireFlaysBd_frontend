<script setup>
// import GuestLayout from './views/common/GuestLayout.vue'
// import Layout from './views/common/Layout.vue'
import Login from './views/pages/Authentication/Login.vue'
import { ref, onMounted } from "vue";
import { Header, Sidebar, Footer, Modal, MobileMenu, StickyNavber, BannerSection, InfoSection, FeatureSection, PopularSection, ProductSection, SpecialOffersSection } from "@/components";
import { useRoute } from 'vue-router';
const route = useRoute();
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);
const normal = ref(false)

const toggleMenu = () => {
  document.body.classList.toggle("sidebar-opened");
};
</script>

<template>
  <div>
    <div class="page-wrapper">
      <Header />
      <Modal />
      <Layout v-if="route.path != '/login'">
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
      </Layout>
      <!-- End .main -->
      <GuestLayout v-else>
        <Login />
      </GuestLayout>
    </div>
    <!-- End .page-wrapper -->



    <MobileMenu />
    <!-- End .mobile-menu-container -->

   <StickyNavber />



  </div>
</template>

<style scoped>

</style>
