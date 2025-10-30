<template>
  <MenuComponent/>
  <MenuTablaMultiplicar/>
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
import MenuTablaMultiplicar from './components/MenuTablaMultiplicar.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
    MenuTablaMultiplicar
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
