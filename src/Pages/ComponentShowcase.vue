<script setup>
import {
    Coffee,
    Search,
    Info,
    TriangleAlert,
    Ban,
    Check,
} from "lucide-vue-next";
</script>

<template>
    <div
        class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] min-w-1/4 gap-3"
    >
        <div class="flex">
            <div
                class="card flex w-full items-center bg-base-200 h-fit mx-3 p-3 gap-3"
            >
                <h1 class="text-3xl font-bold">Buttons</h1>
                <div class="w-full h-auto flex flex-col gap-3">
                    <button class="btn btn-outline">
                        I'm a button with outline
                    </button>
                    <button class="btn btn-primary">
                        I'm a primary button
                    </button>
                    <button class="btn btn-secondary">
                        I'm a secondary button
                    </button>
                    <button class="btn btn-accent">I'm a accent button</button>
                    <div>
                        <button class="btn btn-square btn-outline mx-2">
                            <Coffee />
                        </button>
                        <button
                            class="btn btn-square rounded-xl btn-outline mx-2"
                        >
                            <Coffee />
                        </button>
                        <button
                            class="btn btn-square rounded-2xl btn-outline mx-2"
                        >
                            <Coffee />
                        </button>
                        <button class="btn btn-circle btn-outline mx-2">
                            <Coffee />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex">
            <div
                class="card flex w-full items-center bg-base-200 h-fit mx-3 p-3 gap-3"
            >
                <h1 class="text-3xl font-bold">Inputs</h1>
                <div class="w-full h-auto flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type all over me"
                        class="input input-primary w-full"
                    />
                    <input
                        type="text"
                        placeholder="I want you to type in me"
                        class="input input-secondary w-full"
                    />
                    <input
                        type="text"
                        placeholder="Your keyboard is my type"
                        class="input input-accent w-full"
                    />
                    <label class="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            class="grow"
                            placeholder="Search for stuff"
                        />
                        <Search />
                    </label>
                    <label class="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            class="grow"
                            placeholder="Some optional stuff"
                        />
                        <span class="badge badge-secondary badge-lm"
                            >Optional</span
                        >
                    </label>
                </div>
            </div>
        </div>

        <div class="flex">
            <div
                class="card flex w-full items-center bg-base-200 h-fit mx-3 p-3 gap-3"
            >
                <h1 class="text-3xl font-bold">Toggles</h1>
                <div class="w-full h-auto flex flex-col gap-3">
                    <div>
                        <input
                            type="checkbox"
                            class="toggle m-2"
                            checked="checked"
                        />
                        <input
                            type="checkbox"
                            class="toggle toggle-primary m-2"
                            checked="checked"
                        />
                        <input
                            type="checkbox"
                            class="toggle toggle-secondary m-2"
                            checked="checked"
                        />
                        <input
                            type="checkbox"
                            class="toggle toggle-accent m-2"
                            checked="checked"
                        />
                    </div>
                    <div class="form-control w-1/2">
                        <label class="label cursor-pointer">
                            <span class="label-text">Don't forget me</span>
                            <input
                                type="checkbox"
                                class="toggle toggle-primary"
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex">
            <div
                class="card flex w-full items-center bg-base-200 h-fit mx-3 p-3 gap-3"
            >
                <h1 class="text-3xl font-bold">Alerts</h1>
                <div class="w-full h-auto flex flex-col gap-3">
                    <div class="alert alert-info" role="alert">
                        <Info />
                        <span class="font-bold text-lg"
                            >Some info or something</span
                        >
                    </div>
                    <div class="alert alert-warning" role="alert">
                        <TriangleAlert />
                        <span class="font-bold text-lg"
                            >Something went wrong</span
                        >
                    </div>
                    <div class="alert alert-error" role="alert">
                        <Ban />
                        <span class="font-bold text-lg">Пиздец</span>
                    </div>
                    <div class="alert alert-success" role="alert">
                        <Check />
                        <span class="font-bold text-lg">Nice</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex">
            <div
                class="card flex w-full items-center bg-base-200 h-fit mx-3 p-3 gap-3"
            >
                <h1 class="text-3xl font-bold">Loadings</h1>
                <div class="w-full h-auto flex flex-col gap-3 items-center">
                    <span
                        class="loading loading-spinner loading-lg text-primary"
                    ></span>
                    <span
                        class="loading loading-dots loading-lg text-secondary"
                    ></span>
                    <span
                        class="loading loading-ring loading-lg text-accent"
                    ></span>
                    <span
                        class="loading loading-ball loading-lg text-info"
                    ></span>
                    <span
                        class="loading loading-bars loading-lg text-warning"
                    ></span>
                    <span
                        class="loading loading-infinity loading-lg text-error"
                    ></span>
                </div>
            </div>
        </div>

        <div class="flex">
            <div
                class="card flex w-full items-center bg-base-200 h-fit mx-3 p-3 gap-3"
            >
                <h1 class="text-3xl font-bold">Ranges</h1>
                <div class="w-full h-auto flex flex-col gap-3 items-center">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="25"
                        class="range range-primary"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="35"
                        class="range range-secondary"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="45"
                        class="range range-accent"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="55"
                        class="range range-info"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="65"
                        class="range range-warning"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="75"
                        class="range range-error"
                    />
                </div>
            </div>
        </div>

        <div class="flex">
            <div
                class="card flex w-full items-center bg-base-200 h-fit mx-3 p-3 gap-3"
            >
                <h1 class="text-3xl font-bold">Steps</h1>
                <div class="w-full h-auto flex flex-col gap-3 items-center">
                    <ul class="steps steps-vertical">
                        <li class="step step-primary">Ride wife</li>
                        <li class="step step-primary">Life good</li>
                        <li class="step step-primary">Wife fight back</li>
                        <li class="step step-primary">Kill wife</li>
                        <li class="step">Wife gone</li>
                        <li class="step">Think about wife</li>
                        <li class="step">Regret</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex">
            <div
                class="card flex w-full items-center bg-base-200 h-fit mx-3 p-3 gap-3"
            >
                <h1 class="text-3xl font-bold">Select</h1>
                <div class="w-full h-auto flex flex-col gap-3 items-center">
                    <select class="select select-primary w-full max-w-xs">
                        <option disabled selected>You or Me?</option>
                        <option>You</option>
                        <option>Me</option>
                    </select>
                    <select class="select select-secondary w-full max-w-xs">
                        <option disabled selected>Them or Us?</option>
                        <option>Them</option>
                        <option>Us</option>
                    </select>
                    <select class="select select-accent w-full max-w-xs">
                        <option disabled selected>Theirs or Ours?</option>
                        <option>Theirs</option>
                        <option>Ours</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>
