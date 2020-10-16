import forside from "./components/forside.vue";
import arealFirkant from "./components/arealFirkant.vue";
import arealTrekant from "./components/arealTrekant.vue";

export const routes = [
  { path: "/", component: forside, name: "forside" },
  { path: "/firkant", component: arealFirkant },
  { path: "/trekant", component: arealTrekant },
  { path: "*", redirect: { name: "forside" } },
];
