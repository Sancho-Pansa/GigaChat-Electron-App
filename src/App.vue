<script setup>
import { Textarea, Button } from 'primevue';
import { Form } from "@primevue/forms";
import { ref } from 'vue';

const msg = ref();
function testClick() {
  window.gigaChatApi.sendQuestion(msg.value)
    .then((result) => msg.value = result)
    .catch(() => msg.value = "ERROR");
}
</script>

<template>
  <h1 class="font-bold text-2xl">Welcome to Electron GigaChat. 🤖</h1>

  <Form class="flex flex-col gap-4">
    <Textarea
      v-model="msg"
      placeholder="Введите запрос"
      autoResize
      rows="8"
      cols="45"
      size="large">
    </Textarea>

    <Button
      type="submit"
      severity="secondary"
      label="Отправить"
      @click="testClick">
    </Button>
  </Form>
</template>

