<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
    <div>
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link :to="{ name: 'HomePage'}"><i class="icon-home"></i></router-link></li>
                <li class="breadcrumb-item"><router-link :to="{ name: route.name}">{{ route.name }}</router-link></li>
            </ol>
        </nav>
    </div>
</template>

<style>

</style>