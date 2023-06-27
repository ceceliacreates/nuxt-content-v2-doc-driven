<template>
  <main>
    <p v-if="!event">Event info missing</p>
    <div v-else>
      <h1>{{ event.event }}</h1>
      <h3 id="title">{{ event.title }}</h3>
      <p>{{ new Date(event.date).toDateString() }} (<a :href="event.url" v-show="event.url" target="blank"
        >More Details</a
      >)</p>
      
      <div id="video-wrapper">
        <iframe
          id="video"
          v-show="event.embed"
          :src="`https://www.youtube.com/embed/${event.embed}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <a :href="event.video" v-show="event.video && !event.embed" target="blank"
        ><span>Video</span></a
      >
      <span v-show="event.video && !event.embed && event.slides"> || </span>
      <a :href="event.slides" v-show="event.slides" target="blank"
        ><span>↗️ View Slides</span></a
      >
      <p>{{ event.description }}</p>
    </div>
    <p><NuxtLink to="/events"> ⬅️ Back to events </NuxtLink></p>
  </main>
</template>

<style scoped>
#title {
  font-style: italic;
}
#video {
  aspect-ratio: 16 / 9;
  width: 100%;
}

#video-wrapper {
  margin: 1rem;
}
</style>

<script setup lang="ts">
import { Event } from "~~/types";
const { page } = useContent();
const event: Event = page;
</script>
