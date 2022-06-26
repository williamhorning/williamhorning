<template>
  <h2>Blog</h2>
  <br />
  <ul>
    <li v-for="post in posts.results">
      <h3>{{ post.Title }}</h3>
      <p>{{ post.description }}</p>
      <p>
        <i>Published on {{ post.date }}</i>
      </p>
      <div id="tags">
        <p v-for="tag in post.Tags">{{ tag }}</p>
      </div>
      <br />
      <content><Markdown :source="post.Content" /></content>
      <br />
      <hr />
      <br />
    </li>
  </ul>
</template>
<script>
  import Markdown from 'vue3-markdown-it';

  export default {
    components: {
      Markdown,
    },
    data() {
      return {
        posts: [],
      };
    },
    async mounted() {
      this.posts = await (
        await fetch(
          'https://horseman.ceru.dev/v1/models/william-horning-blog-platform/objects?key=gG5fDSIBpy-S'
        )
      ).json();
    },
  };
</script>
