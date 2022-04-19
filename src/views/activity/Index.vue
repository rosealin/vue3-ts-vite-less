<script lang="ts" setup>
import {
    onMounted
} from 'vue'
import {
    getActivity
} from '@/api/activity'
onMounted(() => {
    getActivity().then((res:any)=>{
        console.log(res);
        
    })
})
</script>
<template>
    <div class="activity-module">
        <div class="top">
            dddd
        </div>
    </div>
</template>
<style lang="less" scoped>
.activity-module{
    .top{
        background: var(--vt-c-divider-dark-2)
    }
}
</style>

