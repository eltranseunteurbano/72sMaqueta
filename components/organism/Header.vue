<template>
  <header
    class="w-full flex flex-row justify-between items-evenly bg-cream p-6 box-border md:bg-"
  >
    <div
      class="max-w-screen-sm flex justify-start items-center box-border md:px-4 md:w-2/4"
    >
      <Logo class="cursor-pointer" />
      <Navigation />
    </div>

    <div
      class="max-w-screen-sm flex justify-end items-center box-border md:px-4 xl:w-2/4"
    >
      <SearchBar class="m-0 md:mr-8" />
      <UserIcon class="text-white h-full cursor-pointer hidden md:block" />
    </div>
  </header>
</template>

<script>
import Logo from '../atoms/Logo'
import SearchBar from '../molecules/Search'
import Navigation from '../molecules/Navigation'
import UserIcon from '../atoms/icons/userIcon'
export default {
  components: { Logo, SearchBar, Navigation, UserIcon },
}
</script>
