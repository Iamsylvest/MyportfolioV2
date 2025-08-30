<script setup>
      import Navbar from './components/Navbar.vue';
      import NavbarMobile from './components/NavbarMobile.vue';
</script>

<template>
      <div>
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
</template>
