<template>
  <div
    class="w-44 first:ml-6 last:mr-6 md:first:ml-0 bookCard cursor-pointer transition ease-in-out duration-300"
  >
    <div class="w-44 h-80 rounded-md mb-4 relative overflow-hidden">
      <div class="w-full h-full relative">
        <div class="w-full h-full bg-primary" />
        <div
          class="bookCard-shadow hidden w-full h-full md:flex flex-col justify-end absolute z-2 top-0 p-6 box-border"
        >
          <p
            class="font-medium font-roboto text-xl text-cream text-center leading-none mb-2 hidden md:block z-5"
          >
            {{ book.name }}
          </p>
          <p
            class="truncate font-roboto text-cream text-center leading-none mb-2 hidden md:block z-5"
          >
            {{ book.author }}
          </p>
        </div>
      </div>
      <Progress class="absolute z-1 bottom-0" />
    </div>
    <p
      class="truncate font-medium font-roboto text-xl text-center leading-none mb-2 md:hidden"
    >
      {{ book.name }}
    </p>
    <p class="truncate font-roboto text-center leading-none mb-2 md:hidden">
      {{ book.author }}
    </p>
    <Button
      class="bookCard-add block md:opacity-0 transition ease-in-out duration-300"
      >Guardar</Button
    >
  </div>
</template>

<script>
import Button from '../atoms/Button'
import Progress from '../atoms/Progress'
export default {
  name: 'BookCard',
  components: { Progress, Button },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.bookCard-shadow {
  background: #0d0d0d00;
}

.bookCard:hover .bookCard-shadow {
  background: #0d0d0d70;
}

.bookCard-shadow p {
  opacity: 0;
  transition: all 0.4s;
  transform: translateY(1rem);
}

.bookCard:hover .bookCard-shadow p {
  opacity: 1;
  transform: translateY(0);
}
.bookCard:hover > .bookCard-add {
  transform: translateY(0);
  opacity: 1;
}

@media only screen and (min-width: 768px) {
  .bookCard-add {
    transform: translateY(-1rem);
  }
}
</style>
