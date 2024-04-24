<script setup>
import { ref } from "vue";
import { useCart } from "@/stores";
import { storeToRefs } from "pinia";

const cart = useCart();
const { cartItem, totalPrice } = storeToRefs(cart);

const deleteCart = (index) => {
  cart.destroy(index);
};

const cartIncrement = (index) => {
  cart.increment(index);
};

const cartDecrement = (index) => {
  cart.decrement(index);
};


</script>

<template>
<main class="main">
    <div class="container">
        <ul class="checkout-progress-bar d-flex justify-content-center flex-wrap">
            <li class="active">
                <a href="cart.html">Shopping Cart</a>
            </li>
            <li>
                <a href="checkout.html">Checkout</a>
            </li>
            <li class="disabled">
                <a href="cart.html">Order Complete</a>
            </li>
        </ul>

        <div class="row">
            <div class="col-lg-8">
                <div class="cart-table-container">
                    <table class="table table-cart">
                        <thead>
                            <tr>
                                <th class="thumbnail-col">Image</th>
                                <th class="product-col">Product</th>
                                <th class="price-col">Price</th>
                                <th class="qty-col">Quantity</th>
                                <th class="text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="product-row" v-for="(product, index) in cartItem" :key="index">
                                <td>
                                    <figure class="product-image-container">
                                        <a href="product.html" class="product-image">
                                            <img :src="product.image" alt="product">
                                        </a>

                                        <a href="#" class="btn-remove icon-cancel" title="Remove Product" @click.prevent="deleteCart(index)"></a>
                                    </figure>
                                </td>
                                <td class="product-col">
                                    <h5 class="product-title">
                                        <a href="product.html">{{ product.name }}</a>
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
                            </tr>
                        </tbody>
                    </table>
                </div><!-- End .cart-table-container -->
            </div><!-- End .col-lg-8 -->

            <div class="col-lg-4">
                <div class="cart-summary">
                    <h3>CART TOTALS</h3>

                    <table class="table table-totals">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>{{ $filters.currencySymbol(totalPrice) }}</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>{{ $filters.currencySymbol(totalPrice) }}</td>
                            </tr>
                        </tfoot>
                    </table>

                    <div class="checkout-methods">
                        <router-link :to="{name: 'CheckoutPage'}" href="cart.html" class="btn btn-block btn-dark">Proceed to Checkout <i class="fa fa-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-6"></div><!-- margin -->
</main>
</template>



<style>
/* Product Quentity start css */

.product-single-qtyy{
  display: flex;
  width: 100%;
  align-items: center;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.quantity__minus,
.quantity__plus {
  display: block;
  width: 25px;
  height: 30px;
  margin: 0;
  background: #dee0ee;
  text-decoration: none;
  text-align: center;
  line-height: 30px;
}
.quantity__minus:hover,
.quantity__plus:hover {
  background: #575b71;
  color: #fff;
} 
.quantity__minus {
  border-radius: 3px 0 0 3px;
}
.quantity__plus {
  border-radius: 0 3px 3px 0;
}
.quantity__input {
  width: 45px;
  height: 30px;
  margin: 0;
  padding: 0;
  text-align: center;
  border-top: 2px solid #dee0ee;
  border-bottom: 2px solid #dee0ee;
  border-left: 1px solid #dee0ee;
  border-right: 2px solid #dee0ee;
  background: #fff;
  color: #8184a1;
}
.quantity__minus:link,
.quantity__plus:link {
  color: #8184a1;
} 
.quantity__minus:visited,
.quantity__plus:visited {
  color: #fff;
}

/* Product Quentity end css */
</style>