<script setup>
import {  CheckoutCoupon, CheckoutLogin, Modal } from "@/components";
import axiosInstance from "@/services/axiosService.js";
import { useCart, useOrder, useAuth, useModal } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
// validation error
import { Form, Field } from "vee-validate";
import * as yup from "yup";

// All Variable  Code Is Here.....................................................................................................
const modal =  useModal()
const auth = useAuth();
const { isOrder } = storeToRefs(auth);
const cart = useCart();
const { cartItem, totalPrice, campaignId } = storeToRefs(cart);
const order = useOrder();
const { storeOrder, backendErrors } = storeToRefs(order);

const name = ref(auth?.user?.user?.name);
const phoneNumber = ref(auth?.user?.user?.phone_number);
const email = ref("");
const address = ref("");
const payment_gateway_id = ref(1);
const delivery_gateway_id = ref();
const deliverCharge = ref();
const deliveryInfo = ref([]);
const payment_gateways = ref([]);
const orderNote = ref("");

// coupon 
const showCouponForm  = ref(false);
const couponDiscountAmount  = ref();
const coupon = ref();
const couponErrorMessage = ref();
const couponId = ref();

const getDeliveryGateway = async () => {
  try {
    const res = await axiosInstance.get("/delivery-gateway");
    deliveryInfo.value = res.data.result;

    if (cartItem.value.some((item) => item.free_shipping === 1)) {
      delivery_gateway_id.value = 0;
      deliverCharge.value = 0;
    } else {
      delivery_gateway_id.value = res.data.result[0].id;
      deliverCharge.value = res.data.result[0].delivery_fee;
    }
  } catch (error) {
    console.log(error);
  }
};

const getDeliveryAmount = async () => {
  try {
    const res = await axiosInstance.get(
      `/delivery-gateway/price/${delivery_gateway_id.value}`
    );
    console.log(res);
    deliverCharge.value = res.data.result.delivery_fee;
  } catch (error) {
    console.log(error);
  }
};

const getPaymentGetway = async () => {
  try {
    const res = await axiosInstance.get(`/payment-gateway`);
    payment_gateways.value = res.data.result;
  } catch (error) { }
};

// order work start here 

const orderSubmited = async () => {
  await order.storeOrder({
      name               : name.value,
      phoneNumber        : phoneNumber.value,
      email              : email.value,
      address            : address.value,
      orderNote          : orderNote.value,
      items              : cartItem.value,
      coupon_id          : couponId.value,
      totalPrice         : totalPrice.value,
      payment_gateway_id : payment_gateway_id.value,
      delivery_gateway_id: delivery_gateway_id.value == 0 ? null: delivery_gateway_id.value,
      // campaign_id: campaignId.value,  
    });
}

const placeOrder = async() => {
  if (Object.keys(auth.user).length > 0) {
    orderSubmited();
  }else{
    const res = await auth.login({phone_number: phoneNumber.value, name: name.value});
    if (res?.status == 200) {
      modal.toggleModal() 
    }
  }

};

const handleOrderSubmitted = async () => {
  console.log('Order submitted event received');
  await orderSubmited(); // Wait for orderSubmited to complete
};

// order work end here 


// validation error
const schema = yup.object({
  name: yup.string().required("আপনার নাম IS REQUIRED"),
  phone: yup.string().required("আপনার মোবাইল নাম্বার IS REQUIRED"),
  address: yup.string().required("আপনার সম্পূর্ণ ঠিকানা IS REQUIRED"),
  payment_gateway_id: yup.string().required("Payment Gateway Feild Is Required"),
});


onMounted(() => {
  getDeliveryGateway();
  getPaymentGetway();
//   modal.Modalclose();
});

</script>

<template>

