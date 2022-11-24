<template>
  <nav>
    <div>
      <img src="/logo.png" alt="William's profile picture"/>
      <h1>William Horning</h1>
    </div>
    <br />
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/utils">Utils</router-link>
    </div>
  </nav>
  <br />
  <main>
    <router-view />
  </main>
</template>

