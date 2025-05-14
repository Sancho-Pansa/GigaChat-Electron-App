<script setup>
import { reactive } from "vue";
import UserInput from "./UserInput.vue";
import MessageHistory from "./MessageHistory.vue";
import messageTags from "../backend/messageTags";

const messageStack = reactive([]);
const tags = messageTags;

function sendRequest(text) {
  if(text === null) {
    alertUser("Введите запрос");
  }

  addMessageBubble(text, tags.user);

  window.gigaChatApi.sendQuestion(text)
    .then((answer) => addMessageBubble(answer, tags.bot))
    .catch(() => addMessageBubble("ERROR", tags.error));
}

function alertUser(message) {
  alert(message);
}

function addMessageBubble(messageText, speaker) {
  console.log(messageText);
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