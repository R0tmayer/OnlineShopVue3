import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import BaseAddModal from './components/BaseAddModal.vue';
import BaseAdminList from './components/BaseAdminList.vue';
import BaseButton from './components/BaseButton.vue';
import BaseDeleteModal from './components/BaseDeleteModal.vue';
import BaseEditModal from './components/BaseEditModal.vue';
import BaseFormInput from './components/BaseFormInput.vue';
import BaseInput from './components/BaseInput.vue';
import BaseModal from './components/BaseModal.vue';
import BaseTable from './components/BaseTable.vue';
import Navbar from './components/Navbar.vue';

import './tailwindstyles.css';

import { routes } from './routes';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BaseFormInput', BaseFormInput);
app.component('BaseInput', BaseInput);
app.component('BaseTable', BaseTable);
app.component('Navbar', Navbar);
app.component('BaseModal', BaseModal);
app.component('BaseAddModal', BaseAddModal);
app.component('BaseEditModal', BaseEditModal);
app.component('BaseDeleteModal', BaseDeleteModal);
app.component('BaseAdminList', BaseAdminList);

app.use(router);
app.use(pinia);

app.mount('#app');
