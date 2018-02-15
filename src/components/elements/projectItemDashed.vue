<template>
    <div class="project project--dashboard">
      <div class="info">
        <h3 class="info__title">Строительство тренировочного комплекса хоккейного клуба СКА</h3>
        <p class="info__txt">Важные показатели по проекту</p>
  <div class="numbered numbered--m">
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
      <div class="img">
         <img src="../../assets/img/img-mock.png" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'projectItemDashed'
}
</script>


<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
.project {
    &--dashboard {
        display: flex;
        height: 430px;
        .info {
            padding: 70px;
            padding-left: 100px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .bg--gr1;
            &__title {
                font-size: 1.8rem;
                line-height: 1.5;
                margin-bottom: 2rem;
                font-weight: 800;
                color: black;
            }
            &__txt {
                color: @gray800;
                font-size: 1.2rem;
                font-weight: 600;
            }
        }
        .img {
            img {
                width: 430px;
                height: 430px;
            }
        }
    }
}
</style>
