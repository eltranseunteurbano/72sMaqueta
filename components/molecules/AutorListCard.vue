<template>
  <div
    class="cursor-pointer w-16 flex flex-col justify-start items-center md:flex-row md:w-auto first:ml-6 last:pr-6 md:first:ml-0 md:last:pr-0"
  >
    <div class="w-14 h-14 rounded-full bg-secondary mb-2 md:mb-0 md:mr-2" />
    <div class="flex flex-col justify-between items-start md:h-full">
      <p class="text-center text-black leading-none md:mb-2 md:text-left">
        {{ author.name }}
      </p>
      <Rating class="hidden md:flex" />
    </div>
  </div>
</template>

<script>
import Rating from './Rating'
export default {
  name: 'AutorListCard',
  components: { Rating },
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
