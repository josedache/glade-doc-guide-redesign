<template>
  <div class="app-bar">
    <button class="app-bar__hamburger icon-button" @click="toggleDrawer">
      <i class="material-icons">menu</i>
    </button>
    <img class="logo" src="../assets/Logo.png" alt="Glade" />
    <div class="app-bar__spacer" />
    <div class="app-bar__action-wrapper">
      <div class="app-bar__action-wrapper__search-box">
        <i class="material-icons">search</i>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  props: ["toggleDrawer"],
};
</script>

<style lang="scss">
@use '../utils' as *;

.app-bar {
  display: flex;
  align-items: center;
  padding: 8px;
  overflow: hidden;
  position: fixed;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid $grey-light;
  height: $app-bar-height + px;
  z-index: $z-index-app-bar;

  &__spacer {
    flex: 1;
  }

  &__action-wrapper {
    display: flex;
    align-items: center;

    &__search-box {
      display: flex;
      align-items: center;
      padding: 4px 8px;
      border: 0px solid $grey-light;
      border-radius: 20px;

      &:focus-within {
        border-width: 1px;
        border-color: $primary-main;
      }

      & i {
        color: $grey-main;
      }

      & input {
        outline: none;
        border: 0;
        position: relative;
        width: 0;
        left: -16px;
        background-color: transparent;
        transition: width 0.2s;

        &:focus {
          width: 100px;
          left: 0px;
        }
      }
    }
  }

  @media screen and (min-width: $breakpoint-sm + px) {
    &__hamburger {
      display: none;
    }
    &__action-wrapper {
      padding: 0px 16px;

      &__search-box {

        border-width: 1px;

        & input {
          position: static;
          width: 100px;

          &:focus {
            width: 200px;
          }
        }
      }
    }
  }
}
</style>