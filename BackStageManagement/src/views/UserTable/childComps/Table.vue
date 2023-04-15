<template>
    <div class="table-box">
        <!-- 表格头部 -->
        <div class="top-panel">
            <div class="btn-group">
                <el-button type="success" class="btn-box" @click="handleAdd">
                    <iconpark-icon name="add"></iconpark-icon>
                    <span class="text">添加</span>
                </el-button>
                <el-button type="danger" class="btn-box" @click="handleBatchDelete">
                    <iconpark-icon name="delete"></iconpark-icon>
                    <span class="text">删除</span>
                </el-button>
            </div>
            <div class="search-box">
                <el-input v-model.trim="queryWords" placeholder="输入你要查找的用户名" clearable>
                    <template #prepend>
                        <iconpark-icon name="search"></iconpark-icon>
                    </template>
                </el-input>
                <el-button type="primary" @click="handleQuery">查询</el-button>
            </div>
        </div>
        
        <!-- 表格主体 -->
        <el-table @selection-change="handleSelect" :data="conputedData(list)" style="width: 100%" stripe height="560">
            <!-- 多选栏 -->
            <el-table-column type="selection" width="100" align="center">
            </el-table-column>

            <!-- id栏 -->
            <el-table-column label="ID" width="100" prop="id" align="center">
            </el-table-column>

            <!-- 用户名栏 -->
            <el-table-column label="用户名" width="200" prop="username" align="center">
            </el-table-column>

            <!-- 用户密码栏 -->
            <el-table-column label="用户密码" width="200" prop="password" align="center">
            </el-table-column>

            <!-- 用户昵称栏 -->
            <el-table-column label="用户昵称" width="200" prop="nickname" align="center">
            </el-table-column>

            <!-- 权限栏 -->
            <el-table-column label="权限" width="200" prop="status" align="center">
                <!-- 权限tag -->
                <template #default="{ row }" class="a">
                    <el-tag :type="[row.status == 'administrator' ? 'success' : 'info']">{{ row.status
                        == 'administrator' ? '管理员' : '普通用户' }}</el-tag>
                </template>
            </el-table-column>

            <!-- 操作栏 -->
            <el-table-column label="操作" width="160" align="center">
                <template #default="{ row }">
                    <el-button text class="handle-row-btn" type="warning" @click="handleEdit(row)">编辑</el-button>
                    <el-button text class="handle-row-btn" type="warning" @click="handleDelete(row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <!-- 分页 -->
        <el-pagination background :page-size="10" :total="list.length" :current-page.sync="currentPage"
            layout="prev, pager, next" @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

// 父组件传值
const props = defineProps(["list"]);


// 搜索框数据
const queryWords = ref("");
// 选中行数据
const selectRows = ref([]);


// 向父组件提交自定义事件
const emit = defineEmits([
    "handleEdit",
    "handleDelete",
    "handleBatchDelete",
    "handleQuery",
    "handleAdd"

]);

// 表示表格中被选中的行数据
const handleSelect = (rows) => {
    selectRows.value = rows;
};

// 用于处理新增数据的操作 --完成
const handleAdd = () => {
    emit("handleAdd");
};

// 用于处理批量删除数据的操作，并将选中的行数据通过自定义事件传递给父组件 --完成
const handleBatchDelete = () => {
    emit("handleBatchDelete", selectRows);
};

// 用于处理搜索框输入完成后的操作，并将输入的搜索词通过自定义事件传递给父组件  --完成
const handleQuery = () => {
    emit("handleQuery", queryWords);
};

// 用于处理单行数据的编辑 --完成
const handleEdit = (row) => {
    emit("handleEdit", row);
};

// 用于处理单行数据的删除 --完成
const handleDelete = (row) => {
    emit("handleDelete", row);
};




// 当前页码
const currentPage = ref(1);
// 分页切换
const handleCurrentChange = (value) => {
    currentPage.value = value
}
// 计算分页数据前端模拟分页
const conputedData = (list1) => {
    return list1.slice(0 + (currentPage.value - 1) * 10, 10 + (currentPage.value - 1) * 10)
}
</script>

<style scoped lang="scss">
.el-tag {
    /* 撑大行高 */
    height: 35px;
}


.top-panel {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 25px;

    .search-box {
        display: flex;
        justify-content: space-between;

        :deep(.el-input-group) {
            width: 100%;
            margin-right: 20px;
        }
    }
}

.el-table {
    .handle-row-btn {
        padding: 0;
    }
}

.el-pagination {
    margin-top: 20px;
}
</style>