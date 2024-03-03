<template>
  <div>
    <h3
      class="title"
      :class="`${$q.screen.gt.lg ? 'text-left' : 'text-center'}`"
    >
      {{ title }}
    </h3>
    <div
      class="links-container"
      :class="`${$q.screen.gt.lg ? 'text-left' : 'text-center'}`"
    >
      <a v-for="link in links" :key="link.id" :href="link.url">{{
        link.label
      }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TFooterLinksProps } from './footerModels';

defineProps<TFooterLinksProps>();
</script>

<style lang="scss" scoped>
.title {
  color: #080809;
  font-size: 2.1rem;
  font-weight: bold;
}

.links-container {
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #5e6282;
    font-size: 1.8rem;
  }
}
</style>
