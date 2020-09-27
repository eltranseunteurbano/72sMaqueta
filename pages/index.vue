<template>
  <section class="bg-cream">
    <Header />
    <section
      class="flex flex-col md:flex-row md:justify-start py-6 md:items-start"
    >
      <AutorList />
      <article class="books-section">
        <BookList title="Continuar leyendo" />
        <BookList title="Drama" />
        <BookList title="Aventura" />
        <BookList title="Terror" />
        <BookList title="Policial" />
      </article>
    </section>
  </section>
</template>

<script>
import Header from '../components/organism/Header'
import AutorList from '../components/organism/AutorList'
import BookList from '../components/organism/BookList'
export default {
  components: { Header, AutorList, BookList },
}
import('../assets/css/tailwind.css')
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .books-section {
    width: calc(100% - 236px);
  }
}
</style>
