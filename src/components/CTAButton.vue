<template>
  <button @click="onClick" className="cta-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['btnClick']);

const onClick = (e: MouseEvent) => {
  emit('btnClick', e);
};
</script>

<style scoped></style>
