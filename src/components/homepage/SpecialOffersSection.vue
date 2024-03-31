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
        <swiper-slide>
          <div class="product-default inner-quickview inner-icon">
            <figure>
              <a href="demo40-product.html">
                <img
                  src="@/assets/images/demoes/demo40/products/product-9.jpg"
                  width="205"
                  height="205"
                  alt="product"
                />
              </a>

              <div class="btn-icon-group">
                <a href="#" class="btn-icon btn-add-cart product-type-simple"
                  ><i class="icon-shopping-cart"></i
                ></a>
              </div>
              <a
                href="ajax/product-quick-view.html"
                class="btn-quickview"
                title="Quick View"
                >Quick View
              </a>
            </figure>
            <div class="product-details">
              <div class="category-wrap">
                <div class="category-list">
                  <a href="demo40-shop.html" class="product-category"
                    >category</a
                  >
                </div>
                <a href="wishlist.html" class="btn-icon-wish"
                  ><i class="icon-heart"></i
                ></a>
              </div>
              <h3 class="product-title">
                <a href="demo40-product.html">Product Short Name</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style="width: 100%"></span>
                  <!-- End .ratings -->
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <!-- End .product-ratings -->
              </div>
              <!-- End .product-container -->

              <div class="price-box">
                <span class="old-price">$90.00</span>
                <span class="product-price">$70.00</span>
              </div>
              <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="product-default inner-quickview inner-icon">
            <figure>
              <a href="demo40-product.html">
                <img
                  src="@/assets/images/demoes/demo40/products/product-2.jpg"
                  width="205"
                  height="205"
                  alt="product"
                />
              </a>

              <div class="btn-icon-group">
                <a href="#" class="btn-icon btn-add-cart product-type-simple"
                  ><i class="icon-shopping-cart"></i
                ></a>
              </div>
              <a
                href="ajax/product-quick-view.html"
                class="btn-quickview"
                title="Quick View"
                >Quick View
              </a>
            </figure>
            <div class="product-details">
              <div class="category-wrap">
                <div class="category-list">
                  <a href="demo40-shop.html" class="product-category"
                    >category</a
                  >
                </div>
                <a href="wishlist.html" class="btn-icon-wish"
                  ><i class="icon-heart"></i
                ></a>
              </div>
              <h3 class="product-title">
                <a href="demo40-product.html">Product Short Name</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style="width: 100%"></span>
                  <!-- End .ratings -->
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <!-- End .product-ratings -->
              </div>
              <!-- End .product-container -->

              <div class="price-box">
                <span class="old-price">$90.00</span>
                <span class="product-price">$70.00</span>
              </div>
              <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="product-default inner-quickview inner-icon">
            <figure>
              <a href="demo40-product.html">
                <img
                  src="@/assets/images/demoes/demo40/products/product-4.jpg"
                  width="205"
                  height="205"
                  alt="product"
                />
              </a>

              <div class="btn-icon-group">
                <a href="#" class="btn-icon btn-add-cart product-type-simple"
                  ><i class="icon-shopping-cart"></i
                ></a>
              </div>
              <a
                href="ajax/product-quick-view.html"
                class="btn-quickview"
                title="Quick View"
                >Quick View
              </a>
            </figure>
            <div class="product-details">
              <div class="category-wrap">
                <div class="category-list">
                  <a href="demo40-shop.html" class="product-category"
                    >category</a
                  >
                </div>
                <a href="wishlist.html" class="btn-icon-wish"
                  ><i class="icon-heart"></i
                ></a>
              </div>
              <h3 class="product-title">
                <a href="demo40-product.html">Product Short Name</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style="width: 100%"></span>
                  <!-- End .ratings -->
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <!-- End .product-ratings -->
              </div>
              <!-- End .product-container -->

              <div class="price-box">
                <span class="old-price">$90.00</span>
                <span class="product-price">$70.00</span>
              </div>
              <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="product-default inner-quickview inner-icon">
            <figure>
              <a href="demo40-product.html">
                <img
                  src="@/assets/images/demoes/demo40/products/product-1.jpg"
                  width="205"
                  height="205"
                  alt="product"
                />
              </a>

              <div class="btn-icon-group">
                <a href="#" class="btn-icon btn-add-cart product-type-simple"
                  ><i class="icon-shopping-cart"></i
                ></a>
              </div>
              <a
                href="ajax/product-quick-view.html"
                class="btn-quickview"
                title="Quick View"
                >Quick View
              </a>
            </figure>
            <div class="product-details">
              <div class="category-wrap">
                <div class="category-list">
                  <a href="demo40-shop.html" class="product-category"
                    >category</a
                  >
                </div>
                <a href="wishlist.html" class="btn-icon-wish"
                  ><i class="icon-heart"></i
                ></a>
              </div>
              <h3 class="product-title">
                <a href="demo40-product.html">Product Short Name</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style="width: 100%"></span>
                  <!-- End .ratings -->
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <!-- End .product-ratings -->
              </div>
              <!-- End .product-container -->

              <div class="price-box">
                <span class="old-price">$90.00</span>
                <span class="product-price">$70.00</span>
              </div>
              <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="product-default inner-quickview inner-icon">
            <figure>
              <a href="demo40-product.html">
                <img
                  src="@/assets/images/demoes/demo40/products/product-12.jpg"
                  width="205"
                  height="205"
                  alt="product"
                />
              </a>

              <div class="btn-icon-group">
                <a href="#" class="btn-icon btn-add-cart product-type-simple"
                  ><i class="icon-shopping-cart"></i
                ></a>
              </div>
              <a
                href="ajax/product-quick-view.html"
                class="btn-quickview"
                title="Quick View"
                >Quick View
              </a>
            </figure>
            <div class="product-details">
              <div class="category-wrap">
                <div class="category-list">
                  <a href="demo40-shop.html" class="product-category"
                    >category</a
                  >
                </div>
                <a href="wishlist.html" class="btn-icon-wish"
                  ><i class="icon-heart"></i
                ></a>
              </div>
              <h3 class="product-title">
                <a href="demo40-product.html">Product Short Name</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style="width: 100%"></span>
                  <!-- End .ratings -->
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <!-- End .product-ratings -->
              </div>
              <!-- End .product-container -->

              <div class="price-box">
                <span class="old-price">$90.00</span>
                <span class="product-price">$70.00</span>
              </div>
              <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="product-default inner-quickview inner-icon">
            <figure>
              <a href="demo40-product.html">
                <img
                  src="@/assets/images/demoes/demo40/products/product-11.jpg"
                  width="205"
                  height="205"
                  alt="product"
                />
              </a>

              <div class="btn-icon-group">
                <a href="#" class="btn-icon btn-add-cart product-type-simple"
                  ><i class="icon-shopping-cart"></i
                ></a>
              </div>
              <a
                href="ajax/product-quick-view.html"
                class="btn-quickview"
                title="Quick View"
                >Quick View
              </a>
            </figure>
            <div class="product-details">
              <div class="category-wrap">
                <div class="category-list">
                  <a href="demo40-shop.html" class="product-category"
                    >category</a
                  >
                </div>
                <a href="wishlist.html" class="btn-icon-wish"
                  ><i class="icon-heart"></i
                ></a>
              </div>
              <h3 class="product-title">
                <a href="demo40-product.html">Product Short Name</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style="width: 100%"></span>
                  <!-- End .ratings -->
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <!-- End .product-ratings -->
              </div>
              <!-- End .product-container -->

              <div class="price-box">
                <span class="old-price">$90.00</span>
                <span class="product-price">$70.00</span>
              </div>
              <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="product-default inner-quickview inner-icon">
            <figure>
              <a href="demo40-product.html">
                <img
                  src="@/assets/images/demoes/demo40/products/product-7.jpg"
                  width="205"
                  height="205"
                  alt="product"
                />
              </a>

              <div class="btn-icon-group">
                <a href="#" class="btn-icon btn-add-cart product-type-simple"
                  ><i class="icon-shopping-cart"></i
                ></a>
              </div>
              <a
                href="ajax/product-quick-view.html"
                class="btn-quickview"
                title="Quick View"
                >Quick View
              </a>
            </figure>
            <div class="product-details">
              <div class="category-wrap">
                <div class="category-list">
                  <a href="demo40-shop.html" class="product-category"
                    >category</a
                  >
                </div>
                <a href="wishlist.html" class="btn-icon-wish"
                  ><i class="icon-heart"></i
                ></a>
              </div>
              <h3 class="product-title">
                <a href="demo40-product.html">Product Short Name</a>
              </h3>
              <div class="ratings-container">
                <div class="product-ratings">
                  <span class="ratings" style="width: 100%"></span>
                  <!-- End .ratings -->
                  <span class="tooltiptext tooltip-top"></span>
                </div>
                <!-- End .product-ratings -->
              </div>
              <!-- End .product-container -->

              <div class="price-box">
                <span class="old-price">$90.00</span>
                <span class="product-price">$70.00</span>
              </div>
              <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<style></style>
