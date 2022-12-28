<template>
    <main>
        <h2> {{blog?.title}} </h2>
    </main>
</template>

<script setup lang="ts">
import { Blog } from "~~/types"
const { path } = useRoute()
const { data:blog } = await useAsyncData(`content-${path}`, () => {
  return queryContent<Blog>().where({ _path: path }).findOne()
})
</script>