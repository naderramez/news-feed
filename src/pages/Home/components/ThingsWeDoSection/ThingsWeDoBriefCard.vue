<template>
  <div class="card-container row">
    <div class="row col-12 col-lg-9 q-gutter-y-lg">
      <h2 class="card-head">We Deliver Digital Productivity</h2>
      <p class="card-paragraph">
        We craft technology solutions that digitally bond and transform the
        productivity of our customers and their citizens, workers, consumers and
        partners.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.card {
  &-container {
    background-color: #f215b6;
    padding-top: 5.7rem;
    padding-inline: 6.9rem;
    padding-bottom: 9rem;
    direction: ltr;

    @media screen and (min-width: 1440px) {
      direction: rtl;
    }
  }

  &-head {
    color: #253776;
    font-size: 5.5rem;
    line-height: 5.5rem;
    font-weight: bold;
  }

  &-paragraph {
    font-size: 2.8rem;
    color: white;
  }
}
</style>
