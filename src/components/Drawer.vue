<template>
  <div :class="['drawer', visible ? 'drawer--show' : '']" @click.capture="onClose">
    <!-- <div class="drawer__scrim" @click="onClose" /> -->

    <router-link to="#" class="drawer__item"> Home </router-link>
    <router-link to="#" class="drawer__item"> Guide </router-link>
    <router-link to="#" class="drawer__item"> Api Reference </router-link>
    <hr />
    <router-link to="/account-setup" class="drawer__item"> Account Setup </router-link>
    <router-link to="/prerequisites-requirements" class="drawer__item">
      Prerequisites / Requirements
    </router-link>
    <router-link to="/glade-inline-checkout" class="drawer__item">
      Glade Inline Checkout
    </router-link>
    <router-link to="/verify-transactions" class="drawer__item"> Verify Transactions </router-link>
    <router-link to="/refund-transactions" class="drawer__item"> Refund Transactions </router-link>
    <router-link to="/disputes" class="drawer__item"> Disputes </router-link>
    <router-link to="/settlements" class="drawer__item"> Settlements </router-link>
    <router-link to="/questions" class="drawer__item"> Questions? </router-link>
  </div>
</template>

<script>
export default {
  props: ["visible", "onClose"],
  data: function() {
    return {
    }
  }
};
</script>

<style lang="scss">
@use '../utils' as *;

$width: 250px;

.drawer {
  padding: 16px 0px;
  width: $width;
  background-color: white;
  position: fixed;
  top: 0;
  height: 100%;
  transform: translateX(-$width);
  z-index: $z-index-drawer;

  &__scrim {
    background-color: black;
    position: fixed;
    /* left: 0;
    right: 0; */
    top: 0;
    width: 100%;
    height: 100%;
    /* bottom: 0; */
  }

  &--show {
    transform: translateX(0);
  }

  &__item {
    @extend .subtitle1;
    font-weight: bold;
    display: block;
    text-decoration: none;
    color: $primary-contrastText;
    padding: 8px;
  }
}

@media screen and (min-width: $breakpoint-sm + px) {
  .drawer {
    /* position: static; */
    transform: translateX(0);
    z-index: 0;
    margin-top: 56px;
  }
}
</style>