<script setup>
// import { Search, OctagonAlert } from "lucide-vue-next";
import HeaderNavbar from "./components/Header-Navbar.vue";
</script>

<template>
    <div class="flex flex-col h-screen w-">
        <HeaderNavbar class="sticky top-0 z-[5]" />
        <router-view></router-view>
    </div>
</template>
