<script setup>
import { reactive } from "vue";
import UserInput from "./UserInput.vue";
import MessageHistory from "./MessageHistory.vue";

const messageStack = reactive([]);

const USER_TAG = "human";
const BOT_TAG = "bot";

function sendRequest(text) {
  if(text === null) {
    alertUser("Введите запрос");
  }

  addMessageBubble(text, USER_TAG);

  window.gigaChatApi.sendQuestion(text)
    .then((answer) => addMessageBubble(answer, BOT_TAG))
    .catch(() => addMessageBubble("ERROR"));
}

function alertUser(message) {
  alert(message);
}

function addMessageBubble(messageText, speaker) {
  messageStack.push({ text: messageText, speaker: speaker });
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