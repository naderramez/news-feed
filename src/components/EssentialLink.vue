<template>
  <q-item clickable>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  id: number;
  title: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  title: '',
});
</script>
