<template>
  <div class="LoginPanel">
    <h1 class="title">小保安CMS</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <PaneAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <PanePhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      round
      size="large"
      @click="handleLoginBtnClik"
    >
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PaneAccount from './PaneAccount.vue'
import PanePhone from './PanePhone.vue'

const activeName = ref('account')
const isRemPwd = ref(false)
const accountRef = ref<InstanceType<typeof PaneAccount>>()

function handleLoginBtnClik() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction()
  } else {
    console.log('手机登录')
  }
}
</script>

<style lang="less" scoped>
.LoginPanel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
