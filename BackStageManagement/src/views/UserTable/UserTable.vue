<template>
    <div class="usertable">
        <!-- 表格 -->
        <my-table :list="list" @handleDelete="handleDelete" @handleBatchDelete="handleBatchDelete"
            @handleQuery="handleQuery" @handleAdd="handleAdd" @handleEdit="handleEdit"></my-table>


        <!-- 添加框 -->
        <my-dialog v-model:is-show="isShowAdd" :form="form" @addUserUsers="addUserUsers"></my-dialog>


        <!-- 编辑框 -->
        <my-dialog-edit v-model:is-show-edit="isShowEdit" :formEdit="formEdit"
            @editUserUsers="editUserUsers"></my-dialog-edit>

    </div>
</template>

<script setup>
import myTable from "./childComps/Table.vue"
import myDialog from "./childComps/Dialog.vue"
import myDialogEdit from "./childComps/DialogEdit.vue"
import { useUserHook } from "../../composables/useUserHook";
import { toRefs, ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

const isShowAdd = ref(false);
const isShowEdit = ref(false);

const { user_list, deleteUser, searchUserDim, addUserAccurate, editUserAccurate } = useUserHook()
const { list } = toRefs(user_list)


// 添加框数据
const form = reactive({
    username: "",
    password: "",
    nickname: "",
    status: ""
})
// 编辑框数据
const formEdit = reactive({
    id: "",
    username: "",
    password: "",
    nickname: "",
    status: ""
})

// 单条数据删除
const handleDelete = (row) => {
    ElMessageBox.confirm("确定要删除吗?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    }).then(res => {
        deleteUser(row.id)
    }).catch(err => {
        ElMessage.info("取消删除")
    })

}
// 多条数据删除
const handleBatchDelete = (selectRows) => {
    ElMessageBox.confirm("确定要删除吗?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    }).then(res => {
        selectRows.value.forEach(element => {
            deleteUser(element.id)
        });
    }).catch(err => {
        ElMessage.info("取消删除")
    })
}
// 模糊搜索
const handleQuery = (queryWords) => {
    searchUserDim(queryWords.value)
}
// 显示添加数据对话框
const handleAdd = () => {
    isShowAdd.value = true;
};
// 对话框添加用户
const addUserUsers = (userMession) => {
    addUserAccurate(userMession.username, userMession.password, userMession.nickname, userMession.status)
}

// 显示修改数据对话框
const handleEdit = (row) => {
    isShowEdit.value = true
    formEdit.id = row.id
    formEdit.username = row.username
    formEdit.nickname = row.nickname
    formEdit.password = row.password
    formEdit.status = row.status
}
// 编辑框修改用户数据
const editUserUsers = (editMession) => {
    editUserAccurate(editMession.id, editMession.username, editMession.password, editMession.nickname, editMession.status)
}
</script>

<style scoped lang="scss">
.usertable {
    background-color: #fff;
    padding: 20px;

    .btn-box {
        margin-bottom: 20px;

        .text {
            margin-left: 5px;
        }
    }
}
</style>