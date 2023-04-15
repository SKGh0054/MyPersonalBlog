<template>
  <div class="home-container">
    <div class="card sayings" style="font-size: 15px;">
      大丈夫生于天地间, 不识其主而事之, 是无智也! 今日受死, 夫何足惜。
    </div>
    <div class="one-row row">
      <div class="card">
        <!-- 之所以看起来累赘加card的原因是给el-col加就无法保证他们之间有间距 -->
        <line-chart></line-chart>
      </div>
      <div class="card">
        <!-- <bar-chart /> -->
        <MyBarChart></MyBarChart>
      </div>
    </div>
    <div class="two-row row">
      <div class="card col-one">
        <time-line></time-line>
      </div>
      <div class="col-two">
        <div class="card">
          <todo-list></todo-list>
        </div>
        <div class="card">
          <technology-stack></technology-stack>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import LineChart from "./childComps/LineChart.vue";
import TimeLine from "./childComps/Timeline.vue";
import TodoList from "./childComps/TodoList.vue";
import TechnologyStack from "./childComps/TechnologyStack.vue";

import MyBarChart from "./childComps/MyBarChart.vue";


</script>



<style lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  padding: 10px;

  .sayings {
    color: $font-gray;
    font-size: $font-small-size;
    text-align: center;
  }

  .row {
    display: flex;
    justify-content: space-between;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 20px;
    }

    &.one-row {
      .card {
        width: 48%;
      }
    }

    &.two-row {
      .col-one {
        flex: 1;
        margin-right: 20px;
      }

      .col-two {
        flex: 2;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>