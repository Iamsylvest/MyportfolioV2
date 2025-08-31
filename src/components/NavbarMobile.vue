<template>
      <div class="flex items-center justify-start p-4 px-6 font-roboto dark">
            <button @click="toggleModal">
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                  >
                        <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M5 7h14M5 12h14M5 17h14"
                        />
                  </svg>
            </button>
      </div>

      <!-- Mobile Menu Modal -->
      <div v-if="showModal" class="fixed inset-0 z-50 font-roboto">
            <!-- Backdrop -->
            <div
                  class="absolute inset-0 bg-black opacity-50"
                  @click="toggleModal"
            ></div>

            <!-- Menu Panel -->
            <div
                  class="relative w-64 h-full p-4 px-6 bg-customWhite dark:bg-customNavDark animate-fadeIn"
            >
                  <ul class="space-y-2">
                        <div class="border-b-2">
                              <button @click="toggleModal">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                    >
                                          <path
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                                d="M5 7h14M5 12h14M5 17h14"
                                          />
                                    </svg>
                              </button>
                        </div>

                        <li
                              class="p-2 mb-2 rounded-md hover:bg-customGray hover:dark:bg-gray-400"
                        >
                              <router-link
                                    to="/"
                                    v-slot="{ isActive }"
                                    @click="toggleClose"
                              >
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
                        </li>
                        <li
                              class="p-2 mb-2 rounded-md hover:bg-customGray hover:dark:bg-gray-400"
                        >
                              <router-link
                                    to="/about"
                                    v-slot="{ isActive }"
                                    @click="toggleClose"
                              >
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
                        </li>
                        <li
                              class="p-2 mb-2 rounded-md hover:bg-customGray hover:dark:bg-gray-400"
                        >
                              <router-link
                                    to="/projects"
                                    v-slot="{ isActive }"
                                    @click="toggleClose"
                              >
                                    <span
                                          :class="[
                                                isActive
                                                      ? 'border-b-2 dark:border-white  border-black'
                                                      : '',
                                                'hover:border-b-2 dark:hover:border-white hover:border-black',
                                          ]"
                                          >Project</span
                                    ></router-link
                              >
                        </li>
                        <li
                              class="p-2 mb-2 rounded-md hover:bg-customGray hover:dark:bg-gray-400"
                        >
                              <router-link
                                    to="/contact"
                                    v-slot="{ isActive }"
                                    @click="toggleClose"
                                    ><span
                                          :class="[
                                                isActive
                                                      ? 'border-b-2 border-white'
                                                      : '',
                                                'hover:border-b-2 hover:border-white',
                                          ]"
                                          >Contact</span
                                    ></router-link
                              >
                        </li>
                        <li>
                              <!-- Right: Dark mode toggle -->
                              <div class="flex items-center gap-2 ml-2">
                                    DarkMode:
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
                        </li>
                  </ul>
            </div>
      </div>
</template>
<script setup>
      import { ref, watch } from 'vue';
      import { useDark, useToggle } from '@vueuse/core';
      const showModal = ref(false);

      function toggleModal() {
            showModal.value = !showModal.value;
      }
      function toggleClose() {
            showModal.value = false;
      }

      const isDark = useDark();
      const toggleDark = useToggle(isDark);

      // Watch for changes
      watch(showModal, (val, oldVal) => {
            console.log('showModal changed:', val, oldVal);

            if (val) {
                  document.body.classList.add('overflow-hidden'); // prevent scrolling
            } else {
                  document.body.classList.remove('overflow-hidden'); // allow scrolling
            }
      });
</script>
