<template>
<div>

<section class="section intro">
  <div class="container-s">
  <div class="intro__txt">
    <h1 class="section__title title txt--black">Крупнейшая компания в России</h1>
    <p class="txt">в области комплексных проектов построения инфраструктуры зданий и сооружений Топ-3 (Cnews, 2014)</p>
  </div>
  <div class="numbered numbered--centred numbered--b">
    <div class="numbered__item">
      <p class="num">24</p>
      <p class="txt">лет опыта</p>
    </div>
        <div class="numbered__item">
      <p class="num">300</p>
      <p class="txt">проектов</p>
    </div>
        <div class="numbered__item">
      <p class="num">700</p>
      <p class="txt">специалистов</p>
    </div>
  </div>
  </div>
</section>
<section class="section decides">
  <div class="container">
    <h2 class="section__title title txt--white">Решения</h2>
    <div class="grid-row">
      <div class="grid-row__item decide">
        <h3 class="decide__title">АСУ инженерными системами</h3>
        <button class="btn btn--base">Подробнее</button>
      </div>
            <div class="grid-row__item decide">
        <h3 class="decide__title">АСУ технологическим процессом</h3>
        <button class="btn btn--base">Подробнее</button>
      </div>
            <div class="grid-row__item decide">
        <h3 class="decide__title">АСТУЭР</h3>
        <button class="btn btn--base">Подробнее</button>
      </div>
            <div class="grid-row__item decide">
        <h3 class="decide__title">Диспетчеризация</h3>
        <button class="btn btn--base">Подробнее</button>
      </div>
            <div class="grid-row__item decide">
        <h3 class="decide__title">MES</h3>
        <button class="btn btn--base">Подробнее</button>
      </div>
            <div class="grid-row__item decide">
        <h3 class="decide__title">АСУД</h3>
        <button class="btn btn--base">Подробнее</button>
      </div>
    </div>
    <div class="section__btn section__btn--centred">
      <button class="btn btn--white btn--one-third"><router-link v-bind:to="'decidePage'" tag="span">На страницу решений</router-link></button>
    </div>
  </div>
</section>
<section class="section projects">
  <div class="container">
    <h2 class="section__title title txt--black">Реализованные проекты</h2>
    <tiny-slider :mouse-drag="true"  items="1" speed='500' controlsContainer = ".slider-arrows">
      <div>
      <projectItemDashed />
      </div>
      <div>
      <projectItemDashed />
      </div>
            <div>
      <projectItemDashed />
      </div>
            <div>
      <projectItemDashed />
      </div>
            <div>
      <projectItemDashed />
      </div>
      </tiny-slider>
            <div class="slider-arrows">
		<i class="slider-arrows__item slider-arrows__item--left material-icons">keyboard_arrow_left</i>
		<i class="slider-arrows__item slider-arrows__item--right material-icons">keyboard_arrow_right</i>
</div>
        <div class="section__btn section__btn--centred">
      <button class="btn btn--base btn--one-third"><router-link v-bind:to="'decidePage'" tag="span">На страницу решений</router-link></button>
    </div>
  </div>
</section>
<section class="section news">
  <div class="container">
    <h2 class="section__title title txt--black">Новости</h2>
        <div class="grid-row">
      <div class="grid-row__item new">
        <div class="new__img">
          <img src="../../src/assets/img/new-mock.png" />
        </div>
        <div class="new__info">
          <p class="date">3 ноября 2017</p>
          <h4 class="title">Компания ВСС приняла участие в строительстве тренировочной базы</h4>
        </div>
      </div>
      <div class="grid-row__item new">
        <div class="new__img">
          <img src="../../src/assets/img/new-mock.png" />
        </div>
        <div class="new__info">
          <p class="date">3 ноября 2017</p>
          <h4 class="title">Компания ВСС приняла участие в строительстве тренировочной базы</h4>
        </div>
      </div>
            <div class="grid-row__item new">
        <div class="new__img">
          <img src="../../src/assets/img/new-mock.png" />
        </div>
        <div class="new__info">
          <p class="date">3 ноября 2017</p>
          <h4 class="title">Компания ВСС приняла участие в строительстве тренировочной базы</h4>
        </div>
      </div>
    </div>
   <div class="section__btn section__btn--right">
      <button class="btn btn--base btn--one-third"><router-link v-bind:to="'decidePage'" tag="span">На страницу решений</router-link></button>
    </div>
  </div>
</section>
</div>
</template>

<script>
import projectItemDashed from "./elements/projectItemDashed.vue";
import VueTinySlider from "vue-tiny-slider";

export default {
  name: "projectAbout",
  components: {
    projectItemDashed,
    "tiny-slider": VueTinySlider
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../assets/styles/mixins.less";

.slider-arrows {
  width: 1170px;
  position: absolute;
  padding: 0;
  z-index: 10;
  left: 0;
  top: calc(50% - 25px);
  display: flex !important;
  justify-content: space-between;
  &__item {
    display: inline-block;
    font-size: 50px;
    cursor: pointer;
    outline: none;
    &--left {
    left: -70px;
    position: relative;
    }
    &--right {
      right: -70px;
    position: relative;
    }
  }
}
.intro {
  height: 600px;
  flex-direction: column;
  display: flex;
  align-items: center;
  .bg--gr1;
  .container {
    max-width: 900px;
  }
  &__txt {
    text-align: center;
    color: @gray600;
    .title {
      margin-bottom: 1rem;
    }
    .txt {
      font-size: 1.2rem;
      line-height: 2;
      margin: 0 70px;
    }
  }
}
.decides {
  .section__pad;
  .bg--gr;
}
.projects {
  .section__pad;
}
.news {
  .section__pad;
  .bg--gr1;
}
</style>
