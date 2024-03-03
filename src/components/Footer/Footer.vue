<template>
  <footer
    id="footer"
    :class="`${$q.screen.gt.lg ? 'row' : 'column q-col-gutter-y-lg'}`"
  >
    <div class="col-3">
      <div
        class="column q-gutter-y-md"
        :class="`${$q.screen.gt.lg ? ' items-lg-start' : 'items-center'}`"
      >
        <img :src="LOGO" alt="Link Development Logo" width="157px" />
        <p>
          We make technology produce productive, adaptive and sustainable
          business experiences.
        </p>
      </div>
    </div>

    <FooterLinks class="col-2" v-bind="companyLinks" />
    <FooterLinks class="col-2" v-bind="contactLinks" />
    <FooterLinks class="col-2" v-bind="mediaLinks" />

    <SocialMediaLinks class="col-3" />
  </footer>
</template>

<script setup lang="ts">
import FooterLinks from './FooterLinks.vue';
import SocialMediaLinks from './SocialMediaLinks.vue';
import { TFooterLinksProps } from './footerModels';
import LOGO from '/logo.png';

const companyLinks: TFooterLinksProps = {
  title: 'Company',
  links: [
    {
      id: 1,
      label: 'About',
      url: '',
    },
    {
      id: 2,
      label: 'Careers',
      url: '',
    },
    {
      id: 3,
      label: 'Mobile',
      url: '',
    },
  ],
};

const contactLinks: TFooterLinksProps = {
  title: 'Contact',
  links: [
    {
      id: 1,
      label: 'Help/FAQ',
      url: '',
    },
    {
      id: 2,
      label: 'Press',
      url: '',
    },
    {
      id: 3,
      label: 'Affilates',
      url: '',
    },
  ],
};

const mediaLinks: TFooterLinksProps = {
  title: 'Media',
  links: [
    {
      id: 1,
      label: 'News',
      url: '',
    },
    {
      id: 2,
      label: 'Photo',
      url: '',
    },
    {
      id: 3,
      label: 'Video',
      url: '',
    },
  ],
};
</script>

<style lang="scss" scoped>
#footer {
  padding-inline: 4rem;
  padding-block: 2rem;
}
</style>
