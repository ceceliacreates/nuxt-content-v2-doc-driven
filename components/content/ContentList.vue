<template>
    <main>
        <div v-for="item in data" :key="item._path">
            <h3>➡️ <nuxt-link :to="item._path">{{item.title}}</nuxt-link></h3>
            <p id="date">{{new Date(item.date).toDateString()}}</p>
            <p id="description">{{item.description}}</p>
        </div>
    </main>
</template>

<script setup lang="ts">
import { Section } from "~~/types"

const props = defineProps<{
  section: Section
}>()

const { data } = await useAsyncData(`content-list-${props.section}`, () => queryContent(`/${props.section}`).where({ _dir: { $ne: '' } }).sort({ date: -1 }).find())
</script>

<style scoped>
h3 {
    font-family: 'Courier New', Courier, monospace;
}
#date {
    font-style: italic;
}

#description {
    font-size: .8rem;
}
</style>