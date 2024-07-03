
<script setup>
import { onMounted, ref } from "vue";
import { useOrder, useStatus } from "@/stores";
import { storeToRefs } from "pinia";

const statu = useStatus()
const statuses = ref()
const order = useOrder()
const {orderLists} = storeToRefs(order)
const isOpen = ref(false);
const orderId = ref();

const getStatuses = async() => {
    statuses.value = await statu.getStatus();
}


const toggleOrderList = (index) => {
    isOpen.value = !isOpen.value;
    orderId.value = index;
    getStatuses();
}

// Define a computed property to format the date
const formattedDate = (createdAtString) => {
  const createdAtDate = new Date(createdAtString);
  return createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
};


const logout = async () => {
    const res = await auth.logout();
    if (res.success) {
        router.push({ name: "HomePage"});
        notify.Success("Logout Successfully Done");
    }
}

onMounted(() => {
    order.getOrderList();
})
</script>

<template>
    <div class="container account-container custom-account-container">
        <div class="row">
            <div class="sidebar widget widget-dashboard mb-lg-0 mb-3 col-lg-3 order-0">
                <h2 class="text-uppercase">My Account</h2>
                <ul class="nav nav-tabs list flex-column mb-0" role="tablist">

                    <li class="nav-item">
                        <a class="nav-link" id="order-tab" data-toggle="tab" href="#order" role="tab" aria-controls="order" aria-selected="true">Orders</a>
                    </li>

                    <li class="nav-item">
                        <router-link :to="{name: 'WishlistPage'}" class="nav-link" >Wishlist</router-link>
                    </li>
                    <li class="nav-item">
                        <a href=""  class="nav-link" @click="logout">Logout</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-9 order-lg-last order-1 tab-content">

                <div class="tab-pane fade show active" id="order" role="tabpanel">
                    <div class="order-content">
                        <h3 class="account-sub-title d-none d-md-block"><i class="sicon-social-dropbox align-middle mr-3"></i>Orders</h3>
                        <div class="order-table-container text-center">
                            <table class="table table-order text-left table-bordered">
                                <thead>
                                    <tr>
                                        <th class="order-id">Order </th>
                                        <th class="order-date">Date</th>
                                        <th class="order-status">Status</th>
                                        <th class="order-price">Total</th>
                                        <th class="order-action">Delivery location</th>
                                        <th class="order-action">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(orderList, index) in orderLists?.result?.data" :key="index">
                                        <td class="text-center p-0"  >
                                            <p class="mb-5 mt-5">{{ index + 1 }}</p>
                                        </td>
                                        <td class="text-center p-0"  >
                                            <p class="mb-5 mt-5">{{ orderList.created_at }}</p>
                                        </td>
                                        <td class="text-center p-0"  >
                                            <p class="mb-5 mt-5">{{ orderList.current_status.name }}</p>
                                        </td>
                                        <td class="text-center p-0"  >
                                            <p class="mb-5 mt-5">{{ $filters.currencySymbol(orderList.payable_price) }}</p>
                                        </td>
                                        <td class="text-center p-0"  >
                                            <p class="mb-5 mt-5">{{ orderList.address_details }}</p>
                                        </td>
                                        <td class="text-center p-0">
                                            <router-link :to="{name: 'OrderItem', params:{ id: orderList.id  } }" class="btn btn-sm btn-success text-capitalize">View Items</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr class="mt-0 mb-3 pb-2">

                            <router-link :to="{name: 'ShopPage'}" href="category.html" class="btn btn-dark">Go Shop</router-link>
                        </div>
                    </div>
                </div>
            </div><!-- End .tab-content -->
        </div><!-- End .row -->
    </div>
</template>

<style>

</style>