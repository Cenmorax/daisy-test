<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

const countries = ref([]);
async function getCountries() {
    const { data } = await supabase.from("countries").select();
    countries.value = data;
}

onMounted(() => {
    getCountries();
});
</script>

<template>
    <div class="flex items-center justify-center h-full w-full">
        <div
            class="card flex min-w-64 min-h-fit bg-base-200 rounded-xl p-5 items-center justify-center"
        >
            <h1 class="text-3xl font-bold mb-5">Countries</h1>
            <ul>
                <li
                    v-for="country in countries"
                    :key="country.id"
                    class="text-xl"
                >
                    <b>{{ country.id }}</b> - {{ country.name }}
                </li>
            </ul>
            <form>
                <div class="flex flex-row gap-5 mt-5">
                    <input
                        name="newCountryInput"
                        type="text"
                        placeholder="Country name"
                        class="input"
                    />
                    <button class="btn btn-primary btn-outline">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>
