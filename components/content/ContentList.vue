<template>
    <main>
        <ul>
            <li v-for="item in data" :key="item._path"><nuxt-link :to="item._path">{{item.title}}</nuxt-link></li>
        </ul>
    </main>
</template>

<script setup lang="ts">
import { Section } from "~~/types"

const props = defineProps<{
  section: Section
}>()

const { data } = await useAsyncData(`content-list-${props.section}`, () => queryContent(`/${props.section}`).where({ _dir: { $ne: '' } }).find())
</script>