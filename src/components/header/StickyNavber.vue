<script setup>
import { ref } from "vue";


const stickyNavbar = ref(false);

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
        <a href="demo40.html"> <i class="icon-home"></i>Home </a>
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
        <a href="login.html" class=""> <i class="icon-user-2"></i>Account </a>
      </div>
      <div class="sticky-info">
        <a href="cart.html" class="">
          <i class="icon-shopping-cart position-relative">
            <span class="cart-count badge-circle">3</span></i>Cart
        </a>
      </div>
    </div>
    <a id="scroll-top" href="#top" title="Top" role="button" class="fixed"><i class="icon-angle-up"></i></a>
</template>

<style >

</style>