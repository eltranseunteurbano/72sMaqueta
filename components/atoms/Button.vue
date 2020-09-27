<template>
  <button
    class="w-full bg-primary hover:bg-primary-dark transition ease-in-out duration-300 text-white h-10 rounded-md font-medium"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>
