<script setup>
    import { ref } from 'vue';
    import ImageData from '/src/data/Projects.json';
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/splide.min.css';
    // clone the array first (so we don’t destroy the original)
    const ImageClone = [...ImageData.data];
    // take first 4 items (index 0–3)
    // firstGroup = [0,1,2,3]
    // arr is now [4,5,6]
    const firstGroup = ImageClone.splice(0, 3);

    // take next 3 items (index 4–6)
    // secondGroup = [4,5,6]
    // arr is now []
    const secondGroup = ImageClone.splice(0, 3);

    const showModal = ref(false);
    const selectedData = ref({});
    const toggleShowModal = (projectData) => {
        selectedData.value = projectData;
        showModal.value = true;
    };

    const selectedDataTwo = ref({});
    const showModalTwo = ref(false);
    const toggleShowModalTwo = (selectedData) => {
        selectedDataTwo.value = selectedData;
        showModalTwo.value = true;
    };
</script>
<template>
    <div
        class="p-8 ml-0 text-5xl text-center sm:ml-12 font-roboto sm:text-left"
        data-aos="my-slide-right"
    >
        <h1
            class="inline-block w-auto pb-1 text-3xl font-bold border-b-2 border-gray-700 sm:text-5xl"
        >
            Projects
        </h1>
    </div>
    <div
        class="grid h-screen grid-cols-1 p-12 mx-auto sm:w-5/6 md:grid-cols-2 sm:grid-cols-1 rounded-xl font-roboto mt-[-44px]"
    >
        <div
            class="grid grid-cols-1 gap-6 p-4 rounded-xl"
            data-aos="my-slide-left"
        >
            <div
                v-for="groupOne in firstGroup"
                :key="groupOne.id"
                class="relative p-4 text-white border-2 border-gray-700 shadow-lg rounded-xl group"
            >
                <img :src="groupOne.main_img" alt="Main" class="rounded-md" />

                <!-- Overlay -->
                <div
                    class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-opacity-50 opacity-0 bg-gradient-to-t from-black rounded-xl group-hover:opacity-100"
                >
                    <div class="absolute left-6 bottom-4">
                        <h1 class="text-gray-400">{{ groupOne.name }}</h1>
                    </div>
                    <button
                        @click="toggleShowModal(groupOne)"
                        class="relative flex gap-2 p-1 px-2 text-gray-400 transition-all duration-300 ease-in-out rounded-lg sm:p-2 sm:px-4 bg-customNavDark hover:bg-customWhite hover:text-black hover:font-bold"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M17.079 12.5H5.5q-.213 0-.357-.143T5 12t.143-.357t.357-.143h11.579L11.64 6.062q-.147-.146-.153-.345t.158-.363q.165-.16.354-.163q.189-.002.354.163l6.08 6.08q.131.132.184.268q.053.137.053.298t-.053.298q-.052.137-.183.268l-6.081 6.08q-.14.14-.341.15q-.202.01-.367-.15q-.165-.165-.165-.356q0-.192.165-.357z"
                            />
                        </svg>
                        See Details
                    </button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-6 p-4" data-aos="my-slide-right">
            <div
                v-for="groupTwo in secondGroup"
                :key="groupTwo.id"
                class="relative p-4 text-white border-2 border-gray-700 shadow-lg rounded-xl group"
            >
                <img :src="groupTwo.main_img" alt="Main" class="rounded-md" />

                <!-- Overlay -->
                <div
                    class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-opacity-50 opacity-0 bg-gradient-to-t from-black rounded-xl group-hover:opacity-100"
                >
                    <div class="absolute left-6 bottom-4">
                        <h1 class="text-gray-400">{{ groupTwo.name }}</h1>
                    </div>
                    <button
                        @click="toggleShowModalTwo(groupTwo)"
                        class="relative flex gap-2 p-1 px-2 text-gray-400 transition-all duration-300 ease-in-out rounded-lg sm:p-2 sm:px-4 bg-customNavDark hover:bg-customWhite hover:text-black hover:font-bold"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M17.079 12.5H5.5q-.213 0-.357-.143T5 12t.143-.357t.357-.143h11.579L11.64 6.062q-.147-.146-.153-.345t.158-.363q.165-.16.354-.163q.189-.002.354.163l6.08 6.08q.131.132.184.268q.053.137.053.298t-.053.298q-.052.137-.183.268l-6.081 6.08q-.14.14-.341.15q-.202.01-.367-.15q-.165-.165-.165-.356q0-.192.165-.357z"
                            />
                        </svg>
                        See Details
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
        <div
            class="absolute inset-0 bg-black opacity-50"
            @click="showModal = false"
        ></div>

        <div
            class="relative z-10 w-full h-auto max-w-4xl p-6 space-y-4 overflow-hidden border-2 border-gray-700 rounded-md shadow-xl bg-customWhite dark:bg-customBodyDark dark:text-white animate-fadeIn"
        >
            <div class="flex items-center justify-end">
                <button
                    @click="showModal = false"
                    class="p-1 px-2 rounded-full hover:bg-gray-700 hover:text-white"
                >
                    X
                </button>
            </div>
            <splide
                :options="{
                    type: 'loop',
                    autoplay: true,
                    arrows: false,
                }"
            >
                <SplideSlide
                    v-for="subImages in selectedData.sub_img"
                    :key="sub"
                    class="flex items-center justify-center"
                >
                    <img
                        :src="subImages"
                        class="max-h-[500px] w-auto rounded-md"
                        alt="subImages"
                    />
                </SplideSlide>
            </splide>

            <!-- Project Name -->
            <h1 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {{ selectedData.name }}
            </h1>

            <!-- Description -->
            <p class="mb-4 text-sm text-gray-700 dark:text-gray-300">
                {{ selectedData.description }}
            </p>

            <!-- Languages / Tags -->
            <div class="flex flex-wrap gap-3">
                <div class="flex items-center">
                    <h3 class="mb-1 text-sm font-semibold">
                        Technologies Used:
                    </h3>
                </div>
                <div
                    v-for="language in selectedData.languages"
                    :key="language.id"
                    class="flex items-center justify-center px-3 py-1 text-sm font-medium bg-gray-100 border-2 border-gray-700 rounded-full dark:bg-customNavDark dark:text-white"
                >
                    {{ language.name }}
                </div>
            </div>

            <!-- Live / Demo button -->
            <a
                v-if="selectedData.demo"
                :href="selectedData.demo"
                target="_blank"
                class="inline-block w-full px-4 py-2 mb-4 font-semibold text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
                View Demo
            </a>

            <a
                v-else-if="selectedData.link"
                :href="selectedData.link"
                target="_blank"
                class="inline-block w-full px-4 py-2 mb-4 font-semibold text-center text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
            >
                Visit Site
            </a>
        </div>
    </div>

    <div
        v-if="showModalTwo"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
        <div
            class="absolute inset-0 bg-black opacity-50"
            @click="showModalTwo = false"
        ></div>

        <div
            class="relative z-10 w-full h-auto max-w-4xl p-6 space-y-4 overflow-hidden border-2 border-gray-700 rounded-md shadow-xl bg-customWhite dark:bg-customBodyDark dark:text-white animate-fadeIn"
        >
            <div class="flex items-center justify-end">
                <button
                    @click="showModalTwo = false"
                    class="p-1 px-2 rounded-full hover:bg-gray-700 hover:text-white"
                >
                    X
                </button>
            </div>
            <splide
                :options="{
                    type: 'loop',
                    autoplay: true,
                    arrows: false,
                }"
            >
                <SplideSlide
                    v-for="subImages in selectedDataTwo.sub_img"
                    :key="sub"
                    class="flex items-center justify-center"
                >
                    <img
                        :src="subImages"
                        class="max-h-[500px] w-auto rounded-md"
                        alt="subImages"
                    />
                </SplideSlide>
            </splide>

            <!-- Project Name -->
            <h1 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {{ selectedDataTwo.name }}
            </h1>

            <!-- Description -->
            <p class="mb-4 text-sm text-gray-700 dark:text-gray-300">
                {{ selectedDataTwo.description }}
            </p>

            <!-- Languages / Tags -->
            <div class="flex flex-wrap gap-3">
                <div class="flex items-center">
                    <h3 class="mb-1 text-sm font-semibold">
                        Technologies Used:
                    </h3>
                </div>
                <div
                    v-for="language in selectedDataTwo.languages"
                    :key="language.id"
                    class="flex items-center justify-center px-3 py-1 text-sm font-medium bg-gray-100 border-2 border-gray-700 rounded-full dark:bg-customNavDark dark:text-white"
                >
                    {{ language.name }}
                </div>
            </div>

            <!-- Live / Demo button -->
            <a
                v-if="selectedDataTwo.demo"
                :href="selectedDataTwo.demo"
                target="_blank"
                class="inline-block w-full px-4 py-2 mb-4 font-semibold text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
                View Demo
            </a>

            <a
                v-else-if="selectedDataTwo.link"
                :href="selectedDataTwo.link"
                target="_blank"
                class="inline-block w-full px-4 py-2 mb-4 font-semibold text-center text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
            >
                Visit Site
            </a>
        </div>
    </div>
</template>
