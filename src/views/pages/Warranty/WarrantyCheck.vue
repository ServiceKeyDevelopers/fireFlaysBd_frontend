<script setup>
// import { CartSideBar, MobileMenu, BannerPart, ProductView } from "@/components";
import axiosInstance from "@/services/axiosService.js";
import { useCart, useOrder, useAuth, useModal } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const warrantyNumber = ref();
const warranty = ref();
const invalidWarranty = ref();
const submitWarrantyNumber = async() =>{
  try {
    const res = await axiosInstance.get(`/warranty-end-date/${warrantyNumber.value}`);
    if (res.data) {
      warranty.value = res.data.warranty_end_date
    }else{
      
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <div>
    <div class="row mt-4">
      <div class="col-md-4">
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            Enter Your Warranty Number
          </div>
          <div class="card-body">
            <label for="">Warranty Number</label>
            <input type="text" class="form-control" placeholder="Enter Your Warranty Number" v-model="warrantyNumber">
            <button href="#" class="btn btn-primary" @click.prevent="submitWarrantyNumber()">Submit</button> 
          </div>
          <div class="card-footer">
            <span>Warranty Left - {{ warranty }}</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
      </div>
    </div>
  </div>
</template>


<style>

</style>