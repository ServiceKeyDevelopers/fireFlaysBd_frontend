<script setup>
import { ProductPrice, LoginModal } from "@/components";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCart, useNotification, useModal, useAuth, useWishlist } from "@/stores";
import { addToCart } from '@/composables/addToCart'
import { storeToRefs } from "pinia";

const auth        = useAuth();
const wishlist    = useWishlist();
const modal       = useModal();
const cart        = useCart();
const {loading}   = storeToRefs(cart);
const name        = ref('')
const phoneNumber = ref('')

const props = defineProps({
  product: Object,
  types: String,
  product_prices: Number,
  required: true,
});

const addToWishlist = async(product) => {
    if (Object.keys(auth.user).length > 0) {
        let res = await wishlist.addToWishlist(product);
    }else{
        modal.toggleLoginModal()
    }
}

</script>

<template>
    <div>
        <div class="product-default inner-quickview inner-icon">
            <figure>
                <router-link :to="{name: 'ProductDetailsPage',params: { id: product.id, slug: product.slug },}">
                    <img :src="product.image" width="205" height="205" :alt="product.name">
                </router-link>

                <div class="btn-icon-group">
                    <a href="" class="btn-icon btn-add-cart product-type-simple" @click.prevent="addToCart(product)">
                        <i class="icon-shopping-cart"></i>
                    </a>
                </div>
                <router-link :to="{name: 'ProductDetailsPage',params: { id: product.id, slug: product.slug },}" class="btn-quickview" title="Quick View">Quick View</router-link>
            </figure>
            <div class="product-details">
                <div class="category-wrap">
                    <div class="category-list">
                        <router-link :to="{name: 'ShopPage', query:{ category: product.category.id}}" class="product-category">{{ product.category.name }}</router-link>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish">
                        <i class="icon-heart" @click.prevent="addToWishlist(product)"></i>
                        <!-- <i class="fas fa-spinner fa-spin"></i> -->
                    </a>
                </div>
                <h3 class="product-title">
                    <router-link :to="{name: 'ProductDetailsPage',params: { id: product.id, slug: product.slug },}">{{ product.name }}</router-link>
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

                <ProductPrice :product="product" />
                <!-- End .price-box -->
            </div>
            <!-- End .product-details -->
        </div>
    </div>
</template>

<style>

</style>