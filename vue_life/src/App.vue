<template>
  <div id="app">
    <LifeGame></LifeGame>
  </div>
</template>

<script>
import LifeGame from './components/LifeGame.vue'

export default {
  name: 'App',
  components: {
    LifeGame
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
