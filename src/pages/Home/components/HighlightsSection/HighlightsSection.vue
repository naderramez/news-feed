<template>
  <section id="highlights-section" class="relative-position">
    <div v-if="$q.screen.gt.lg" id="decore"></div>
    <div v-if="highlights.length" class="q-pa-md">
      <q-carousel
        v-model="activeSlide"
        swipeable
        animated
        :control-type="controlType"
        control-color="purple"
        navigation
        padding
        class="text-purple rounded-borders"
      >
        <q-carousel-slide
          v-for="highlight in highlights"
          :key="highlight.id"
          :name="highlight.title"
        >
          <HighlightBanner
            class="q-mb-lg q-mb-lg-none"
            :highlightItem="highlight"
          />
        </q-carousel-slide>

        <template #navigation-icon="{ active, index }">
          <div
            class="row items-center navigation-icon-container"
            :active="active"
            @click="() => activateSlide(highlights[index].title)"
          >
            <div
              :class="`${active ? 'circle-62' : 'circle-52'}`"
              class="cursor-pointer q-mx-xs"
              :style="{ backgroundColor: `#${highlights[index].colorCode}` }"
            ></div>
            <div
              v-if="index < highlights.length - 1"
              class="navigation-icon-dots"
            >
              .......
            </div>
          </div>
          <!-- <img :src="DOTS_LINE" alt="dots-line" width="50px" /> -->
        </template>
      </q-carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getHighlights as getHighlightsService } from '../../services/newsServices';
import { HighlightItems } from '../../models/newsModels';
import HighlightBanner from './HighlightBanner.vue';

const highlights = ref<HighlightItems>([]);
const activeSlide = ref<string>('');

const controlType = 'flat';

const activateSlide = (slideName: string) => {
  activeSlide.value = slideName;
};

const getHighlights = () => {
  getHighlightsService().then((res) => {
    const data = res.data;
    data.slides.sort((a, b) => a.order - b.order);
    activeSlide.value = data.slides[0].title;
    highlights.value = data.slides;
  });
};

onMounted(() => {
  getHighlights();
});
</script>

<style lang="scss">
#highlights-section {
  overflow: hidden;
  .q-carousel {
    height: auto;

    .q-panel {
      overflow-x: hidden;
    }

    .q-carousel__navigation-inner {
      justify-content: start;
    }

    .navigation-icon {
      &-container {
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }

        &[active='true'] {
          opacity: 1;
        }
      }

      &-dots {
        font-size: 40px;
        color: #353535;
        transform: translateY(-10%);
      }
    }
  }

  #decore {
    background-image: url('/banner-section/Decore.png');
    width: 823px;
    height: 912px;
    position: absolute;
    top: -50%;
    right: -10%;
    // transform: translate(-50%, 50%);
    z-index: 1;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;

    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
}
</style>
