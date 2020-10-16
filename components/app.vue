<template>
  <div>
    <h1>Beregninger</h1>
    <div>
      [<router-link to="/" active-class="active" exact><a>Forside</a></router-link>]
      [<router-link to="/firkant" active-class="active"><a>Firkant</a></router-link>] 
      [<router-link to="/trekant" active-class="active"><a>Trekant</a></router-link>]</div>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import Vue from "vue";
import arealfirkant from "./arealFirkant";
import arealtrekant from "./arealTrekant";


export default Vue.extend({
  components: {
    arealfirkant: arealfirkant,
    arealtrekant: arealtrekant
  }
});
</script>

<style scoped>
  .active{
    background-color: lightblue;
  }
</style>