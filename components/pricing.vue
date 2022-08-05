<template>
  <div id="pricing-section" class="pt-16 pb-7">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" md="5" class="text-center" v-animate-onscroll="'animate__animated animate__flipInX'">
          <p class="secondary--text subtitle-1 font-weight-medium mb-0 text-uppercase">Pricing Plan</p>
          <h2 class="text-h4 text-md-h3 font-weight-600 mb-4">Find The Right Plan</h2>
          <p class="tertiary--text">
            Choose the plan that fits your need.
          </p>

          <div class="secondary d-inline-block rounded-pill px-1 mb-8 mt-4" v-animate-onscroll="'animate__animated animate__fadeInUp delay-2'">
            <v-chip-group
              v-model="tableType"
              class="py-0 my-0 font-weight-600"
              active-class="white-bg dark-color"
              mandatory
            >
              <v-chip class="transparent white--text py-0 my-0">Monthly</v-chip>
              <v-chip class="transparent white--text py-0 my-0">Yearly</v-chip>
            </v-chip-group>
          </div>

        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          cols="12" sm="6" md="4"
          v-for="( table, index ) in tables"
          :key="index"
          v-animate-onscroll="'animate__animated animate__fadeInUp'"
          :class="`delay-${index}`"
        >
          <v-card
            outlined
            :class="table.bgColor"
            class="rounded-xl pa-5 d-flex flex-column justify-space-between mb-8"
            :dark="table.bgColor == 'secondary' ? true : false"
          >
            <div>
              <h2 class="text-h5 font-weight-600">{{ table.heading }}</h2>
              <p class="font-weight-medium text-body-1">{{ table.subHeading }}</p>

              <h2 class="text-h4 font-weight-600">
                <span class="price" :class="`${table.color}--text`">$ {{ tablePricing[tableType][index] }}</span>
                <small class="text-subtitle-1 font-weight-600">/{{ tableType ? 'yearly':'monthly' }}</small>
              </h2>

              <div class="my-10">
                <p class="d-flex align-baseline" v-for="( item, index ) in table.list" :key="index">
                  <v-icon small class="pr-3" :color="table.color">mdi-check</v-icon>
                  {{item}}
                </p>
              </div>
            </div>

            <div>
              <v-btn color="primary" elevation="0" :ripple="false" class="animated-icon">
                Get started
                <v-icon small right>mdi-chevron-double-right</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tables: [
        {
          color: 'secondary',
          heading: 'Professional',
          subHeading: 'A beautiful, simple website',
          price: 25.00,
          list: [
            '10 Pages Responsive Website',
            '5 PPC Campaigns',
            '10 SEO Keywords',
            '5 Facebook Campaigns',
            '2 Video Campaigns',
          ]
        },
        {
          bgColor: 'secondary',
          color: 'primary',
          heading: 'Standard',
          subHeading: 'A beautiful, simple website',
          price: 45.00,
          list: [
            '10 Pages Responsive Website',
            '5 PPC Campaigns',
            '10 SEO Keywords',
            '5 Facebook Campaigns',
            '2 Video Campaigns',
          ]
        },
        {
          color: 'secondary',
          heading: 'Ultimate',
          subHeading: 'A beautiful, simple website',
          price: 70.00,
          list: [
            '10 Pages Responsive Website',
            '5 PPC Campaigns',
            '10 SEO Keywords',
            '5 Facebook Campaigns',
            '2 Video Campaigns',
          ]
        },
      ],
      tablePricing: [
        [
          "10.00",
          "9.00",
          "15.00"
        ],
        [
          "100.00",
          "90.00",
          "300.00"
        ]
      ],
      tableType: 0,
    }
  },
};
</script>

<style lang="scss" scoped>
#pricing-section {
  background-image: url('@/static/images/new.png');
  background-size: contain;
  background-repeat: no-repeat;
}
h2 {
  .price {
    position: relative;
      &::after {
      position: absolute;
      content: "";
      bottom: -10px;
      left: 0;
      height: 2px;
      width: 60px;
      background: currentColor;
    }
  }
}
.white-bg {
  background-color: #fff !important;
}
.dark-color {
  color: var(--v-dark-base) !important;
}
</style>
