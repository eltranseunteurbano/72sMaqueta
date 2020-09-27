<template>
  <section class="w-full mb-8">
    <article
      class="flex flex-no-wrap justify-between items-center mb-4 px-6 box-border md:px-0 md:pr-6"
    >
      <h1 class="font-robotoSlab text-xl">{{ title }}</h1>
      <p
        class="font-roboto text-secondary hover:text-secondary-dark cursor-pointer ease-in-out"
      >
        Ver todos
      </p>
    </article>
    <article class="w-full overflow-x-auto">
      <div
        class="w-auto flex flex-no-wrap justify-start item-start gap-5 pb-4 box-border"
      >
        <BookCard v-for="book in books" :key="book.id" :book="book" />
      </div>
    </article>
  </section>
</template>

<script>
import BookCard from '../molecules/BookCard'
export default {
  name: 'BookList',
  components: { BookCard },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      books: [
        {
          id: 0,
          name: 'La única verdad',
          author: 'Ray García',
          img: '',
          progress: 80,
        },
        {
          id: 1,
          name: 'El señor de los anillos',
          author: 'J.R.R. Tolkien',
          img: '',
          progress: 40,
        },
        {
          id: 2,
          name: 'Animales fantasticos',
          author: 'JK Rowling',
          img: '',
          progress: 90,
        },
        {
          id: 3,
          name: 'The world of abstract art',
          author: 'Emily Robbins',
          img: '',
          progress: 23,
        },
        {
          id: 4,
          name: 'Cielo rojo',
          author: 'David Lozano Garbala',
          img: '',
          progress: 47,
        },
        {
          id: 5,
          name: 'Caballo de troya',
          author: 'J.J. Benítez',
          img: '',
          progress: 30,
        },
        {
          id: 6,
          name: 'World whisperer',
          author: 'Rachelk Devenish',
          img: '',
          progress: 75,
        },
        {
          id: 7,
          name: 'Una vacante imprevista',
          author: 'JK Rowling',
          img: '',
          progress: 89,
        },
        {
          id: 8,
          name: 'Roverandom',
          author: 'J.R.R. Tolkien',
          img: '',
          progress: 35,
        },
        {
          id: 9,
          name: 'El gusano de seda',
          author: 'Robert Galbraith',
          img: '',
          progress: 74,
        },
      ],
    }
  },
}
</script>
