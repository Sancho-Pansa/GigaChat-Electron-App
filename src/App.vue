<script setup>
import ChatWindow from "./frontend/ChatWindow.vue";
import FooterInfo from "./frontend/FooterInfo.vue";
</script>

<template>
  <div class="min-h-screen max-h-screen flex flex-col m-0 p-0">
    <h1 class="font-bold text-center text-2xl">Welcome to Electron GigaChat 🤖</h1>
    <ChatWindow class="grow"></ChatWindow>
    <FooterInfo></FooterInfo>
  </div>
</template>
