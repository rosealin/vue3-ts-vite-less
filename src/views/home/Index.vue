<script lang="ts" setup>
import MyHeader from "./modules/MyHeader.vue";
import MyAside from "./modules/MyAside.vue";
import Footer from "./modules/Footer.vue";
import {
    RouterView
} from "vue-router";
import {
    ref
} from 'vue';
const title = ref('zyy')
const deleteName = (val) => {
    console.log('111')
    console.log(val)
}
</script>

<template>
<div class="common-layout">
    <el-container>
        <el-header>
            <MyHeader :title="title" @deleteName="deleteName()" />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <MyAside />
            </el-aside>
            <el-main>
                <RouterView />
            </el-main>
        </el-container>
        <section>
            <Footer></Footer>
        </section>
    </el-container>
</div>
</template>

<style lang="less" scoped>
.common-layout {
    width: 100%;
    height: 100%;

    .el-header {
        --el-header-padding: 0px;
    }
    .el-main{
        height: calc(100vh - 140.5px);
    }
    .el-container{
        margin-bottom: 20px;
    }
}
</style>
