<script setup lang="ts">
defineProps<{
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}>();
</script>

<template>
  <div
    class="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800/40 border-2 border-solid border-gray-300 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-400 group"
  >
    <!-- Image Box -->
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="relative block overflow-hidden aspect-video"
    >
      <NuxtImg
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-gray-900 via-transparent to-transparent opacity-80 decoration-none rounded-t-xl"
      />
    </a>

    <!-- Content Box -->
    <div class="flex flex-col flex-1 p-4 md:p-5">
      <h4
        class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
      >
        <a
          :href="link"
          target="_blank"
          class="decoration-none text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"
          rel="noopener noreferrer"
          >{{ title }}</a
        >
      </h4>

      <p
        class="text-gray-700 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-2 flex-1"
      >
        {{ description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(t, index) in tech"
          :key="index"
          class="px-2 py-1 text-xs font-medium rounded-md bg-blue-500/20 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30 dark:border-blue-500/20"
        >
          {{ t }}
        </span>
      </div>

      <!-- Links Bottom -->
      <div
        class="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700/50 mt-auto"
      >
        <a
          v-if="github"
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1 decoration-none"
          title="Source Code"
        >
          <div class="i-simple-icons-github text-xl" />
        </a>
        <a
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 ml-2 decoration-none"
          title="Live Demo"
        >
          <div class="i-material-symbols-open-in-new text-xl" />
        </a>
      </div>
    </div>
  </div>
</template>
