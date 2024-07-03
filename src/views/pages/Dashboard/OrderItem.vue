<script setup>
import { onMounted, ref } from "vue";
import { useOrder, useStatus } from "@/stores";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const order     = useOrder();
const singleOrderListItem = ref('');
// const {orderLists} = storeToRefs(order)

const singleOrderList = async () => {
    const res =  await order.getSingleOrderList(route.params.id)
    singleOrderListItem.value = res.data.result;
}

onMounted(() => {
    singleOrderList();
})
</script>

<template>
<div>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="d-flex  justify-content-between">
                <h4 class="mt-2">Order Item</h4>
                <router-link :to="{name: 'Dashboard'}" class="btn table-success text-dark my-2 text-capitalize">View Order</router-link>
            </div>
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="table-success text-dark">
                      <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">User Phone</th>
                        <th scope="col">Total</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{{ singleOrderListItem.customer_name }}</th>
                        <td>{{ singleOrderListItem.phone_number }}</td>
                        <td>{{ $filters.currencySymbol(singleOrderListItem.payable_price) }}</td>
                        <td>{{ singleOrderListItem.created_at }}</td>
                      </tr>
                      <tr>
                        <td colspan="5">
                            <table class="table">
                                <col style="width: 3%" />
                                <col style="width: 10%" />
                                <col style="width: 50%" />
                                <thead class="table-success text-dark">
                                  <tr>
                                    <th scope="col" class="text-center">#</th>
                                    <th scope="col" class="text-center">Image</th>
                                    <th scope="col" class="">Name</th>
                                    <th scope="col" class="text-center">Warranty Number</th>
                                    <th scope="col" class="text-center">Review</th>
                                    <th scope="col" class="text-center">Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(item, index) in singleOrderListItem.items" :key="index">
                                    <td scope="row" class="text-center" style="align-content: center;">{{ index + 1 }}</td>
                                    <td class="text-center" style="align-content: center;"><img :src="item.image" class="orderImg" alt=""></td>
                                    <td class="" style="align-content: center;">{{ item.name }}</td>
                                    <td class="text-center" style="align-content: center;">{{ item.pivot.warranty_number }}</td>
                                    <td class="text-center" style="align-content: center;"> {{ item.average_rating }} %</td>
                                    <td class="text-center" style="align-content: center;">{{ Math.round((item.pivot.item_sell_price == 0 ? item.pivot.item_mrp : item.pivot.item_sell_price) * item.pivot.quantity) }} TK</td>
                                  </tr>
                                </tbody>
                              </table>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>
</template>

<style>

.orderImg{
    width: 70px;
}

</style>