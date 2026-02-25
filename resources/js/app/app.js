import './bootstrap';
import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';
import { useAppStore } from '@entities/app/stores/appStore';

const pinia = createPinia();
const app = createApp({});

app.use(pinia);

useAppStore().initialize();

const contexts = [
    require.context('../pages', true, /\/index\.js$/),
    require.context('../widgets', true, /\/index\.js$/),
    require.context('../features', true, /\/index\.js$/),
    require.context('../entities', true, /\/index\.js$/),
    require.context('../shared', true, /\/index\.js$/)
];

contexts.forEach(context => {
    context.keys().forEach(key => {

        const index = context(key);

        for (const module of index.modules) {
            try {
                app.component(module.name, defineAsyncComponent(() => import(`../${module.path}`)));
            } catch (error) {
                console.error(`Error loading module ${key}:`, error);
            }
        }
    });
});

app.mount('#app');

export { pinia };