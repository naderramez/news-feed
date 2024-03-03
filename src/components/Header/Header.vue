<template>
  <div class="row justify-between items-center">
    <img
      :src="LOGO"
      alt="Link Development Logo"
      :height="`${$q.screen.gt.lg ? '50px' : '20px'}`"
    />

    <div class="row q-gutter-x-xl justify-between">
      <nav v-if="$q.screen.gt.lg" class="row q-gutter-x-xl items-center">
        <a v-for="link in NavBarLinks" :key="link" href="">{{ link }}</a>
      </nav>

      <div
        class="row items-center btns-container"
        :class="`${$q.screen.gt.lg ? 'q-gutter-x-xl' : 'q-gutter-x-xs'}`"
      >
        <button class="login-btn">Login</button>
        <button v-if="$q.screen.gt.lg" class="signup-btn">Sign up</button>
        <q-select borderless v-model="lang" :options="langOptions" />
        <q-btn
          v-if="$q.screen.lt.lg"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleDrawer"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LOGO from '/logo.png';
import { NavBarLinks } from 'src/constants/navBarLinks';

const emit = defineEmits(['sideMenuBtnClick']);

const toggleDrawer = () => {
  emit('sideMenuBtnClick');
};

const lang = ref('EN');

const langOptions = ['EN', 'AR'];
</script>

<style lang="scss" scoped>
nav {
  a {
    text-decoration: none;
    font-size: 1.7rem;
    color: #212832;
  }
}

.btns-container {
  font-size: 1.7rem;
  color: #212832;

  button {
    background: transparent;
    cursor: pointer;
  }

  .login-btn {
    border: none;
  }

  .signup-btn {
    border: 1px solid #212832;
    border-radius: 5px;
    padding: 1rem 2rem;
  }
}
</style>
