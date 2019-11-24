<template>
  <div class="container">
    <div>
      <h1 class="brand-asfora">
        <!-- <img src="brands/logo-asfora-producoes.png" alt="Marca Asfora Produções" title="Marca Asfora Produções" /> -->
      </h1>


      <p>static folder</p>
      <img src="/brands/logo-asfora-producoes.png" alt="Marca Asfora Produções" title="Marca Asfora Produções" />

      <hr>

      <p>assets folder</p>
      <img src="~assets/logo-asfora-producoes.png" alt="Marca Asfora Produções" title="Marca Asfora Produções" />


      <br>


      <nuxt-link to="/">Index</nuxt-link>




      <h2 class="subtitle">
        Site em atualização!<br />
        Nos acompanhe através de nossas redes sociais:
      </h2>

      <Social_links />
    </div>
  </div>
</template>

<script>
import Social_links from '~/components/Social_links.vue'

export default {
  components: {
    Social_links
  }
}
</script>

<style>
</style>
