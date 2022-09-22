<template>
  <div class="color">
    <Menu :fontColor="'tw-text-white'" logo="coat_of_arms_of_nigeria_white.svg" :showBorder="false" />

    <Nuxt />
  </div>
</template>

<script>
export default {
  name:'home-gradient'
}
</script>

<style >
.color {
  background: linear-gradient(279.92deg, #097388 78.36%, #50C18D 112.5%);
}
</style>

