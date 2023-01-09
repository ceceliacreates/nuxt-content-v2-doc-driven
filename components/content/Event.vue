<template>
  <main>
    <p v-if="!event">Event info missing</p>
    <div v-else>
      <h1>{{ event.title }}</h1>
      <h3>{{ event.event }}</h3>
      <p>{{ event.type + ", " + new Date(event.date).toDateString() }}</p>
      <a :href="event.url" v-show="event.url" target="blank"
        ><p>More Details</p></a
      >
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
        ><span>Slides</span></a
      >
      <p>{{ event.description }}</p>
    </div>
    <p><NuxtLink to="/events"> ⬅️ Back to events </NuxtLink></p>
  </main>
</template>

<style scoped>
#video {
  aspect-ratio: 16 / 9;
  width: 100%;
}

#video-wrapper {
  margin: 1rem auto 1rem auto;
}
</style>

<script setup lang="ts">
import { Event } from "~~/types";
const { page } = useContent();
const event: Event = page;
</script>
