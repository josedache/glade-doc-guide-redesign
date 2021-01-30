<template>
  <div class="app">
    <app-bar :toggleDrawer="toggleDrawer" />
    <drawer :visible="isDrawer" :onClose="toggleDrawer" />
    <main class="app__main">
      <div class="app__main__content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import Drawer from "./components/Drawer.vue";

export default {
  name: "App",
  data: function () {
    return {
      isDrawer: false,
    };
  },
  methods: {
    toggleDrawer: function () {
      this.isDrawer = !this.isDrawer;
    },
  },
  components: {
    AppBar,
    Drawer,
  },
};
</script>

<style lang="scss">
@use 'utils' as *;

html,
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.router-link-active {
  color: $primary-main
}

.app {
  @extend .body1;
  font-family: Source Sans Pro, Lucida Grande, sans-serif;
  overflow: hidden;
  display: flex;

  &__main {
    margin-top: 56px;
    flex: 1;

    @media screen and (min-width: $breakpoint-md + px) {
      margin-left: $drawer-width + px;
      &__content {
        max-width: $breakpoint-md + px;
        margin: auto;
      }
    }

    &__content {
      padding: 16px;
    }
  }
}

.spacer {
  flex: 1;
}

.logo {
  width: 150px;
}

.section-title {
  font-size: 3rem;
  line-height: 1.167;
  letter-spacing: 0em;
  font-weight: bolder;
}

.section-subtitle {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  font-weight: bolder;
}
</style>
