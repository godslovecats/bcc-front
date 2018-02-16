<template>
      <div class="grid-row__item new">
        <div class="new__img">
          <img src="../../../src/assets/img/new-mock.png" />
        </div>
        <div class="new__info">
          <p class="date">{date}</p>
          <h4 class="title">{title}</h4>
        </div>
      </div>
</template>

<script>
/*import Vue from 'vue'
Vue.use(require('vue-faker'));
Your API key is: e052a04946284bc9ad0fc8c02e2a732b
https://newsapi.org*/

export default {
name: "newItem"
 /*data() {
  return {
    date: faker().date.recent(),
    title: faker().lorem.sentence()
  };
 }*/
};
</script>


<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";

.new {
  background-color: white;
  padding: 35px;
  box-sizing: border-box;
  &__img {
    margin-bottom: 70px;
    img {
      width: 100%;
      height: 250px;
    }
  }
  &__info {
    .date {
      color: @gray800;
      font-size: 1rem;
      margin-bottom: 1em;
    }
    .title {
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: 800;
      color: black;
    }
  }
}
</style>
