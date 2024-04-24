<script setup>

const props = defineProps({
  product: [Object, String],
  productSizePrice: [Object, String],
});


</script>

<template>
    <div>
        <!-- {{ product?.product_prices.length }} -->
        <template v-if="product && product?.product_prices.length > 0">
            <div class="price-box" v-if="!productSizePrice">
                <template v-for="(productsPrice, index) in product?.product_prices" :key="index">
                    <template v-if="productsPrice.is_default == 1">
                        <template v-if="productsPrice.offer_price == 0">
                            <span class="product-price">{{ $filters.currencySymbol(productsPrice.mrp) }}</span>
                        </template>
                        <template v-else>
                            <span class="old-price">{{ $filters.currencySymbol(productsPrice.mrp) }}</span>
                            <span class="product-price">{{ $filters.currencySymbol(productsPrice.offer_price) }}</span>
                        </template>
                    </template>
                </template>
            </div>
            <div class="price-box" v-else>
                <template v-if="productSizePrice.offer_price == 0">
                    <span class="product-price">{{ $filters.currencySymbol(productSizePrice.mrp) }}</span>
                </template>
                <template v-else>
                    <span class="old-price">{{ $filters.currencySymbol(productSizePrice.mrp) }}</span>
                    <span class="product-price">{{ $filters.currencySymbol(productSizePrice.offer_price) }}</span>
                </template>
            </div>
        </template>
        <template v-else>
            <div class="price-box">
                <template v-if="product.offer_price == 0">
                    <span class="product-price">{{ $filters.currencySymbol(product.mrp) }}</span>
                </template>
                <template v-else>
                    <span class="old-price">{{ $filters.currencySymbol(product.mrp) }}</span>
                    <span class="product-price">{{ $filters.currencySymbol(product.offer_price) }}</span>
                </template>
            </div>
        </template>
    </div>
</template>

<style>

</style>