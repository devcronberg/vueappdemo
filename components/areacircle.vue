<template>
    <section>
      <h2>Circle</h2>
      <div class="input">
        <div><span>Radius</span><input v-model="radius" type="number" /></div>        
        <div><span>Area</span><input v-model="area" type="number" readonly /></div>
        <div><button @click="calc" id="beregn">Calculate</button></div>
      </div>
    </section>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      radius: 0,
      area: 0
    };
  },
  methods:{
    calc: function(){    
          this.area = Math.PI * (Math.pow(this.radius, 2));
    }
  }

});
</script>

<style scoped>
   .input span {
        display: inline-block;
        width: 100px;
        margin: 10px;
      }
      button {
        margin: 10px;
      }
      
</style>