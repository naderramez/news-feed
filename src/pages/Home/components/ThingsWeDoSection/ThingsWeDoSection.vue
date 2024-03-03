<template>
  <section id="things-we-do-section" class="row">
    <img id="things-we-do-img" :src="THINGS_WE_DO" alt="things we do" />
    <div class="row col-12 col-lg-8 relative-position q-gutter-y-lg">
      <ThingsWeDoBriefCard />
      <ThingsWeDoItemsContainer class="things-we-do-items-container" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ThingsWeDoBriefCard from './ThingsWeDoBriefCard.vue';
import ThingsWeDoItemsContainer from './ThingsWeDoItemsContainer.vue';
import THINGS_WE_DO from '/things-we-do/things-we-do.png';
</script>

<style lang="scss" scoped>
#things-we-do-section {
  padding-top: 11rem;
  padding-bottom: 13.6rem;
  background-color: #efefef;
  position: relative;

  @media screen and (min-width: 1440px) {
    direction: rtl;

    .things-we-do-items-container {
      position: absolute;
      left: 0;
      direction: ltr;
      transform: translate(-66.66%, -30px);
    }

    #things-we-do-img {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
