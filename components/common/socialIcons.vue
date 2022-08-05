<template>
	<div class="mt-2">
		<v-btn
			v-for="item in socials"
			:key="item.title"
			:title="item.title"
			:href="`https://${item.action}`"
			:color="color"
			icon
			target="_blank"
		>
			<v-icon small>{{`mdi-${item.icon}`}}</v-icon>
		</v-btn>
	</div>
</template>

<script>
export default {
	props: ['color'],
	data() {
		return {
			socials: [
				{
					icon: 'linkedin',
					title: 'Linkedin',
					action: 'linkedin.com'
				},
				{
					icon: 'twitter',
					title: 'Twitter',
					action: 'twitter.com'
				},
				{
					icon: 'facebook',
					title: 'Facebook',
					action: 'facebook.com'
				},
			]
		}
	}
}
</script>