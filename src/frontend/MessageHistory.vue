<script setup>
import Message from "./Message.vue";

const messages = defineModel();

</script>

<template>
  <Message v-for="m in messages">{{ m }}</Message>
</template>