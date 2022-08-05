<template>
  <v-toolbar flat class="transparent mt-5">
    <nuxt-link to="/">
      <v-img
        height="40px"
        width="130px"
        contain
        position="left"
        :src="require('@/static/images/logo.png')"
        :lazy-src="require('@/static/images/logo.png')"
        class="ml-md-15"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height mt-3 ml-13">
            <v-progress-circular :size="20" :width="3" indeterminate color="primary" />
          </v-row>
        </template>
      </v-img>
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="d-none d-md-block">
      <v-btn
        v-for="item in nav"
        :key="item.icon"
        :title="item.title"
        :ripple="false"
        plain
        text
        class="cstm-link"
        @click="goto(item.action)"
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <!-- mobile view -->
    <v-app-bar-nav-icon class="d-block d-md-none" small @click="$emit('showDrawer')" />
  </v-toolbar>
</template>

<script>
import goTo from '~/mixins/goTo'

export default {
  props: ['nav'],
  mixins: [goTo],
  data() {
    return {
    }
  },
}
</script>
