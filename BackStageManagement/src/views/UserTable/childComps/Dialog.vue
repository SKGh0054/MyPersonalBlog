<template>
  <el-dialog :model-value="isShow" title="添加记录" @close="cancelButton">
    <!-- 表单 -->
    <el-form ref="formRef" :model="form" label-position="top" size="large" :rules="rules">
      <!-- 用户名 -->
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <!-- 用户昵称 -->
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <!-- 用户密码 -->
      <el-form-item label="用户密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <!-- 权限选择 -->
      <el-form-item label="权限选择" prop="status">
        <el-select v-model="form.status" placeholder="选择添加权限">
          <el-option label="管理员" value="administrator" />
          <el-option label="普通用户" value="consumer" />
        </el-select>
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
</template>

<script setup>
import { ElMessage } from "element-plus";
import { ref, reactive } from "vue"


const emit = defineEmits(["addUserUsers", "update:isShow"]);


const props = defineProps({
  isShow: {
    type: Boolean,
  },
  form: {
    type: Object,
  },
});


// 格式规则
const formRef = ref(null);
const rules = reactive({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 20, message: '必须在3到20个字符之间', trigger: 'blur' }
  ],
  nickname: [
    { required: true, message: "请输入用户昵称", trigger: "blur" },
    { min: 3, max: 20, message: '必须在3到20个字符之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: "请输入用户密码", trigger: "blur" },
    { min: 3, max: 20, message: '必须在3到20个字符之间', trigger: 'blur' }
  ],
  status: [
    { required: true, message: "请选择用户权限", trigger: "blur" },
  ]
})

// 取消按钮
const cancelButton = () => {
  emit("update:isShow", false);
  formRef.value.resetFields();
}

// 确认按钮
const defineButton = () => {
  formRef.value.validate((valid) => {  // 验证表单
    if (valid) {
      emit("addUserUsers", props.form);
      cancelButton()  // 关闭组件

    } else {
      ElMessage.error("信息填写有误，请重新填写")
    }
  })
}


</script>

<style scoped></style>