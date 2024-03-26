<script setup>
import { ref,onMounted } from 'vue';
import { Header, Sidebar, Banner, Footer } from "@/components";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Autoplay, Navigation } from 'swiper/modules'


const newSlide = ref([Navigation])
const modules = ref([Pagination,Autoplay]);
</script>

<template>
  <div>
    <div class="page-wrapper">
        
        <Header />

        <main class="main home">
            <div class="container-fluid p-0">
                <div class="row m-0">
                    <div class="sidebar-overlay"></div>
                    <div class="sidebar-toggle custom-sidebar-toggle"><i class="fas fa-sliders-h"></i></div>
                    
                    <Sidebar />
                    <!-- End .col-lg-3 -->

                    <div class="col-lg-9">
                        <div class="main-content">
                            <section class="home-section mb-2">
                                <div class="row">
                                    <div class="col-md-12 col-xl-8 col-lg-12 mb-xl-0 mb-2">
                                        <swiper
                                              :slidesPerView="1"
                                              :sliderPerGroup="1"
                                              :loop="true"
                                              :pagination="{
                                                clickable: true,
                                              }"
                                              :autoplay="{
                                                  delay: 2000,
                                                }"
                                              :modules="modules"
                                              
                                              class="mySwiper"
                                            >
                                              <swiper-slide >
                                                <div class="home-slide home-slide1 banner">
                                                  <img class="slide-bg" src="@/assets/images/demoes/demo40/slider/slide-1.jpg" alt="slider image" style="background-color: #c0e1f2;">
                                                </div>
                                              </swiper-slide>
                                              <swiper-slide >
                                                <div class="home-slide home-slide1 banner">
                                                  <img class="slide-bg" src="@/assets/images/demoes/demo40/slider/slide-2.jpg" alt="slider image" style="background-color: #c0e1f2;">
                                                </div>
                                              </swiper-slide>
                                              <swiper-slide >
                                                <div class="home-slide home-slide1 banner">
                                                  <img class="slide-bg" src="@/assets/images/demoes/demo40/slider/slide-1.jpg" alt="slider image" style="background-color: #c0e1f2;">
                                                </div>
                                              </swiper-slide>
                                        </swiper>
                                    </div>
                                    <div class="col-md-12 col-xl-4 col-lg-12 d-sm-flex d-xl-block">
                                        <Banner />
                                        <!-- End .home-slide -->

                                        <Banner />
                                        <!-- End .home-slide -->
                                    </div>
                                </div>
                            </section>

                            
                            <swiper
                                    :slidesPerView="3"
                                    :sliderPerGroup="3"
                                    :loop="true"
                                    :pagination="{
                                    clickable: true,
                                    }"
                                    :autoplay="{
                                        delay: 2000,
                                    }"
                                    :modules="modules"
                                    
                                    class="mySwiper"
                                >
                                    <swiper-slide >
                                        <div class="info-box info-box-icon-left">
                                            <i class="icon-shipping mr-3 pr-2"></i>

                                            <div class="info-box-content">
                                                <h4 class="pt-1">Free Shipping and Returns</h4>
                                            </div>
                                            <!-- End .info-box-content -->
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide >
                                        <div class="info-box info-box-icon-left">
                                            <i class="icon-shipping mr-3 pr-2"></i>

                                            <div class="info-box-content">
                                                <h4 class="pt-1">Free Shipping and Returns</h4>
                                            </div>
                                            <!-- End .info-box-content -->
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide >
                                        <div class="info-box info-box-icon-left">
                                            <i class="icon-shipping mr-3 pr-2"></i>

                                            <div class="info-box-content">
                                                <h4 class="pt-1">Free Shipping and Returns</h4>
                                            </div>
                                            <!-- End .info-box-content -->
                                        </div>
                                    </swiper-slide>
                            </swiper>
                               

                            <section class="featured-section appear-animate" data-animation-name="fadeIn" data-animation-delay="100">
                                <div class="heading d-flex align-items-center">
                                    <h2 class="text-transform-none mb-0">Featured Items</h2>
                                    <ul class="nav justify-content-center" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="best-products-tab" data-toggle="tab" href="#best-products" role="tab" aria-controls="best-products" aria-selected="true">Best Sellers</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="new-products-tab" data-toggle="tab" href="#new-products" role="tab" aria-controls="new-products" aria-selected="false">New</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="sale-products-tab" data-toggle="tab" href="#sale-products" role="tab" aria-controls="sale-products" aria-selected="false">On Sale</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="best-products" role="tabpanel" aria-labelledby="best-products-tab">
                                        <div class="products-slider owl-carousel owl-theme owl-nav-top" data-owl-options="{
                                            'margin': 20,
                                            'dots': false,
                                            'nav': true,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '576': {
                                                    'items': 3
                                                },
                                                '768': {
                                                    'items': 4
                                                },
                                                '992': {
                                                    'items': 4
                                                },
                                                '1500': {
                                                    'items': 6
                                                }
                                            }
                                        }">
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-1.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                    <div class="product-countdown-container">
                                                        <span class="product-countdown-title">offer ends in:</span>
                                                        <div class="product-countdown countdown-compact" data-until="2021, 10, 5" data-compact="true">
                                                        </div>
                                                        <!-- End .product-countdown -->
                                                    </div>
                                                    <!-- End .product-countdown-container -->
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-2.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-3.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-4.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-5.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-6.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-7.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                        </div>
                                        <!-- End .products-slider -->
                                    </div>
                                    <div class="tab-pane fade" id="new-products" role="tabpanel" aria-labelledby="new-products-tab">
                                        <div class="products-slider owl-carousel owl-theme owl-nav-top" data-owl-options="{
                                                'margin': 20,
                                                'dots': false,
                                                'nav': true,
                                                'loop': false,
                                                'responsive': {
                                                    '0': {
                                                        'items': 2
                                                    },
                                                    '576': {
                                                        'items': 3
                                                    },
                                                    '768': {
                                                        'items': 4
                                                    },
                                                    '992': {
                                                        'items': 4
                                                    },
                                                    '1500': {
                                                        'items': 6
                                                    }
                                                }
                                        }">
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-3.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-4.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-11.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-13.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                        </div>
                                        <!-- End .products-slider -->
                                    </div>
                                    <div class="tab-pane fade" id="sale-products" role="tabpanel" aria-labelledby="sale-products-tab">
                                        <div class="products-slider owl-carousel owl-theme" data-owl-options="{
                                            'margin': 20,
                                            'dots': false,
                                            'nav': true,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '576': {
                                                    'items': 3
                                                },
                                                '768': {
                                                    'items': 4
                                                },
                                                '992': {
                                                    'items': 4
                                                },
                                                '1500': {
                                                    'items': 6
                                                }
                                            }
                                        }">
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-11.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                            <div class="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo40-product.html">
                                                        <img src="@/assets/images/demoes/demo40/products/product-13.jpg" width="205" height="205" alt="product">
                                                    </a>

                                                    <div class="btn-icon-group">
                                                        <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                                class="icon-shopping-cart"></i></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                        View
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <div class="category-wrap">
                                                        <div class="category-list">
                                                            <a href="demo40-shop.html" class="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" class="btn-icon-wish"><i
                                                                class="icon-heart"></i></a>
                                                    </div>
                                                    <h3 class="product-title">
                                                        <a href="demo40-product.html">Product Short Name</a>
                                                    </h3>
                                                    <div class="ratings-container">
                                                        <div class="product-ratings">
                                                            <span class="ratings" style="width:100%"></span>
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
                                        </div>
                                        <!-- End .products-slider -->
                                    </div>
                                </div>
                            </section>

                            <section class="categories-section appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="150">
                                <div class="heading d-flex align-items-center flex-column flex-lg-row border-0 mb-0">
                                    <h2 class="text-transform-none mb-0">Popular Departments</h2>
                                </div>
                                <div class="owl-carousel owl-theme appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="200" data-owl-options="{
                                        'dots': false,
                                        'margin': 20,
                                        'nav': false,
                                        'loop': false,
                                        'responsive': {
                                            '0': {
                                                'items': 2
                                            },
                                            '768': {
                                                'items': 3
                                            },
                                            '991': {
                                                'items': 3
                                            },
                                            '1200': {
                                                'items': 4
                                            }
                                        }
                                    }">
                                    <div class="banner banner-image font2">
                                        <a href="demo40-shop.html">
                                            <img src="@/assets/images/demoes/demo40/categories/category-1.jpg" width="374" height="200" alt="banner" style="background-color: #f4f4f4;">
                                        </a>
                                        <div class="banner-layer banner-layer-middle">
                                            <h3>Vegetables</h3>
                                            <span>2 Products </span>
                                        </div>
                                    </div>
                                    <!-- End .banner -->

                                    <div class="banner banner-image font2">
                                        <a href="demo40-shop.html">
                                            <img src="@/assets/images/demoes/demo40/categories/category-2.jpg" width="374" height="200" alt="banner" style="background-color: #f4f4f4;">
                                        </a>
                                        <div class="banner-layer banner-layer-middle">
                                            <h3>Fruits</h3>
                                            <span>10 Products </span>
                                        </div>
                                    </div>
                                    <!-- End .banner -->

                                    <div class="banner banner-image font2">
                                        <a href="demo40-product.html">
                                            <img src="@/assets/images/demoes/demo40/categories/category-3.jpg" width="374" height="200" alt="banner" style="background-color: #f4f4f4;">
                                        </a>
                                        <div class="banner-layer banner-layer-middle">
                                            <h3>Cooking</h3>
                                            <span>4 Products </span>
                                        </div>
                                    </div>
                                    <!-- End .banner -->

                                    <div class="banner banner-image font2">
                                        <a href="demo40-shop.html">
                                            <img src="@/assets/images/demoes/demo40/categories/category-4.jpg" width="374" height="200" alt="banner" style="background-color: #f4f4f4;">
                                        </a>
                                        <div class="banner-layer banner-layer-middle">
                                            <h3>Breakfast</h3>
                                            <span>8 Products </span>
                                        </div>
                                    </div>
                                    <!-- End .banner -->
                                </div>
                                <!-- End .cat-carousel -->
                            </section>
                            <!-- End .banners-section -->

                            <section class="products-container">
                                <div class="heading d-flex align-items-center appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="150">
                                    <h2 class="text-transform-none mb-0">Milk & Cheese</h2>
                                    <a class="d-block view-all ml-auto" href="demo40-shop.html">View All<i
                                            class="fas fa-chevron-right"></i></a>
                                </div>
                                <div class="products-slider owl-carousel owl-theme  appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="200" data-owl-options="{
                                            'margin': 20,
                                            'dots': false,
                                            'nav': false,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '576': {
                                                    'items': 3
                                                },
                                                '768': {
                                                    'items': 4
                                                },
                                                '992': {
                                                    'items': 4
                                                },
                                                '1500': {
                                                    'items': 6
                                                }
                                            }
                                        }">
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-5.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-6.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-9.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-10.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-11.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-12.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-7.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                </div>
                                <!-- End .products-slider -->
                            </section>

                            <section class="products-container pt-0">
                                <div class="heading d-flex align-items-center appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="200">
                                    <h2 class="text-transform-none mb-0">Fresh Fruit</h2>
                                    <a class="d-block view-all ml-auto" href="demo40-shop.html">View All<i
                                            class="fas fa-chevron-right"></i></a>
                                </div>
                                <div class="products-slider owl-carousel owl-theme appear-animate" data-animation-name="fadeIn" data-animation-delay="100" data-owl-options="{
                                            'margin': 20,
                                            'dots': false,
                                            'nav': false,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '576': {
                                                    'items': 3
                                                },
                                                '768': {
                                                    'items': 4
                                                },
                                                '992': {
                                                    'items': 4
                                                },
                                                '1500': {
                                                    'items': 6
                                                }
                                            }
                                        }">
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-3.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-4.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-11.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-13.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-15.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-16.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-7.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                </div>
                                <!-- End .products-slider -->
                            </section>

                            <section class="products-container pt-0">
                                <div class="heading d-flex align-items-center appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="200">
                                    <h2 class="text-transform-none mb-0">Meat & Seafood</h2>
                                    <a class="d-block view-all ml-auto" href="demo40-shop.html">View All<i
                                            class="fas fa-chevron-right"></i></a>
                                </div>
                                <div class="products-slider owl-carousel owl-theme appear-animate" data-animation-name="fadeIn" data-animation-delay="100" data-owl-options="{
                                            'margin': 20,
                                            'dots': false,
                                            'nav': false,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '576': {
                                                    'items': 3
                                                },
                                                '768': {
                                                    'items': 4
                                                },
                                                '992': {
                                                    'items': 4
                                                },
                                                '1500': {
                                                    'items': 6
                                                }
                                            }
                                        }">
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-17.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-16.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-18.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-19.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-20.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-21.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-7.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                </div>
                                <!-- End .products-slider -->
                            </section>

                            <div class="banner-section banner-bg" style="background-image: url(@/assets/images/demoes/demo40/banners/banner-3.jpg);">
                                <div class="banner col-md-11 m-auto d-flex align-items-center flex-column flex-sm-row justify-content-center justify-content-sm-between">
                                    <div class="content-left text-center text-sm-right">
                                        <h6 class="text-transform-none appear-animate" data-animation-name="fadeInDownShorter" data-animation-delay="100">Exclusive Whole Wheat</h6>
                                        <h2 class="text-transform-none appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="600">Fluffy Pancakes
                                        </h2>
                                        <h3 class=" appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay="1100">GOOD OLD FASHIONED</h3>
                                    </div>
                                    <div class="content-right text-center text-sm-right">
                                        <h5 class=" appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay="400">BREAKFAST PRODUCTS ON SALE</h5>
                                        <h4 class="d-inline-block appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay="800">
                                            <sup>UP TO</sup>
                                            <b class="coupon-sale-text ls-10 text-white align-middle">50%</b>
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <section class="products-container products-section-with-border appear-animate" data-animation-name="fadeIn" data-animation-delay="100">
                                <div class="heading d-flex align-items-center">
                                    <h2 class="d-flex align-items-center text-transform-none mb-0"><i></i>Special Offers
                                    </h2>
                                    <a class="d-block view-all ml-auto mt-0" href="demo40-shop.html">View All<i
                                            class="fas fa-chevron-right"></i></a>
                                </div>
                                <div class="products-slider owl-carousel owl-theme" data-owl-options="{
                                            'margin': 20,
                                            'dots': false,
                                            'nav': false,
                                            'loop': false,
                                            'responsive': {
                                                '0': {
                                                    'items': 2
                                                },
                                                '576': {
                                                    'items': 3
                                                },
                                                '768': {
                                                    'items': 4
                                                },
                                                '992': {
                                                    'items': 4
                                                },
                                                '1500': {
                                                    'items': 6
                                                }
                                            }
                                        }">
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-22.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-5.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-9.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-11.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-23.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                    <div class="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo40-product.html">
                                                <img src="@/assets/images/demoes/demo40/products/product-24.jpg" width="205" height="205" alt="product">
                                            </a>

                                            <div class="btn-icon-group">
                                                <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                                        class="icon-shopping-cart"></i></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                                                View
                                            </a>
                                        </figure>
                                        <div class="product-details">
                                            <div class="category-wrap">
                                                <div class="category-list">
                                                    <a href="demo40-shop.html" class="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" class="btn-icon-wish"><i
                                                        class="icon-heart"></i></a>
                                            </div>
                                            <h3 class="product-title">
                                                <a href="demo40-product.html">Product Short Name</a>
                                            </h3>
                                            <div class="ratings-container">
                                                <div class="product-ratings">
                                                    <span class="ratings" style="width:100%"></span>
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
                                </div>
                                <!-- End .products-slider -->
                            </section>

                            <Footer />
                            <!-- End .footer -->
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- End .main -->
    </div>
    <!-- End .page-wrapper -->


    <div class="mobile-menu-overlay"></div>
    <!-- End .mobil-menu-overlay -->

    <div class="mobile-menu-container">
        <div class="mobile-menu-wrapper">
            <span class="mobile-menu-close"><i class="fa fa-times"></i></span>
            <nav class="mobile-nav">
                <ul class="mobile-menu">
                    <li><a href="demo40.html">Home</a></li>
                    <li>
                        <a href="demo40-shop.html">Categories</a>
                        <ul>
                            <li><a href="category.html">Full Width Banner</a></li>
                            <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                            <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                            <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                            <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                            <li><a href="category-off-canvas.html">Off Canvas Filter</a></li>
                            <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                            <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                            <li><a href="#">List Types</a></li>
                            <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll<span
                                        class="tip tip-new">New</span></a></li>
                            <li><a href="category.html">3 Columns Products</a></li>
                            <li><a href="category-4col.html">4 Columns Products</a></li>
                            <li><a href="category-5col.html">5 Columns Products</a></li>
                            <li><a href="category-6col.html">6 Columns Products</a></li>
                            <li><a href="category-7col.html">7 Columns Products</a></li>
                            <li><a href="category-8col.html">8 Columns Products</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="demo40-product.html">Products</a>
                        <ul>
                            <li>
                                <a href="#" class="nolink">PRODUCT PAGES</a>
                                <ul>
                                    <li><a href="product.html">SIMPLE PRODUCT</a></li>
                                    <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                                    <li><a href="product.html">SALE PRODUCT</a></li>
                                    <li><a href="product.html">FEATURED & ON SALE</a></li>
                                    <li><a href="product-sticky-info.html">WIDTH CUSTOM TAB</a></li>
                                    <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a></li>
                                    <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a></li>
                                    <li><a href="product-addcart-sticky.html">ADD CART STICKY</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="nolink">PRODUCT LAYOUTS</a>
                                <ul>
                                    <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a></li>
                                    <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                                    <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                                    <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                                    <li><a href="product-sticky-both.html">LEFT & RIGHT STICKY</a></li>
                                    <li><a href="product-transparent-image.html">TRANSPARENT IMAGE</a></li>
                                    <li><a href="product-center-vertical.html">CENTER VERTICAL</a></li>
                                    <li><a href="#">BUILD YOUR OWN</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Pages<span class="tip tip-hot">Hot!</span></a>
                        <ul>
                            <li>
                                <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                                <a href="cart.html">Shopping Cart</a>
                            </li>
                            <li>
                                <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                                <a href="dashboard.html">Dashboard</a>
                            </li>
                            <li>
                                <a href="login.html">Login</a>
                            </li>
                            <li>
                                <a href="forgot-password.html">Forgot Password</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="blog.html">Blog</a></li>
                    <li>
                        <a href="#">Elements</a>
                        <ul class="custom-scrollbar">
                            <li><a href="element-accordions.html">Accordion</a></li>
                            <li><a href="element-alerts.html">Alerts</a></li>
                            <li><a href="element-animations.html">Animations</a></li>
                            <li><a href="element-banners.html">Banners</a></li>
                            <li><a href="element-buttons.html">Buttons</a></li>
                            <li><a href="element-call-to-action.html">Call to Action</a></li>
                            <li><a href="element-countdown.html">Count Down</a></li>
                            <li><a href="element-counters.html">Counters</a></li>
                            <li><a href="element-headings.html">Headings</a></li>
                            <li><a href="element-icons.html">Icons</a></li>
                            <li><a href="element-info-box.html">Info box</a></li>
                            <li><a href="element-posts.html">Posts</a></li>
                            <li><a href="element-products.html">Products</a></li>
                            <li><a href="element-product-categories.html">Product Categories</a></li>
                            <li><a href="element-tabs.html">Tabs</a></li>
                            <li><a href="element-testimonial.html">Testimonials</a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="mobile-menu mt-2 mb-2">
                    <li class="border-0">
                        <a href="#">
                            Special Offer!
                        </a>
                    </li>
                    <li class="border-0">
                        <a href="https://1.envato.market/DdLk5" target="_blank">
                            Buy Porto!
                            <span class="tip tip-hot">Hot</span>
                        </a>
                    </li>
                </ul>

                <ul class="mobile-menu">
                    <li><a href="login.html">My Account</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="wishlist.html">My Wishlist</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="login.html" class="login-link">Log In</a></li>
                </ul>
            </nav>
            <!-- End .mobile-nav -->

            <form class="search-wrapper mb-2" action="#">
                <input type="text" class="form-control mb-0" placeholder="Search..." required />
                <button class="btn icon-search text-white bg-transparent p-0" type="submit"></button>
            </form>

            <div class="social-icons">
                <a href="#" class="social-icon social-facebook icon-facebook" target="_blank">
                </a>
                <a href="#" class="social-icon social-twitter icon-twitter" target="_blank">
                </a>
                <a href="#" class="social-icon social-instagram icon-instagram" target="_blank">
                </a>
            </div>
        </div>
        <!-- End .mobile-menu-wrapper -->
    </div>
    <!-- End .mobile-menu-container -->

    <div class="sticky-navbar">
        <div class="sticky-info">
            <a href="demo40.html">
                <i class="icon-home"></i>Home
            </a>
        </div>
        <div class="sticky-info">
            <a href="demo40-shop.html" class="">
                <i class="icon-bars"></i>Categories
            </a>
        </div>
        <div class="sticky-info">
            <a href="wishlist.html" class="">
                <i class="icon-wishlist-2"></i>Wishlist
            </a>
        </div>
        <div class="sticky-info">
            <a href="login.html" class="">
                <i class="icon-user-2"></i>Account
            </a>
        </div>
        <div class="sticky-info">
            <a href="cart.html" class="">
                <i class="icon-shopping-cart position-relative">
                    <span class="cart-count badge-circle">3</span>
                </i>Cart
            </a>
        </div>
    </div>

    <div class="newsletter-popup mfp-hide bg-img" id="newsletter-popup-form" style="background: #f1f1f1 no-repeat center/cover url(assets/images/newsletter_popup_bg.jpg)">
        <div class="newsletter-popup-content">
            <img src="@/assets/images/logo-black.png" alt="Logo" class="logo-newsletter" width="111" height="44">
            <h2>Subscribe to newsletter</h2>

            <p>
                Subscribe to the Porto mailing list to receive updates on new arrivals, special offers and our promotions.
            </p>

            <form action="#">
                <div class="input-group">
                    <input type="email" class="form-control" id="newsletter-email" name="newsletter-email" placeholder="Your email address" required />
                    <input type="submit" class="btn btn-primary" value="Submit" />
                </div>
            </form>
            <div class="newsletter-subscribe">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" value="0" id="show-again" />
                    <label for="show-again" class="custom-control-label">
                        Don't show this popup again
                    </label>
                </div>
            </div>
        </div>
        <!-- End .newsletter-popup-content -->

        <button title="Close (Esc)" type="button" class="mfp-close">
            ×
        </button>
    </div>
    <!-- End .newsletter-popup -->

    <a id="scroll-top" href="#top" title="Top" role="button"><i class="icon-angle-up"></i></a>
  </div>
</template>

<style scoped>

</style>
