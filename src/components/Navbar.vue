<template>
    <nav
        data-aos="fade-down"
        class="shadow-sm flex items-center justify-between max-w-[1000px] w-full mx-auto gap-8 p-4 px-12 mt-4 text-black bg-white rounded-full dark:bg-customNavDark dark:text-white font-roboto"
    >
        <!-- Left: Logo -->
        <router-link to="/" class="flex items-center font-bold">
            <img
                :src="isDark ? '/myLogo1.png' : '/myLogo.png'"
                alt="Logo"
                class="w-16 h-auto"
            />
        </router-link>

        <!-- Center: Nav links -->
        <div class="flex items-center gap-12">
            <router-link to="/" v-slot="{ isActive }">
                <span
                    :class="[
                        isActive
                            ? 'border-b-2 dark:border-white  border-black'
                            : '',
                        'hover:border-b-2 dark:hover:border-white hover:border-black',
                    ]"
                >
                    Home
                </span>
            </router-link>
            <router-link to="/about" v-slot="{ isActive }">
                <span
                    :class="[
                        isActive
                            ? 'border-b-2 dark:border-white  border-black'
                            : '',
                        'hover:border-b-2 dark:hover:border-white hover:border-black',
                    ]"
                    >About</span
                ></router-link
            >
            <router-link to="/projects" v-slot="{ isActive }">
                <span
                    :class="[
                        isActive
                            ? 'border-b-2 dark:border-white  border-black'
                            : '',
                        'hover:border-b-2 dark:hover:border-white hover:border-black',
                    ]"
                    >Project</span
                >
            </router-link>
            <router-link to="/contact" v-slot="{ isActive }"
                ><span
                    :class="[
                        isActive
                            ? 'border-b-2 dark:border-white  border-black'
                            : '',
                        'hover:border-b-2 dark:hover:border-white hover:border-black',
                    ]"
                    >Contact</span
                ></router-link
            >
        </div>

        <!-- Right: Dark mode toggle -->
        <div class="flex items-center gap-2">
            <button
                @click="toggleDark()"
                class="relative text-black transition-all duration-300 ease-in-out transform rounded-full bg-customWhite w-14 h-7 dark:bg-customWhite"
            >
                <span
                    class="absolute top-0.5 left-0.5 w-8 h-6 rounded-full shadow-md"
                    :class="{
                        'translate-x-7': isDark,
                    }"
                >
                    <svg
                        v-if="isDark"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        class="size-6"
                    >
                        <path
                            d="M13.294 5A11.19 11.19 0 1 0 27 18.706s-5.723 2.19-10.81-2.897C11.105 10.723 13.295 5 13.295 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                        />
                    </svg>

                    <span v-else>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            />
                        </svg>
                    </span>
                </span>
            </button>
        </div>
    </nav>
</template>

<script setup>
    import { useDark, useToggle } from '@vueuse/core';

    const isDark = useDark();
    const toggleDark = useToggle(isDark);
</script>
