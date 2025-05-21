<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import emitter from "./event.bus";

const isReady = ref(false);
const tokensCount = ref(0);

onMounted(checkTokens);
onMounted(() => {
  emitter.on("countTokens", checkTokens);
})

onUnmounted(() => {
  emitter.off("countTokens");
})

async function checkTokens() {
  isReady.value = false;
  tokensCount.value = await window.gigaChatApi.getBalance() ?? "N/A";
  console.log(tokensCount.value);
  isReady.value = true;
}

</script>
<template>
  <footer class="text-center text-sm">
    <div v-if="isReady">
      <p>Токенов осталось: {{ tokensCount }}</p>
    </div>
    <div v-else>
      <p>Перерасчет</p>
    </div>
  </footer>
</template>