<script setup>
import { onMounted, reactive, ref } from "vue";
import { useActivityStore } from "@/stores/activity";
const activity = useActivityStore();

onMounted(() => {
  activity.getActivitylist({ page: 1, page_size: 3 });
});

const state = reactive({
  count: 0
});
const name = ref("zcc");
const status = ref({
  count: 1
});
</script>
<template>
<div class="activity-module">
    <div class="top">
        我创建的活动
    </div>
    <div class="activity-module-list flex-bet-center">
        <el-card class="box-card" shadow="hover" v-for=" (item,index) in activity.activities" :key="index">
            <template #header>
                <div class="card-header flex-bet-center">
                    <span>{{item.title}}</span>
                    <el-button class="button" type="text">{{item.activity_start_time}}</el-button>
                </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
    </div>
    <div>state: {{state.count}}</div>
    <div>name: {{name}}</div>
    <div>status: {{status}}</div>
</div>
</template>

<style lang="less" scoped>
.activity-module {
  .top {
    background: var(--vt-c-divider-dark-2);
    margin-bottom: 20px;
  }
  &-list {
    .box-card {
      width: 30%;
    }
  }
}
</style>
