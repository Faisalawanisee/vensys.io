export default {
	methods: {
		goto(e) {

			this.navDrawer = false
			const el = document.getElementById(e);

			if(el) {

				const offsetTop = el.offsetTop + 80;
				this.scrollTo(offsetTop)
			} else {

				this.$router.push("/");
				
				setTimeout(() => {
					const offsetTop = document.getElementById(e).offsetTop + 80
					this.scrollTo(offsetTop)
				}, 200);
			}
		},
		scrollTo(offsetTop) {
			scroll({
				top: offsetTop,
				behavior: "smooth"
			});
		}
  }
};