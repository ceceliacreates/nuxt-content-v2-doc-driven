<template>
    <nav>
        <div class="home">
            <nuxt-link to="/">🏠</nuxt-link>
        </div>
        <div class="content">
            <nuxt-link to="/blog">✍️ Blog</nuxt-link>
            <nuxt-link to="/events">🗓️ Events</nuxt-link>
            <nuxt-link to="/blog">📹 Videos</nuxt-link>
        </div>
    </nav>
</template>

<style scoped>
nav {
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
}

.content {
    display: flex;
    gap: 1rem;
}
</style>