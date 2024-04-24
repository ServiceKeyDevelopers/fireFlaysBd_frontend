<script setup>
import { ref } from "vue";
import { CheckoutCoupon, CheckoutLogin } from "@/components";
import { useCart, useOrder, useAuth, useModal } from "@/stores";
import { storeToRefs } from "pinia";

const cart = useCart();
const { cartItem, totalPrice } = storeToRefs(cart);


</script>

<template>
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

                <CheckoutLogin />

                <CheckoutCoupon />

                <div class="row">
                    <div class="col-lg-7">
                        <ul class="checkout-steps">
                            <li>
                                <h2 class="step-title">Billing details</h2>

                                <form action="#" id="checkout-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Full Name
                                                    <abbr class="required" title="required">*</abbr>
                                                </label>
                                                <input type="text" class="form-control" required />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone <abbr class="required" title="required">*</abbr></label>
                                                <input type="tel" class="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Full Address <abbr class="required" title="required">*</abbr></label>
                                        <input type="text" class="form-control" required placeholder="বাসা নং, রোড নং, থানা/উপজেলা, জেলা" />
                                    </div>

                                    <div class="form-group">
                                        <label>Email Address (Optional)</label>
                                        <input type="email" class="form-control" required />
                                    </div>

                                    <div class="form-group">
                                        <label class="order-comments">Order Notes (optional)</label>
                                        <textarea class="form-control" placeholder="Notes about your order, e.g. special notes for delivery." required></textarea>
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
                                                <div class="custom-control custom-radio d-flex">
                                                    <input type="radio" class="custom-control-input" name="radio" checked />
                                                    <label class="custom-control-label">Cash On Delivery</label>
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

                            <button type="submit" class="btn btn-dark btn-place-order" form="checkout-form">
                                Place order
                            </button>
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
