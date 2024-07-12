<script setup>
import { Menu, Palette, CircleUser } from "lucide-vue-next";
</script>

<template>
    <div class="flex w-full p-3">
        <div class="navbar bg-base-300 rounded-xl flex-row">
            <div class="navbar-start w-fit">
                <button class="dropdown">
                    <div tabindex="0" class="btn btn-ghost btn-square">
                        <Menu />
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <router-link to="/about"
                            ><li>
                                <a class="btn btn-sm btn-block btn-ghost"
                                    >About</a
                                >
                            </li></router-link
                        >
                        <router-link to="/components">
                            <li>
                                <a class="btn btn-sm btn-block btn-ghost"
                                    >Component Showcase</a
                                >
                            </li>
                        </router-link>

                        <li>
                            <a class="btn btn-sm btn-block btn-ghost"
                                >Some option 3</a
                            >
                        </li>
                    </ul>
                </button>
            </div>
            <router-link to="/">
                <div class="navbar-center">
                    <a class="btn btn-ghost text-xl">Testing playground</a>
                </div>
            </router-link>
            <div class="navbar-end w-full gap-2">
                <button class="dropdown dropdown-end">
                    <div tabindex="0" class="btn btn-ghost btn-square">
                        <Palette />
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
                    >
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Default"
                                value="default"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Retro"
                                value="retro"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Cyberpunk"
                                value="cyberpunk"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Valentine"
                                value="valentine"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Aqua"
                                value="aqua"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Coffee"
                                value="coffee"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Dim"
                                value="dim"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Forest"
                                value="forest"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Dracula"
                                value="dracula"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Sunset"
                                value="sunset"
                            />
                        </li>
                    </ul>
                </button>

                <router-link to="/Authorization">
                    <button class="btn btn-ghost btn-square">
                        <CircleUser />
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>
