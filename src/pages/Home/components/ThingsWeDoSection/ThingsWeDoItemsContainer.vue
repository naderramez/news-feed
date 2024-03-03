<template>
  <div id="items-container" class="row">
    <div class="col-12 col-lg-4 first-col">
      <ThingsWeDoItem v-bind="thingsWeDoItems[0]" />
    </div>
    <div class="col-12 col-lg-4 second-col">
      <ThingsWeDoItem v-bind="thingsWeDoItems[1]" />
      <ThingsWeDoItem v-bind="thingsWeDoItems[2]" />
    </div>
    <div class="col-12 col-lg-4">
      <ThingsWeDoItem v-bind="thingsWeDoItems[3]" />
      <ThingsWeDoItem v-bind="thingsWeDoItems[4]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThingsWeDoItem from 'src/pages/Home/components/ThingsWeDoSection/ThingsWeDoItem/ThingsWeDoItem.vue';
import { TThingsWeDoItem } from './ThingsWeDoItem/thingsWeDoItemsModel';
import TRANSFORMATION from '/things-we-do/transformation.png';
import ENVISION from '/things-we-do/envision.png';
import DYNAMICS from '/things-we-do/dynamics.png';
import CRAFTY_MIND from '/things-we-do/crafty-mind.png';
import SERVICES from '/things-we-do/services.png';

const thingsWeDoItems: TThingsWeDoItem[] = [
  {
    title: 'Transformation',
    imageSrc: TRANSFORMATION,
    url: '',
  },
  {
    title: 'Envision',
    imageSrc: ENVISION,
    url: '',
  },
  {
    title: 'Dynamics 365',
    imageSrc: DYNAMICS,
    url: '',
  },
  {
    title: 'Crafty Mind',
    imageSrc: CRAFTY_MIND,
    url: '',
  },
  {
    title: 'Services',
    imageSrc: SERVICES,
    url: '',
  },
];
</script>

<style lang="scss" scoped>
#items-container {
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
    & > div {
      display: block;
    }

    .first-col {
      margin-top: 250px;
    }

    .second-col {
      margin-top: 125px;
    }
  }
}
</style>
