import { createApp } from 'vue';
import App from './App.vue';

import components from '@/components/UI';
import scriptsJS from '@/js';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});


scriptsJS.forEach(script => {
    app.component(script.name, script);
});

app.mount('#app');
