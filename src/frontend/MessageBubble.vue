<script setup>
import { VueMarkdown } from "@crazydos/vue-markdown";
import remarkGfm from "remark-gfm";
import { computed, ref } from "vue";

const {text, speaker} = defineProps(["text", "speaker"]);
const MARGIN_VALUE = ref("5%");

const bubbleClass = computed(() => {
  String.toString().toLowerCase
  return `speaker-${speaker.toLowerCase()}`
});

</script>

<template>
  <div
    class="w-fit max-w-5/6 m-auto my-4 px-3 py-1 rounded-lg leading-7 list-disc list-inside"
    :class="bubbleClass">
    <vue-markdown :markdown="text" :remark-plugins="[remarkGfm]"/>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.speaker-user {
  margin-right: v-bind("MARGIN_VALUE");
  text-align: right;
}

.speaker-bot, .speaker-error {
  margin-left: v-bind("MARGIN_VALUE");
}

.speaker-user {
  @apply bg-neutral-50;
}

.speaker-error {
  @apply bg-red-400;
}
</style>