<script setup>
// import { CartSideBar, MobileMenu, BannerPart, ProductView } from "@/components";
import axiosInstance from "@/services/axiosService.js";
import { useCart, useOrder, useAuth, useModal } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
// // validation error
import { Form, Field } from "vee-validate";
import * as yup from "yup";

// // All Variable  Code Is Here.....................................................................................................
const modal =  useModal()
const auth = useAuth();
// const { isOrder } = storeToRefs(auth);
const cart = useCart();
const { cartItem, totalPrice, campaignId } = storeToRefs(cart);
const order = useOrder();
const { storeOrder, backendErrors } = storeToRefs(order);

const name                = ref(auth?.user?.user?.name);
const phoneNumber         = ref(auth?.user?.user?.phone_number);
const district            = ref("");
const address             = ref("");
const payment_gateway_id  = ref(1);
const delivery_gateway_id = ref();
const deliverCharge       = ref();
const deliveryInfo        = ref([]);
const payment_gateways    = ref([]);
const orderNote           = ref("");
const isAnimated          = ref(false);

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
      name       : name.value,
      phoneNumber: phoneNumber.value,
      district   : district.value,
      address    : address.value,
      orderNote : orderNote.value,
      items      : cartItem.value,
        // campaign_id: campaignId.value,
      coupon_id          : couponId.value,
      totalPrice         : totalPrice.value,
      payment_gateway_id : payment_gateway_id.value,
      delivery_gateway_id: delivery_gateway_id.value == 0 ? null: delivery_gateway_id.value,
    });
}

const placeOrder = async() => {
  if (Object.keys(auth.user).length > 0) {
    isAnimated.value = true
    setTimeout(() => {
      isAnimated.value = false
    }, 7000);
    orderSubmited();
  }else{
    const res = await auth.login({phone_number: phoneNumber.value, name: name.value});
    if (res?.status == 200) {
      modal.toggleModal() 
    }
  }

};

const handleOrderSubmitted = () => {
  orderSubmited(); 
}

// order work end here 


// cart delete 

const deleteCart = (index) => {
  cart.destroy(index);
};

const cartIncrement = (index) => {
  cart.increment(index);
};

const cartDecrement = (index) => {
  cart.decrement(index);
};

// coupon 

const toggleCouponForm = () => {
  showCouponForm.value = !showCouponForm.value;
}
const couponCalculate = async() => {
  const res = await axiosInstance.get(`/coupons/check?coupon_code=${coupon.value}&cart_total_amount=${totalPrice.value}`); 
  couponErrorMessage.value = res.data.message 
  couponDiscountAmount.value = res.data.result.discount_amount;
  couponId.value = res.data.result.coupon_id;
}


// validation error
const schema = yup.object({
  name: yup.string().required("আপনার নাম IS REQUIRED"),
  phone: yup.string().required("আপনার মোবাইল নাম্বার IS REQUIRED"),
  district: yup.string().required("District Feild Is Required"),
  address: yup.string().required("আপনার সম্পূর্ণ ঠিকানা IS REQUIRED"),
  delivery_gateway_id: yup.string().required("Delivery Gateway Feild Is Required"),
  payment_gateway_id: yup.string().required("Payment Gateway Feild Is Required"),

});

// has free shipping function 
const hasFreeShipping = () => {
      return cartItem.value.some(item => item.free_shipping === 1);
}


onMounted(() => {
  getDeliveryGateway();
  getPaymentGetway();
  modal.Modalclose();
});
</script>

