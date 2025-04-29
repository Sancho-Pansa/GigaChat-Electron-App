<script setup>
import { ref } from "vue";
import Message from "./Message.vue";

const messages = ref([]);

</script>

<template>
  <Message v-for="m in messages" :text="m.text"></Message>
</template>