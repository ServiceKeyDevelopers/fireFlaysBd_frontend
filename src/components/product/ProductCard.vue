<script setup>
import { ProductPrice, LoginModal } from "@/components";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCart, useNotification, useModal, useAuth, useWishlist } from "@/stores";
import { addToCart } from '@/composables/addToCart'
import { storeToRefs } from "pinia";

const auth          = useAuth();
const wishlist      = useWishlist();
const modal         = useModal();
const cart          = useCart();
const {cartLoading} = storeToRefs(cart);
const {loading}     = storeToRefs(wishlist);
const name          = ref('')
const phoneNumber   = ref('')
const notify        = useNotification();

const props = defineProps({
  product: Object,
  types: String,
  product_prices: Number,
  required: true,
});

const addToWishlist = async (product) => {
    if (Object.keys(auth.user).length > 0) {
        let res = await wishlist.addToWishlist(product);
        if (res.data.result == 0) {
            notify.Success(`${product.name} Successfully Added Your Wishlist Item`);
        }else{
            notify.Warning(`${product.name} Successfully Removed Your Wishlist Item`);
        }
        
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
                <div class="btn-icon-group" v-if="product.product_prices.length > 0">
                    <router-link class="btn-icon btn-add-cart product-type-simple" :to="{name: 'ProductDetailsPage',params: { id: product.id, slug: product.slug },}">
                        <i class="icon-info"></i>
                    </router-link>
                </div>
                    <div class="btn-icon-group" v-else>
                        <a href="" class="btn-icon btn-add-cart product-type-simple" @click.prevent="addToCart(product)">
                        <i class="" :class="cartLoading == product.id ? 'icon-spin5 fa-spin' : 'icon-shopping-cart'"></i>
                    </a>
                </div>
                <router-link :to="{name: 'ProductDetailsPage',params: { id: product.id, slug: product.slug },}" class="btn-quickview" title="Quick View">Quick View</router-link>
            </figure>
            <div class="product-details">
                <div class="category-wrap">
                    <div class="category-list">
                        <router-link :to="{name: 'ShopPage', query:{ category: product.category.id}}" class="product-category">{{ product.category.name }}</router-link>
                    </div>
                    <a href="wishlist.html" class="btn-icon-wish" @click.prevent="addToWishlist(product)">
                        <i :class="loading == product.id ? 'icon-spin5 fa-spin' : 'icon-heart'"></i>
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
.icon-heart:hover{
    color: #8dc540;
}
</style>