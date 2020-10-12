<template>
  <section class="bg-cream">
    <Header />
    <HeaderSpecialBooks />
    <section
      class="flex flex-col md:flex-row md:justify-start py-6 md:items-start"
    >
      <AutorList />
      <main class="books-section">
        <BookList title="Continuar leyendo" />
        <BookList title="Drama" />
        <BookList title="Aventura" />
        <BookList title="Terror" />
        <BookList title="Policial" />
      </main>
    </section>
  </section>
</template>

<script>
import Header from '../components/organism/Header'
import HeaderSpecialBooks from '../components/organism/HeaderSpecialBooks'
import AutorList from '../components/organism/AutorList'
import BookList from '../components/organism/BookList'
export default {
  components: { Header, HeaderSpecialBooks, AutorList, BookList },
}
import('../assets/css/styles.css')
</script>

<style>
.SpecialBookCard:first-child .SpecialBookCard-data,
.SpecialBookCard:last-child .SpecialBookCard-data {
  display: none;
}
.SpecialBookCard:first-child button,
.SpecialBookCard:last-child button {
  display: none;
}

.SpecialBookCard:first-child,
.SpecialBookCard:last-child {
  justify-content: center;
  align-items: center;
  display: none;
}

@media only screen and (min-width: 768px) {
  .books-section {
    width: calc(100% - 236px);
  }

  .SpecialBookCard:first-child,
  .SpecialBookCard:last-child {
    display: flex;
  }

  .SpecialBookCard:first-child .SpecialBook,
  .SpecialBookCard:last-child .SpecialBook {
    width: 9rem;
    height: 14rem;
    opacity: 0.2;
  }
}
</style>
