<script setup lang="ts">
const categories = projectCategories;
const items = ref(projectItems);

const groupedItems = computed(() => {
  const groups: Record<string, typeof items.value> = {};
  categories.forEach((cat) => {
    groups[cat] = items.value.filter((item) => item.category === cat);
  });
  return groups;
});
</script>

<template>
  <div class="p-4 md:p-6 w-full max-w-7xl mx-auto">
    <div class="mb-10 text-center">
      <h3
        class="text-2xl md:text-3xl font-bold text-gray-100 inline-block relative border-b-2 border-blue-400 pb-2"
      >
        Past Works
      </h3>
    </div>

    <template v-for="category in categories" :key="category">
      <div class="mb-14">
        <h4
          class="text-xl md:text-2xl font-semibold text-gray-200 mb-6 pl-4 border-l-4 border-blue-500"
        >
          {{ category }}
        </h4>

        <div
          v-if="groupedItems[category] && groupedItems[category].length > 0"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <ArchiveCard
            v-for="item in groupedItems[category]"
            :id="item.id"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :tech="item.tech"
            :image="item.image"
            :link="item.link"
            :github="item.github"
          />
        </div>
        <div v-else class="text-gray-500 italic pl-4">
          No projects available in this section yet.
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
