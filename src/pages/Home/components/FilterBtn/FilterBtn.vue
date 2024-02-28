<template>
  <button class="q-px-md q-py-sm" :onclick="filterAction">{{ text }}</button>
</template>

<script setup lang="ts">
import { FilterBtnProps } from './FilterBtnModels';

defineProps<FilterBtnProps>();
</script>

<style lang="scss" scoped>
button {
  color: rgba(15, 82, 110, 1);
  background: rgba(227, 227, 227, 1) 0% 0% no-repeat padding-box;
  border-radius: 10px;
  border-color: transparent;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
    color: rgba(15, 82, 110, 1);
    background: #fff;
    border-color: #0eceff;
  }

  &:active {
    color: rgba(15, 82, 110, 1);
    background: #fff;
    border-color: #0eceff;
    box-shadow: none;
    outline: none;
  }

  &:focus {
    color: rgba(15, 82, 110, 1);
    background: #fff;
    border-color: #0eceff;
    box-shadow: none;
    outline: none;
  }

  &[active='true'] {
    color: #fff;
    background: rgba(14, 206, 255, 1) 0% 0% no-repeat padding-box;
    border-radius: 10px;
    border-color: transparent;
    box-shadow: none;
    outline: none;
  }
}

button-active {
  color: #fff;
  background: rgba(14, 206, 255, 1) 0% 0% no-repeat padding-box;
  border-radius: 10px;
  border-color: transparent;
  width: 100px;
  box-shadow: none;
  outline: none;
}
</style>
