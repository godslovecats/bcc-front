<template>
      <div class="project project--social">
         <h3 class="title"><router-link v-bind:to="'projectAbout'" tag="span">Проект по модернизации СДО "Академия"</router-link></h3>
          <div class="social">
              <p class="social__visit">Просмотров 124</p>
              <div class="social__link">
                  <i class="ico material-icons md-25">present_to_all</i>
                  <i class="ico material-icons md-25">present_to_all</i>
                  <i class="ico material-icons md-25">present_to_all</i>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  name: "projectItemSocial"
};
</script>


<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
.project {
  &--social {
    .bg--gr;
    padding: 35px;
    height: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      color: white;
      font-size: 1.2rem;
      line-height: 1.5;
      cursor: pointer;
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
}
</style>
