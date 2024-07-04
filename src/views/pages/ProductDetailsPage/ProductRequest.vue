<script setup>
import { onMounted, ref } from 'vue';
import axiosInstance from "@/services/axiosService.js";
import { useProduct, useNotification} from "@/stores";
import { useRouter, useRoute } from "vue-router";

const notify       = useNotification();
const product      = useProduct();
const name         = ref('');
const email        = ref('');
const phone        = ref('');
const url          = ref('');
const address      = ref('');
const image        = ref('');
const imagePreview = ref([]);
const loading      = ref('');
const router        = useRouter();

const handleFileChange = (e) => {
  image.value = e.target.files[0];
  let reader  = new FileReader();
  reader.addEventListener("load", function(){
    imagePreview.value = reader.result;
  }.bind(this), false);
  if(image.value){
    if(/\.(jpe?g|png|gif)$/i.test(image.value.name)){
      reader.readAsDataURL(image.value)
    }
  }
}

const submitProductRequest = async () => {
    const formData = new FormData();
    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('phone', phone.value)
    formData.append('url', url.value)
    formData.append('address', address.value)
    formData.append('image', image.value)

    const res = await product.productRequest(formData);
    if(res.data){
        router.push({name:'HomePage'})
        notify.Success(`Product Request is Added Successfully`);
    }else{
        errors.value = res.message
    }
}



</script>

<template>
    <div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="card text-center">
                    <div class="card-header">
                        <h3 class="text-danger">Looking for something different?</h3>
                        <p>Put your information in the box...</p>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Product Name/URL" v-model="url">
                        </div>
                        <div class="mb-3">
                            <input class="form-control" type="file" id="formFile" @change="handleFileChange">
                            <span class="img-remove-btn" style="position:relative" v-if="imagePreview">
                                <img width="100" class="gallery_img" :src="imagePreview" alt="">
                            </span>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" v-model="name">
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone" v-model="phone">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" v-model="email">
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Address" rows="3" v-model="address"></textarea>
                        </div>
                      <a  class="btn btn-primary text-light" @click="submitProductRequest">Submit</a>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>



<style>

</style>