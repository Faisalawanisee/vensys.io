<template>
  <v-app>
    <v-container
      id="error-view"
      class="fill-height text-center"
      tag="section"
    >
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="8"
        >
          <v-row class="align-center">
            <v-col
              cols="12"
              md="3"
            >
              <h1 class="primary--text font-weight-bold face">
                :(
              </h1>
            </v-col>
            <v-col
              cols="12"
              md="9"
            >
              <div class="text-center text-md-left">
                <template v-if="error.statusCode === 404">
                  <h1 class="text-h3 mb-8">
                    404 - Page not found
                  </h1>
                  <p>The link you clicked on may be broken or no longer exist.</p>
                </template>

                <template v-else>
                  <h1 class="text-h3 mb-8">
                    {{ otherError }}
                  </h1>
                </template>

                <NuxtLink
                  color="primary"
                  large
                  class="rounded-pill px-5"
                  to="/"
                >
                  Get me out of here!
                </NuxtLink>

              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 - Page not found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
h1.face {
  font-size: 100px;
}
</style>

