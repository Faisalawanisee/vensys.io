<template>
  <div>
    <v-container>
      <Intro />
      <About />
    </v-container>
    <Features />
    <Technology />
    <Pricing />
  </div>
</template>

<script>
export default {
  name: 'Home',
  layout: 'home'
}
</script>

<style lang="scss">
.home-page {
  background-image: url('@/static/images/8.png') !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
}
</style>