<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    category: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
    github: string;
    caseStudy: {
      overview: string;
      contributions: string;
      decisions: string;
    };
  };
}>();
</script>

<template>
  <article class="mx-auto w-full max-w-5xl px-5 pb-8 pt-3 text-gray-700 dark:text-gray-300 md:px-8 md:pb-12 md:pt-5">
    <NuxtLink
      to="/works"
      class="mb-3 inline-flex items-center gap-2 text-sm text-blue-500 decoration-none transition-colors hover:text-blue-300"
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
        <div class="flex flex-wrap gap-2">
          <span
            v-for="technology in project.tech"
            :key="technology"
            class="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-700 dark:text-blue-300"
          >
            {{ technology }}
          </span>
        </div>
      </div>

      <section aria-labelledby="demo-heading" class="overflow-hidden rounded-2xl border border-solid border-gray-200 bg-white/70 dark:border-gray-800 dark:bg-gray-900/40">
        <h2 id="demo-heading" class="px-4 pt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Demo</h2>
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group block overflow-hidden"
        >
          <NuxtImg
            :src="project.image"
            :alt="`${project.title} screenshot`"
            class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
        <NuxtImg
          v-else
          :src="project.image"
          :alt="`${project.title} screenshot`"
          class="aspect-video w-full object-cover"
        />
        <div class="flex flex-wrap gap-3 p-4">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white decoration-none transition-colors hover:bg-blue-600"
          >
            Live demo
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
    </header>

    <div class="grid gap-5 md:grid-cols-2">
      <section class="rounded-2xl border border-solid border-gray-200 bg-white/70 p-5 dark:border-gray-800 dark:bg-gray-900/40 md:p-6">
        <h2 class="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Overview</h2>
        <p class="text-sm leading-relaxed">{{ project.caseStudy.overview }}</p>
      </section>
      <section class="rounded-2xl border border-solid border-gray-200 bg-white/70 p-5 dark:border-gray-800 dark:bg-gray-900/40 md:p-6">
        <h2 class="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Contributions</h2>
        <p class="text-sm leading-relaxed">{{ project.caseStudy.contributions }}</p>
      </section>
      <section class="rounded-2xl border border-solid border-gray-200 bg-white/70 p-5 dark:border-gray-800 dark:bg-gray-900/40 md:col-span-2 md:p-6">
        <h2 class="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">Technical Decisions</h2>
        <p class="text-sm leading-relaxed">{{ project.caseStudy.decisions }}</p>
      </section>
    </div>
  </article>
</template>
