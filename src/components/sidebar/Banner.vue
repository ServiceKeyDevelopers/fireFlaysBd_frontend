<script setup>
// All Import File  Code Is Here......................................................................................................
// All Variable  Code Is Here....................................................................................................
const props = defineProps({
  banner: Object,
});

// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>
<template>
    <div class="banner banner1 mb-2 pr-sm-3 pr-0 pr-xl-0">
        <img class="slide-bg" :src="banner.image" alt="slider image" style="background-color: #d9e2e1;">
        <div class="container d-flex align-items-center">
            <div class="banner-layer d-flex flex-column pt-0">
                <h2 class="text-transform-none appear-animate animated fadeInUpShorter appear-animation-visible" data-animation-name="fadeInUpShorter" data-animation-delay="600" style="animation-duration: 1000ms;">{{ banner.title }}</h2>
            </div>
            <!-- End .banner-layer -->
        </div>
    </div>
</template>

<style>

</style>