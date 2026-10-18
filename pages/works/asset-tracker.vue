<script setup lang="ts">
import { projectItems } from "~/utils/worksData";

const project = projectItems.find((item) => item.slug === "asset-tracker");

useHead({ title: "Asset Tracker - Soe Aung" });
</script>

<template>
  <WorkCaseStudy v-if="project" :project="project" />
</template>
