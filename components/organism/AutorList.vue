<template>
  <aside class="w-full md:sticky md:top-0 md:px-6 box-border md:w-60">
    <article
      class="flex flex-no-wrap justify-between items-center mb-4 px-6 box-border md:px-0"
    >
      <h1 class="font-robotoSlab text-xl">Autores</h1>
      <p
        class="font-roboto text-secondary hover:text-secondary-dark cursor-pointer ease-in-out md:hidden"
      >
        Ver todos
      </p>
    </article>
    <article
      class="w-full overflow-x-auto flex justify-start items-center gap-6 pb-4 mb-4 box-border md:w-full md:flex-col md:justify-start md:items-start"
    >
      <AutorListCard
        v-for="author in authors"
        :key="author.id"
        :author="author"
      />
    </article>
    <Button class="hidden md:block">Ver todos</Button>
  </aside>
</template>

<script>
import Button from '../atoms/Button'
import AutorListCard from '../molecules/AutorListCard'
export default {
  name: 'AutorsList',
  components: { AutorListCard, Button },
  data() {
    return {
      authors: [
        {
          id: 0,
          name: 'Ray García',
          stars: 4,
          img: '../../assets/img/autors/Ray.png',
        },
        {
          id: 1,
          name: 'Emily Robbins',
          stars: 4,
          img: '../../assets/img/autors/Emily.png',
        },
        {
          id: 2,
          name: 'Rachel Devenish',
          stars: 4,
          img: '../../assets/img/autors/Rachel.png',
        },
        {
          id: 3,
          name: 'Philip Vasquez',
          stars: 4,
          img: '../../assets/img/autors/Philip.png',
        },
        {
          id: 4,
          name: 'Jk Rowling',
          stars: 4,
          img: '../../assets/img/autors/Jk Rowling.png',
        },
        {
          id: 5,
          name: 'J.R.R. Tolkien',
          stars: 4,
          img: '../../assets/img/autors/Tolkien.png',
        },
        {
          id: 6,
          name: 'Ray García',
          stars: 4,
          img: '../../assets/img/autors/Ray.png',
        },
        {
          id: 7,
          name: 'Emily Robbins',
          stars: 4,
          img: '../../assets/img/autors/Emily.png',
        },
        {
          id: 8,
          name: 'Rachel Devenish',
          stars: 4,
          img: '../../assets/img/autors/Rachel.png',
        },
        {
          id: 9,
          name: 'Philip Vasquez',
          stars: 4,
          img: '../../assets/img/autors/Philip.png',
        },
        {
          id: 10,
          name: 'Jk Rowling',
          stars: 4,
          img: '../../assets/img/autors/Jk Rowling.png',
        },
        {
          id: 11,
          name: 'J.R.R. Tolkien',
          stars: 4,
          img: '../../assets/img/autors/Tolkien.png',
        },
      ],
    }
  },
}
</script>
