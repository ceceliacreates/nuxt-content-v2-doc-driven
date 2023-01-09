---
title: Using FontAwesome Icons with Nuxt 3
description:
date: 2023-01-08
img:
tags: ["nuxt", "icons"]
layout: blog
---

[FontAwesome](https://fontawesome.com/) provides 2,000+ free icons for use in your projects. Here's how to get started using them in your Nuxt 3 app, including how to improve performance by only importing the icons you need.

## Installation

Run the following command to add the `vue-fontawesome` component.

```
npm i --save @fortawesome/vue-fontawesome@latest-3
```

You'll also need to install the icon package(s) you want to use. For my project, I add the `svg-core` and `free-brands-svg-icons` packages.

```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-brands-svg-icons
```

After installation, my dependencies in `package.json` look like this:

```
"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.2.1",
    "@fortawesome/free-brands-svg-icons": "^6.2.1",
    "@fortawesome/vue-fontawesome": "^3.0.2"
  }
```

## Configuration

To use FontAwesome icons in Nuxt 3, you'll need to add the following to `css` array in your `nuxt.config` file.

```
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
```

Next, create a `plugins` directory in the root of your Nuxt 3 app and create a `fontawesome.js` file inside.

This file is where we'll register icons into our library and add the `<font-awesome-icon>` component so it will automatically import in all our Nuxt pages and components.

## Subsetting for Performance

If you are only using a few icons, you can subset which icons are added to the library to improve performance. In this example, I'm using the TwitteSquare, Twitch, and GitHubSquare icons only, so there's no need to install the entire library.

In my `fontawesome.js` file below, I'm only importing the icons I need from `@fortawesome/free-brands-svg-icons`, then passing those values through to `library.add()`.

```
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faTwitch, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitterSquare, faTwitch, faGithubSquare)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
```

Then, I'm adding the `FontAwesomeIcon` component and registering it as `<font-awesome-icon>` so I can use it in my project.

### Importing without Subsetting

If you do want to import the entire icon library, you would import and pass the entire library name instead, like this:

```
...

import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

...
```

## Using Icons

Now, you can use the `<font-awesome-icon>` component in any of your Nuxt pages or components and pass the icon library and name to the `icon` prop.

```
<font-awesome-icon icon="fa-brands fa-twitter-square" />
<font-awesome-icon icon="fa-brands fa-youtube-square" />
<font-awesome-icon icon="fa-brands fa-github-square" />
```

If you want to use dynamic values, pass the library and icon name as an array to `:icon` instead. For example, here we are displaying linked icons based on values in a `socialLinks` array.

```
<template>
<div id="icons">
    <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="blank">
        <font-awesome-icon :icon="['fab', link.icon]" />
    </a>
</div>
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
```

## Resources

That should be enough to get you started, but here are links to more documentation on FontAwesome with Nuxt and Subsetting.

- [FontAwesome with Nuxt Docs](https://fontawesome.com/docs/web/use-with/vue/use-with#nuxt)
- [FontAwesome Subsetting Docs](https://fontawesome.com/docs/apis/javascript/icon-library#subsetting)
