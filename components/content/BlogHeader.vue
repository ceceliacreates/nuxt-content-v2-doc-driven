<template>
  <main>
    <h2>{{ blog.title }}</h2>
  </main>
</template>

<script setup lang="ts">
import { Blog } from "~~/types";
const { page } = useContent();
const blog: Blog = page;
</script>
