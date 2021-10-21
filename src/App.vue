<template>
  <div id="app">
    <menuTop />
    <router-view />
    <menuBottom />
  </div>
</template>

<script>
import menuTop from '../src/components/menu/menuTop.vue' 
import menuBottom from '../src/components/menu/menuBottom.vue' 
export default {
  components: {
    menuTop,
    menuBottom
  }
};
</script>

<style>
#app {
  user-select: none;
}
</style>
