<template>
  <div>
    <h1>Area calculations</h1>
    <div>
      [<router-link to="/" active-class="active" exact><a>Home</a></router-link
      >] [<router-link to="/square" active-class="active"><a>Square area</a></router-link
      >] [<router-link to="/triangle" active-class="active"><a>Triangle area</a></router-link
      >] [<router-link to="/circle" active-class="active"><a>Circle area</a></router-link>]
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import areasquare from "/components/areasquare.vue";
import areatriangle from "/components/areatriangle.vue";
import areacircle from "/components/areacircle.vue";

export default Vue.extend({
  components: {
    areasquare: areasquare,
    areatriangle: areatriangle,
    areacircle, areacircle
  },
});
</script>

<style scoped>
.active {
  background-color: lightblue;
}
</style>
