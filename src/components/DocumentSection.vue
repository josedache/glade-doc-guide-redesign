<template>
  <div class="document-section">
    <p
      :id="title | hashLink"
      :class="[
        isSub ? 'document-section__subtitle' : 'document-section__title',
      ]"
    >
      {{ title }}
    </p>
    <div :class="isSub ? '' : 'document-section__content'">
      <slot />
    </div>
    <div class="document-section__page-nav" v-if="!isSub">
      <div
        :class="[
          'document-section__page-nav__sheet',
          visible ? 'document-section__page-nav__sheet--show' : '',
        ]"
      >
        <p>ON THIS PAGE</p>
        <router-link
          v-for="link in links"
          :key="link"
          class="document-section__page-nav__link nav-link"
          :to="link | hashLink('#')"
        >
          {{ link }}
        </router-link>
      </div>
      <button class="document-section__page-nav__fab" @click="toggleVisibility">
        <span class="material-icons">{{ visible ? "close" : "menu" }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentSection",
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
    hashLink: function (value, hash = "") {
      return `${hash}${value.toLowerCase().replace(/\s/g, "-")}`;
    },
  },
};
</script>

<style lang="scss">
@use '../utils' as *;

.document-section {
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
      padding: 4px 16px;

      &--show {
        display: block;
      }
    }

    &__link {
      &.nav-link {
        padding: 0px;
      }
    }

    &__fab {
      position: fixed;
      width: 50px;
      height: 50px;
      outline: none;
      border-radius: 100px;
      border: none;
      bottom: 16px;
      right: 32px;
      box-shadow: $shadow16;
      background-color: white;
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