import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';
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

app.mount('#app');
