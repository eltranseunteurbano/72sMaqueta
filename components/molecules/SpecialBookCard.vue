<template>
  <div class="SpecialBookCard grid grid-cols-specialBookdCard gap-8">
    <SpecialBook class="row-span-1" />
    <div class="SpecialBookCard-data h-72 max-h-full">
      <h1 class="text-black font-robotoSlab text-2xl md:text-3xl truncate">
        La única verdad
      </h1>
      <p class="text-black font-roboto font-thin capitalize mb-4 truncate">
        Ray García
      </p>
      <p
        class="SpecialBookCard-data-text text-black font-robotoSlab overflow-hidden leading-6 md:mb-6"
      >
        Un descubirmiento revolucionario cambió la sociedad para siempre: La
        Única Verdad. Un sistema predictivo que, gracias a la ingente cantidad
        de información que recoge y procesa, ha guiado durante décadas las
        decisiones de la humanidad de ensueño.
      </p>
      <Button class="bg-secondary hover:bg-secondary-dark hidden md:block"
        >Leer</Button
      >
    </div>
    <Button class="bg-secondary hover:bg-secondary-dark col-span-2 md:hidden"
      >Leer</Button
    >
  </div>
</template>
<script>
import SpecialBook from '../atoms/SpecialBook'
import Button from '../atoms/Button'
export default {
  name: 'SpecialBookCard',
  components: { SpecialBook, Button },
}
</script>

<style scoped>
.SpecialBookCard-data-text {
  max-height: calc(100% - 45px - 24px - 16px);
}
@media only screen and (min-width: 768px) {
  .SpecialBookCard-data-text {
    max-height: calc(100% - 45px - 24px - 16px - 24px - 40px);
  }
}
</style>
