<script setup>
import { onMounted, ref } from 'vue';
import { CartSidebar } from "@/components";
import axiosInstance from "@/services/axiosService.js";
// All Import File  Code Is Here......................................................................................................
import { useAuth, useNotification } from '@/stores';
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from 'pinia';
const auth = useAuth()
const router = useRouter();
const {user, loading} =  storeToRefs(auth)
const notify = useNotification();
// search from start
const searchData = ref([]);
const name = ref('');
// search from end

const logout = async () => {
    const res = await auth.logout();
    if (res.success) {
        router.push({ name: "HomePage"});
        notify.Success("Logout Successfully Done");
    }
}


const isMenuActive = ref(false);
const stickyNavbar = ref(false);

const Top = ref(0)
const toggleMenu = () => {
  isMenuActive.value =!isMenuActive.value;
  document.body.classList.toggle('mmenu-active');
};



window.addEventListener('scroll', () => {
    const scrollTopWindow = window.pageYOffset;
    if (scrollTopWindow > 160) {
        stickyNavbar.value = true;
    }else{
        stickyNavbar.value = false;
    }
  });

  // search from start
  
  const getProducts = async() =>{
      try {
          const res = await axiosInstance.get(`/products`, 
          
          {
              params:{
                  name: name.value,
                  paginate_size:5,
                }
            }
        );
        searchData.value = res.data.result.data
    } catch (error) {
        console.log(error);
    }
}

const clearSearchBar = () =>{
    name.value='';
}

// search from end



</script>
<template>
    <div>
        <div class="header-middle sticky-header" :class="{'fixed' : stickyNavbar }" data-sticky-options="{'mobile': true}" :style="{'top': Top + 'px'}">
                <div class="container-fluid">
                    <div class="header-left justify-content-lg-center">
                        <button class="mobile-menu-toggler text-primary mr-2" @click="toggleMenu" type="button" :class="{ active: isMenuActive }">
                            <i class="fas fa-bars"></i>
                        </button>
                        <router-link :to="{name: 'HomePage'}" class="logo">
                            <img src="@/assets/images/logo-black.png" class="w-100" width="111" height="44" alt="Porto Logo">
                        </router-link>
                    </div>
                    <!-- End .header-left -->

                    <div class="header-right w-lg-max">
                        <div class="header-icon header-search header-search-inline header-search-category d-sm-block d-none w-lg-max text-right mt-0">
                            <a href="#" class="search-toggle" role="button"><i class="icon-magnifier"></i></a>
                            <form class="header-form">
                                <div class="header-search-wrapper mr-1">
                                    <input type="search" class="form-control" name="q" id="q" placeholder="Search anything..."  v-model="name" @input="getProducts()">
                                    <!-- End .select-custom -->
                                    <button class="btn icon-magnifier p-0" title="search" type="submit"></button>
                                </div>
                                <!-- End .header-search-wrapper -->
                                <ul class="search-data" v-if="name != ''">
                                    <li v-for="(product, index) in searchData" :key="index">
                                        
                                        <router-link :to="{name:'ProductDetailsPage',params: { id: product.id, slug: product.slug }}" @click="clearSearchBar" class="product-info">
                                            <div class="row search-row">
                                                <div class="col-md-1 col-sm-2 search-img">
                                                    <img :src="product.image" alt="" style="border-radius: 5px; width: 35px;">
                                                </div>
                                                <div class="col-md-7 col-sm-5 search-details">
                                                    <p style="color:#000; margin: 0;line-height: 1.2;">{{ product.name }}</p>
                                                    <span style="font-size: 12px; margin-right: 20px; color: red" v-if="product?.current_stock > 0"><span style="color: red; font-weight: 900;">In Stock</span></span>
                                                    <span style="font-size: 12px; margin-right: 20px; color: red" v-else><span style="color: red; font-weight: 900;">Out Of Stock</span></span>
                                                    <span style="font-size: 12px; margin-right: 20px;"><span style="color: #000; font-weight: 500;">Category : </span> {{ product.category.name }}</span>
                                                    <span style="font-size: 12px; margin-right: 20px; color: red" v-if="product?.sku"><span style="color: red; font-weight: 900;">SKU : {{ product.sku }}</span></span>
                                                    <span v-if="product.mrp !=0" style="font-weight: 700; color: red;"> Price :
                                                        <del v-if="product.offer_price !=0">{{product.mrp}} tk </del>
                                                        <span>{{ product.offer_price !=0? product.offer_price : product.mrp  }} tk</span>
                                                    </span>
                                                </div>
                                                <div class="col-md-4 col-sm-5 search-price">
                                                    <p>
                                                        <span v-if="product.offer_percent !=0" class="featured_label">{{Math.floor(product.offer_percent)}}% Off</span>
                                                    </p>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <!-- End .header-search -->

                        <div :to="{name: 'WishlistPage'}" class="header-contact header-wishlist dropdown cart-dropdown d-lg-flex pl-4 pr-sm-4 pr-2 ml-2">
                            <router-link :to="{name: 'WishlistPage'}" class="header-mr-0" title="wishlist">
                                <i class="icon-wishlist-2"></i>
                                <span class=" cart-count badge-circle">{{ auth?.user?.wishlist?.length }}</span>
                            </router-link>
                            <h6 class="text-capitalize"><span>Favorites</span><router-link :to="{name: 'WishlistPage'}">Wishlist</router-link></h6>
                        </div>

                        <div class="header-contact d-lg-flex pr-sm-4 pr-2" @click.prevent="logout" v-if="user.user">
                            <a href="" class="header-icon mr-0" title="login"><i class="icon-user-2"></i></a>
                            <h6 class="text-capitalize"><a href="">Logout</a></h6>
                        </div>
                        <div class="header-contact d-lg-flex pr-sm-4 pr-2" v-else>
                            <router-link :to="{name: 'LoginPage'}" class="header-icon mr-0" title="login"><i class="icon-user-2"></i></router-link>
                            <h6 class="text-capitalize"><span class="ls-n-20">Welcome</span><router-link :to="{name: 'LoginPage'}">Sign In / Register</router-link></h6>
                        </div>

                        <div class="separator"></div>

                    <CartSidebar />

                    </div>
                    <!-- End .header-right -->
                </div>
                <!-- End .container -->
            </div>
    </div>
