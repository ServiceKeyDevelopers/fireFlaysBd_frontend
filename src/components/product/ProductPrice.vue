<script setup>

const props = defineProps({
  mrpPrice: String,
  offerPrice: String,
});


</script>

<template>
    <div class="price-box">
        <template v-if="offerPrice == 0">
            <span class="product-price">{{ $filters.currencySymbol(mrpPrice) }}</span>
        </template>
        <template v-else>
            <span class="old-price">{{ $filters.currencySymbol(mrpPrice) }}</span>
            <span class="product-price">{{ $filters.currencySymbol(offerPrice) }}</span>
        </template>
    </div>
</template>

<style>

</style>