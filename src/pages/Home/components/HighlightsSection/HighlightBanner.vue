<template>
  <div class="row">
    <div class="col-12 col-md-5">
      <h4 :style="{ color: `#${highlightItem.colorCode}`, fontWeight: 'bold' }">
        {{ highlightItem.category }}
      </h4>
      <div class="relative-position">
        <h2 class="highlight-title">{{ highlightItem.title }}</h2>
        <div class="dash-icon-container">
          <DashIcon :fillColor="`#${highlightItem.colorCode}`" />
        </div>
      </div>
      <p class="highlight-brief">{{ highlightItem.brief }}</p>

      <div class="row q-gutter-md">
        <CTAButton>Find out more</CTAButton>
        <div class="row items-center q-gutter-x-md">
          <div
            style="background-color: #e72228"
            class="circle-52 relative-position"
          >
            <q-icon
              name="play_arrow"
              class="absolute-center"
              color="white"
              size="20px"
            />
          </div>

          <p style="color: #686d77" class="q-my-auto">Play Demo</p>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-7">
      <img
        :src="HIGHLIGHT_IMAGE_URL"
        :alt="highlightItem.title"
        class="full-width"
        style="max-width: 666px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CTAButton from 'src/components/CTAButton.vue';
import HIGHLIGHT_IMAGE_URL from '/banner-section/highlight-img.png';
import { HighlightBannerProps } from '../../models/newsModels';
import DashIcon from './DashIcon.vue';

defineProps<HighlightBannerProps>();
</script>

<style lang="scss" scoped>
.highlight {
  &-title {
    position: relative;
    color: #181e4b;
    font-size: 7.5rem;
    line-height: 7.5rem;
    font-weight: bold;
    z-index: 1;
  }

  &-brief {
    color: #5e6282;
    font-size: 1.6rem;
  }
}

.dash-icon-container {
  position: absolute;
  top: 3rem;
  left: 50%;
}
</style>
