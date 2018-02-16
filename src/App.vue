<template>
  <div id="app">
    <mainHeader />
    <router-view/>
    <mainFooter />
  </div>
</template>

<script>
import mainHeader from "./components/elements/header.vue";
import mainFooter from "./components/elements/footer.vue";

export default {
  name: 'App',
    components: {
    mainHeader,
    mainFooter
  }
}
</script>

<style lang="less" src="./assets/styles/global.less"></style>
<style src="../static/normalize.css"></style>
