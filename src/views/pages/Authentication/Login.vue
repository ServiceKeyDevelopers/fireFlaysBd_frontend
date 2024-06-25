<script setup>
import { ref } from 'vue';
import { Modal } from "@/components";
import axiosInstance from "@/services/axiosService.js";
import { useAuth, useModal } from "@/stores";
import { useRoute } from 'vue-router';
import router from '@/router';

const modal =  useModal()
const auth = useAuth();

const name = ref();
const phoneNumber = ref();

const loginOrRegisterUser = async() => {
	const res = await auth.login({phone_number: phoneNumber.value, name: name.value});
	if (res?.status == 200) {
      modal.toggleModal() 
    }
}

const handleOrderSubmitted = () => {
	router.push({ name: routeLocationKey.path == '/login' ? 'HomePage' : 'CheckoutPage' });
}

const registerFunc = () => {
	router.push({name: 'Register'})
}


</script>

<template>

<Modal @orderSubmitted="handleOrderSubmitted"/>

<div class="page-wrapper">
		<main class="main">
			<div class="page-header">
				<div class="container d-flex flex-column align-items-center">
					<nav aria-label="breadcrumb" class="breadcrumb-nav">
						<div class="container">
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><router-link :to="{name: 'HomePage'}">Home</router-link></li>
								<li class="breadcrumb-item active" aria-current="page">
									My Account
								</li>
							</ol>
						</div>
					</nav>

					<h1>My Account</h1>
				</div>
			</div>

			<div class="container login-container">
				<div class="row">
					<div class="col-lg-10 mx-auto">
						<div class="row">
							<div class="col-md-12">
								<div class="heading mb-1">
									<h2 class="title">Login</h2>
								</div>

								<form>
									<label for="register-email">
										Name
										<span class="required">*</span>
									</label>
									<input type="text" class="form-input form-wide" required  v-model="name"/>
									<label for="register-email">
										Phone Number
										<span class="required">*</span>
									</label>
									<input type="text" class="form-input form-wide" required  v-model="phoneNumber"/>

									<div class="form-footer mb-2">
										<button type="submit" class="btn btn-dark btn-md w-100 mr-0" @click.prevent="loginOrRegisterUser">Login</button>
									</div>
									<div class="form-footer mb-2">
										<button type="submit" class="btn btn-dark btn-md w-100 mr-0" @click="registerFunc()">Register</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main><!-- End .main -->
	</div>
</template>

<style>

</style>