<template>
  <transition name="fade">
    <div class="overlay" v-show="opened"/>
  </transition>
</template>

<script>
export default {
  name: "Overlay",
  props: {
    opened: { type: Boolean, default: false }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.overlay {
  background: rgba($header-color, 0.9);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: $overlay-z-index;
  display: block;
  transition-duration: 0.25s;
}
</style>
