<template>
  <div>
    <div class="drawer-scrim" v-show="visible" @click="onClose" />
    <div :class="['drawer', visible ? 'drawer--show' : '']">
      <div class="drawer__header">
        <button class="icon-button" @click="onClose">
          <i class="material-icons">arrow_back</i>
        </button>
        <img class="logo" src="../assets/Logo.png" alt="Glade" />
      </div>

      <div class="drawer__links">
        <div
          @click="onClose"
          class="drawer__links__link"
          v-for="{ name, path, children } in routes"
          :key="name"
        >
          <router-link :to="path" class="nav-link">
            <span>{{ name.toUpperCase() }}</span>
          </router-link>
          <div class="drawer__links__link__drop-down" v-if="children">
            <router-link
              v-for="{ name: subName, path: subPath } in children"
              :key="subName"
              :to="`${path}/${subPath}`"
              class="nav-link"
            >
              <span>{{ subName }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ROUTES } from "../router";

export default {
  name: "Drawer",
  props: ["visible", "onClose"],
  data: function () {
    return {
      routes: ROUTES,
    };
  },
};
</script>

<style lang="scss">
@use '../utils' as *;

$width: 250px;

.drawer {
  width: $width;
  background-color: white;
  position: fixed;
  top: 0;
  height: 100%;
  transform: translateX(-$width);
  z-index: $z-index-drawer;
  transition: transform 0.2s;
  box-shadow: $shadow16;
  overflow-y: auto;

  &__header {
    display: flex;
    align-items: center;
    height: $app-bar-height + px;
    padding-left: 16px;
    border-bottom: 1px solid $grey-light;
    position: sticky;
    background-color: white;
    top: 0;
  }

  &-scrim {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    /* left: 0;
    right: 0; */
    top: 0;
    width: 100%;
    height: 100%;
    /* bottom: 0; */
    z-index: $z-index-drawer;
  }

  &--show {
    transform: translateX(0);
  }

  &__links {
    padding: 16px;
    padding-left: 0px;

    &__link {
      & > .nav-link {
        font-weight: bolder;
      }

      &__drop-down {
        margin-left: 16px;
      }
    }
  }

  @media screen and (min-width: $breakpoint-sm + px) {
    transform: translateX(0);
    z-index: 0;
    margin-top: 56px;
    box-shadow: none;

    &-scrim {
      display: none;
    }

    &__header {
      display: none;
    }
  }
}
</style>