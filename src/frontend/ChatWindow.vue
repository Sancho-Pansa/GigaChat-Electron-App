<script setup>
import { ref } from "vue";
import UserInput from "./UserInput.vue";

const request = ref("");

function sendRequest(text) {
  if(text === null) {
    alertUser("Введите запрос");
  }

  window.gigaChatApi.sendQuestion(text)
    .then(addMessageBubble)
    .catch(() => addMessageBubble("ERROR"));
}

function alertUser(message) {
  alert(message);
}

function addMessageBubble(messageText) {
  // TODO:
  console.log(messageText);
}

</script>

<template>
<!-- Массив истории сообщений -->
<!-- Форма для ввода  -->
 <UserInput @submit="sendRequest"></UserInput>
</template>