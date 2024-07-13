<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

const countries = ref([]);
const people = ref([]);
async function getCountries() {
    let { data } = await supabase.from("countries").select();
    countries.value = data;
}

async function getPeople() {
    const { data } = await supabase.from("People").select();
    people.value = data;
}

onMounted(() => {
    getCountries();
    getPeople();
});
</script>

<template>
    <div class="flex items-center justify-center h-full w-full gap-5">
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

        <div
            class="card flex min-w-64 min-h-fit bg-base-200 rounded-xl p-5 items-center justify-center"
        >
            <h1 class="text-3xl font-bold mb-5">People</h1>

            <div>
                <ul>
                    <li
                        v-for="person in people"
                        :key="person.id"
                        class="text-xl"
                    >
                        <div class="flex flex-row">
                            <p>
                                <b>{{ person.id }}</b> -
                                {{ person.FirstName + ` ` + person.LastName }}
                            </p>
                        </div>
                    </li>
                </ul>
                <form>
                    <div class="flex flex-row gap-5 mt-5">
                        <input
                            name="newPersonInput"
                            type="text"
                            placeholder="Person name"
                            class="input"
                        />
                        <button class="btn btn-primary btn-outline">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
