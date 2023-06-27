<template>
    <main>
      <div v-for="item in data" :key="item._path" class="item">
        <h3>
          ➡️ <NuxtLink :to="item._path">{{ item.event }}</NuxtLink>
        </h3>
        <p id="title">{{ item.title }}</p>
        <p id="date">{{ new Date(item.date).toDateString() }}</p>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  
  const { data } = await useAsyncData(`events`, () =>
    queryContent(`/events`)
      .where({ _dir: { $ne: "" } })
      .sort({ date: -1 })
      .find()
  );
  </script>
  
  <style scoped>
  h3 {
    font-family: "Courier New", Courier, monospace;
  }
  .thumbnail {
    border-radius: 1rem;
    border: .15rem solid white;
  }
  #date {
    font-style: italic;
  }

  #title {
    font-weight: bold;
  }
  
  #description {
    font-size: 0.8rem;
    margin: 1rem auto;
  }

  .item {
  max-width: 80vw;
  margin: .5rem;
  padding: .5rem;
}
  </style>
  