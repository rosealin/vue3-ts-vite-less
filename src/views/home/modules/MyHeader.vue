<template>
    <div class="header-module">
       <div class="w-content flex-bet-center">
           <img :src="Logo" alt="陕西文化产业公共服务平台">
       </div>
    </div>
</template>
<script setup>
import Logo from "@/assets/image/icons/logo.png";
</script>
<style lang="less">
.header-module {
  height: 60px;
  background: var(--vt-c-black-mute);
  .w-content {
    width: var(--vt-c-width);
    height: 60px;
    margin:0 auto;
    img{
        width:180px;
    }
  }
}
</style>