<template>
  <div class="relative-position item-card-container">
    <div class="item-image" :style="{ backgroundImage: `url(${imageSrc})` }">
      <div class="item-image-gradient"></div>
    </div>
    <div class="item-info-container">
      <h3 class="item-title">{{ title }}</h3>
      <div class="row items-center q-gutter-x-sm read-more-container">
        <q-icon name="arrow_right_alt" />
        <a :href="url">Read more</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TThingsWeDoItem } from './thingsWeDoItemsModel';

defineProps<TThingsWeDoItem>();
</script>

<style lang="scss" scoped>
.item-info-container {
  position: absolute;
  bottom: 35px;
  left: 25px;
  color: white;

  .item-title {
    font-weight: bold;
  }

  .read-more-container {
    visibility: hidden;
  }

  a {
    text-decoration: none;
    color: white;
  }
}

.item-image {
  width: 250px;
  height: 250px;
  z-index: 2;
  background-size: cover;

  .item-image-gradient {
    height: 100%;
    width: 100%;
    background: transparent linear-gradient(43deg, #13276b 0%, #00000000 100%)
      0% 0% no-repeat padding-box;
    opacity: 0.3;
  }
}

.item-card-container {
  margin-block: 10px;

  @media screen and (min-width: 1440px) {
    margin-block: 0;
  }

  &:hover {
    .item-image-gradient {
      opacity: 0.9;
    }

    .read-more-container {
      visibility: visible;
    }
  }
}
</style>
