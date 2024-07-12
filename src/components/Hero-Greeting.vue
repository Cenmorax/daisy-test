<template>
    <div class="flex items-center justify-center w-full h-full">
        <div
            class="card flex flex-col bg-base-300 min-h-fit min-w-24 items-center rounded-xl shadow-2xl p-5 mx-5"
        >
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Testing playground</h1>
                <p class="py-6">
                    This is a testing playground. Feel free to use it to test
                    new components and features. Try to use components to keep
                    everything clean pls. <br />
                    <b
                        >Idk try to use blocks for the main components that
                        should be displayed in the main page (Header, Hero,
                        etc.) otherwise is causes some strange behaviour in
                        layout
                    </b>
                    <br />
                    <b class="text-red-500">Or don't idk how it works</b>
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
