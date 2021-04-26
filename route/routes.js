import home from "/components/home.vue";
import areasquare from "/components/areasquare.vue";
import areatriangle from "/components/areatriangle.vue";
import areacircle from "/components/areacircle.vue";

export const routes = [
  { path: "/", component: home, name: "home" },
  { path: "/square", component: areasquare },
  { path: "/triangle", component: areatriangle },
  { path: "/circle", component: areacircle },
  { path: "*", redirect: { name: "home" } },
];
