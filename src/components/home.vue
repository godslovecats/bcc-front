<template>
<div>
  <mainHeader />

<section class="section intro content-centred">
  <mainWrap></mainWrap>
</section>

</div>
</template>

<script>
import mainWrap from "./content/content.vue";
import mainHeader from "./elements/header.vue";
export default {
  components: {
    mainHeader,
    mainWrap
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../assets/styles/mixins.less";
.intro {
  height: 600px;
  .bg--gr3;
}
</style>
