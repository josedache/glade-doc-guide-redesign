<template>
  <div :class="['note', variantClass.note]">
    <div class="note__title-wrapper">
      <span class="material-icons">emoji_objects</span>
      <span class="note__title-wrapper__title h6"> {{ title || "NOTE" }}</span>
    </div>
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
  padding: 16px;
  padding-top: 8px;
  margin: 16px 0;
  border-radius: 8px;

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

  &__title-wrapper {
    margin: 16px 0px;
    display: flex;
    align-items: center;

    &__title {
      margin-left: 8px;
      font-weight: bolder;
    }
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

