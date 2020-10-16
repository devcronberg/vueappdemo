<template>
    <section id="firkant">
      <h2>Firkant</h2>
      <div class="input">
        <div><span>Længde</span><input v-model="længde" type="number" /></div>
        <div><span>Bredde</span><input v-model="bredde" type="number" /></div>
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
      bredde: 0,
      længde: 0,
      areal: 0
    };
  },
  methods:{
    beregn: function(){    
          this.areal = this.længde * this.bredde;
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