<template>
  <div class="app-bar">
    <button class="app-bar__hamburger" @click="toggleDrawer">
      <i class="material-icons">menu</i>
    </button>
    <img class="logo" src="../assets/Logo.png" alt="Glade" />
    <div class="spacer" />
    <div class="app-bar__action-wrapper">
      <div class="app-bar__action-wrapper__search-box">
        <i class="material-icons">search</i>
        <input type="text" class="app-bar__action-wrapper__search-box__input" />
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
  border-bottom: 1px solid gray;
  height: 56px;
  z-index: $z-index-app-bar;

  &__hamburger {
    background-color: transparent;
    border-width: 0px;
  }

  &__action-wrapper {
    display: flex;
    align-items: center;

    &__search-box {
      display: flex;
      align-items: center;
      padding: 8px;
      border: 0px solid lightgray;
      border-radius: 20px;

      &:focus-within {
        border-color: $primary-main;
      }

      &__input {
        outline: none;
        border: 0;
        position: relative;
        width: 0;
        left: -10px;
        /* z-index: -1; */

        &:focus {
          width: 100px;
        }
      }
    }

    /* 2px solid #06bcff */
  }
}
</style>