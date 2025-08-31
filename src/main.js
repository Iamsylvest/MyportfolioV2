import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';
import Lottie from 'vue3-lottie';
import AOS from 'aos';
const app = createApp(App);

AOS.init({
      duration: 800, // animation duration
      easing: 'ease-in-out',
      once: false, // animate only once while scrolling\\

      custom: {
            duration: 800, // animation duration
            easing: 'ease-in-out',
            once: false, // animate only once while scrolling\\
      },
});

app.use(createPinia());
app.use(router);
app.component('Lottie', Lottie); // global registration
app.mount('#app');
