<script setup>
// import { Search, OctagonAlert } from "lucide-vue-next";
import HeaderNavbar from "./components/Header-Navbar.vue";
</script>

<template>
    <div class="flex flex-col h-screen w-full">
        <HeaderNavbar class="fixed z-[5]" />
        <router-view class="relative pt-[5.5rem]"></router-view>
    </div>
</template>
