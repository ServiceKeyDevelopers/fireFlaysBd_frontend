<script setup>
import { ref } from "vue";


const stickyNavbar = ref(false);
const isCartMenu = ref(false);


const cartOpen = () => {
    isCartMenu.value =!isCartMenu.value;
    document.body.classList.toggle('cart-opened');
} 


window.addEventListener('scroll', () => {
    const scrollTopWindow = window.pageYOffset;
    if (scrollTopWindow > 200) {
      stickyNavbar.value = true;
    }else{
      stickyNavbar.value = false;
    }
  });

</script>

<template>
 <div class="sticky-navbar" :class="{'fixed' : stickyNavbar }">
      <div class="sticky-info">
        <router-link :to="{name: 'HomePage'}"> <i class="icon-home"></i>Home </router-link>
      </div>
      <div class="sticky-info">
        <router-link :to="{name: 'ShopPage'}" class="">
          <i class="icon-bars"></i>Shop
        </router-link>
      </div>
      <div class="sticky-info">
        <router-link :to="{name: 'WishlistPage'}" class="">
          <i class="icon-wishlist-2"></i>Wishlist
        </router-link>
      </div>
      <div class="sticky-info">
        <router-link :to="{name: 'LoginPage'}" class=""> <i class="icon-user-2"></i>Account </router-link>
      </div>
      <div class="sticky-info">
        <a  class="" @click.prevent="cartOpen()">
          <i class="icon-shopping-cart position-relative">
            <span class="cart-count badge-circle">3</span></i>Cart
        </a>
      </div>
    </div>
    <a id="scroll-top" href="#top" title="Top" role="button" class="fixed"><i class="icon-angle-up"></i></a>
</template>

<style >

</style>