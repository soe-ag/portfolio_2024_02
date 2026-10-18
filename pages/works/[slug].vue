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
  <WorkCaseStudy v-if="project" :project="project" />
</template>
