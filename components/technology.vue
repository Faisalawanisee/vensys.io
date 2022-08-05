<template>
  <div id="technology-section">
    <v-container>
      <v-row class="pt-16 align-center">
        <v-col cols="12" sm="6" v-animate-onscroll="'animate__animated animate__fadeInUp'">
          <div class="">
            <p class="secondary--text subtitle-1 font-weight-medium mb-0 text-uppercase">Technology</p>
            <h2 class="text-h4 text-md-h3 font-weight-600 mb-4">Vensys is easy to use and runs smoothly</h2>
            <p>
              Vensys is easy to use and runs smoothly on your computer system to help you achieve your business goals. It increa-
              ses the productivity of your business by minimizing the effort you put into doing every inventory task manually.
              In addition, it saves you time that you can invest in other core operations of your business. However, for the software
              to work perfectly, it must be designed in a way that fulfils your business requirements effectively. The best part what
              Vensys allows you, it works well online and offline. We do not bound out customer on the darker side, you do not
              have an internet? Our hybrid approach allows you to keep working offline and synchronize the data once the inter-
              net is back.
            </p>
            <p>
              So, the technology we have used to develop Vensys is Laravel and Vue JS. Laravel is a free, open-source PHP web
              framework designed for the development of online and single page applications. Laravel's features include various
              methods for accessing relational databases and utilities for application deployment and maintenance. It is used for
              the backend development of Vensys. For offline model we are using Electron Js.
              Similarly, for the frontend, we have used Vue JS. It is a free and open-source JavaScript View Model front-end
              framework for creating user interfaces and single-page applications.
              Lastly when it comes to the Server side, we are using Dedicated Cloud hosting AMAZON and VULTR that allows the
              applications to work smoothly.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" v-animate-onscroll="'animate__animated animate__fadeInDown'">
          <div class="pt-5">            
            <v-img
              :src="require('@/static/images/1.png')"
              :lazy-src="require('@/static/images/1.png')"
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
      </v-row>
    </v-container>  
  </div>
</template>

<style lang="scss">
</style>