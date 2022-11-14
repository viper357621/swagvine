import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#appId");
