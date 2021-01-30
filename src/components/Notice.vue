<template>
  <div :class="['note', variantClass.note]">
    <div :class="['note__indicator', variantClass.indicator]" />
    <span class="note__title h6">{{ title || "NOTE" }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["title", "variant"],
  computed: {
    variantClass: function () {
      const note = `note--${this.variant || "success"}`;
      const indicator = note + "__indicator";
      return { note, indicator };
    },
  },
};
</script>

<style lang="scss">
@use '../utils' as *;

$indicator-width: 8px;

.note {
  position: relative;
  padding: 16px $indicator-width * 3;
  margin: 16px 0;

  $note: &;

  &--success {
    background-color: $success-light;
    &__indicator {
      background-color: $success-dark;
    }
  }
  &--warning {
    background-color: $warning-main;
    &__indicator {
      background-color: $warning-dark;
    }
  }
  &--info {
    background-color: $info-main;
    &__indicator {
      background-color: $info-dark;
    }
  }
  &--error {
    background-color: $error-main;
    &__indicator {
      background-color: $error-dark;
    }
  }

  &__title {
    font-weight: bolder;
    display: block;
    margin: 16px 0px;
  }

  &__indicator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: $indicator-width;
  }
}
</style>

