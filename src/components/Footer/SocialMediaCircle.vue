<template>
  <div class="circle-41 circle-container">
    <div class="icon-container absolute-center cursor-pointer">
      <q-icon :name="iconName" size="22px" />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  iconName: string;
  url: string;
};

defineProps<Props>();
</script>

<style lang="scss" scoped>
.circle-container {
  background-color: white;
  box-shadow: 0px 2px 20px #0000001a;
  position: relative;
}
</style>
