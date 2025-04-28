<template>
  <h1>💖 Hello World!</h1>
  <p>Welcome to your Electron.</p>
  <p>{{ msg }}</p>
  <button @click="testClick">Test!</button>
</template>

<script setup>
import { ref } from 'vue';
  const msg = ref();
  function testClick() {
    msg.value = "Click";
    window.gigaChatApi.sendQuestion("Привет, как дела?")
      .then((result) => msg.value = result)
      .catch(() => msg.value = "ERROR");
  }
</script>