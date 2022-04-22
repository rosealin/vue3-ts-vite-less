<template>
    <div class="aside-module">
        <el-button color="#626aef" @click="goActivity('activity')">Activity</el-button>
        <el-button color="#626aef" @click="goActivity('modal')">List</el-button>
    </div>
</template>
<script lang="ts" setup> 
import router from '@/router'
const routes = router.getRoutes();
    const goActivity = (type)=>{
        router.push(`/${type}`);
    }
    
</script>
<style lang="less">
    .aside-module{
        background:var(--color-background-mute);
        height:400px;
        margin-top:20px;
    }
</style>