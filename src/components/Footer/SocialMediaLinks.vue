<template>
  <div
    class="row"
    :class="`${$q.screen.gt.lg ? 'justify-lg-start' : 'justify-center'}`"
  >
    <div class="row q-gutter-x-lg">
      <SocialMediaCircle
        v-for="icon in icons"
        :key="icon"
        :iconName="icon"
        url=""
      />
    </div>
    <h5
      class="col-12"
      :class="`${$q.screen.gt.lg ? 'text-left' : 'text-center'}`"
    >
      Discover our app
    </h5>

    <div id="store-btns-container" class="row q-gutter-x-sm">
      <a
        v-for="btn in storeButtons"
        :key="btn.id"
        href=""
        class="row items-center q-gutter-x-xs"
      >
        <img :src="btn.iconSrc" :alt="btn.secondLabel" height="10px" />
        <div class="column">
          <strong>{{ btn.firstLabel }}</strong>
          <strong>{{ btn.secondLabel }}</strong>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialMediaCircle from './SocialMediaCircle.vue';
import GOOGLE_PLAY_ICON from '/footer/google-icon.png';
import APP_STORE_ICON from '/footer/apple-icon.png';

const icons = [
  'fa-brands fa-facebook-f',
  'fa-brands fa-instagram',
  'fa-brands fa-twitter',
];

const storeButtons = [
  {
    id: 1,
    iconSrc: GOOGLE_PLAY_ICON,
    firstLabel: 'GET IT',
    secondLabel: 'GOOGLE PLAY',
  },
  {
    id: 2,
    iconSrc: APP_STORE_ICON,
    firstLabel: 'Available on',
    secondLabel: 'APPLE',
  },
];
</script>

<style lang="scss" scoped>
h5 {
  font-size: 2rem;
  color: #5e6282;
}

#store-btns-container {
  a {
    border-radius: 18px;
    background-color: #080809;
    text-decoration: none;
    color: white;
    padding: 0.5rem 1.5rem;

    strong {
      font-size: 8px;
    }
  }
}
</style>
