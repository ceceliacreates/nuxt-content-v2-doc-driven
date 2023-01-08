<template>
  <main>
    <h1>Cecelia Creates</h1>
    <div id="avatar">
      <NuxtImg src="/avatar.png" sizes="sm:80vw md:50vw lg:300px" id="avatar" />
    </div>
    <div id="icons">
      <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="blank">
        <font-awesome-icon :icon="['fab', link.icon]" />
      </a>
    </div>
    <div id="about">
        <h2>Code + content + community. </h2>
        <p>Hi, I'm Cecelia Martinez 👋 </p>
        <p>🚀 Developer Advocate for <a href="https://ionic.io/appflow" target="blank">Appflow by Ionic</a></p>
        <p>🏳️‍🌈 Chapter Head of <a href="https://www.outintech.com" target="blank">Out in Tech</a> Atlanta</p>
        <p>👩‍💻 Volunteer with <a href="https://www.womenwhocode.com/frontend" target="blank" >Women Who Code Front End</a></p>
        <p>⭐️ <a href="https://stars.github.com/" target="blank">GitHub Star</a></p>
    </div>
  </main>
</template>

<script setup>

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/ceceliacreates',
    icon: 'twitter-square'

  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@ceceliacreates',
    icon: 'youtube-square'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ceceliacreates',
    icon: 'github-square'
  }

]
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 4rem;

  font-family: Arial, Helvetica, sans-serif;
 background: linear-gradient(90deg, rgba(109,204,171,1) 10%, rgba(0,212,255,1) 100%);
 background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#avatar {
  border-radius: 25%;
}

#icons {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: .5rem;
  margin: .5rem;
  font-size: 2rem;
}
</style>