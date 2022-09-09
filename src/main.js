import { createApp } from 'vue';
import App from './App.vue';

import components from '@/components/UI';
// import scriptsJS from '@/js/extraFunctions.js';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

// app.scriptsJS

app.mount('#app');
