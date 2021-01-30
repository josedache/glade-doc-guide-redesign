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
@use 'utils' as utils;

html,
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.nav-link {
  @extend .body1;
  display: block;
  text-decoration: none;
  color: utils.$primary-contrastText;
  padding: 12px 16px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  &:hover {
    color: utils.$grey-main;
  }
}

.content-link {
  text-decoration: none;
  color: utils.$primary-main;
}

.router-link-active {
  color: utils.$primary-main;
}

.app {
  @extend .body1;
  font-family: Source Sans Pro, Lucida Grande, sans-serif;
  overflow: hidden;
  /* display: flex; */

  &__main {
    margin-top: 56px;

    @media screen and (min-width: utils.$breakpoint-md + px) {
      margin-left: utils.$drawer-width + px;
      &__content {
        max-width: utils.$breakpoint-md + px;
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

.icon-button {
  background-color: transparent;
  border-width: 0px;
  color: utils.$grey-main;
}
.code {
  color: utils.$primary-dark;
  padding: 0.25rem 0.5rem;
  margin: 0;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}
</style>
