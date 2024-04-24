

<script setup>
import { ref } from "vue";

const couponOpened = ref(false);

const cuponOpen = () => {
    couponOpened.value =! couponOpened.value
}

</script>

<template>
    <div class="checkout-discount">
        <h4>Have a coupon?
            <button data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne" class="btn btn-link btn-toggle" @click.prevent="cuponOpen()">ENTER YOUR CODE</button>
        </h4>
        <transition name="slide-fade">
            <div v-if="couponOpened" id="collapseTwo" class="collapse show">
                <div class="feature-box">
                    <div class="feature-box-content">
                        <p>If you have a coupon code, please apply it below.</p>

                        <form action="#">
                            <div class="input-group">
                                <input type="text" class="form-control form-control-sm w-auto" placeholder="Coupon code" required="" />
                                <div class="input-group-append">
                                    <button class="btn btn-sm mt-0" type="submit">
                                        Apply Coupon
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>


<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease-in-out; /* Adjust the duration and timing function */
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

</style>