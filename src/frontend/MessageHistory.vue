<script setup>
import MessageBubble from './MessageBubble.vue';

const messages = defineModel({ type: Object });

</script>

<template>
  <div class="grow-1 shrink basis-auto overflow-y-auto">
    <div class="flex flex-col gap-y-5 px-(--chat-window-padding)">
      <MessageBubble
        v-for="(m, key) in messages"
        v-bind:key="key"
        :text=m.text
        :speaker=m.speaker>
      </MessageBubble>
    </div>
  </div>
</template>