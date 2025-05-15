<script setup>
import ChatWindow from "./frontend/ChatWindow.vue";
import FooterInfo from "./frontend/FooterInfo.vue";
import HeaderInfo from "./frontend/HeaderInfo.vue";
</script>

<template>
  <div class="min-h-screen max-h-screen flex flex-col m-0 p-0">
    <HeaderInfo></HeaderInfo>
    <ChatWindow class="grow"></ChatWindow>
    <FooterInfo></FooterInfo>
  </div>
</template>
