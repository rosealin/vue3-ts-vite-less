<template>
    <div class="aside-module">
        <el-button color="#626aef" @click="goActivity">Activity</el-button>
    </div>
</template>
<script lang="ts" setup> 
import router from '@/router'
    const goActivity = ()=>{
        router.push('/activity')
    }
    
</script>
<style lang="less">
    .aside-module{
        background:var(--color-background-mute);
        height:400px;
        margin-top:20px;
    }
</style>