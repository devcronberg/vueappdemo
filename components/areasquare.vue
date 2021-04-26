<template>
    <section>
      <h2>Square</h2>
      <div class="input">
        <div><span>Height</span><input v-model="height" type="number" /></div>
        <div><span>Width</span><input v-model="width" type="number" /></div>
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
      height: 0,
      width: 0,
      area: 0
    };
  },
  methods:{
    calc: function(){    
          this.area = this.height * this.width;
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