<Modal @orderSubmitted="handleOrderSubmitted"/>

 <main class="main main-test">
            <div class="container checkout-container">
                <ul class="checkout-progress-bar d-flex justify-content-center flex-wrap">
                    <li>
                        <router-link :to="{name: 'HomePage'}">Home</router-link>
                    </li>
                    <li class="active">
                        <router-link :to="{name: 'CheckoutPage'}">Checkout</router-link>
                    </li>
                    <li class="disabled">
                        <a href="#">Order Complete</a>
                    </li>
                </ul>

                <template v-if="Object.keys(auth.user).length > 0">
                    <p>Welcome {{ auth?.user?.user?.name }}</p>
                </template>
                <template v-else>
                    <CheckoutLogin />
                </template>

                <CheckoutCoupon />

                <div class="row">
                    <div class="col-lg-7">
                        <ul class="checkout-steps">
                            <li>
                                <h2 class="step-title">Billing details</h2>

                                <Form @submit.prevent="placeOrder" :validation-schema="schema" v-slot="{ errors, isSubmitting }" >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Full Name
                                                    <abbr class="required" title="required">*</abbr>
                                                </label>
                                                <Field 
                                                    name="name"
                                                    type="text"
                                                    v-model="name"
                                                    class="form-control"
                                                    placeholder="এখানে লিখুন....."
                                                    :class="{ 'is-invalid': errors.name }"
                                                />
                                                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone <abbr class="required" title="required">*</abbr></label>
                                                <Field
                                                    name="phone"
                                                    type="text"
                                                    v-model="phoneNumber"
                                                    class="form-control"
                                                    placeholder="এখানে লিখুন....."
                                                    :class="{ 'is-invalid': errors.phone }"
                                                />
                                                <span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
                                                <span class="text-danger" v-if="backendErrors?.phone_number">{{ backendErrors.phone_number[0] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Full Address <abbr class="required" title="required">*</abbr></label>
                                        <Field
                                            name="address"
                                            type="text"
                                            v-model="address"
                                            class="form-control PlaceHolderColorChange"
                                            placeholder="বাসা নং, রোড নং, থানা/উপজেলা, জেলা"
                                            :class="{ 'is-invalid': errors.address }"
                                        />
                                        <span class="text-danger" v-if="errors.address">{{ errors.address }}</span>
                                    </div>

                                    <div class="form-group">
                                        <label>Email Address (Optional)</label>
                                        <input type="email" class="form-control" v-model="email" />
                                    </div>

                                    <div class="form-group">
                                        <label class="order-comments">Order Notes (optional)</label>
                                        <textarea class="form-control" placeholder="Notes about your order, e.g. special notes for delivery."  v-model="orderNote"></textarea>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <!-- End .col-lg-8 -->

                    <div class="col-lg-5">
                        
                        <div class="order-summary">
                            <h3>YOUR ORDER</h3>

                            <table class="table table-mini-cart">
                                <thead>
                                    <tr>
                                        <th colspan="2">Product</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in cartItem" :key="index">
                                        <td class="product-col">
                                            <h3 class="product-title">
                                                {{ product.name }} ×
                                                <span class="product-qty">{{ product.quantity }}</span>
                                            </h3>
                                        </td>

                                        <td class="price-col">
                                            <span>{{ $filters.currencySymbol((product.offer_price == 0 ? product.mrp : product.offer_price )* product.quantity ) }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr class="cart-subtotal">
                                        <td>
                                            <h4>Subtotal</h4>
                                        </td>

                                        <td class="price-col">
                                            <span>{{ $filters.currencySymbol(totalPrice) }}</span>
                                        </td>
                                    </tr>
                                    <tr class="order-shipping">
                                        <td class="text-left" colspan="2">
                                            <h4 class="m-b-sm">Shipping</h4>

                                            <div class="form-group form-group-custom-control">
                                                <div class="custom-control custom-radio d-flex"  v-for="(payment_gateway, index) in payment_gateways" :key="index">
                                                    <input
                                                        class="custom-control-input"
                                                        type="radio"
                                                        :id="'paymentGateway_' + index"
                                                        name="payment_gateway_id"
                                                        :value="payment_gateway.id"
                                                        v-model="payment_gateway_id"
                                                    >
                                                    <label class="custom-control-label" :for="'paymentGateway_' + index">{{ payment_gateway.name }}</label>
                                                </div>
                                                <!-- End .custom-checkbox -->
                                            </div>
                                        </td>

                                    </tr>

                                    <tr class="order-total">
                                        <td>
                                            <h4>Total</h4>
                                        </td>
                                        <td>
                                            <b class="total-price"><span>{{ $filters.currencySymbol(totalPrice) }}</span></b>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>

                            <button type="submit" :disabled="isSubmitting" class="btn btn-dark btn-place-order" @click.prevent="placeOrder()"><span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>Order Now</button>
                        </div>
                        <!-- End .cart-summary -->
                    </div>
                    <!-- End .col-lg-4 -->
                </div>
                <!-- End .row -->
            </div>
            <!-- End .container -->
        </main>
</template>

<style scoped></style>
