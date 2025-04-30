<script setup>
import { Form } from "@primevue/forms";
import { Button, Textarea } from "primevue";
import { ref } from 'vue';

const emit = defineEmits([
  "submit"
]);

const request = ref("")

function sendRequest() {
  emit("submit", request.value);
  request.value = "";
}
</script>
<template>
  <!-- Форма для ввода  -->
  <Form class="flex flex-col gap-4 absolute inset-x-0 bottom-0 mx-4 mb-2">
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