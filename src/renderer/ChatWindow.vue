<script setup>
import { onMounted, onUnmounted, reactive } from "vue";
import UserInput from "./UserInput.vue";
import MessageHistory from "./MessageHistory.vue";
import messageTags from "../main/services/messageTags";
import emitter from "./event.bus";

onMounted(() => {
  emitter.on("requestSubmit", sendRequest);
});

onUnmounted(() => {
  emitter.off("requestSubmit");
});

const messageStack = reactive([]);
const tags = messageTags;

function sendRequest(text) {
  if(text === null) {
    alertUser("Введите запрос");
  }

  addMessageBubble(text, tags.user);
  addMessageBubble("", tags.bot);
  emitter.emit("scrollChatDown");

  window.gigaChatApi.sendQuestion(text)
    .then((answer) => {
      removeMessageBubble();
      addMessageBubble(answer, tags.bot);
    })
    .catch(() => {
      removeMessageBubble();
      addMessageBubble("ERROR", tags.error);
    })
    .finally(() => {
      emitter.emit("scrollChatDown");
      emitter.emit("countTokens");
    });
}

function addMessageBubble(messageText, speaker) {
  console.log(messageText);
  messageStack.push({ text: messageText, speaker: speaker });
}

function removeMessageBubble() {
  messageStack.pop();
}

</script>

<template>
  <main class="grow-1 flex flex-col overflow-y-hidden">
    <!-- Массив истории сообщений -->
    <MessageHistory v-model="messageStack"></MessageHistory>
    <!-- Форма ввода  -->
    <UserInput />
  </main>
</template>

<style scoped></style>