<template>
  <div>
    <!--=====================================
                    MOBILE-MENU PART START
        =======================================-->
    <!-- <MobileMenu /> -->
    <!--=====================================
                    MOBILE-MENU PART END
        =======================================-->

    <!--=====================================
                    BANNER PART START
        =======================================-->
    <!-- <BannerPart :title="'Checkout Page'" :sub_title="'Home'" /> -->
    <!--=====================================
                    BANNER PART END
        =======================================-->

    <!-- <CartSideBar /> -->

    <!--=====================================
                    CHECKOUT PART START
        =======================================-->
    
     <!-- <ProductView @orderSubmitted="handleOrderSubmitted"/> -->

    <div class="p-5 my-5">
        <div class="row">
            <div class="col-lg-9">
                <div class="cart-table-container">
                    <table class="table table-cart">
                        <thead>
                            <tr>
                                <th class="thumbnail-col">Image</th>
                                <th class="product-col">Product</th>
                                <th class="price-col">Price</th>
                                <th class="qty-col">Quantity</th>
                                <th class="text-right">Subtotal</th>
                                <th class="text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="product-row" v-for="(product, index) in cartItem" :key="index">
                                <td>
                                    <figure class="product-image-container">
                                        <router-link :to="{name: 'ProductDetailsPage',params: { id: product.item_id, slug: product.slug },}" class="product-image">
                                            <img :src="product.image" alt="product">
                                        </router-link>

                                        <a href="#" class="btn-remove icon-cancel text-danger" title="Remove Product" @click.prevent="deleteCart(index)"></a>
                                    </figure>
                                </td>
                                <td class="product-col">
                                    <h5 class="product-title">
                                        <router-link :to="{name: 'ProductDetailsPage',params: { id: product.item_id, slug: product.slug },}">{{ product.name }}</router-link>
                                    </h5>
                                </td>
                                <td v-html="$filters.productPrice(product)"></td>
                                <td>
                                    <div class="product-single-qtyy">
                                        <a href="#" class="quantity__minus" @click.prevent="cartDecrement(index)"><span>-</span></a>
                                        <input name="quantity" type="text" class="quantity__input" :value="product.quantity">
                                        <a href="#" class="quantity__plus" @click.prevent="cartIncrement(index)"><span>+</span></a>
                                    </div>
                                </td>
                                <td class="text-right"><span class="subtotal-price" v-html="$filters.currencySymbol((product.offer_price == 0 ? product.mrp : product.offer_price) * product.quantity)"></span></td>
                                <td class="text-center">
                                    <a class="cart-delete" @click.prevent="deleteCart(index)">
                                        <i class="fas fa-trash-alt text-danger"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="left my-3">
                      <h5 class="text-wrap">Order Summery</h5>
                      <div class="d-flex justify-content-between my-2">
                        <p class="text-danger">Sub Total</p>
                        <p class="text-danger">{{ cart.totalPrice }} <span class="font-weight-bold">TK</span></p>
                      </div>
                      <div class="d-flex justify-content-between my-2">
                        <p class="text-danger">Delivary Charge</p>
                        <p class="text-danger">{{ deliverCharge }}<span class="font-weight-bold">TK</span></p>
                      </div>
                      <div class="line"></div>
                      <div class="d-flex justify-content-between my-2">
                        <p class="text-danger">Total</p>
                        <p class="text-danger"><span class="flag-discount mr-4">30% Save</span> {{ cart.totalPrice + Number(deliverCharge) }}  <span class="font-weight-bold">TK</span></p>
                      </div>
                      </div>
                      <div class="text-note">
                        <p class="text-danger">প্রয়োজনীয় কোনো তথ্য দিতে এই এখানে লিখুনঃ </p>
                          <textarea name="" id="" cols="50" rows="5" placeholder="দয়া করে আপনার অর্ডারের জন্য যে কোনও বিশেষ নির্দেশিকা বা পছন্দ দিন এখানে বলতে পারেন ।" v-model="orderNote"></textarea>
                      </div>
                </div><!-- End .cart-table-container -->
            </div>
            <div class="col-lg-3">
              <Form
                @submit.prevent="placeOrder"
                :validation-schema="schema"
                v-slot="{ errors, isSubmitting }"
              >
                <div class="left">
                    <h5 class="text-wrap text-center">অর্ডার কনফার্ম করতে আপনার নাম, মোবাইল নাম্বর, ঠিকানা লিখে অর্ডার করুন" বাটনে ক্লিক করুন।</h5>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="fw-bold">নামঃ</label>
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
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="fw-bold">মোবাইল নম্বরঃ</label>
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
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" class="fw-bold">ঠিকানা:</label>
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
                    <h6 class="delivary-charge text-center mb-3" >ডেলিভারি চার্জ</h6>
                    <div class="formRadioControl" v-for="(delivery, index) in deliveryInfo" :key="index">
                      <input
                        class="form-check-input mr-2"
                        type="radio"
                        :id="'deliveryGateway_' + index"
                        name="delivery_gateway_id"
                        :value="delivery.id"
                        v-model="delivery_gateway_id"
                        @change="getDeliveryAmount"
                      >
                      <label class="form-check-label ml-2" :for="'deliveryGateway_' + index">{{ delivery.name + ' - ' + Number(delivery.delivery_fee) }} টাকা </label>
                    </div>
                </div>
                <div class="secend-box border p-3 bg-light mt-3">
                    <div class="d-flex justify-content-between">
                      <div class="left-text"><h5 class="text-wrap">পেমেন্ট মেথড সিলেক্ট করুন</h5></div>
                      <div class="right-text"><i class="fas fa-unlock-alt"></i>সম্পূর্ণ নিরাপদ পেমেন্ট</div>
                    </div>
                        <div class="formRadioControl" v-for="(payment_gateway, index) in payment_gateways" :key="index">
                          <input
                            class="form-check-input me-2"
                            type="radio"
                            :id="'paymentGateway_' + index"
                            name="payment_gateway_id"
                            :value="payment_gateway.id"
                            v-model="payment_gateway_id"
                          >
                          <label class="form-check-label ml-2" :for="'paymentGateway_' + index">{{ payment_gateway.name }}</label>
                        </div>
                      </div>
                      <!-- <button type="submit" :disabled="isSubmitting" class="text-center orderBTN mt-4 w-100" @click="placeOrder()"><span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>Order Now</button> -->
                      
                      
                      <button class="order mt-3" :class="{'animate' : isAnimated}" @click="placeOrder()">
                        <span class="default">Complete Order</span>
                        <span class="success">Order Placed
                        <svg viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg></span>
                        <div class="box"></div>
                        <div class="truck">
                          <div class="back"></div>
                          <div class="front">
                            <div class="window"></div>
                          </div>
                          <div class="light top"></div>
                          <div class="light bottom"></div>
                        </div>
                        <div class="lines"></div>
                      </button>
                      
                      
                      
                      
                    </Form>
            </div>
        </div>
    </div>


    <!--=====================================
                    CHECKOUT PART END
        =======================================-->
  </div>
