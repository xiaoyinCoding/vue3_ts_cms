<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()
function handleExitClick() {
  //1. delete token.
  localCache.removeCache(LOGIN_TOKEN)

  //2. jump back to the login page.
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
