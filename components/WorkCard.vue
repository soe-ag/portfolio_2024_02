//not used

<script setup lang="ts">
defineProps<{
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}>();
</script>

<template>
  <div
    class="flex flex-col sm:flex-row gap-4 justify-evenly items-center text-gray-300 relative"
  >
    <!-- <div
      class="absolute b-t-1 b-l-1 b-solid b-b-0 b-r-0 b-blue-400 top-0 left-0 w-4 h-4"
    /> -->
    <div class="w-full sm:w-60% text-center sm:text-left">
      <div class="mb-2 flex gap-2 items-center max-sm:justify-center">
        <NuxtLink
          class="decoration-none text-gray-200 hover:text-blue-400 font-semibold"
          :to="link"
        >
          <p class="">{{ title }}</p>
        </NuxtLink>
        <!-- <div class="i-material-symbols-open-in-new hover:cursor-pointer"></div> -->
      </div>
      <p class="text-gray-400 text-sm lg:text-base">
        {{ description }}
      </p>
    </div>
    <NuxtLink class="" :to="link">
      <NuxtImg
        :src="image"
        class="m-auto rounded-2 b-2 b-solid w-50 lg:w-55 xl:w-60 hover:b-blue-400 b-gray-600 hover:cursor-pointer"
      />
    </NuxtLink>
    <!-- <div
      class="absolute b-t-0 b-l-0 b-solid b-b-1 b-r-1 b-blue-400 bottom-0 right-0 w-4 h-4"
    /> -->
  </div>
</template>
