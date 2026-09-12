<script setup lang="ts">
import ScrollTop from "primevue/scrolltop";
</script>

<template>
  <div class="mx-auto py-8 px-6 flex justify-center max-w-250">
    <div class="main flex flex-col gap-6 text-gray-700 dark:text-gray-300">
      <NuxtLink
        class="flex gap-2 items-center mb-2 hover:cursor-pointer hover:text-blue-300 text-blue-400 decoration-none"
        :to="'https://movie-db-beta.netlify.app/'"
        target="_blank"
      >
        <h2 class="">Personalized Movies Database</h2>

        <div class="i-material-symbols-open-in-new text-2xl" />
      </NuxtLink>
      <section class="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div class="flex flex-col gap-4 max-md:order-2">
          <div>
            <div class="flex gap-4 items-center mb-2">
              <h3 class="text-gray-900 dark:text-gray-100">Overview</h3>
              <NuxtLink
                :to="'https://github.com/soe-ag/practice-local-movie-source'"
                target="_blank"
              >
                <div
                    class="i-simple-icons-github text-gray-700 dark:text-gray-200 text-xl hover:text-blue-500 dark:hover:text-blue-300"
                />
              </NuxtLink>
            </div>

            <p class="text-sm">
              This project began with a simple goal: to create a personal
              database for organizing and tracking my favorite movies and TV
              series. While IMDb was a great resource, I found its interface
              overloaded for my specific needs. I wanted something lightweight,
              and tailored to how I like to manage my watch list and favorites.
              This version is just the starting point, and I plan to build on
              it, incorporating additional features as I discover what works
              best for me.
            </p>
          </div>
          <div>
            <h3 class="text-gray-900 dark:text-gray-100 mb-2">Features</h3>
            <ul class="ml-4 text-sm mb-2">
              <li>
                Discover trending movies and explore the latest popular titles.
              </li>
              <li>Search for movies and TV series with simplicity.</li>
              <li>Track and organize watchlist.</li>
              <li>Save and access favorite titles in one place.</li>
            </ul>
            <!-- <p class="text-sm">
              This app is designed to make tracking my favorite content simple,
              convenient, and tailored to my preferences.
            </p> -->
          </div>
        </div>
        <NuxtLink
          :to="'https://movie-db-beta.netlify.app/'"
          target="_blank"
          class="m-auto"
        >
          <NuxtImg
            src="/images/full-movie.png"
            class="rounded-2 b-2 b-solid hover:b-blue-400 b-transparent w-80 lg:w-100"
          />
        </NuxtLink>
      </section>

      <section class="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div
          class="p-2 m-auto flex justify-center gap-8 text-3xl max-md:order-2"
        >
          <div class="i-logos-vue" />
          <div class="i-logos-nuxt-icon" />
          <div class="i-logos-unocss" />
          <div class="i-logos-supabase-icon" />
        </div>
        <div>
          <h3 class="text-gray-900 dark:text-gray-100 mb-2">Stack and explanation</h3>
          <p class="text-sm">
            For this project, I chose Nuxt for its server-side rendering (SSR)
            and straightforward routing, leveraging my Vue experience. I used
            UnoCSS for styling, as it’s a tool I’m already familiar with from
            work. Although I started with Firebase, I switched to Supabase
            because it better suited my needs, offering simpler setup and
            clearer documentation. Firebase’s setup felt overly complex,
            requiring separate configurations and SDKs for client and server
            environments.
          </p>
        </div>
      </section>

      <section class="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div>
          <h3 class="text-gray-900 dark:text-gray-100 mb-2">Problems and thought process</h3>
          <p class="text-sm">
            I initially used local storage to save data, as I wasn't familiar
            with Firebase or Supabase. However, as the project grew, I realized
            I needed access to my data from multiple devices, which local
            storage couldn’t provide. The first challenge was integrating
            supabase without disrupting the existing project. After some trial
            and error, I got everything running smoothly. Originally, I used
            client-side API calls, but I later refactored the project to
            incorporate server-side rendering, improving data handling when the
            page loaded.
            <!-- Along
            the way, I cleaned up my code to make it reusable and followed some
            best practices from my work environment, even though this was a
            personal project. There were plenty of challenges along the way, but
            by diving into the docs, troubleshooting with ChatGPT, and plenty of
            debugging, I wrapped up Phase 1 of my project! -->
          </p>
        </div>
        <div class="p-2 m-auto">
          <NuxtImg
            src="/images/other/question-round.svg"
            width="200"
            class="-rotate-10 my-4"
          />
        </div>
      </section>

      <section class="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div class="p-2 m-auto max-md:order-2">
          <NuxtImg
            src="/images/other/study-round.svg"
            width="300"
            class="rotate-10 my-6"
          />
        </div>
        <div>
          <h3 class="text-gray-900 dark:text-gray-100 mb-2">Lessons learned</h3>
          <p class="text-sm">
            This project has been a valuable learning experience, especially in
            building from scratch. I've gained a good understanding of Nuxt,
            Supabase, and working with API integration. At first, I focused on
            getting features working quickly with simple code, then went back to
            refactor it for better reusability and clarity. Since I didn’t start
            with a clear design, I ended up iterating a lot to improve
            readability and maintenance. Looking back, having a solid design and
            structure from the start would have saved time and prevented some
            frustration! 😄
          </p>
        </div>
      </section>

      <section>
        <h3 class="text-gray-900 dark:text-gray-100 mb-2">Features plan to add later</h3>
        <ul class="ml-4 text-sm">
          <li>
            Sorting the watchlist and favorites by rating and release year.
          </li>
          <li>
            Adding custom filters for views based on criteria like year, rating,
            or type.
          </li>
          <li>
            Improving the UI for a more engaging and visually appealing
            experience.
          </li>
          <li>
            Expanding API calls to fetch additional data, such as top movies of
            2024 or the highest-rated films on IMDb.
          </li>
        </ul>
      </section>

      <NuxtLink
        :to="'/works/asset-tracker'"
        class="text-sm decoration-none text-blue-400 hover:text-blue-300 flex gap-2 justify-center lg:justify-end items-center"
        ><p>To Next Project</p>
        <div
          class="i-material-symbols-arrow-circle-right text-xl animate-pulse"
      /></NuxtLink>
    </div>
    <ScrollTop
      :pt="{
        root: { class: 'bg-blue-400! b-none!' },
      }"
    />
  </div>
</template>
