<template>
    <div class="flex items-center justify-center w-full h-full">
        <div
            class="card flex flex-col bg-base-300 min-h-fit min-w-24 items-center rounded-xl shadow-2xl p-5 mx-5"
        >
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Testing playground</h1>
                <p class="py-6">
                    This is a testing playground.<br />
                    <b
                        >Idk how scaling works but use flex whenever possible
                    </b>
                    <br />
                    <b class="text-red-500">Supabase test page doesn't work on mobile</b>
                    <b class="text-red-500">No idea how to fetch data from supabase nor how to display it</b>
                    <b class="text-red-500">Authorization it's ready, only the base form is ready, maybe use Auto0, SuperTokens or maybe supabase solution if there is any</b>
                    <p class="py-6">
                        Keep GSAP.com and threejs in mind
                    </p>
                </p>
                <router-link to="/components">
                    <button class="btn btn-primary btn-outline">
                        Get Started
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>
