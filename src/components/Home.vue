<script setup>
    import { Vue3Marquee } from 'vue3-marquee';
</script>

<template>
    <div
        class="flex items-center justify-center min-h-screen px-4 text-black font-roboto dark:text-customWhite mt-[-100px]"
    >
        <div
            class="flex flex-col items-center justify-center space-y-4 text-center"
        >
            <!-- Intro -->
            <p
                class="w-full ml-0 text-center text-gray-500 dark:text-gray-400"
                data-aos="my-slide-left"
            >
                Hi, I'm
            </p>

            <!-- Headings -->
            <h1
                data-aos="my-slide-right"
                class="text-4xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl text-shadow-lg1 dark:text-shadow-darkLg"
            >
                SYLVEST
            </h1>
            <h1
                data-aos="my-slide-left"
                class="text-4xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl text-shadow-lg1 dark:text-shadow-darkLg"
            >
                FALCUTILA
            </h1>
            <h1
                data-aos="my-slide-right"
                class="text-4xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl text-shadow-lg1 dark:text-shadow-darkLg"
            >
                MADELO
            </h1>

            <!-- Description -->
            <p
                data-aos="my-slide-left"
                class="max-w-xl px-24 text-sm text-gray-500 md:px-12 sm:text-base md:text-lg dark:text-gray-400"
            >
                Aspiring Full-Stack Web Developer and recent graduate, eager to
                apply my skills, keep learning, and build impactful projects.
                <span
                    class="font-semibold text-gray-700 cursor-pointer hover:underline dark:text-gray-200"
                >
                    <a
                        href="/src/assets/Sylvest_Madelo_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Resume.
                    </a></span
                >
            </p>

            <!-- Social Links -->
            <div
                data-aos="my-slide-right"
                class="flex gap-4 p-2 px-4 rounded-full shadow-sm bg-customNavDark max-w-fit dark:text-black"
            >
                <!-- Facebook -->
                <span
                    class="flex items-center gap-2 p-2 transition-all duration-300 ease-in-out bg-white rounded-full shadow-md group hover:pr-6 hover:bg-gray-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    <span
                        class="overflow-hidden transition-all duration-300 ease-in-out opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs"
                    >
                        <a
                            href="https://www.facebook.com/share/1BAvxX26VM/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </span>
                </span>

                <!-- Instagram -->
                <span
                    class="flex items-center gap-2 p-2 transition-all duration-300 ease-in-out bg-white rounded-full shadow-md group hover:pr-6 hover:bg-gray-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <span
                        class="overflow-hidden transition-all duration-300 ease-in-out opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs"
                    >
                        <a
                            href="https://www.instagram.com/sylvesst?igsh=bTc5MGFvemVncnk5"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Instagram</a
                        ></span
                    >
                </span>

                <!-- GitHub -->
                <span
                    class="flex items-center gap-2 p-2 transition-all duration-300 ease-in-out bg-white rounded-full shadow-md group hover:pr-6 hover:bg-gray-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <span
                        class="overflow-hidden transition-all duration-300 ease-in-out opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs"
                    >
                        <a
                            href="https://github.com/Iamsylvest"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Github</a
                        ></span
                    >
                </span>
            </div>
        </div>
    </div>
    <div
        class="w-full py-2 overflow-hidden text-white bg-black whitespace-nowrap mt-[-16px]"
    >
        <div class="inline-flex animate-marquee">
            <span class="mx-8">Frontend Developer</span>
            <span class="mx-8">Backend Developer</span>
            <span class="mx-8">Vue.js • Laravel</span>
            <span class="mx-8">Creative Coder</span>

            <!-- duplicate items for seamless loop -->
            <span class="mx-8">Frontend Developer</span>
            <span class="mx-8">Backend Developer</span>
            <span class="mx-8">Vue.js • Laravel</span>
            <span class="mx-8">Creative Coder</span>
            <!-- duplicate items for seamless loop -->
            <span class="mx-8">Frontend Developer</span>
            <span class="mx-8">Vue.js • Laravel</span>
            <span class="mx-8">Creative Coder</span>
            <!-- duplicate items for seamless loop -->
            <span class="mx-8">Frontend Developer</span>
            <span class="mx-8">Backend Developer</span>
            <span class="mx-8">Vue.js • Laravel</span>
            <span class="mx-8">Creative Coder</span>
        </div>
    </div>
</template>
