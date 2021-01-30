<template>
  <div class="doc-section">
    <p
      :id="title | hashLink"
      :class="[isSub ? 'doc-section__subtitle' : 'doc-section__title']"
    >
      {{ title }}
    </p>
    <div :class="isSub ? '' : 'doc-section__content'">
      <slot />
    </div>
    <div class="doc-section__page-nav" v-if="!isSub">
      <div
        :class="[
          'doc-section__page-nav__sheet',
          visible ? 'doc-section__page-nav__sheet--show' : '',
        ]"
      >
        <p>ON THIS PAGE</p>
        <ul>
          <li v-for="link in links" :key="link">
            <router-link class="" :to="link | hashLink">
              {{ link }}
            </router-link>
          </li>
        </ul>
      </div>
      <button class="doc-section__page-nav__fab" @click="toggleVisibility">
        <span class="material-icons">{{ visible ? "close" : "menu" }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideSection",
  props: ["title", "isSub", "links"],
  data: function () {
    return { visible: false };
  },
  methods: {
    toggleVisibility: function () {
      this.visible = !this.visible;
    },
  },
  filters: {
    hashLink: function (value) {
      return `#${value.toLowerCase().replace(/\s/g, "-")}`;
    },
  },
};
</script>

<style lang="scss">
@use '../utils' as *;

.doc-section {
  &__title {
    @extend .h3;
    font-weight: bolder;
  }

  &__subtitle {
    @extend .h4;
    font-weight: bolder;
  }

  &__content {
    @media screen and (min-width: $breakpoint-sm + px) {
      margin-right: $drawer-width + px;
    }
  }

  &__page-nav {
    z-index: $z-index-drawer;

    &__sheet {
      margin-top: 56px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: white;
      display: none;

      &--show {
        display: block;
      }
    }

    &__fab {
      position: fixed;
      width: 40px;
      height: 40px;
      outline: none;
      border-radius: 100;
      bottom: 16px;
      right: 32px;
      box-shadow: $shadow16;
    }

    @media screen and (min-width: $breakpoint-sm + px) {
      &__sheet {
        width: $drawer-width + px;
        display: block;
        left: initial;
        right: 0;
      }
      &__fab {
        display: none;
      }
    }
  }
}
</style>