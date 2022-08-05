<template>
	<div>
		<v-app-bar
			app
			absolute
			flat
			class="transparent"
		>
			<Header :nav="nav" @showDrawer="navDrawer = true" />
		</v-app-bar>
		<v-main>
			<Nuxt />
		</v-main>
		<v-footer
			app
			dark
			absolute
			padless
		>
			<Footer />
		</v-footer>

		<v-navigation-drawer
			v-model="navDrawer"
			fixed
			temporary
			right
		>
			<div class="d-flex flex-column justify-space-between fill-height">
				<v-list
					nav
					dense
				>
					<v-list-item-group
						active-class="primary--text"
					>
						<v-list-item
							v-for="item in nav"
							:key="item.icon"
							@click="goto(item.action)"
						>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list-item-group>
				</v-list>

				<div class="pa-2">
					<h4 class="font-weight-medium">STAY CONNECTED</h4>
					<SocialIcons color="primary" />
				</div>
			</div>
		</v-navigation-drawer>
		<ToTop />
	</div>
</template>

<script>
import navJson from '~/static/json/nav'
import goTo from '~/mixins/goTo'

export default {
  name: 'DefaultLayout',
	mixins: [goTo],
  data () {
		return {
			navDrawer: false,
			nav: navJson
		}
  },
}
</script>