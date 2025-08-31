<script setup>
      import { Splide, SplideSlide } from '@splidejs/vue-splide';
      import '@splidejs/splide/dist/css/splide.min.css';
      import img1 from '@/assets/img/img1.jpg';
      import img2 from '@/assets/img/img2.jpg';
      import img3 from '@/assets/img/img3.jpg';
      import git from '@/assets/img/git.png';
      import laravel from '@/assets/img/laravel.png';
      import mysql from '@/assets/img/mysql.png';
      import php from '@/assets/img/php.png';
      import ionic from '@/assets/img/ionic.png';
      import tailwind from '@/assets/img/tailwind.png';
      import vscode from '@/assets/img/vscode.png';
      import vue from '@/assets/img/vue.png';
      import figma from '@/assets/img/figma.png';
</script>

<template>
      <div
            class="p-8 ml-0 text-5xl text-center sm:ml-12 font-roboto sm:text-left"
            data-aos="my-slide-right"
      >
            <h1
                  class="inline-block w-auto pb-1 text-3xl font-bold border-b-2 border-gray-700 sm:text-5xl"
            >
                  About me
            </h1>
      </div>
      <div class="grid grid-cols-1 gap-8 p-2 md:grid-cols-2">
            <!-- Left Column -->
            <div
                  data-aos="my-slide-right"
                  class="p-6 space-y-6 rounded-lg font-roboto"
            >
                  <!-- Image Slider -->
                  <div class="overflow-hidden">
                        <splide
                              :options="{
                                    type: 'loop',
                                    autoplay: true,
                                    arrows: false,
                              }"
                        >
                              <SplideSlide>
                                    <img
                                          :src="img1"
                                          alt="Img1"
                                          class="object-cover w-64 h-64 mx-auto rounded-full sm:w-96 sm:h-96"
                                    />
                              </SplideSlide>
                              <SplideSlide>
                                    <img
                                          :src="img2"
                                          alt="Img2"
                                          class="object-cover w-64 h-64 mx-auto rounded-full sm:w-96 sm:h-96"
                                    />
                              </SplideSlide>
                              <SplideSlide>
                                    <img
                                          :src="img3"
                                          alt="Img3"
                                          class="h-64 mx-auto rounded-full object-coverw-64 sm:w-96 sm:h-96"
                                    />
                              </SplideSlide>
                        </splide>
                  </div>

                  <!-- About Me -->
                  <div class="p-4 space-y-4">
                        <p class="text-justify indent-10">
                              Hi, I'm <strong>Sylvest Madelo</strong> from the
                              Philippines. I enjoy exploring new ideas, spending
                              time with friends, and discovering new experiences
                              in life. I like staying active, learning new
                              things, and keeping a positive outlook every day.
                        </p>

                        <!-- Hobbies -->
                        <h2
                              class="w-16 font-semibold border-b-2 border-gray-700"
                        >
                              Hobbies
                        </h2>

                        <!-- Grid of Hobbies -->
                        <div
                              class="grid w-full grid-cols-1 gap-4 p-2 text-sm sm:grid-cols-3"
                        >
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i
                                          class="text-orange-500 fa-solid fa-basketball"
                                    ></i>
                                    Basketball
                              </div>
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i
                                          class="text-red-600 fa-solid fa-dumbbell"
                                    ></i>
                                    Gym
                              </div>
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i
                                          class="text-blue-600 fa-solid fa-code"
                                    ></i>
                                    Coding
                              </div>
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i
                                          class="text-green-500 fa-solid fa-table-tennis-paddle-ball"
                                    ></i>
                                    Badminton
                              </div>
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i
                                          class="text-yellow-500 fa-solid fa-film"
                                    ></i>
                                    Movies
                              </div>
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i class="text-pink-500 fa-solid fa-tv"></i>
                                    Anime
                              </div>
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i
                                          class="text-indigo-500 fa-solid fa-book-open"
                                    ></i>
                                    Manga
                              </div>
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i
                                          class="fa-solid fa-book text-emerald-600"
                                    ></i>
                                    Reading
                              </div>
                              <div
                                    class="p-2 border-2 border-gray-700 rounded-lg shadow-lg dark:bg-customNavDark"
                              >
                                    <i
                                          class="text-purple-500 fa-solid fa-gamepad"
                                    ></i>
                                    Online Games
                              </div>
                        </div>
                  </div>
            </div>

            <!-- Right Column -->
            <div data-aos="my-slide-left" class="p-6 space-y-6">
                  <h1
                        class="inline-block w-auto pb-1 text-2xl font-bold border-b-2 border-gray-700 sm:text-3xl"
                  >
                        Tech Stack
                  </h1>

                  <div
                        class="p-6 space-y-2 border-2 border-gray-700 rounded-lg shadow-lg"
                  >
                        <h2 class="mb-2 text-xl font-semibold">Front-end</h2>
                        <p class="leading-relaxed text-justify">
                              Front-end development builds the user-facing part
                              of websites or apps using <strong>HTML</strong>,
                              <strong>CSS</strong>, and
                              <strong>JavaScript</strong>.
                        </p>
                        <div class="flex space-x-4">
                              <!-- HTML5 -->
                              <i
                                    class="text-4xl text-orange-500 fa-brands fa-html5"
                              ></i>

                              <!-- CSS3 -->
                              <i
                                    class="text-4xl text-blue-500 fa-brands fa-css3-alt"
                              ></i>

                              <!-- JavaScript -->
                              <i
                                    class="text-4xl text-yellow-500 fa-brands fa-js"
                              ></i>
                        </div>
                  </div>
                  <div
                        class="p-6 space-y-2 border-2 border-gray-700 rounded-lg shadow-lg"
                  >
                        <h2 class="mb-2 text-xl font-semibold">Back-end</h2>
                        <p class="leading-relaxed text-justify">
                              Back-end development powers the server-side logic
                              of websites or apps using PHP.
                        </p>
                        <div class="flex space-x-4">
                              <img :src="php" alt="php" class="w-12 h-12" />
                        </div>
                  </div>
                  <div
                        class="p-6 space-y-2 border-2 border-gray-700 rounded-lg shadow-lg"
                  >
                        <h2 class="mb-2 text-xl font-semibold">
                              Frameworks and Tools
                        </h2>
                        <p class="leading-relaxed text-justify">
                              Frameworks / Libraries:
                        </p>
                        <div
                              class="grid grid-cols-2 gap-6 p-4 md:grid-cols-3 lg:grid-cols-4"
                        >
                              <!-- Vue -->
                              <div
                                    class="flex flex-col items-center justify-center p-4 transition-all bg-gray-100 border-2 border-gray-700 rounded-lg shadow-md dark:bg-customNavDark hover:shadow-xl"
                              >
                                    <img
                                          :src="vue"
                                          alt="Vue"
                                          class="w-12 h-12 mb-2"
                                    />
                                    <span class="text-sm font-semibold"
                                          >Vue.js</span
                                    >
                              </div>

                              <!-- Laravel -->
                              <div
                                    class="flex flex-col items-center justify-center p-4 transition-all bg-gray-100 border-2 border-gray-700 rounded-lg shadow-md dark:bg-customNavDark hover:shadow-xl"
                              >
                                    <img
                                          :src="laravel"
                                          alt="Laravel"
                                          class="w-12 h-12 mb-2"
                                    />
                                    <span class="text-sm font-semibold"
                                          >Laravel</span
                                    >
                              </div>

                              <!-- Tailwind -->
                              <div
                                    class="flex flex-col items-center justify-center p-4 transition-all bg-gray-100 border-2 border-gray-700 rounded-lg shadow-md dark:bg-customNavDark hover:shadow-xl"
                              >
                                    <img
                                          :src="tailwind"
                                          alt="Tailwind"
                                          class="w-12 h-12 mb-2"
                                    />
                                    <span class="text-sm font-semibold"
                                          >Tailwind</span
                                    >
                              </div>

                              <!-- Ionic -->
                              <div
                                    class="flex flex-col items-center justify-center p-4 transition-all bg-gray-100 border-2 border-gray-700 rounded-lg shadow-md dark:bg-customNavDark hover:shadow-xl"
                              >
                                    <img
                                          :src="ionic"
                                          alt="Ionic"
                                          class="w-12 h-12 mb-2"
                                    />
                                    <span class="text-sm font-semibold"
                                          >Ionic</span
                                    >
                              </div>

                              <!-- VS Code -->
                              <div
                                    class="flex flex-col items-center justify-center p-4 transition-all bg-gray-100 border-2 border-gray-700 rounded-lg shadow-md dark:bg-customNavDark hover:shadow-xl"
                              >
                                    <img
                                          :src="vscode"
                                          alt="VS Code"
                                          class="w-12 h-12 mb-2"
                                    />
                                    <span class="text-sm font-semibold"
                                          >VS Code</span
                                    >
                              </div>

                              <!-- Git -->
                              <div
                                    class="flex flex-col items-center justify-center p-4 transition-all bg-gray-100 border-2 border-gray-700 rounded-lg shadow-md dark:bg-customNavDark hover:shadow-xl"
                              >
                                    <img
                                          :src="git"
                                          alt="Git"
                                          class="w-12 h-12 mb-2"
                                    />
                                    <span class="text-sm font-semibold"
                                          >Git</span
                                    >
                              </div>

                              <!-- MySQL -->
                              <div
                                    class="flex flex-col items-center justify-center p-4 transition-all bg-gray-100 border-2 border-gray-700 rounded-lg shadow-md dark:bg-customNavDark hover:shadow-xl"
                              >
                                    <img
                                          :src="mysql"
                                          alt="MySQL"
                                          class="w-12 h-12 mb-2"
                                    />
                                    <span class="text-sm font-semibold"
                                          >MySQL</span
                                    >
                              </div>

                              <!-- Figma -->
                              <div
                                    class="flex flex-col items-center justify-center p-4 transition-all bg-gray-100 border-2 border-gray-700 rounded-lg shadow-md dark:bg-customNavDark hover:shadow-xl"
                              >
                                    <img
                                          :src="figma"
                                          alt="MySQL"
                                          class="w-12 h-12 mb-2"
                                    />
                                    <span class="text-sm font-semibold"
                                          >Figma</span
                                    >
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
