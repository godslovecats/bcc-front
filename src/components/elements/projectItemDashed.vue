<template>
    <div class="project project--dashboard">
        <div class="wrap">
      <div class="info">
        <h3 class="title">Строительство тренировочного комплекса хоккейного клуба СКА</h3>
<ul class="dashboard">
<li class="dashboard__item"><span class="num">38600 м </span> площадь объекта</li>
<li class="dashboard__item"><span class="num">160 </span> камер видеонаблюдения</li>
<li class="dashboard__item"><span class="num">более 12 000 м </span> общий объем воздуховодов</li>
<li class="dashboard__item"><span class="num">более 350 000 </span> метров кабеля проложено</li>
</ul>
      <button class="btn btn--red">Подробнее о проекте</button>
      </div>
                     <div class="img-arrow">
		<i class="img-arrow__item img-arrow__item--left"><v-icon class="w32" name="chevron-left"></v-icon></i>
		<i class="img-arrow__item img-arrow__item--right"><v-icon class="w32" name="chevron-right"></v-icon></i>
</div>
        </div>
        
      <div class="gallery">
         <tiny-slider startIndex="1" items="1" speed='500' controlsContainer = ".img-arrow">
             <div class="gallery__item">
                <img src="../../assets/img/ska.jpg" /> 
             </div>
             <div class="gallery__item">
                <img src="../../assets/img/ska.jpg" /> 
             </div>
         </tiny-slider>
      </div>
    </div>
</template>

<script>
import VueTinySlider from "vue-tiny-slider";

export default {
  name: "projectItemDashed",
    components: {
    "tiny-slider": VueTinySlider
  }
};
</script>


<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
.project {
  .wrap {
    .container-l;
        position: relative;
    padding: 100px 35px;
  }
  &--dashboard {
    position: relative;
    display: flex;
    align-items: center;
    .info {
      width: 770px;
      box-sizing: border-box;
      padding: 100px 60px 135px 60px;
      background: white;
      position: relative;
      z-index: 1;
      .title {
        font-family: "Fira Sans", sans-serif;
        font-size: 2rem;
        line-height: 1.2;
        margin-bottom: 2rem;
        font-weight: 700;
        color: black;
      }
      .btn {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    .dashboard {
      &__item {
        margin-bottom: 1rem;
        color: @gray;
        position: relative;
        padding-left: 50px;
        &:before {
          content: "";
          position: absolute;
          width: 30px;
          height: 3px;
          top: 0.7rem;
          left: 0;
          background: @red;
        }
        &:last-child {
          margin-bottom: 0;
        }
        .num {
          font-family: "Fira Sans", sans-serif;
          color: black;
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
    }
    .gallery {
      position: absolute;
      right: 0;
      top: 0;
      width: calc(~"100% - 700px");
      height: 100%;
      overflow: hidden;
      &__item {
      img {
    width: 100%;
    min-height: 780px;
    object-fit: cover;
      }
      }
    }
  }
  .img-arrow {
position: absolute;
    right: 35px;
    top: 100px;
    z-index: 2;
  &__item {
    background: @red;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    color: white;
    display: inline-block;
    padding: 1rem;
            .v-icon {
    display: block;
        }
  }
}
}
</style>
