<script setup lang="ts">
import ScrollTop from "primevue/scrolltop";
</script>

<template>
  <div class="mx-auto py-8 px-6 flex justify-center max-w-250">
    <div class="main flex flex-col gap-6 text-gray-700 dark:text-gray-300">
      <NuxtLink
        class="flex gap-2 items-center mb-2 hover:cursor-pointer hover:text-blue-300 text-blue-400 decoration-none"
        :to="'https://asset-tracker-beta.netlify.app/'"
        target="_blank"
      >
        <h2 class="">Asset Tracker</h2>

        <div class="i-material-symbols-open-in-new text-2xl" />
      </NuxtLink>
      <section class="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div class="flex flex-col gap-4 max-md:order-2">
          <div>
            <div class="flex gap-4 items-center mb-2">
              <h3 class="text-gray-900 dark:text-gray-100">Overview</h3>
              <NuxtLink
                :to="'https://github.com/soe-ag/practice-asset-tracker'"
                target="_blank"
              >
                <div
                  class="i-simple-icons-github text-gray-700 dark:text-gray-200 text-xl hover:text-blue-500 dark:hover:text-blue-300"
                />
              </NuxtLink>
            </div>
            <p class="text-sm">
              I have been using TradingView to track stocks, cryptocurrencies,
              and indices for personal investing. While it offers extensive
              tools and features, I wanted a simpler, personalized dashboard to
              quickly access my favorite assets and customize how I interact
              with charts. This project is designed to meet that need, starting
              with the essential features in the first phase. As I continue
              using it, future updates will add more features based on my
              evolving needs and how I interact with the platform.
            </p>
          </div>
          <div>
            <h3 class="text-gray-900 dark:text-gray-100 mb-2">Features</h3>
            <ul class="ml-4 text-sm mb-2">
              <li>View favorite stock price trends on a daily time frame.</li>
              <li>
                Access various chart types, including volume charts and moving
                averages (MA).
              </li>
              <li>
                Select stocks from a predefined list to view their updated
                prices.
              </li>
              <li>
                Compare selected stock with two default stocks: Apple and
                Google.
              </li>
              <li>
                The Trading View widget is in the footer to check current prices
                conveniently.
              </li>
            </ul>
            <!-- <p class="text-sm">
              This app is designed to make tracking my favorite content simple,
              convenient, and tailored to my preferences.
            </p> -->
          </div>
        </div>
        <NuxtLink
          :to="'https://asset-tracker-beta.netlify.app/'"
          target="_blank"
          class="m-auto"
        >
          <NuxtImg
            src="/images/full-asset.png"
            class="rounded-2 b-2 b-solid hover:b-blue-400 b-transparent w-80 lg:w-100"
          />
        </NuxtLink>
      </section>

      <section class="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div
          class="p-2 m-auto flex justify-center items-center gap-8 text-3xl max-md:order-2"
        >
          <div class="i-logos-vue" />
          <div class="i-logos-nuxt-icon" />
          <div class="i-logos-unocss" />
          <NuxtImg
            src="/images/tv-logo.png"
            width="40"
            class="b-1 b-solid b-dark-4"
          />
        </div>
        <div>
          <h3 class="text-gray-900 dark:text-gray-100 mb-2">Stack and explanation</h3>
          <p class="text-sm">
            I chose to work with Nuxt.js for this project due to my proficiency
            with Vue.js and the need to support multiple pages and server-side
            rendering (SSR) for scalability in the future. Nuxt also simplifies
            routing, making it efficient for managing navigation between pages.
            Initially, I used Chart.js, a library I’m familiar with from my
            workplace. However, I later switched to TradingView's lightweight
            charts because they are more visually appealing and offer a wider
            variety of chart types for customization. For the data, I chose
            Alpha Vantage after researching available options, as it offers an
            ample free-tier limit of 25 API calls per day, making it the most
            convenient choice.
          </p>
        </div>
      </section>

      <section class="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div>
          <h3 class="text-gray-900 dark:text-gray-100 mb-2">Problems and thought process</h3>
          <p class="text-sm">
            At first, I integrated Supabase to fetch data from the API, store it
            in the database, and retrieve it as needed. However, when the API
            limit became a constraint, I decided to remove Supabase and directly
            display the data returned by the API. I designed the dashboard to
            show different types of charts from a single API call, updating the
            data only when necessary. Currently, I couldn’t retrieve index fund
            data, so I postponed implementing a comparison feature between index
            funds and selected stocks. Since this was my first time using the
            library, I started with simple configurations and gradually added
            complexity as I became more familiar with its features.
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

      <section class="grid md:grid-cols-2 gap-4 grid-cols-1 mb-4">
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
            The main lesson I learned is how to effectively use lightweight
            charts. Similar to my previous projects, I planned and implemented
            features throughout the development process, which involved many
            trials and errors. It also taught me the importance of adapting to
            limitations, such as API call restrictions, and finding creative
            solutions to overcome them.
          </p>
        </div>
      </section>

      <section>
        <h3 class="text-gray-900 dark:text-gray-100 mb-2">Features plan to add later</h3>
        <ul class="ml-4 text-sm">
          <li>
            Add a new page for a watchlist table to track selected assets.
          </li>
          <li>
            Integrate fundamental data for each asset to provide more detailed
            insights.
          </li>
          <li>
            Implement charts for different time frames to analyze trends over
            various periods.
          </li>
          <li>
            Include a baseline chart within multi-type charts for easier
            comparison.
          </li>
          <li>
            Enhance the comparison functionality to support more detailed asset
            analysis.
          </li>
          <li>
            Add the ability to compare personal investment growth with stock
            performance.
          </li>
          <li>Enable comparisons between selected stocks and index funds.</li>
        </ul>
      </section>

      <NuxtLink
        :to="'/works/movie-db'"
        class="text-sm decoration-none text-blue-400 hover:text-blue-300 flex gap-2 justify-center lg:justify-end items-center"
      >
        <div
          class="i-material-symbols-arrow-circle-left text-xl animate-pulse"
        />
        <p>To Previous Project</p>
      </NuxtLink>
    </div>
    <ScrollTop
      :pt="{
        root: { class: 'bg-blue-400! b-none!' },
      }"
    />
  </div>
</template>
