<script setup>
import ChatWindow from "./ChatWindow.vue";
import FooterInfo from "./FooterInfo.vue";
import HeaderInfo from "./HeaderInfo.vue";
</script>

<template>
  <div class="min-h-screen max-h-screen flex flex-col m-0 p-0">
    <HeaderInfo></HeaderInfo>
    <ChatWindow class="grow"></ChatWindow>
    <FooterInfo></FooterInfo>
  </div>
</template>
