<script setup>
import { ref, onMounted } from "vue";
// import {Header} from "@/components";
import {ProductCard} from "@/components";
import { storeToRefs } from 'pinia';
import {useShop} from '@/stores'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const allProducts = ref('');
const shop = useShop();
const { products, sideBar, loading } = storeToRefs(shop);

const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);

const productType = ref("");
const selectedBrandIds = ref([]);
const selectedCategoryIds = ref([]);
const selectedSubCategoryIds = ref("");
const sortingPrice = ref([]);
const searchQuery = ref("");
const paginateSize = ref("");

// sorting functions 
const getProducts = () => {
  products.value = [];
  shop.getData(
    productType.value,
    selectedBrandIds.value,
    selectedCategoryIds.value,
    selectedSubCategoryIds.value,
    sortingPrice.value,
    searchQuery.value,
    paginateSize.value,
  );
};


onMounted(() => {
    // product.getData();
    getProducts();
})

</script>

<template>
  <div>
    <div class="main-content">
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="demo40.html"><i class="icon-home"></i></a></li>
                <li class="breadcrumb-item"><a href="#">Men</a></li>
                <li class="breadcrumb-item active" aria-current="page">Accessories</li>
            </ol>
        </nav>

        <nav class="toolbox sticky-header" data-sticky-options="{'mobile': true}">
            <div class="toolbox-left">
                <a href="#" class="sidebar-toggle"><svg data-name="Layer 3" id="Layer_3"
                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <line x1="15" x2="26" y1="9" y2="9" class="cls-1"></line>
                        <line x1="6" x2="9" y1="9" y2="9" class="cls-1"></line>
                        <line x1="23" x2="26" y1="16" y2="16" class="cls-1"></line>
                        <line x1="6" x2="17" y1="16" y2="16" class="cls-1"></line>
                        <line x1="17" x2="26" y1="23" y2="23" class="cls-1"></line>
                        <line x1="6" x2="11" y1="23" y2="23" class="cls-1"></line>
                        <path
                            d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                            class="cls-2"></path>
                        <path d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z" class="cls-2">
                        </path>
                        <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" class="cls-3"></path>
                        <path
                            d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                            class="cls-2"></path>
                    </svg>
                    <span>Filter</span>
                </a>

                <div class="toolbox-item toolbox-sort">
                    <label>Sort By:</label>

                    <div class="select-custom">
                        <select name="orderby" class="form-control" @change="getProducts" v-model="productType">
                            <option value="" selected>All</option>
                            <option value="top-product">Top</option>
                            <option value="feature-product">Feature</option>
                            <option value="recent-product">Recent</option>
                        </select>
                    </div>
                    <!-- End .select-custom -->


                </div>
                <!-- End .toolbox-item -->
            </div>
            <!-- End .toolbox-left -->
        </nav>

        <div class="row products-group">
            <template v-for="(product, index) in products.data" :key="index">
                <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
                    <ProductCard :product="product" />
                </div>
            </template>
        </div>

        <footer class="footer font2">
            <div class="footer-middle">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="widget">
                            <h3 class="widget-title">Customer Services</h3>
                            <div class="widget-content">
                                <ul>
                                    <li><a href="#">Help & FAQs</a></li>
                                    <li><a href="#">Order Tracking</a></li>
                                    <li><a href="#">Shipping & Delivery</a></li>
                                    <li><a href="#">Orders History</a></li>
                                    <li><a href="#">Advanced Search</a></li>
                                    <li><a href="login.html">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="widget">
                            <h3 class="widget-title">About Us</h3>
                            <div class="widget-content">
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Our Stores</a></li>
                                    <li><a href="#">Corporate Sales</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="widget">
                            <h3 class="widget-title">More Information</h3>
                            <div class="widget-content">
                                <ul>
                                    <li><a href="#">Affiliates</a></li>
                                    <li><a href="#">Refer a Friend</a></li>
                                    <li><a href="#">Student Beans Offers</a></li>
                                    <li><a href="#">Gift Vouchers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="widget">
                            <h3 class="widget-title">Follow Us</h3>
                            <div class="widget-content">
                                <div class="social-icons">
                                    <a href="#" class="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></a>
                                    <a href="#" class="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></a>
                                    <a href="#" class="social-icon social-instagram icon-instagram" target="_blank" title="Instagram"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom d-sm-flex align-items-center">
                <div class="footer-left">
                    <span class="footer-copyright">Porto eCommerce. © 2021. All Rights
                        Reserved</span>
                </div>

                <div class="footer-right ml-auto mt-1 mt-sm-0">
                    <div class="payment-icons mr-0">
                        <span class="payment-icon visa" style="background-image: url(/assets/images/payments/payment-visa.svg)"></span>
                        <span class="payment-icon paypal" style="background-image: url(/assets/images/payments/payment-paypal.svg)"></span>
                        <span class="payment-icon stripe" style="background-image: url(/assets/images/payments/payment-stripe.png)"></span>
                        <span class="payment-icon verisign" style="background-image:  url(/assets/images/payments/payment-verisign.svg)"></span>
                    </div>
                </div>
            </div>
            <!-- End .footer-bottom -->
        </footer>
        <!-- End .footer -->
    </div>
  </div>
</template>

<style>

</style>
