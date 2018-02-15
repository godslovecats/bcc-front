<template>
  <div id="app">
    <mainHeader />
    <router-view/>
  </div>
</template>

<script>
import mainHeader from "./components/elements/header.vue";
export default {
  name: 'App',
    components: {
    mainHeader
  }
}
</script>

<style lang="less" src="./assets/styles/global.less"></style>
<style src="../static/normalize.css"></style>
