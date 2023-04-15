// 引入全局组件

import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import { TooltipComponent, GridComponent, DatasetComponent, TransformComponent, LegendComponent } from 'echarts/components';
// 引入标签布局，图标过度
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 ECharts 中的 CanvasRenderer 渲染器
import { CanvasRenderer } from 'echarts/renderers';

// 错误收集
import errorHandler from './monitor'


echarts.use([
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    // BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    LegendComponent
])

// 向外暴露的全局挂载函数
function globalInstall(app) {
    app.config.errorHandler = errorHandler
    app.provide('$echarts', echarts)
}
export default globalInstall

