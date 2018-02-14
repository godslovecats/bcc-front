<template>
<header class="header">
  <div class="header__wrap">
    <div class="header-el">
    <i class="material-icons md-36">menu</i>
    <div class="logo-img">
      <img src="../../../src/assets/img/bcc-logo.png" />
    </div>
    </div>

    <nav class="nav">
      <a href="" class="nav__link">О нас</a>
      <a href="" class="nav__link">Решения</a>
      <a href="" class="nav__link">Проекты</a>
      <a href="" class="nav__link">Производство</a>
      <a href="" class="nav__link">Контакты</a>
    </nav>

    <div class="header-el">
      <i class="material-icons md-26">search</i>
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
  name: "mainHeader"
};
</script>

<style lang="less" scoped></style>
