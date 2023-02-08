import Vue from 'vue'
import App from './App.vue'
import { createApp } from "vue";
import { createStore } from "vuex";
import { store } from "./store"

const app = createApp ( App );

app.use ( createStore (store));

app.mount("#app");
