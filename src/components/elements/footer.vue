<template>
<footer class="footer">
  <div class="footer__wrap">
<div class="map">
<div class="map__coll">
  <h5 class="title">Карта сайта</h5>
  <ul class="list">
    <li class="list__item">О нас</li>
    <li class="list__item">Решения</li>
    <li class="list__item">Проекты</li>
    <li class="list__item">Производство</li>
    <li class="list__item">Новости</li>
    <li class="list__item">Контакты</li>
  </ul>
</div>
<div class="map__coll">
  <h5 class="title">Контакты</h5>
  <ul class="list">
    <li class="list__item">Санкт-Петербург</li>
    <li class="list__item">Адрес: Кантемировская ул. дом 20. 194100</li>
    <li class="list__item">Адрес: Кантемировская ул. дом 20. 194100</li>
    <li class="list__item">Тел: +7(812)327-44-44</li>
    <li class="list__item">Факс: +7(812)327-44-44</li>
    <li class="list__item">E-mail: office@bcc.ru</li>
  </ul>
</div>
<div class="map__coll map__coll--soc">
  <h5 class="title">Мы в соцсетях</h5>
  <ul class="list">
    <li class="list__item">
          <div class="logo-img">
      <router-link v-bind:to="'/'">
        <img src="../../../src/assets/img/bcc-logo.png" />
      </router-link>
    </div>
    </li>
    <li class="list__item">
      <div class="social__link">
        <i class="ico material-icons md-25">present_to_all</i>
        <i class="ico material-icons md-25">present_to_all</i>
        <i class="ico material-icons md-25">present_to_all</i>
        </div>
    </li>
  </ul>
</div>
</div>
  </div>
</footer>
</template>


<script>
export default {
  name: "mainFooter"
};
</script>

<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";

.footer {
  .section__pad;
  .bg--gr8;
  color: white;
  &__wrap {
    .limit;
  }
  .map {
    .row;
    justify-content: space-between;
    &__coll {
      width: calc(~"100%/3");
      &--soc {
        display: flex;
        flex-direction: column;
        text-align: right;
        .list {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
      }
    }
    .title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .list {
      &__item {
        font-size: 0.8rem;
        margin-bottom: 0.8rem;
        opacity: 0.7;
        cursor: pointer;
        font-weight: 300;
        transition: 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
