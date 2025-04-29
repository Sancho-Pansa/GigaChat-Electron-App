<script setup>
import { ref } from "vue";

const props = defineProps(["text"]);

</script>

<template>
  <div
    v-bind="text"
    class="w-5/6 rounded-xl bg-neutral-300">
  </div>
</template>