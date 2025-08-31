<script setup>
      import { ref, onMounted } from 'vue';
      import Navbar from './components/Navbar.vue';
      import NavbarMobile from './components/NavbarMobile.vue';

      import loadingData from '@/data/Loading.json';
      const loading = ref(true);
      const loadingGif = loadingData.data.loadingGif;
      onMounted(() => {
            // simulate loading, or you can replace with actual async data fetch
            setTimeout(() => {
                  loading.value = false;
            }, 2000);
      });
</script>

<template>
      <div>
            <div
                  v-if="loading"
                  class="flex items-center justify-center h-screen bg-customWhite"
            >
                  <img :src="loadingGif" alt="Logo" class="w-48 h-48" />
            </div>
            <div v-else>
                  <!-- Desktop Navbar (hidden on mobile) -->
                  <div class="hidden sm:block">
                        <Navbar />
                  </div>
                  <div class="block sm:hidden">
                        <NavbarMobile />
                  </div>
                  <div>
                        <!-- padding top instead of relying on margin -->
                        <router-view />
                  </div>
            </div>
      </div>
</template>
