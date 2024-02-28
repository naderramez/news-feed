<template>
  <div class="news-card">
    <img :src="urlToImage" :alt="title" class="new-card-image" width="100%" />

    <div class="q-pa-sm">
      <p class="card-text">{{ title }}</p>

      <div className="date-wrapper">
        <p className="date-text">
          {{ publishedDate }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NewsItem } from '../../models/newsModels';

defineProps<NewsItem>();
</script>

<style lang="scss" scoped>
.news-card {
  background-color: #ffffff;
  box-shadow: 0px 16px 26px #00000029;
  border-radius: 24px;
  height: 500px;
  // width: 200px;
  border: none;

  & .new-card-image {
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    height: 370px;
  }
  & .card-text {
    color: #5e6282;
    font-size: 1.7rem;
    font-weight: bold;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  & .card-text:hover {
    color: #13beff;
    border-bottom: 1px solid 13beff;
    cursor: pointer;
  }
  & .date-wrapper {
    display: flex;

    & .date-icon {
      color: #13beff;
      font-size: 25px;
    }
    & .date-text {
      color: #707070;
      font-size: 18px;
      margin-inline-start: 10px;
    }
  }

  & .card-options {
    justify-content: space-between;
  }

  & .card-options .icon {
    margin-inline-start: 5px;
    cursor: pointer;
  }
}
</style>
