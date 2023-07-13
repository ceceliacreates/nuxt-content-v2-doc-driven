<template>
    <main>
      <div>
        <p v-if="selectedTag" class="filter"> Filtered by: {{selectedTag}}  <button @click="selectedTag = ''">Clear</button></p>
        <p v-else class="filter"> Click any tag to filter.</p>
      </div>
      <div v-for="item in displayedEvents" :key="item._path" class="item">
        <h3>
          ➡️ <NuxtLink :to="item._path">{{ item.event }}</NuxtLink>
        </h3>
        <p id="title">{{ item.title }}</p>
        <p id="date">{{ new Date(item.date).toDateString() }}</p>
        <div class="tags"><button v-for="tag in item.tags" :key="item.slug + tag" @click="selectedTag = tag"> {{tag}}</button></div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">

  const selectedTag = ref('')
  
  const { data } = await useAsyncData(`events`, () =>
    queryContent(`/events`)
      .where({ _dir: { $ne: "" } })
      .where({ _empty: { $ne: true }})
      .sort({ date: -1 })
      .find()
  );

  const filteredEvents = computed(() => {
    return data.value?.filter(item => item.tags.includes(selectedTag.value))
  })

  const displayedEvents = computed(()=> {
    return selectedTag.value ? filteredEvents.value : data.value;
  }) 

  console.log(data)
  </script>
  
  <style scoped>
  h3 {
    font-family: "Courier New", Courier, monospace;
  }
  #date {
    font-style: italic;
  }

  #title {
    font-weight: bold;
  }

  .item {
  max-width: 80vw;
  margin: .5rem;
  padding: .25rem;
}

ul {
  list-style: none;
  margin: 1rem 4rem;
  padding: 0rem;
}

@media only screen and (max-width: 600px) {
ul {
  margin: 1rem;
}
}

button {
    background-color: #00d4ff;
    border: none;
    padding: .25rem .5rem;
    margin: .25rem;
    cursor: pointer;
}

.filter {
    font-weight: bold;
}
  </style>
  