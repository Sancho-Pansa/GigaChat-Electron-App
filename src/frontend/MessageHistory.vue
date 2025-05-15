<script setup>
import { onMounted } from "vue";
import MessageBubble from './MessageBubble.vue';
import emitter from "./event.bus";
import { onUnmounted } from "vue";
import { useTemplateRef } from "vue";
import { nextTick } from "vue";

const messages = defineModel({ type: Object });
const overflowBlock = useTemplateRef("overflow-block");

onMounted(() => {
  emitter.on("scrollChatDown", scrollDown);
});
onUnmounted(() => {
  emitter.off("scrollChatDown");
});

function scrollDown() {
  nextTick(() => {
    overflowBlock.value.scrollTo({
      top: overflowBlock.value.scrollHeight,
      behavior: "smooth"
    });
  });
}
</script>

<template>
  <div class="grow-1 shrink basis-auto overflow-y-auto" ref="overflow-block">
    <div class="flex flex-col gap-y-5 px-(--chat-window-padding)">
      <MessageBubble v-for="(m, key) in messages" v-bind:key="key" :text=m.text :speaker=m.speaker>
      </MessageBubble>
    </div>
  </div>
</template>