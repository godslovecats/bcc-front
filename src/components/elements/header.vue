<template>
<header class="header">
  <div class="header__wrap">
    <div class="header-el">
    <i class="material-icons md-35">menu</i>
    <div class="logo-img">
      <router-link v-bind:to="'/'">
        <img src="../../../src/assets/img/bcc-logo.png" />
      </router-link>
    </div>
    </div>

    <nav class="nav">
      <a href="" class="nav__link">О нас</a>
      <a href="" class="nav__link"><router-link v-bind:to="'decidePage'" tag="span">Решения</router-link></a>
      <a href="" class="nav__link"><router-link v-bind:to="'projectPage'" tag="span">Проекты</router-link></a>
      <a href="" class="nav__link">Производство</a>
      <a href="" class="nav__link">Контакты</a>
    </nav>

    <div class="header-el">
      <i class="material-icons md-25">search</i>
      <div class="lang-changer">
        <div class="lang-changer__item">ru</div>
        <span class="delimeter">|</span>
        <div class="lang-changer__item">en</div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'mainHeader'
}
</script>

<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
.header {
    background: white;
box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
    width: 100%;
    position: relative;
    &__wrap {
        .limit;
        padding: 25px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.nav {
    font-size: 1.2rem;
    font-weight: 400;
    &__link {
        text-decoration: none;
        color: gray;
        margin: 0 15px;
    }
}
.lang-changer {
    display: flex;
    align-items: center;
    &__item {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
    }
    .delimeter {
        margin: 0 10px;
        color: @gray;
    }
}
.header-el {
    display: flex;
    align-items: center;
    .material-icons {
        margin: 0 25px;
    }
}
</style>
