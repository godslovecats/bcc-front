<template>
  <div>
    <router-view/>
    <section class="section intro">
  <div class="container">
  <div class="intro__txt">
    <h1 class="section__title title">О решениях</h1>
    <p class="txt">Такие проекты (программы проектов), как правило, включают в себя решение самого широкого спектра задач — от бизнес-консалтинга и внедрения программных приложений до монтажа технологических и инженерных систем. Это, в свою очередь, делает необходимым, во-первых, использование современных методов управления проектами и, во-вторых, наличия предметной и отраслевой экспертизы в соответствующих областях.</p>
  </div>
        <div class="grid-row">
      <div class="grid-row__item decide--simple">
        <p>АСУ технологическим процессом</p>
      </div>
            <div class="grid-row__item decide--simple">
        <p>АСУ инженерными системами</p>
      </div>
            <div class="grid-row__item decide--simple">
        <p>АСТУЭР</p>
      </div>
            <div class="grid-row__item decide--simple">
        <p>АСУДД</p>
      </div>
            <div class="grid-row__item decide--simple">
        <p>АСУ инженерными системами</p>
      </div>
            <div class="grid-row__item decide--simple">
        <p>MES</p>
      </div>
        </div>
  </div>
</section>
<section class="section">
<dicideItemLong/>
<dicideItemLong/>
<dicideItemLong/>
<dicideItemLong/>
<dicideItemLong/>
</section>
<section class="section decide-example">
      <div class="container">
    <h2 class="section__title title txt--black">Примеры выполненных проектов</h2>
        <div class="grid-row">
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
import dicideItemLong from "../elements/decideItemLong.vue";

export default {
  name: "decidePage",
  components: {
    projectItemSocial,
    dicideItemLong
  }
};
</script>


<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
.intro {
  height: 600px;
  flex-direction: column;
  display: flex;
  align-items: center;
  .bg--gr;
  &__txt {
    color: white;
    margin-bottom: 40px;
    .title {
      margin-bottom: 0.5em;
    }
    .txt {
      font-size: 1.2rem;
      line-height: 1.5;
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
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__title {
    color: white;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    &__visit {
      font-size: 1rem;
    }
    &__link {
      .ico {
        margin: 0 5px;
      }
    }
  }
}
</style>
