<template>
	<div id="footer" class="w-100">
		<v-container>
			<v-row class="pt-5 pb-5">
				<v-col
					cols="12" sm="6" md="4"
					v-animate-onscroll="'animate__animated animate__flipInX delay-1'"
				>
					<div class="mb-12">
						<v-img
							height="50px"
							contain
							position="left"
							:src="require('@/static/images/logo-white.png')"
							:lazy-src="require('@/static/images/logo-white.png')"
							class="mb-6"
						>
							<template v-slot:placeholder>
								<v-row class="fill-height mt-3 align-center">
									<v-progress-circular :size="20" :width="3" indeterminate color="primary" />
								</v-row>
							</template>
						</v-img>
						<p class="mb-8">
							Vensys is an inventory management software designed by skilled team members of Fabmedia, which is a
							Pakistan-based software start-up founded by Bilal Khalid and Faisal Khalid. Fabmedia has been in business
							for over 3 years now and has never failed in delivering high-quality services to its clients.
						</p>
						<h3 class="font-weight-medium">STAY CONNECTED</h3>
						<SocialIcons />
					</div>
				</v-col>
				<v-spacer></v-spacer>
				<v-col
					cols="12" sm="6" md="3"
					v-animate-onscroll="'animate__animated animate__flipInX delay-2'"
				>
					<div class="mb-12">
						<div class="small-divider mb-5"></div>
						<h2 class="font-weight-medium mb-6">Useful links</h2>
						<ul>
							<li v-for="item in nav" :key="item.title">
								<v-icon small>mdi-chevron-right</v-icon>
								<nuxt-link
									:title="item.title"
									class="white--text cstm-link d-inline-block mb-4"
									:to="item.action"
								>
									{{item.title}}
								</nuxt-link>
							</li>
						</ul>
					</div>
				</v-col>
				<v-col 
					cols="12" sm="6" md="3"
					v-animate-onscroll="'animate__animated animate__flipInX delay-3'"
				>
					<div class="mb-12">
						<div class="small-divider mb-5"></div>
						<h2 class="font-weight-medium mb-6">Contact Us</h2>
						<p class="d-flex align-baseline">
							<v-icon small class="pr-3">mdi-home </v-icon>
							<a href="https://goo.gl/maps/N2MVrC28D1PonmQg8" class="white--text cstm-link" target="_blank">392A-F Block, Johar Town Lahore.</a>
						</p>
						<p class="d-flex align-baseline">
							<v-icon small class="pr-3">mdi-phone</v-icon>
							<a href="tel:+92 3219111173" class="white--text cstm-link">+92 3219111173</a>
						</p>
						<p class="d-flex align-baseline">
							<v-icon small class="pr-3">mdi-email</v-icon>
							<a href="mailto:contact@vensys.io" class="white--text cstm-link">contact@vensys.io</a>
						</p>
					</div>
				</v-col>
			</v-row>
			<hr class="white">
			<p class="text-center pt-3 mb-0">
				Copyright © {{ new Date().getFullYear() }} by <a class="white--text cstm-link" href="https://fabmedia.io" target="_blank">Fabmedia.</a>
				All Rights Reserved
			</p>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nav: [
				{
					title: 'Contact Us',
					action: '/contact'
				},
				{
					title: 'Privacy Policy',
					action: '/privacy-policy'
				},
				{
					title: 'Terms and Conditions',
					action: '/terms-conditions'
				},
			]
		}
	}
}
</script>

<style lang="scss">
#footer {
	background-color: var(--v-secondary-base);
}
// @media screen and (min-width: 960px) {
// 	#footer {
// 		background-image: url('@/static/images/footer.jpg');
// 		background-size: cover;
// 		background-repeat: no-repeat;
// 	}
// }
</style>
