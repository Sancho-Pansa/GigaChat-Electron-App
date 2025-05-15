<script setup>
import { Form } from "@primevue/forms";
import { Button, Textarea } from "primevue";
import { ref } from "vue";
import emitter from "./event.bus";

const request = ref("");

function sendRequest() {
  emitter.emit("requestSubmit", request.value);
  request.value = "";
}
</script>

<template>
  <!-- Форма для ввода  -->
  <Form class="flex flex-col gap-4 mx-4 mb-2">
    <Textarea
      v-model="request"
      placeholder="Введите запрос"
      autoResize
      rows="2"
      cols="45"
      size="large"
      @keydown.enter.exact.prevent="sendRequest">
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