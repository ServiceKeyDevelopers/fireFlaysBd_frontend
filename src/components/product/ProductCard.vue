<script setup>
import { ProductPrice } from "@/components";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { useCart, useNotification } from "@/stores";
import { addToCart } from '@/composables/addToCart'



const props = defineProps({
  product: Object,
  types: String,
  product_prices: Number,
  required: true,
});



</script>

<template>
    <div>
        <div class="product-default inner-quickview inner-icon">
            <figure>
                <a href="demo40-product.html">
                    <img :src="product.image" width="205" height="205" :alt="product.name">
                </a>

                <div class="btn-icon-group">
                    <a href="" class="btn-icon btn-add-cart product-type-simple" @click.prevent="addToCart(product)"><i class="icon-shopping-cart" ></i></a>
                </div>
                <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View">Quick
                    View
                </a>
            </figure>
            <div class="product-details">
                <div class="category-wrap">
                    <div class="category-list">
                        <router-link :to="{name: 'ShopPage', query:{ category: product.category.id}}" class="product-category">{{ product.category.name }}</router-link>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish"><i
                            class="icon-heart"></i></a>
                </div>
                <h3 class="product-title">
                    <a href="demo40-product.html">{{ product.name }}</a>
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

                <ProductPrice :mrpPrice="product.mrp" :offerPrice="product.offer_price"/>
                <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
        </div>
    </div>
</template>

<style>

</style>