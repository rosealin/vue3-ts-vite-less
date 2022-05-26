<template>
  <div class="header-module">
    <div class="w-content flex-bet-center">
      <img :src="Logo" alt="陕西文化产业公共服务平台">
      <div class="title" @click="handleName()">{{ title}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from "@/assets/image/icons/logo.png";
// defineProps({
//   title: String
// });
//1、ts专有声明，无默认值
defineProps<{
  title: string;
  num?: number;
}>();

const emit = defineEmits(["handleName"]);
const handleName = e => {
  emit("deleteName", 222);
};
</script>

<style lang="less" setup>
.header-module {
  height: 60px;
  background: var(--vt-c-black-mute);

  .w-content {
    width: var(--vt-c-width);
    height: 60px;
    margin: 0 auto;

    img {
      width: 180px;
    }

    .title {
      color: #fff;
    }
  }
}
</style>
