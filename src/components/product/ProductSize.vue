<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axiosInstance from "@/services/axiosService.js";

const props = defineProps({
    product: Object,
});

const emit          = defineEmits(['sizeByPrice'])
const route         = useRoute();
const productPrices = ref('');
const sizeID        = ref('');


// get size price start  
const getPrices = async () => {
  try {
    const res = await axiosInstance.get(`/products/${route.params.id}/${sizeID.value}`);
    productPrices.value = res.data.result;
    emit('sizeByPrice', productPrices.value);
  } catch (error) {
    console.log(error);
  }
  // sizeName.value = name;
};
// get size price end 

</script>

<template>
    <div class="product-filters-container" >
        <div class="product-single-filter select-custom">
            <label>COLOR:</label>
            <select name="orderby" class="form-control" v-model="sizeID" @change="getPrices()">
                <option value="" disabled selected>CHOOSE AN COLOR</option>
                <option :value="size.id"  v-for="(size, index) in product?.product_prices" :key="index">{{ size.name }}</option>
            </select>
        </div>
        <div class="product-single-filter">
            <label></label>
            <a class="font1 text-uppercase clear-btn" href="#">Clear</a>
        </div>
    </div>
</template>

<style>

</style>