</template>


<style scope>




:root {
  --primary-color:  #00b37c;
	--primary: #275efe;
	--primary-light: #7699ff;
	--dark: #1c212e;
	--grey-dark: #3f4656;
	--grey: #6c7486;
	--grey-light: #cdd9ed;
	--white: #fff;
	--green: #16bf78;
	--sand: #dcb773;
	--sand-light: #edd9a9;
  }
  
  .order {
	-webkit-appearance: none;
	   -moz-appearance: none;
			appearance: none;
	border: 0;
	background: var(--primary-color);
	position: relative;
	height: 63px;
	width: 240px;
	padding: 0;
	outline: none;
	cursor: pointer;
	border-radius: 32px;
	-webkit-mask-image: -webkit-radial-gradient(white, black);
	-webkit-tap-highlight-color: transparent;
	overflow: hidden;
	transition: transform 0.3s ease;
  }
  .order span {
	--o: 1;
	position: absolute;
	left: 0;
	right: 0;
	text-align: center;
	top: 19px;
	line-height: 24px;
	color: var(--white);
	font-size: 16px;
	font-weight: 500;
	opacity: var(--o);
	transition: opacity 0.3s ease;
  }
  .order span.default {
	transition-delay: 0.3s;
  }
  .order span.success {
	--offset: 16px;
	--o: 0;
  }
  .order span.success svg {
	width: 12px;
	height: 10px;
	display: inline-block;
	vertical-align: top;
	fill: none;
	margin: 7px 0 0 4px;
	stroke: var(--green);
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-dasharray: 16px;
	stroke-dashoffset: var(--offset);
	transition: stroke-dashoffset 0.3s ease;
  }
  .order:active {
	transform: scale(0.96);
  }
  .order .lines {
	opacity: 0;
	position: absolute;
	height: 3px;
	background: var(--white);
	border-radius: 2px;
	width: 6px;
	top: 30px;
	left: 100%;
	box-shadow: 15px 0 0 var(--white), 30px 0 0 var(--white), 45px 0 0 var(--white), 60px 0 0 var(--white), 75px 0 0 var(--white), 90px 0 0 var(--white), 105px 0 0 var(--white), 120px 0 0 var(--white), 135px 0 0 var(--white), 150px 0 0 var(--white), 165px 0 0 var(--white), 180px 0 0 var(--white), 195px 0 0 var(--white), 210px 0 0 var(--white), 225px 0 0 var(--white), 240px 0 0 var(--white), 255px 0 0 var(--white), 270px 0 0 var(--white), 285px 0 0 var(--white), 300px 0 0 var(--white), 315px 0 0 var(--white), 330px 0 0 var(--white);
  }
  .order .back,
  .order .box {
	--start: var(--white);
	--stop: var(--grey-light);
	border-radius: 2px;
	background: linear-gradient(var(--start), var(--stop));
	position: absolute;
  }
  .order .truck {
	width: 60px;
	height: 41px;
	left: 100%;
	z-index: 1;
	top: 11px;
	position: absolute;
	transform: translateX(24px);
  }
  .order .truck:before, .order .truck:after {
	--r: -90deg;
	content: "";
	height: 2px;
	width: 20px;
	right: 58px;
	position: absolute;
	display: block;
	background: var(--white);
	border-radius: 1px;
	transform-origin: 100% 50%;
	transform: rotate(var(--r));
  }
  .order .truck:before {
	top: 4px;
  }
  .order .truck:after {
	--r: 90deg;
	bottom: 4px;
  }
  .order .truck .back {
	left: 0;
	top: 0;
	width: 60px;
	height: 41px;
	z-index: 1;
  }
  .order .truck .front {
	overflow: hidden;
	position: absolute;
	border-radius: 2px 9px 9px 2px;
	width: 26px;
	height: 41px;
	left: 60px;
  }
  .order .truck .front:before, .order .truck .front:after {
	content: "";
	position: absolute;
	display: block;
  }
  .order .truck .front:before {
	height: 13px;
	width: 2px;
	left: 0;
	top: 14px;
	background: linear-gradient(var(--grey), var(--grey-dark));
  }
  .order .truck .front:after {
	border-radius: 2px 9px 9px 2px;
	background: var(--primary);
	width: 24px;
	height: 41px;
	right: 0;
  }
  .order .truck .front .window {
	overflow: hidden;
	border-radius: 2px 8px 8px 2px;
	background: var(--primary-light);
	transform: perspective(4px) rotateY(3deg);
	width: 22px;
	height: 41px;
	position: absolute;
	left: 2px;
	top: 0;
	z-index: 1;
	transform-origin: 0 50%;
  }
  .order .truck .front .window:before, .order .truck .front .window:after {
	content: "";
	position: absolute;
	right: 0;
  }
  .order .truck .front .window:after {
	width: 14px;
	top: 7px;
	height: 4px;
	position: absolute;
	background: rgba(255, 255, 255, 0.14);
	transform: skewY(14deg);
	box-shadow: 0 7px 0 rgba(255, 255, 255, 0.14);
  }
  .order .truck .light {
	width: 3px;
	height: 8px;
	left: 83px;
	transform-origin: 100% 50%;
	position: absolute;
	border-radius: 2px;
	transform: scaleX(0.8);
	background: #f0dc5f;
  }
  .order .truck .light:before {
	content: "";
	height: 4px;
	width: 7px;
	opacity: 0;
	transform: perspective(2px) rotateY(-15deg) scaleX(0.94);
	position: absolute;
	transform-origin: 0 50%;
	left: 3px;
	top: 50%;
	margin-top: -2px;
	background: linear-gradient(90deg, #f0dc5f, rgba(240, 220, 95, 0.7), rgba(240, 220, 95, 0));
  }
  .order .truck .light.top {
	top: 4px;
  }
  .order .truck .light.bottom {
	bottom: 4px;
  }
  .order .box {
	--start: var(--sand-light);
	--stop: var(--sand);
	width: 21px;
	height: 21px;
	right: 100%;
	top: 21px;
  }
  .order .box:before, .order .box:after {
	content: "";
	top: 10px;
	position: absolute;
	left: 0;
	right: 0;
  }
  .order .box:before {
	height: 3px;
	margin-top: -1px;
	background: rgba(0, 0, 0, 0.1);
  }
  .order .box:after {
	height: 1px;
	background: rgba(0, 0, 0, 0.15);
  }
  .order.animate .default {
	--o: 0;
	transition-delay: 0s;
  }
  .order.animate .success {
	--offset: 0;
	--o: 1;
	transition-delay: 7s;
  }
  .order.animate .success svg {
	transition-delay: 7.3s;
  }
  .order.animate .truck {
	-webkit-animation: truck 10s ease forwards;
			animation: truck 10s ease forwards;
  }
  .order.animate .truck:before {
	-webkit-animation: door1 2.4s ease forwards 0.3s;
			animation: door1 2.4s ease forwards 0.3s;
  }
  .order.animate .truck:after {
	-webkit-animation: door2 2.4s ease forwards 0.6s;
			animation: door2 2.4s ease forwards 0.6s;
  }
  .order.animate .truck .light:before, .order.animate .truck .light:after {
	-webkit-animation: light 10s ease forwards;
			animation: light 10s ease forwards;
  }
  .order.animate .box {
	-webkit-animation: box 10s ease forwards;
			animation: box 10s ease forwards;
  }
  .order.animate .lines {
	-webkit-animation: lines 10s ease forwards;
			animation: lines 10s ease forwards;
  }
  
  @-webkit-keyframes truck {
	10%, 30% {
	  transform: translateX(-164px);
	}
	40% {
	  transform: translateX(-104px);
	}
	60% {
	  transform: translateX(-224px);
	}
	75%, 100% {
	  transform: translateX(24px);
	}
  }
  
  @keyframes truck {
	10%, 30% {
	  transform: translateX(-164px);
	}
	40% {
	  transform: translateX(-104px);
	}
	60% {
	  transform: translateX(-224px);
	}
	75%, 100% {
	  transform: translateX(24px);
	}
  }
  @-webkit-keyframes lines {
	0%, 30% {
	  opacity: 0;
	  transform: scaleY(0.7) translateX(0);
	}
	35%, 65% {
	  opacity: 1;
	}
	70% {
	  opacity: 0;
	}
	100% {
	  transform: scaleY(0.7) translateX(-400px);
	}
  }
  @keyframes lines {
	0%, 30% {
	  opacity: 0;
	  transform: scaleY(0.7) translateX(0);
	}
	35%, 65% {
	  opacity: 1;
	}
	70% {
	  opacity: 0;
	}
	100% {
	  transform: scaleY(0.7) translateX(-400px);
	}
  }
  @-webkit-keyframes light {
	0%, 30% {
	  opacity: 0;
	  transform: perspective(2px) rotateY(-15deg) scaleX(0.88);
	}
	40%, 100% {
	  opacity: 1;
	  transform: perspective(2px) rotateY(-15deg) scaleX(0.94);
	}
  }
  @keyframes light {
	0%, 30% {
	  opacity: 0;
	  transform: perspective(2px) rotateY(-15deg) scaleX(0.88);
	}
	40%, 100% {
	  opacity: 1;
	  transform: perspective(2px) rotateY(-15deg) scaleX(0.94);
	}
  }
  @-webkit-keyframes door1 {
	30%, 50% {
	  transform: rotate(32deg);
	}
  }
  @keyframes door1 {
	30%, 50% {
	  transform: rotate(32deg);
	}
  }
  @-webkit-keyframes door2 {
	30%, 50% {
	  transform: rotate(-32deg);
	}
  }
  @keyframes door2 {
	30%, 50% {
	  transform: rotate(-32deg);
	}
  }
  @-webkit-keyframes box {
	8%, 10% {
	  transform: translateX(40px);
	  opacity: 1;
	}
	25% {
	  transform: translateX(112px);
	  opacity: 1;
	}
	26% {
	  transform: translateX(112px);
	  opacity: 0;
	}
	27%, 100% {
	  transform: translateX(0px);
	  opacity: 0;
	}
  }
  @keyframes box {
	8%, 10% {
	  transform: translateX(40px);
	  opacity: 1;
	}
	25% {
	  transform: translateX(112px);
	  opacity: 1;
	}
	26% {
	  transform: translateX(112px);
	  opacity: 0;
	}
	27%, 100% {
	  transform: translateX(0px);
	  opacity: 0;
	}
  }












/* shadow effect */
.product-row{
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.quantity__minus:link, .quantity__plus:link {
    color: #ffffff;
    background-color:  var(--primary-color);
}


.formRadioControl{
  border: 1px solid rgb(192, 192, 192);
  border-radius: 5px;
  padding: 7px 18px !important;
  margin: 10px 0;
}

.text-note textarea {
    border-color:  var(--primary-color);
    border-radius: 5px;
}

.form-control.PlaceHolderColorChange::placeholder {
    color:  var(--primary-color) !important;
}

.orderBTN {
    background-color: var(--primary-color);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    border-color: white;
}

.orderBTN:hover{
  background-color:  var(--primary-color);
  color: #fff;
}

.img{
    width: 50px;
}
.img img{
    border-radius: 0% !important;
}

.left{
    border: 1px solid  var(--primary-color);
    padding: 15px;
   
  border-radius: 5px;
}

.delivary-charge {
    padding: 7px 0px;
    border: 1px solid black;
    color:  var(--primary-color);
}
.left-text h5{
  font-weight: 800;
  font-size: 15px;
}

.line{
  border-bottom: 2px solid  var(--primary-color);
}

.secend-box{
  box-shadow: 3px 5px 9px -3px rgba(0,0,0,0.7);
-webkit-box-shadow: 3px 5px 9px -3px rgba(0,0,0,0.7);
-moz-box-shadow: 3px 5px 9px -3px rgba(0,0,0,0.7);
  border-radius: 5px;
}

.right-text i {
  margin: 0px 5px;
  border: 1px solid  var(--primary-color);
  padding: 6px;
  border-radius: 50%;
  background-color:  var(--primary-color);
  color: white;
}
.payment-text i {
  border: 1px solid  var(--primary-color);
  padding: 2px;
  border-radius: 50%;
  background-color:  var(--primary-color);
  color: white;
  font-size: 12px;
  margin-right: 6px;
}

.flag-discount {
    border-radius: 6px 0 0 6px;
    color: #fff;
    display: block;
    float: left;
    padding: 0px 5px;
    background:  var(--primary-color);
    font-size: 15px;
    font-weight: 400;
    position: relative;
}
.flag-discount::before,
.flag-discount::after {
    content: "";
    position: absolute;
    left: 100%;
    width: 0;
    height: 0;
    border-style: solid;
    display: block;
}
.flag-discount::before {
    top: 0;
    border-width: 22px 15px 0 0;
    border-color:  var(--primary-color) transparent transparent transparent;
}
.flag-discount::after {
    bottom: 0;
    border-width: 0 15px 22px 0;
    border-color: transparent transparent  var(--primary-color) transparent;
}


/* input quantity start */


.checkout-page-action{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.checkout-page-action button i {
  width: 35px;
  height: 35px;
  font-size: 14px;
  line-height: 35px;
  border-radius: 6px;
  text-align: center;
  display: inline-block;
  color: var(--text);
  background: var(--chalk);
  text-shadow: var(--primary-tshadow);
  transition: all linear .3s;
  -webkit-transition: all linear .3s;
  -moz-transition: all linear .3s;
  -ms-transition: all linear .3s;
  -o-transition: all linear .3s;
}

.checkout-page-action button i:hover {
  color: var(--white);
  background: var(--primary);
}

.checkout-page-action input {
  width: 17% !important;
  font-size: 15px;
  margin: 0px 5px;
  padding: 6px 0px;
  border-radius: 6px;
  text-align: center;
  color: var(--white);
  background: var(--primary);
  text-shadow: var(--primary-tshadow);
}

/* input quantity end */

</style>