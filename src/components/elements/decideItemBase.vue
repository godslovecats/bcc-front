<template>
      <div class="decide--base">
        <h3 class="title">АСУ инженерными системами</h3>
        <button class="btn btn--base">Подробнее</button>
      </div>
</template>


<script>
export default {
  name: "decideItemBase"
};
</script>

<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
.decide--base {
    background: white;
    padding: 35px;
    padding-top: 70px;
    height: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 800;
        color: black;
    }
}
</style>
