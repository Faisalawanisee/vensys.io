<template>
  <div id="intro-section">
    <v-row class="pt-16 align-center">
      <v-col cols="12" sm="6" class="animate__animated animate__fadeInLeft">
        <div class="pt-md-16">
          <h2 class="text-h4 text-md-h3 font-weight-600 mb-4">Vensys is an inventory management software</h2>
          <p>
            Vensys is an inventory management software designed by skilled team members of Fabmedia, which is a
            Pakistan-based software start-up founded by Bilal Khalid and Faisal Khalid. Fabmedia has been in business
            for over 3 years now and has never failed in delivering high-quality services to its clients.</p>
          <p>
            We believe that software must be easy to use but cover all the complexities of a business. It should run
            smoothly on every system, ensuring trouble-free work. Vensys, founded in 2019, is a multi-featured and fully
            integrated software developed to help businesses achieve their goals.
          </p>
          <v-btn
            elevation="0"
            color="primary"
            :ripple="false"
            large
            class="mt-5 animated-icon"
          >
            Get started
            <v-icon small right>mdi-chevron-double-right</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="animate__animated animate__fadeInRight">
        <div class="pt-5 pt-md-16">            
          <v-img
            :lazy-src="require('@/static/images/1.png')"
            :src="require('@/static/images/1.png')"
            class="animated-img"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height mt-3 align-center justify-center">
                <v-progress-circular :size="20" :width="3" indeterminate color="primary" />
              </v-row>
            </template>
          </v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
