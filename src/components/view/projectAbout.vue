<template>
<div>
  <router-view/>
  <section class="section">
<projectItemDashed />
  </section>
  <section class="section project-page">
      <div class="container row">
        <aside class="nav">
<ul class="nav__list">
  <li class="nav__item">Отрасль</li>
  <li class="nav__item">Заказчик</li>
  <li class="nav__item">Задача</li>
  <li class="nav__item">Решение BCC</li>
  <li class="nav__item">Основные системы</li>
  <li class="nav__item">Основные характеристики</li>
  <li class="nav__item">Технологии и оборудование</li>
  <li class="nav__item">Собственное производство</li>
  <li class="nav__item">Пресс-релиз</li>
  <li class="nav__item">Отзыв заказчика</li>
  <li class="nav__item">Фотогалерея</li>
</ul>
        </aside>
        <main class="main">
          <article class="article">
            <h3 class="article__title">Отрасль</h3>
            <div class="article__txt">
              <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
            </div>
          </article>
                    <article class="article">
            <h3 class="article__title">Заказчик</h3>
            <div class="article__txt">
              <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
            </div>
          </article>
                    <article class="article">
            <h3 class="article__title">Задача</h3>
            <div class="article__txt">
              <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
            </div>
          </article>
        </main>
      </div>
</section>
</div>
</template>

<script>
import projectItemDashed from "../elements/projectItemDashed.vue";

export default {
  name: "projectAbout",
  components: {
    projectItemDashed
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";

.project-page {
    .section__pad;
}

.nav {
  width: 350px;
  margin-right: 100px;
  &__list {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      background: @gray400;
      top: 0;
      right: 0;
      height: 100%;
      width: 10px;
    }
  }
  &__item {
    margin-bottom: 50px;
    padding-right: 50px;
    position: relative;
    text-align: right;
    white-space: nowrap;
    font-size: 1rem;
    &:before {
      content: "";
      position: absolute;
      background: white;
      top: -7px;
      right: -12px;
      height: 14px;
      width: 14px;
      border: solid 10px @gray400;
      border-radius: 50%;
    }
  }
}
.main {
  width: auto;
}
.article {
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
  &__title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: black;
  }
  &__txt {
    color: @gray;
    font-size: 1rem;
    line-height: 1.5;
  }
}
</style>
