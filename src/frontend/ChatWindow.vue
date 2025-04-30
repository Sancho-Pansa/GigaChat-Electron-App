<script setup>
import { reactive } from "vue";
import UserInput from "./UserInput.vue";
import MessageHistory from "./MessageHistory.vue";

const messageStack = reactive([]);

function sendRequest(text) {
  if(text === null) {
    alertUser("Введите запрос");
  }

  messageStack.push(text);

  window.gigaChatApi.sendQuestion(text)
    .then(addMessageBubble)
    .catch(() => addMessageBubble("ERROR"));
}

function alertUser(message) {
  alert(message);
}

function addMessageBubble(messageText) {
  console.log(messageText);
  messageStack.push(messageText);
}

</script>

<template>
  <main class="grow-1 flex flex-col">
    <!-- Массив истории сообщений -->
    <MessageHistory v-model="messageStack"></MessageHistory>
    <!-- Форма ввода  -->
    <UserInput @submit="sendRequest"></UserInput>
  </main>
</template>