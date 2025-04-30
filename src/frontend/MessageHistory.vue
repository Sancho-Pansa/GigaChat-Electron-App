<script setup>
import Message from "./Message.vue";

const messages = defineModel();

</script>

<template>
  <div class="grow-1">
    <Message v-for="m in messages">{{ m }}</Message>
  </div>
</template>