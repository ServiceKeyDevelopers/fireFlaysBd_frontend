<script setup>
import { onMounted, ref } from 'vue';
import { CartSidebar } from "@/components";


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
                            <form action="#" method="get">
                                <div class="header-search-wrapper mr-1">
                                    <input type="search" class="form-control" name="q" id="q" placeholder="Search..." required>
                                    <!-- End .select-custom -->
                                    <button class="btn icon-magnifier p-0" title="search" type="submit"></button>
                                </div>
                                <!-- End .header-search-wrapper -->
                            </form>
                        </div>
                        <!-- End .header-search -->

                        <div class="header-contact header-wishlist d-lg-flex pl-4 pr-sm-4 pr-2 ml-2">
                            <router-link :to="{name: 'WishlistPage'}" class="header-icon mr-0" title="wishlist"><i
                                    class="icon-wishlist-2"></i></router-link>
                            <h6 class="text-capitalize"><span>Favorites</span><router-link :to="{name: 'WishlistPage'}">Wishlist</router-link>
                            </h6>
                        </div>

                        <div class="header-contact d-lg-flex pr-sm-4 pr-2">
                            <router-link :to="{name: 'LoginPage'}" class="header-icon mr-0" title="login"><i class="icon-user-2"></i></router-link>
                            <h6 class="text-capitalize"><span class="ls-n-20">Welcome</span><router-link :to="{name: 'LoginPage'}">Sign In
                                    / Register</router-link></h6>
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

</style>