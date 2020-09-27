<template>
  <div class="flex justify-start items-center h-10 border-gray">
    <span
      class="block md:hidden z-10 leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3"
    >
      <SearchIcon class="text-gray" />
    </span>
    <input
      type="text"
      placeholder="Encuentra tu libro favorito"
      class="max-w-5xl w-full h-full px-3 py-3 pl-10 md:pl-3 relative border-2 bg-gray-lighter border-gray placeholder-gray font-roboto transition ease-in-out duration-200 rounded-md focus:bg-white focus:border-gray outline-none md:bg-white mr-0 md:mr-3"
    />

    <button
      class="hidden md:flex w-16 h-full p-2 box-border bg-secondary md:justify-center md:items-center transition ease-in-out duration-400 focus:outline-none hover:bg-secondary-dark rounded-md"
    >
      <SearchIcon class="text-white h-full" />
    </button>
  </div>
</template>

<script>
import SearchIcon from '../atoms/icons/searchIcon'
export default {
  components: { SearchIcon },
}
</script>
