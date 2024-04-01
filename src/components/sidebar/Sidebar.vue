
<script setup>
import { MiddleHeader, TopHeader } from "@/components";
import { useRoute } from "vue-router";
const route = useRoute();
const isActiveRoute = (routeName) =>  {
      return route.name === routeName;
    }
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
                            <li>
                                <a href="demo40-product.html">Products<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <div class="megamenu megamenu-fixed-width">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <a href="#" class="nolink pl-0">PRODUCT PAGES</a>
                                            <ul class="submenu pb-0">
                                                <li><a href="product.html">SIMPLE PRODUCT</a></li>
                                                <li><a href="product-variable.html">VARIABLE PRODUCT</a>
                                                </li>
                                                <li><a href="product.html">SALE PRODUCT</a></li>
                                                <li><a href="product.html">FEATURED & ON SALE</a></li>
                                                <li><a href="product-custom-tab.html">WITH CUSTOM
                                                        TAB</a>
                                                </li>
                                                <li><a href="product-sidebar-left.html">WITH LEFT
                                                        SIDEBAR</a>
                                                </li>
                                                <li><a href="product-sidebar-right.html">WITH RIGHT
                                                        SIDEBAR</a>
                                                </li>
                                                <li><a href="product-addcart-sticky.html">ADD CART
                                                        STICKY</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-4">
                                            <a href="#" class="nolink pl-0">PRODUCT LAYOUTS</a>
                                            <ul class="submenu pb-0">
                                                <li><a href="product-extended-layout.html">EXTENDED
                                                        LAYOUT</a>
                                                </li>
                                                <li><a href="product-grid-layout.html">GRID IMAGE</a>
                                                </li>
                                                <li><a href="product-full-width.html">FULL WIDTH
                                                        LAYOUT</a>
                                                </li>
                                                <li><a href="product-sticky-info.html">STICKY INFO</a>
                                                </li>
                                                <li><a href="product-sticky-both.html">LEFT & RIGHT
                                                        STICKY</a>
                                                </li>
                                                <li><a href="product-transparent-image.html">TRANSPARENT
                                                        IMAGE</a></li>
                                                <li><a href="product-center-vertical.html">CENTER
                                                        VERTICAL</a>
                                                </li>
                                                <li><a href="#">BUILD YOUR OWN</a></li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-4 p-0 d-lg-block d-none">
                                            <div class="menu-banner menu-banner-2">
                                                <figure>
                                                    <img src="@/assets/images/menu-banner-1.jpg" alt="Menu banner" class="product-promo">
                                                </figure>
                                                <i>OFF</i>
                                                <div class="banner-content">
                                                    <h4>
                                                        <span class="">UP TO</span><br />
                                                        <b class="">50%</b>
                                                    </h4>
                                                </div>
                                                <a href="demo40-shop.html" class="btn btn-sm btn-dark">SHOP
                                                    NOW</a>
                                            </div>
                                        </div>
                                        <!-- End .col-lg-4 -->
                                    </div>
                                    <!-- End .row -->
                                </div>
                                <!-- End .megamenu -->
                            </li>
                        </ul>
                    </nav>

                    <h2 class="side-menu-title ls-n-10 pb-2">Categories</h2>

                    <nav class="side-nav">
                        <ul class="menu menu-vertical sf-arrows d-block no-superfish">
                            <li>
                                <a href="demo40-shop.html">Fruits & Vegetables<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <div class="megamenu megamenu-fixed-width megamenu-one">
                                    <div class="row">
                                        <div class="col-lg-3 mb-1 pb-2">
                                            <a href="#" class="nolink pl-0 d-lg-none d-block">VARIATION
                                                1</a>
                                            <a href="#" class="nolink pl-0">FLESH</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">FRUITS</a></li>
                                                <li><a href="demo40-shop.html">APPLE</a></li>
                                                <li><a href="demo40-shop.html">COCOA</a></li>
                                                <li><a href="demo40-shop.html">TOMATO</a></li>
                                            </ul>

                                            <a href="#" class="nolink pl-0">COLLECTIVE</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">BANANA</a></li>
                                                <li><a href="demo40-shop.html">PEAR</a></li>
                                                <li><a href="demo40-shop.html">ORANGE</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4">
                                            <a href="#" class="nolink pl-0 d-lg-none d-block">VARIATION
                                                2</a>
                                            <a href="#" class="nolink pl-0">SIMPLE</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">ACTINDIA</a></li>
                                                <li><a href="demo40-shop.html">LEMON</a></li>
                                                <li><a href="demo40-shop.html">STRAWBERRY</a></li>
                                                <li><a href="demo40-shop.html">KOKA</a></li>
                                            </ul>

                                            <a href="#" class="nolink pl-0">VEGETABLES</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">BARBECUE</a></li>
                                                <li><a href="demo40-shop.html">ONION</a></li>
                                                <li><a href="demo40-shop.html">WINTER SNEAKERS</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-5 p-0 d-lg-block d-none">
                                            <div class="menu-banner menu-banner-2">
                                                <figure>
                                                    <img src="@/assets/images/demoes/demo40/menu-banner-1.jpg" alt="Menu banner" class="product-promo w-100">
                                                </figure>
                                                <i>OFF</i>
                                                <div class="banner-content">
                                                    <h4>
                                                        <span class="text-dark">UP TO</span><br />
                                                        <b class="text-dark">50%</b>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 d-lg-block d-none">
                                            <div class="partners-container row">
                                                <div class="col-xl-5col">
                                                    <div class="partner">
                                                        <img src="@/assets/images/brands/small/brand1.png" alt="logo image" width="140" height="60"></div>
                                                </div>
                                                <div class="col-xl-5col">
                                                    <div class="partner">
                                                        <img src="@/assets/images/brands/small/brand2.png" alt="logo image" width="140" height="60"></div>
                                                </div>
                                                <div class="col-xl-5col">
                                                    <div class="partner">
                                                        <img src="@/assets/images/brands/small/brand3.png" alt="logo image" width="140" height="60"></div>
                                                </div>
                                                <div class="col-xl-5col">
                                                    <div class="partner">
                                                        <img src="@/assets/images/brands/small/brand4.png" alt="logo image" width="140" height="60"></div>
                                                </div>
                                                <div class="col-xl-5col">
                                                    <div class="partner">
                                                        <img src="@/assets/images/brands/small/brand5.png" alt="logo image" width="140" height="60"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End .megamenu -->
                            </li>
                            <li>
                                <a href="demo40-shop.html">Meat & Seafood<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <div class="megamenu megamenu-fixed-width megamenu-two">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <a href="#" class="nolink pl-0">ACCESSORIES</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">SEAFOOD</a></li>
                                                <li><a href="demo40-shop.html">CABLES & ADAPTERS</a>
                                                </li>
                                                <li><a href="demo40-shop.html">ELECTRONIC CIGARETTES</a>
                                                </li>
                                                <li><a href="demo40-shop.html">BATTERIES</a>
                                                </li>
                                                <li><a href="demo40-shop.html">CHARGERS</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-3 pl-xl-2">
                                            <a href="#" class="nolink pl-0">AUDIO & VIDEO</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">TELEVISIONS</a></li>
                                                <li><a href="demo40-shop.html">TV RECEIVERS</a>
                                                </li>
                                                <li><a href="demo40-shop.html">PROJECTORS</a>
                                                </li>
                                                <li><a href="demo40-shop.html">AUDIO AMPLIFIER</a>
                                                </li>
                                                <li><a href="demo40-shop.html">TV STICKS</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-3 pl-xl-0">
                                            <a href="#" class="nolink pl-0">CAMERA & PHOTO</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">DiGITAL CAMERAS</a></li>
                                                <li><a href="demo40-shop.html">CAMCORDERS</a>
                                                </li>
                                                <li><a href="demo40-shop.html">CAMERA DRONES</a>
                                                </li>
                                                <li><a href="demo40-shop.html">ACTION CAMERAS</a>
                                                </li>
                                                <li><a href="demo40-shop.html">PHOTO SUPPLIES</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-3 pl-xl-0">
                                            <a href="#" class="nolink pl-0">LAPTOPS</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">GAMING LAPTOPS</a></li>
                                                <li><a href="demo40-shop.html">ULTRASLIM LAPTOPS</a>
                                                </li>
                                                <li><a href="demo40-shop.html">TABLETS</a>
                                                </li>
                                                <li><a href="demo40-shop.html">LAPTOP ACCESSORIES</a>
                                                </li>
                                                <li><a href="demo40-shop.html">TABLET ACCESSORIES</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->
                                        <div class="banner-container w-100 pl-3 pr-3 d-lg-block d-none">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="banner banner3 banner-md-vw text-transform-none">
                                                        <figure>
                                                            <img src="@/assets/images/demoes/demo40/menu-banner-2.jpg" alt="banner">
                                                        </figure>

                                                        <div class="banner-layer banner-layer-middle d-flex align-items-center justify-content-end pt-0">
                                                            <div class="content-left">
                                                                <h4 class="banner-layer-circle-item mb-0 ls-0">
                                                                    40<sup>%<small
                                                                            class="ls-0">OFF</small></sup>
                                                                </h4>
                                                            </div>
                                                            <div class="content-right text-right">
                                                                <h5 class=" ls-0"><del class="d-block m-b-2 text-secondary">$450</del>$270
                                                                </h5>
                                                                <h4 class="m-b-1 ls-n-25">Watches</h4>
                                                                <h3 class="mb-0">HURRY UP!</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End .banner -->
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="banner banner4 banner-md-vw">
                                                        <figure>
                                                            <img src="@/assets/images/demoes/demo40/menu-banner-3.jpg" alt="banner">
                                                        </figure>

                                                        <div class="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                                            <h3 class="text-dark text-right">
                                                                Electronic<br>Deals</h3>

                                                            <div class="coupon-sale-content">
                                                                <h4 class="custom-coupon-sale-text bg-dark text-white d-block font1 text-transform-none">
                                                                    Exclusive COUPON
                                                                </h4>
                                                                <h5 class="custom-coupon-sale-text font1 text-dark ls-n-10 p-0">
                                                                    <b class="text-dark">$100</b> OFF</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End .banner -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End .row -->
                                </div>
                                <!-- End .megamenu -->
                            </li>
                            <li>
                                <a href="#">Eggs & Dairy<span class="sf-with-ul menu-btn"></span></a>

                                <div class="megamenu megamenu-fixed-width megamenu-three">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <a href="#" class="nolink pl-0 d-flex flex-column"><i
                                                    class="icon-boy-broad-smile"></i>FOR HIM</a>
                                            <ul class="submenu pb-0">
                                                <li><a href="demo40-shop.html">HEALTH & UNTRITION</a></li>
                                                <li><a href="demo40-shop.html">BEAUTY & PERSONAL CARE</a>
                                                </li>
                                                <li><a href="demo40-shop.html">GIFTS FOR DAD</a>
                                                </li>
                                                <li><a href="demo40-shop.html">GIFTS FOR GRANDPA</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-3 pl-xl-2">
                                            <a href="#" class="nolink pl-0 d-flex flex-column"><i
                                                    class="icon-smiling-girl"></i>FOR HER</a>
                                            <ul class="submenu pb-0">
                                                <li><a href="demo40-shop.html">GIFTS FOR GIRLFRIEND</a></li>
                                                <li><a href="demo40-shop.html">PANTRY</a>
                                                </li>
                                                <li><a href="demo40-shop.html">PARTY SUPPLIES</a>
                                                </li>
                                                <li><a href="demo40-shop.html">PARTY SUPPLIES & CRAFTS</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-3 pl-xl-0">
                                            <a href="#" class="nolink pl-0 d-flex flex-column"><i
                                                    class="icon-smiling-baby"></i>FOR KIDS</a>
                                            <ul class="submenu pb-0">
                                                <li><a href="demo40-shop.html">BREAD & BAKERY</a></li>
                                                <li><a href="demo40-shop.html">BREAD</a>
                                                </li>
                                                <li><a href="demo40-shop.html">BAKERY</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->

                                        <div class="col-lg-3 pl-xl-0">
                                            <a href="#" class="nolink pl-0 d-flex flex-column"><i
                                                    class="icon-gift-2"></i>BIRTHDAY</a>
                                            <ul class="submenu pb-0">
                                                <li><a href="demo40-shop.html">DELI</a></li>
                                                <li><a href="demo40-shop.html">ALCOHOL</a>
                                                </li>
                                                <li><a href="demo40-shop.html">GIFTS FOR MON</a>
                                                </li>
                                                <li><a href="demo40-shop.html">GIFTS FOR GRANDMA</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- End .col-lg-4 -->
                                    </div>
                                    <!-- End .row -->
                                </div>
                                <!-- End .megamenu -->
                            </li>
                            <li>
                                <a href="demo40-shop.html">Snacks & Candy<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <div class="megamenu megamenu-fixed-width megamenu-four">
                                    <div class="row">
                                        <div class="col-lg-4 mb-1 pb-2">
                                            <a href="#" class="nolink pl-0 d-lg-none d-block">VARIATION
                                                1</a>
                                            <a href="#" class="nolink pl-0">FURNITURE</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">BEAUTY & PERSONAL CARE</a>
                                                </li>
                                                <li><a href="demo40-shop.html">SOF & COUCHES</a></li>
                                                <li><a href="demo40-shop.html">ARMCHARIRS</a></li>
                                                <li><a href="demo40-shop.html">BED FRAMES</a></li>
                                                <li><a href="demo40-shop.html">BEDSIDE TABLES</a></li>
                                                <li><a href="demo40-shop.html">BRESSING TABLES</a></li>
                                            </ul>

                                            <a href="#" class="nolink pl-0">HOME ACCESSORIES</a>
                                            <ul class="submenu pb-0">
                                                <li><a href="demo40-shop.html">DECORATIVE ACCESSORIES</a>
                                                </li>
                                                <li><a href="demo40-shop.html">CANDLES & HOLDERS</a></li>
                                                <li><a href="demo40-shop.html">HOME FRAGRANCE</a></li>
                                                <li><a href="demo40-shop.html">MIRRORS</a></li>
                                                <li><a href="demo40-shop.html">CLOCKS</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4">
                                            <a href="#" class="nolink pl-0 d-lg-none d-block">VARIATION
                                                2</a>
                                            <a href="#" class="nolink pl-0">LIGHTING</a>
                                            <ul class="submenu">
                                                <li><a href="demo40-shop.html">LIGHT BULBS</a></li>
                                                <li><a href="demo40-shop.html">LAMPS</a></li>
                                                <li><a href="demo40-shop.html">CEILING LIGHTS</a></li>
                                                <li><a href="demo40-shop.html">WALL LIGHTS</a></li>
                                                <li><a href="demo40-shop.html">BATHROOM LIGHTING</a></li>
                                                <li><a href="demo40-shop.html">OUTDOOR LIGHTING</a></li>
                                            </ul>

                                            <a href="#" class="nolink pl-0">GARDEN & OUTDOORS</a>
                                            <ul class="submenu pb-0">
                                                <li><a href="demo40-shop.html">GARDEN FURNITURE</a></li>
                                                <li><a href="demo40-shop.html">LAWN MOWERS</a></li>
                                                <li><a href="demo40-shop.html">PRESSURE WASHERS</a></li>
                                                <li><a href="demo40-shop.html">ALL ARDEN TOOLS &
                                                        EQUIPMENT</a></li>
                                                <li><a href="demo40-shop.html">BARBECURE & OUTDOOR
                                                        DINING</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-4 d-lg-block d-none">
                                            <div class="product-widgets-container">
                                                <div class="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo40-product.html">
                                                            <img src="@/assets/images/demoes/demo40/products/product-24.jpg" width="84" height="84" alt="product">
                                                        </a>
                                                    </figure>

                                                    <div class="product-details">
                                                        <h3 class="product-title">
                                                            <a href="demo40-product.html">Ultimate 3D
                                                                Bluetooth
                                                                Speaker</a>
                                                        </h3>

                                                        <div class="ratings-container">
                                                            <div class="product-ratings">
                                                                <span class="ratings" style="width:100%"></span>
                                                                <!-- End .ratings -->
                                                                <span class="tooltiptext tooltip-top"></span>
                                                            </div>
                                                            <!-- End .product-ratings -->
                                                        </div>
                                                        <!-- End .product-container -->

                                                        <div class="price-box">
                                                            <span class="product-price">$49.00</span>
                                                        </div>
                                                        <!-- End .price-box -->
                                                    </div>
                                                    <!-- End .product-details -->
                                                </div>

                                                <div class="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo40-product.html">
                                                            <img src="@/assets/images/demoes/demo40/products/product-23.jpg" width="84" height="84" alt="product">
                                                        </a>
                                                    </figure>

                                                    <div class="product-details">
                                                        <h3 class="product-title">
                                                            <a href="demo40-product.html">Brown Women Casual
                                                                HandBag</a>
                                                        </h3>

                                                        <div class="ratings-container">
                                                            <div class="product-ratings">
                                                                <span class="ratings" style="width:100%"></span>
                                                                <!-- End .ratings -->
                                                                <span class="tooltiptext tooltip-top">5.00</span>
                                                            </div>
                                                            <!-- End .product-ratings -->
                                                        </div>
                                                        <!-- End .product-container -->

                                                        <div class="price-box">
                                                            <span class="product-price">$49.00</span>
                                                        </div>
                                                        <!-- End .price-box -->
                                                    </div>
                                                    <!-- End .product-details -->
                                                </div>

                                                <div class="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo40-product.html">
                                                            <img src="@/assets/images/demoes/demo40/products/product-12.jpg" width="84" height="84" alt="product">
                                                        </a>
                                                    </figure>

                                                    <div class="product-details">
                                                        <h3 class="product-title">
                                                            <a href="demo40-product.html">Circled Ultimate
                                                                3D
                                                                Speaker</a>
                                                        </h3>

                                                        <div class="ratings-container">
                                                            <div class="product-ratings">
                                                                <span class="ratings" style="width:100%"></span>
                                                                <!-- End .ratings -->
                                                                <span class="tooltiptext tooltip-top"></span>
                                                            </div>
                                                            <!-- End .product-ratings -->
                                                        </div>
                                                        <!-- End .product-container -->

                                                        <div class="price-box">
                                                            <span class="product-price">$49.00</span>
                                                        </div>
                                                        <!-- End .price-box -->
                                                    </div>
                                                    <!-- End .product-details -->
                                                </div>

                                                <div class="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo40-product.html">
                                                            <img src="@/assets/images/demoes/demo40/products/product-6.jpg" width="84" height="84" alt="product">
                                                        </a>
                                                    </figure>

                                                    <div class="product-details">
                                                        <h3 class="product-title">
                                                            <a href="demo40-product.html">Circled Ultimate
                                                                3D
                                                                Speaker</a>
                                                        </h3>

                                                        <div class="ratings-container">
                                                            <div class="product-ratings">
                                                                <span class="ratings" style="width:100%"></span>
                                                                <!-- End .ratings -->
                                                                <span class="tooltiptext tooltip-top"></span>
                                                            </div>
                                                            <!-- End .product-ratings -->
                                                        </div>
                                                        <!-- End .product-container -->

                                                        <div class="price-box">
                                                            <span class="product-price">$49.00</span>
                                                        </div>
                                                        <!-- End .price-box -->
                                                    </div>
                                                    <!-- End .product-details -->
                                                </div>

                                                <div class="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="demo40-product.html">
                                                            <img src="@/assets/images/demoes/demo40/products/product-5.jpg" width="84" height="84" alt="product">
                                                        </a>
                                                    </figure>

                                                    <div class="product-details">
                                                        <h3 class="product-title">
                                                            <a href="demo40-product.html">Circled Ultimate
                                                                3D
                                                                Speaker</a>
                                                        </h3>

                                                        <div class="ratings-container">
                                                            <div class="product-ratings">
                                                                <span class="ratings" style="width:100%"></span>
                                                                <!-- End .ratings -->
                                                                <span class="tooltiptext tooltip-top"></span>
                                                            </div>
                                                            <!-- End .product-ratings -->
                                                        </div>
                                                        <!-- End .product-container -->

                                                        <div class="price-box">
                                                            <span class="product-price">$49.00</span>
                                                        </div>
                                                        <!-- End .price-box -->
                                                    </div>
                                                    <!-- End .product-details -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End .row -->
                                </div>
                                <!-- End .megamenu -->
                            </li>
                            <li>
                                <a href="demo40-shop.html">Beverages<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <div class="megamenu megamenu-fixed-width megamenu-five text-transform-none" style="background-image: url(assets/images/demoes/demo40/menu-banner-4.jpg);">
                                    <div class="row">
                                        <div class="col-lg-4 pt-0">
                                            <a href="#" class="nolink pl-0">INSTRUMENTS</a>
                                            <ul class="submenu bg-transparent">
                                                <li><a href="demo40-shop.html">Beverages</a>
                                                </li>
                                                <li><a href="demo40-shop.html">Guitar</a></li>
                                                <li><a href="demo40-shop.html">Drums Sets</a></li>
                                                <li><a href="demo40-shop.html">Percussions</a></li>
                                                <li><a href="demo40-shop.html">Pedals & Effects</a></li>
                                                <li><a href="demo40-shop.html">Sound Cards</a></li>
                                                <li><a href="demo40-shop.html">Studio Equipments</a></li>
                                                <li><a href="demo40-shop.html">Piano & Keyboards</a></li>
                                            </ul>

                                            <a href="#" class="nolink pl-0">EXTRA</a>
                                            <ul class="submenu bg-transparent pb-0">
                                                <li><a href="demo40-shop.html">Alcohol</a>
                                                </li>
                                                <li><a href="demo40-shop.html">Strings</a></li>
                                                <li><a href="demo40-shop.html">Recorders</a></li>
                                                <li><a href="demo40-shop.html">Amplifiers</a></li>
                                                <li><a href="demo40-shop.html">Accessories</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-8 pt-0 d-lg-block d-none">
                                            <div class="banner banner1 mb-2 h-100 d-flex align-items-center">
                                                <div class="banner-layer text-right pt-0">
                                                    <h6 class="text-transform-none">
                                                        CHECK NEW ARRIVALS
                                                    </h6>
                                                    <h3 class=" text-white">PROFESSIONAL</h3>
                                                    <h2 class="text-transform-none text-white">
                                                        HEADPHONES</h2>
                                                    <a href="demo40-shop.html" class="btn btn-dark">VIEW
                                                        ALL NOW</a>
                                                </div>
                                                <!-- End .banner-layer -->
                                            </div>
                                            <!-- End .home-slide -->
                                        </div>
                                    </div>
                                    <!-- End .row -->
                                </div>
                                <!-- End .megamenu -->
                            </li>
                            <li>
                                <a href="demo40-shop.html">Alcohol<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Alcohol</a></li>
                                    <li><a href="demo40-shop.html">Beverages</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Frozen<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Alcohol</a></li>
                                    <li><a href="demo40-shop.html">Beverages</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Organic Shop<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Organic Shop</a></li>
                                    <li><a href="demo40-shop.html">Health & Nutrition</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Household Essentials<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Household Essentials</a></li>
                                    <li><a href="demo40-shop.html">Home, Kitchen & Dine</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Health & Nutrition<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Health & Nutrition</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Beauty & Personal Care<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Beauty & Personal Care</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Baby<span class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Baby</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Pets<span class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Pets</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Party Supplies & Crafts<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Party Supplies & Crafts</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Home, Kitchen & Dine<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Home, Kitchen & Dine</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Office & Electronics<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Office & Electronics</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Garden & Tools<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Garden & Tools</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Sports & Outdoor<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Sports & Outdoor</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Toys<span class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Toys</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo40-shop.html">Clothing<span
                                        class="sf-with-ul menu-btn"></span></a>
                                <ul>
                                    <li><a href="demo40-shop.html">Clothing</a></li>
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