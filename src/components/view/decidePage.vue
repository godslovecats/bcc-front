<template>
  <div>
    <router-view/>
    <mainHeader />
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
<section class="section">
    <div class="decide--long">
        <div class="container">
        <div class="info">
            <h2 class="info__title">АСУ инженерными системами</h2>
            <p class="info__txt">Разработка проекта и полное оснащение зданиц и сооружений системами автоматизации и диспетчеризации инженерных систем</p>
        </div>
       <button class="btn btn--base btn--one-third">Перейти</button>
        </div>
    </div>
        <div class="decide--long">
        <div class="container">
        <div class="info">
            <h2 class="info__title">АСУ инженерными системами</h2>
            <p class="info__txt">Разработка проекта и полное оснащение зданиц и сооружений системами автоматизации и диспетчеризации инженерных систем</p>
        </div>
       <button class="btn btn--base btn--one-third">Перейти</button>
        </div>
    </div>
        <div class="decide--long">
        <div class="container">
        <div class="info">
            <h2 class="info__title">АСУ инженерными системами</h2>
            <p class="info__txt">Разработка проекта и полное оснащение зданиц и сооружений системами автоматизации и диспетчеризации инженерных систем</p>
        </div>
       <button class="btn btn--base btn--one-third">Перейти</button>
        </div>
    </div>
        <div class="decide--long">
        <div class="container">
        <div class="info">
            <h2 class="info__title">АСУ инженерными системами</h2>
            <p class="info__txt">Разработка проекта и полное оснащение зданиц и сооружений системами автоматизации и диспетчеризации инженерных систем</p>
        </div>
       <button class="btn btn--base btn--one-third">Перейти</button>
        </div>
    </div>
        <div class="decide--long">
        <div class="container">
        <div class="info">
            <h2 class="info__title">АСУ инженерными системами</h2>
            <p class="info__txt">Разработка проекта и полное оснащение зданиц и сооружений системами автоматизации и диспетчеризации инженерных систем</p>
        </div>
       <button class="btn btn--base btn--one-third">Перейти</button>
        </div>
    </div>
</section>
<section class="section decide-example">
      <div class="container">
    <h2 class="section__title title txt--black">Примеры выполненных проектов</h2>
        <div class="grid-row">
      <div class="grid-row__item project">
          <h3 class="title"></h3>
          <div class="social">
              <p class="social__visit">Просмотров 124</p>
              <div class="social__link">
                  <i class="material-icons md-15">present_to_all</i>
                  <i class="material-icons md-15">present_to_all</i>
                  <i class="material-icons md-15">present_to_all</i>
              </div>
          </div>
      </div>
        </div>
      </div>
</section>
  </div>
</template>

<script>
import mainHeader from "../elements/header.vue";
export default {
  name: 'decidePage',
    components: {
    mainHeader
  }
}
</script>


<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
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
    .title {
      margin-bottom: 0;
    }
    .txt {
      font-size: 1.2rem;
      line-height: 1.5em;
      margin: 0 70px;
    }
  }
}
.decide-example {
      .section__pad;
    .bg--gr1;
    .title {
         text-align: center;
    }
}
.project {
    .bg--gr;
     padding: 35px;
    padding-top: 70px;
    height: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
color: white;
    }
    .social {
        &__visit {

        }
        &__link {

        }
    }
}
</style>
