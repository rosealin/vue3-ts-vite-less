<script lang="ts" setup>
import MyHeader from "./modules/MyHeader.vue";
import MyAside from "./modules/MyAside.vue";
import { RouterView } from "vue-router";
</script>

<template>
<div class="common-layout">
    <el-container>
        <el-header>
            <MyHeader />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <MyAside />
            </el-aside>
            <el-main>
                <RouterView />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>
<style lang="less">
.common-layout {
  width: 100%;
  height: 100%;
  .el-header {
    --el-header-padding: 0px;
  }
}
</style>
