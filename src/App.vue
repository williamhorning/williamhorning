<template>
  <nav>
    <div>
      <img src="/logo.png" />
      <h1>William Horning</h1>
    </div>
    <br />
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/clock">Clock</router-link>
      <router-link to="/dns">DNS lookup app</router-link>
      <a href="https://github.com/wgyt/projects">Projects</a>
    </div>
  </nav>
  <br />
  <main>
    <router-view />
  </main>
</template>

