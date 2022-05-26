<script setup>
import { onMounted, reactive, ref } from "vue";
import { useActivityStore } from "@/stores/activity";
const activity = useActivityStore();

onMounted(() => {
  activity.getActivitylist({ page: 1, page_size: 10 });
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
      <el-row  :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for=" (item,index) in activity.activities" :key="index">
          <el-card class="box-card" shadow="hover" >
            <template #header>
              <div class="box-card-header flex-bet-center">
                <span class="box-card-title ecplise">{{item.title}}</span>
                <el-button class="button" type="text">{{item.activity_start_time}}</el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </el-col>
      </el-row>

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
  .box-card {
    margin:10px 0;
    &-title{
      max-height: var(--h-4);
    }
  }
}
</style>
