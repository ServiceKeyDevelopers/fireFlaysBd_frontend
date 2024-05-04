<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import {useModal} from '@/stores'

const modal = useModal();
const { isOpen } = storeToRefs(modal);

// const showAndHide = ref(false);

const modalOC = () => {
    isOpen.value = !isOpen.value;
}

</script>


<template>
    <div>
      <div class="main-modal" :style="{ display: isOpen ? 'flex' : 'none' }" >
          <div class="opacity-blockshadow" @click="modalOC"></div>
          <div class="main-body">
          <i class="fas fa-times close-btn" @click="modalOC"></i>
              <div class="d-flex flex-column">
                <router-link :to="{name: 'HomePage'}" class="logo mb-2 m-auto">
                    <img src="@/assets/images/logo-black.png" class="w-100" width="111" height="44" alt="Porto Logo">
                </router-link>
                <span class="text-danger">আপনার নাম্বারে একটি ওটিপি কোড পাঠানো হয়েছে সেই কোডটি এখানে সাবমিট করুন</span>
                <div class="">
                    <label for="exampleFormControlInput1" class="form-label fw-bold my-2">OPT CODE</label>
                    <input type="email" class="form-control" id="Enter Your OPT CODE" placeholder="Enter Your OPT Code">
                </div>
                <button class="btn btn-sm btn-primary">Submit</button>  
              </div>
          </div>
      </div>
    </div>
</template>


<style>

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

  .main-modal{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
}


.opacity-blockshadow{
    background-color: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    
  }

  .close-btn{
    background-color: white;
    color: black;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    right: -20px;
    top: -20px;
  }

  .main-body{
    position: relative;
    background-color: rgb(255, 255, 255);
    width: 400px;
    padding: 15px 20px;
    border-radius: 5px ;
  }


@media (max-width: 425px) {
    .main-body {
        width: 330px;
    }
}



</style>