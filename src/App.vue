<script setup lang="ts">
import Header from './components/Header.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <Header />
    <div class="container p-2">
        <router-view :key="route.path"></router-view>
    </div>
</template>

<style>
</style>
