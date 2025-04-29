<script setup>
import { Textarea, Button } from "primevue";
import { Form } from "@primevue/forms";
import { ref } from "vue";

const request = ref("");

function sendRequest() {
  const message = request.value;
  if(message === null) {
    alertUser("Введите запрос");
  }

  window.gigaChatApi.sendQuestion(message)
    .then((result) => request.value = result)
    .catch(() => request.value = "ERROR");
}

function alertUser(message) {
  alert(message);
}

function addMessageBubble(messageText) {
  // TODO:
}

</script>

<template>
<!-- Массив истории сообщений -->
<!-- Форма для ввода  -->
<Form class="flex flex-col gap-4 absolute inset-x-0 bottom-0 mx-4">
  <Textarea
    v-model="request"
    placeholder="Введите запрос"
    autoResize
    rows="2"
    cols="45"
    size="large"
    @keyup.enter="sendRequest">
  </Textarea>
  <Button
    type="submit"
    severity="secondary"
    label="Отправить"
    @click="sendRequest"
    >
  </Button>
</Form>
</template>