<template>
  <article
    class="w-full flex flex-col justify-center items-center p-6 box-sizing gap-8"
  >
    <nav
      class="hidden max-w-screen-xl w-full md:flex justify-start align-center"
    >
      <p
        class="HeaderSpecialBook-actived text-gray text-xl font-robotoSlab cursor-pointer hover:text-primary transition ease-in-out duration-300 mr-8"
      >
        Bestseller
      </p>
      <p
        class="text-gray text-xl font-robotoSlab cursor-pointer hover:text-primary transition ease-in-out duration-300 mr-8"
      >
        Popular
      </p>
      <p
        class="text-gray text-xl font-robotoSlab cursor-pointer hover:text-primary transition ease-in-out duration-300"
      >
        Nuevos
      </p>
    </nav>
    <div class="max-w-screen-xl grid grid-cols-1 gap-x-8 md:grid-cols-4">
      <SpecialBookCard class="hidden md:grid" />
      <SpecialBookCard class="md:col-span-2" />
      <SpecialBookCard class="hidden md:grid" />
    </div>
    <div
      class="hidden max-w-screen-xl w-full md:flex justify-center align-center"
    >
      <div
        class="HeaderSpecialBook-span-actived w-3 h-3 mr-4 bg-gray-lighter rounded-full cursor-pointer hover:bg-secondary transition ease-in-out duration-300"
      ></div>
      <div
        class="w-3 h-3 mr-4 bg-gray-lighter rounded-full cursor-pointer hover:bg-secondary transition ease-in-out duration-300"
      ></div>
      <div
        class="w-3 h-3 mr-4 bg-gray-lighter rounded-full cursor-pointer hover:bg-secondary transition ease-in-out duration-300"
      ></div>
    </div>
  </article>
</template>

<script>
import SpecialBookCard from '../molecules/SpecialBookCard'
export default {
  name: 'HeaderSpecialBooks',
  components: { SpecialBookCard },
}
</script>

<style>
.HeaderSpecialBook-actived {
  color: black !important;
  border-bottom: solid 2px #4b6099;
}

.HeaderSpecialBook-span-actived {
  background-color: #f5615f !important;
}
</style>
