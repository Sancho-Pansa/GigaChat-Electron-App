<script setup>
import { VueMarkdown } from "@crazydos/vue-markdown";
import remarkGfm from "remark-gfm";
import { computed, ref } from "vue";

const {text, speaker} = defineProps(["text", "speaker"]);

const bubbleClass = computed(() => {
  String.toString().toLowerCase
  return `speaker-${speaker.toLowerCase()}`
});
</script>

<template>
  <div
    class="w-fit max-w-5/6 px-3 py-1 rounded-lg leading-7"
    :class="bubbleClass">
    <vue-markdown :markdown="text" :remark-plugins="[remarkGfm]"/>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

  :deep(ol), :deep(ul) {
    list-style: auto;
  }

  :deep(ul) {
    list-style-position: inside;
  }

  .speaker-user {
    @apply bg-neutral-50 self-end-safe;
  }

  .speaker-error {
    @apply bg-red-400;
  }

</style>