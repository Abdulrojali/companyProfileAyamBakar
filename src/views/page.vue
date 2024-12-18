<template>
  <div id="app">
    <headerComponents></headerComponents>
    <homeComponents></homeComponents>
    <aboutComponents></aboutComponents>
    <menuComponents></menuComponents>
    <embeddedMaps></embeddedMaps>
    <iconwhasapp phoneNumber="0811987654321" massage="hello i am delevery"></iconwhasapp>
    <footerView></footerView>
  </div>
</template>

<script>
import iconwhasapp from '@/components/iconwhasapp.vue'
import headerComponents from '../components/header.vue'
import footerView from '../components/footer.vue'
import homeComponents from '../components/home.vue'
import aboutComponents from '../components/about.vue'
import menuComponents from '../components/menu.vue'
import embeddedMaps from '@/components/embeddedMaps.vue'
export default {
  components: {
    headerComponents,
    footerView,
    homeComponents,
    aboutComponents,
    menuComponents,
    embeddedMaps,
    iconwhasapp,
  },
}
</script>

<style>
/* Global styles */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
}
</style>
