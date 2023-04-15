<template>
    <div class="tagtable">
        <!-- 添加按钮 -->
        <el-button type="success" class="btn-box" @click="handleAdd">
            <iconpark-icon name="add"></iconpark-icon>
            <span class="text">添加</span>
        </el-button>

        <!-- 表单 -->
        <el-table :data="tag_list.list" stripe style="width: 100%" height="630">
            <el-table-column prop="id" label="ID" width="80" align="center">
            </el-table-column>

            <el-table-column prop="add_date" label="添加时间" width="300" align="center">
            </el-table-column>

            <el-table-column prop="pub_date" label="发布时间" width="300" align="center">
            </el-table-column>

            <el-table-column prop="name" label="标签名" width="200" align="center">
            </el-table-column>

            <el-table-column label="操作" width="180" align="center">
                <template #default="{ row }">
                    <el-button text class="handle-row-btn" type="warning" @click="handleEdit(row)">编辑</el-button>
                    <el-button text class="handle-row-btn" type="warning" @click="handleDelete(row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 添加组件 -->
        <el-dialog :model-value="isShowAdd" title="添加记录" @close="cancelButton">
            <!-- 表单 -->
            <el-form :model="addForm" label-position="top" size="large" :rules="rulesAdd" ref="formRefAdd">
                <!-- 标签名 -->
                <el-form-item label="标签名" prop="name">
                    <el-input v-model="addForm.name" />
                </el-form-item>

                <!-- add_date时间选择 -->
                <el-form-item label="添加时间" prop="add_date">
                    <el-date-picker v-model="addForm.add_date" type="date" placeholder="请选择添加时间" style="width: 100%" />
                </el-form-item>

                <!-- pub_date时间选择 -->
                <el-form-item label="发布时间" prop="pub_date">
                    <el-date-picker v-model="addForm.pub_date" type="date" placeholder="请选择发布时间" style="width: 100%" />
                </el-form-item>
            </el-form>

            <!-- 底部对话框 -->
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="cancelButton">取消</el-button>
                    <el-button @click="defineButton" type="primary">确定</el-button>
                </span>
            </template>
        </el-dialog>




        <!-- 修改组件 -->
        <el-dialog :model-value="isShowEdit" title="修改记录" @close="cancelButtonEdit">
            <!-- 表单 -->
            <el-form :model="editForm" label-position="top" size="large" :rules="rulesEdit" ref="formRefEdit">
                <!-- 标签名 -->
                <el-form-item label="标签名" prop="name">
                    <el-input v-model="editForm.name" />
                </el-form-item>

                <!-- add_date时间选择 -->
                <el-form-item label="添加时间" prop="add_date">
                    <el-date-picker v-model="editForm.add_date" type="date" placeholder="请选择添加时间" style="width: 100%" />
                </el-form-item>

                <!-- pub_date时间选择 -->
                <el-form-item label="发布时间" prop="pub_date">
                    <el-date-picker v-model="editForm.pub_date" type="date" placeholder="请选择发布时间" style="width: 100%" />
                </el-form-item>
            </el-form>

            <!-- 底部对话框 -->
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="cancelButtonEdit">取消</el-button>
                    <el-button @click="defineButtonEdit" type="primary">确定</el-button>
                </span>
            </template>
        </el-dialog>

    </div>
</template>

<script setup>
import { ElMessageBox,ElMessage } from "element-plus";
import { useTagHook } from "../../composables/useTagHook.js"
import { reactive, ref } from "vue";


const { tag_list, addTagAdmin, deleteTagAdmin, editTagAdmin } = useTagHook()

// 添加组件 格式规则
const formRefEdit = ref(null);
const rulesAdd = reactive({
    name: [
        { required: true, message: "请输入标签名", trigger: "blur" },
        { min: 3, max: 20, message: '必须在3到20个字符之间', trigger: 'blur' }
    ],
    add_date: [
        { required: true, message: "请选择添加日期", trigger: "blur" },
    ],
    pub_date: [
        { required: true, message: "请选择发布日期", trigger: "blur" },
    ]
})

// 编辑组件 格式规则
const formRefAdd = ref(null);
const rulesEdit = reactive({
    name: [
        { required: true, message: "请输入标签名", trigger: "blur" },
        { min: 3, max: 20, message: '必须在3到20个字符之间', trigger: 'blur' }
    ],
    add_date: [
        { required: true, message: "请选择添加日期", trigger: "blur" },
    ],
    pub_date: [
        { required: true, message: "请选择发布日期", trigger: "blur" },
    ]
})

// 控制 添加组件是否展示
const isShowAdd = ref(false);
// 控制 修改组件是否展示
const isShowEdit = ref(false);

// 添加组件 表单数据
const addForm = reactive({
    name: "",
    add_date: "",
    pub_date: ""
})

// 编辑组件 表单数据
const editForm = reactive({
    id: "",
    name: "",
    add_date: "",
    pub_date: ""
})

// 添加按钮事件
const handleAdd = () => {
    // 显示组件
    isShowAdd.value = true
}


// 添加组件 取消按钮事件
const cancelButton = () => {
    isShowAdd.value = false  // 关闭组件
    formRefAdd.value.resetFields();  // 重置表单
}

// 添加组件 确认按钮事件
const defineButton = () => {
    formRefAdd.value.validate((valid) => {  // 验证表单
        if (valid) {
            addTagAdmin(addForm.add_date, addForm.pub_date, addForm.name)
            cancelButton()  // 关闭组件
        } else {
            ElMessage.error("信息填写有误，请重新填写")
        }
    })
}

// 表单 删除按钮
const handleDelete = (row) => {
    ElMessageBox.confirm("确定要删除吗?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    }).then(res => {
        deleteTagAdmin(row.id)
    }).catch(err => {
        ElMessage.info("取消删除")
    })
}

// 表单 修改按钮
const handleEdit = (row) => {
    editForm.id = row.id
    editForm.name = row.name
    editForm.add_date = row.add_date
    editForm.pub_date = row.pub_date
    isShowEdit.value = true
}

// 编辑组件 取消按钮事件
const cancelButtonEdit = () => {
    isShowEdit.value = false  // 关闭组件
    formRefEdit.value.resetFields();  // 重置表单

}

// 编辑组件 确认按钮事件
const defineButtonEdit = () => {
    formRefEdit.value.validate((valid) => {  // 验证表单
        if (valid) {
            editTagAdmin(editForm.id, editForm.name, editForm.add_date, editForm.pub_date)
            cancelButtonEdit()
        } else {
            ElMessage.error("信息填写有误，请重新填写")
        }
    })
}
</script>

<style scoped>
.btn-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 25px;
}

.tagtable {
    background-color: #fff;
    padding-top: 30px;
    padding-left: 100px;

}
</style>