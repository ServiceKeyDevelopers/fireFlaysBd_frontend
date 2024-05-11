<script setup>
import { useAuth, useWishlist } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { mrpOrOfferPrice } from '@/composables/mrpOrOfferPrice'
import { addToCart } from '@/composables/addToCart'
const auth = useAuth();
const wishlist = useWishlist();

const removedWishlist = (index) => {
    wishlist.destroy(index);
}

// onMounted(()=>{
//     wishlist.
// })

</script>

<template>
    <main class="main">
        <div class="page-header">
            <div class="container d-flex flex-column align-items-center">
                <nav aria-label="breadcrumb" class="breadcrumb-nav">
                    <div class="container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="demo4.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Wishlist
                            </li>
                        </ol>
                    </div>
                </nav>

                <h1>Wishlist</h1>
            </div>
        </div>

        <div class="container">
            <div class="wishlist-title">
                <h2 class="p-2">Your Wishlist Products</h2>
            </div>
            <div class="wishlist-table-container">
                <table class="table table-wishlist mb-0">
                    <thead>
                        <tr>
                            <th class="thumbnail-col"></th>
                            <th class="product-col">Product</th>
                            <th class="price-col">Price</th>
                            <th class="action-col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="product-row" v-for="(wishlist, index) in auth.user.wishlist" :key="index">
                            <!-- {{ wishlist }} -->
                            <td>
                                <figure class="product-image-container">
                                    <router-link :to="{name: 'ProductDetailsPage',params: { id: wishlist.id, slug: wishlist.slug },}" class="product-image">
                                        <img :src="wishlist.image" alt="product">
                                    </router-link>
                                    <a href="#" class="btn-remove icon-cancel" title="Remove Product" @click.prevent="removedWishlist(index)"></a>
                                </figure>
                            </td>
                            <td>
                                <h5 class="product-title">
                                    <router-link :to="{name: 'ProductDetailsPage',params: { id: wishlist.id, slug: wishlist.slug },}">{{ wishlist.name }}</router-link>
                                </h5>
                            </td>
                            <td class="price-box">{{ mrpOrOfferPrice(wishlist.mrp, wishlist.offer_price) }}</td>
                            <td class="action">
                                <router-link :to="{name: 'ProductDetailsPage',params: { id: wishlist.id, slug: wishlist.slug },}" class="btn btn-quickview mt-1 mt-md-0"
                                    title="Quick View">Quick View</router-link>
                                <button class="btn btn-dark btn-add-cart product-type-simple btn-shop" @click.prevent="addToCart(wishlist)">
                                    ADD TO CART
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div><!-- End .cart-table-container -->
        </div><!-- End .container -->
    </main>
</template>

<style>

.page-header {
    padding: 0rem 0 !important;
}

.breadcrumb {
    margin: 1rem 0rem !important;
}

</style>