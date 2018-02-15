<template>

<div>
  <router-view/>

  <section class="section intro">
    <div class="container">
        <h1 class="section__title title txt--white">Проекты</h1>
        <div class="filter">
          <div class="filter__type">
            <p class="filter__item">По техническим решениям</p>
            <p class="filter__item">По отрасли</p>
            <p class="filter__item">По базе</p>
          </div>
          <div class="filter__type">
            <p class="filter__item">АСУ технологическим процессом</p>
            <p class="filter__item">АСУ инженерными системами</p>
            <p class="filter__item">АСТУЭР</p>
            <p class="filter__item">Диспетчеризация</p>
            <p class="filter__item">MES</p>
          </div>
        </div>
    </div>
  </section>
  <section class="section decide-example">
      <div class="container">
        <div class="grid-row">
<projectItemSocial />
<projectItemSocial />
<projectItemSocial />
<projectItemSocial />
<projectItemSocial />
        </div>
      </div>
</section>
</div>

</template>

<script>
import projectItemSocial from "../elements/projectItemSocial.vue";

export default {
  name: "projectPage",
    components: {
    projectItemSocial
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
.intro {
  height: 500px;
  flex-direction: column;
  display: flex;
  align-items: center;
  .bg--gr;
    .title {
      text-align: center;
    }
}
.decide-example {
  .section__pad;
  .bg--gr1;
  .title {
    text-align: center;
  }
}

</style>
