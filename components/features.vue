<template>
  <div id="features-section">
    <v-container>
      <v-row class="pt-16">
        <v-col cols="12" md="7" lg="5" v-animate-onscroll="'animate__animated animate__flipInX'">
          <p class="white--text subtitle-1 font-weight-medium mb-0 text-uppercase">Features</p>
          <h2 class="white--text text-h4 text-md-h3 font-weight-600">You can streamline inventory management.</h2>
        </v-col>
      </v-row>
      <v-row class="pt-8 pt-md-15 pb-8 justify-center">
        <v-col
          cols="12" sm="6" md="4" lg="3"
          v-for="(item, index) in data" :key="index"
          v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="mb-8"
        >
          <div class="shaped-box secondary pa-5 d-flex flex-column justify-space-between fill-height">
            <div class="align-self-start">
              <v-img
                height="50px"
                contain
                position="left"
                :src="require(`@/static/images/${item.image}`)"
              />
              <h2 class="pt-3 pb-5 text-subtitle-1 font-weight-bold white--text" v-html="item.heading"></h2>
              <p class="white--text">{{item.paragraph}}</p>
            </div>
            <div class="">
              <v-btn color="primary" elevation="0" :ripple="false" class="mt-2 animated-icon">
                Get started
                <v-icon small right>mdi-chevron-double-right</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>  
  </div>
</template>

<script>
export default {
  name:"features",
  data() {
    return {
      data: [
        {
          image: 'messege.png', 
          heading: 'Multi-store Solution: <br/> &nbsp;',
          paragraph: 'Monitor and process orders from several sources with the help of a single inventory management software. Enhance efficiency and meet deadlines by completing orders quickly.',
        },
        {
          image: 'pc.png', 
          heading: "Statistics and <br/> Detailed Reporting:",
          paragraph: 'Generate detailed reports with a single click to view your most profitable items, potential customers, and packing efficiency so you can make prompt, better decisions every time',
        },
        {
          image: 'globe.png', 
          heading: 'Online and Offline <br/> Computing:',
          paragraph: ' Scale your business from one to numerous retail stores and access your POS from anywhere on any device online. In the case of an internet outage, all offline transactions are queued and processed automatically.',
        },
        {
          image: 'fax.png', 
          heading: 'Point of Sale: <br/> &nbsp;',
          paragraph: 'Modernize your business with our reliable point of sale technology. Accept any payment method, improve business management, and improve profitability with a comprehensive POS solution sys.',
        },
        {
          image: 'dolor.png', 
          heading: 'Accounts and Ledgers: <br/> &nbsp;',
          paragraph: 'Manage your daily accounting and gain a comprehensive view of the state of your business. Help your company by monitoring all financial activity, from invoices and expenses to sales and purchase orders, taxes, reports, and bank feed',
        },
        {
          image: 'file.png', 
          heading: 'Quotation and Draft <br/> Invoices:',
          paragraph: 'Create and send quotations and payments with a single click. Vensys automatically gathers data and generates invoices for your clients. Organize and safely store all of your data on a central server.',
        },
        {
          image: 'home.png', 
          heading: 'Bank Accounts <br/> Management:',
          paragraph: 'Get your bank statements automatically synchronized with your bank, or import files with our double inventory management software.We work to give you a personalized experience. You can receive updates when things run out of stock and must be restocked. In addition, know when products will be delivered and the status of payments. Smoothen your journey to success with Vensys.',
        },
      ]
    }
  },
};
</script>

<style>
#features-section {
  background-image: url('@/static/images/features.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>