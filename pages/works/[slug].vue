<script setup lang="ts">
import { projectItems } from "~/utils/worksData";

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const project = computed(() =>
  projectItems.find((item) => item.slug === slug.value),
);

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Work not found",
  });
}

useHead(() => ({
  title: `${project.value?.title ?? "Work"} - Soe Aung`,
  meta: [
    {
      name: "description",
      content: project.value?.description,
    },
  ],
}));
</script>

<template>
  <div v-if="project" class="w-full max-w-5xl mx-auto px-5 py-8 md:px-8 md:py-12">
    <NuxtLink
      to="/works"
      class="mb-8 inline-flex items-center gap-2 text-sm text-blue-500 decoration-none transition-colors hover:text-blue-300"
    >
      <div class="i-material-symbols-arrow-back text-lg" />
      <span>All works</span>
    </NuxtLink>

    <header class="mb-10 grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-center">
      <div>
        <p class="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500 dark:text-blue-400">
          {{ project.category }}
        </p>
        <h1 class="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          {{ project.title }}
        </h1>
        <p class="max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
          {{ project.description }}
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="technology in project.tech"
            :key="technology"
            class="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-700 dark:text-blue-300"
          >
            {{ technology }}
          </span>
        </div>
      </div>

      <a
        :href="project.link || undefined"
        :target="project.link ? '_blank' : undefined"
        :rel="project.link ? 'noopener noreferrer' : undefined"
        class="group overflow-hidden rounded-2xl border-2 border-solid border-gray-300 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/40"
      >
        <NuxtImg
          :src="project.image"
          :alt="project.title"
          class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>
    </header>

    <main class="grid gap-6 md:grid-cols-[1fr_1.5fr]">
      <section class="rounded-2xl border border-solid border-gray-200 bg-white/70 p-5 dark:border-gray-800 dark:bg-gray-900/40 md:p-6">
        <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Project details
        </p>
        <h2 class="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          A closer look
        </h2>
        <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {{ project.description }}
        </p>
      </section>

      <section class="rounded-2xl border border-solid border-gray-200 bg-white/70 p-5 dark:border-gray-800 dark:bg-gray-900/40 md:p-6">
        <div class="mb-4 flex items-center justify-between gap-4">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Explore this work
          </h2>
          <div class="i-material-symbols-arrow-outward text-xl text-blue-500" />
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white decoration-none transition-colors hover:bg-blue-600"
          >
            Live project
            <div class="i-material-symbols-open-in-new text-lg" />
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-solid border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 decoration-none transition-colors hover:border-blue-400 hover:text-blue-500 dark:border-gray-700 dark:text-gray-200"
          >
            Source code
            <div class="i-simple-icons-github text-lg" />
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
