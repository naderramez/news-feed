<template>
  <q-layout view="lHh Lpr lFf">
    <header>
      <AppHeader @sideMenuBtnClick="toggleLeftDrawer" />
    </header>

    <q-drawer
      v-if="$q.screen.lt.lg"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink v-for="link in links" :key="link.id" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import Footer from 'src/components/Footer/Footer.vue';
import AppHeader from 'src/components/Header/Header.vue';

const links: EssentialLinkProps[] = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'About us',
  },
  {
    id: 3,
    title: 'News',
  },
  {
    id: 4,
    title: 'Contact us',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss" scoped>
header {
  background-color: transparent;
  padding: 2rem 4rem;
}
</style>
