<template>
    <div class="articletable">
        <!-- 添加按钮 -->
        <el-button type="success" class="btn-box" @click="handleAdd">
            <iconpark-icon name="add"></iconpark-icon>
            <span class="text">添加</span>
        </el-button>

        <!-- 表单 -->
        <el-table :data="article_list.list" stripe style="width: 100%" height="630">
            <!-- 文章描述与内容 -->
            <el-table-column type="expand" width="30" align="center">
                <template #default="props">
                    <el-card class="box-card">
                        <el-text class="mx-1" type="success" size="large">文章描述 : </el-text>{{ props.row.description }}
                        <el-divider />
                        <el-text class="mx-1" type="success" size="large">文章内容 : </el-text>{{ props.row.content }}
                    </el-card>
                </template>
            </el-table-column>
            <!-- id -->
            <el-table-column prop="id" label="ID" width="50" align="center">
            </el-table-column>
            <!-- 分类 -->
            <el-table-column prop="category" label="分类" width="80" align="center">
            </el-table-column>
            <!-- 作者 -->
            <el-table-column prop="author" label="作者" width="80" align="center">
            </el-table-column>
            <!-- 添加时间 -->
            <el-table-column prop="add_date" label="添加时间" width="220" align="center">
            </el-table-column>
            <!-- 发布时间 -->
            <el-table-column prop="pub_date" label="发布时间" width="220" align="center">
            </el-table-column>
            <!-- 文章标题 -->
            <el-table-column prop="title" label="文章标题" width="200" align="center">
            </el-table-column>
            <!-- 关键词 -->
            <el-table-column prop="keywords" label="关键词" width="250" align="center">
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
                <!-- 作者 -->
                <el-form-item label="作者" prop="author">
                    <el-input v-model="addForm.author" />
                </el-form-item>

                <!-- 标题 -->
                <el-form-item label="标题" prop="title">
                    <el-input v-model="addForm.title" />
                </el-form-item>

                <!-- 关键词 -->
                <el-form-item label="关键词" prop="keywords">
                    <el-input v-model="addForm.keywords" />
                </el-form-item>

                <!-- 文章描述 -->
                <el-form-item label="文章描述" prop="description">
                    <el-input v-model="addForm.description" />
                </el-form-item>

                <!-- 分类选项 -->
                <el-form-item label="分类选项" prop="category">
                    <el-select v-model="addForm.category" placeholder="选择添加新增文章数据分类">
                        <template v-for="item in category_list.list">
                            <el-option :label="item.name" :value="item.name" />
                        </template>
                    </el-select>
                </el-form-item>

                <!-- add_date时间选择 -->
                <el-form-item label="添加时间" prop="add_date">
                    <el-date-picker v-model="addForm.add_date" type="date" placeholder="请选择添加时间" style="width: 100%" />
                </el-form-item>

                <!-- pub_date时间选择 -->
                <el-form-item label="发布时间" prop="pub_date">
                    <el-date-picker v-model="addForm.pub_date" type="date" placeholder="请选择发布时间" style="width: 100%" />
                </el-form-item>

                <!-- 文章内容 -->
                <el-form-item label="文章内容" prop="content">
                    <el-input v-model="addForm.content" autosize type="textarea" />
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


        <!-- 编辑组件 -->
        <el-dialog :model-value="isShowEdit" title="添加记录" @close="cancelButtonEdit">
            <!-- 表单 -->
            <el-form :model="editForm" label-position="top" size="large" :rules="rulesEdit" ref="formRefEdit">
                <!-- 作者 -->
                <el-form-item label="作者" prop="author">
                    <el-input v-model="editForm.author" />
                </el-form-item>

                <!-- 标题 -->
                <el-form-item label="标题" prop="title">
                    <el-input v-model="editForm.title" />
                </el-form-item>

                <!-- 关键词 -->
                <el-form-item label="关键词" prop="keywords">
                    <el-input v-model="editForm.keywords" />
                </el-form-item>

                <!-- 文章描述 -->
                <el-form-item label="文章描述" prop="description">
                    <el-input v-model="editForm.description" />
                </el-form-item>

                <!-- 分类选项 -->
                <el-form-item label="分类选项" prop="category">
                    <el-select v-model="editForm.category" placeholder="选择添加新增文章数据分类">
                        <template v-for="item in category_list.list">
                            <el-option :label="item.name" :value="item.name" />
                        </template>
                    </el-select>
                </el-form-item>

                <!-- add_date时间选择 -->
                <el-form-item label="添加时间" prop="add_date">
                    <el-date-picker v-model="editForm.add_date" type="date" placeholder="请选择添加时间" style="width: 100%" />
                </el-form-item>

                <!-- pub_date时间选择 -->
                <el-form-item label="发布时间" prop="pub_date">
                    <el-date-picker v-model="editForm.pub_date" type="date" placeholder="请选择发布时间" style="width: 100%" />
                </el-form-item>

                <!-- 文章内容 -->
                <el-form-item label="文章内容" prop="content">
                    <el-input v-model="editForm.content" autosize type="textarea" />
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
import { ElMessageBox, ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { useArticleHook } from '../../composables/useArticleHook';
import { useCategoryHook } from '../../composables/useCategoryHook';
import { editcategoryarticlemap } from "../../api/index.js"

const { category_list } = useCategoryHook()  // 获取分类表当前数据
const { article_list, addArticleAdmin, deleteArticleAdmin, editArticleAdmin } = useArticleHook()

// 添加组件 格式规则  -- 已完成
const formRefAdd = ref(null);
const rulesAdd = reactive({
    author: [
        { required: true, message: "请输入作者名", trigger: "blur" },
        { min: 3, max: 20, message: '必须在3到20个字符之间', trigger: 'blur' }
    ],
    title: [
        { required: true, message: "请输入标题", trigger: "blur" },
        { min: 3, max: 200, message: '必须在3到200个字符之间', trigger: 'blur' }
    ],
    keywords: [
        { required: true, message: "请输入关键字", trigger: "blur" },
        { min: 3, max: 200, message: '必须在3到200个字符之间', trigger: 'blur' }
    ],
    add_date: [
        { required: true, message: "请选择添加日期", trigger: "blur" },
    ],
    pub_date: [
        { required: true, message: "请选择发布日期", trigger: "blur" },
    ],
    description: [
        { required: true, message: "请输入分类描述", trigger: "blur" },
        { min: 3, max: 2000, message: '必须在3到2000个字符之间', trigger: 'blur' }
    ],
    category: [
        { required: true, message: "请选择分类", trigger: "blur" }
    ],
    content: [
        { required: true, message: "请输入文章内容", trigger: "blur" },
        { min: 3, max: 100000, message: '必须在3到100000个字符之间', trigger: 'blur' }
    ]
})

// 编辑组件 格式规则  -- 已完成
const formRefEdit = ref(null);
const rulesEdit = reactive({
    author: [
        { required: true, message: "请输入作者名", trigger: "blur" },
        { min: 3, max: 20, message: '必须在3到20个字符之间', trigger: 'blur' }
    ],
    title: [
        { required: true, message: "请输入标题", trigger: "blur" },
        { min: 3, max: 200, message: '必须在3到200个字符之间', trigger: 'blur' }
    ],
    keywords: [
        { required: true, message: "请输入关键字", trigger: "blur" },
        { min: 3, max: 200, message: '必须在3到200个字符之间', trigger: 'blur' }
    ],
    add_date: [
        { required: true, message: "请选择添加日期", trigger: "blur" },
    ],
    pub_date: [
        { required: true, message: "请选择发布日期", trigger: "blur" },
    ],
    description: [
        { required: true, message: "请输入分类描述", trigger: "blur" },
        { min: 3, max: 2000, message: '必须在3到2000个字符之间', trigger: 'blur' }
    ],
    category: [
        { required: true, message: "请选择分类", trigger: "blur" }
    ],
    content: [
        { required: true, message: "请输入文章内容", trigger: "blur" },
        { min: 3, max: 100000, message: '必须在3到100000个字符之间', trigger: 'blur' }
    ]
})

// 控制 添加组件是否展示  -- 已完成
const isShowAdd = ref(false);

// 控制 修改组件是否展示  -- 已完成
const isShowEdit = ref(false);

// 添加组件 表单数据  -- 已完成
const addForm = reactive({
    category: "",
    author: "",
    add_date: "",
    pub_date: "",
    title: "",
    keywords: "",
    description: "",
    content: ""
})

// 编辑组件 表单数据  -- 已完成
const editForm = reactive({
    id: "",
    category: "",
    author: "",
    add_date: "",
    pub_date: "",
    title: "",
    keywords: "",
    description: "",
    content: ""
})

// 添加按钮事件  -- 已完成
const handleAdd = () => {
    isShowAdd.value = true
}


// 添加组件 取消按钮事件  -- 已完成
const cancelButton = () => {
    isShowAdd.value = false  // 关闭组件
    formRefAdd.value.resetFields();  // 重置表单
}

// 添加组件 确认按钮事件  --- 还需添加categoey_article表的映射关系待完成 -- 已添加
const defineButton = () => {
    formRefAdd.value.validate((valid) => {  // 验证表单
        if (valid) {
            category_list.list.forEach(element => {
                if (element.name == addForm.category) {
                    addArticleAdmin(addForm.category, addForm.author, addForm.add_date, addForm.pub_date, addForm.title, addForm.keywords, addForm.description, addForm.content, element.id)
                }
            })
            cancelButton()  // 关闭组件
        } else {
            ElMessage.error("信息填写有误，请重新填写")
        }
    })
}

// 表单 删除按钮  ---  根据文章的id删除对应的categoey_article表的映射记录待完成 -- 已完成
const handleDelete = (row) => {
    ElMessageBox.confirm(`确定要删除该文章吗?`, "Warning", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning",
    }).then(res => {
        deleteArticleAdmin(row.id)
    }).catch(err => {
        ElMessage.info("取消删除")
    })
}

