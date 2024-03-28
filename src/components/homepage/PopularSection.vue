<script setup>
import { Banner } from "@/components";
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
    <section>
      <div
        class="heading d-flex align-items-center flex-column flex-lg-row border-0 mb-0"
      >
        <h2 class="text-transform-none mb-0">Popular Departments</h2>
      </div>
      <swiper
        :slidesPerView="4"
        :sliderPerGroup="4"
        :space-between="20"
        :loop="true"
        :autoplay="{
          delay: 2000,
        }"
        :modules="modules"
        class="mySwiper"
        :breakpoints="{
          [425 - 320]: { slidesPerView: 2, spaceBetweenSlides: 20 },
          768: { slidesPerView: 3, spaceBetweenSlides: 30 },
          800: { slidesPerView: 4, spaceBetweenSlides: 30 },
        }"
      >
        <swiper-slide>
          <div class="banner banner-image font2">
            <a href="demo40-shop.html">
              <img
                src="@/assets/images/demoes/demo40/categories/category-1.jpg"
                width="374"
                height="200"
                alt="banner"
                style="background-color: #f4f4f4"
              />
            </a>
            <div class="banner-layer banner-layer-middle">
              <h3>Vegetables</h3>
              <span>2 Products </span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner-image font2">
            <a href="demo40-shop.html">
              <img
                src="@/assets/images/demoes/demo40/categories/category-2.jpg"
                width="374"
                height="200"
                alt="banner"
                style="background-color: #f4f4f4"
              />
            </a>
            <div class="banner-layer banner-layer-middle">
              <h3>Fruits</h3>
              <span>10 Products </span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner-image font2">
            <a href="demo40-product.html">
              <img
                src="@/assets/images/demoes/demo40/categories/category-3.jpg"
                width="374"
                height="200"
                alt="banner"
                style="background-color: #f4f4f4"
              />
            </a>
            <div class="banner-layer banner-layer-middle">
              <h3>Cooking</h3>
              <span>4 Products </span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner banner-image font2">
            <a href="demo40-shop.html">
              <img
                src="@/assets/images/demoes/demo40/categories/category-4.jpg"
                width="374"
                height="200"
                alt="banner"
                style="background-color: #f4f4f4"
              />
            </a>
            <div class="banner-layer banner-layer-middle">
              <h3>Breakfast</h3>
              <span>8 Products </span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<style></style>
