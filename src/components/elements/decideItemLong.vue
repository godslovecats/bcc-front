<template>
        <div class="decide--long">
        <div class="container">
        <div class="info">
            <h2 class="info__title">АСУ инженерными системами</h2>
            <p class="info__txt">Разработка проекта и полное оснащение зданиц и сооружений системами автоматизации и диспетчеризации инженерных систем</p>
        </div>
       <button class="btn btn--base btn--one-third">Перейти</button>
        </div>
    </div>
</template>


<script>
export default {
  name: "decideItemLong"
};
</script>

<style lang="less" scoped>
@import (reference) "../../assets/styles/mixins.less";
.decide--long {
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url('../../../src/assets/img/new-mock.png') no-repeat center center;
    background-size: 350px;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info {
        width: 50%;
        &__title {
            font-size: 3rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1rem;
            color: black;
        }
        &__txt {
            font-size: 1.2rem;
            line-height: 1.5;
        }
    }
    .btn {}
    &:nth-child(even) {
        .bg--gr1;
    }
}
</style>
