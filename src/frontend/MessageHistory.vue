<script setup>
import MessageBubble from './MessageBubble.vue';

const messages = defineModel({ type: Object });

</script>

<template>
  <div class="grow-1">
    <MessageBubble
      v-for="(m, key) in messages"
      v-bind:key="key"
      :text=m.text
      :speaker=m.speaker>
    </MessageBubble>
  </div>
</template>