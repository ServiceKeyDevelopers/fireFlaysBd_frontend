
<script setup>
import { onMounted, ref } from 'vue';
import { useCart } from "@/stores";
import { storeToRefs } from "pinia";

const cart = useCart();
const { cartItemCount, cartItem, totalPrice } = storeToRefs(cart);
const isCartMenu   = ref(false);

const cartOpen = () => {
    isCartMenu.value =!isCartMenu.value;
    document.body.classList.toggle('cart-opened');
} 

const deleteCart = (index) => {
    cart.destroy(index);
};

const cartDecrement = (index) => {
    cart.decrement(index);
};

const cartIncrement = (index) => {
    cart.increment(index);
};

</script>
<template>
    <div class="cart-dropdown-wrapper d-flex align-items-center pt-2">
        <span class="cart-subtotal text-right font2 mr-3">Shopping Cart
            <span class="cart-price d-block font2">৳ {{ totalPrice == 0 ? 0 : totalPrice }}</span>
        </span>

        <div class="dropdown cart-dropdown" :class="{isCartMenu : 'show'}">
            <a href="#" title="Cart" class="cart-toggle"  @click.prevent="cartOpen()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <i class="icon-cart-thick"></i>
                <span class=" cart-count badge-circle">{{ cartItemCount }}</span>
            </a>

            <div class="cart-overlay" @click.prevent="cartOpen()"></div>

            <div class="dropdown-menu mobile-cart" :class="{isCartMenu : 'show'}">
                <a href="#" title="Close (Esc)" class="btn-close" @click.prevent="cartOpen()">×</a>

                <div class="dropdownmenu-wrapper custom-scrollbar">
                    <div class="dropdown-cart-header">Shopping Cart</div>
                    <!-- End .dropdown-cart-header -->

                    <div class="dropdown-cart-products">
                        <div class="product" v-for="(cart, index) in cartItem" :key="index">
                            <div class="product-details">
                                <h4 class="product-title">
                                    <router-link :to="{name: 'ProductDetailsPage',params: { id: cart.item_id, slug: cart.slug },}" @click.prevent="cartOpen()">{{ cart.name }}</router-link>
                                </h4>

                                <span class="cart-product-info">
                                    <span class="cart-product-qty">{{ cart.quantity }}</span> × {{ $filters.currencySymbol(cart.offer_price == 0 ? cart.mrp : cart.offer_price) }}
                                </span>
                            </div>
                            <!-- End .product-details -->

                            <figure class="product-image-container">
                                <router-link :to="{name: 'ProductDetailsPage',params: { id: cart.item_id, slug: cart.slug },}" @click.prevent="cartOpen()" class="product-image">
                                    <img :src="cart.image" alt="product" width="80" height="80">
                                </router-link>

                                <a href="#" class="btn-remove" title="Remove Product"  @click.prevent="deleteCart(index)"><span>×</span></a>
                            </figure>
                        </div>
                    </div>
                    <!-- End .cart-product -->

                    <div class="dropdown-cart-total">
                        <span>SUBTOTAL:</span>

                        <span class="cart-total-price float-right">{{ $filters.currencySymbol(totalPrice)}}</span>
                    </div>
                    <!-- End .dropdown-cart-total -->

                    <div class="dropdown-cart-action">
                        <router-link :to="{name: 'CheckoutPage'}" class="btn btn-dark btn-block" @click.prevent="cartOpen()">Checkout</router-link>
                    </div>
                    <!-- End .dropdown-cart-total -->
                </div>
                <!-- End .dropdownmenu-wrapper -->
            </div>
            <!-- End .dropdown-menu -->
        </div>
        <!-- End .dropdown -->
    </div>
</template>

<style>

</style>