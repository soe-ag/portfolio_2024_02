<script setup lang="ts">
import { projectItems } from "~/utils/worksData";

const project = projectItems.find((item) => item.slug === "movie-db");

useHead({ title: "Personalized Movie Database - Soe Aung" });
</script>

<template>
  <WorkCaseStudy v-if="project" :project="project" />
</template>
