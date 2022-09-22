<template>
  <div class="
  tw-flex
  tw-items-center
  tw-mb-3
  tw-flex-col
  lg:tw-flex-row
  ">
    <div class="
    tw-mb-2
    tw-w-full
    lg:tw-mb-0
    lg:tw-w-1/5
    ">
      <span class="">{{ label }}</span>
    </div>
    <input type="text"
    :placeholder="value"
    class="
    tw-px-7
    tw-py-3
    tw-text-sm
    tw-rounded-lg
    tw-w-full
    lg:tw-w-1/2
    tw-bg-gray-200
    tw-border-none
    focus:tw-outline-none"
    />
  </div>
</template>

<script>
export default {
  name: 'InputItem',
  props: ['label', 'value']
}
</script>

<style>

</style>
