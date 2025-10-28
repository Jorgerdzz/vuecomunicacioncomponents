<template>
  <!-- <PadreDeportes /> -->
  <NumerosPadre />
</template>

<script>
// import PadreDeportes from './components/PadreDeportes.vue';
import NumerosPadre from './components/NumerosPadre.vue';

export default {
  name: 'App',
  components: {
    // PadreDeportes
    NumerosPadre
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
