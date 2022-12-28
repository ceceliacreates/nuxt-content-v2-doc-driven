<template>
    <main>
        <p v-show="!event">Event info missing</p>
        <h1> {{event?.title}} </h1>
        <h3 v-show="event?.event">{{event?.event}}</h3>
        <p>{{event?.type + ", " + new Date(event?.date).toDateString() }}</p>
        <a :href="event?.url" v-show="event?.url" target="blank"><p>More Details</p></a>
        <div v-show="event?.embed" id="video">
        <iframe
              width="460"
              height="258"
              :src="`https://www.youtube.com/embed/${event?.embed}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            </div>
            <a :href="event?.video" v-show="event?.video" target="blank"><span>Video</span></a>
            <span v-show="event?.video && event?.slides"> || </span>
            <a :href="event?.slides" v-show="event?.slides" target="blank"><span>Slides</span></a>
        <p> {{event?.description}}</p>
        </main>
        <p><NuxtLink to="/events"> ⬅️ Back to events </NuxtLink></p>
</template>

<script setup lang="ts">
import { Event } from "~~/types"
const { path } = useRoute()
const { data:event } = await useAsyncData(`content-${path}`, () => {
  return queryContent<Event>().where({ _path: path }).findOne()
})
</script>