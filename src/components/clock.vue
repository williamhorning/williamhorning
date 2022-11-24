<template>
	<h2>Clock</h2>
	<h3>{{ time }} on {{ date }}</h3>
</template>
<script lang="ts">
	export default {
		data() {
			var date = new Date();
			return {
				time: date.toLocaleTimeString('en-GB'),
				date: date.toLocaleDateString(),
			};
		},
		mounted() {
			setInterval(() => {
				var date = new Date();
				this.time = date.toLocaleTimeString('en-GB');
				this.date = date.toLocaleDateString();
			}, 1000);
		},
	};
</script>
