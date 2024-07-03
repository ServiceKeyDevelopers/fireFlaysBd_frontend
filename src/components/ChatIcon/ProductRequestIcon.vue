<template>
    <div>
        <div class="product-request">
            <router-link :to="{name: 'ProductRequest'}">Product Request</router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.product-request {
    position: fixed;
    bottom: 26px;
    left: 0;
    z-index: 9;
    background-color: red;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    transform: translateX(50%);
    display: flex; /* Add this line */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
}
.product-request a {
    color: white;
    margin: auto; /* Optional: Remove default margin */
    font-size: 16px;
    transform: translateX(17%);
}
.product-request a:hover {
    color: white;
}
.product-request a:active {
    color: white;
}

@media (max-width: 768px) { 

    
}
  @media (max-width: 425px) {
    .product-request {
        bottom: 53px;
        left: -16px;
        height: 80px;
        width: 80px;
        transform: translateX(50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-request a {
        font-size: 14px;
    }
    
  }
  
  @media (max-width: 375px) {
  
  }
  
  @media (max-width: 320px) {
  
  }
</style>