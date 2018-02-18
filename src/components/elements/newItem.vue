<template>
      <div class="grid-row__item new">
        <div class="new__img">
          <!--<img src="static/mock-news.png" />-->
        </div>
        <div class="new__info">
          <p class="date">{{date}}</p>
          <h4 class="title">{{title}}</h4>
        </div>
      </div>
</template>

<script>
export default {
  name: 'newItem',
props: ['title', 'date']
};
</script>


<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";

.new {
  background-color: white;
  box-sizing: border-box;
  &__img {
    height: 250px;
    background: @gray;
    img {
      width: 100%;
      height: 250px;
    }
  }
  &__info {
    padding: 35px;
    .date {
      color: @gray800;
      font-size: 1rem;
      margin-bottom: 1em;
    }
    .title {
      font-size: 1rem;
      line-height: 1.2;
      font-weight: 800;
      color: black;
    }
  }
}
</style>
