<template>
  <div class="PaneAccount">
    <el-form
      :model="account"
      :rules="accountRules"
      label-width="60px"
      size="large"
      status-icon
      ref="formRef"
    >
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'

const account = reactive<IAccount>({
  name: '',
  password: ''
})

const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号信息！', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20位数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '必须输入密码信息~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或者字母组成',
      trigger: 'blur'
    }
  ]
}

const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = account.name
      const password = account.password

      loginStore.loginAccountAction({ name, password })
    } else {
      ElMessage.error('Oops, 请您输入正确的帐号与密码！')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.PaneAccount {
  color: red;
}
</style>
