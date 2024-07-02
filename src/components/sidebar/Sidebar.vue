
<script setup>
import { MiddleHeader, TopHeader } from "@/components";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

// slider get data 
import { storeToRefs } from 'pinia';
// slider data fetch 
import {useCategory} from '@/stores'

// category data fetch 
const category = useCategory();
const {categories} = storeToRefs(category)


const activeIndex = ref(null);

const route = useRoute();
const router = useRouter();
const isActiveRoute = (routeName) =>  {
      return route.name === routeName;
    }

const toggleDropdown = (index, category) => {
    if (category.sub_category.length > 0) {
        if (activeIndex.value === index) {
        activeIndex.value = null; 
        } else {
        activeIndex.value = index; 
        }
    }else{
        router.push({ name:'shopPage', query:{ category: category.id} });
    }
 }

 const toggleMenu = () => {
  document.body.classList.toggle("sidebar-opened");
};


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
                            <li :class="{ 'active': isActiveRoute('ShopPage') }"><router-link :to="{name: 'ShopPage'}" @click="toggleMenu()">Shop</router-link></li>
                            <li :class="{ 'active': isActiveRoute('Dashboard') }"><router-link :to="{name: 'Dashboard'}" @click="toggleMenu()">Dashboard</router-link></li>
                            <li :class="{ 'active': isActiveRoute('WarrantyCheck') }"><router-link :to="{name: 'WarrantyCheck'}" @click="toggleMenu()">Warranty Check</router-link></li>
                            <li :class="{ 'active': isActiveRoute('CheckoutPage') }"><router-link :to="{name: 'CheckoutPage'}" @click="toggleMenu()">Checkout Page</router-link></li>
                            <li :class="{ 'active': isActiveRoute('WishlistPage') }"><router-link :to="{name: 'WishlistPage'}" @click="toggleMenu()">Wishlist</router-link></li>
                            <li :class="{ 'active': isActiveRoute('AboutPage') }"><router-link :to="{name: 'AboutPage'}" @click="toggleMenu()">About Us</router-link></li>
                            <li :class="{ 'active': isActiveRoute('ContactPage') }"><router-link :to="{name: 'ContactPage'}" @click="toggleMenu()">Contact Us</router-link></li>
                            <li :class="{ 'active': isActiveRoute('LoginPage') }"><router-link :to="{name: 'LoginPage'}" @click="toggleMenu()">Login & Register</router-link></li>
                        </ul>
                    </nav>

                    <h2 class="side-menu-title ls-n-10 pb-2 mt-2">Categories</h2>
                    <nav class="side-nav">
                        <ul class="menu menu-vertical sf-arrows d-block no-superfish">
                            <li v-for="(category, index) in categories.result" :key="index">
                                <router-link :to="{name: 'ShopPage', query:{ category: category.id}}" class="active">{{ category.name }}<span class="sf-with-ul menu-btn" @click.prevent="toggleDropdown(index, category)" v-if="category.sub_category.length > 0"></span></router-link>
                                <ul v-if="category.sub_category.length > 0 " :style="{ 'display': activeIndex === index ? 'block' : 'none' }">
                                    <li v-for="(subCategory, index) in category.sub_category" :key="index"><router-link  :to="{name: 'ShopPage', query:{ subCategory: subCategory.id}}">{{ subCategory.name }}</router-link></li>
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
.category-sidebar-active{
    color: #00b37c;
}
.sidebar-home {
    z-index: 1 !important;
}
</style>