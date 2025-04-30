<script setup>
const props = defineProps(["text"]);

</script>

<template>
  <div class="flex w-5/6 m-auto my-4 px-1 py-0.5 rounded-sm bg-neutral-200">
    <span><slot></slot></span>
  </div>
</template>