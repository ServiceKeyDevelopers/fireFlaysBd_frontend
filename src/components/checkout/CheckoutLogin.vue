

<script setup>
import { ref } from "vue";

const loginOpened = ref(false);

const loginOpen = () => {
    loginOpened.value =! loginOpened.value
}

</script>

<template>
    <div class="login-form-container">
        <h4>
            Returning customer?
            <button data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="btn btn-link btn-toggle" @click.prevent="loginOpen()">Login</button>
        </h4>
        <transition name="slide-fade">
        <div v-if="loginOpened" id="collapseOne" class="collapse show">
            <div class="login-section feature-box">
            <div class="feature-box-content">
                <form action="#" id="login-form">
                <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                <div class="row">
                    <div class="col-md-6">
                    <div class="form-group">
                        <label class="mb-0 pb-1">Username or email <span class="required">*</span></label>
                        <input type="email" class="form-control" required />
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="form-group">
                        <label class="mb-0 pb-1">Password <span class="required">*</span></label>
                        <input type="password" class="form-control" required />
                    </div>
                    </div>
                </div>
                <button type="submit" class="btn">LOGIN</button>
                <div class="form-footer mb-1">
                    <div class="custom-control custom-checkbox mb-0 mt-0">
                    <input type="checkbox" class="custom-control-input" id="lost-password" />
                    <label class="custom-control-label mb-0" for="lost-password">Remember me</label>
                    </div>
                    <a href="forgot-password.html" class="forget-password">Lost your password?</a>
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