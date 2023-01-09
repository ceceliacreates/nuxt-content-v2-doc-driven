<template>
  <Navigation />
  <NuxtPage />
</template>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: rgb(23, 22, 22);
    color:white;
    padding: .5rem;
  }
    
  a, a:hover, a:visited, a:visited:hover {
    text-decoration: none;
  }
    
  a, a:visited {
    color: #00d4ff
  }
    
  a:hover, a:visited:hover {
    color: #6dccab
  }
</style>

<script setup lang="ts">

useHead({
  title: 'Cecelia speaks and writes about web and mobile dev, testing, OSS, communities, and mentoring.',
  meta: [
    { name: 'description', content: 'Cecelia Martinez is a Developer Advocate who speaks and writes about web and mobile development, CI/CD, and testing. She is passionate about open source devtools, building inclusive communities, and ensuring everyone feels like they belong in tech. She is a volunteer with Out in Tech and Women Who Code Front End and a GitHub Star.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
 ]
})
</script>
