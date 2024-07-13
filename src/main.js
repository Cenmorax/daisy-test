import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Home from "./Pages/Home.vue";
import About from "./Pages/About.vue";
import ComponentShowcase from "./Pages/ComponentShowcase.vue";
import AuthPage from "./Pages/AuthPage.vue";
import SupabasePage from "./Pages/SupabasePage.vue";

const app = createApp(App);

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/components", name: "Components", component: ComponentShowcase },
    { path: "/authorization", name: "Authorization", component: AuthPage },
    { path: "/supabase", name: "Supabase", component: SupabasePage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.mount("#app");
