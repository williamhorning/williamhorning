<template>
	<h2>{{ post.title }}</h2>
	<content :id="`content-${post.path}`"></content>
</template>
<script lang="ts">
	function nodeToDom(node: any) {
		if (typeof node === 'string' || node instanceof String) {
			return document.createTextNode(node);
		}
		if (node.tag) {
			if (node.tag === 'pre') {
				let code = node.children[0];
				node.children = [{ tag: 'code', children: code }];
			}
			var domNode = document.createElement(node.tag);
			if (node.attrs) {
				for (var name in node.attrs) {
					var value = node.attrs[name];
					// if name is src and value is relative url
					if (
						name === 'src' &&
						value.startsWith('/') &&
						!value.startsWith('//')
					) {
						// add base of telegra.ph
						value = 'https://telegra.ph' + value;
					}
					domNode.setAttribute(name, value);
				}
			}
		} else {
			var domNode = document.createDocumentFragment();
		}
		if (node.children) {
			for (var i = 0; i < node.children.length; i++) {
				var child = node.children[i];
				domNode.appendChild(nodeToDom(child));
			}
		}
		return domNode;
	}
	export default {
		props: ['post'],
		mounted() {
			let content = document.getElementById(`content-${this.post.path}`);
			for (let node of this.contentHtmlify(this.post.content)) {
				content?.appendChild(node);
			}
		},
		methods: {
			contentHtmlify(content: any[]) {
				let a = content.map(nodeToDom);
				console.log(a);
				return a;
			},
		},
	};
</script>
