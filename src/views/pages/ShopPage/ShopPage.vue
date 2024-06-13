<script setup>
import { ref, onMounted, watch } from "vue";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import {ProductCard, Breadcrumb, LoginModal, Footer} from "@/components";
import { storeToRefs } from 'pinia';
import {useShop} from '@/stores'
import { useRoute, useRouter } from "vue-router";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const route  = useRoute();
const router = useRouter();


const shop                           = useShop();
const { products, sideBar, loading } = storeToRefs(shop);

const newSlide = ref([Navigation]);
const modules  = ref([Pagination, Autoplay]);

const productType            = ref("");
const selectedBrandIds       = ref([]);
const selectedCategoryIds    = ref([]);
const selectedSubCategoryIds = ref("");
const sortingPrice           = ref([]);
const searchQuery            = ref("");
const paginateSize           = ref(20);

// sorting functions 
const getProducts = (page=1) => {
  products.value = [];
  shop.getData(
    productType.value,
    selectedBrandIds.value,
    selectedCategoryIds.value,
    selectedSubCategoryIds.value,
    sortingPrice.value,
    searchQuery.value,
    paginateSize.value,
    page 
  );
};

const sortByPaginateSize = () => {
    getProducts();
}


// Category wise product showing

const queryProducts = () => {
  selectedCategoryIds.value = [];
  selectedBrandIds.value = [];
  if (route.query.category) {
    selectedCategoryIds.value.push(route.query.category);
  }
  if (route.query.subCategory) {
    selectedSubCategoryIds.value = route.query.subCategory;
  }
  if (route.query.brand) {
    selectedBrandIds.value.push(route.query.brand);
  }
  if (route.query.recent) {
    productType.value = route.query.recent;
  }
  if (route.query.top) {
    productType.value = route.query.top;
  }
  if (route.query.feature) {
    productType.value = route.query.feature;
  }
};

// category slug wise product showing
watch(
  () => route.query.category || route.query.brand || route.query.subCategory,
  async (newValue, oldValue) => {
    queryProducts();
    getProducts();
  }
);

onMounted(() => {
    queryProducts();
    getProducts();
})

</script>

<template>
  <div>
    <div class="main-content">        
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

        <nav class="toolbox toolbox-pagination">
            <div class="toolbox-item toolbox-show">
                <label>Show:</label>

                <div class="select-custom">
                    <select name="count" class="form-control" v-model="paginateSize" @change="sortByPaginateSize">
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <!-- End .select-custom -->
            </div>
            <!-- End .toolbox-item -->

            <ul class="pagination toolbox-item">
                <Bootstrap5Pagination :data="products" @pagination-change-page="getProducts" :limit="3" >
                    <template #prev-nav>
                        <a class="Previous" href="#">Prev</a>
                    </template>
                    <template #next-nav>
                        <a class="Next" href="#">Next</a>
                    </template>
                </Bootstrap5Pagination>
            </ul>
        </nav>
    </div>
  </div>
</template>

<style>

</style>
