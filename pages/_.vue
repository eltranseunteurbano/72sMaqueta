<template>
  <section class="bg-cream">
    <Header class="hidden md:flex" />
    <article
      class="w-screen h-screen flex justify-center items-center content404"
    >
      <div class="w-84 flex flex-col justify-center items-center">
        <Image404 class="mb-8" />
        <h1 class="text-primary font-robotoSlab font-semibold text-2xl mb-4">
          Recorcholis...
        </h1>
        <p class="text-gray font-roboto text-center mb-12 text-lg">
          Te pérdiste dentro de esta gran historia, <br />
          te ayudaremos a volver atrás.
        </p>
        <Button>Volver al inicio</Button>
      </div>
    </article>
  </section>
</template>

<script>
import Image404 from '../components/atoms/img/404Image'
import Button from '../components/atoms/Button'
import Header from '../components/organism/Header'
export default {
  components: { Image404, Button, Header },
}
</script>

<style>
@media only screen and (min-width: 768px) {
  .content404 {
    height: calc(100vh - 88px);
  }
}
</style>
