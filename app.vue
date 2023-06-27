<template>
  <Navigation />
  <NuxtPage />
</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgb(23, 22, 22);
  color: white;
  padding: 0.5rem;
}

a,
a:hover,
a:visited,
a:visited:hover {
  text-decoration: none;
}

a,
a:visited {
  color: #00d4ff;
}

a:hover,
a:visited:hover {
  color: #6dccab;
}
</style>

<script setup lang="ts">
useHead({
  title:
    "Cecelia Martinez",
  meta: [
    {
      name: "description",
      content:
        "Cecelia Martinez is a Developer Advocate who speaks and writes about all things dev -- web, mobile, testing, CI/CD, and open source.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>
