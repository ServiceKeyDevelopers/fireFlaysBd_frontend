<script setup>
import { Banner, ProductCard } from "@/components";
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

const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);


const product = useProduct();
const {products, featureProducts, recentProducts, topProducts} = storeToRefs(product)


// featured items start 

const bestSellerProducts = ref(true);
const newProducts = ref(false);
const onSaleProducts = ref(false);
const isActive = ref(false);


const featuredItemsShowing = (data) => {
  if(data == "bestSellers"){
    isActive.value           = data
    bestSellerProducts.value = true
    onSaleProducts.value     = false
    newProducts.value        = false
  }else if(data == "new"){
    isActive.value           = data
    newProducts.value        = true
    onSaleProducts.value     = false
    bestSellerProducts.value = false
  }else if(data == "onSale"){
    isActive.value           = data
    onSaleProducts.value     = true
    newProducts.value        = false
    bestSellerProducts.value = false
  }else{
    "Product Not Found"
  }
}

onMounted(() => {
    product.getData("feature-product");
    product.getData("top-product");
    product.getData("recent-product");
})

</script>

<template>
  <div>
    <section class="featured-section my-5">
        <div class="heading d-flex align-items-center">
          <h2 class="text-transform-none mb-0">Featured Items</h2>
          <ul
            class="nav justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link"
                :class="isActive == 'bestSellers' ? 'active' : ''"
                id="best-products-tab"
                data-toggle="tab"
                href="#best-products"
                role="tab"
                aria-controls="best-products"
                aria-selected="true"
                @click.prevent="featuredItemsShowing('bestSellers')"
                >Best Sellers</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="isActive == 'new' ? 'active' : ''"
                id="new-products-tab"
                data-toggle="tab"
                href="#new-products"
                role="tab"
                aria-controls="new-products"
                aria-selected="false"
                @click.prevent="featuredItemsShowing('new')"
                >New</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="isActive == 'onSale' ? 'active' : ''"
                id="sale-products-tab"
                data-toggle="tab"
                href="#sale-products"
                role="tab"
                aria-controls="sale-products"
                aria-selected="false"
                @click.prevent="featuredItemsShowing('onSale')"
                >On Sale</a
              >
            </li>
          </ul>
        </div>

        <div class="tab-content" v-show="bestSellerProducts">
          <div
            class="tab-pane fade show active"
            id="best-products"
            role="tabpanel"
            aria-labelledby="best-products-tab"
          >
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
              :breakpoints="{ [425 - 320]:{ slidesPerView:2,spaceBetweenSlides: 20  }, 768:{ slidesPerView:3,spaceBetweenSlides: 30  }, 800:{ slidesPerView:6,spaceBetweenSlides: 30  } }"
            >
              <swiper-slide v-for="(featureProduct, index) in featureProducts.data" :key="index">
                <ProductCard :product="featureProduct"/>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="tab-content" v-show="newProducts">
          <div
            class="tab-pane fade show active"
            id="best-products"
            role="tabpanel"
            aria-labelledby="best-products-tab"
          >
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
              :breakpoints="{ [425 - 320]:{ slidesPerView:2,spaceBetweenSlides: 20  }, 768:{ slidesPerView:3,spaceBetweenSlides: 30  }, 800:{ slidesPerView:6,spaceBetweenSlides: 30  } }"
            >
              <swiper-slide v-for="(recentProduct, index) in recentProducts.data" :key="index">
                <ProductCard :product="recentProduct"/>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="tab-content" v-show="onSaleProducts">
          <div
            class="tab-pane fade show active"
            id="best-products"
            role="tabpanel"
            aria-labelledby="best-products-tab"
          >
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
              :breakpoints="{ [425 - 320]:{ slidesPerView:2,spaceBetweenSlides: 20  }, 768:{ slidesPerView:3,spaceBetweenSlides: 30  }, 800:{ slidesPerView:6,spaceBetweenSlides: 30  } }"
            >
              <swiper-slide v-for="(topProduct, index) in topProducts.data" :key="index">
                <ProductCard :product="topProduct"/>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
  </div>
</template>

<style></style>
