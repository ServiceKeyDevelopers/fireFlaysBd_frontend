
<script setup>
import { MiddleHeader, TopHeader } from "@/components";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// slider get data 
import { storeToRefs } from 'pinia';
// slider data fetch 
import {useCategory} from '@/stores'

// category data fetch 
const category = useCategory();
const {categories} = storeToRefs(category)


const route = useRoute();
const isActiveRoute = (routeName) =>  {
      return route.name === routeName;
    }


onMounted(() => {
    category.getData();
})
</script>
<template>
        <aside class="col-lg-3 order-lg-first sidebar-home mobile-sidebar">
            <div class="sidebar-wrapper">
                <div class="side-menu-wrapper text-uppercase border-0 font2">

                    <h2 class="side-menu-title ls-n-10">Customer Services</h2>

                    <nav class="side-nav">
                        <ul class="menu menu-vertical main-vertical sf-arrows d-block pb-0 no-superfish">
                            <li :class="{ 'active': isActiveRoute('ShopPage') }"><router-link :to="{name: 'ShopPage'}">Shop</router-link></li>
                            <li :class="{ 'active': isActiveRoute('CheckoutPage') }"><router-link :to="{name: 'CheckoutPage'}">Checkout Page</router-link></li>
                            <li :class="{ 'active': isActiveRoute('ProductDetailsPage') }"><router-link :to="{name: 'ProductDetailsPage'}">Single Product</router-link></li>
                            <li :class="{ 'active': isActiveRoute('WishlistPage') }"><router-link :to="{name: 'WishlistPage'}">Wishlist</router-link></li>
                            <li :class="{ 'active': isActiveRoute('AboutPage') }"><router-link :to="{name: 'AboutPage'}">About Us</router-link></li>
                            <li :class="{ 'active': isActiveRoute('ContactPage') }"><router-link :to="{name: 'ContactPage'}">Contact Us</router-link></li>
                            <li :class="{ 'active': isActiveRoute('LoginPage') }"><router-link :to="{name: 'LoginPage'}">Login & Register</router-link></li>
                        </ul>
                    </nav>

                    <h2 class="side-menu-title ls-n-10 pb-2">Categories</h2>

                    <nav class="side-nav">
                        <ul class="menu menu-vertical sf-arrows d-block no-superfish">
                            <li v-for="(category, index) in categories.result" :key="index">
                                <a href="demo40-shop.html">{{ category.name }}<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Alcohol</a></li>
                                    <li><a href="demo40-shop.html">Beverages</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                </div>
                <!-- End .side-menu-container -->
            </div>
            <!-- End .sidebar-wrapper -->
        </aside>

</template>

<style>

</style>