// 表单 修改按钮 -- 已完成
const handleEdit = (row) => {
    isShowEdit.value = true
    editForm.id = row.id
    editForm.category = row.category
    editForm.author = row.author
    editForm.add_date = row.add_date
    editForm.pub_date = row.pub_date
    editForm.title = row.title
    editForm.keywords = row.keywords
    editForm.description = row.description
    editForm.content = row.content
}

// 编辑组件 取消按钮事件 -- 已完成
const cancelButtonEdit = () => {
    isShowEdit.value = false  // 关闭组件
    formRefEdit.value.resetFields();  // 重置表单
}

// 编辑组件 确认按钮事件 -- 已完成
const defineButtonEdit = () => {
    formRefEdit.value.validate((valid) => {  // 验证表单
        if (valid) {
            // 先修改映射
            category_list.list.forEach(element => {
                if (element.name == editForm.category) {
                    editcategoryarticlemap(element.id, editForm.id)
                }
            })
            // 在修改文章表
            editArticleAdmin(editForm.id, editForm.category, editForm.author, editForm.add_date, editForm.pub_date, editForm.title, editForm.keywords, editForm.description, editForm.content)
            cancelButtonEdit()
        } else {
            ElMessage.error("信息填写有误，请重新填写")
        }
    })
}


</script>

<style scoped>
.box-card {
    margin-left: 10px;
    margin-right: 10px;
}

.btn-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    margin-top: 15px;
}

.articletable {
    background-color: #fff;
    padding-top: 15px;
    padding-left: 20px;

}
</style>