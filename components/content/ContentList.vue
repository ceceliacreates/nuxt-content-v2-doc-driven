<template>
  <main>
    <div v-for="item in data" :key="item._path" class="item">
      <h3>
        ➡️ <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </h3>
      <p id="date">{{ new Date(item.date).toDateString() }}</p>
      <NuxtImg
        v-show="item.img"
        :src="`${item.img}`"
        sizes="sm:80vw md:50vw lg:30vw"
        class="thumbnail"
      />
      <p id="description">{{ item.description }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Section } from "~~/types";

const props = defineProps<{
  section: Section;
}>();

const { data } = await useAsyncData(`content-list-${props.section}`, () =>
  queryContent(`/${props.section}`)
    .where({ _dir: { $ne: "" } })
    .sort({ date: -1 })
    .find()
);
</script>

<style scoped>
main {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: top;
  text-align: center;
}
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

#description {
  font-size: 0.8rem;
  margin: 1rem auto;
}

.item {
  max-width: 80vw;
}
@media only screen and (min-width: 768px) {
  .item {
    max-width: 50vw;
  }
}
@media only screen and (min-width: 982px) {
  main {
    gap: 3rem;
  }
  .item {
    max-width: 30vw;
  }
}
</style>
