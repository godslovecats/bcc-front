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
      <animate-number class="num" from="1" to="24" duration="1000" ></animate-number>
      <p class="txt">лет опыта</p>
    </div>
        <div class="numbered__item">
      <animate-number class="num" from="1" to="300" duration="1000" ></animate-number>
      <p class="txt">проектов</p>
    </div>
        <div class="numbered__item">
      <animate-number class="num" from="1" to="700" duration="1000" ></animate-number>
      <p class="txt">специалистов</p>
    </div>
  </div>
  </div>
</section>
<section class="section decides">
  <div class="container">
    <h2 class="section__title title txt--white">Решения</h2>
    <div class="grid-row">
      <decideItemBase />
<decideItemBase />
<decideItemBase />
<decideItemBase />
<decideItemBase />
<decideItemBase />
    </div>
    <div class="section__btn section__btn--centred">
      <button class="btn btn--red btn--one-third"><router-link v-bind:to="'decidePage'" tag="span">На страницу решений</router-link></button>
    </div>
  </div>
</section>
<section class="section projects">
    <h2 class="section__title title txt--black container-l">Реализованные проекты</h2>
    <tiny-slider startIndex="1" items="1" speed='500' controlsContainer = ".slider-arrows">
      <div>
      <projectItemDashed />
      </div>
      <div>
      <projectItemDashed />
      </div>
      </tiny-slider>
<div class="slider-arrows">
		<i class="slider-arrows__item slider-arrows__item--left"><v-icon class="w12" name="chevron-left"></v-icon> Предыдущий проект</i>
		<i class="slider-arrows__item slider-arrows__item--right">Следующий проект <v-icon class="w12" name="chevron-right"></v-icon></i>
</div>
</section>
<section class="section news">
  <div class="container">
    <h2 class="section__title title txt--black">Новости</h2>
        <div class="grid-row">
          <newItem 
      v-for="item in news"
      v-bind:key="item.id"
      v-bind:index="item.index"
      v-bind:date="item.date"
      v-bind:title="item.title"
       />
        </div>
   <div class="section__btn section__btn--right">
      <button class="btn btn--red"><router-link v-bind:to="'decidePage'" tag="span">Читать все новости</router-link></button>
    </div>
  </div>
</section>
</div>
</template>

<script>
import Vue from 'vue'
import projectItemDashed from "./elements/projectItemDashed.vue";
import newItem from "./elements/newItem.vue";
import decideItemBase from "./elements/decideItemBase.vue";
import VueTinySlider from "vue-tiny-slider";
import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)

const newsApi = "http://localhost:3000/news";
var self = this;

export default {
  name: "projectAbout",
  data() {
    return {
      news: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open("GET", newsApi);
      xhr.onload = function(data) {
        self.news = JSON.parse(xhr.responseText);
        console.log(self.news);
      };
      xhr.send();
    },
          formatter: function (num) {
        return num.toFixed(2)
      },

      startAnimate: function () {
        this.$refs.myNum.start()
      }
  },
  components: {
    projectItemDashed,
    newItem,
    decideItemBase,
    "tiny-slider": VueTinySlider
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../assets/styles/mixins.less";

.slider-arrows {
  .container-l;
  padding: 0 35px;
      position: relative;
    z-index: 10;
    width: 100%;
    margin-top: -50px;
  display: flex !important;
  justify-content: space-between;
  &__item {
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
            .v-icon {
          position: relative;
          transition: left right 0.5s ease-in-out;
        }
    &--left {
      position: relative;
    }
    &--right {
      position: relative;
      color: white;
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
      position: relative;
      z-index: 1;
      padding-top: 100px;
}
.news {
  .section__pad;
  .bg--gr1;
    position: relative;
    margin-top: -170px;
    padding-top: 235px;
}
</style>
