<script setup>
import { VueMarkdown } from "@crazydos/vue-markdown";
import remarkGfm from "remark-gfm";
import { computed, ref } from "vue";

const { text, speaker } = defineProps(["text", "speaker"]);

const bubbleClass = computed(() => {
  String.toString().toLowerCase;
  return `speaker-${speaker.toLowerCase()}`;
});
</script>

<template>
  <div class="w-fit max-w-5/6 px-3 py-1 rounded-lg leading-7" :class="bubbleClass">
    <p class="markdown">
      <vue-markdown :markdown="text" :remark-plugins="[remarkGfm]" />
    </p>
  </div>
</template>

<style scoped>
:deep(ol),
:deep(ul) {
  list-style: auto;
}

:deep(ul) {
  list-style-position: inside;
}

.speaker-user {
  background-color: var(--color-neutral-50);
  align-self: safe flex-end;
}

.speaker-error {
  background-color: var(--color-red-400);
}
</style>