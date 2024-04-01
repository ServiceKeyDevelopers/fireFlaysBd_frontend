<script setup>
const toggleMenu = () => {
  document.body.classList.toggle("mmenu-active");
};
</script>

<template>
  <div>
    <div class="mobile-menu-overlay" @click="toggleMenu()"></div>
    <!-- End .mobil-menu-overlay -->
    <div class="mobile-menu-container">
      <div class="mobile-menu-wrapper">
        <span class="mobile-menu-close" @click="toggleMenu()"
          ><i class="fa fa-times"></i
        ></span>
        <nav class="mobile-nav">
          <ul class="mobile-menu">
            <li><router-link :to="{name: 'HomePage'}"  @click="toggleMenu()">Home</router-link></li>
            <li><router-link :to="{name: 'ShopPage'}"  @click="toggleMenu()">Shop</router-link></li>
            <li><router-link :to="{name: 'AboutPage'}"  @click="toggleMenu()">About Us</router-link></li>
            <li><router-link :to="{name: 'ContactPage'}"  @click="toggleMenu()">Contact Us</router-link></li>
            <li><router-link :to="{name: 'WishlistPage'}"  @click="toggleMenu()">Wishlist</router-link></li>
            <li><router-link :to="{name: 'LoginPage'}"  @click="toggleMenu()">Login & Register</router-link></li>
          </ul>
        </nav>
        <!-- End .mobile-nav -->

        <form class="search-wrapper mb-2" action="#">
          <input
            type="text"
            class="form-control mb-0"
            placeholder="Search..."
            required
          />
          <button
            class="btn icon-search text-white bg-transparent p-0"
            type="submit"
          ></button>
        </form>

        <div class="social-icons">
          <a
            href="#"
            class="social-icon social-facebook icon-facebook"
            target="_blank"
          >
          </a>
          <a
            href="#"
            class="social-icon social-twitter icon-twitter"
            target="_blank"
          >
          </a>
          <a
            href="#"
            class="social-icon social-instagram icon-instagram"
            target="_blank"
          >
          </a>
        </div>
      </div>
      <!-- End .mobile-menu-wrapper -->
    </div>
  </div>
</template>

<style></style>
