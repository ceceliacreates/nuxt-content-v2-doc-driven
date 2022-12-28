<template>
    <nav>
        <div class="home">
            <NuxtLink to="/">🏠 Home</NuxtLink>
        </div>
        <div class="content">
            <NuxtLink to="/blog">✍️ Blog</NuxtLink>
            <NuxtLink to="/events">🗓️ Events</NuxtLink>
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