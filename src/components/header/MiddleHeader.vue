<script setup>
import { ref } from 'vue';

const isMenuActive = ref(false);
const isCartMenu = ref(false);
const stickyNavbar = ref(false);

const Top = ref(0)
const toggleMenu = () => {
  isMenuActive.value =!isMenuActive.value;
  document.body.classList.toggle('mmenu-active');
};


const cartOpen = () => {
    isCartMenu.value =!isCartMenu.value;
    document.body.classList.toggle('cart-opened');
} 


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
                                    <div class="select-custom">
                                        <select id="cat" name="cat">
                                            <option value="">All Categories</option>
                                            <option value="4">Fashion</option>
                                            <option value="12">- Women</option>
                                            <option value="13">- Men</option>
                                            <option value="66">- Jewellery</option>
                                            <option value="67">- Kids Fashion</option>
                                            <option value="5">Electronics</option>
                                            <option value="21">- Smart TVs</option>
                                            <option value="22">- Cameras</option>
                                            <option value="63">- Games</option>
                                            <option value="7">Home &amp; Garden</option>
                                            <option value="11">Motors</option>
                                            <option value="31">- Cars and Trucks</option>
                                            <option value="32">- Motorcycles &amp; Powersports</option>
                                            <option value="33">- Parts &amp; Accessories</option>
                                            <option value="34">- Boats</option>
                                            <option value="57">- Auto Tools &amp; Supplies</option>
                                        </select>
                                    </div>
                                    <!-- End .select-custom -->
                                    <button class="btn icon-magnifier p-0" title="search" type="submit"></button>
                                </div>
                                <!-- End .header-search-wrapper -->
                            </form>
                        </div>
                        <!-- End .header-search -->

                        <div class="header-contact header-wishlist d-lg-flex pl-4 pr-sm-4 pr-2 ml-2">
                            <a href="wishlist.html" class="header-icon mr-0" title="wishlist"><i
                                    class="icon-wishlist-2"></i></a>
                            <h6 class="text-capitalize"><span>Favorites</span><a href="login.html">Wishlist</a>
                            </h6>
                        </div>

                        <div class="header-contact d-lg-flex pr-sm-4 pr-2">
                            <a href="login.html" class="header-icon mr-0" title="login"><i class="icon-user-2"></i></a>
                            <h6 class="text-capitalize"><span class="ls-n-20">Welcome</span><a href="login.html">Sign In
                                    / Register</a></h6>
                        </div>

                        <div class="separator"></div>

                        <div class="cart-dropdown-wrapper d-flex align-items-center pt-2">
                            <span class="cart-subtotal text-right font2 mr-3">Shopping Cart
                                <span class="cart-price d-block font2">$0.00</span>
                            </span>

                            <div class="dropdown cart-dropdown" :class="{isCartMenu : 'show'}">
                                <a href="#" title="Cart" class="cart-toggle"  @click.prevent="cartOpen()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i class="icon-cart-thick"></i>
                                    <span class=" cart-count badge-circle">3</span>
                                </a>

                                <div class="cart-overlay" @click.prevent="cartOpen()"></div>

                                <div class="dropdown-menu mobile-cart" :class="{isCartMenu : 'show'}">
                                    <a href="#" title="Close (Esc)" class="btn-close" @click.prevent="cartOpen()">×</a>

                                    <div class="dropdownmenu-wrapper custom-scrollbar">
                                        <div class="dropdown-cart-header">Shopping Cart</div>
                                        <!-- End .dropdown-cart-header -->

                                        <div class="dropdown-cart-products">
                                            <div class="product">
                                                <div class="product-details">
                                                    <h4 class="product-title">
                                                        <a href="product.html">Ultimate 3D Bluetooth Speaker</a>
                                                    </h4>

                                                    <span class="cart-product-info">
                                                        <span class="cart-product-qty">1</span> × $99.00
                                                    </span>
                                                </div>
                                                <!-- End .product-details -->

                                                <figure class="product-image-container">
                                                    <a href="product.html" class="product-image">
                                                        <img src="@/assets/images/products/product-1.jpg" alt="product" width="80" height="80">
                                                    </a>

                                                    <a href="#" class="btn-remove" title="Remove Product"><span>×</span></a>
                                                </figure>
                                            </div>
                                            <!-- End .product -->

                                            <div class="product">
                                                <div class="product-details">
                                                    <h4 class="product-title">
                                                        <a href="product.html">Brown Women Casual HandBag</a>
                                                    </h4>

                                                    <span class="cart-product-info">
                                                        <span class="cart-product-qty">1</span> × $35.00
                                                    </span>
                                                </div>
                                                <!-- End .product-details -->

                                                <figure class="product-image-container">
                                                    <a href="product.html" class="product-image">
                                                        <img src="@/assets/images/products/product-2.jpg" alt="product" width="80" height="80">
                                                    </a>

                                                    <a href="#" class="btn-remove" title="Remove Product"><span>×</span></a>
                                                </figure>
                                            </div>
                                            <!-- End .product -->

                                            <div class="product">
                                                <div class="product-details">
                                                    <h4 class="product-title">
                                                        <a href="product.html">Circled Ultimate 3D Speaker</a>
                                                    </h4>

                                                    <span class="cart-product-info">
                                                        <span class="cart-product-qty">1</span> × $35.00
                                                    </span>
                                                </div>
                                                <!-- End .product-details -->

                                                <figure class="product-image-container">
                                                    <a href="product.html" class="product-image">
                                                        <img src="@/assets/images/products/product-3.jpg" alt="product" width="80" height="80">
                                                    </a>
                                                    <a href="#" class="btn-remove" title="Remove Product"><span>×</span></a>
                                                </figure>
                                            </div>
                                            <!-- End .product -->
                                        </div>
                                        <!-- End .cart-product -->

                                        <div class="dropdown-cart-total">
                                            <span>SUBTOTAL:</span>

                                            <span class="cart-total-price float-right">$134.00</span>
                                        </div>
                                        <!-- End .dropdown-cart-total -->

                                        <div class="dropdown-cart-action">
                                            <a href="cart.html" class="btn btn-gray btn-block view-cart">View
                                                Cart</a>
                                            <a href="checkout.html" class="btn btn-dark btn-block">Checkout</a>
                                        </div>
                                        <!-- End .dropdown-cart-total -->
                                    </div>
                                    <!-- End .dropdownmenu-wrapper -->
                                </div>
                                <!-- End .dropdown-menu -->
                            </div>
                            <!-- End .dropdown -->
                        </div>
                    </div>
                    <!-- End .header-right -->
                </div>
                <!-- End .container -->
            </div>
    </div>
</template>

<style>

</style>