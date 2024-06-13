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

const name = ref(auth?.user?.user?.name);
const phoneNumber = ref(auth?.user?.user?.phone_number);
const district = ref("");
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
                  <button type="submit" :disabled="isSubmitting" class="text-center orderBTN mt-4 w-100" @click="placeOrder()"><span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>Order Now</button>
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