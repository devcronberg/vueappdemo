<template>
    <section id="trekant">
      <h2>Trekant</h2>
      <div class="input">
        <div><span>Højde</span><input v-model="højde" type="number" /></div>
        <div><span>Grundlinje</span><input v-model="grundlinje" type="number" /></div>
        <div><span>Areal</span><input v-model="areal" type="number" readonly /></div>
        <div><button @click="beregn" id="beregn">Beregn</button></div>
      </div>
    </section>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      højde: 0,
      grundlinje: 0,
      areal: 0
    };
  },
  methods:{
    beregn: function(){    
          this.areal = this.højde * this.grundlinje * 0.5;
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