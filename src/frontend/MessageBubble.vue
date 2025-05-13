<script setup>
const {text, speaker} = defineProps(["text", "speaker"]);

</script>

<template>
  <div
    class="flex w-5/6 m-auto my-4 px-1 py-0.5 rounded-sm bg-neutral-200"
    :class="speaker === 'bot' ? 'speaker-bot' : 'speaker-human'">
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
:root {
  --my-margin-value: 5%;
}

.speaker-human {
  margin-left: var(--my-margin-value);
}

.speaker-bot {
  margin-right: var(--my-margin-value);
}
</style>