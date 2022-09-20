<template>
  <div class="
    tw-border-b
    tw-border-light-green
    tw-py-5
    ">
    <div @click="toggleBody"
    class="
    tw-flex
    tw-justify-between
    tw-items-center
    tw-cursor-pointer
    tw-mb-2
    ">
      <h3 class="
      tw-text-lg
      tw-font-bold
      ">
      {{ item.question }}
      </h3>
      <i class='bx bx-chevron-down tw-text-3xl'></i>
    </div>
    <p v-if="open === true" class="tw-text-sm tw-w-4/5">
      {{ item.answer }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  data() {
    return {
      open: this.item.open
    }
  },
  props: ['item'],
  methods: {
    toggleBody(){
      this.open = !this.open
    }
  }
}
</script>

<style>

</style>
