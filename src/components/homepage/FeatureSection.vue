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


// featured items start 

const bestSellerProducts = ref(true);
const newProducts = ref(false);
const onSaleProducts = ref(false);
const isActive = ref(false);
const featuredItemsShowing = (data) => {
  if(data == "bestSellers"){
    isActive.value = data
    bestSellerProducts.value = true
    onSaleProducts.value = false
    newProducts.value = false
  }else if(data == "new"){
    isActive.value = data
    newProducts.value = true
    onSaleProducts.value = false
    bestSellerProducts.value = false
  }else if(data == "onSale"){
    isActive.value = data
    onSaleProducts.value = true
    newProducts.value = false
    bestSellerProducts.value = false
  }else{
    "Product Not Found"
  }
}

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
                        :slidesPerView="4"
                        :sliderPerGroup="4"
                        :space-between="30"
                        :loop="true"
                        :autoplay="{
                          delay: 2000,
                        }"
                        :modules="modules"
                        class="mySwiper"
                        :breakpoints="{ [425 - 320]:{ slidesPerView:2,spaceBetweenSlides: 20  }, 768:{ slidesPerView:3,spaceBetweenSlides: 30  }, 800:{ slidesPerView:4,spaceBetweenSlides: 30  } }"
                      >
                        <swiper-slide>
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
                                  ><i class="icon-shopping-cart"></i
                                ></a>
                              </div>
                              <a
                                href="ajax/product-quick-view.html"
                                class="btn-quickview"
                                title="Quick View"
                                >Quick View
                              </a>
                              <div class="product-countdown-container">
                                <span class="product-countdown-title"
                                  >offer ends in:</span
                                >
                                <div
                                  class="product-countdown countdown-compact"
                                  data-until="2021, 10, 5"
                                  data-compact="true"
                                ></div>
                                <!-- End .product-countdown -->
                              </div>
                              <!-- End .product-countdown-container -->
                            </figure>
                            <div class="product-details">
                              <div class="category-wrap">
                                <div class="category-list">
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-3.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-5.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-6.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                        :slidesPerView="4"
                        :sliderPerGroup="4"
                        :space-between="30"
                        :loop="true"
                        :autoplay="{
                          delay: 2000,
                        }"
                        :modules="modules"
                        class="mySwiper"
                        :breakpoints="{ [425 - 320]:{ slidesPerView:2,spaceBetweenSlides: 20  }, 768:{ slidesPerView:3,spaceBetweenSlides: 30  }, 800:{ slidesPerView:4,spaceBetweenSlides: 30  } }"
                      >
                        <swiper-slide>
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
                                  ><i class="icon-shopping-cart"></i
                                ></a>
                              </div>
                              <a
                                href="ajax/product-quick-view.html"
                                class="btn-quickview"
                                title="Quick View"
                                >Quick View
                              </a>
                              <div class="product-countdown-container">
                                <span class="product-countdown-title"
                                  >offer ends in:</span
                                >
                                <div
                                  class="product-countdown countdown-compact"
                                  data-until="2021, 10, 5"
                                  data-compact="true"
                                ></div>
                                <!-- End .product-countdown -->
                              </div>
                              <!-- End .product-countdown-container -->
                            </figure>
                            <div class="product-details">
                              <div class="category-wrap">
                                <div class="category-list">
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-3.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-5.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-6.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                        :slidesPerView="4"
                        :sliderPerGroup="4"
                        :space-between="30"
                        :loop="true"
                        :autoplay="{
                          delay: 2000,
                        }"
                        :modules="modules"
                        class="mySwiper"
                        :breakpoints="{ [425 - 320]:{ slidesPerView:2,spaceBetweenSlides: 20  }, 768:{ slidesPerView:3,spaceBetweenSlides: 30  }, 800:{ slidesPerView:4,spaceBetweenSlides: 30  } }"
                      >
                        <swiper-slide>
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
                                  ><i class="icon-shopping-cart"></i
                                ></a>
                              </div>
                              <a
                                href="ajax/product-quick-view.html"
                                class="btn-quickview"
                                title="Quick View"
                                >Quick View
                              </a>
                              <div class="product-countdown-container">
                                <span class="product-countdown-title"
                                  >offer ends in:</span
                                >
                                <div
                                  class="product-countdown countdown-compact"
                                  data-until="2021, 10, 5"
                                  data-compact="true"
                                ></div>
                                <!-- End .product-countdown -->
                              </div>
                              <!-- End .product-countdown-container -->
                            </figure>
                            <div class="product-details">
                              <div class="category-wrap">
                                <div class="category-list">
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-3.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
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
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-5.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                          <div
                            class="product-default inner-quickview inner-icon"
                          >
                            <figure>
                              <a href="demo40-product.html">
                                <img
                                  src="@/assets/images/demoes/demo40/products/product-6.jpg"
                                  width="205"
                                  height="205"
                                  alt="product"
                                />
                              </a>

                              <div class="btn-icon-group">
                                <a
                                  href="#"
                                  class="btn-icon btn-add-cart product-type-simple"
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
                                  <a
                                    href="demo40-shop.html"
                                    class="product-category"
                                    >category</a
                                  >
                                </div>
                                <a href="wishlist.html" class="btn-icon-wish"
                                  ><i class="icon-heart"></i
                                ></a>
                              </div>
                              <h3 class="product-title">
                                <a href="demo40-product.html"
                                  >Product Short Name</a
                                >
                              </h3>
                              <div class="ratings-container">
                                <div class="product-ratings">
                                  <span
                                    class="ratings"
                                    style="width: 100%"
                                  ></span>
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
                    </div>
                  </div>
                </section>
  </div>
</template>

<style></style>
