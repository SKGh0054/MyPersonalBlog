<template>
    <div>
        <span class="title">分类-文章数</span>
        <div class="chart" ref="chart" style="width:400px ;height: 200px"> </div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from "vue";
import { getarticle } from "../../../api/index.js"

const chart = ref();
const init = () => {
    const myChart = echarts.init(chart.value);
    let option = {
        legend: {},
        tooltip: {},
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }],
    };


    getarticle().then(res => {
        let result = res.data.rows.reduce((acc, cur) => {
            if (!acc[cur.category]) {
                acc[cur.category] = 1;
            } else {
                acc[cur.category]++;
            }
            return acc;
        }, {});

        let chartData = [["分类", "文章数"]];
        for (let key in result) {
            chartData.push([key, result[key]]);
        }
        // 因为异步执行，要确保 categoryData 赋值完成后，再更新 option 的 dataset
        option.dataset = {
            source: chartData
        };

        // 设置参数 渲染图表
        myChart.setOption(option)
    })
}
onMounted(() => {
    init()
})

</script>

<style scoped></style>