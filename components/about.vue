<template>
  <div id="about-section">
    <v-row class="pt-16">
      <v-col cols="12" md="6" v-animate-onscroll="'animate__animated animate__flipInX'">
        <p class="secondary--text subtitle-1 font-weight-medium mb-0 text-uppercase">About Us</p>
        <h2 class="text-h4 text-md-h3 font-weight-600">We are here to make your product look more elegant and stylish</h2>
      </v-col>
    </v-row>
    <v-row class="py-10">
      <v-col cols="12" sm="6" v-animate-onscroll="'animate__animated animate__slideInLeft'">
        <div class="pb-5">
          <v-img
            :src="require('@/static/images/3.png')"
            :lazy-src="require('@/static/images/3.png')"
            class="animated-img"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height mt-3 align-center">
                <v-progress-circular :size="20" :width="3" indeterminate color="primary" />
              </v-row>
            </template>
          </v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="6" v-animate-onscroll="'animate__animated animate__slideInRight delay-2'">
        <div class="pb-5 pt-md-10">
          <p>Kindly the energy hidden in matter the only home we"ve ever known radio telescope decipherment descended from astronomers rogue.prime number network of wormholes take root </p>
          <p class="d-flex align-baseline">
            <v-icon class="pr-3" small >mdi-arrow-right-circle</v-icon>
            Kindly the energy hidden in matter the only home desced.
          </p>
          <p class="d-flex align-baseline">
            <v-icon class="pr-3" small >mdi-arrow-right-circle</v-icon>
            known radio telescope decipherment descended home.
          </p>
          <p class="d-flex align-baseline">
            <v-icon class="pr-3" small >mdi-arrow-right-circle</v-icon>
            rogue.prime number network of wormholes take root.
          </p>

          <div
            class="counter-box shaped-box d-flex justify-space-around white--text secondary mt-8 px-16 py-8"
          >
            <div class="text-center px-4 py-4 py-md-0">
              <h2 class="text-h4 font-weight-bold mb-3">890+</h2>
              <p class="mb-0 text-subtitle-2">Project Delivered</p>
            </div>
            <v-divider
              vertical
              class="white"
            />
            <v-divider
              class="d-none white mob-only"
            />
            <div class="text-center px-4 py-4 py-md-0">
              <h2 class="text-h4 font-weight-bold mb-3">400+</h2>
              <p class="mb-0 text-subtitle-2">Happy Clients</p>
            </div>
            <v-divider
              vertical
              class="white"
            />
            <v-divider
              class="d-none white mob-only"
            />
            <div class="text-center px-4 py-4 py-md-0">
              <h2 class="text-h4 font-weight-bold mb-3">3400+</h2>
              <p class="mb-0 text-subtitle-2">Total coffees</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
.counter-box {
  position: relative;
  z-index: 2;
}
@media screen and (min-width: 1264px) {
  .counter-box {
    transform: translateX(-35%);
  }
}
@media screen and (max-width: 400px) {
  .counter-box {
    flex-direction: column;
    .mob-only {
      display: block !important;
    }
  }
}
</style>