</template>

<style>

.cate-btn{
  font-size:25px;
}

.header-form{
        position: relative;
    }
    .form-style{
        padding: 3px 10px;
        margin-left: 10px;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 5px;
    }
    .search-data{
        position: absolute;
        width: 100%;
        z-index: 9;
        top: 52px;
        left: 0;
        background-color: #F5F5F5;
        border-radius: 10px;
        border-bottom: 2px ;
    }
    .product-info{
        display: block;
        padding: 10px 10px;
    }
    .search-data li {
        border-top: 1px solid rgb(220, 221, 220);
        position: relative;
        overflow: hidden !important;
    }

    .search-data li:first-child {
        border-top: none; /* Remove the top border from the first li */
    }
    .featured_label{
        float: right;
        margin: 2px -48px 0 0;
        background-color: #E86121;
        color: #fff;
        padding: 0 40px;
        font-size: 13px;
        top: 0;
        right: 0;
        transform: rotate(40deg);
    }

    .search-details{
        text-align: left;
    }

    @media (max-width: 767px) {
        .product-price{
            font-size: 13px;
        }
        .search-details p{
            font-size: 14px;
        }
    }
    @media (max-width: 575px) {
        .search-img img {
            max-width: 100%;
        }
        .search-price{
            position: relative;
        }
        .search-img{
            width: 15%;
        }
        .search-details{
            width: 40%;
        }
        .search-price{
            width: 40%;
        }
        .featured_label{
            display: none;
        }
    }
    @media (max-width: 450px) {
        .search-img{
            width: 20%;
        }
        .search-details{
            width: 50%;
        }
        .search-price{
            width: 30%;
        }
        .search-price del{
            display: none;
        }
        .featured_label{
            margin: 0;
            position: absolute;
            top: 0;
            right: -37px;
        }
        .search-row>* {
            width: inherit !important;
        }
        
    }


</style>