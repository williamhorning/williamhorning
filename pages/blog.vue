<template>
	<h1>Blog</h1>
	<br />
	<ul>
		<li v-for="post in posts">
			<Post :post="post" />
		</li>
	</ul>
</template>
<script lang="ts">
	import hljs from 'highlight.js';
	import Post from '../src/components/post.vue';
	export default {
		components: { Post },
		data() {
			return {
				posts: [],
			};
		},
		async mounted() {
			let postIDs = [
				'How-I-set-up-my-ghost-site-site-v6-11-23',
				'Why-Im-making-a-package-manager-11-23',
			];
			for (let post of postIDs) {
				let pdat = await (
					await fetch(
						`https://api.telegra.ph/getPage/${post}?return_content=true`
					)
				).json();
				if (pdat.ok) {
					this.posts.push(pdat.result);
				}
			}
			hljs.highlightAll();
		},
	};
</script>
