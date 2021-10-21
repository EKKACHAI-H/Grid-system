import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/profile", name: "profile", component: () => import("../components/content/profilePage.vue")},
  { path: "/gallery", name: "gallery", component: () => import("../components/content/galleryPage.vue")},
  { path: '*' , redirect: { name: 'profile' }}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
