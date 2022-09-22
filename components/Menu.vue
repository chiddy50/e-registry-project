<template>
  <nav class="
    tw-hidden
    lg:tw-block
  "
  :class="fontColor || 'tw-text-black'"
  >
    <div class="
    tw-py-7
    tw-px-36
    tw-flex
    tw-justify-between
    "
    :class="showBorder ? 'tw-border-b tw-border-gray-100' : '' "
    >
      <div class="
      tw-flex
      tw-items-center
      tw-gap-2
      ">
        <img
        class="tw-w-14"
        :src="require(`@/assets/img/${logo}`)"
        alt="coat_of_arms_of_nigeria"
        />
        <div class="">
          <h3 class="
          tw-text-xl
          tw-font-bold
          "
          >
            Federal Ministry of Environment
          </h3>
          <p
          class="tw-text-xs"
          >Department of Pollution Control & Environmental Health</p>
        </div>
      </div>

      <div
      class="
      tw-flex
      tw-items-center
      "
      >
        <a href="" class="tw-px-4">Sign In</a>
        <a href="" class="tw-px-4">About Us</a>
        <a href="" class="tw-px-4">Contact Us</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: ['fontColor', 'logo', 'showBorder']

}
</script>

<style>

</style>
