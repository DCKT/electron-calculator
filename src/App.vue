<template>
  <div id="app">
    <screen></screen>
    <keyboard></keyboard>
    <actions></actions>
  </div>
</template>

<script>
import Screen from './components/Screen.vue';
import Keyboard from './components/Keyboard.vue';
import Actions from './components/Actions.vue';

export default {
  components: {
    Screen,
    Keyboard,
    Actions
  },
}
</script>

<style>

html, body {
  font-family: Helvetica, sans-serif;
  height: 100%;
  -webkit-font-smoothing: antialiased;
}

#app {
  height: 100%;
}

</style>