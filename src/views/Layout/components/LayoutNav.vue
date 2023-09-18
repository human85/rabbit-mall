<script setup>
import { useUserStore } from '@/stores/userStore.js'

const userStore = useUserStore()
const router = useRouter()
// 退出登录
const logOut = () => {
  // 清除用户信息
  userStore.clearUserInfo()
  // 跳转登录页
  router.push('/login')
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.id">
          <li>
            <a href="javascript:;" @click="$router.push('/member/user')">
              <i class="iconfont icon-user"></i>
              {{ userStore.userInfo.nickname }}
            </a>
          </li>
          <li>
            <el-popconfirm
              width="220"
              @confirm="logOut"
              confirm-button-text="确认"
              cancel-button-text="取消"
              title="确认退出登录吗?"
            >
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  background-color: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: end;
    align-items: center;

    li {
      a {
        display: inline-block;
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        border-left: 2px solid #666;
      }
    }
  }
}
</style>
