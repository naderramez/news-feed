<template>
  <section className="news-section">
    <div class="text-center first-title">Media</div>
    <div class="text-center second-title">Top News</div>

    <div class="row justify-center q-gutter-md">
      <FilterBtn
        text="All news"
        :filterAction="resetCategoryFilter"
        :active="!activeCategory"
      />
      <template v-if="newsCategories.length">
        <FilterBtn
          v-for="category in newsCategories"
          :key="category.id"
          :text="category.name"
          :filterAction="() => filterByCategory(category.id)"
          :active="activeCategory === category.id"
        />
      </template>
    </div>

    <div class="row q-col-gutter-md q-mt-md">
      <template v-for="(news, i) in newsItems">
        <div :key="news.id" v-if="i < 6" class="col-12 col-md-6 col-lg-4">
          <NewsCard v-bind="news" />
        </div>
      </template>
    </div>

    <div class="row justify-center q-ma-md">
      <CTAButton>View All News</CTAButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { NewsCategories, NewsItems } from 'src/pages/Home/models/newsModels';
import CTAButton from 'src/components/CTAButton.vue';
import FilterBtn from '../FilterBtn/FilterBtn.vue';
import NewsCard from 'src/pages/Home/components/NewsCard/NewsCard.vue';
import {
  getNewsItems as getNewsItemsService,
  getNewsCategories as getNewsCategoriesService,
} from 'src/pages/Home/services/newsServices';

let allNews: NewsItems = [];

const newsCategories = ref<NewsCategories>([]);
const newsItems = ref<NewsItems>([]);
const activeCategory = ref<number | null>(null);

const getNewsCategories = () => {
  getNewsCategoriesService().then((res) => {
    const categories = res.data.newsCategory;
    newsCategories.value = categories;
  });
};

const getNewsItems = () => {
  getNewsItemsService().then((res) => {
    const news = res.data.News;
    allNews = structuredClone(news);
    newsItems.value = news;
  });
};

const resetCategoryFilter = () => {
  activeCategory.value = null;
  newsItems.value = structuredClone(allNews);
};

const filterByCategory = (category: number) => {
  const filteredNews = allNews.filter(
    (news) => news.categoryID === `${category}`
  );
  console.log('filteredNews', filteredNews);
  activeCategory.value = category;
  newsItems.value = filteredNews;
  console.log(category);
};

onMounted(() => {
  getNewsCategories();
  getNewsItems();
});
</script>

<style lang="scss" scoped>
.news-section {
  padding: 2rem 4rem;
  position: relative;
  overflow: hidden;

  & .logo-photo-container {
    position: absolute;
    top: 0px;
    width: 400px;
    height: 400px;
    opacity: 0.7;
    margin-inline-end: -170px;
  }

  & .first-title {
    color: rgba(94, 98, 130, 1);
    font-size: 1.6rem;
    font-weight: bolder;
  }

  & .second-title {
    color: #5e6282;
    color: #000;
    font-weight: bolder;
    font-size: 5rem;
  }
}
</style>
